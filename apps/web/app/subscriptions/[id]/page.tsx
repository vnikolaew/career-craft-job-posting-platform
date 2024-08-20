import React from "react";
import { getSubscriptionById } from "./_queries";
import { notFound } from "next/navigation";
import { sleep } from "@/lib/utils";
import { JobListingSubscriptionNotificationFrequency } from "@/__generated__/graphql";
import LoadingButton from "@/components/common/LoadingButton";
import JobListingSubscriptionFiltersSection from "./_components/JobListingSubscriptionFiltersSection";

export interface PageProps {
   params: {
      id: string
   };
}

const Page = async ({ params: { id } }: PageProps) => {
   await sleep(2_000);
   let subscription = await getSubscriptionById(id);
   if (!subscription) notFound();

   return (
      <section className={`flex flex-col items-center gap-8 mt-24 justify-center !min-h-full w-2/3 mx-auto`}>
         <div className={`mt-12 w-full flex flex-col items-start gap-8`}>
            <h2 className={`text-4xl !self-start gap-8`}>
               Subscription
            </h2>
            <div className={`flex flex-col w-1/2 items-start mt-8 bg-neutral-100 gap-4 p-6 shadow-md rounded-xl`}>
               <span className={`text-lg`}>
                  <b>E-mail:</b> {subscription.user?.email ?? subscription.user_email}
               </span>
               <select
                  className="select select-bordered w-1/3 !bg-neutral-100 !text-xl focus:!border-green-600 border-2 focus:!outline-none">
                  <option className={`!text-xl !cursor-pointer`} disabled>
                     How often *
                  </option>
                  <option
                     selected={subscription.notification_frequency === JobListingSubscriptionNotificationFrequency.Daily}
                     className={`!text-xl !cursor-pointer`}>
                     Once daily
                  </option>
                  <option
                     selected={subscription.notification_frequency === JobListingSubscriptionNotificationFrequency.Weekly}
                     className={`!text-xl cursor-pointer`}>
                     Once weekly
                  </option>
               </select>
               <JobListingSubscriptionFiltersSection subscription={subscription} />
               <div className={`w-full flex items-center justify-center mt-4`}>
                  <LoadingButton className={`rounded-full !px-12 !bg-green-600 !text-white shadow-md !border-none`}>
                     Save
                  </LoadingButton>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Page;