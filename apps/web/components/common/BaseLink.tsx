"use client";
import React, { ComponentProps } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

export interface BaseLinkProps extends LinkProps, Omit<ComponentProps<"a">, `href`> {
}

const BaseLink = ({ href, children, className, ...rest }: BaseLinkProps) => {
   return (
      <Link className={cn(`link link-hover !text-green-600`, className)} href={href}>
         {children}
      </Link>
   );
};

export default BaseLink;