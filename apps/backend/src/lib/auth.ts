import { Lucia, TimeSpan } from "lucia";
import { User } from "@generated/models/User";

import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import crypto from "crypto";
import moment from "moment/moment";
import { GitHub, Google } from "arctic";
import { xprisma } from "@prisma/prisma";
import { __IS_HTTPS__ } from "@consts";
import { serializeCookie } from "@modules/user/auth/utils";

export const github = new GitHub(process.env.GH_CLIENT_ID!, process.env.GH_CLIENT_SECRET!);
export const google = new Google(process.env.GOOGLE_ID!, process.env.GOOGLE_SECRET!, `http${__IS_HTTPS__ ? `s` : ``}://api.career-craft.com:4000/login/google/callback`);

const prismaAdapter = new PrismaAdapter(xprisma.session, xprisma.user);

export interface DatabaseUser {
   id: string;
   username: string;
}

export const lucia = new Lucia(prismaAdapter, {
   sessionCookie: {
      attributes: {
         secure: process.env.NODE_ENV === `production`,
         sameSite: `lax`,
         domain: `.career-craft.com`,
      },
   },
   sessionExpiresIn: new TimeSpan(1, `d`),
   getUserAttributes: (attributes) => {
      return {
         // @ts-ignore
         username: attributes.username ?? attributes.name,
         id: attributes.id,
      };
   },
});

declare module "lucia" {
   interface Register {
      Lucia: typeof lucia;
      DatabaseUserAttributes: DatabaseUser;
   }
}

export async function getUserCookie(user: Partial<User>) {
   const session = await lucia.createSession(user!.id!,
      { sessionToken: crypto.randomUUID() }, { sessionId: crypto.randomUUID() });
   const cookie = lucia.createSessionCookie(session.id);

   cookie.attributes.httpOnly = false;
   cookie.attributes.sameSite = `lax`;

   return serializeCookie(cookie.name, cookie.value, cookie.attributes);
}

export async function getUserCookieConsentCookie(cookieConsent: boolean) {
   return serializeCookie(`cookie-consent`, String(cookieConsent), {
      httpOnly: false,
      sameSite: `lax`,
      domain: `.career-craft.com`,
      path: `/`,
      maxAge: 60 * 60 * 24
   });
}
