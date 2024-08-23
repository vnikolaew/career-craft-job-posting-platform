"use client"
import React from "react";
import JobFilterButton from "./JobFilterButton";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Search } from "lucide-react";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/lib/utils";
import { ButtonText } from "@/app/jobs/_components/filters/JobFiltersSection";

export interface KeywordsFilterButtonProps {
   keywords?: string[];
}

const KeywordsFilterButton = ({keywords}: KeywordsFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <KeywordsFilterModal id={id} />} active={!!keywords?.length}>
         Keywords<ButtonText values={keywords} />
      </JobFilterButton>
   );
};

const GET_ALL_KEYWORDS_QUERY = gql(/* GraphQL */`
    query GetAllKeywordsQuery {
        getAllKeywords {
            name
            totalJobsCount
        }
    }
`);

const KeywordsFilterModal = ({ id }: { id: string }) => {
   const { data, loading } = useQuery(GET_ALL_KEYWORDS_QUERY, {
      variables: {},
   });

   const [selectedKeywords, setSelectedKeywords] = useQueryState(`keywords`, parseAsArrayOf(parseAsString));

   async function handleClickCategory(category: string) {
      if (selectedKeywords?.includes(category.trim())) await setSelectedKeywords(c => c?.filter(_ => _ !== category.trim()) ?? []);
      else await setSelectedKeywords(c => [...(c ?? []), category.trim()]);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedKeywords(null!)} className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Keywords
            </h3>
            <div className="py-4 w-full mt-4">
               <label className="input input-bordered w-full flex items-center gap-2 input-accent ">
                  <Search size={18} />
                  <input type="text" className="grow" placeholder="Search for a category" />
               </label>
            </div>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={() => <Skeleton className={`w-24 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {data?.getAllKeywords
                  ?.filter(c => c.totalJobsCount !== 0)
                  ?.map((keyword) => (
                     <button onClick={_ => handleClickCategory(keyword.name)} key={keyword.name}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedKeywords?.includes(keyword.name) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedKeywords?.includes(keyword.name) && `!text-green-600`)}>{keyword.totalJobsCount}</span>
                        {keyword.name}
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

export default KeywordsFilterButton;