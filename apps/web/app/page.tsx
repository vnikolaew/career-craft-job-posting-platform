import { APP_NAME } from "@/config/site";
import TopCategoriesSection from "@/app/_components/TopCategoriesSection";
import TopEmployersSection from "./_components/TopEmployersSection";
import { getHomePageStats } from "@/app/_queries";
import { Search } from "lucide-react";
import NewsArticlesSection from "@/app/_components/NewsArticlesSection";

interface HomeProps {
   params: {},
   searchParams: { category?: string }
}

export default async function Home({  }: HomeProps) {
   const { totalJobListingsCount, jobListingsToday, signedIn } = await getHomePageStats();
   const signedOut = !signedIn;

   return (
      <section className={`flex flex-col items-center gap-8 mt-24 justify-center !min-h-full !bg-neutral-100`}>
         <div className={`mt-24 flex flex-col items-center gap-2`}>
            {signedOut && (<h2 className={`text-3xl mt-24`}>Welcome to <b>{APP_NAME}</b>.</h2>)}
            <h3 className={`text-neutral-500 text-lg drop-shadow-md`}>
               Where Opportunities Meet Talent.
            </h3>
         </div>
         <div className={`w-3/4 flex items-center justify-between mt-8 px-24 mx-auto`}>
            <div className={`text-2xl text-neutral-500 inline-flex items-center gap-4`}>
               <Search size={22} />
               <span>
                  Searching across <b className={`text-2xl text-green-700 drop-shadow-sm`}>
                  {totalJobListingsCount?.jobListings?.length ?? 0}
               </b> job listings
               </span>
            </div>
            <span className={`text-2xl text-neutral-500 `}>
               Today: <b className={`text-2xl text-green-700 drop-shadow-sm`}>{jobListingsToday}</b>
            </span>
         </div>
         <div className={`divider w-3/4 mx-auto `} />
         <div className={`w-full bg-neutral-200 mt-12 pb-12`}>
            <div className={`my-8 w-2/3 mx-auto !mb-16`}>
               <section className={`grid w-full grid-cols-[2fr_3fr_2fr] gap-4`}>
                  <TopCategoriesSection />
                  <TopEmployersSection />
                  <NewsArticlesSection />
               </section>
            </div>
         </div>
      </section>
   );
}
