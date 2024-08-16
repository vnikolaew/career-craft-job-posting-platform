import React from "react";
import { getCompanyJob } from "@/app/job/[id]/_queries";

export interface PageProps {
   params: { id: string };
}

const Page = async ({ params: { id } }: PageProps) => {
   const jobListing = await getCompanyJob({ id })

   return (
      <div>
         Job {id}.
      </div>
   );
};

export default Page;