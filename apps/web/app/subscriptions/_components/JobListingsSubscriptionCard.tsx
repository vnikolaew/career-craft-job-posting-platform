"use client";
import React from "react";
import { GetMySubscriptionsQuery, JobListingSubscriptionNotificationFrequency } from "@/__generated__/graphql";
import { EllipsisVertical, Mail, Pencil, Trash } from "lucide-react";
import Link from "next/link";

export interface JobListingsSubscriptionCardProps {
   subscription: NonNullable<GetMySubscriptionsQuery["mySubscriptions"][number]>;
}

const JobListingsSubscriptionCard = ({ subscription }: JobListingsSubscriptionCardProps) => {
   return (
      <Link href={`/subscriptions/${subscription.id}`}>
         <div className={`bg-neutral-100 p-4 !py-6 rounded-md shadow-md flex items-center gap-6`}>
            <Mail className={`text-green-600`} />
            <div className={`flex flex-col items-start gap-2`}>
            <span
               className={`text-neutral-500`}>Once {subscription.notification_frequency === JobListingSubscriptionNotificationFrequency.Daily
               ? `daily` : `weekly`}
            </span>
               <span>
                  {subscription.description}
               </span>
            </div>
            <div className={`flex-1 flex justify-end`}>
               <div className="dropdown dropdown-bottom ">
                  <div onClick={e => {
                     e.stopPropagation();
                     e.preventDefault();
                     console.log(`click`);

                  }} role={`button`} tabIndex={0} className="m-1 ">
                     <button className={`btn btn-circle !bg-transparent !border-none`}>
                        <EllipsisVertical className={`text-neutral-500`} />
                     </button>
                  </div>
                  <ul tabIndex={0} className="menu dropdown-content bg-neutral-100 rounded-box z-[1] w-52 p-2 shadow">
                     <li className={``}>
                        <div
                           className={`py-2 text-lg cursor-pointer w-full hover:!bg-neutral-200 rounded-md transition-colors duration-200 inline-flex items-center gap-2`}>
                           <Pencil className={`text-neutral-500 z-10 `} size={18} />
                           <span>
                        Edit
                     </span>
                        </div>
                     </li>
                     <li
                        className={``}>
                        <div
                           className={`py-2 text-lg cursor-pointer w-full hover:!bg-neutral-200 rounded-md transition-colors duration-200 inline-flex items-center gap-2`}>
                           <Trash className={`text-red-700`} size={18} />
                           Delete
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default JobListingsSubscriptionCard;