"use client";
import React, { PropsWithChildren } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

export interface TemplateProps extends PropsWithChildren {
}

export const GET_COMPANY_LISTINGS_COUNT_QUERY = gql(/* GraphQL */`
    query GetCompanyListingsCountQuery($id: String!) {
        getJobListing(where: { id: $id}) {
            id
            name
            company {
                _count {
                    listings
                }
            }
        }
    }
`);

const Template = ({ children, ...props }: TemplateProps) => {
   const path = usePathname();
   const { id } = useParams<{ id: string }>();
   const { data, loading, error } = useQuery(GET_COMPANY_LISTINGS_COUNT_QUERY, { variables: { id } });

   let isJobsPage = path.endsWith(`/jobs`) ?? false;

   return (
      <div className={`w-full`}>
         <div className={`w-full flex items-center justify-center gap-4 shadow-sm py-4`}>
            <Link href={`/company/${id}`}
                  className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200 hover:!text-neutral-700`, !isJobsPage && `!bg-green-200 !text-green-700 hover:!bg-green-300`)}>
               <span className={`font-semibold text-base`}>
                  About us
               </span>
            </Link>
            <Link href={`/company/${id}/jobs`}
                  className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200 hover:!text-neutral-700`, isJobsPage && `!bg-green-200 !text-green-700 hover:!bg-green-300`)}>
               <span className={`font-semibold text-base`}>
                  All jobs ({data?.getJobListing?.company?._count?.listings ?? 0})
               </span>
            </Link>
         </div>
         {children}
      </div>
   );
};

export default Template;