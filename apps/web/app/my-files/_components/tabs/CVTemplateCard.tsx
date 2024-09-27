import React from "react";
import { MyCvsQueryQuery } from "@/__generated__/graphql";
import moment from "moment";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

export interface CvTemplateCardProps {
   template: MyCvsQueryQuery["getMyCoverLetterTemplates"][number];
}

const CvTemplateCard = ({ template }: CvTemplateCardProps) => {
   return (
      <div className="card bg-neutral-100 text-primary-content w-96 shadow-md">
         <div className="card-body">
            <div className="card-title text-base text-neutral-500 flex items-center justify-between">
               <h2>
                  {moment(template.createdAt).format(`DD.MM.YYYY HH:mm`)}
               </h2>
               <div className={`dropdown`}>
                  <button role={"button"} tabIndex={0}>
                     <EllipsisVertical size={24} />
                  </button>
                  <ul className={`dropdown-content !bg-neutral-100 !rounded-lg shadow-md`} tabIndex={0}>
                     <li className={`text-nowrap !bg-neutral-100 !z-10 !px-6 py-3 text-left rounded-md hover:!bg-primary hover:text-white transition-colors duration-200 cursor-pointer`}>
                        <Link href={`/`}>Edit</Link>
                     </li>
                     <li className={`text-nowrap !bg-neutral-100 !z-10 !px-6 py-3 text-left rounded-md hover:!bg-primary hover:text-white transition-colors duration-200 cursor-pointer`}>
                        <Link href={`/`}>Delete</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <p className={`text-lg font-semibold`}>
               {template.name}
            </p>
         </div>
      </div>
   );
};

export default CvTemplateCard;