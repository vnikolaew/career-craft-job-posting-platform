"use server";

import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";

const GET_COMPANY_JOB_LISTING = gql(/* GraphQL */`
    query GetCompanyJob($id: String!) {
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
            companyId
            createdAt
            updatedAt
        }
    }
`);

export async function getCompanyJob({ id }: { id: string }) {
   const jobListing = await client.query({
      query: GET_COMPANY_JOB_LISTING,
      variables: {
         id,
      },
   });

   return jobListing;

}