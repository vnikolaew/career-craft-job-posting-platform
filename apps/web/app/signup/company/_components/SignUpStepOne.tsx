"use client";
import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__";
import { useRouter, useSearchParams } from "next/navigation";

export interface SignUpStepOneProps {
}

const AVAILABLE_COUNTRIES_QUERY = gql(/* GraphQL */`
    query getAllCountries {
        getAvailableCountries
    }
`);

const schema = z.object({
   country: z.string(),
   companyType: z.union([z.literal(`private`), z.literal(`public`)]),
   bulstatNumber: z.string().refine(x => /\d+$/.test(x), { message: `Please enter a valid bulstat number.` }),
   vatRegistration: z.union([z.literal(`yes`), z.literal(`no`)]),
});

type Inputs = z.infer<typeof schema>;

const SignUpStepOne = ({}: SignUpStepOneProps) => {
   const [fieldErrors, setFieldErrors] = useState<FieldErrors<Inputs>>(null!);
   const { data, loading } = useQuery(AVAILABLE_COUNTRIES_QUERY, {});

   const router = useRouter();
   const searchParams = useSearchParams();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>({
      resolver: zodResolver(schema),
      reValidateMode: `onSubmit`,
   });

   function onSubmit(data: Inputs) {
      console.log({ data });

      let path = window.location.pathname;
      let params = new URLSearchParams(searchParams);

      params.set("step", "register-two");
      Object.entries(data).forEach(([key, value]) => params.set(key, value.toString()));
      router.push(`${path}?${params.toString()}`);
   }

   function onError(errors: any) {
      console.log({ errors });

   }

   return (
      <section className={`w-1/2 mx-auto  gap-4 my-12`}>
         <form className={`card !w-full shadow-md text-nowrap !mx-auto`} onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="card-body bg-neutral-100 rounded-lg">
               <h2 className="card-title !text-3xl">
                  Sign up as a company
               </h2>
               <p className={`text-lg mt-4`}>
                  Sign up as a company. If you're a regular user, use <Link
                  className={`!text-green-600 link link-hover`} href={`/signup/user`}>the User Sign Up page.</Link>
               </p>
               <div className={`flex flex-col items-start !mx-auto !w-fit`}>
                  <div className={`flex flex-col items-start w-full mt-12 gap-4 mx-auto`}>
                     <label className={`form-control w-fit`}>
                        <div className="label !w-fit gap-4">
                        <span className="label-text font-semibold text-lg">
                           Country: *
                        </span>
                           <span className="label-text-alt text-sm italic">
                           (for the company's registration)
                        </span>
                        </div>
                        <select className="select select-bordered !w-fit !min-w-[350px]" {...register(`country`)}>
                           {(data?.getAvailableCountries.toSorted() ?? []).map((country: string) => (
                              <option value={country} key={country}>
                                 {country}
                              </option>
                           ))}
                        </select>
                        <ErrorLabel message={fieldErrors?.country?.message} />
                     </label>
                  </div>

                  <div className={`flex flex-col items-start w-full mt-4 gap-4 mx-auto`}>
                     <label className={`form-control w-fit`}>
                        <div className="label !w-fit gap-4">
                        <span className="label-text font-semibold text-lg">
                           What is the type of your company / organization:
                        </span>
                        </div>
                        <div className="!w-fit flex flex-col items-start gap-0">
                           <div className="form-control">
                              <label className="label cursor-pointer inline-flex items-center gap-2 text-lg">
                                 <input value={`private`} type="radio"
                                        className="radio checked:bg-green-600" {...register(`companyType`)} />
                                 <span className="label-text">
                                 Private
                              </span>
                              </label>
                           </div>
                           <div className="form-control">
                              <label className="label cursor-pointer inline-flex items-center gap-2 text-lg">
                                 <input value={`public`} type="radio"
                                        className="radio checked:bg-green-600" {...register(`companyType`)} />
                                 <span className="label-text">
                                 State / municipal
                              </span>
                              </label>
                           </div>
                        </div>
                        <ErrorLabel message={fieldErrors?.country?.message} />
                     </label>
                  </div>

                  <div className={`flex flex-col items-start w-full mt-4 gap-4 mx-auto`}>
                     <label className={`form-control w-full`}>
                        <div className="label !w-fit gap-4">
                        <span className="label-text font-semibold text-lg">
                           EIK/BULSTAT: *
                        </span>
                        </div>
                        <input type="text" placeholder="Bulstat"
                               className="input input-bordered !bg-transparent !border-green-600 !w-full" {...register(`bulstatNumber`)} />
                        <ErrorLabel message={fieldErrors?.country?.message} />
                     </label>
                  </div>

                  <div className={`flex flex-col items-start w-full mt-4 gap-4 mx-auto`}>
                     <label className={`form-control w-fit`}>
                        <div className="label !w-fit gap-4">
                        <span className="label-text font-semibold text-lg">
                           Does your company/organization have VAT registration?
                        </span>
                        </div>
                        <div className="!w-fit flex flex-col items-start gap-0">
                           <div className="form-control">
                              <label className="label cursor-pointer inline-flex items-center gap-2 text-lg">
                                 <input value={`yes`} type="radio"
                                        className="radio checked:bg-green-600" {...register(`vatRegistration`)} />
                                 <span className="label-text">
                                 Yes
                              </span>
                              </label>
                           </div>
                           <div className="form-control">
                              <label className="label cursor-pointer inline-flex items-center gap-2 text-lg">
                                 <input value={`no`} type="radio"
                                        className="radio checked:bg-green-600" {...register(`vatRegistration`)} />
                                 <span className="label-text">
                                 No
                              </span>
                              </label>
                           </div>
                        </div>
                        <ErrorLabel message={fieldErrors?.country?.message} />
                     </label>
                  </div>
                  <div className={`w-full flex items-center justify-center mt-8`}>
                     <button type={`submit`}
                             className={`btn btn-lg !bg-green-600 !text-white shadow-sm !py-3 rounded-lg !px-16k`}>
                        Continue
                     </button>
                  </div>
               </div>
            </div>
         </form>
      </section>
   );
};

const ErrorLabel = ({ message }: { message?: string }) => (
   <div className="label">
      {message?.length && (
         <span className="label-text-alt text-red-600 !text-sm">
            {message}
         </span>
      )}
   </div>
);

export default SignUpStepOne;