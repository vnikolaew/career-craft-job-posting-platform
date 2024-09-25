"use client";
import { Folder, Mail, Video } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { match } from "ts-pattern";
import MyFilesTab from "./tabs/MyFilesTab";
import MyVideosTab from "@/app/my-files/_components/tabs/MyVideosTab";
import MyCoverLettersTab from "@/app/my-files/_components/tabs/MyCoverLettersTab";

export interface MyFilesTabsProps {
}

const TABS = [
   `Files`,
   `Videos`,
   `Mails`,
] as const;

const MyFilesTabs = ({}: MyFilesTabsProps) => {
   const [tab, setTab] = useState<string>(TABS[0]);

   return (
      <div>
         <div className={`w-full grid gap-4`}>
            <div role="tablist" className="tabs tabs-bordered !w-fit mx-auto">
               <a
                  onClick={_ => setTab(TABS[0])} role="tab"
                  className={cn("tab px-16 text-lg inline-flex gap-2 items-center !pb-1",
                     tab === TABS[0] && "tab-active")}>
                  <Folder />
                  Files
               </a>
               <a
                  onClick={_ => setTab(TABS[1])}
                  role="tab" className={cn("tab px-16 text-lg inline-flex gap-2 items-center !pb-1",
                  tab === TABS[1] && "tab-active")}>
                  <Video />
                  Videos
               </a>
               <a
                  onClick={_ => setTab(TABS[2])}
                  role="tab" className={cn("tab px-16 text-lg inline-flex gap-2 items-center !pb-1",
                  tab === TABS[2] && "tab-active")}>
                  <Mail />
                  Cover letters
               </a>
            </div>
         </div>
         <div>
            {match(tab)
               .with(TABS[0], _ => <MyFilesTab />)
               .with(TABS[1], _ => <MyVideosTab />)
               .with(TABS[2], _ => <MyCoverLettersTab />)
               .otherwise(_ => null)}
         </div>
      </div>
   );
};

export default MyFilesTabs;