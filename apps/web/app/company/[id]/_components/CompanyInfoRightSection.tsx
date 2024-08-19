import React from "react";
import { GetCompanyQueryQuery } from "@/__generated__/graphql";
import CompanyListingsSection from "@/app/company/[id]/_components/CompanyListingsSection";
import SubscribeToCompanyListingsCard from "@/components/common/SubscribeToCompanyListingsCard";

export interface CompanyInfoRightSectionProps {
   company: NonNullable<GetCompanyQueryQuery["getCompany"]>;
}

const CompanyInfoRightSection = ({ company }: CompanyInfoRightSectionProps) => {
   console.log({ categories: company.companyCategories });
   return (
      <div className={`w-full flex flex-col items-start gap-8`}>
         <SubscribeToCompanyListingsCard
            company={{ name: company.name, id: company.id, categories: company.companyCategories ?? [] }} />
         <Section heading={`${company.name}'s values`}>
            <ul className={`list-disc flex flex-col items-start gap-4 pl-4 m-2 text-lg`}>
               {company.company_values?.map((value) => (
                  <li key={value}>{value}</li>
               ))}
            </ul>
         </Section>

         <Section heading={`Work environment`}>
            <ul
               className={`list-disc flex flex-col items-start gap-4 pl-4 m-2 text-lg`}> {company.work_environment?.map((value) => (
               <li key={value}>{value}</li>
            ))}
            </ul>
         </Section>

         <Section heading={`Hiring process`}>
            <ul
               className={`list-disc flex flex-col items-start gap-4 pl-4 m-2 text-lg`}>
               {company.hiring_process?.map((value) => (
                  <li key={value}>{value}</li>
               ))}
            </ul>
         </Section>

         <Section heading={`Benefits`}>
            <ul
               className={`list-disc flex flex-col items-start gap-4 pl-4 m-2 text-lg`}>
               {company.benefits?.map((value) => (
                  <li key={value}>{value}</li>
               ))}
            </ul>
         </Section>

         {!!company.metadata?.articles?.length && (
            <Section heading={`Articles and interviews`}>
               <ul
                  className={`list-disc flex flex-col items-start gap-4 pl-4 m-2 text-lg`}>
                  {(company.metadata?.articles ?? []).map((value: string, i) => (
                     <li key={`${i}-${value}`}>{value}</li>
                  ))}
               </ul>
            </Section>
         )}
         <CompanyListingsSection company={company} />
      </div>
   );
};

const Section = ({ heading, children }: { heading: string, children: React.ReactNode }) => (
   <div className={`flex flex-col items-start gap-2 w-full`}>
      <h2 className={`text-2xl`}>
         {heading}
      </h2>
      <div
         className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 min-h-[100px]`}>
         {children}
      </div>
   </div>
);


export default CompanyInfoRightSection;