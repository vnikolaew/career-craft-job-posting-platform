"use server";

import { client } from "@/providers/apollo/client";
import { gql } from "@/__generated__";
import { headers } from "next/headers";
import { ApolloError } from "@apollo/client";

const ME_QUERY = gql(/* GraphQL */`
    query MeQueryGSById {
        me {
            id
            name
        }
    }
`);

const GET_SUBSCRIPTION_BY_ID_QUERY = gql(/* GraphQL */`
    query GetSubscriptionByIdQuery($subscriptionId: String!, $meId: String!) {
        jobListingSubscription(where: { id: $subscriptionId, user_id: {equals: $meId} }) {
            id
            company_id
            user_id
            user_email
            user {
                id
                name
                email
            }
            categories {
                id
                name
            }
            job_categories {
                id
                name
            }
            metadata
            notification_frequency
            description
            location
            level
            work_from
            type
            languages
            parameters
            keywords
            createdAt
            updatedAt
            company {
                id
                name
            }
        }}
`);

export async function getSubscriptionById(id: string) {
   let cookie = headers().get(`cookie`)!;
   let context = { headers: { Cookie: cookie } };

   let { data: me } = await client.query(
      { query: ME_QUERY, context });

   try {
      let { data, errors } = await client.query(
         {
            query: GET_SUBSCRIPTION_BY_ID_QUERY,
            variables: { subscriptionId: id, meId: me?.me?.id! },
            context
         });
      return data?.jobListingSubscription;
   } catch (err) {
      if (err instanceof ApolloError) {
         console.log(err.cause?.extensions?.code);
      }
      return null;
   }
}