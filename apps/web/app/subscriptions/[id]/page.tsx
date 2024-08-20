import React from "react";
import { getSubscriptionById } from "./_queries";
import { notFound } from "next/navigation";

export interface PageProps {
   params: {
      id: string
   };
}

const Page = async ({ params: { id } }: PageProps) => {
   let subscription = await getSubscriptionById(id);
   if(!subscription) notFound()

   return (
      <div>
         Subscription {id}.
      </div>
   );
};

export default Page;