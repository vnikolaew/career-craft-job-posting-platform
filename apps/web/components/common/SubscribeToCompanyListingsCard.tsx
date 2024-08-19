"use client";
import React, { Fragment } from "react";
import { MailCheck } from "lucide-react";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { useMeQuery } from "@/hooks/useMeId";
import { JobListingSubscriptionNotificationFrequency } from "@/__generated__/graphql";

export interface SubscribeToCompanyListingsCardProps {
   company: {
      name: string
      id: string
      categories: { id: string, name: string }[]
   };
}

const SUBSCRIBE_TO_COMPANY_LISTINGS = gql(/* GraphQL */`
    mutation SubscribeToCompanyListings($input: SubscribeToJobListingsInput!) {
        subscribeToCompanyListings(input: $input) {
            id
            user_id
            metadata
            createdAt
            updatedAt
            work_from
            level
            type
            location
            languages
            parameters
            keywords
            categories {
                id
                name
                description
            }
        }
    }
`);

const SubscribeToCompanyListingsCard = ({ company: { name, id, categories } }: SubscribeToCompanyListingsCardProps) => {
   const [subscribeToCompanyListings, { loading }] = useMutation(SUBSCRIBE_TO_COMPANY_LISTINGS, {});
   const me = useMeQuery();

   async function handleSubscribe() {
      await subscribeToCompanyListings({
         variables: {
            input: {
               companyId: id,
               frequency: JobListingSubscriptionNotificationFrequency.Daily,
               categories: categories.map(({ id, name }) => ({ id, name })),
               keywords: [],
               languages: [],
            },
         },
         onCompleted: (data) => {
            console.log(`Success`, data);
         },
         onError: console.error,
      });
   }

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
                       className={`btn btn-outline !text-green-600 !rounded-full !px-12 hover:!bg-green-200 !shadow-sm`}>Subscribe
               </button>
            </div>
         </div>
         <dialog id="subscribe-modal" className="modal">
            <div className="modal-box min-w-[400px] !w-1/2 !bg-neutral-100 !mx-auto">
               <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
               </form>
               <h3 className="font-bold text-lg">
                  Receive email notifications
               </h3>
               <p className="py-4">
                  You're going to receive notifications about new job listings
                  from <b>{name}</b> at <b>{me?.me?.email}</b>.
               </p>
               <div className="modal-action !justify-center">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button onClick={async e => {
                        e.preventDefault();
                        await handleSubscribe();
                     }} className="btn btn-outline !text-green-600 !rounded-full !px-12 hover:!bg-green-200 !shadow-sm">
                        Subscribe
                     </button>
                  </form>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
      </Fragment>
   );
};

export default SubscribeToCompanyListingsCard;