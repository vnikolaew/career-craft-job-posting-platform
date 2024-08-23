"use client";
import React, { Fragment } from "react";
import {
   CategoriesFilterButton,
   ProfessionsFilterButton,
   KeywordsFilterButton,
   EmploymentTypeFilterButton,
   BooleanFilterButton,
   JobListingsLevelFilterButton,
   FromFilterButton, LanguagesFilterButton, SalaryFilterButton, FurloughFilterButton,
} from "@/app/jobs/_components/filters";
import { SearchParams } from "@/app/jobs/_queries";
import CompaniesFilterButton from "@/app/jobs/_components/filters/CompaniesFilterButton";
import LocationsFilterButton from "@/app/jobs/_components/filters/LocationsFilterButton";

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
      window.location.href = `${window.location.origin}${window.location.pathname}`;
   }

   return (
      <div className={`w-4/5 items-center flex flex-wrap gap-4 !mx-auto mt-4`}>
         <LocationsFilterButton locations={params.locations} />
         <CategoriesFilterButton categories={params.categories} />
         <ProfessionsFilterButton professions={params.professions} />
         <KeywordsFilterButton keywords={params.keywords} />
         <EmploymentTypeFilterButton types={params.types} />

         <BooleanFilterButton value={params.internship} paramName={`internship`}>
            Internship
         </BooleanFilterButton>
         <BooleanFilterButton value={params.noExperience} paramName={`noExperience`}>
            No experience
         </BooleanFilterButton>
         <BooleanFilterButton value={params.remoteInterview} paramName={`remoteInterview`}>
            Remote interview
         </BooleanFilterButton>
         <BooleanFilterButton value={params.workFromHome} paramName={`workFromHome`}>
            Work from home
         </BooleanFilterButton>

         <JobListingsLevelFilterButton levels={params.levels} />
         <FromFilterButton from={params.from} />
         <LanguagesFilterButton languages={params.languages} />
         <SalaryFilterButton salary={params.salary} />
         <FurloughFilterButton furlough={params.furlough} />
         <CompaniesFilterButton companies={params.companies} />

         <button
            title={`Clear`}
            className={`btn btn-neutral !rounded-full !bg-transparent !text-green-600 !text-xl !border-none hover:!bg-green-100 !shadow-none`}
            onClick={handleClearFilters}>
            Clear All
         </button>
      </div>
   );
};

export default JobFiltersSection;