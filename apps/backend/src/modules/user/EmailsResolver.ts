import { Arg, Authorized, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { randomBytes } from "crypto";
import { MyContext } from "@types";
import { APP_NAME } from "@consts";
import moment from "moment";
import { xprisma } from "@prisma/prisma";
import { EmailService, AccountVerificationEmail } from "@repo/emails";
import { GraphQLEmailAddress } from "graphql-scalars";
import jwt from "jsonwebtoken";

@ObjectType()
export class SendVerificationEmailResponse {
   @Field(() => Boolean)
   success: boolean = false;

   @Field(() => String, { nullable: true })
   error?: string;
}

@ObjectType()
export class VerifyEmailResponse extends SendVerificationEmailResponse {
}

@ObjectType()
export class SignUpWithEmailCodeResponse extends SendVerificationEmailResponse {
}

@Resolver()
export class EmailsResolver {

   @Mutation(() => SignUpWithEmailCodeResponse)
   public async signUpWithEmailCode(
      @Ctx() { prisma, req }: MyContext,
      @Arg(`email`, of => GraphQLEmailAddress) email: string): Promise<SignUpWithEmailCodeResponse> {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
         expiresIn: "15m",
      });
      const emailService = new EmailService();
      let magicLink = `${req.headers.origin}/api/verify?token=${encodeURIComponent(token)}`;

      // Send the actual confirmation e-mail
      const response = await emailService.sendMail({
         to: email,
         html: `Click on this link to log in: ${magicLink}`,
         subject: `${APP_NAME} | Your Magic Link`,
      });

      return response.success ? { success: true } : { success: false, error: response.error };
   }

   @Mutation(() => SendVerificationEmailResponse)
   @Authorized()
   async sendVerificationEmail(@Ctx() { prisma, userId }: MyContext): Promise<SendVerificationEmailResponse> {
      if (!userId) return { success: false };

      const token = randomBytes(32).toString(`hex`);
      const verificationToken = await prisma.verificationToken.create({
         data: {
            identifier: crypto.randomUUID(),
            expires: moment(new Date()).add(1, `day`).toDate(),
            token,
         },
      });

      let user = await prisma.user.findUnique({
         where: { id: userId },
      });

      await prisma.user.update({
         where: { id: user!.id },
         data: {
            metadata: {
               ...(user?.metadata || {}),
               verificationToken: verificationToken.identifier,
            },
         },
      });

      const emailService = new EmailService();

      // Send the actual confirmation e-mail
      const response = await emailService.sendMail({
         to: user!.email,
         react: AccountVerificationEmail({
            verificationToken: verificationToken.token,
            confirmationUrl: `${process.env.BASE_URL}/api/email/verification/verify?token=${verificationToken.token}`,
            appName: APP_NAME,
            username: user!.name!,
         }),
         subject: `${APP_NAME} | Verify your e-mail address`,
      });

      if (response.success) {
         return { success: true };
      } else {
         return { success: false, error: response.error };
      }
   }

   @Mutation(() => VerifyEmailResponse)
   @Authorized()
   async verifyEmail(@Ctx() { prisma, userId, req }: MyContext): Promise<VerifyEmailResponse> {
      if (!userId) return { success: false };

      const params = new URL(req.url!).searchParams;

      const token = params.get(`token`);
      if (!token) return { success: false, error: `Token does not exist.` };

      const dbToken = await prisma.verificationToken.findFirst({
         where: {
            token,
            expires: {
               gte: moment(new Date()).toDate(),
            },
         },
      });
      if (!dbToken) return { success: false, error: `Token does not exist.` };

      let user = await prisma.user.findUnique({
         where: { id: userId },
      });

      if (!user || user.metadata?.verificationToken !== dbToken.identifier) {
         return { success: false, error: `Invalid token.` };
      }

      let [newUser, newToken] = await xprisma.$transaction([
         xprisma.user.update({
            where: { id: user.id },
            data: {
               metadata: { ...(user.metadata || {}), verificationToken: null },
               emailVerified: new Date(),
            },
         }),
         xprisma.verificationToken.delete({
            where: {
               identifier_token: {
                  identifier: dbToken.identifier,
                  token: dbToken.token,
               },
            },
         }),
      ]);

      return { success: true };
   }
}