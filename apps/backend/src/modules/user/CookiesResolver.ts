import { Arg, Authorized, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";
import { MyContext } from "@types";
import { getUserCookieConsentCookie } from "@lib/auth";

@InputType()
export class UpdateCookiePreferencesInput {
   @Field(of => Boolean)
   public Necessary: boolean;

   @Field(of => Boolean)
   public Statistics: boolean;

   @Field(of => Boolean)
   public Functionality: boolean;

   @Field(of => Boolean)
   public Marketing: boolean;
}

@Resolver()
export class CookiesResolver {

   @Mutation(of => Boolean, { nullable: false })
   @Authorized()
   public async acceptAllCookies(@Ctx() { prisma, userId, res }: MyContext): Promise<boolean> {
      let user = await prisma.user.findUnique({
         where: { id: userId },
      });
      if (!user) return false;

      user = await prisma.user.update({
         where: {
            id: userId,
         },
         data: {
            metadata: {
               ...(user.metadata as Record<string, any>),
               "cookie-consent": true,
               "cookie-preferences": {
                  Necessary: true,
                  Statistics: true,
                  Functionality: true,
                  Marketing: true,
               },
            },
         },
      });

      const consentCookie = await getUserCookieConsentCookie(true);
      res.appendHeader("Set-Cookie", consentCookie);

      return true;
   }


   @Mutation(of => Boolean, { nullable: false })
   @Authorized()
   public async declineAllCookies(@Ctx() { prisma, userId, res }: MyContext): Promise<boolean> {
      const user = await prisma.user.findFirst({
         where: { id: userId },
      });
      if (!user) return false;

      await prisma.user.update({
         where: {
            id: userId,
         },
         data: {
            metadata: {
               ...(user.metadata as Record<string, any>),
               "cookie-consent": false,
            },
         },
      });

      const consentCookie = await getUserCookieConsentCookie(false);
      res.appendHeader("Set-Cookie", consentCookie);

      return true;
   }

   @Mutation(of => Boolean, { nullable: false })
   @Authorized()
   public async updateCookiePreferences(
      @Ctx() { prisma, userId }: MyContext,
      @Arg(`input`, of => UpdateCookiePreferencesInput, { nullable: false }) preferencesInput: UpdateCookiePreferencesInput): Promise<boolean> {
      const user = await prisma.user.findUnique({
         where: { id: userId },
      });
      if (!user) return false;

      await prisma.user.update({
         where: {
            id: userId,
         },
         data: {
            metadata: {
               ...(user.metadata as Record<string, any>),
               "cookie-preferences": preferencesInput,
               "cookie-consent": true,
            },
         },
      });

      return true;
   }
}