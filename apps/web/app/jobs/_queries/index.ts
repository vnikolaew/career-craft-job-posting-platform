"use server";

import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";
import { headers } from "next/headers";
import {
   FurloughPeriod,
   JobListingEmploymentType,
   JobListingFrom,
   JobListingLevel,
   SearchJobListingsInput,
} from "@/__generated__/graphql";

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

export interface GetJobListingsFilter extends SearchParams {

}

function getBooleanValue(params: URLSearchParams, key: string): boolean | undefined {
   let value = params.get(key);
   if (value === null) return undefined;

   return value === `true`;
}

export async function normalizeParams(): Promise<SearchParams | null> {
   const url = headers().get(`next-url`);

   if (!url) return null!;

   try {
      let params = new URL(url).searchParams;
      return {
         companyIds: params.getAll(`companyIds`) ?? [],
         categories: params.getAll(`categories`)?.flatMap(x => x.split(`,`))?.map(x => x?.trim()).filter(Boolean) ?? [],
         locations: params.getAll(`locations`) ?? [],
         professions: params.getAll(`professions`)?.flatMap(x => x.split(`,`))?.map(x => x?.trim()).filter(Boolean) ?? [],
         keywords: params.getAll(`keywords`)?.flatMap(x => x.split(`,`))?.map(x => x?.trim()) ?? [],
         types: params.getAll(`types`) as Lowercase<JobListingEmploymentType>[] ?? [],
         internship: getBooleanValue(params, `internship`),
         noExperience: getBooleanValue(params, `noExperience`),
         remoteInterview: getBooleanValue(params, `remoteInterview`),
         workFromHome: getBooleanValue(params, `workFromHome`),
         levels: params.getAll(`levels`)?.flatMap(x => x.split(`,`))?.map(x => x?.trim()).filter(Boolean) as JobListingLevel[] ?? [],
         from: params.get(`from`)?.length
            ? params.get(`from`)?.toLowerCase() === JobListingFrom.Agencies.toLowerCase()
               ? JobListingFrom.Agencies : JobListingFrom.DirectEmployer
            : undefined,
         languages: params.getAll(`languages`) ?? [],
         salary: params.get(`salary`) ?? undefined,
         furlough: params.get(`furlough`) as FurloughPeriod ?? undefined,
      };
   } catch (err) {
      return null!;
   }
}

const GET_JOB_LISTINGS_QUERY = gql(/* GraphQL */`
    query GetJobListingsWithFilter($filter: SearchJobListingsInput!, $categories: [String!]) {
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

        searchJobListings(input: $filter) {
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

   let inputFilter: SearchJobListingsInput = {};
   console.log({ filter });
   if (filter.categories?.length) {
      inputFilter = {
         categories: Array.isArray(filter.categories) ? filter.categories : [filter.categories ?? ``],
         levels: filter.levels ?? [],
         from: filter.from ?? undefined,
         furlough: filter.furlough ?? undefined,
         internship: filter.internship,
         remoteInterview: filter.remoteInterview,
         workFromHome: filter.workFromHome,
         noExperience: filter.noExperience,
         salary: filter.salary ?? undefined,
         languages: filter.languages ?? [],
         companyIds: filter.companyIds ?? [],
         locations: filter.locations ?? [],
         keywords: filter.keywords ?? [],
         types: filter.types ?? [],
      };
   }

   const { data: { searchJobListings, getMostRelevantCompanies } } =
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

   return { jobListings: searchJobListings, mostRelevantCompanies: getMostRelevantCompanies };
}