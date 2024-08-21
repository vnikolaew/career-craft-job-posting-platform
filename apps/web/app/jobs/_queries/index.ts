"use server";

import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";
import { headers } from "next/headers";
import { JobListingWhereInput } from "@/__generated__/graphql";

export interface GetJobListingsFilter {
   category?: string;
}

const GET_JOB_LISTINGS_QUERY = gql(/* GraphQL */`
    query GetJobListingsWithFilter($filter: JobListingWhereInput!) {
        jobListings(where: $filter) {
            id
            name
            company_id
            createdAt
            type
            work_from
            parameters
            keywords
            level
            isSaved
            languages
            location
            description_raw
            external_application_url
            categories {
                category_id
            }
            company {
                id
                name
                email
                brand_image_url
            }
        }

    }

`);

export async function getJobListings(filter: GetJobListingsFilter) {
   let cookie = headers().get("cookie")!;

   let inputFilter: JobListingWhereInput = {};
   if (filter.category?.length) {
      inputFilter = {
         categories: {
            some: { category: { is: { name: { equals: filter.category, mode: `insensitive` } } } },
         },
      };
   }

   const { data } = await client.authenticatedQuery(cookie, {
      query: GET_JOB_LISTINGS_QUERY,
      variables: { filter: inputFilter },
   });

   return data.jobListings!;
}