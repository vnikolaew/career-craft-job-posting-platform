"use client";
import React, { ComponentProps, Fragment } from "react";
import { cn } from "@/lib/utils";

export interface LoadingButtonProps extends ComponentProps<"button"> {
   loading?: boolean;
   loadingText?: string;
}

const LoadingButton = ({ loading, loadingText, className, children, ...rest }: LoadingButtonProps) => {
   return (
      <button disabled={loading} className={cn(`btn flex items-center gap-2 disabled:!opacity-70 disabled:!cursor-not-allowed !px-8`, className, loading && `disabled cursor-not-allowed opacity-50`)} {...rest}>
         {loading ? (
            <Fragment>
               <span className={`loading loading-spinner`}></span>
               {loadingText ?? "Loading..."}
            </Fragment>
         ) : children}
      </button>
   );
};

export default LoadingButton;