"use server";

import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";
import { headers } from "next/headers";
import {
   FurloughPeriod,
   JobListingEmploymentType,
   JobListingFrom,
   JobListingLevel,
   JobListingWhereInput,
   QueryMode,
} from "@/__generated__/graphql";

export interface GetJobListingsFilter {
   categories?: string[] | string;
}

export interface SearchParams {
   categories?: string[],
   locations?: string[],
   professions?: string[],
   keywords?: string[],
   types?: Lowercase<JobListingEmploymentType>[],
   internship?: boolean,
   noExperience?: boolean,
   remoteInterview?: boolean,
   workFromHome?: boolean,
   levels?: JobListingLevel[],
   from?: JobListingFrom,
   furlough?: FurloughPeriod,
   languages?: string[],
   companyIds?: string[],
   salary?: string;
}

export async function normalizeParams(): Promise<SearchParams | null> {
   const url = headers().get(`referer`);
   if (!url) return null!;

   try {
      let params = new URL(url).searchParams;
      return {
         companyIds: params.getAll(`companyIds`) ?? [],
         categories: params.getAll(`categories`) ?? [],
         locations: params.getAll(`locations`) ?? [],
         professions: params.getAll(`profession`) ?? [],
         keywords: params.getAll(`keywords`) ?? [],
         types: params.getAll(`type`) as Lowercase<JobListingEmploymentType>[] ?? [],
         internship: params.get(`internship`) === `true`,
         noExperience: params.get(`noExperience`) === `true`,
         remoteInterview: params.get(`remoteInterview`) === `true`,
         workFromHome: params.get(`workFromHome`) === `true`,
         levels: params.getAll(`level`) as JobListingLevel[] ?? [],
         from: params.get(`from`) as JobListingFrom ?? undefined,
         languages: params.getAll(`languages`) ?? [],
         salary: params.get(`salary`) ?? undefined,
         furlough: params.get(`furlough`) as FurloughPeriod ?? undefined,
      };
   } catch (err) {
      return null!;
   }
}

const GET_JOB_LISTINGS_QUERY = gql(/* GraphQL */`
    query GetJobListingsWithFilter($filter: JobListingWhereInput!, $categories: [String!]) {
        getMostRelevantCompanies(input: {categories: $categories, limit: 10, skip: 0}) {
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
   if (filter.categories?.length) {
      inputFilter = {
         categories: {
            some: {
               category: {
                  is: {
                     name: {
                        mode: QueryMode.Insensitive,
                        in: Array.isArray(filter.categories)
                           ? filter.categories
                           : [filter.categories ?? ``],
                     },
                  },
               },
            },
         },
      };
   }

   const { data: { jobListings, getMostRelevantCompanies } } =
      await client.authenticatedQuery(cookie, {
         query: GET_JOB_LISTINGS_QUERY,
         variables: {
            filter: inputFilter,
            categories: Array.isArray(filter.categories)
               ? filter.categories
               : [filter.categories ?? ``],
         },
         fetchPolicy: `network-only`,
      });

   return { jobListings, mostRelevantCompanies: getMostRelevantCompanies };
   ;
}