"use server";

import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";
import { headers } from "next/headers";
import { JobListingWhereInput, QueryMode } from "@/__generated__/graphql";

export interface GetJobListingsFilter {
   category?: string;
}

const GET_JOB_LISTINGS_QUERY = gql(/* GraphQL */`
    query GetJobListingsWithFilter($filter: JobListingWhereInput!, $category: String) {
        getMostRelevantCompanies(input: {category: $category, limit: 10, skip: 0}) {
            id
            name
            _count {
                listings
                categories
            }
            companyCategories {
                id
                name
            }
            email
            contacts {
                name
                company_bulstat
                contacts {
                    city
                    address
                    phone_number
                }
                email
                phone_number
                address
                website_url
                facebook_url
                twitter_url
                linkedin_url
                youtube_url
            }
        }

        jobListings(where: $filter) {
            id
            name
            company_id
            createdAt
            type
            work_from
            parameters
            parametersTyped {
                from
                furlough
                internship
                remoteInterview
                salary {
                    currency
                    __typename
                    ... on FixedJobListingSalary {
                        value
                    }
                    ... on RangeJobListingSalary {
                        min
                        max
                    }
                }
            }
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
                _count {
                    listings
                }
                companyCategories {
                    id
                    name
                }
                name
                email
                brand_image_url
                local_info {
                    employeeCount
                    locations
                    since
                }
                worldwide_info {
                    locations
                    employeeCount
                    founded
                    headquarters
                }
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
            some: { category: { is: { name: { equals: filter.category, mode: QueryMode.Insensitive } } } },
         },
      };
   }

   const { data: { jobListings, getMostRelevantCompanies } } = await client.authenticatedQuery(cookie, {
      query: GET_JOB_LISTINGS_QUERY,
      variables: { filter: inputFilter, category: filter.category },
       fetchPolicy: `network-only`,
   });

   return { jobListings, mostRelevantCompanies: getMostRelevantCompanies };
   ;
}