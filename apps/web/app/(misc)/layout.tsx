"use client";
import React, { PropsWithChildren } from "react";
import gsap, {} from 'gsap';
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface LayoutProps extends PropsWithChildren {
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Draggable);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const Layout = ({children}: LayoutProps) => {
   return (
      <main className={`container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20`}>
         <div className={`max-w-3xl mx-auto`}>
            {children}
         </div>
      </main>
   );
};

export default Layout;