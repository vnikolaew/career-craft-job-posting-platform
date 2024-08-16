import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { getCompanyDetails } from "@/app/company/[id]/_queries";
import { headers } from "next/headers";
import { cn } from "@/lib/utils";

export interface LayoutProps extends PropsWithChildren {
   params: { id: string };
}

const Layout = async ({ children, params: { id } }: LayoutProps) => {
   const company = await getCompanyDetails(id);
   let h = headers();
   let isJobsPage = h.get(`referer`)?.endsWith(`/jobs`) ?? false;

   return (
      <div className={`w-full`}>
         <div className={`w-full flex items-center justify-center gap-4 shadow-sm py-4`}>
            <Link href={`/company/${id}`}
                  className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200 hover:!text-neutral-700`, !isJobsPage && `!bg-green-200 !text-green-700 hover:!bg-green-300`)}>
               <span className={`font-semibold text-base`}>
                  About us
               </span>
            </Link>
            <Link href={`/company/${id}/jobs`}
                  className={cn(`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-300 transition-all duration-100 !border-none !bg-neutral-200`, isJobsPage && `!bg-green-200 !text-green-700 hover:!bg-green-300`)}>
               <span className={`font-semibold text-base`}>
                  All jobs ({company?.listings?.length ?? 0})
               </span>
            </Link>
         </div>
         {children}
      </div>
   );
};

export default Layout;