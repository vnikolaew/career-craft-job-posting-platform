"use client";
import React, { PropsWithChildren, useId } from "react";
import { cn } from "@/lib/utils";

export interface JobFilterButtonProps extends PropsWithChildren {
   active?: boolean
}

const JobFilterButton = ({ active, children }: JobFilterButtonProps) => {
   const dialogId = useId();

   const handleOpenDialog = (e) => {
      e.preventDefault();
      const dialog = document.getElementById(dialogId);
      dialog?.showModal();
   };

   return (
      <div>
         <button
            onClick={handleOpenDialog}
            className={cn(`btn !bg-neutral-200 !text-neutral-700 !min-h-fit !h-fit !py-2 !px-6 !rounded-full !border-none !outline-none hover:!bg-neutral-300 transition-all duration-200 !shadow-md !text-lg text-nowrap truncate max-w-[240px] !overflow-hidden justify-start flex-nowrap !gap-0`,
               active && `!text-green-600 !bg-green-100 hover:!bg-green-200`)}>
            {children}
         </button>
         <dialog id={dialogId} className="modal">
            <div className="modal-box">
               <h3 className="font-bold text-lg">
                  Modal heading
               </h3>
               <p className="py-4">
                  Modal content
               </p>
               <div className="modal-action">
                  <form method="dialog">
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
      </div>
   );
};

export default JobFilterButton;