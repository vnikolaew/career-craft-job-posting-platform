import { Arg, Authorized, Ctx, Field, Int, Mutation, ObjectType, Resolver } from "type-graphql";
import crypto, { randomBytes } from "crypto";
import { MyContext } from "@types";
import { User } from "@generated/models/User";
import { APP_HOST_NAME, APP_NAME, COMPANY_DETAILS } from "@consts";
import moment from "moment";
import { xprisma } from "@prisma/prisma";
import { EmailService, AccountVerificationEmail } from "@repo/emails";
import { EmailAddress, StringP } from "@infrastructure/decorators";
import { getUserCookie } from "@lib/auth";
import { CONSTS } from "@modules/user/consts";


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
   @Field(of => Int, { nullable: true })
   code?: number;

   @Field(of => String, { nullable: true })
   identifier?: string;

   @Field(of => Date, { nullable: true })
   expires?: Date;
}

@Resolver()
export class EmailsResolver {

   private generateEmailCode() {
      return Math.floor(100000 + Math.random() * 900000);
   }

   @Mutation(() => User, {nullable: true})
   public async signInWithEmailCode(
      @Ctx() { prisma, res, pubSub }: MyContext,
      @Arg(`code`, of => Int) code: number,
      @EmailAddress(`email`) email: string,
      @StringP(`identifier`) identifier: string,
   ): Promise<User> {
      const token = await prisma.verificationToken.findUnique({
         where: {
            identifier_token: {
               identifier,
               token: code.toString(10),
            },
            expires: {
               gte: moment().toDate(),
            },
         },
      });
      if (!token) return null;

      // Sign in user:
      let user = await prisma.user.signIn({
         email: email,
         password: ``,
         username: ``,
      });

      if (!user) return null;

      const serializedCookie = await getUserCookie(user);
      res.appendHeader(`Set-Cookie`, serializedCookie);

      await pubSub?.publish(`USER_SIGNED_UP`, user);
      return user;
   }

   @Mutation(() => User)
   public async signUpWithEmailCode(
      @Ctx() { prisma, res, pubSub }: MyContext,
      @Arg(`code`, of => Int) code: number,
      @EmailAddress(`email`) email: string,
      @StringP(`firstName`) firstName: string,
      @StringP(`lastName`) lastName: string,
      @StringP(`identifier`) identifier: string,
   ): Promise<User> {
      const token = await prisma.verificationToken.findUnique({
         where: {
            identifier_token: {
               identifier,
               token: code.toString(10),
            },
            expires: {
               gte: moment().toDate(),
            },
         },
      });
      if (!token) return null;

      // Create a new user:
      let user = await prisma.user.create({
         data: {
            email,
            password: null,
            name: ``,
            first_name: firstName,
            last_name: lastName,
            metadata: {},
            image: CONSTS.DEFAULT_USER_AVATAR_URL,
         },
      });

      const serializedCookie = await getUserCookie(user);
      res.appendHeader(`Set-Cookie`, serializedCookie);

      await pubSub?.publish(`USER_SIGNED_UP`, user);
      return user;
   }

   @Mutation(() => SignUpWithEmailCodeResponse)
   public async generateSignUpEmailCode(
      @Ctx() { prisma, req }: MyContext,
      @EmailAddress() email: string): Promise<SignUpWithEmailCodeResponse> {
      let token = await prisma.verificationToken.create({
         data: {
            token: this.generateEmailCode().toString(10),
            expires: moment().add(10, `minutes`).toDate(),
            identifier: crypto.randomUUID(),
         },
      });
      const emailService = new EmailService();

      const response = await emailService.sendMail({
         to: email,
         html: `
           <h2>Welcome to ${APP_NAME}!</h2>
    <p>Thank you for signing up with us.</p>
    <p>To complete your registration, please use the verification code below:</p>
    <h1 style="color: #007bff;">${token.token}</h1>
    <p>This code is valid for the next 10 minutes. Please enter it in the app to verify your email address.</p>
    <p>If you did not request this code, please ignore this email or <a href="mailto:support@${APP_HOST_NAME}.com">contact our support team</a>.</p>
    <p>Best regards,</p>
    <p>The ${APP_NAME} Team</p>
    <hr>
    <p>${APP_NAME}<br>
    ${COMPANY_DETAILS.streetAddress}<br>
    <a href="[Company Website]">www.${APP_HOST_NAME}.com</a></p>
         `,
         subject: `${APP_NAME} | Your Verification Code`,
      });

      return response.success ? { success: true, ...token, code: token.token } : {
         success: false,
         error: response.error,
      };
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