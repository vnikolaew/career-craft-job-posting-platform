"use client";
import React, { useMemo } from "react";
import { GetJobListingQuery } from "@/__generated__/graphql";
import { Bookmark, ChevronRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import {
   SAVE_JOB_LISTING_MUTATION,
   UNSAVE_JOB_LISTING_MUTATION,
} from "@/app/company/[id]/(layout)/jobs/_components/JobListingCard";
import { ME_QUERY } from "@/components/Navbar";
import { useIsJobListingSaved } from "@/hooks/useMeId";
import AuthorizedButton from "@/components/common/AuthorizedButton";
import Link from "next/link";

export interface ApplyForJobSectionProps {
   jobListing: NonNullable<GetJobListingQuery["getJobListing"]>;
}

const ApplyForJobSection = ({ jobListing }: ApplyForJobSectionProps) => {
   const [saveJobListing, { loading: saving }] = useMutation(SAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: jobListing.id! } });
   const [unSaveJobListing, { loading: unsaving }] = useMutation(UNSAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: jobListing.id! } });
   const isSaved = useIsJobListingSaved(jobListing.id!);

   const forwardJobMailHref = useMemo(() => {
      return `mailto:${jobListing.company?.email}?subject=${encodeURIComponent(jobListing.name)}&body=${encodeURIComponent(window.location.href)}`;
   }, [jobListing]);

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

      <div className={`w-fit flex flex-col mt-12 items-center gap-2 !mx-auto`}>
         <button
            className={`btn btn-accent !rounded-full !text-white !bg-green-600 !uppercase px-12 shadow-sm text-lg hover:!opacity-80 transition-opacity duration-200`}>
            <ChevronRight className={`text-white`} size={24} />
            Apply
         </button>
         <p className={`text-neutral-500`}>
            Apply with the CVs and files stored in your account.
         </p>

         <div className={`divider !mt-0`}></div>
         <div className={`flex items-center justify-center gap-4`}>
            <AuthorizedButton
               loading={saving}
               loadingText={`Saving ...`}
               onClick={async _ => {
                  if (isSaved) await handleUnSaveJobListing();
                  else await handleSaveJobListing();
               }}
               className={cn(
                  `text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200 hover:!text-neutral-700`,
                  isSaved && `!bg-green-300 !text-green-600`,
               )}>
               <Bookmark className={cn(isSaved && `fill-green-600`)} size={20} />
               <span className={`font-semibold text-base`}>
                  Save{isSaved ? `d` : ``}
               </span>
            </AuthorizedButton>

            <Link href={forwardJobMailHref}>
               <button
                  className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200 hover:!text-neutral-700`)}>
                  <Mail className={``} size={20} />
                  <span className={`font-semibold text-base`}>
                  Forward
               </span>
               </button>
            </Link>
         </div>

      </div>
   );
};

export default ApplyForJobSection;