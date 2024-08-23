"use client";
import React, { Fragment, useId } from "react";
import { MailCheck } from "lucide-react";
import SubscribeToCompanyListingsModal from "@/components/common/SubscribeToCompanyListingsModal";
import { SubscribeToJobListingsInput } from "@/__generated__/graphql";

export interface SubscribeToJobListingsCardProps {
   params?: SubscribeToJobListingsInput;
   categories: string[];
   description?: string;
}

const SubscribeToJobListingsCard = ({ categories, description, params }: SubscribeToJobListingsCardProps) => {
   const dialogId = useId();

   return (
      <Fragment>
         <div
            className={`w-full flex flex-col items-start gap-4 justify-between p-6 rounded-md shadow-md !bg-neutral-100`}>
            <div className={`flex items-center gap-4`}>
               <MailCheck className={`text-green-600`} size={32} />
               <span className={`text-xl`}>
                  Receive notifications about new job listings {description ? <b>{description}</b> : <Fragment>
                  in categories <b>"{categories.join(`, `)}"</b>
               </Fragment>}
            </span>
            </div>
            <div className={`w-full flex items-center justify-center mt-4`}>
               <button onClick={e => {
                  e.preventDefault();
                  document.getElementById(dialogId)?.showModal();
               }}
                       className={`btn btn-outline !text-green-600 !rounded-full !px-12 hover:!bg-green-200 !shadow-md text-lg`}>
                  Subscribe
               </button>
            </div>
         </div>
         <SubscribeToCompanyListingsModal params={params} id={dialogId} company={{ name: ``, id: ``, categories: [] }} />
      </Fragment>
   );
};

export default SubscribeToJobListingsCard;