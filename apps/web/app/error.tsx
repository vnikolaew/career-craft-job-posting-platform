"use client"; // Error boundaries must be Client Components
import { useEffect } from "react";

export default function Error({
                                 error,
                                 reset,
                              }: {
   error: Error & { digest?: string }
   reset: () => void
}) {

   useEffect(() => {
      console.error({ error });
   }, [error]);

   return (
      <section className={`w-full flex flex-col items-center gap-2 mt-24`}>
         <div className={`flex flex-col mt-12 items-center w-ful `}>
            <h2 className={`text-2xl`}>Something went wrong!</h2>
            <span className={`text-red-500 font-semibold text-lg w-1/2 text-center text-wrap `}>{error?.message}</span>
            <button className={`btn btn-neutral`} onClick={() => reset()}>
               Try again
            </button>
         </div>
      </section>
   );
}