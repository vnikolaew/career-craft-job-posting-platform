"use client";
import Link from "next/link";
import React from "react";
import { APP_HOST_NAME, APP_NAME, COMPANY_DETAILS } from "@/config/site";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";

export interface GeneralConditionsOfUseStepProps {
}

const GeneralConditionsOfUseStep = ({}: GeneralConditionsOfUseStepProps) => {
   const router = useRouter();
   const searchParams = useSearchParams();

   function handleAccept() {
      let path = window.location.pathname;
      let params = new URLSearchParams(searchParams);

      params.set("step", "register-one");
      router.push(`${path}?${params.toString()}`);
   }

   function handleDecline() {
      router.push(`/signin`)
   }

   return (
      <section className={`w-1/2 mx-auto grid grid-cols-[2fr_3fr] gap-4 my-12`}>
         <div>Left Section</div>
         <div className={`w-full flex flex-col items-start gap-4 overflow-y-scroll relative max-h-[100vh] px-4`}>
            <div className={`sticky top-0 left-0 w-full p-4 !py-2 flex items-center gap-6 bg-neutral-100/90 border-b-neutral-300 border-b-[1px]`}>
               <button onClick={handleAccept} className={`btn btn-lg !bg-green-600 text-white !py-3 shadow-sm`}>Accept</button>
               <button onClick={handleDecline} className={`link link-hover !py-3 text-red-600 text-lg`}>Decline</button>
            </div>
            <h2 className={`text-2xl font-semibold`}>
               General conditions for use by employers
            </h2>
            <p>
               Please read this document carefully. It contains the Terms for access to and registration on the website
               <Link className={`link link-hover text-green-600 mx-1`} href={`/`}>www.career-craft.com</Link> ("Site")
               and for its use by employers ("Terms"). Acceptance
               of these Terms is mandatory for
               use of the Site.
            </p>

            <p>
               In connection with the Services provided, {APP_NAME} processes personal data of natural persons -
               business
               users according to the Personal Data Protection Policy ("Policy"), which you can familiarize yourself
               with <Link className={`link link-hover text-green-600 ml-1`} href={`/privacy`}>here</Link>. The Policy is
               an integral part of these Terms.
            </p>

            <span className={`mt-4 italic`}>
               Date of update: {moment(new Date(2024, 7, 15)).format(`DD MMMM YYYY`)}
            </span>

            <h2 className={`font-semibold mt-4 text-2xl`}>
               General terms of use by employers
            </h2>
            <h3 className={`font-semibold text-xl`}>
               1. Registration
            </h3>
            <p>
               1.1. "{APP_NAME}" ("{APP_NAME}"/"We"/"Us") with headquarters and management address in the city
               of {COMPANY_DETAILS.city},
               p.c. {COMPANY_DETAILS.zipCode}, {COMPANY_DETAILS.streetAddress}, EIK: 175050954, provides through the
               website www.{APP_HOST_NAME}.com ("Site")
               to legal entities and individuals meeting the requirements specified in these Terms - Employers
               ("Employer/s "), free and paid services ("Services"). The services include, but are not limited to,
               publication of vacancies by Employers and the possibility of storing on the Site applications received by
               the Employer according to the advertisements published by him.
            </p>
            <p>
               1.2. The use of the Services is possible only after registration of a company account and its activation,
               according to these Terms.
            </p>
            <p>
               1.3. Employers, in whose name a company account is created, should be validly registered in the relevant
               official public register of the country of registration of the Employer. With regard to Employers -
               companies registered on the territory of an EU member state (with the exception of the Republic of
               Bulgaria) or on the territory of the United Kingdom of Great Britain and Northern Ireland, additional
               proof of VAT registration is required.
            </p>
         </div>
      </section>
   )
      ;
};

export default GeneralConditionsOfUseStep;