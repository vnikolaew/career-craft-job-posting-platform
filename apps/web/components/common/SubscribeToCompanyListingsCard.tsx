"use client";
import React, { Fragment, useEffect, useId, useRef } from "react";
import { MailCheck } from "lucide-react";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { useMeQuery } from "@/hooks/useMeId";
import { JobListingSubscriptionNotificationFrequency } from "@/__generated__/graphql";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@/components/common/LoadingButton";
import { useToasts } from "@/components/common/Toast";

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

export type Schema = z.infer<typeof schema>

const SubscribeToCompanyListingsCard = ({ company: { name, id, categories } }: SubscribeToCompanyListingsCardProps) => {
   const [subscribeToCompanyListings, { loading }] = useMutation(SUBSCRIBE_TO_COMPANY_LISTINGS, {});
   const me = useMeQuery();
   const signedIn = !!me?.me;

   const { register, handleSubmit, formState, setValue } = useForm<Schema>({
      resolver: zodResolver(schema),
      reValidateMode: `onChange`,
      defaultValues: { email: me?.me?.email ?? ``, includeEmail: !signedIn },
   });

   useEffect(() => setValue(`email`, me?.me?.email ?? ``), [me?.me?.email]);
   let closeModalRef = useRef<HTMLFormElement>(null!);

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
               {/*<button onClick={e => {*/}
               {/*   console.log(crypto);*/}
               {/*   showToast({ id: uuidv4(), children: <span>Toast</span> });*/}
               {/*}}*/}
               {/*        className={`btn btn-outline !text-green-600 !rounded-full !px-12 hover:!bg-green-200 !shadow-sm text-lg`}>Show*/}
               {/*   toast*/}
               {/*</button>*/}
               <button onClick={e => {
                  e.preventDefault();
                  // @ts-ignore
                  document.getElementById(`subscribe-modal`)?.showModal();
               }}
                       className={`btn btn-outline !text-green-600 !rounded-full !px-12 hover:!bg-green-200 !shadow-sm text-lg`}>Subscribe
               </button>
            </div>
         </div>
         <dialog id="subscribe-modal" className="modal">
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
            <form ref={closeModalRef} onSubmit={e => {
               console.log(`click`, { e });
            }} method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
      </Fragment>
   );
};

export default SubscribeToCompanyListingsCard;