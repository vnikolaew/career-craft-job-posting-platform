import React from "react";
import { getJobListings } from "@/app/jobs/_queries";
import JobListingSearchCard from "@/app/jobs/_components/JobListingSearchCard";

export interface PageProps {
   params: {},
   searchParams: { category?: string }
}

const Page = async ({ searchParams }: PageProps) => {
   let jobListings = await getJobListings({ category: searchParams.category });

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <h2 className={`text-2xl mt-12`}>
            Jobs search page. Category: <b>{searchParams.category}</b>
         </h2>
         <div className={`w-2/3 flex flex-col items-start gap-4`}>
            {jobListings.map((listing, index) => (
               <JobListingSearchCard jobListing={listing} key={index} />
            ))}
         </div>
      </section>
   );
};

export default Page;