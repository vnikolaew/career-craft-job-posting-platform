"use client";
import React, {} from "react";
import { JobListingEmploymentType } from "@/__generated__/graphql";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/lib/utils";
import { ButtonText } from "./JobFiltersSection";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

export interface EmploymentTypeFilterButtonProps {
   types?: Lowercase<JobListingEmploymentType>[];
}

const EmploymentTypeFilterButton = ({ types }: EmploymentTypeFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <EmploymentTypeFilterModal id={id} />} active={!!types?.length}>
         Employment type<ButtonText values={types} />
      </JobFilterButton>
   );
};

const GET_ALL_EMPLOYMENT_TYPES_QUERY = gql(/* GraphQL */`
    query GetAllEmploymentTypesQuery {
        getAllEmploymentTypes {
            name
            totalJobsCount
        }
    }
`);

function pascalToSpaces(str: string) {
   return str.replace(/([A-Z])/g, " $1").trim();
}

const EmploymentTypeFilterModal = ({ id }: { id: string }) => {
   const { data, loading } = useQuery(GET_ALL_EMPLOYMENT_TYPES_QUERY, {
      variables: {},
   });

   const [selectedTypes, setSelectedTypes] = useQueryState(`types`, parseAsArrayOf(parseAsString));

   async function handleClickCategory(category: string) {
      if (selectedTypes?.includes(category.trim())) await setSelectedTypes(c => c?.filter(_ => _ !== category.trim()) ?? []);
      else await setSelectedTypes(c => [...(c ?? []), category.trim()]);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedTypes(null!)}
                    className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Employment type
            </h3>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={(id) => <Skeleton key={id} className={`w-24 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {data?.getAllEmploymentTypes?.map((type) => (
                  <button onClick={_ => {
                     return handleClickCategory(type.name!);
                  }} key={type.name}
                          className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                             selectedTypes?.includes(type.name!) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedTypes?.includes(type.name!) && `!text-green-600`)}>{type.totalJobsCount}</span>
                     {pascalToSpaces(type.name)}
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

export default EmploymentTypeFilterButton;