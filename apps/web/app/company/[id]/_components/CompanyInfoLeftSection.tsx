import React from "react";
import { Company } from "@/__generated__/graphql";
import Image from "next/image";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";
import { Calendar, Earth, Facebook, MapPin, Phone, Twitter, Users } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export interface CompanyInfoLeftSectionProps {
   company: Partial<Company>;
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

         <div className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100`}>
            <div className={`flex items-center justify-start gap-4`}>
               <Users className={`text-neutral-700`} size={24} />
               <span className={`text-xl`}>{company.local_info?.employeeCount ?? 0} employees</span>
            </div>
            <div className={`flex items-center justify-start gap-4`}>
               <MapPin className={`text-neutral-700`} size={24} />
               <span className={`text-xl`}>{company.local_info?.locations.join(`, `)}</span>
            </div>
            <div className={`flex items-center justify-start gap-4`}>
               <Calendar className={`text-neutral-700`} size={24} />
               <span className={`text-xl`}>Registered {moment(company.local_info?.since).year()}</span>
            </div>
         </div>

         <div className={`flex flex-col items-start gap-2 w-full`}>
            <h2 className={`text-2xl`}>About the company</h2>
            <div
               className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 min-h-[100px]`}>
               <p dangerouslySetInnerHTML={{ __html: company.about_raw ?? `` }}></p>
            </div>
         </div>

         <div className={`flex flex-col items-start gap-2 w-full`}>
            <h2 className={`text-2xl`}>Careers in the company</h2>
            <div
               className={`p-4 rounded-md shadow-md flex flex-col items-start gap-4 !w-full !bg-neutral-100 min-h-[100px]`}>
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
                      Bulstat:{` `}
                     </b>
                     {company.contacts?.company_bulstat}
                  </span>
                  <div className={`flex items-center gap-2`}>
                     <Phone size={18} />
                     <span>{company.contacts?.phone_number}</span>
                  </div>
                  <div className={`flex items-center gap-2 mt-4`}>
                     {company.contacts?.website_url && (
                        <Link className={`btn btn-outline !min-h-fit rounded-full`} target={`_blank`}
                              href={company.contacts?.website_url}>
                           <Earth size={18} />
                           <span>Website</span>
                        </Link>
                     )}
                     {company.contacts?.facebook_url && (
                        <Link className={`btn btn-outline rounded-full !min-h-fit`} target={`_blank`}
                              href={company.contacts?.facebook_url}>
                           <Facebook size={18} />
                           <span>Facebook</span>
                        </Link>
                     )}
                     {company.contacts?.twitter_url && (
                        <Link className={`btn btn-outline rounded-full !min-h-fit`} target={`_blank`}
                              href={company.contacts?.twitter_url}>
                           <Twitter size={18} />
                           <span>Twitter</span>
                        </Link>
                     )}
                  </div>

                  <div className="divider !mt-8 !mb-0 !text-neutral-500 " />
                  {company.contacts?.contacts.map((c, i) => (
                     <div className={`flex flex-col items-start gap-2`} key={i}>
                        <div key={i} className={`flex items-center gap-2`}>
                           <MapPin size={18} />
                           <span>{c.address}</span>
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

export default CompanyInfoLeftSection;