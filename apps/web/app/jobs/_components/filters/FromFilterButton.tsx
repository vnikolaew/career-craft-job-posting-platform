"use client";
import React from "react";
import { JobListingFrom } from "@/__generated__/graphql";
import JobFilterButton from "./JobFilterButton";
import { ButtonText } from "./JobFiltersSection";
import { parseAsString, useQueryState } from "nuqs";
import { cn } from "@/lib/utils";
import { pascalToSpaces } from "@/app/jobs/_components/filters/EmploymentTypeFilterButton";

export interface FromFilterButtonProps {
   from?: JobListingFrom;
}

const FROMS = {
   [JobListingFrom.Agencies]: `Agencies`,
   [JobListingFrom.DirectEmployer]: `Direct employer`,
} as const;

const FromFilterButton = ({ from }: FromFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <FromFilterModal id={id} />} active={!!from?.length}>
         From<ButtonText values={from ? [pascalToSpaces(from)] : []} />
      </JobFilterButton>
   );
};


const FromFilterModal = ({ id }: { id: string }) => {
   const [selectedFrom, setSelectedFrom] = useQueryState(`from`, parseAsString);

   async function handleClickFurlough(from: string) {
      await setSelectedFrom(from);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedFrom(null!)}
                    className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Furlough
            </h3>
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {Object.entries(FROMS).map(([from , label], i) => (
                  <button onClick={_ => handleClickFurlough(from)} key={from}
                          className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                             selectedFrom === from && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     {label}
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

export default FromFilterButton;