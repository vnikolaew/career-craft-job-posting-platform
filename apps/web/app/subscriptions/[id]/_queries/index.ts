"use server";

import { client } from "@/providers/apollo/client";
import { gql } from "@/__generated__";
import { headers } from "next/headers";
import { ME_QUERY } from "@/components/Navbar";
import { ApolloError } from "@apollo/client";

const GET_SUBSCRIPTION_BY_ID_QUERY = gql(/* GraphQL */`
    query GetSubscriptionByIdQuery($subscriptionId: String!, $meId: String!) {
        jobListingSubscription(where: { id: $subscriptionId, user_id: {equals: $meId} }) {
            id
            company_id
            user_id
            metadata
            notification_frequency
            location
            level
            work_from
            type
            languages
            parameters
            keywords
            createdAt
            updatedAt
        }}
`);

export async function getSubscriptionById(id: string) {
   let context = { headers: { Cookie: headers().get(`cookie`) } };
   let { data: me } = await client.query({
      query: ME_QUERY, context,
   });

   try {
      let {data, errors} = await client.query({
         query: GET_SUBSCRIPTION_BY_ID_QUERY,
         context,
         variables: { getSubscriptionById: id, meId: me?.me?.id },
      });
      return data?.jobListingSubscription;

   } catch (err) {
      if(err instanceof ApolloError) {
         console.log(err.cause?.extensions?.code);
      }
      return null;
   }
}