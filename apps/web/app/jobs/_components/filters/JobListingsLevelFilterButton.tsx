"use client";
import React from "react";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { useQuery } from "@apollo/client";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/lib/utils";
import { ButtonText } from "@/app/jobs/_components/filters/JobFiltersSection";
import { gql } from "@/__generated__";

export interface JobListingsLevelFilterButtonProps {
   levels?: string[];
}

const JobListingsLevelFilterButton = ({ levels }: JobListingsLevelFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <LevelsFilterModal id={id} />} active={!!levels?.length}>
         Level<ButtonText values={levels} />
      </JobFilterButton>
   );
};

const GET_ALL_LEVELS_QUERY = gql(/* GraphQL */`
    query GetAllLevelsQuery {
        getJobListingLevelsDetails {
            name
            totalJobsCount
        }
    }
`);

const LevelsFilterModal = ({ id }: { id: string }) => {
   const { data, loading } = useQuery(GET_ALL_LEVELS_QUERY, {
      variables: {},
   });
   const [selectedLevels, setSelectedLevels] = useQueryState(`levels`, parseAsArrayOf(parseAsString));

   async function handleClickLevel(level: string) {
      if (selectedLevels?.includes(level.trim())) await setSelectedLevels(c => c?.filter(_ => _ !== level.trim()) ?? []);
      else await setSelectedLevels(c => [...(c ?? []), level.trim()]);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedLevels(null!)} className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Level
            </h3>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={(id) => <Skeleton key={id} className={`w-16 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               <button onClick={_ => handleClickLevel(`All`)} key={`All`}
                       className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                          selectedLevels?.includes(`All`) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                  All
               </button>
               {data?.getJobListingLevelsDetails
                  .toSorted((a, b) => b.totalJobsCount - a.totalJobsCount)
                  ?.map((level) => (
                     <button onClick={_ => handleClickLevel(level.name)} key={level.name}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedLevels?.includes(level.name) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedLevels?.includes(level.name) && `!text-green-600`)}>{level.totalJobsCount}</span>
                        {level.name}
                     </button>
                  ))}
            </div>
            <div className="modal-action">
               <form method="dialog">
                  <button onClick={_ => {
                     window.location.reload();
                  }}
                          className="btn !bg-green-600 !text-white !px-6 !py-3 text-lg rounded-full !shadow-md hover:!shadow-lg transition-shadow duration-200">
                     Save
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

export default JobListingsLevelFilterButton;