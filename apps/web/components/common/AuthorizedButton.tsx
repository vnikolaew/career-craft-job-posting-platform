"use client";
import React, { Fragment, PropsWithChildren } from "react";
import LoadingButton, { LoadingButtonProps } from "@/components/common/LoadingButton";
import { useMeQuery } from "@/hooks/useMeId";
import Link from "next/link";

export interface AuthorizedButtonProps extends LoadingButtonProps, PropsWithChildren {
}

const AuthorizedButton = ({ children, onClick, ...props }: AuthorizedButtonProps) => {
   const me = useMeQuery();
   const isAuthorized = !!me?.me?.id;

   return (
      <Fragment>
         <LoadingButton onClick={e => {
            if (!isAuthorized) {
               console.log(`Not authorized`);
               document.getElementById(`un-auth-modal`)?.showModal();

            } else onClick?.(e)
         }} {...props}>
            {children}
         </LoadingButton>
         <dialog id="un-auth-modal" className="modal ">
            <div className="modal-box !bg-neutral-200">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
               </form>
               <h3 className="font-bold text-lg">
                  You are not signed in.
               </h3>
               <p className="py-4 text-base">
                  To use this functionality, you need to first sign in to your account.
               </p>
               <div className="modal-action !mt-2">
                  <form method="dialog">
                     <button className={`text-green-600 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-green-200 transition-all duration-100 !border-none !bg-neutral-200  text-lg hover:!text-green-600`}>
                        Close
                     </button>
                  </form>
                  <Link href={`/signin`} >
                     <button className={`text-green-600 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-green-200 transition-all duration-100 !border-none !bg-neutral-200 text-lg  hover:!text-green-600`}>
                        Sign in
                     </button>
                  </Link>
               </div>
            </div>
         </dialog>
      </Fragment>
   );
};

export default AuthorizedButton;