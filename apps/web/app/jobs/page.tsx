import React from "react";
import { getJobListings } from "@/app/jobs/_queries";
import JobListingSearchCard from "@/app/jobs/_components/JobListingSearchCard";
import MostRelevantCompaniesSection from "@/app/jobs/_components/MostRelevantCompaniesSection";

export interface PageProps {
   params: {},
   searchParams: { category?: string }
}

const Page = async ({ searchParams }: PageProps) => {
   let { jobListings, mostRelevantCompanies } = await getJobListings({ category: searchParams.category });

   console.log({ mostRelevantCompanies, category: searchParams.category });

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <h2 className={`text-2xl mt-12`}>
            Jobs search page. Category: <b>{searchParams.category}</b>
         </h2>
         <div className={`w-full grid grid-cols-[3fr_1fr] gap-12 mt-4`}>
            <div className={`w-full flex flex-col items-start gap-4`}>
               {jobListings.map((listing, index) => (
                  <JobListingSearchCard jobListing={listing} key={index} />
               ))}
            </div>
            <MostRelevantCompaniesSection companies={mostRelevantCompanies} />
         </div>
      </section>
   );
};

export default Page;