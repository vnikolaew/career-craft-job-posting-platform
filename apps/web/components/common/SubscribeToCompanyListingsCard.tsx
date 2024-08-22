"use client";
import React, { Fragment } from "react";
import { MailCheck } from "lucide-react";
import SubscribeToCompanyListingsModal from "@/components/common/SubscribeToCompanyListingsModal";

export interface SubscribeToCompanyListingsCardProps {
   company: {
      name: string
      id: string
      categories: { id: string, name: string }[]
   };
}

const SubscribeToCompanyListingsCard = ({ company: { name, id, categories } }: SubscribeToCompanyListingsCardProps) => {
   return (
      <Fragment>
         <div
            className={`w-full flex flex-col items-start gap-4 justify-between p-6 rounded-md shadow-md !bg-neutral-100`}>
            <div className={`flex items-center gap-4`}>
               <MailCheck className={`text-green-600`} size={32} />
               <span className={`text-xl`}>
               Receive notifications about new job listings from <b>{name}</b>
            </span>
            </div>
            <div className={`w-full flex items-center justify-center mt-2`}>

               <button onClick={e => {
                  e.preventDefault();
                  // @ts-ignore
                  document.getElementById(`subscribe-modal`)?.showModal();
               }}
                       className={`btn btn-outline !text-green-600 !rounded-full !px-12 hover:!bg-green-200 !shadow-sm text-lg`}>Subscribe
               </button>
            </div>
         </div>
         <SubscribeToCompanyListingsModal company={{ name, id, categories }} />
      </Fragment>
   );
};

export default SubscribeToCompanyListingsCard;