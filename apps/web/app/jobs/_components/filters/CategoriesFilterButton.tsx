"use client";
import React from "react";
import JobFilterButton from "./JobFilterButton";
import { ButtonText } from "@/app/jobs/_components/filters/JobFiltersSection";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import { Search } from "lucide-react";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { cn } from "@/lib/utils";

export interface CategoriesFilterButtonProps {
   categories?: string[];
}

const CategoriesFilterButton = ({ categories }: CategoriesFilterButtonProps) =>
   (
      <JobFilterButton modal={id => <CategoriesFilterModal id={id} />} active={!!categories?.length}>
         Categories<ButtonText values={categories} />
      </JobFilterButton>
   );

const GET_ALL_CATEGORIES_QUERY = gql(/* GraphQL */`
    query GetAllCategoriesQuery($input: GetCategoriesDetailsInput!) {
        getCompanyCategoriesDetails(input: $input) {
            id
            name
            description
            totalJobListings
        }
    }
`);

const CategoriesFilterModal = ({ id }: { id: string }) => {
   const { data, loading } = useQuery(GET_ALL_CATEGORIES_QUERY, {
      variables: { input: { skip: 0, limit: 100 } },
   });
   const [selectedCategories, setSelectedCategories] = useQueryState(`categories`, parseAsArrayOf(parseAsString));

   async function handleClickCategory(category: string) {
      if (selectedCategories?.includes(category.trim())) await setSelectedCategories(c => c?.filter(_ => _ !== category.trim()) ?? []);
      else await setSelectedCategories(c => [...(c ?? []), category.trim()]);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
               <button onClick={_ => setSelectedCategories(null!)} className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
                  Clear
               </button>
            <h3 className="font-bold text-xl">
               Categories
            </h3>
            <div className="py-4 w-full mt-4">
               <label className="input input-bordered w-full flex items-center gap-2 input-accent ">
                  <Search size={18} />
                  <input type="text" className="grow" placeholder="Search for a category" />
               </label>
            </div>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={(id) => <Skeleton key={id} className={`w-24 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {data?.getCompanyCategoriesDetails
                  ?.filter(c => c.totalJobListings !== 0)
                  ?.map((category) => (
                     <button onClick={_ => handleClickCategory(category.name)} key={category.id}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedCategories?.includes(category.name) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedCategories?.includes(category.name) && `!text-green-600`)}>{category.totalJobListings}</span>
                        {category.name}
                     </button>
                  ))}
            </div>
            <div className="modal-action">
               <form method="dialog">
                  <button onClick={_ => {
                     window.location.reload();
                  }}
                          className="btn !bg-green-600 !text-white !px-6 !py-3 text-lg rounded-full !shadow-md hover:!shadow-lg transition-shadow duration-200">Save
                  </button>
               </form>
            </div>
         </div>
         <form method="dialog" className="modal-backdrop">
            <button>close</button>
         </form>
      </dialog>
   );
};

export default CategoriesFilterButton;