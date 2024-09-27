"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { MY_CVS_QUERY } from "@/app/my-files/_components/tabs/MyCoverLettersTab";
import { useRouter } from "next/navigation";

export interface PageProps {
}

export const templateSchema = z.object({
   name: z.string(),
   template: z.string(),
});

const CREATE_CV_TEMPLATE_MUTATION = gql(/* GraphQL */`
    mutation CreateCvTemplate($name: String!, $template: String!) {
        createUserCoverLetterTemplate(input: {name: $name, content: $template}) {
            id
            user_id
            name
            letter
            createdAt
            metadata
        }
    }
`);

export type TemplateSchema = z.infer<typeof templateSchema>;

const Page = ({}: PageProps) => {
   const [createCvTemplate, { loading, error }] = useMutation(CREATE_CV_TEMPLATE_MUTATION, {
      refetchQueries: [MY_CVS_QUERY],
   });
   const { handleSubmit, register, ...methods } = useForm<TemplateSchema>({
      resolver: zodResolver(templateSchema),
      defaultValues: {
         name: ``,
         template: ``,
      },
      mode: `onChange`,
      reValidateMode: `onChange`,
   });

   let router = useRouter()
   async function onSubmit({ name, template }: TemplateSchema) {
      console.log({ name, template });

      let res = await createCvTemplate({
         variables: {
            name, template,
         },
      });
      console.log({ res });

      if(res.data.createUserCoverLetterTemplate?.id?.length) router.push(`/my-files?tab=CVs`)
   }

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`mt-12 w-full flex flex-col items-center gap-8`}>
            <h2 className={`text-4xl !self-start gap-8`}>
               Create a CV template
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className={`w-full flex flex-col items-start mt-8 gap-4`}>
               <label className="form-control w-full">
                  <div className="label"> <span className="label-text text-xl">
                        Template name *
                     </span>
                  </div>
                  <input required type="text" placeholder=""
                         className="input input-bordered w-2/3 shadow-md" {...register(`name`)} />
               </label>
               <label className="form-control w-full">
                  <div className="label">
                     <span className="label-text text-xl">
                        Template content *
                     </span>
                  </div>
                  <textarea
                     required
                     placeholder=""
                     className="input input-bordered w-2/3 min-h-[200px] py-3 shadow-md" {...register(`template`)} />
               </label>
               <div className={`w-full mx-auto flex justify-center my-8 !mb-20 items-center`}>
                  <Link href={`/my-files?tab=CVs`}>
                     <button
                        className={`link link-hover text-primary mt-4 !py-3 !px-8 inline-flex items-center gap-2`}>
                        <ArrowLeft size={22} />
                        Back
                     </button>
                  </Link>
                  <button
                     className={`btn btn-lg rounded-full !bg-primary text-white shadow-md mt-4 !border-primary !py-3 !px-16`}>
                     Save
                  </button>
               </div>

            </form>
         </div>
      </section>
   );
};

export default Page;