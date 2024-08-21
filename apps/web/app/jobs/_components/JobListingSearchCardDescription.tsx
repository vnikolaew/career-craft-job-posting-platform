import React, { Fragment } from "react";
import { FurloughPeriod, GetJobListingsWithFilterQuery } from "@/__generated__/graphql";
import { Languages, SquareUserRound } from "lucide-react";

export interface JobListingSearchCardDescriptionProps {
   jobListing: GetJobListingsWithFilterQuery["jobListings"][number];
}

const JobListingSearchCardDescription = ({
                                            jobListing: {
                                               parametersTyped,
                                               languages,
                                               location,
                                            },
                                         }: JobListingSearchCardDescriptionProps) => {

   let formatter = new Intl.NumberFormat(`en-US`, { currency: parametersTyped?.salary?.currency!,  });

   return (
      <div className={`flex items-center flex-wrap gap-1`}>
         <span>{location.trim()};</span>
         <span>
            {parametersTyped?.salary?.__typename === `FixedJobListingSalary` ? (
               <Fragment>
                  Salary
                  of <b>{formatter.format(parametersTyped.salary.value)} {parametersTyped.salary.currency?.trim()};</b>
               </Fragment>
            ) : (
               <Fragment>
                  Salary <b>from {formatter.format(parametersTyped?.salary?.min ?? 0)} to {formatter.format(parametersTyped?.salary?.max ?? 0)} {parametersTyped?.salary?.currency}</b>;
               </Fragment>
            )}
            </span>
         <span>
               Furlough:{parametersTyped?.furlough === FurloughPeriod.TwentyOneToTwentyFive ? (
               <b> 21-25 days</b>
            ) : parametersTyped?.furlough === FurloughPeriod.TwentyFiveToThirty ? (
               <b> 25-30 days</b>
            ) : <b> 30+ days</b>};
         </span>
         {parametersTyped?.remoteInterview === true && (
            <span className={`inline-flex items-center gap-2`}>
              <SquareUserRound size={14} /> Remote interview;
           </span>
         )}
         {languages?.length && (
            <span className={`inline-flex items-center gap-2 ml-2`}>
               <Languages size={14} /> {languages.join(`, `)};
           </span>
         )}
      </div>
   );
};

export default JobListingSearchCardDescription;