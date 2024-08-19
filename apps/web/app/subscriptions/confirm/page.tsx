import React from "react";
import * as jwt from "jsonwebtoken";
import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import { client } from "@/providers/apollo/client";
import { gql } from "@/__generated__";
import { headers } from "next/headers";
import { DefaultContext } from "@apollo/client";
import Link from "next/link";
import { MailCheck } from "lucide-react";

export interface PageProps {
   searchParams: { key?: string, subscriptionId?: string };
}

const ME_QUERY = gql(/* GraphQL */`
    query MeQuerySlim {
        me {
            id
            name
            email
        }
    }
`);

const GET_SUBSCRIPTION_BY_ID = gql(/* GraphQL */`
    query GetSubscriptionById($subscriptionId: String!) {
        jobListingSubscription(where: { id: $subscriptionId}) {
            id
            user_id
            company_id
            company {
                id
                name
            }
            createdAt
            metadata
        }
    }
`);

const CONFIRM_SUBSCRIPTION = gql(/* GraphQL */`
    mutation ConfirmSubscription($key: String!, $subscriptionId: String!) {
        confirmJobListingSubscription(subscriptionKey: $key, subscriptionId: $subscriptionId) {
            id
            user_id
            createdAt
            metadata
        }
    }
`);

const Page = async ({ searchParams }: PageProps) => {
   const subscriptionKey = decodeURIComponent(searchParams?.key ?? ``);
   const subscriptionId = decodeURIComponent(searchParams?.subscriptionId ?? ``);

   if (!subscriptionKey?.length) {
      return (
         <div className={`text-red-500 w-full flex flex-col items-center justify-center`}>Error: subscription key not
            provided.</div>
      );
   }

   if (!subscriptionId?.length) {
      return (
         <div className={`text-red-500 w-full flex flex-col items-center`}>
            Error: subscription id not provided.
         </div>
      );
   }

   let cookie = headers().get("cookie");
   let context: DefaultContext = { headers: { Cookie: cookie } };

   const { data: me } = await client.query({
      query: ME_QUERY,
      context,
   });
   if (!me?.me?.id) return (
      <div>
         Error: Unauthorized.
      </div>
   );

   let payload: JwtPayload = {};
   try {
      payload = jwt.verify(subscriptionKey, process.env.JWT_SECRET!) as JwtPayload;
   } catch (err) {
      if (err instanceof JsonWebTokenError) {
         console.error(`Invalid JWT: ${err.message}`);
      }
   }

   if (!!payload.userId && !!payload.subscriptionId) {
      if (payload.userId !== me?.me?.id || payload.subscriptionId !== subscriptionId || (payload?.exp ?? 0) * 1000 < Date.now()) {
         return (
            <div className={`text-red-500`}>Error</div>
         );
      }
   }

   const { data, errors } = await client.mutate({
      mutation: CONFIRM_SUBSCRIPTION,
      variables: { key: subscriptionKey, subscriptionId },
      errorPolicy: `all`,
      context,
   });

   if (!data?.confirmJobListingSubscription?.id || errors?.length) {
      return (
         <div className={`text-red-500`}>Errors occurred: {errors?.map(e => e.message).join(`, `)}</div>
      );
   }

   let subscription = await client.query({
      query: GET_SUBSCRIPTION_BY_ID,
      variables: { subscriptionId },
      context,
   });

   return (
      <section className={`flex flex-col items-center gap-4 mt-24 justify-center !min-h-full !w-fit !mx-auto`}>
         <div className={`flex items-center gap-8 mt-12`}>
            <MailCheck className={`text-green-600`} size={40} />
            <h1 className={`text-neutral-700 text-xl`}>
               Subscription for <b>{subscription.data.jobListingSubscription?.company?.name}</b> confirmed!
            </h1>
         </div>
         <div className={`divider !mt-0`} />
         <Link className={`link link-hover text-green-600 text-xl mt-12 drop-shadow-sm`}
               href={`/company/${subscription?.data?.jobListingSubscription?.company_id}`}>
            Go back to the company's profile page &rarr;
         </Link>
      </section>
   );
};

export default Page;