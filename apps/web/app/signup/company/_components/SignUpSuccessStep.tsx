"use client";
import React from "react";
import { APP_NAME } from "@/config/site";
import { Check } from "lucide-react";

export interface SignUpSuccessStepProps {
}

const SignUpSuccessStep = ({}: SignUpSuccessStepProps) => {
   return (
      <section className={`w-1/2 mx-auto  gap-4 my-12`}>
         <div
            className={`card !w-fit !max-w-[600px] !text-wrap shadow-md !mx-auto !bg-neutral-100 !p-6 !flex !items-start !flex-row gap-4 border-neutral-300 !text-lg`}>
            <div>
               <Check size={64} className={`text-green-600  !bg-transparent`} />
            </div>
            <div className={`flex flex-col items-start gap-6`}>
               <p>
                  You have successfully applied for registration of your company in {APP_NAME}.
               </p>
               <p className={`font-semibold`}>
                  Please check your inbox for an email with a link to confirm your registration request.
               </p>
               <p >
                  If you do not receive an email within 15 minutes, contact our administrator at tel. 02/ 439 22 22.
               </p>
            </div>
         </div>
      </section>
   );
};

export default SignUpSuccessStep;