"use client";
import React, { ComponentProps, PropsWithChildren, ReactNode, useId } from "react";
import { cn } from "@/lib/utils";

export interface JobFilterButtonProps extends ComponentProps<'button'>, PropsWithChildren {
   active?: boolean;
   modal?: (id: string) => ReactNode;
   modalEnabled?: boolean;
}

const JobFilterButton = ({ active, modal, children, modalEnabled = true, onClick, className, ...props }: JobFilterButtonProps) => {
   const dialogId = useId();

   const handleOpenDialog = (e) => {
      e.preventDefault();
      const dialog = document.getElementById(dialogId);
      dialog?.showModal();
      onClick?.(e)
   };

   return (
      <div>
         <button onClick={handleOpenDialog}  className={cn(`btn !bg-neutral-200 !text-neutral-700 !min-h-fit !h-fit !py-2 !px-6 !rounded-full !border-none !outline-none hover:!bg-neutral-300 transition-all duration-200 !shadow-md !text-lg text-nowrap truncate max-w-[240px] !overflow-hidden justify-start flex-nowrap !gap-0`,
               className,
               active && `!text-green-600 !bg-green-100 hover:!bg-green-200`)}>
            {children}
         </button>
         {modalEnabled && (modal?.(dialogId) ?? (
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
         ))}
      </div>
   );
};

export default JobFilterButton;