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
   companies?: string[],
   salary?: string;
}

export interface GetJobListingsFilter extends SearchParams {
}

function getArrayValue<T = string>(params: URLSearchParams, key: string): T[] | undefined {
   let value = params.getAll(key);
   if (value === null) return undefined;

   return value?.flatMap(x => x.split(`,`))?.map(x => x?.trim()).filter(Boolean) as T[] ?? [];
}

function pascalToSpaces(str: string) {
   return str.replace(/([A-Z])/g, " $1").trim();
}

function getBooleanValue(params: URLSearchParams, key: string): boolean | undefined {
   let value = params.get(key);
   if (value === null) return undefined;

   return value === `true`;
}

const FURLOUGH_PERIODS=  {
   [FurloughPeriod.TwentyOneToTwentyFive] : `21-25 days`,
   [FurloughPeriod.TwentyFiveToThirty] : `25-30 days`,
   [FurloughPeriod.ThirtyPlus] : `30+ days`,
} as const

export async function normalizeParams(): Promise<SearchParams & { description?: (companies: any[]) => string }> {
   const url = headers().get(`next-url`);

   if (!url) return null!;

   try {
      let params = new URL(url).searchParams;
      let normalized: SearchParams = {
         companies: getArrayValue(params, `companies`) ?? [],
         categories: getArrayValue(params, `categories`),
         locations: params.getAll(`locations`) ?? [],
         professions: getArrayValue(params, `professions`),
         keywords: getArrayValue(params, `keywords`),
         types: params.getAll(`types`) as Lowercase<JobListingEmploymentType>[] ?? [],
         internship: getBooleanValue(params, `internship`),
         noExperience: getBooleanValue(params, `noExperience`),
         remoteInterview: getBooleanValue(params, `remoteInterview`),
         workFromHome: getBooleanValue(params, `workFromHome`),
         levels: getArrayValue(params, `levels`),
         from: params.get(`from`)?.length
            ? params.get(`from`)?.toLowerCase() === JobListingFrom.Agencies.toLowerCase()
               ? JobListingFrom.Agencies : JobListingFrom.DirectEmployer
            : undefined,
         languages: getArrayValue(params, `languages`),
         salary: params.get(`salary`) ?? undefined,
         furlough: params.get(`furlough`) as FurloughPeriod ?? undefined,
      };


      return {
         ...normalized,
         description(allCompanies: { id: string, name: string }[]) {
            let description = ``;
            if (normalized.companies) description += ` from ${normalized.companies.map(c => allCompanies.find(x => x.id === c)?.name).join(`, `)} `;
            if (normalized.professions?.length) description += `for ${normalized.professions.join(`, `)} `;
            if (normalized.categories?.length) description += `in categories ${normalized.categories.join(`, `)} `;

            description += `with criteria: `;
            if(normalized.from) description += `from ${pascalToSpaces(normalized.from)}; `

            if (normalized.locations?.length) description += `in ${normalized.locations.join(`, `)}; `;
            if (normalized.salary) description += `salary: ${normalized.salary}; `;
            if (normalized.types?.length) description += `type: ${normalized.types.join(`, `)}; `;
            if (normalized.furlough) description += `furlough: ${FURLOUGH_PERIODS[normalized.furlough]}; `;
            if (normalized.internship) description += `internship; `;
            if (normalized.remoteInterview) description += `remote interview; `;
            if (normalized.noExperience) description += `no experience needed; `;
            if (normalized.workFromHome) description += `work from home; `;
            if (normalized.keywords?.length) description += `with keywords: ${normalized.keywords.join(`, `)}; `;
            if (normalized.languages?.length) description += `with languages: ${normalized.languages.join(`, `)}; `;
            if (normalized.levels?.length) description += `with levels: ${normalized.levels.join(`, `)}; `;

            return description.trim().endsWith(`;`) ? description.trim().slice(0, -1) : description;
         },
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

        companies {
            id
            name
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

   let inputFilter: SearchJobListingsInput = {
      categories: filter.categories?.length ? Array.isArray(filter.categories) ? filter.categories : [filter.categories ?? ``] : undefined,
      levels: filter.levels ?? [],
      from: (filter.from ? filter.from?.toLowerCase() === `agencies` ? JobListingFrom.Agencies : JobListingFrom.DirectEmployer : undefined) as JobListingFrom | undefined,
      furlough: filter.furlough ?? undefined,
      internship: filter.internship,
      remoteInterview: filter.remoteInterview,
      workFromHome: filter.workFromHome,
      noExperience: filter.noExperience,
      salary: filter.salary ?? undefined,
      languages: filter.languages ?? [],
      companyIds: filter.companies ?? [],
      locations: filter.locations ?? [],
      keywords: filter.keywords ?? [],
      types: filter.types ?? [],
   };

   console.log({ inputFilter });
   const { data: { searchJobListings, getMostRelevantCompanies, companies } } =
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

   return { jobListings: searchJobListings, mostRelevantCompanies: getMostRelevantCompanies, allCompanies: companies };
}