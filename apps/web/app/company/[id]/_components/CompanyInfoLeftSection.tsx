"use client"
import React from "react";
import Image from "next/image";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";
import { Calendar, Earth, Map, MapPin, Phone, Users } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import { GetCompanyQueryQuery } from "@/__generated__/graphql";
import CompanyLocationMapModal from "@/app/company/[id]/_components/CompanyLocationMapModal";

export interface CompanyInfoLeftSectionProps {
   company: NonNullable<GetCompanyQueryQuery["getCompany"]>;
}

const CompanyInfoLeftSection = ({ company }: CompanyInfoLeftSectionProps) => {
   return (
      <div className={`w-full flex flex-col items-start gap-8`}>
         <div className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100`}>
            <Image height={100} width={100} className={``} src={DEFAULT_COMPANY_LOGO_URL} alt={company.name ?? ``} />
            <h2 className={`text-xl text-neutral-700 mt-4`}>{company.name}</h2>
            <div className="divider !mt-0 !mb-0 !text-neutral-500 " />
            <h3 className={`text-lg text-neutral-700`}>{company.categories?.map(c => c.name).join(`, `)}</h3>
         </div>

         <div className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 !py-8`}>
            <div className={`flex items-center justify-start gap-4`}>
               <Users className={`text-neutral-700`} size={24} />
               <span className={`text-lg`}>{company.local_info?.employeeCount ?? 0} employees</span>
            </div>
            <div className={`flex items-center justify-start gap-4`}>
               <MapPin className={`text-neutral-700`} size={24} />
               <span className={`text-lg`}>{company.local_info?.locations.join(`, `)}</span>
            </div>
            <div className={`flex items-center justify-start gap-4`}>
               <Calendar className={`text-neutral-700`} size={24} />
               <span className={`text-lg`}>Registered {moment(company.local_info?.since).year()}</span>
            </div>
         </div>

         <div className={`flex flex-col items-start gap-2 w-full`}>
            <h2 className={`text-2xl`}>About the company</h2>
            <div
               className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 min-h-[100px] !py-8`}>
               <p dangerouslySetInnerHTML={{ __html: company.about_raw ?? `` }}></p>
            </div>
         </div>

         <div className={`flex flex-col items-start gap-2 w-full`}>
            <h2 className={`text-2xl`}>Careers in the company</h2>
            <div
               className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 min-h-[100px] !py-8`}>
               <p dangerouslySetInnerHTML={{ __html: company.career_description_raw ?? `` }}></p>
            </div>
         </div>
         <div className={`flex flex-col items-start gap-2 w-full`}>
            <h2 className={`text-2xl`}>Contacts</h2>
            <div
               className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 min-h-[100px]`}>
               <div className={`w-full flex flex-col items-start gap-2`}>
                  <h2 className={`font-semibold`}>{company.name}</h2>
                  <span>
                     <b>
                      Bullstat:{` `}
                     </b>
                     {company.contacts?.company_bulstat}
                  </span>
                  <div className={`flex items-center gap-2`}>
                     <Phone size={18} />
                     <span>{company.contacts?.phone_number}</span>
                  </div>
                  <div className={`flex items-center gap-2 mt-4`}>
                     {company.contacts?.website_url && (
                        <CompanyLinkBadge
                           title={`Website`} icon={<Earth className={`text-neutral-700`} size={18} />}
                           url={company.contacts?.website_url} />
                     )}
                     {company.contacts?.facebook_url && (
                        <CompanyLinkBadge
                           title={`Facebook`} icon={<Facebook className={`w-5 h-5 fill-blue-600`} />}
                           url={company.contacts?.facebook_url} />
                     )}
                     {company.contacts?.twitter_url && (
                        <CompanyLinkBadge
                           title={`Twitter`} icon={<Twitter className={`w-5 h-5 fill-blue-400`} />}
                           url={company.contacts?.twitter_url} />
                     )}
                  </div>

                  <div className="divider !mt-8 !mb-0 !text-neutral-500 " />
                  {company.contacts?.contacts.map((c, i) => (
                     <div className={`flex flex-col items-start gap-2`} key={i}>
                        <div className={`flex items-center gap-2 font-semibold text-lg`}>
                           {c.city}
                        </div>
                        <div className={`flex items-center gap-2`}>
                           <MapPin size={18} />
                           <span>{c.address}</span>
                        </div>
                        <div className={`flex items-center gap-2 !text-green-600`}>
                           <Map size={18} />
                           <CompanyLocationMapModal id={`${company.name}-${c.address}`} coordinates={{
                              lng: c.coordinates?.longitude ?? 0,
                              lat: c.coordinates?.latitude! ?? 0
                           }} />
                           <Link onClick={e => {
                              e.preventDefault()
                              document.getElementById(`${company.name}-${c.address}`)?.showModal()
                           }} target={`_blank`} href={`/`}>Look on the map</Link>
                        </div>
                        <div className={`flex items-center gap-2`}>
                           <Phone className={`text-neutral-700 fill-neutral-700`} size={18} />
                           <span>{company.contacts?.phone_number}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

const CompanyLinkBadge = ({ title, icon, url }: { title: string, icon: React.ReactNode, url: string }) => (
   <Link
      className={`btn btn-outline rounded-full !min-h-fit !border-none !bg-neutral-200 hover:!bg-neutral-300 !text-neutral-700`}
      target={`_blank`} href={url}>
      {icon}
      <span>{title}</span>
   </Link>
);

export default CompanyInfoLeftSection;