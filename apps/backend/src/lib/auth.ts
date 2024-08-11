import { Lucia, TimeSpan } from "lucia";
import { User } from "@generated/models/User";

import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import crypto from "crypto";
import moment from "moment/moment";
import { GitHub } from "arctic";
import { xprisma } from "@prisma/prisma";

export const github = new GitHub(process.env.GH_CLIENT_ID!, process.env.GH_CLIENT_SECRET!);
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
         domain: `.apollo-next.com`,
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

   const serializedCookie = `${cookie.name}=${encodeURIComponent(cookie.value)}; Max-Age=${cookie.attributes.maxAge}; Domain=.apollo-next.com; Expires=${moment().add(cookie.attributes.maxAge, `seconds`).format(`ddd, DD MMM YYYY HH:mm:ss [GMT]`)}; Path=${cookie.attributes.path!}; SameSite=${cookie.attributes.sameSite} ${cookie.attributes.httpOnly ? `;HttpOnly` : ``}`;
   return serializedCookie;
}