import React from "react";
import { GetJobListingsWithFilterQuery } from "@/__generated__/graphql";
import Image from "next/image";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";
import Link from "next/link";

export interface MostRelevantCompaniesSectionProps {
   companies: GetJobListingsWithFilterQuery["getMostRelevantCompanies"];
}

const MostRelevantCompaniesSection = ({ companies }: MostRelevantCompaniesSectionProps) => {
   return (
      <div className={`w-full flex flex-col gap-4`}>
         {companies.map((company) =>
            <Link title={company.name} className={`bg-neutral-100 w-2/3 !mx-auto rounded-md shadow-sm`} href={`/company/${company.id}`}>
               <div className={`w-full rounded-md shadow-sm p-4 py-8 flex flex-col items-end gap-6`} key={company.id}>
                  <Image className={`!w-2/3 !mx-auto`} height={100} width={100} src={DEFAULT_COMPANY_LOGO_URL}
                         alt={company.name ?? ``} />
                  <span className={`text-green-600 text-lg`}>
                     Job listings ({company._count?.listings ?? 0})
                  </span>
               </div>
            </Link>
         )}
      </div>
   );
};

export default MostRelevantCompaniesSection;