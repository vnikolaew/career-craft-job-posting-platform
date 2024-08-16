"use client";
import React, { Fragment } from "react";
import { gql } from "@/__generated__";
import HomePageSection from "@/app/_components/HomePageSection";
import Skeleton from "@/components/common/Skeleton";
import { useQuery } from "@apollo/client";
import { JobListingCategory } from "@/__generated__/graphql";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const GET_TOP_JOB_CATEGORIES = gql(/* GraphQL */`
    query GetTopJobCategories($input: GetTopListingCategoriesInput!) {
        getTopListingCategories(input: $input) {
            id
            name
            description
            _count {
                listings
            }
        }
    }
`);

export interface TopCategoriesSectionProps {
}

const TopCategoriesSection = ({}: TopCategoriesSectionProps) => {
   const { data, loading, error } = useQuery(GET_TOP_JOB_CATEGORIES, { variables: { input: { limit: 50 } } });

   return (
      <HomePageSection heading={"Categories"}>
         <div className={`flex flex-col items-start gap-4`}>
            {loading ? (
               Array.from({ length: 30 }).map((_, index) => <Skeleton key={index} className={`w-1/2 h-4`} />)
            ) : (
               <Fragment>
                  {data?.getTopListingCategories?.map((category) => (
                     <CategoryBadge key={category.id} category={category as JobListingCategory} />
                  ))}
               </Fragment>
            )}
         </div>
      </HomePageSection>
   );
};

const CategoryBadge = ({ category }: { category: JobListingCategory }) => (
   <div key={category.id} className={`w-full`}>
      <Link href={`/`}
            className={`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-400 transition-all duration-100 !border-neutral-400`}>
         <ShoppingCart size={18} />
         <span className={`font-semibold text-base text-neutral-700`}>
            {category.name}
         </span>
         <span className={`text-neutral-500`}>{category._count?.listings ?? 0}</span>
      </Link>
   </div>
);

export default TopCategoriesSection;