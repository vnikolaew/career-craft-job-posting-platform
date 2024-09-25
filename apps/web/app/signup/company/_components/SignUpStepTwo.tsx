"use client";
import Link from "next/link";
import React, { ComponentProps, Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import * as z from "zod";
import { FieldErrors, FieldPath, FormProvider, useForm, useFormContext } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { APP_HOST_NAME, APP_NAME } from "@/config/site";
import Image from "next/image";
import * as _ from "lodash";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";

export interface SignUpStepTwoProps {
}

const schema = z.object({
   companyName: z.string(),
   companyAddressRegistration: z.string(),
   organizationType: z.union([z.literal(`company`), z.literal(`agency`)]),
   businessSectors: z.array(z.string()).nullable().default([]),
   companySite: z.string(),
   companyPhone: z.string(),
   companyAddress: z.string(),
   administratorFirstName: z.string(),
   administratorLastName: z.string(),
   administratorEmail: z.string().email(),
   administratorPosition: z.string(),
   administratorPhone: z.string(),
   companyUsername: z.string(),
   companyPassword: z.string()
      .refine(x => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(x), { message: `Please enter a valid password.` }),
   companyPasswordConfirm: z.string()
      .refine(x => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(x), { message: `Please enter a valid password.` }),
   authorizedPerson: z.union([z.literal(`true`), z.literal(`false`)]),
   officialName: z.string().nullish(),
   officialEmail: z.string().email().nullish(),
   officialPhone: z.string().nullish(),
   officialCorrespondenceAddress: z.string().nullish(),
   key: z.string(),
});

const COMPANY_SIGN_UP = gql(/* GraphQL */`
    mutation CompanySignUp($input: CompanySignUpInput!) {
        companySignUp(input: $input) {
            id
            email
            name
            metadata
        }
    }
`);

const refined = schema.refine(x => x.companyPassword === x.companyPasswordConfirm, {
   message: `Passwords do not match.`,
   path: [`companyPasswordConfirm`],
});

type Inputs = z.infer<typeof schema>;

export const LS_COMPANY_SIGNUP_FORM_VALUES_KEY = `company-signup-form-values`;

const SignUpStepTwo = ({}: SignUpStepTwoProps) => {
   const [fieldErrors, setFieldErrors] = useState<FieldErrors<Inputs>>(null!);
   const [companySignUp, { loading }] = useMutation(COMPANY_SIGN_UP, {});

   const router = useRouter();
   const searchParams = useSearchParams();
   const entries = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

   const {
      register,
      handleSubmit,
      formState,
      watch,
      ...methods
   } = useForm<Inputs>({
      resolver: zodResolver(refined),
      reValidateMode: `onSubmit`,
      defaultValues: async (_) => {
         let data = schema.partial().safeParse(JSON.parse(localStorage.getItem(LS_COMPANY_SIGNUP_FORM_VALUES_KEY) ?? `{}`));
         console.log({ data });

         return data?.success ? data?.data : null!;
      },
   });

   const values = watch();
   useEffect(() => {
      let data = schema
         .partial()
         .safeParse(JSON.parse(localStorage.getItem(LS_COMPANY_SIGNUP_FORM_VALUES_KEY) ?? `{}`))
         ?.data ?? {};
      let newValue = _.mergeWith(data, values, (src, dest) => {
         if (values !== null || values !== undefined) return src;
         return dest;
      });

      localStorage.setItem(
         LS_COMPANY_SIGNUP_FORM_VALUES_KEY,
         JSON.stringify(newValue));
   }, [values]);

   async function onSubmit(data: Inputs) {
      console.log({ data });

      // Handle company sign up:
      let res = await companySignUp({
         variables: {
            input: {
               administratorEmail: data.administratorEmail,
               administratorFirstName: data.administratorFirstName,
               administratorLastName: data.administratorLastName,
               administratorPosition: data.administratorPosition,
               administratorPhone: data.administratorPhone,
               authorizedPerson: data.authorizedPerson === `true`,
               businessSectors: [],
               companyAddress: data.companyAddress,
               companyAddressRegistration: data.companyAddressRegistration,
               companyPhone: data.companyPhone,
               companySite: data.companySite,
               companyUsername: data.companyUsername,
               companyPassword: data.companyPassword,
               companyPasswordConfirm: data.companyPasswordConfirm,
               companyName: data.companyName,
               key: "key",
               organizationType: "company",
               officialCorrespondenceAddress: data.officialCorrespondenceAddress,
               officialEmail: data.officialEmail,
               officialName: data.officialName,
            },
         },
      });

      if (res.data?.companySignUp?.id && !res.errors?.length) {
         let path = window.location.pathname;
         let params = new URLSearchParams(searchParams);

         params.set("step", "success");
         router.push(`${path}?${params.toString()}`);
      }
   }

   function onError(errors: any) {
      console.log({ errors });
   }

   return (
      <section className={`w-1/2 mx-auto  gap-4 my-12`}>
         <form className={`card !w-full shadow-md text-nowrap !mx-auto`} onSubmit={handleSubmit(onSubmit, onError)}>
            <FormProvider {...{ ...methods, formState, fieldErrors, register, handleSubmit }}>
               <div className="card-body bg-neutral-100 rounded-lg">
                  <h2 className="card-title !text-3xl">
                     Sign up as a company
                  </h2>
                  <p className={`text-lg mt-4`}>
                     Sign up as a company. If you're a regular user, use <Link
                     className={`!text-green-600 link link-hover`} href={`/signup/user`}>the User Sign Up page.</Link>
                  </p>
                  <div className={`flex flex-col items-start !mx-auto !w-fit my-8`}>
                     <div className={`flex flex-col items-start gap-2 text-lg`}>
                        <div className={`flex items-center gap-2`}>
                           <label className={`font-semibold`} htmlFor="">Country: </label>
                           <span>{entries["country"]}</span>
                        </div>

                        <div className={`flex items-center gap-2`}>
                           <label className={`font-semibold`} htmlFor="">EIK / Bulstat: </label>
                           <span>{entries["bulstatNumber"]}</span>
                        </div>

                        <div className={`flex items-center gap-2`}>
                           <label className={`font-semibold`} htmlFor="">VAT number: </label>
                           <span>{entries["vatRegistration"] === `yes` ? `registered for VAT` : `not registered for VAT`}</span>
                        </div>
                     </div>
                  </div>
                  <div className={`divider w-full`} />
                  <p className={`w-2/3 text-wrap text-lg`}>
                     Please fill in the company name as it appears in the commercial register, including the type of
                     company (ET/EOOD/OOD/AD...): </p>
                  <div className={`flex flex-col items-start gap-3 mt-4`}>
                     <FormTextField label={
                        <Fragment>
                        <span className="label-text text-xl">
                          Company Name:*
                        </span>
                           <span className="label-text-alt text-base">
                           (in Native)
                        </span>
                        </Fragment>
                     } name={`companyName`} />
                     <FormTextField textarea label={
                        <span className="label-text text-xl !min-w-[200px] !text-wrap !text-end">
                          Company address of registration:*
                        </span>
                     } name={`companyAddressRegistration`} />
                  </div>
                  <div className={`divider w-full`} />
                  <FormRadioField label={`Type of organization:*`} name={`organizationType`} options={[
                     {
                        value: `company`,
                        label: <Fragment>
                           <span className="label-text !text-lg">
                              Companies/Organizations
                           </span>
                           <span className="label-text-alt !text-sm">
                              Directly looking for employees.
                           </span>
                        </Fragment>,
                     },
                     {
                        value: `agencies`,
                        label: <Fragment>
                           <span className="label-text !text-lg">
                              Agencies/Consultancy firms for recruitment or employment times
                           </span>
                           <span className="label-text-alt !text-sm">
                              A completely free service to candidates.
                           </span>
                        </Fragment>,
                     },
                  ]} />
                  <FormTextField label={`Company site:`} name={`companySite`} />
                  <FormTextField label={`Organization's phone:`} name={`companyPhone`} />
                  <FormTextField textarea label={`Address:`} name={`companyAddress`} />
                  <h2 className={`text-2xl font-semibold mt-4`}>
                     Administrative information
                  </h2>
                  <p className={`w-full !text-wrap !text-lg leading-tight`}>
                     This information is needed to verify the authenticity of the registration and is NOT PUBLISHED on
                     the site.
                     After publishing one or more ads, a {APP_NAME} administrator will contact you on the indicated
                     phones
                     to confirm the registration.
                  </p>
                  <h3 className={`!font-semibold !text-lg mt-4`}>
                     Please fill in your name, title and contact details:
                  </h3>
                  <FormTextField label={`First Name: *`} name={`administratorFirstName`} />
                  <FormTextField label={`Last Name: *`} name={`administratorLastName`} />
                  <FormTextField label={`Position: *`} name={`administratorPosition`} />
                  <FormTextField label={`Office Phone: *`} name={`administratorPhone`} />
                  <FormTextField label={`Work email: *`} name={`administratorEmail`} />
                  <p className={`ml-[200px]`}>
                     (An email will be sent to the indicated work email to confirm the registration request made)
                  </p>
                  <div className="form-control !ml-[200px]">
                     <label className="label cursor-pointer !justify-start !gap-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text">
                           I want to receive the weekly newsletter at www.{APP_HOST_NAME}.com/newsletter
                        </span>
                     </label>
                  </div>
                  <h3 className={`!font-semibold !text-lg mt-4`}>
                     Choose your username to login to the site:
                  </h3>
                  <FormTextField label={`Username: *`} name={`companyUsername`} />
                  <p className={`ml-[200px]`}>
                     (minimum 6 symbols)
                  </p>
                  <FormTextField type={`password`} label={`Password: *`} name={`companyPassword`} />
                  <p className={`ml-[200px] !text-wrap`}>
                     (Choose a password at least 10 characters long, containing a combination of letters, numbers and
                     special characters. The password must not match and be sufficiently different from passwords you
                     have used before both on {APP_HOST_NAME}.com and on other sites. Do not use the same or similar to
                     the chosen
                     password on other sites.)
                  </p>
                  <FormTextField label={
                     <Fragment>
                          <span className="label-text !text-lg">
                              Password: *
                           </span>
                        <span className="label-text-alt !text-sm">
                              (confirm)
                        </span>
                     </Fragment>
                  } type={`password`} name={`companyPasswordConfirm`} />
                  <div className={`divider w-full`} />
                  <div className={`w-2/3 flex flex-col items-start gap-2 !ml-auto !text-wrap`}>
                     <p>
                        Are you the authorized person from your company that our administrators can contact for
                        confirmation of listings, financial or other questions?
                     </p>
                     <div className={`flex flex-col items-start gap-2`}>
                        <label className="label cursor-pointer !items-start !gap-2">
                           <input value={`true`} type="radio"
                                  className="radio checked:bg-green-600" {...register(`authorizedPerson`)} />
                           <div className={`flex flex-col items-start`}>
                              Yes
                           </div>
                        </label>
                        <label className="label cursor-pointer !items-start !gap-2">
                           <input value={`false`} type="radio"
                                  className="radio checked:bg-green-600" {...register(`authorizedPerson`)} />
                           <div className={`flex flex-col items-start`}>
                              No
                           </div>
                        </label>
                     </div>
                  </div>
                  <div className={`divider w-full`} />
                  <h3 className={`!font-semibold !text-lg mt-4`}>
                     Contact for contacting you on matters related to personal data protection
                  </h3>
                  <p className={`text-wrap`}>
                     As an employer and data controller, the new Data Protection Regulation requires you to specify a
                     contact point where users can contact you with questions about their personal data (applications
                     sent to you). When receiving inquiries from candidates, you are obliged to take the necessary
                     actions according to the Regulation.
                  </p>
                  <p className={`mt-4`}>
                     Please select the appropriate option for your company:
                  </p>
                  <div className={`divider w-full`} />

                  <h3 className={`!font-semibold !text-xl mt-4`}>
                     Company identification
                  </h3>
                  <p className={`text-red-500 !text-wrap !text-lg`}>
                     <strong>
                        Important:
                     </strong>
                     In order to increase the security of the service, identification is introduced through a
                     bank transfer in the amount of BGN 1 (excluding VAT), which aims to guarantee the identity of the
                     company.
                  </p>
                  <p className={`text-wrap text-lg`}>
                     In your account you will find a proforma invoice "Account Validation" worth BGN 1 (excluding VAT).
                  </p>
                  <p className={`text-wrap text-lg`}>
                     <strong>
                        Payment must be made from the company bank account of the legal entity requesting the
                        registration.
                     </strong>
                     The account will not be validated if the payment is made at a cash desk in a bank, by card payment,
                     through Easypay, etc., as well as from a company account of another legal entity. In order for the
                     account to be validated, it is necessary to see the full IBAN number of the sender in our banking
                     system. Please check with your bank that the payment method you are using meets this requirement.
                     The "Account Validation" fee is non-refundable. There may be additional registration requirements
                     depending on the type of company. Payment of this fee does not guarantee that the registration will
                     be approved.
                  </p>

                  <div className={`divider w-full`} />
                  <label className="form-control w-full max-w-xs !flex-row items-start gap-4">
                     <div className="label !flex-col !items-end !justify-start !font-semibold !min-w-[200px] !text-xl">
                        Key:
                     </div>
                     <div>
                        <Image height={200} width={200}
                               src={`https://business.jobs.bg/protect_image.php?key=e9754cb00bbf925c73e6abdde71db053`}
                               alt={`key`} />
                     </div>
                  </label>

                  <FormTextField label={`Enter the key: *`} name={`key`} />
                  <p className={`ml-[200px]`}>
                     (Copy the letters/numbers from the blue box above. Use lowercase Latin letters.)
                  </p>
                  <div className={`w-full flex items-center justify-center mt-4`}>
                     <button
                        className={`btn btn-lg shadow-sm !px-12 !bg-green-600 !text-white !py-3 hover:!opacity-80 transition-opacity duration-200`}>
                        Sign up
                     </button>
                  </div>
               </div>
            </FormProvider>
         </form>
      </section>
   );
};

const FormTextField = ({ label, name, textarea = false, type = `text` }: {
   label: ReactNode,
   name: FieldPath<Inputs>,
   textarea?: boolean,
   type?: ComponentProps<"input">["type"]
}) => {
   const { register } = useFormContext<Inputs>();

   return (
      <label className="form-control w-full max-w-xs !flex-row items-start gap-4">
         <div className="label !flex-col !items-end !justify-start !font-semibold !min-w-[200px] !text-xl">
            {label}
         </div>
         {textarea ? (
            <textarea placeholder=""
                      className="textarea input-bordered w-full min-w-[300px] min-h-[120px]" {...register(name)} />
         ) : (
            <input type={type} placeholder=""
                   className="input input-bordered w-full min-w-[300px]" {...register(name)} />
         )}
      </label>
   );
};

const FormRadioField = ({ label, name, options }: {
   label: ReactNode,
   name: FieldPath<Inputs>,
   textarea?: boolean,
   options: { label: ReactNode, value: string }[]
}) => {
   const { register } = useFormContext<Inputs>();

   return (
      <label className="form-control w-full max-w-xs !flex-row items-start gap-4">
         <div className="label !flex-col !items-end !justify-start !font-semibold !min-w-[200px] !text-xl">
            {label}
         </div>
         <div className={`flex flex-col items-start gap-4`}>
            {options.map(({ label, value }) => (
               <label className="label cursor-pointer !items-start !gap-2" key={value}>
                  <input value={value} type="radio" className="radio checked:bg-green-600" {...register(name)} />
                  <div className={`flex flex-col items-start`}>{label}</div>
               </label>
            ))}
         </div>
      </label>
   );
};


export default SignUpStepTwo;