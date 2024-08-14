import React from "react";
import { Company } from "@/__generated__/graphql";

export interface CompanyInfoRightSectionProps {
   company: Partial<Company>;
}

const CompanyInfoRightSection = ({company}: CompanyInfoRightSectionProps) => {
   return (
      <div className={`w-full flex flex-col items-start gap-8`}>
         <div className={`flex flex-col items-start gap-2 w-full`}>
            <h2 className={`text-2xl`}>
               Why choose {company.name}
            </h2>
            <div
               className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 min-h-[100px]`}>
            </div>
         </div>
      </div>
   );
};

export default CompanyInfoRightSection;