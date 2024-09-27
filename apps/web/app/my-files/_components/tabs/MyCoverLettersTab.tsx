"use client";
import { Trash } from "lucide-react";
import React, { Fragment } from "react";
import { match } from "ts-pattern";
import { useRouter } from "next/navigation";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import DeleteAllCVsModal from "@/app/my-files/_components/tabs/DeleteAllCVsModal";
import CvTemplateCard from "@/app/my-files/_components/tabs/CVTemplateCard";
import Skeleton from "@/components/common/Skeleton";

export interface MyMotivationalLettersTabProps {
}

export const MY_CVS_QUERY = gql(/* GraphQL */`
    query MyCvsQuery {
        getMyCoverLetterTemplates {
            id
            name
            letter
            metadata
            createdAt
            user_id
        }
    }
`);

const MyCoverLettersTab = ({}: MyMotivationalLettersTabProps) => {
   const { data, error, loading } = useQuery(MY_CVS_QUERY, {});
   let router = useRouter();

   return (
      <div className={`w-full flex flex-col items-center gap-4 mt-8`}>
        <span className={`text-lg text-neutral-500 drop-shadow-sm max-w-[500px] text-center`}>
           Here are the cover letter templates you have created, which you can further modify when applying.
        </span>
         <button
            onClick={_ => router.push(`/my-files/cv/create`)}
            className={`btn  btn-lg rounded-full !bg-primary text-white shadow-md mt-4 !border-primary !py-3 !px-12`}>
            Create a CV template
         </button>
         <div className={`flex flex-col items-start gap-4 w-full mb-12`}>
            <div className={`w-full flex items-center justify-end`}>
               <button onClick={_ => document.getElementById(`delete-all-modal`)?.showModal()} data-tip={`Delete all`}
                       className={`tooltip group hover:!bg-red-500 p-2 rounded-full transition-colors duration-200 !bg-neutral-100 !shadow-md`}>
                  <Trash size={24} className={`text-red-500 group-hover:!text-white`} />
               </button>
               <DeleteAllCVsModal id={`delete-all-modal`}/>
            </div>
            {loading && !data && (
               <div className={`w-full mx-auto mt-8 text-neutral-500 text-lg flex flex-wrap items-center gap-8`}>
                  {Array.from({length: 3}).map((_, index) => <Skeleton className={`h-28 w-80 rounded-xl`} key={index} />)}
               </div>
            )}
            {match(data?.getMyCoverLetterTemplates)
               .with([], _ => <div
                  className={`w-full mx-auto mt-8 text-neutral-500 text-xl text-center drop-shadow-sm`}>
                  You currently have no CV templates.
               </div>)
               .otherwise(templates => <div className={`w-full mx-auto mt-8 text-neutral-500 text-lg flex flex-wrap items-center gap-12`}>
                  {(templates ?? []).map((t, index) => <CvTemplateCard key={index} template={t} /> )}

               </div>)
            }
         </div>
      </div>
   );
};

export default MyCoverLettersTab;