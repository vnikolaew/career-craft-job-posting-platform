import express from "express";
import { OAuth2RequestError, GoogleTokens } from "arctic";
import { getUserCookie, google } from "@lib/auth";
import { parseCookies } from "oslo/cookie";
import { xprisma } from "@prisma/prisma";

export const googleLoginRouter = express.Router();

export const PROVIDER_ID = `google`;

googleLoginRouter.get("/callback", async (req, res) => {
   const code = req.query.code?.toString() ?? null;
   const state = req.query.state?.toString() ?? null;

   let cookies = parseCookies(req.headers.cookie ?? ``)
   const storedState = cookies.get("google_oauth_state") ?? null;
   const github_oauth_redirect_url = cookies.get("google_oauth_redirect_url") ?? null;
   const codeVerifier = cookies.get("google_oauth_code_verifier") ?? null;

   let redirect_url: string
   try {
      redirect_url =  new URL(decodeURIComponent(github_oauth_redirect_url)).toString();
   } catch (err) {
      redirect_url = `/`
   }

   if (!code || !state || !storedState || state !== storedState) {
      res.status(400).end();
      return;
   }

   try {
      const tokens: GoogleTokens = await google.validateAuthorizationCode(code, codeVerifier);
      const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         }
      });
      const googleUser: GoogleUser = await response.json();

      const existingUser = await xprisma.user.findFirst({
         where: {
            AND: [{
               name: googleUser.name,
            }, {
               accounts: {
                  some: {
                     provider: PROVIDER_ID,
                  },
               },
            }],
         },
      });

      if (existingUser) {
         const cookie = await getUserCookie(existingUser);
         return res
            .appendHeader("Set-Cookie", cookie)
            .redirect(redirect_url);
      }

      let user = await xprisma.user.upsert({
         where: { email: googleUser.email },
         create: {
            name: googleUser.name,
            emailVerified: new Date(),
            image: googleUser.picture   ,
            email: googleUser.email,
            accounts: {
               connectOrCreate: {
                  where: {
                     provider_providerAccountId: {
                        provider: PROVIDER_ID,
                        providerAccountId: googleUser.sub.toString(),
                     },
                  },
                  create: {
                     type: PROVIDER_ID,
                     provider: PROVIDER_ID,
                     providerAccountId: googleUser.sub.toString(),
                     access_token: tokens.accessToken,
                  },
               },
            },
         },
         update: {
            accounts: {
               connectOrCreate: {
                  where: {
                     provider_providerAccountId: {
                        provider: PROVIDER_ID,
                        providerAccountId:googleUser.sub.toString(),
                     },
                  },
                  create: {
                     type: PROVIDER_ID,
                     provider: PROVIDER_ID,
                     providerAccountId: googleUser.sub.toString(),
                     access_token: tokens.accessToken,
                  },
               },
            },
         },
      });

      const cookie = await getUserCookie(user);
      return res.appendHeader("Set-Cookie", cookie).redirect(redirect_url);
   } catch (e) {
      console.log(`An error occurred during Google authentication`, e);

      if (e instanceof OAuth2RequestError && e.message === "bad_verification_code") {
         res.status(400).end();
         return;
      }
      res.status(500).end();
      return;
   }
});


export interface GoogleUser {
   sub: string
   name: string
   given_name: string
   family_name: string
   picture: string
   email: string
   email_verified: boolean
}