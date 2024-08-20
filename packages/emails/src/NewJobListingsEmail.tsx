import React, { ReactNode } from "react";
import { Html, Tailwind } from "@react-email/components";

export interface NewJobListingsEmailProps {
   email: string;
   subscriptionsId: string;
   subscriptionsLink: string;
   seeAllSimilarLink: string;
   jobListings: {
      id: string, name: string, createdAt: string, description_raw: string, location: string, company: {
         id: string, name: string, image_url: string
      }
   }[];
}

const NewJobListingsEmail = ({}: NewJobListingsEmailProps) => {
   return (
      <Html lang="en">
         <Tailwind
            config={{
               theme: {
                  extend: {
                     colors: {
                        brand: "#007291",
                     },
                  },
               },
            }}
         >
            HI
         </Tailwind>
      </Html>

   );
};

export default NewJobListingsEmail;