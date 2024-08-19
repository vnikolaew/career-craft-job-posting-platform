"use server";

import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";
import { cache } from "react";

const GET_COMPANY_JOB_LISTING = gql(/* GraphQL */`
    query GetJobListing($id: String!) {
        getJobListing(where: { id: $id }) {
            id
            name
            description_raw
            external_application_url
            level
            work_from
            type
            location
            languages
            parameters
            keywords
            company_id
            createdAt
            updatedAt
            company {
                id
                email
                name
                brand_image_url
                banner_image_url
                companyCategories {
                    id
                    name
                    description
                }
                worldwide_info {
                    employeeCount
                    headquarters
                    locations
                    founded
                }
                _count {
                    listings
                }
            }
        }
    }
`);

export const getCompanyJob = cache(async ({ id }: { id: string }) => {
   const {data} = await client.query({
      query: GET_COMPANY_JOB_LISTING,
      variables: {
         id,
      },
   });

   return data?.getJobListing;
})