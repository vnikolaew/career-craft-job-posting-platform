"use client";
import { Trash } from "lucide-react";
import React from "react";
import { match } from "ts-pattern";

export interface MyFilesTabProps {
}

const MyFilesTab = ({}: MyFilesTabProps) => {
   let files = [];

   return (
      <div className={`w-full flex flex-col items-center gap-4 mt-8`}>
        <span className={`text-lg text-neutral-500 drop-shadow-sm`}>
           Here are all of your uploaded CVs and files.
        </span>
         <button
            className={`btn  btn-lg rounded-full !bg-primary text-white shadow-md mt-4 !border-primary !py-3 !px-12`}>
            Upload file
         </button>
         <div className={`flex flex-col items-start gap-4 w-full mb-12`}>
            <div className={`w-full flex items-center justify-end`}>
               <button data-tip={`Delete all`}
                       className={`tooltip group hover:!bg-red-500 p-2 rounded-full transition-colors duration-200`}
               >
                  <Trash size={24} className={`text-red-500 group-hover:!text-white`} />
               </button>
            </div>
            {match(files)
               .with([], _ => <div className={`w-full mx-auto mt-8 text-neutral-500 text-xl text-center drop-shadow-sm`}>
                  You currently have no files.
               </div>)
               .otherwise(_ => <div className={`w-full mx-auto mt-8 text-neutral-500 text-lg`}>No files</div>)
            }
         </div>
      </div>
   );
};

export default MyFilesTab;