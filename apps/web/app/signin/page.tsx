import React from "react";
import SignInWithEmailForm from "@/app/signin/_components/SignInWithEmailForm";
import EmailVerificationCodeForm from "@/app/signin/_components/EmailVerificationCodeForm";

export interface PageProps {
   searchParams: {
      step?: string;
   };
}

const Page = async (props: PageProps) => {
   let step = props.searchParams?.step;

   return (
      <section className={`w-full flex flex-col items-center justify-center pt-12`}>
         {step === `verify` ? <EmailVerificationCodeForm /> : <SignInWithEmailForm />}
      </section>
   );
};

export default Page;