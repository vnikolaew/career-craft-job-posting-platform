"use client";
import React from "react";

export interface MyVideosTabProps {
}

const MyVideosTab = ({}: MyVideosTabProps) => {
   let videos = [];

   return (
      <div className={`w-full flex flex-col items-center gap-4 mt-8`}>
        <span className={`text-lg text-neutral-500 drop-shadow-sm`}>
           Here are all of your recorded videos.
        </span>
         <button
            className={`btn  btn-lg rounded-full !bg-primary text-white shadow-md mt-4 !border-primary !py-3 !px-12`}>
            Record a video
         </button>
      </div>
   );
};

export default MyVideosTab;