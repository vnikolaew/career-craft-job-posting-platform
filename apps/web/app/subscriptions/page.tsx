import React from "react";
import { getMySubscriptions } from "./_queries";
import { redirect } from "next/navigation";
import JobListingsSubscriptionCard from "@/app/subscriptions/_components/JobListingsSubscriptionCard";
import {  Plus } from "lucide-react";
import DeleteAllButton from "@/app/subscriptions/_components/DeleteAllButton";
import Link from "next/link";

export interface PageProps {

}


const Page = async ({}: PageProps) => {
   const subscriptions = await getMySubscriptions();
   if (!subscriptions) redirect(`/`);

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`mt-12 w-full flex flex-col items-center gap-8`}>
            <h2 className={`text-4xl !self-start gap-8`}>
               Email subscriptions
            </h2>
            <div className={`flex flex-col items-center gap-4 mt-12`}>
               <span className={`text-neutral-500 text-xl !drop-shadow-sm`}>
                  These are your email subscriptions.
               </span>
            </div>
            <div className={`flex w-full justify-between mt-8`}>
               <Link href={`/subscriptions/add`}>
                  <button
                     className={`btn text-white !rounded-full !bg-green-600 !border-green-600 !px-12 !shadow-sm transition-shadow hover:!shadow-md text-lg !outline-none !shadow-md`}>
                     <Plus size={18} />
                     Add a new subscription
                  </button>
               </Link>
               <DeleteAllButton />
            </div>
            <div className={`w-full grid grid-cols-2 gap-4`}>
               {subscriptions.map((subscription) => (
                  <JobListingsSubscriptionCard key={subscription.id} subscription={subscription} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Page;