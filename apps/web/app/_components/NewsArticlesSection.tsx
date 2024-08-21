"use client";
import React from "react";
import HomePageSection from "@/app/_components/HomePageSection";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";

export interface NewsArticlesSectionProps {
}

const NewsArticlesSection = ({}: NewsArticlesSectionProps) => {
   return (
      <HomePageSection heading={"News & Articles"}>
         <List count={3} render={key => <Skeleton key={key} className={`w-1/2 h-6 mt-4`} />} />
      </HomePageSection>
   );
};

export default NewsArticlesSection;