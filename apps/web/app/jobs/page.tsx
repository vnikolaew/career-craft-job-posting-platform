import React, { Fragment } from "react";
import { getJobListings, normalizeParams } from "@/app/jobs/_queries";
import JobListingSearchCard from "@/app/jobs/_components/JobListingSearchCard";
import MostRelevantCompaniesSection from "@/app/jobs/_components/MostRelevantCompaniesSection";
import SubscribeToJobListingsCard from "@/app/jobs/_components/SubscribeToJobListingsCard";
import { JobListingEmploymentType, JobListingFrom, JobListingLevel } from "@/__generated__/graphql";
import JobFiltersSection from "./_components/filters/JobFiltersSection";

export interface PageProps {
   params: {},
   searchParams: {
      categories?: string[],
      location?: string,
      professions?: string[],
      keywords?: string[],
      type?: Lowercase<JobListingEmploymentType>,
      internship?: boolean,
      noExperience?: boolean,
      remoteInterview?: boolean,
      workFromHome?: boolean,
      level?: JobListingLevel,
      from?: JobListingFrom,
      languages?: string[],
      companyIds?: string[],
      salary?: string;
   }
}

const Page = async ({}: PageProps) => {
   let params = await normalizeParams() ?? {};

   let { jobListings, mostRelevantCompanies } = await getJobListings(params);

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <h2 className={`text-2xl mt-12`}>
            Jobs search page. Categories: <b>{params.categories?.join(`, `)}</b>
         </h2>
         <JobFiltersSection params={params} />
         <div className={`w-full grid grid-cols-[3fr_1fr] gap-12 mt-4`}>
            <div className={`w-full flex flex-col items-start gap-4`}>
               <div className={`mb-8 w-full`}>
                  <SubscribeToJobListingsCard categories={params.categories ?? []} />
               </div>
               {jobListings.length ? (
                  <Fragment>
                     {jobListings.map((listing, index) => (
                        <JobListingSearchCard jobListing={listing} key={index} />
                     ))}
                  </Fragment>
               ) : (
                  <div className={`w-full mt-4 text-center text-neutral-500`}>
                     <h2 className={`text-2xl drop-shadow-md`}>No job listings found matching this criteria.</h2>
                  </div>
               )}
            </div>
            <MostRelevantCompaniesSection companies={mostRelevantCompanies} />
         </div>
      </section>
   );
};

export default Page;