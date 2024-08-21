import React from "react";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <div className={`mt-12 w-full flex flex-col items-center gap-8`}>
            <h2 className={`text-4xl !self-start gap-8`}>
               Applications
            </h2>
            <div className={`flex flex-col items-center gap-4 mt-12`}>
               <span className={`text-neutral-500 text-xl !drop-shadow-sm`}>
                 These are your applications.
               </span>
            </div>
            <div className={`flex w-full justify-between mt-8`}>
            </div>
            <div className={`w-full grid grid-cols-2 gap-4`}>
               <div role="tablist" className="tabs tabs-bordered w-full">
                  <a role="tab" className="tab">Tab 1</a>
                  <a role="tab" className="tab tab-active">Tab 2</a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Page;