"use server";

import { client } from "@/providers/apollo/client";
import { gql } from "@/__generated__";
import { GetMySubscriptionsQuery } from "@/__generated__/graphql";
import { ApolloError } from "@apollo/client";
import { headers } from "next/headers";

const GET_MY_SUBSCRIPTIONS_QUERY = gql(/* GraphQL */`
    query GetMySubscriptions($input: GetSubscriptionsInput!) {
        mySubscriptions(input: $input) {
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
            description
            company {
                id
                name
                email
            }
            categories {
                id
                name
                description
            }
            
        }
    }
`);

export async function getMySubscriptions(): Promise<GetMySubscriptionsQuery["mySubscriptions"] | null> {
   try {
      let cookie = headers().get(`cookie`)!;

      let { data, errors } = await client.authenticatedQuery(
         cookie,
         {
            query: GET_MY_SUBSCRIPTIONS_QUERY,
            variables: { input: { limit: 10 } },
         });

      if (errors) console.log({ errors });
      else console.log(data.mySubscriptions);
      return data?.mySubscriptions;
   } catch (err) {
      console.error({ err });
      if (err instanceof ApolloError) {
         console.log(err.cause?.extensions?.code);
      }
      return null;
   }

}