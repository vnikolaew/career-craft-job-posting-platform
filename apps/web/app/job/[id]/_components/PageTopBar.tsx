import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PageTopBarProps {
   companyId: string;
   totalListings: number;
}

const PageTopBar = ({ companyId, totalListings }: PageTopBarProps) => {
   return (
      <div className={`w-full flex items-center justify-center gap-4 shadow-sm py-4`}>
         <Link href={`/company/${companyId}`}
               className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200 hover:!text-neutral-700`, `!bg-green-200 !text-green-700 hover:!bg-green-300`)}>
               <span className={`font-semibold text-base`}>
                  Job
               </span>
         </Link>
         <Link href={`/company/${companyId}`}
               className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200 hover:!text-neutral-700`)}>
               <span className={`font-semibold text-base`}>
                  About us
               </span>
         </Link>
         <Link href={`/company/${companyId}/jobs`}
               className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200`, )}>
               <span className={`font-semibold text-base`}>
                  All jobs ({totalListings})
               </span>
         </Link>
      </div>
   );
};

export default PageTopBar;