"use client";
import React, { Fragment } from "react";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { SearchParams } from "@/app/jobs/_queries";
import { useRouter } from "next/navigation";

export interface JobFiltersSectionProps {
   params: SearchParams;
}

const ButtonText = ({ values }: { values?: string[] }) => (
   <Fragment>
      {values?.length ?
         <span className={`!font-normal truncate overflow-hidden`}>: {values.join(`, `)}</span> : ``}
      {(values?.length ?? 0) > 1 && <span className={`!font-normal`}>+{values!.length - 1}</span>}
   </Fragment>
);


const JobFiltersSection = ({ params }: JobFiltersSectionProps) => {
   let router = useRouter()

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
         <JobFilterButton active={!!params.categories?.length}>
            Categories<ButtonText values={params.categories} />
         </JobFilterButton>
         <JobFilterButton active={!!params.professions?.length}>
            Professions<ButtonText values={params.professions} />
         </JobFilterButton>
         <JobFilterButton active={!!params.keywords?.length}>
            Keywords<ButtonText values={params.keywords} />
         </JobFilterButton>
         <JobFilterButton active={!!params.types?.length}>
            Employment type<ButtonText values={params.types} />
         </JobFilterButton>
         <JobFilterButton active={params.internship}>
            Internship
         </JobFilterButton>
         <JobFilterButton active={params.noExperience}>
            No experience
         </JobFilterButton>
         <JobFilterButton active={params.remoteInterview}>
            Remote interview
         </JobFilterButton>
         <JobFilterButton active={params.workFromHome}>
            Work from home
         </JobFilterButton>
         <JobFilterButton active={!!params.levels?.length}>
            Level<ButtonText values={params.levels} />
         </JobFilterButton>
         <JobFilterButton active={!!params.from?.length}>
            From<ButtonText values={params.from?.length ? [params.from!] : []} />
         </JobFilterButton>
         <JobFilterButton active={!!params.languages?.length}>
            Languages<ButtonText values={params.languages} />
         </JobFilterButton>
         <JobFilterButton active={!!params.salary?.length}>
            Salary<ButtonText values={params.salary?.length ? [params.salary!] : []} />
         </JobFilterButton>
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