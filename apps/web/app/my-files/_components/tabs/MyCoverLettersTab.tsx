"use client";
import { Trash } from "lucide-react";
import React from "react";
import { match } from "ts-pattern";
import { useRouter } from "next/navigation";

export interface MyMotivationalLettersTabProps {
}

const MyCoverLettersTab = ({}: MyMotivationalLettersTabProps) => {
   let templates= [];
   let router = useRouter()

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
               <button data-tip={`Delete all`}
                       className={`tooltip group hover:!bg-red-500 p-2 rounded-full transition-colors duration-200`}>
                  <Trash size={24} className={`text-red-500 group-hover:!text-white`} />
               </button>
            </div>
            {match(templates)
               .with([], _ => <div
                  className={`w-full mx-auto mt-8 text-neutral-500 text-xl text-center drop-shadow-sm`}>
                  You currently have no CV templates.
               </div>)
               .otherwise(_ => <div className={`w-full mx-auto mt-8 text-neutral-500 text-lg`}>
                  No CV templates
               </div>)
            }
         </div>
      </div>
   );
};

export default MyCoverLettersTab ;