import React from "react";
import Image from "next/image";
import { DEFAULT_COMPANY_BANNER_URL } from "@/providers/apollo/ApolloProvider";
import { getCompanyDetailsWithListings } from "@/app/company/[id]/_queries";
import { JobListingsList } from "@/app/company/[id]/(layout)/jobs/_components/JobListingCard";

export interface PageProps {
   params: { id: string };
}

export async function generateStaticParams({ params: { id } }: PageProps) {
   const company = await getCompanyDetailsWithListings(id);
   return company?.listings?.map(l => l?.id).filter(Boolean) ?? [];
}

export const revalidate = 600;

const Page = async ({ params: { id } }: PageProps) => {
   const company = await getCompanyDetailsWithListings(id);

   return (
      <section className={`w-2/3 mx-auto mt-12 flex flex-col gap-8 items-center`}>
         <div className={`w-full min-w-[400px] mt-12`}>
            <Image
               className={`w-full`} height={300} width={500} src={DEFAULT_COMPANY_BANNER_URL}
               alt={company?.name!} />
         </div>
         <h2 className={`text-4xl text-neutral-700 mt-8`}>
            {company?.name}
         </h2>
         <div className={`w-full flex items-center justify-center mt-8`}>
            Jobs Filter Section.
         </div>
         <div className={`w-full flex flex-col items-start mt-8 gap-4`}>
            <h2 className={`text-3xl drop-shadow-sm`}>Job Offers</h2>
            <div className="divider !mt-0 !mb-0 !text-neutral-700 !w-2/3 !fill-neutral-700" />
            <div className={`w-full flex flex-col items-start gap-4 !text-neutral-600`}>
               {(company?.listings?.length ?? 0) === 0 ?
                  <JobEmptyState /> :
                  <JobListingsList company={company} />}
            </div>
         </div>
      </section>
   );
};

const JobEmptyState = () => (
   <div className={`flex flex-col items-center gap-0 w-full mx-auto mt-4`}>
      <Image className={``} height={300} width={300} src={`/jobs-empty-state.png`} alt={`Empty state`} />
      <span className={`mt-0 text-neutral-500 text-xl drop-shadow-sm`}>
         The company has no job offers yet.
      </span>
   </div>
);

export default Page;