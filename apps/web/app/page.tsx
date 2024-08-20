import { APP_NAME } from "@/config/site";
import Skeleton from "@/components/common/Skeleton";
import HomePageSection from "@/app/_components/HomePageSection";
import TopCategoriesSection from "@/app/_components/TopCategoriesSection";
import TopEmployersSection from "./_components/TopEmployersSection";
import List from "@/components/common/List";
import { getHomePageStats } from "@/app/_queries";
import { Search } from "lucide-react";

export default async function Home() {
   const { totalJobListingsCount, jobListingsToday, signedIn } = await getHomePageStats();
   const signedOut = !signedIn

   return (
      <section className={`flex flex-col items-center gap-8 mt-24 justify-center !min-h-full`}>
         <div className={`mt-24`}>
            {signedOut && (<h2 className={`text-3xl mt-24`}>Welcome to <b>{APP_NAME}</b>.</h2>)}
         </div>
         <div className={`w-full flex items-center justify-between mt-8 px-24`}>
            <div className={`text-lg text-neutral-500 inline-flex items-center gap-4`}>
               <Search size={18} />
               <span>
                  Searching across <b className={`text-2xl text-black`}>
                  {totalJobListingsCount?.jobListings?.length ?? 0}
               </b> job listings
               </span>
            </div>
            <span className={`text-lg text-neutral-500 `}>
               Today: <b className={`text-2xl text-black`}>{jobListingsToday}</b>
            </span>
         </div>
         <div className={`divider w-3/4 mx-auto `} />
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
