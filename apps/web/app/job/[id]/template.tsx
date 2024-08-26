"use client";
import React, { PropsWithChildren } from "react";
import PageTopBar from "@/app/job/[id]/_components/PageTopBar";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export interface TemplateProps extends PropsWithChildren {
}

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
            company_id
            createdAt
            updatedAt
            company {
                id
                name
                _count {
                    listings
                }
            }
        }
    }
`);

const Template = ({ children, ...props }: TemplateProps) => {
   const { id } = useParams<{ id: string }>();
   const {data, loading , error} = useQuery(GET_COMPANY_JOB_LISTING, { variables: { id } });

   return (
      <div className={`w-full`}>
         <PageTopBar
          companyId={data?.getJobListing?.company_id!} 
         totalListings={data?.getJobListing?.company?._count?.listings ?? 0} />
         {children}
      </div>
   );
};

export default Template;