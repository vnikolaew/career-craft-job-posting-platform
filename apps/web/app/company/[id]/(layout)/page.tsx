import React from "react";
import Image from "next/image";
import { DEFAULT_COMPANY_BANNER_URL } from "@/providers/apollo/ApolloProvider";
import CompanyInfoLeftSection from "@/app/company/[id]/_components/CompanyInfoLeftSection";
import CompanyInfoRightSection from "@/app/company/[id]/_components/CompanyInfoRightSection";
import { getCompanyDetails } from "@/app/company/[id]/_queries";
import { Metadata, ResolvingMetadata } from "next";
import { APP_NAME } from "@/config/site";
import { notFound } from "next/navigation";

export interface PageProps {
   params: {
      id: string
   },
   searchParams: Record<string, string>
}

// export async function generateStaticParams() {
//    const companyIds = await getAllCompanyIds();
//    return companyIds.map(id => ({ id }));
// }

export const dynamic = `force-dynamic`;

export async function generateMetadata({ params: { id } }: PageProps, _: ResolvingMetadata): Promise<Metadata> {
   let company = await getCompanyDetails(id);

   if(!company)
      return {
         title: `${APP_NAME} - Company not found`,
      };


   return {
      title: `${APP_NAME} - ${company?.name ?? ``}`,
   };
}

const Page = async ({ params: { id } }: PageProps) => {
   let company = await getCompanyDetails(id);
   if(!company) notFound()

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`w-full min-w-[400px] mt-12`}>
            <Image className={`w-full`} height={300} width={500} src={DEFAULT_COMPANY_BANNER_URL}
                   alt={company.name!} />
         </div>
         <h2 className={`text-3xl text-neutral-700 mt-8`}>
            {company.name}
         </h2>
         <div className={`w-full grid grid-cols-2 gap-8 mt-8`}>
            <CompanyInfoLeftSection company={company} />
            <CompanyInfoRightSection company={company} />
         </div>
      </section>
   );
};

export default Page;