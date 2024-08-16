"use client";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "@/components/Navbar";
import { APP_NAME } from "@/config/site";
import { useMemo } from "react";
import Skeleton from "@/components/common/Skeleton";
import HomePageSection from "@/app/_components/HomePageSection";
import TopCategoriesSection from "@/app/_components/TopCategoriesSection";
import TopEmployersSection from "./_components/TopEmployersSection";
import List from "@/components/common/List";

export default function Home() {
   const { data: me, loading } = useQuery(ME_QUERY, {});
   const signedOut = useMemo(() => !loading && !me?.me, [loading, me]);

   const username = useMemo(() => {
      if (!me?.me) return null;
      return me?.me?.name?.length ? me?.me?.name : `${me?.me?.first_name} ${me?.me?.last_name}`;
   }, [me]);

   const now = new Date();
   const message = now.getHours() <= 12 ? `Good Morning` : now.getHours() <= 18 ? `Good Afternoon` : `Good Evening`;

   return (
      <section className={`flex flex-col items-center gap-8 mt-24 justify-center !min-h-full`}>
         <div className={`mt-24`}>
            {loading && <Skeleton className={`h-8 w-64`} />}
            {!loading && username && (
               <h2 className={`text-xl`}>{message}, <b>{username}</b>.</h2>
            )}
            {signedOut && (
               <h2 className={`text-3xl mt-24`}>Welcome to <b>{APP_NAME}</b>.</h2>
            )}
         </div>
         <div className={`w-full bg-neutral-300 mt-12`}>
            <div className={`my-8 w-2/3 mx-auto !mb-16`}>
               <section className={`grid w-full grid-cols-[2fr_3fr_2fr] gap-4`}>
                  <TopCategoriesSection />
                  <TopEmployersSection />
                  <HomePageSection heading={"News & Articles"}>
                     <List count={3} render={key => <Skeleton key={key} className={`w-1/2 h-6 mt-4`} />} />
                  </HomePageSection>
               </section>
            </div>
         </div>
      </section>
   );
}
