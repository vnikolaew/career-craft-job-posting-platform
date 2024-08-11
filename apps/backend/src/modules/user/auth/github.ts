import express from "express";
import { generateState, OAuth2RequestError } from "arctic";
import { getUserCookie, github, lucia } from "@lib/auth";
import { parseCookies, serializeCookie } from "oslo/cookie";
import { xprisma } from "@prisma/prisma";

export const githubLoginRouter = express.Router();

githubLoginRouter.get(`/`, async (_, res) => {
   const state = generateState();
   const url = await github.createAuthorizationURL(state);

   console.log({ headersSet: res.headersSent, url });

   res
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
               account: {
                  provider: `github`,
               },
            }],
         },
      });

      if (existingUser) {
         const session = await lucia.createSession(existingUser.id, {});
         return res
            .appendHeader("Set-Cookie", lucia.createSessionCookie(session.id).serialize())
            .redirect("/");
      }

      let user = await xprisma.user.create({
         data: {
            name: githubUser.login,
            emailVerified: true,
            image: githubUser.avatar_url,
            email: githubUser.email,
            account: {
               create: {
                  type: `github`,
                  provider: `github`,
                  providerAccountId: githubUser.id.toString(),
                  access_token: tokens.accessToken
               }
            },
            configuration: {
               create: {
                  sound_click_sound: null,
                  sound_error_sound: null,
                  language: `English`,
               },
            },
            experience: {
               create: {
                  level: 1,
                  points: 0,
                  metadata: {},
               },
            },
         },
      });

      const cookie = await getUserCookie(user)

      return res.appendHeader("Set-Cookie", cookie).redirect("/");
   } catch (e) {
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
