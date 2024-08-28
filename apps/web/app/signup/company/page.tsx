import React from "react";
import GeneralConditionsOfUseStep from "@/app/signup/company/_components/GeneralConditionsOfUseStep";
import { match } from "ts-pattern";
import SignUpStepOne from "@/app/signup/company/_components/SignUpStepOne";
import SignUpStepTwo from "@/app/signup/company/_components/SignUpStepTwo";

export interface PageProps {
   searchParams: {
      step?: string;
   };
}

const Page = async (props: PageProps) => {
   let step = props.searchParams?.step;

   return (
      <section className={`w-full flex flex-col items-center justify-center py-12`}>
         {match(step)
            .with(`general-conditions`, () => <GeneralConditionsOfUseStep />)
            .with(`register-one`, () => <SignUpStepOne />)
            .with(`register-two`, () => <SignUpStepTwo />)
            .otherwise(() => <GeneralConditionsOfUseStep />)
         }
      </section>
   );
};

export default Page;