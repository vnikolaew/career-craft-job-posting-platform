"use client"
import React from "react";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { parseAsString, useQueryState } from "nuqs";
import { cn } from "@/lib/utils";
import { ButtonText } from "@/app/jobs/_components/filters/JobFiltersSection";

export interface SalaryFilterButtonProps {
   salary?: string;
}

const SALARY_RANGES = [
   `under $10,000`,
   `$10,000 - $20,000`,
   `$20,000 - $30,000`,
   `$30,000 - $40,000`,
   `$40,000 - $50,000`,
   `$50,000 - $60,000`,
   `$60,000 - $70,000`,
   `$70,000 - $80,000`,
   `$80,000 - $90,000`,
   `$90,000 - $100,000`,
   `$100,000+`,
] as const

const SalaryFilterButton = ({salary}: SalaryFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <SalaryFilterModal id={id} />} active={!!salary?.length}>
         Salary<ButtonText values={salary ? [salary] : undefined} />
      </JobFilterButton>
   );
};

const SalaryFilterModal = ({ id }: { id: string }) => {
   const [selectedSalary, setSelectedSalary] = useQueryState(`salary`, parseAsString);

   async function handleClickSalary(salary: string) {
      await setSelectedSalary(salary)
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedSalary(null)} className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Salary
            </h3>
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {SALARY_RANGES
                  ?.map((salary, i) => (
                     <button onClick={_ => handleClickSalary(salary)} key={salary}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedSalary === salary && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                        {salary}
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

export default SalaryFilterButton;