import React from "react";
import { getCompanyJob } from "@/app/job/[id]/_queries";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";
import Image from "next/image";
import { notFound } from "next/navigation";
import JobListingLeftSection from "@/app/job/[id]/_components/JobListingLeftSection";
import JobListingRightSection from "@/app/job/[id]/_components/JobListingRightSection";

export interface PageProps {
   params: { id: string };
}

const Page = async ({ params: { id } }: PageProps) => {
   const jobListing = await getCompanyJob({ id });
   if (!jobListing) notFound();

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`w-full min-w-[400px] mt-0 flex flex-col items-center`}>
            <Image className={`rounded-md `} height={400} width={400} src={DEFAULT_COMPANY_LOGO_URL}
                   alt={jobListing.company.name!} />
         </div>
         <div className={`w-full grid grid-cols-[5fr_2fr] gap-6`}>
            <JobListingLeftSection jobListing={jobListing} />
            <JobListingRightSection jobListing={jobListing} />
         </div>
      </section>
   );
};

export default Page;