import Skeleton from "@/components/common/Skeleton";
import React from "react";

export interface LoadingProps {
}

const Loading = ({}: LoadingProps) => {
   return (
      <section className={`flex flex-col items-center gap-8 mt-24 justify-center !min-h-full w-2/3 mx-auto`}>
         <div className={`mt-12 w-full flex flex-col items-start gap-12`}>
            <Skeleton className={`h-12 w-1/3`} />
            <Skeleton className={`h-40 w-1/2 !rounded-xl`} />
         </div>
      </section>
   );
};

export default Loading;