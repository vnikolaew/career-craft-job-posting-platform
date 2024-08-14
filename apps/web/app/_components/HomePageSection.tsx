import React from "react";

export interface HomePageSectionProps {
   heading?: string
   children?: React.ReactNode
}

const HomePageSection = ({children, heading}: HomePageSectionProps) => {
   return (
      <div className={`flex flex-col items-start gap-8 p-2`}>
         <h2 className={`text-3xl text-neutral-500`}>{heading}</h2>
         <div className={`w-full`}>
            {children}
         </div>
      </div>
   );
};

export default HomePageSection;