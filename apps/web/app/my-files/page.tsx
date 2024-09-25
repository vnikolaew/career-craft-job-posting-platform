"use client";
import React from "react";
import MyFilesTabs from "./_components/MyFilesTabs";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`mt-12 w-full flex flex-col items-center gap-8`}>
            <h2 className={`text-4xl !self-start gap-8`}>
               My files
            </h2>
            <div className={`flex w-full justify-between mt-8`}>
            </div>
            <MyFilesTabs />
         </div>
      </section>
   );
};

export default Page;