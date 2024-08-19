"use server"

import { gql } from "@/__generated__";
import companies from "@/data/companies.json";
import jsonJobListings from "@/data/job_listings.json";
import {
   Company, GetCompanyQueryQuery, GetCompanyWithListingsQueryQuery,
   JobListingEmploymentType, JobListingLevel, WorkFromHome,
} from "@/__generated__/graphql";
import { cache } from "react";
import moment from "moment/moment";
import { GET_COMPANY_LISTINGS_QUERY } from "@/app/company/[id]/_queries/graphql";
import { client } from "@/providers/apollo/client";
import { ApolloError } from "@apollo/client";

const GET_ALL_COMPANIES = gql(/* GraphQL */`
    query GetAllCompanies {
        companies {
            id
            name
        }
    }
`);

 const GET_COMPANY_QUERY = gql(/* GraphQL */`
    query GetCompanyQuery($id: String!) {
        getCompany(where: {id: $id}) {
            id
            name
            about_raw
            career_description_raw
            benefits
            company_values
            work_environment
            hiring_process
            createdAt
            updatedAt
            metadata
            email
            brand_image_url
            banner_image_url
            companyCategories {
                id
                name
                description
            }
            listings {
                id
                name
                location
                languages
                createdAt
                description_raw
                keywords
                level
                parameters
                type
                work_from
            }
            contacts {
                name
                contacts {
                    city
                    coordinates {
                        latitude
                        longitude
                    }
                    address
                    phone_number
                }
                company_bulstat
                email
                phone_number
                address
                website_url
                facebook_url
                twitter_url
                linkedin_url
                youtube_url
            }
            local_info {
                since
                employeeCount
                locations
            }
            worldwide_info {
                founded
                employeeCount
                headquarters
                locations
            }
        }
    }
`);

export const getCompanyDetails = cache(async (id: string): Promise<GetCompanyQueryQuery["getCompany"]> => {
   try {
      let { data } = await client.query({
         query: GET_COMPANY_QUERY,
         variables: { id },
      });
      return data?.getCompany!;
   } catch (err) {

      if(err instanceof ApolloError) {
         console.log(err.cause?.locations);
      }

      let company = companies.find(c => c.id === id);
      return company ? {
         ...company,
         createdAt: moment(company.createdAt).toDate(),
         updatedAt: moment(company.updatedAt).toDate(),
         listings: [],
         contacts: {
            ...company.contacts,
            contacts: company.contacts?.contacts?.map(c => ({
               ...c,
               coordinates: { latitude: c.coordinates.lat, longitude: c.coordinates.lng },
            })),
         },
      } : null;
   }
});

export const getCompanyDetailsWithListings = cache(async (id: string): Promise<GetCompanyWithListingsQueryQuery["getCompany"]> => {
   try {
      let { data } = await client.query({
         query: GET_COMPANY_LISTINGS_QUERY,
         variables: { id },
      });
      console.log({ data });
      return data?.getCompany! as GetCompanyWithListingsQueryQuery["getCompany"];
   } catch (err) {
      console.error({ err });

      let company: Company = {
         ...companies[Math.floor(Math.random() * companies.length)]!,
         listings: getRandomItems(jsonJobListings, 5)
            .map(l => ({
               ...l,
               work_from: l.work_from as WorkFromHome,
               level: l.level as JobListingLevel,
               type: l.type as JobListingEmploymentType,
               createdAt: moment(l.createdAt).toDate(),
               updatedAt: moment(l.updatedAt).toDate(),
               company_id: ``,
               isSaved: false
            })),
      };

      const { listings, ...rest } = company;
      company.listings.forEach(l => {
         l.company = rest;
         l.company_id = company.id;
      });
      return { ...company };
   }
});

function getRandomItems<T>(array: T[], n: number): T[] {
   // Shuffle the array using Fisher-Yates algorithm
   let shuffledArray = [...array];
   for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j]!, shuffledArray[i]!];
   }

   // Return the first n elements of the shuffled array
   return shuffledArray.slice(0, n);
}


export const getAllCompanyIds = cache(async (): Promise<string[]> => {
   try {
      let { data } = await client.query({
         query: GET_ALL_COMPANIES,
         variables: {},
      });
      return data?.companies?.map(c => c.id);
   } catch (err) {
      return companies.map(c => c.id);
   }
});