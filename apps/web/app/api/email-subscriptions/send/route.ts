import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";
import { constants } from "node:http2";
import { headers } from "next/headers";
import { SubscriptionMailingService } from "@/app/api/email-subscriptions/send/_services/SubscriptionMailingService";
import { EmailService } from "@repo/emails";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

const GET_ALL_USERS_WITH_SUBSCRIPTIONS_QUERY = gql(/* GraphQL */`
    query GetAllUsersWithSubscriptions {
        getAllUsersWithSubscriptions {
            id
            name
            email
        }
    }

`);

const GET_SUBSCRIPTIONS_JOB_LISTINGS_FOR_USER_QUERY = gql(/* GraphQL */`
    query GetSubscriptionsJobListingsForUser($userId: String!) {
        getSubscriptionsJobListingsForUser(userId: $userId){
            entries {
                listingIds
                subscriptionId
            }
        }
    }
`);

export async function GET(req: Request) {
   let cookie = headers().get(`cookie`)!;

   const { data: users } = await client.authenticatedQuery(cookie, {
      query: GET_ALL_USERS_WITH_SUBSCRIPTIONS_QUERY,
   });

   let mailingService = new SubscriptionMailingService(new EmailService());

   // Now loop through each user and retrieve their subscriptions
   for (let { id: userId, email } of users.getAllUsersWithSubscriptions) {
      const { data: { getSubscriptionsJobListingsForUser: subscriptions } } = await client.authenticatedQuery(cookie, {
         query: GET_SUBSCRIPTIONS_JOB_LISTINGS_FOR_USER_QUERY,
         variables: { userId },
      });

      for (let { listingIds, subscriptionId } of subscriptions.entries ?? []) {
         mailingService
            .sendNewJobListingsToUser(subscriptionId, listingIds, email)
            .then(() => {
               console.log(`Successfully send email for subscription ${subscriptionId} for user ${userId} with email ${email}.`);
            })
            .catch(err => {
               console.error(`An error occurred while sending email for subscription ${subscriptionId} for user ${userId} with email ${email}: `, { error: err });
            });
      }

   }

   return Response.json({ jobSubscriptions: [] }, { status: constants.HTTP_STATUS_OK });
}