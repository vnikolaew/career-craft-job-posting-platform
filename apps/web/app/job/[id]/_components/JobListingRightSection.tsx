import React from "react";
import { GetJobListingQuery } from "@/__generated__/graphql";
import moment from "moment";
import { BriefcaseBusiness, Calendar, List, MapPin, Search, Users } from "lucide-react";
import Image from "next/image";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface JobListingRightSectionProps {
   jobListing: NonNullable<GetJobListingQuery["getJobListing"]>;
}

const JobListingRightSection = ({ jobListing }: JobListingRightSectionProps) => {
   return (
      <div className={`w-full flex flex-col items-start gap-4 bg-neutral-200 `}>
         <div className={`w-full p-4 flex flex-col border-[1px] border-neutral-300 rounded-md bg-neutral-100`}>
            <time className={`text-neutral-500`}>{moment(jobListing.createdAt).format(`DD.MM.YYYY`)}</time>
            <h2 className={`text-xl font-semibold`}>{jobListing.name}</h2>
            <span className={`text-neutral-500 mt-2`}>{jobListing.company.name}</span>
            <div className={`flex w-full items-center flex-wrap gap-4 mt-4`}>
               <div className={`inline-flex items-center gap-2 text-lg`}>
                  <MapPin className={`fill-neutral-500 text-neutral-500`} size={22} />
                  <span>{jobListing.location}</span>
               </div>
               <div className={`inline-flex items-center gap-2 text-lg`}>
                  <BriefcaseBusiness className={`fill-neutral-500 text-neutral-500`} size={22} />
                  <span>{jobListing.type}</span>
               </div>
               <div className={`inline-flex items-center gap-2 text-lg`}>
                  <BriefcaseBusiness className={`text-neutral-500`} size={22} />
                  <span>{jobListing.work_from}</span>
               </div>
            </div>
         </div>

         <div className={`w-full p-4 flex flex-col border-[1px] border-neutral-300 rounded-md bg-neutral-100 gap-2`}>
            <Image height={64} width={64} alt={jobListing.company.name} src={DEFAULT_COMPANY_LOGO_URL} />
            <h2 className={`text-lg mt-2 `}>{jobListing.company.name}</h2>
            <div className={`divider !my-0`} />
            <h2 className={`text-lg mt-2 `}>{jobListing.company.companyCategories?.at(0)?.name}</h2>
            <div className={`flex items-center gap-2 mt-2`}>
               <Calendar size={20} />
               <span>Founded {moment(jobListing.company.worldwide_info?.founded).format(`YYYY`)}</span>
            </div>
            <div className={`flex items-center gap-2 mt-2`}>
               <Users size={20} />
               <span>{jobListing.company.worldwide_info?.employeeCount} employees</span>
            </div>
            <div className={`divider !my-0`} />
            <div className={`w-full flex items-center justify-between`}>
               <Link href={`/company/${jobListing.company.id}/jobs`}>
                  <button
                     className={cn(`text-green-600 btn btn-outline !rounded-full !min-h-fit !h-fit !py-2 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-200 transition-all duration-100 !border-none !bg-transparent hover:!text-green-600`)}>
                     <List className={``} size={18} />
                     <span className={`font-semibold text-base`}>
                        Jobs ({jobListing.company._count?.listings ?? 0})
                     </span>
                  </button>
               </Link>
               <Link href={`/company/${jobListing.company.id}`}>
                  <button
                     className={cn(`text-green-600 btn btn-outline !rounded-full !min-h-fit !h-fit !py-2 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-200 transition-all duration-100 !border-none !bg-transparent hover:!text-green-600`)}>
                     <Search className={``} size={18} />
                     <span className={`font-semibold text-base`}>
                        See profile
                     </span>
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default JobListingRightSection;