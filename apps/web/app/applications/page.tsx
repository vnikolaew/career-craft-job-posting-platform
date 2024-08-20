import React from "react";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <h2 className={`mt-12 text-2xl`}>
            Applications page.
         </h2>
      </section>
   );
};

export default Page;