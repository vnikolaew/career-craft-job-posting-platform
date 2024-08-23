"use client";
import React from "react";
import JobFilterButton from "./JobFilterButton";
import { parseAsString, useQueryState } from "nuqs";
import { cn } from "@/lib/utils";
import { FurloughPeriod } from "@/__generated__/graphql";
import { ButtonText } from "./JobFiltersSection";

export interface FurloughFilterButtonProps {
   furlough?: FurloughPeriod;
}

const FURLOUGHS = {
   [FurloughPeriod.TwentyOneToTwentyFive]: "20-25",
   [FurloughPeriod.TwentyFiveToThirty]: "25-30",
   [FurloughPeriod.ThirtyPlus]: "30+",
} as const;

const FurloughFilterButton = ({ furlough }: FurloughFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <FurloughFilterModal id={id} />} active={!!furlough?.length}>
         Furlough<ButtonText values={furlough ? [`${FURLOUGHS[furlough]} days`] : []} />
      </JobFilterButton>
   );
};

const FurloughFilterModal = ({ id }: { id: string }) => {
   const [selectedFurlough, setSelectedFurlough] = useQueryState(`furlough`, parseAsString);

   async function handleClickFurlough(furlough: string) {
      await setSelectedFurlough(furlough);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedFurlough(null!)}
                    className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Furlough
            </h3>
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {Object.entries(FURLOUGHS).map(([furlough, label], i) => (
                     <button onClick={_ => handleClickFurlough(furlough)} key={furlough}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedFurlough === furlough && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                        {label} days
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

export default FurloughFilterButton;