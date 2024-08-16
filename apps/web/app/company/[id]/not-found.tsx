import React from "react";
import CompanyNotFound from "@/components/icons/CompanyNotFound";
import Link from "next/link";
import { Metadata } from "next";
import { APP_NAME } from "@/config/site";

export interface NotFoundProps {
}

export const metadata: Metadata = {
   title: `${APP_NAME} | 404 Not Found`,
}

const NotFound = ({}: NotFoundProps) => {
   return (
      <section className={`flex flex-col items-center gap-8 mt-24 justify-center !min-h-full`}>
         <div className={`mt-24 flex flex-col items-center gap-6`}>
            <CompanyNotFound className={`w-[400px]`} />
            <h2 className={`text-2xl text-neutral-500 drop-shadow-md text-center`}>
               Oops! The company you were looking for <br/> could not be found.
            </h2>
            <Link className={`link link-hover text-green-600 text-xl mt-12 drop-shadow-sm`} href={`/`}>Go to home page &rarr;</Link>
         </div>
      </section>
   );
};

export default NotFound;