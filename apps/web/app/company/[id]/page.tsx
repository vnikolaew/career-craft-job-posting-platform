import React from "react";
import { client } from "@/providers/apollo/client";
import { gql } from "@/__generated__";
import companies from "@/data/companies.json";
import { Company } from "@/__generated__/graphql";
import Image from "next/image";
import { DEFAULT_COMPANY_BANNER_URL } from "@/providers/apollo/ApolloProvider";
import CompanyInfoLeftSection from "@/app/company/[id]/_components/CompanyInfoLeftSection";
import CompanyInfoRightSection from "@/app/company/[id]/_components/CompanyInfoRightSection";

export interface PageProps {
   params: {
      id: string
   },
   searchParams: Record<string, string>
}

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

const Page = async (props: PageProps) => {
   console.log({ client });

   let company: Partial<Company>;
   try {
      let { data } = await client.query({
         query: GET_COMPANY_QUERY,
         variables: { id: props.params.id },
      });
      company = data?.getCompany!;
   } catch (err) {
      company = companies[Math.floor(Math.random() * companies.length)]!;
   }

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`w-full min-w-[400px] mt-12`}>
            <Image className={`w-full`} height={300} width={500} src={DEFAULT_COMPANY_BANNER_URL} alt={company.name!} />
         </div>
         <h2 className={`text-4xl text-neutral-700 mt-8`}>
            {company.name}
         </h2>
         <div className={`w-full grid grid-cols-2 gap-8 mt-8`}>
            <CompanyInfoLeftSection company={company} />
            <CompanyInfoRightSection company={company} />
         </div>
      </section>
   );
};

export default Page;