"use client";
import React from "react";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/lib/utils";
import { ButtonText } from "@/app/jobs/_components/filters/JobFiltersSection";
import languages from "@/data/languages.json";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import Image from "next/image";

export interface LanguagesFilterButtonProps {
   languages?: string[];
}

const LanguagesFilterButton = ({ languages }: LanguagesFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <LanguagesFilterModal id={id} />} active={!!languages?.length}>
         Languages<ButtonText values={languages} />
      </JobFilterButton>
   );
};

const GET_ALL_LANGUAGES_QUERY = gql(/* GraphQL */`
    query GetAllLanguagesQuery {
        getAllLanguages {
            name
            totalJobsCount
        }
    }
`);

const LanguagesFilterModal = ({ id }: { id: string }) => {
   const { data, loading } = useQuery(GET_ALL_LANGUAGES_QUERY, {
      variables: {},
   });

   const [selectedLanguages, setSelectedLanguages] = useQueryState(`languages`, parseAsArrayOf(parseAsString));

   async function handleClickCategory(category: string) {
      if (selectedLanguages?.includes(category.trim())) await setSelectedLanguages(c => c?.filter(_ => _ !== category.trim()) ?? []);
      else await setSelectedLanguages(c => [...(c ?? []), category.trim()]);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedLanguages(null!)}
                    className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Languages
            </h3>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={(id) => <Skeleton key={id} className={`w-24 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {languages
                  .map(language => {
                     let x = data?.getAllLanguages?.find(l => l.name === language.name);
                     return x
                        ? { ...language, totalJobsCount: x.totalJobsCount }
                        : { ...language, totalJobsCount: 0 };
                  })
                  .toSorted((a, b) => b.totalJobsCount - a.totalJobsCount)
                  ?.map((language) => (
                     <button onClick={_ => handleClickCategory(language.name)} key={language.name}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedLanguages?.includes(language.name) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedLanguages?.includes(language.name!) && `!text-green-600`)}>{language.totalJobsCount}</span>
                        <Image className={`rounded-full !w-4 !h-4`} height={16} width={16} src={language.flag_url}
                               alt={language.name} />
                        {language.name}
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

export default LanguagesFilterButton;