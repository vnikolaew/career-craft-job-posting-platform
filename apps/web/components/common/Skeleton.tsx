"use client";
import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends ComponentProps<"div"> {
}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
   return (
      <div className={cn(`h-6 w-12 rounded-full bg-neutral-400 skeleton`, className)} {...props} />
   );
};

export default Skeleton;