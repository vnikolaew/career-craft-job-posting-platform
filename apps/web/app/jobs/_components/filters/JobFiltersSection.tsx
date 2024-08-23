"use client";
import React, { Fragment } from "react";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { SearchParams } from "@/app/jobs/_queries";
import CategoriesFilterButton from "@/app/jobs/_components/filters/CategoriesFilterButton";
import ProfessionsFilterButton from "@/app/jobs/_components/filters/ProfessionsFilterButton";
import BooleanFilterButton from "@/app/jobs/_components/filters/BooleanFilterButton";
import JobListingsLevelFilterButton from "@/app/jobs/_components/filters/JobListingsLevelFilterButton";
import SalaryFilterButton from "./SalaryFilterButton";
import KeywordsFilterButton from "@/app/jobs/_components/filters/KeywordsFilterButton";
import EmploymentTypeFilterButton from "@/app/jobs/_components/filters/EmploymentTypeFilterButton";
import FurloughFilterButton from "./FurloughFilterButton";
import FromFilterButton from "@/app/jobs/_components/filters/FromFilterButton";

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
         <KeywordsFilterButton keywords={params.keywords} />

         <EmploymentTypeFilterButton types={params.types}/>

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
         <FromFilterButton from={params.from} />

         <JobFilterButton active={!!params.languages?.length}>
            Languages<ButtonText values={params.languages} />
         </JobFilterButton>

         <SalaryFilterButton salary={params.salary} />
         <FurloughFilterButton furlough={params.furlough} />

         <JobFilterButton active={!!params.companyIds?.length}>
            Companies<ButtonText values={params.companyIds?.length ? params.companyIds! : []} />
         </JobFilterButton>

         <button className={`btn btn-neutral !rounded-full`} onClick={handleClearFilters}>Clear</button>
      </div>
   );
};

export default JobFiltersSection;