import React, { Fragment } from "react";
import { getJobListings, normalizeParams } from "@/app/jobs/_queries";
import { SubscribeToJobListingsCard, JobListingSearchCard, MostRelevantCompaniesSection } from "@/app/jobs/_components";
import { JobListingEmploymentType, JobListingFrom, JobListingLevel } from "@/__generated__/graphql";
import { JobFiltersSection } from "./_components/filters";
import { Search } from "lucide-react";

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
   let {description, ...params} = await normalizeParams() ?? {};
   let { jobListings, mostRelevantCompanies, allCompanies } = await getJobListings(params!);

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center mb-12`}>
         <h2 className={`text-3xl mt-20 inline-flex items-center gap-4`}>
            <Search size={24} />
            Jobs search page
         </h2>
         <JobFiltersSection params={params} />
         <div className={`w-full grid grid-cols-[3fr_1fr] gap-12 mt-12`}>
            <div className={`w-full flex flex-col items-start gap-4`}>
               <div className={`mb-8 w-full`}>
                  <SubscribeToJobListingsCard description={description?.(allCompanies)}
                                              categories={params.categories ?? []} />
               </div>
               <div className={`my-4 w-full text-2xl drop-shadow-sm`}>
                  Total listings found: <b>{jobListings.length}</b>
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