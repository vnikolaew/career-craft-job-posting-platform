"use client";
import Link from "next/link";
import React, { useState } from "react";
import { APP_NAME } from "@/config/site";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";

export interface CreateUserAccountFormProps {
}

type Inputs = {
   firstName: string
   lastName: string
   email: string;
   termsAccepted: boolean
}

const schema = z.object({
   firstName: z.string(),
   lastName: z.string(),
   email: z.string().email({ message: `Please enter a valid email address` }),
   termsAccepted: z.literal(true, { message: `Please accept the terms and conditions` }),
});


export const GENERATE_EMAIL_CODE_MUTATION = gql(/* GraphQL */`
    mutation GenerateEmailCode($email: EmailAddress!) {
        generateSignUpEmailCode(email: $email) {
            code
            error
            identifier
            expires
            success
        }
    }
`);


const CreateUserAccountForm = ({}: CreateUserAccountFormProps) => {
   const [fieldErrors, setFieldErrors] = useState<FieldErrors<Inputs>>(null!);
   const [generateEmailCode, { loading }] = useMutation(GENERATE_EMAIL_CODE_MUTATION, {});

   const {
      register,
      handleSubmit,
      watch,
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
               Create an account as a user
            </h2>
            <p className={`text-lg mt-4`}>
               Sign up as a regular user. If you're a company, use <Link
               className={`!text-green-600 link link-hover`} href={`/signup/company`}>the company signup
               page.</Link>
            </p>
            <div className={`flex flex-col items-start w-full mt-12 gap-4`}>
               <label className={`form-control w-full`}>
                  <input type="text" placeholder="First Name"
                         className="input input-bordered !bg-transparent !border-green-600 !w-full" {...register(`firstName`)} />
                  <div className="label">
                     {fieldErrors?.firstName && (
                        <span className="label-text-alt text-red-600 !text-sm">
                           {fieldErrors.firstName.message}
                        </span>
                     )}
                  </div>
               </label>
               <label className={`form-control w-full`}>
                  <input type="text" placeholder="Last Name"
                         className="input input-bordered !bg-transparent !border-green-600 !w-full" {...register(`lastName`)} />
                  <div className="label">
                     {fieldErrors?.lastName && (
                        <span className="label-text-alt text-red-600 !text-sm">
                           {fieldErrors.lastName.message}
                        </span>
                     )}
                  </div>
               </label>

               <div className={`mt-4 flex flex-col items-start gap-4`}>
                  <p>
                     You will receive an email with a <b>7-digit code</b> to confirm your registration at the
                     specified
                     email address:
                  </p>
                  <label className={`form-control w-full`}>
                     <input
                        type="email" placeholder="Email"
                        className="input input-bordered !bg-transparent !border-green-600 !w-full" {...register(`email`)} />
                     <div className="label">
                        {fieldErrors?.email && (
                           <span className="label-text-alt text-red-600 !text-sm">
                           {fieldErrors.email.message}
                        </span>
                        )}
                     </div>
                  </label>
               </div>
               <div className={`mt-4 flex flex-col items-start gap-4`}>
                  <p>
                     <b>Password</b>: You no longer need a password, logging into {APP_NAME} becomes easier and more
                     secure. Instead of relying on a traditional password, when you sign in from a new browser,
                     you'll receive a code on your email. Just enter this code and you're done!
                  </p>
                  <div className="form-control">
                     <label className="label cursor-pointer gap-4">
                        <input type="checkbox" defaultChecked
                               className="checkbox checkbox-success" {...register(`termsAccepted`)} />
                        <span className="label-text text-neutral-500">
                              I agree to the <Link className={`!text-green-600 link link-hover`} href={`/`}>
                              Terms of Use
                           </Link>, <Link className={`!text-green-600 link link-hover`}
                                          href={`/`}>Privacy Policy</Link> and <Link
                           className={`!text-green-600 link link-hover`}
                           href={`/`}>Cookie Policy</Link> of {APP_NAME}.
                           </span>
                     </label>
                     <div className="label">
                        {fieldErrors?.termsAccepted && (
                           <span className="label-text-alt text-red-600 !text-sm">
                           {fieldErrors.termsAccepted.message}
                        </span>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className="card-actions justify-center">
               <button className="btn btn-accent !px-8 !bg-green-600 !text-white hover:!bg-opacity-95 !shadow-md">
                  Sign up
               </button>
            </div>
            <div className={`w-full h-[.5px] bg-neutral-300 mt-12`} />
            <p className={`text-neutral-400 mt-4`}>
               This site is protected by reCAPTCHA and <Link className={`link link-hover !text-green-600`}
                                                             target={`_blank`}
                                                             href={`https://policies.google.com/privacy`}>
               Google's Privacy Policy
            </Link> and <Link className={`link link-hover !text-green-600`} target={`_blank`}
                              href={`https://policies.google.com/terms`}>
               Terms of Service
            </Link> apply.
            </p>
         </div>
      </form>
   );
};

export default CreateUserAccountForm;