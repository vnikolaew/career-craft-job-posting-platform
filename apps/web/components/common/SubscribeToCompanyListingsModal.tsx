"use client";
import React, { Fragment, useEffect, useId } from "react";
import { useMeQuery } from "@/hooks/useMeId";
import { useForm } from "react-hook-form";
import LoadingButton from "@/components/common/LoadingButton";
import { JobListingSubscriptionNotificationFrequency } from "@/__generated__/graphql";
import { useMutation } from "@apollo/client";
import { useToasts } from "@/components/common/Toast";
import { gql } from "@/__generated__";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const SUBSCRIBE_TO_COMPANY_LISTINGS = gql(/* GraphQL */`
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
            description
            categories {
                id
                name
                description
            }
            job_categories {
                id
                name
            }
        }
    }
`);

const emailRegex =
   /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;

const schema = z.object({
   includeEmail: z.boolean().default(false),
   email: z.string().email({ message: `Please enter a valid email address` }).optional(),
}).refine(input => {
   return !(input.includeEmail && !emailRegex.test(input.email ?? ``));
}, { message: `Please enter a valid email address` });

export type Schema = z.infer<typeof schema>;

export interface SubscribeToCompanyListingsModalProps {
   company: {
      name: string
      id: string
      categories: { id: string, name: string }[]
   };
   id?: string;
}

const SubscribeToCompanyListingsModal = ({
                                            id: dialogId = `subscribe-modal`,
                                            company: {
                                               name,
                                               id,
                                               categories,
                                            },
                                         }: SubscribeToCompanyListingsModalProps) => {
   const me = useMeQuery();
   const signedIn = !!me?.me;

   const { register, handleSubmit, formState, setValue, ...methods } = useForm<Schema>({
      resolver: zodResolver(schema),
      reValidateMode: `onChange`,
      defaultValues: { email: me?.me?.email ?? ``, includeEmail: !signedIn },
   });

   useEffect(() => setValue(`email`, me?.me?.email ?? ``), [me?.me?.email]);

   const [subscribeToCompanyListings, { loading }] = useMutation(SUBSCRIBE_TO_COMPANY_LISTINGS, {});

   let toastId = useId();
   let { showToast } = useToasts();

   async function handleSubscribe({ email }: Schema) {
      await subscribeToCompanyListings({
         variables: {
            input: {
               companyId: id,
               frequency: JobListingSubscriptionNotificationFrequency.Daily,
               categories: categories.map(({ id, name }) => ({ id, name })),
               job_categories: [],
               keywords: [],
               languages: [],
            },
         },
         onCompleted: (data) => {
            console.log(`Success`, data);
            if (!!data.subscribeToCompanyListings) {
               let el = document.getElementById(`subscribe-modal`)!;
               el?.close();
               showToast({ id: toastId, children: <span>Successfully subscribed!</span> });
            }
         },
         onError: console.error,
      });
   }


   return (
      <dialog id={dialogId} className="modal">
         <div className="modal-box min-w-[400px] !w-1/2 !bg-neutral-100 !mx-auto">
            <form method="dialog">
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-xl">
               Receive email notifications
            </h3>
            {signedIn ? (
               <Fragment>
                  <p className="py-4 mt-4 text-lg">
                     You're going to receive notifications about new job listings
                     from <b>{name}</b> at:
                  </p>
                  <div className={`w-full text-center text-lg`}>
                     <b>{me?.me?.email}</b>
                  </div>
                  <span className={`text-red-600 text-sm`}>{formState.errors.email?.message ?? ``}</span>
               </Fragment>
            ) : (
               <div className={`flex flex-col items-start gap-2 text-lg mt-4`}>
                  <p className="py-4">
                     You're going to receive notifications about new job listings from <b>{name}</b>. at:
                  </p>
                  <input type="email" placeholder="E-mail"
                         className="input input-bordered w-full !bg-transparent !text-base " {...register(`email`)} />
                  <span className={`text-red-600 text-sm`}>{formState.errors.email?.message ?? ``}</span>
               </div>
            )}
            <div className="modal-action !justify-center !mt-12">
               <form onSubmit={handleSubmit(handleSubscribe)} method="dialog">
                  <LoadingButton
                     loadingText={`Subscribing ...`} loading={loading} type={`submit`}
                     className="btn btn-outline !text-green-600 !rounded-full !px-12 hover:!bg-green-200 !shadow-sm text-lg  ">
                     Subscribe
                  </LoadingButton>
               </form>
            </div>
         </div>
         <form method="dialog" className="modal-backdrop">
            <button>close</button>
         </form>
      </dialog>
   );
};

export default SubscribeToCompanyListingsModal;