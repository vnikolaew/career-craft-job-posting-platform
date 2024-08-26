import React from "react";
import CreateUserAccountForm from "@/app/signup/user/_components/CreateUserAccountForm";
import EmailVerificationCodeForm from "@/app/signup/user/_components/EmailVerificationCodeForm";

export interface PageProps {
   searchParams: {
      step?: string;
   };
}

const Page = (props: PageProps) => {
   let step = props.searchParams?.step;

   return (
      <section className={`w-full flex flex-col items-center justify-center py-12`}>
         {step === `verify` ? <EmailVerificationCodeForm /> : <CreateUserAccountForm />}
      </section>
   );
};

export default Page;