"use client";
import React, { Fragment } from "react";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import HomePageSection from "./HomePageSection";
import Link from "next/link";
import Skeleton from "@/components/common/Skeleton";
import { Company } from "@/__generated__/graphql";
import { isValidUrl } from "@/lib/utils";
import Image from "next/image";

export interface TopEmployersSectionProps {
}

const GET_TOP_EMPLOYERS = gql(/* GraphQL */`
    query GetTopEmployers($input: GetTopCompaniesInput!) {
        getTopCompanies(input: $input) {
            id
            name
            banner_image_url
            brand_image_url
            _count {
                listings
            }
        }
    }
`);


const TopEmployersSection = ({}: TopEmployersSectionProps) => {
   const {data, loading, error} = useQuery(GET_TOP_EMPLOYERS, { variables: { input: { limit: 100 } } });

   return (
      <HomePageSection heading={"Top Employers"}>
         <div className={`grid gap-4 grid-cols-3`}>
            {loading ? (
               Array.from({ length: 30 }).map((_, index) => <Skeleton key={index} className={`w-full !h-8 `} />)
            ) : (
               <Fragment>
                  {data?.getTopCompanies?.map((company) => (
                     <TopEmployerPreview key={company.id} company={company as Company} />
                  ))}
               </Fragment>
            )}
         </div>
      </HomePageSection>
);
};

const TopEmployerPreview = ({ company }: { company: Company }) => {
   return (
      <Link href={`/company/${company.id}`} className="indicator !bg-transparent !w-full">
         <span className="indicator-item badge badge-neutral">{company?._count?.listings ?? 0}</span>
         <div className="btn !bg-transparent !border-none !text-neutral-500 !flex !items-center !justify-center p-4 !min-h-[100px] !w-full">
            {isValidUrl(company.brand_image_url) ? (
              <Image height={100} width={100} alt={company.name} src={company.brand_image_url} />
            ) : <span>{company.name}</span>}
         </div>
      </Link>
   )

}

export default TopEmployersSection;