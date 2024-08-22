"use client";
import React, { } from "react";
import { GetJobListingsWithFilterQuery } from "@/__generated__/graphql";
import moment from "moment";
import LoadingButton from "@/components/common/LoadingButton";
import { cn } from "@/lib/utils";
import { Bookmark, Calendar, List, Mail, UsersRound } from "lucide-react";
import { useMutation } from "@apollo/client";
import {
   SAVE_JOB_LISTING_MUTATION,
   UNSAVE_JOB_LISTING_MUTATION,
} from "@/app/company/[id]/(layout)/jobs/_components/JobListingCard";
import { ME_QUERY } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import SubscribeToCompanyListingsModal from "@/components/common/SubscribeToCompanyListingsModal";
import JobListingSearchCardDescription from "@/app/jobs/_components/JobListingSearchCardDescription";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";
import { useIsJobListingSaved } from "@/hooks/useMeId";

export interface JobListingSearchCardProps {
   jobListing: GetJobListingsWithFilterQuery["jobListings"][number];
}

const JobListingSearchCard = ({ jobListing }: JobListingSearchCardProps) => {
   const [saveJobListing, { loading: saving }] = useMutation(SAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: jobListing.id! } });
   const [unSaveJobListing, { loading: unsaving }] = useMutation(UNSAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: jobListing.id! } });
   const isSaved = useIsJobListingSaved(jobListing.id)

   async function handleSaveJobListing() {
      await saveJobListing({
         onCompleted: (data) => console.log({ data }),
         refetchQueries: [ME_QUERY],
      });
   }

   async function handleUnSaveJobListing() {
      await unSaveJobListing({
         onCompleted: data => console.log({ data }),
         refetchQueries: [ME_QUERY],
      });
   }

   return (
      <div className={`w-full p-6 rounded-lg shadow-md flex items-start gap-4 bg-neutral-100 hover:!scale-[101%] cursor-pointer transition-all duration-200`}>
         <div className={`flex flex-col gap-3 items-start flex-1 min-h-[180px]`}>
            <div className={`w-full flex items-center justify-between`}>
               <time
                  className={`text-neutral-500 text-sm`}>
                  {moment(jobListing.createdAt).isSame(moment(), `day`) ? `Today` : moment(jobListing.createdAt).format(`DD.MM.YY`)}
               </time>
               <div data-tip={isSaved ? `Unsave` : `Save`} className={`tooltip`}>
                  <LoadingButton
                     loadingText={``}
                     loading={saving || unsaving}
                     onClick={async _ => {
                        if (isSaved) await handleUnSaveJobListing();
                        else await handleSaveJobListing();
                     }}
                     className={cn(`btn-circle btn-outline !bg-transparent !border-none !px-0 hover:!bg-green-200 transition-colors duration-200`,
                        isSaved && `!bg-green-200 !text-green-600 !fill-green-600 !border-green-600 !outline-green-600`)}>
                     <Bookmark
                        className={cn(`!text-neutral-500 !h-5 !w-5`, isSaved && `!fill-green-600 !border-green-600 !text-green-600`)}
                        size={18} />
                  </LoadingButton>
               </div>
            </div>
            <div>
               <h2 className={`text-3xl text-neutral-900 font-semibold`}>{jobListing.name}</h2>
            </div>
            <div className={`text-neutral-500 !w-2/3`}>
               <JobListingSearchCardDescription jobListing={jobListing} />
            </div>
         </div>
         <div className={`divider !h-full w-[2px] divider-vertical`} />
         <div className={`w-2/5 flex items-start relative gap-4 mt-4`}>
            <div data-tip={`Subscribe`} className={`absolute right-0 -top-4 tooltip`}>
               <button onClick={_ => {
                  document.getElementById(`subscribe-modal`)?.showModal();
               }}
                       className={cn(`btn btn-circle btn-outline !bg-transparent !border-none !px-0 hover:!bg-green-200 transition-colors duration-200`,
                          jobListing.isSaved && `!bg-green-200 !text-green-600 !fill-green-600`)}>
                  <Mail className={cn(`!text-neutral-500 !h-5 !w-5`)} size={18} />
               </button>
               <SubscribeToCompanyListingsModal id={`subscribe-modal`} company={{
                  ...jobListing.company,
                  categories: jobListing.company.companyCategories ?? [],
               }} />
            </div>
            <Image height={100} width={100} src={DEFAULT_COMPANY_LOGO_URL} alt={`No logo`} />
            <Link className={`flex-1`} href={`/company/${jobListing.company.id}`}>
               <div className={`flex flex-col items-start gap-2 pr-4`}>
                  <h2 className={`text-lg font-semibold text-neutral-700`}>{jobListing.company.name}</h2>
                  <div className={`flex items-center gap-1 text-neutral-500`}>
                     <UsersRound size={14} className={`fill-neutral-500`} />
                     {jobListing.company._count?.listings} employees
                  </div>
                  <div className={`flex items-center gap-1 text-neutral-500`}>
                     <Calendar size={14} className={`text-neutral-500`} />
                     In {jobListing.company.local_info?.locations[0]} since {moment(jobListing.company.local_info?.since).year()}
                  </div>
                  <div className={`w-full flex items-center justify-end gap-2 mt-2`}>
                     <Link href={`/company/${jobListing.company.id}/jobs`}>
                        <button
                           className={`btn btn-ghost text-green-600 bg-transparent rounded-full !min-h-fit !py-3 !px-6 !h-fit !text-nowrap !flex-nowrap`}>
                           <List size={14} />
                           Job listings ({jobListing.company._count?.listings})
                        </button>
                     </Link>
                     <Link href={`/company/${jobListing.company.id}`}>
                        <button
                           className={`btn btn-ghost text-green-600 bg-transparent rounded-full !min-h-fit !py-3 !px-6 !h-fit !border-neutral-300`}>
                           About
                        </button>
                     </Link>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default JobListingSearchCard;