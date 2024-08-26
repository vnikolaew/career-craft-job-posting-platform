"use client";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { GENERATE_EMAIL_CODE_MUTATION } from "@/app/signup/user/_components/CreateUserAccountForm";
import BaseLink from "@/components/common/BaseLink";

export interface SignInWithEmailFormProps {
}

type Inputs = {
   email: string;
   rememberMe: boolean;
}

const schema = z.object({
   email: z.string().email({ message: `Please enter a valid email address` }),
   rememberMe: z.boolean(),
});

const SignInWithEmailForm = ({}: SignInWithEmailFormProps) => {
   const [fieldErrors, setFieldErrors] = useState<FieldErrors<Inputs>>(null!);
   const [generateEmailCode, { loading }] = useMutation(GENERATE_EMAIL_CODE_MUTATION, {});

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>({
      resolver: zodResolver(schema),
      reValidateMode: `onSubmit`,
   });

   const router = useRouter();
   const searchParams = useSearchParams();

   const onSubmit = async (data: Inputs) => {
      console.log(data);

      const res = await generateEmailCode({
         variables: { email: data.email },
      });

      if (res.data?.generateSignUpEmailCode?.success && res.data?.generateSignUpEmailCode?.code) {
         let path = window.location.pathname;
         let params = new URLSearchParams(searchParams);

         params.set("step", "verify");
         if (res.data.generateSignUpEmailCode.identifier?.length) params.set("identifier", res.data.generateSignUpEmailCode.identifier ?? ``);

         Object.entries(data).forEach(([key, value]) => params.set(key, value.toString()));
         router.push(`${path}?${params.toString()}`);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit, errors => {
         if (errors) setFieldErrors(errors);
      })} className="card w-fit shadow-md max-w-xl">
         <div className="card-body bg-neutral-100 rounded-lg">
            <h2 className="card-title !text-3xl">
               Sign in
            </h2>
            <div className={`flex flex-col items-start w-full mt-0 gap-4`}>
               <div className={`mt-4 flex flex-col items-start gap-6`}>
                  <p className={`text-lg mt-4`}>
                     Login for users. If you are a company, use the company sign up page.
                  </p>
                  <p>
                     <b>
                        Introducing password-free login!{` `}
                     </b>
                     You no longer need a password, logging into Jobs.bg becomes easier
                     and more secure.
                  </p>
                  <p>
                     <b>
                        How does it work?{` `}
                     </b>
                     Instead of relying on a traditional password, when you log in from a new browser,
                     you'll receive a code on your email. Just enter this code and you're done!
                  </p>
                  <p>
                     <b>
                        Why is it easier and more secure?{` `}
                     </b>
                     You no longer need to come up with and remember complex
                     passwords, or worry about whether you've used the same password on another site.
                  </p>
                  <label className={`form-control w-full mt-4`}>
                     <input
                        type="email" placeholder="Email"
                        className="input input-bordered !bg-transparent !border-green-600 !w-full" {...register(`email`)} />
                     {fieldErrors?.email && (
                        <div className="label">
                           <span className="label-text-alt text-red-600 !text-sm">
                           {fieldErrors.email.message}
                        </span>
                        </div>
                     )}
                  </label>
                  <div className={`flex flex-col items-start gap-4`}>
                     <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                           <input type="checkbox" defaultChecked
                                  className="checkbox checkbox-success" {...register(`rememberMe`)} />
                           <span className="label-text text-neutral-500">
                           Remember me
                        </span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card-actions justify-center mt-4">
               <button className="btn btn-accent !px-8 !bg-green-600 !text-white hover:!bg-opacity-95 !shadow-md">
                  Sign in
               </button>
            </div>
            <div className={`w-full flex items-center justify-center mt-4 gap-2 !mx-auto`}>
               <div className={`flex items-center gap-2`}>
                  <BaseLink href={`/signup/user`}>Sign up</BaseLink>
                  <div className={`h-4 w-[1px] bg-green-600 text-green-600`} />
                  <BaseLink onClick={e => {
                     e.preventDefault();
                  }} href={`/`}>
                     Forgot password?
                  </BaseLink>
               </div>
            </div>
         </div>
      </form>
   );
};

export default SignInWithEmailForm;