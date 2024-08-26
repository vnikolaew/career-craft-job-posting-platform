import React from "react";
import Link from "next/link";
import HomePageNotFound from "@/components/icons/HomePageNotFound";

export interface NotFoundProps {
}

const NotFound = async ({}: NotFoundProps) => {
   return (
      <section className={`w-3/4 mx-auto my-24 flex flex-col gap-8 items-center !min-h-[80vh] justify-center`}>
         <div className={`mt-12 flex flex-col items-center gap-4`}>
            <HomePageNotFound className={`w-[360px]`} />
            <h2 className={`text-xl text-center drop-shadow-sm -mt-12`}>
               We're sorry, but we couldn't find the page you requested. <br/>
               Perhaps try a search or explore our homepage.
            </h2>
            <Link
               className={`link link-hover text-green-600 text-xl mt-12 drop-shadow-sm`}
               href={`/`}>
               Go back to the home page &rarr;
            </Link>
         </div>
      </section>
   );
};

export default NotFound;