import React from "react";
import { GetCompanyQueryQuery, JobListing } from "@/__generated__/graphql";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";

export interface CompanyListingsSectionProps {
   company: NonNullable<GetCompanyQueryQuery["getCompany"]>;
}

const CompanyListingsSection = ({ company }: CompanyListingsSectionProps) => {
   return (
      <div className={`flex flex-col items-start w-full`}>
         <h2 className={`text-2xl`}>
            Job Offers
         </h2>
         <div className={`flex flex-col items-start gap-4 !w-full mt-8`}>
            {(company?.listings?.length ?? 0) === 0 ?
               <div>There are no job offers yet.</div>
               : company.listings?.map((listing, i) => (
                  <JobListingCard companyImage={company.brand_image_url} key={listing.id} listing={listing} />
               ))}
         </div>
         <div className={`self-end mt-8`}>
            <Link href={`/company/${company.id}/jobs`}
                  className={`text-neutral-500 btn btn-outline !rounded-full !min-h-fit !h-fit !py-3 flex items-center justify-start gap-2 !w-fit !px-6 hover:!bg-neutral-200 transition-all duration-100 !border-none`}>
               <span className={`font-semibold text-lg text-green-600`}>
                  View all jobs ({company?.listings?.length ?? 0})
               </span>
            </Link>
         </div>
      </div>
   );
};

const JobListingCard = ({ listing, companyImage }: { listing: Partial<JobListing>, companyImage?: string }) => (
   <div className={`p-4 rounded-md shadow-md !w-full !bg-neutral-100 min-h-[100px] flex items-center gap-4 hover:!scale-[102%] transition-transform duration-200`}>
      <Link className={`w-3/5`} title={listing.name} href={`/job/${listing.id}`}>
         <div className={`flex flex-col items-start gap-2`}>
            <time className={`text-neutral-500`}>{moment(listing.createdAt).format("DD.MM.YYYY")}</time>
            <div className={`flex items-center gap-4 w-full`}>
               <span>Rating</span>
               <h2 className={`text-xl font-semibold`}>{listing.name}</h2>
            </div>
            <span>{listing.location}</span>
         </div>
      </Link>
     <div className={`w-[2px] !h-full border-[1px] border-dashed border-neutral-300`}></div>
      <div className={`flex-1 flex items-center justify-center`}>
         <Image className={`rounded-md`} height={80} width={80} src={DEFAULT_COMPANY_LOGO_URL} alt={listing.name} />
      </div>
   </div>

);

export default CompanyListingsSection;