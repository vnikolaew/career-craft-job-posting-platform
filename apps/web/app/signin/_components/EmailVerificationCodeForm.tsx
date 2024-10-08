"use client";
import React, { useState } from "react";
import * as z from "zod";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { APP_HOST_NAME } from "@/config/site";
import { useSearchParams } from "next/navigation";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { ME_QUERY } from "@/components/Navbar";
import Link from "next/link";
import LoadingButton from "@/components/common/LoadingButton";

export interface EmailVerificationCodeFormProps {
}

type Inputs = {
   code: number
}

const varsSchema = z.object({
   code: z.number(),
   email: z.string().email(),
   identifier: z.string().min(1),
});

const schema = z.object({
   code: z.number({
      message: `The code entered is incorrect. Make sure you enter the code correctly and use the last code requested.`,
      coerce: true,
   })
      .min(100_000)
      .max(999_999)
      .nonnegative({ message: `The code entered is incorrect. Make sure you enter the code correctly and use the last code requested.` }),
});

const SIGN_IN_WITH_EMAIL_CODE_MUTATION = gql(/* GraphQL */`
    mutation SignInWithEmailCode($code: Int!, $email: EmailAddress!, $identifier: String!) {
        signInWithEmailCode(code: $code, email: $email, identifier: $identifier) {
            id
            first_name
            last_name
            name
            metadata
            image
            email
        }
    }
`);

const EmailVerificationCodeForm = ({}: EmailVerificationCodeFormProps) => {
   const [fieldErrors, setFieldErrors] = useState<FieldErrors<Inputs>>(null!);
   const searchParams = useSearchParams();
   const [signIn, { loading: signInLoading }] = useMutation(SIGN_IN_WITH_EMAIL_CODE_MUTATION, { refetchQueries: [ME_QUERY] });

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>({
      resolver: zodResolver(schema),
      reValidateMode: `onSubmit`,
   });

   const onSubmit = async (data: Inputs) => {
      console.log(data, { searchParams });

      let variables = {
         code: data.code,
         email: searchParams.get(`email`)!,
         identifier: searchParams.get(`identifier`)!,
      };

      const varsParsed = varsSchema.safeParse(variables);

      if (varsParsed.success) {
         await signIn({
            variables: varsParsed.data,
            onCompleted: ({ signInWithEmailCode }) => {
               if (signInWithEmailCode.id?.length) {
                  window.location.href = `/`;
               }
            },
         });
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit, errors => {
         if (errors) setFieldErrors(errors);
      })} className="card w-fit shadow-md max-w-xl">
         <div className="card-body bg-neutral-100 rounded-lg">
            <h2 className="card-title !text-3xl">
               Verification code
            </h2>
            <p className={`text-lg mt-4`}>
               You no longer need a password. A 7-digit code has been sent to your email.
            </p>

            <p className={`text-lg mt-4`}>
               We sent code to:victorio.nikolaev@smart-soft.net
            </p>

            <p className={`text-lg mt-4`}>
               Do not close this page until you receive the code (depending on your email it may take up to 5-10 min).
            </p>
            <p className={`text-lg mt-4`}>
               Just enter this code here and you're done:
            </p>
            <label className={` w-full input input-bordered flex items-center gap-4 !bg-transparent mt-2`}>
               C-
               <input
                  placeholder="Code"
                  className="!bg-transparent grow !border-green-600 !w-full"
                  {...register(`code`)} />
            </label>
            <div className="label">
               {fieldErrors?.code && (
                  <span className="label-text-alt text-red-600 !text-sm">
                     {fieldErrors.code.message}
                  </span>
               )}
            </div>
            <div className="card-actions justify-end gap-4">
               <button
                  type={`button`}
                  className="btn btn-outline !px-8 !shadow-md !text-green-600 hover:!bg-green-50/70 transition-all duration-200 !border-none">
                  <Link href={`/signup/user`}>
                     Decline
                  </Link>
               </button>
               <LoadingButton loading={signInLoading} loadingText={`Signing in...`} className="btn btn-accent !px-8 !bg-green-600 !text-white hover:!bg-opacity-95 !shadow-md">
                  Continue
               </LoadingButton>
            </div>
            <div className={`w-full h-[.5px] bg-neutral-300 mt-12`} />
            <div className={`text-neutral-700 mt-4 flex flex-col items-start gap-2`}>
               <details tabIndex={0} className="collapse">
                  <summary className="collapse-title text-base font-medium text-green-600">
                     I'm not getting a code?
                  </summary>
                  <div className="collapse-content">
                     <p>
                        In case you don't receive a code:
                     </p>
                     <ul className={`flex-col flex items-start gap-2 list-disc mt-4`}>
                        <li className={`ml-4`}>
                           Check above that you have written your email address correctly.
                        </li>
                        <li className={`ml-4`}>
                           Make sure you are not entering another email address different from the one in your account.
                        </li>
                        <li className={`ml-4`}>
                           Wait up to 5-10 minutes (depending on your mail, the email may arrive with some delay).
                        </li>
                        <li className={`ml-4`}>
                           Check your spam folder. To ensure reliable and timely delivery of the confirmation email, in
                           case it is marked as "Spam", depending on your mail provider, mark the email as "Not Spam" or
                           add no-reply@{APP_HOST_NAME}.com to your list of "Desired Email Addresses" and/or your
                           contact list. For
                           instructions on how to do this, refer to or contact your mail provider's help page.
                        </li>
                     </ul>
                     <p className={`mt-8`}>
                        In case you still don't receive a code, use the button below to resend a code.
                     </p>
                     <div className={`w-full flex justify-start mt-8`}>
                        <button
                           className="btn btn-outline !px-8 !shadow-md !text-green-600 hover:!bg-green-50/70 transition-all duration-200 !border-green-600">
                           Resend code
                        </button>
                     </div>
                  </div>
               </details>
               <details tabIndex={0} className="collapse">
                  <summary className="collapse-title text-base font-medium text-green-600">
                     Doesn't remember me, requires a code every time I log in?
                  </summary>
                  <div className="collapse-content">
                     <p>
                        Code entry is only required when logging in from a new browser. If in your case such a code is
                        required repeatedly, please ensure that:
                     </p>
                     <ul className={`flex-col flex items-start gap-2 list-disc mt-4`}>
                        <li className={`ml-4`}>
                           You have not used the option to sign out of your account (in case the device is only used by
                           you, you could close the browser without signing out of your account. This way, you will not
                           need to sign in again the next time you sign in).
                        </li>
                        <li className={`ml-4`}>
                           When logging in, the “Remember me” option on the login page is selected.
                        </li>
                        <li className={`ml-4`}>
                           Your browser settings are standard (accepts and does not delete cookies automatically) and
                           that you do not have any additional installed extensions that do this.
                        </li>
                        <li className={`ml-4`}>
                           You do not manually delete your browser cookies.
                        </li>
                     </ul>
                  </div>
               </details>
            </div>
         </div>
      </form>
   );
};

export default EmailVerificationCodeForm;