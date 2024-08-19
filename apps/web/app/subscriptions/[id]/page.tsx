"use client";
import React from "react";

export interface PageProps {
   params: {
      id: string
   }
}

const Page = ({params: { id }}: PageProps) => {
   return (
      <div>
         Subscription {id}.
      </div>
   );
};

export default Page;