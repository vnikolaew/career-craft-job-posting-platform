import { JobListingSubscriptionRelationsResolver } from "@generated/resolvers/relations";
import { JobListingSubscription } from "@generated/models/JobListingSubscription";
import {
   JobListingSubscriptionNotificationFrequency,

} from "@generated/enums";
import {
   Arg,
   Authorized,
   Ctx,
   Mutation, Query,
   Resolver,
} from "type-graphql";
import { MyContext } from "@types";
import { StringP } from "@infrastructure/decorators";
import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { EmailService } from "@repo/emails";
import { APP_HOST_NAME, APP_NAME, COMPANY_DETAILS } from "@consts";
import { GetSubscriptionsInput, SubscribeToJobListingsInput, DeleteAllSubscriptionsResponse } from "./models";

@Resolver(of => JobListingSubscription)
export class SubscriptionsResolver extends JobListingSubscriptionRelationsResolver {

   private getRedirectLink(key: string, origin: string, subscriptionId: string) {
      return `${origin}/subscriptions/confirm?key=${encodeURIComponent(key)}&subscriptionId=${encodeURIComponent(subscriptionId)}`;
   }

   @Mutation(of => JobListingSubscription, { nullable: true })
   @Authorized()
   async subscribeToCompanyListings(
      @Arg("input", of => SubscribeToJobListingsInput) {
         parameters,
         companyId,
         frequency,
         employmentType,
         categories,
         languages,
         level,
         workFromHome,
         location,
         keywords,
      }: SubscribeToJobListingsInput,
      @Ctx() { prisma, userId, req }: MyContext,
   ): Promise<JobListingSubscription> {

      let existing = await prisma.jobListingSubscription.create({
         data: {
            user_id: userId,
            company_id: companyId,
            notification_frequency: frequency as (JobListingSubscriptionNotificationFrequency | null),
            metadata: {},
            parameters: parameters ?? {},
            level,
            type: employmentType,
            categories: {
               connect: categories,
            },
            languages,
            work_from: workFromHome,
            location,
            keywords,
         },
      });

      const subscriptionKey = jwt.sign({ userId, subscriptionId: existing.id },
         process.env.JWT_SECRET, { expiresIn: "1h" });

      await prisma.jobListingSubscription.update({
         where: { id: existing.id },
         // @ts-ignore
         data: { metadata: { ...(existing.metadata ?? {}), subscriptionKey } },
      });

      let user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) return null!;

      let company;
      if (companyId?.length) {
         company = await prisma.company.findUnique({ where: { id: companyId } });
      }

      const emailService = new EmailService();
      await emailService.sendMail({
         to: user.email,
         html: `
   <p>Hello,</p>
    <p>Thank you for requesting email notifications for new job listings ${company ? `from ${company.name}` : ""}.</p>
    <p>To receive the subscription, you need to confirm the request using this link:</p>
    <p><a href="${this.getRedirectLink(subscriptionKey, req.headers.origin ?? req.headers.referer, existing.id)}">Confirm your request here</a></p>
    <p>(In case this request was not made by you, do not confirm the request.)</p> 
    <p>Best regards,</p>
    <p>The ${APP_NAME} Team</p>
    <hr>
    <p>${APP_NAME}<br>
    ${COMPANY_DETAILS.streetAddress}<br>
    <a href="www.${APP_HOST_NAME}.com">www.${APP_HOST_NAME}.com</a></p>
         `,
         subject: `Please confirm your subscription request for new listings on ${APP_HOST_NAME}`,
      });

      return existing as JobListingSubscription;
   }

   @Mutation(of => Boolean, { nullable: false })
   @Authorized()
   async unSubscribeToJobListings(
      @StringP("subscriptionId") subscriptionId: string,
      @Ctx() { prisma }: MyContext,
   ): Promise<boolean> {
      let existing = await prisma.jobListingSubscription.findUnique({
         where: { id: subscriptionId },
      });
      if (!existing) return false;

      existing = await prisma.jobListingSubscription.delete({
         where: {
            id: existing.id,
         },
      });

      return existing !== null;
   }

   @Mutation(of => JobListingSubscription, { nullable: true })
   @Authorized()
   async confirmJobListingSubscription(
      @StringP("subscriptionId") subscriptionId: string,
      @StringP("subscriptionKey") subscriptionKey: string,
      @Ctx() { prisma, userId }: MyContext,
   ): Promise<JobListingSubscription> {

      const payload = jwt.verify(subscriptionKey, process.env.JWT_SECRET!) as JwtPayload;
      if (!!payload.userId && !!payload.subscriptionId) {
         if (payload.userId !== userId || payload.subscriptionId !== subscriptionId) return null!;
      }

      let existing = await prisma.jobListingSubscription.findFirst({
         where: { user_id: userId, id: subscriptionId },
      });
      if (!existing) return null!;

      await prisma.jobListingSubscription.update({
         where: { id: existing.id },
         data: {
            // @ts-ignore
            metadata: { ...(existing.metadata ?? {}), confirmed: true },
         },
      });


      return existing as JobListingSubscription;
   }

   @Query(of => [JobListingSubscription], { nullable: false })
   @Authorized()
   async mySubscriptions(
      @Arg(`input`, of => GetSubscriptionsInput, { nullable: false }) { skip, limit }: GetSubscriptionsInput,
      @Ctx() { prisma, userId }: MyContext,
   ): Promise<JobListingSubscription[]> {
      let subscriptions = await prisma.jobListingSubscription.findMany({
         where: { user_id: userId },
         take: limit,
         skip,
         include: { company: true, categories: true },
      });
      return subscriptions.map(s => ({ ...s, parameters: s.parameters ?? {} })) as JobListingSubscription[];
   }

   @Mutation(of => DeleteAllSubscriptionsResponse, { nullable: false })
   @Authorized()
   async deleteAllSubscriptions(
      @Ctx() { prisma, userId }: MyContext,
   ): Promise<DeleteAllSubscriptionsResponse> {
      try {
         let { count } = await prisma.jobListingSubscription.deleteMany({
            where: { user_id: userId },
         });

         return { deleted_count: count, success: true };
      } catch (err) {
         return { deleted_count: 0, success: false };
      }
   }
}