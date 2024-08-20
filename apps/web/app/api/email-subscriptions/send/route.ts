import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

export const runtime = "edge";

const GET_ALL_JOB_LISTING_SUBSCRIPTIONS_QUERY = gql(/* GraphQL */`
    query GetMySubscriptions {
        jobListingSubscriptions(where: {metadata: {path: ["confirmed"], equals: true}}) {
            id
            user_id
            company_id
            company {
                id
                name
                email
            }
            createdAt
            work_from
            keywords
            type
            parameters
            location
            languages
            level
            notification_frequency
            categories {
                id
                name
            }
            job_categories {
                id
                name
            }
        }
    }
`);

export async function GET(request: Request) {
   const { data: jobSubscriptions } = await client.query({
      query: GET_ALL_JOB_LISTING_SUBSCRIPTIONS_QUERY,
   });

   return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}