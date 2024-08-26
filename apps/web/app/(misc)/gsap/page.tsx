"use client";
import React, { ComponentProps, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Circle from "@/app/(misc)/_components/Circle";
import MotionPathExample from "@/app/(misc)/_components/MotionPathExample";

export interface Props {
}

const Box = ({ children, className, anim }: ComponentProps<"div"> & { anim?: string }) => {
   return (
      <div className={`box ${className}`} data-animate={anim}>
         {children}
      </div>
   );
};

const Page = ({}: Props) => {
   const container = useRef<HTMLDivElement>(null!);
   const rectangle = useRef<HTMLDivElement>(null!);
   const circle = useRef<HTMLDivElement>(null!);
   const column = useRef<HTMLDivElement>(null!);
   const [x, setX] = useState(0);

   let { contextSafe } = useGSAP(() => {
      gsap.to(rectangle.current, { x: 360 });
      // or refs...
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });

      gsap.to("[data-animate='rotate']", {
         rotation: 360,
         repeat: -1,
         repeatDelay: 1,
         yoyo: true,
      });

      gsap.to("[data-animate='move']", {
         x: 50,
         repeat: -1,
         repeatDelay: 1,
         yoyo: true,
      });
   }, { scope: container });

   let {} = useGSAP(() => {
      gsap.from(`.box`, { opacity: 0, stagger: 0.2 });
   }, { scope: column });

   let {} = useGSAP(() => {
      gsap.from(`.box-2`, { to: x });
   }, { scope: column, dependencies: [x] });

   const onClickGood = contextSafe(() => {
      gsap.to(".good", { rotation: `+=180` });
   });

   return (
      <section ref={container}>
         <div ref={rectangle} className={`p-2 h-auto bg-teal-400 rounded-md shadow-md box w-fit`}>
            Hi, I am a box
         </div>
         <div className={`p-2 bg-teal-400 rounded-full shadow-md box w-fit`} ref={circle}>
            Hi, I am a circle
         </div>
         <button onClick={onClickGood} className={`btn btn-sm good`}>Click me</button>
         <div ref={column} className={`flex flex-col items-start gap-2 w-full mx-auto mt-8`}>
            <div className="box w-4 h-4 rounded-full bg-teal-500"></div>
            <div className="box w-4 h-4 rounded-full bg-teal-500"></div>
            <div className="box w-4 h-4 rounded-full bg-teal-500"></div>

            <Box anim={`move`} className="box w-4 h-4 rounded-full bg-teal-500" />
            <Box anim={`rotate`} className="box w-4 h-4 rounded-md bg-red-500" />


            <div className="box w-4 h-4 rounded-full bg-sky-500 box-2"></div>
            <button onClick={_ => setX(x => x + 10)} className={`btn btn-sm`}>Click me 2</button>
            <div>
               <Circle/>
               <MotionPathExample />
            </div>
         </div>
      </section>
   );
};

export default Page;