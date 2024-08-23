"use client";
import React, { Fragment } from "react";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { SearchParams } from "@/app/jobs/_queries";
import { useRouter } from "next/navigation";
import CategoriesFilterButton from "@/app/jobs/_components/filters/CategoriesFilterButton";
import ProfessionsFilterButton from "@/app/jobs/_components/filters/ProfessionsFilterButton";
import BooleanFilterButton from "@/app/jobs/_components/filters/BooleanFilterButton";
import JobListingsLevelFilterButton from "@/app/jobs/_components/filters/JobListingsLevelFilterButton";
import SalaryFilterButton from "./SalaryFilterButton";

export interface JobFiltersSectionProps {
   params: SearchParams;
}

export const ButtonText = ({ values }: { values?: string[] }) => (
   <Fragment>
      {values?.length ?
         <span className={`!font-normal truncate overflow-hidden`}>: {values.join(`, `)}</span> : ``}
      {(values?.length ?? 0) > 1 && <span className={`!font-normal`}>+{values!.length - 1}</span>}
   </Fragment>
);


const JobFiltersSection = ({ params }: JobFiltersSectionProps) => {
   function handleClearFilters() {
      window.location.href = `${window.location.origin}${window.location.pathname}`
   }

   return (
      <div className={`w-4/5 items-center flex flex-wrap gap-4 !mx-auto`}>
         <pre className={`text-sm`}>
            {JSON.stringify(params, null, 2)}
         </pre>
         <JobFilterButton active={!!params.locations?.length}>
            Locations<ButtonText values={params.locations} />
         </JobFilterButton>
         <CategoriesFilterButton categories={params.categories} />
         <ProfessionsFilterButton professions={params.professions} />

         <JobFilterButton active={!!params.keywords?.length}>
            Keywords<ButtonText values={params.keywords} />
         </JobFilterButton>

         <JobFilterButton active={!!params.types?.length}>
            Employment type<ButtonText values={params.types} />
         </JobFilterButton>

         <BooleanFilterButton value={params.internship} paramName={`internship`} >
            Internship
         </BooleanFilterButton>
         <BooleanFilterButton value={params.noExperience} paramName={`noExperience`} >
            No experience
         </BooleanFilterButton>
         <BooleanFilterButton value={params.remoteInterview} paramName={`remoteInterview`} >
            Remote interview
         </BooleanFilterButton>
         <BooleanFilterButton value={params.workFromHome} paramName={`workFromHome`} >
            Work from home
         </BooleanFilterButton>

         <JobListingsLevelFilterButton levels={params.levels} />
         <JobFilterButton active={!!params.from?.length}>
            From<ButtonText values={params.from?.length ? [params.from!] : []} />
         </JobFilterButton>
         <JobFilterButton active={!!params.languages?.length}>
            Languages<ButtonText values={params.languages} />
         </JobFilterButton>
         <SalaryFilterButton salary={params.salary} />
         <JobFilterButton active={!!params.furlough?.length}>
            Furlough<ButtonText values={params.furlough?.length ? [params.furlough!] : []} />
         </JobFilterButton>
         <JobFilterButton active={!!params.companyIds?.length}>
            Companies<ButtonText values={params.companyIds?.length ? params.companyIds! : []} />
         </JobFilterButton>
         <button className={`btn btn-neutral !rounded-full`} onClick={handleClearFilters}>Clear</button>
      </div>
   );
};

export default JobFiltersSection;