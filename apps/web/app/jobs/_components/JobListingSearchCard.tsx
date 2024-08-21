"use client";
import React from "react";
import { GetJobListingsWithFilterQuery } from "@/__generated__/graphql";

export interface JobListingSearchCardProps {
   jobListing: GetJobListingsWithFilterQuery["jobListings"][number];
}

const JobListingSearchCard = ({ jobListing }: JobListingSearchCardProps) => {
   return (
      <div className={`w-full p-2 rounded-md shadow-md flex items-start gap-4`}>
         <div>{jobListing.name}</div>
         <div className={`divider !h-full w-[2px] divider-vertical`} />
         <div>{jobListing.company.name}</div>
         <button className={`btn btn-primary`}>I am a primary button</button>
         <button className={`btn btn-secondary`}>I am a secondary button</button>
         <button className={`btn btn-neutral`}>I am a neutral button</button>
         <button className={`btn btn-accent`}>I am an accent button</button>
      </div>
   );
};

export default JobListingSearchCard;