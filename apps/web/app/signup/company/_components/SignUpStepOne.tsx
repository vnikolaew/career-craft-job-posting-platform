"use client";
import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

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
   bulstatNumber: z.number(),
   vatRegistration: z.boolean(),
});

type Inputs = z.infer<typeof schema>;

const SignUpStepOne = ({}: SignUpStepOneProps) => {
   const [fieldErrors, setFieldErrors] = useState<FieldErrors<Inputs>>(null!);
   const { data, loading } = useQuery(AVAILABLE_COUNTRIES_QUERY, {});

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
   }

   return (
      <section className={`w-1/2 mx-auto  gap-4 my-12`}>
         <form className={`card !w-full shadow-md text-nowrap !mx-auto`} onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body bg-neutral-100 rounded-lg">
               <h2 className="card-title !text-3xl">
                  Sign up as a company
               </h2>
               <p className={`text-lg mt-4`}>
                  Sign up as a company. If you're a regular user, use <Link
                  className={`!text-green-600 link link-hover`} href={`/signup/user`}>the user signup page.</Link>
               </p>
               <div className={`flex flex-col items-center w-full mt-12 gap-4 mx-auto`}>
                  <label className={`form-control w-fit`}>
                     <div className="label !w-fit gap-4">
                        <span className="label-text font-semibold text-lg">
                           Country: *
                        </span>
                        <span className="label-text-alt text-sm italic">
                           (for the company's registration)
                        </span>
                     </div>
                     <select className="select select-bordered !w-fit" {...register(`country`)}>
                        {data?.getAvailableCountries?.map((country: string) => (
                           <option value={country} key={country}>
                              {country}
                           </option>
                        ))}
                     </select>
                     <ErrorLabel message={fieldErrors?.country?.message} />
                  </label>
               </div>
               <div className={`flex flex-col items-center w-full mt-4 gap-4 mx-auto`}>
                  <label className={`form-control w-fit`}>
                     <div className="label !w-fit gap-4">
                        <span className="label-text font-semibold text-lg">
                           What is your company/organization:
                        </span>
                     </div>
                     <div className="!w-fit flex flex-col items-start gap-0">
                        <div className="form-control">
                           <label className="label cursor-pointer inline-flex items-center gap-2 text-lg">
                              <input type="radio" className="radio checked:bg-green-600" {...register(`companyType`)}/>
                              <span className="label-text">
                                 Private
                              </span>
                           </label>
                        </div>
                        <div className="form-control">
                           <label className="label cursor-pointer inline-flex items-center gap-2 text-lg">
                              <input type="radio" className="radio checked:bg-green-600" {...register(`companyType`)}/>
                              <span className="label-text">
                                 State / municipal
                              </span>
                           </label>
                        </div>
                     </div>
                     <ErrorLabel message={fieldErrors?.country?.message} />
                  </label>
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