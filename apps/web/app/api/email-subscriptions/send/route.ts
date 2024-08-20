import { gql } from "@/__generated__";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

export const runtime = "edge";

const GET_ALL_JOB_LISTING_SUBSCRIPTIONS_QUERY = gql(/* GraphQL */`
   query GetMySubscriptions($input: GetSubscriptionsInput!) {
       jobListingSubscriptions {
       }
      
   } 
    
`);

export function GET(request: Request) {
   return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}