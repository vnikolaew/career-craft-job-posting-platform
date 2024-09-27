"use client";
import { FileUp, Trash } from "lucide-react";
import React from "react";
import { match } from "ts-pattern";
import { useFileUpload } from "@/app/my-files/_hooks/useFileUpload";

export interface MyFilesTabProps {
}

const MyFilesTab = ({}: MyFilesTabProps) => {
   let files = [];
   const { file, fileInputRef, handleChange } = useFileUpload(async file => {
      let fd = new FormData()
      fd.append(`file`, file)

      let res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}/file-upload`, {
         method: `POST`,
         mode: `cors`,
         credentials: `include`,
         headers: {
         },
         body: fd,
      }).then(res => res.json());
      if(res.ok === true && typeof res.path === `string`){
         console.log({ res });
         // Save file as new attachment to the DB:
      }

   });

   return (
      <div className={`w-full flex flex-col items-center gap-4 mt-8`}>
        <span className={`text-lg text-neutral-500 drop-shadow-sm`}>
           Here are all of your uploaded CVs and files.
        </span>
         <div className={`dropdown dropdown-top dropdown-end`}>
            <button
               role={`button`}
               className={`btn  btn-lg rounded-full !bg-primary text-white shadow-md mt-4 !border-primary !py-3 !px-12`}>
               Upload file
            </button>
            <div
               className={`dropdown-content !bg-neutral-100 !rounded-lg shadow-md p-6 flex flex-col items-start gap-4 min-w-[500px]`}
               tabIndex={0}>
               <div className={`w-full flex items-center justify-between`}>
                  <h2 className={`text-xl font-semibold`}>File</h2>
                  <div className={``}>
                     <button className={`text-neutral-700`}>X</button>
                  </div>
               </div>
               <div className={`w-full flex flex-col items-start gap-6 mt-8`}>
                  <p className={`text-neutral-500 text-lg`}>
                     Here you can upload your file to use when applying.
                  </p>
                  <p className={`text-neutral-500 text-lg`}>
                     File size must not exceed 10MB.
                  </p>
               </div>
               <div className={`w-full mt-8`}>
                  <input onChange={handleChange} className={`hidden`} hidden accept={`*/*`} ref={fileInputRef}
                         type={"file"} />
                  <div onClick={_ => fileInputRef?.current?.click()}
                       className={`w-full flex items-start gap-4 hover:!bg-neutral-200 transition-colors duration-200 cursor-pointer !px-4 !py-2 rounded-sm`}>
                     <FileUp size={24} />
                     <span>
                        Upload file
                     </span>
                  </div>

               </div>
            </div>
         </div>
         <div className={`flex flex-col items-start gap-4 w-full mb-12`}>
            <div className={`w-full flex items-center justify-end`}>
               <button data-tip={`Delete all`}
                       className={`tooltip group hover:!bg-red-500 p-2 rounded-full transition-colors duration-200 !bg-neutral-100 !shadow-md`}
               >
                  <Trash size={24} className={`text-red-500 group-hover:!text-white`} />
               </button>
            </div>
            {match(files)
               .with([], _ => <div
                  className={`w-full mx-auto mt-8 text-neutral-500 text-xl text-center drop-shadow-sm`}>
                  You currently have no files.
               </div>)
               .otherwise(_ => <div className={`w-full mx-auto mt-8 text-neutral-500 text-lg`}>No files</div>)
            }
         </div>
      </div>
   );
};

export default MyFilesTab;