import { gql } from "@/__generated__";
import { headers } from "next/headers";
import { client } from "@/providers/apollo/client";
import moment from "moment/moment";

const TOTAL_JOB_LISTINGS_COUNT_QUERY = gql(/* GraphQL */`
    query TotalJobListingsCountQuery {
        jobListings {
            id
            name
            createdAt
        }
        me {
            id
            name
            first_name
            last_name
            email
            image
            metadata
            cookieConsent
            cookiePreferences {
                functionality
                marketing
                necessary
                statistics
            }
            saved_listings {
                id
                listing_id
                metadata
                createdAt
            }
        }
    }
`);

export async function getHomePageStats() {
   const { data: totalJobListingsCount } = await client.authenticatedQuery(
      headers().get(`cookie`)!, {
         query: TOTAL_JOB_LISTINGS_COUNT_QUERY,
      });

   const jobListingsToday = totalJobListingsCount
      .jobListings
      ?.filter(l => moment(l.createdAt).isValid() && moment(l.createdAt).isSame(moment(), `day`))
      .length;

   return { totalJobListingsCount, jobListingsToday, signedIn: !!totalJobListingsCount?.me?.me };
}