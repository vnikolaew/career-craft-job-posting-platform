"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface PageProps {
}

export const templateSchema = z.object({
   name: z.string(),
   template: z.string(),
});

export type TemplateSchema = z.infer<typeof templateSchema>;

const Page = ({}: PageProps) => {
   const { handleSubmit, register, ...methods } = useForm<TemplateSchema>({
      resolver: zodResolver(templateSchema),
      defaultValues: {
         name: ``,
         template: ``,
      },
      mode: `onChange`,
      reValidateMode: `onChange`,
   });

   async function onSubmit(data) {
      console.log({ data });
   }

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`mt-12 w-full flex flex-col items-center gap-8`}>
            <h2 className={`text-4xl !self-start gap-8`}>
               Create a CV template
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className={`w-full flex flex-col items-start mt-8 gap-4`}>
               <label className="form-control w-full">
                  <div className="label">
                     <span className="label-text text-xl">
                        Template name *
                     </span>
                  </div>
                  <input required type="text" placeholder=""
                         className="input input-bordered w-2/3" {...register(`name`)} />
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
                     className="input input-bordered w-2/3 min-h-[200px] py-3" {...register(`template`)} />
               </label>
            <div className={`w-full mx-auto flex justify-center my-8`}>
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