"use client";
import React from "react";
import { GetSubscriptionByIdQueryQuery } from "@/__generated__/graphql";
import { cn } from "@/lib/utils";

export interface JobListingSubscriptionFiltersSectionProps {
   subscription: GetSubscriptionByIdQueryQuery["jobListingSubscription"];
}

const JobListingSubscriptionFiltersSection = ({ subscription }: JobListingSubscriptionFiltersSectionProps) => {
   return (
      <div className={`w-full flex gap-3 flex-wrap items-center mt-4`}>
         <FilterButton value={subscription?.location} label={`Where`} />
         <FilterButton value={subscription?.categories?.map(c => c.name).join(`, `)} label={`Categories`} />

         <FilterButton value={subscription?.job_categories?.map(c => c.name).join(`, `)} label={`Professions`} />
         <FilterButton value={subscription?.keywords?.join(`, `)} label={`Keywords`} />

         <FilterButton value={subscription?.type} label={`Type`} />
         <FilterButton value={subscription?.level} label={`Level`} />
         <FilterButton value={subscription?.languages.join(`, `)} label={`Languages`} />
      </div>
   );
};

const FilterButton = ({ label, value }: { label: string, value?: string | null }) => {
   return (
      <button
         className={cn(`btn rounded-full bg-neutral-200 text-black !border-none hover:!bg-neutral-300 !px-6 shadow-sm !py-3 !min-h-fit !h-fit !gap-0`,
            !!value?.length && `!bg-green-100 !text-green-600 hover:!bg-green-200 hover:!text-green-600 !font-normal`)}>
         <b>
            {label}
         </b>
         {value ? `: ${value}` : ``}
      </button>
   );
};

export default JobListingSubscriptionFiltersSection;