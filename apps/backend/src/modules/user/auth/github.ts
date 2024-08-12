import express from "express";
import { generateState, OAuth2RequestError } from "arctic";
import { getUserCookie, github, lucia } from "@lib/auth";
import { parseCookies, serializeCookie } from "oslo/cookie";
import { xprisma } from "@prisma/prisma";

export const githubLoginRouter = express.Router();

githubLoginRouter.get(`/`, async (req, res) => {
   const redirect_url = req.query.redirect_url?.toString() ?? ``;

   const state = generateState();
   const url = await github.createAuthorizationURL(state);

   console.log({ redirect_url });

   res
      .appendHeader(
         "Set-Cookie",
         serializeCookie("github_oauth_redirect_url", encodeURIComponent(redirect_url), {
            path: "/",
            domain: `.apollo-next.com`,
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 60 * 10,
            sameSite: "lax",
         }),
      )
      .appendHeader(
         "Set-Cookie",
         serializeCookie("github_oauth_state", state, {
            path: "/",
            domain: `.apollo-next.com`,
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 60 * 10,
            sameSite: "lax",
         }),
      )
      .redirect(url.toString());
});

githubLoginRouter.get("/callback", async (req, res) => {
   const code = req.query.code?.toString() ?? null;
   const state = req.query.state?.toString() ?? null;

   const storedState = parseCookies(req.headers.cookie ?? "").get("github_oauth_state") ?? null;
   const github_oauth_redirect_url = parseCookies(req.headers.cookie ?? "").get("github_oauth_redirect_url") ?? null;

   console.log({ github_oauth_redirect_url: decodeURIComponent(github_oauth_redirect_url) });
   let redirect_url: string
   try {
      redirect_url =  new URL(decodeURIComponent(github_oauth_redirect_url)).toString();
   } catch (err) {
      redirect_url = `/`
   }

   if (!code || !state || !storedState || state !== storedState) {
      console.log(code, state, storedState);
      res.status(400).end();
      return;
   }

   try {
      const tokens = await github.validateAuthorizationCode(code);
      const githubUserResponse = await fetch("https://api.github.com/user", {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
         },
      });
      const githubUser: GitHubUser = await githubUserResponse.json();

      const existingUser = await xprisma.user.findFirst({
         where: {
            AND: [{
               name: githubUser.login,
            }, {
               accounts: {
                  some: {
                     provider: `github`,
                  },
               },
            }],
         },
      });

      if (existingUser) {
         console.log(`User ${githubUser.login} already exists. Email: ${githubUser.email}.`);

         const cookie = await getUserCookie(existingUser);
         return res
            .appendHeader("Set-Cookie", cookie)
            .redirect(redirect_url);
      }

      console.log({ githubUser });
      let user = await xprisma.user.upsert({
         where: { email: githubUser.email },
         create: {
            name: githubUser.login,
            emailVerified: new Date(),
            image: githubUser.avatar_url,
            email: githubUser.email,
            accounts: {
               connectOrCreate: {
                  where: {
                     provider_providerAccountId: {
                        provider: `github`,
                        providerAccountId: githubUser.id.toString(),
                     },
                  },
                  create: {
                     type: `github`,
                     provider: `github`,
                     providerAccountId: githubUser.id.toString(),
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
                        provider: `github`,
                        providerAccountId: githubUser.id.toString(),
                     },
                  },
                  create: {
                     type: `github`,
                     provider: `github`,
                     providerAccountId: githubUser.id.toString(),
                     access_token: tokens.accessToken,
                  },
               },
            },
         },
      });

      const cookie = await getUserCookie(user);

      return res.appendHeader("Set-Cookie", cookie).redirect(redirect_url);
   } catch (e) {
      console.log(`An error occurred during GitHub authentication`, e);
      if (e instanceof OAuth2RequestError && e.message === "bad_verification_code") {
         res.status(400).end();
         return;
      }
      res.status(500).end();
      return;
   }
});

interface GitHubUser {
   login: string;
   id: number;
   node_id: string;
   avatar_url: string;
   gravatar_id: string;
   url: string;
   html_url: string;
   followers_url: string;
   following_url: string;
   gists_url: string;
   starred_url: string;
   subscriptions_url: string;
   organizations_url: string;
   repos_url: string;
   events_url: string;
   received_events_url: string;
   type: string;
   site_admin: boolean;
   name: string;
   company: string;
   blog: string;
   location: string;
   email: string;
   hireable: boolean;
   bio: string;
   twitter_username: string;
   public_repos: number;
   public_gists: number;
   followers: number;
   following: number;
   created_at: string;
   updated_at: string;
   private_gists: number;
   total_private_repos: number;
   owned_private_repos: number;
   disk_usage: number;
   collaborators: number;
   two_factor_authentication: boolean;
   plan: Plan;
}

export interface Plan {
   name: string;
   space: number;
   private_repos: number;
   collaborators: number;
}
