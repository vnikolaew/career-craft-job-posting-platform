"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

export interface MotionPathExampleProps {
}

const MotionPathExample = ({}: MotionPathExampleProps) => {
   let rect = useRef<SVGElement>(null!);
   let square = useRef<HTMLDivElement>(null!);

   useGSAP(() => {
      gsap.to(square.current, {
         scrollTrigger: {
            once: false,
            trigger: square.current,
            // onLeave: () => gsap.to(square.current, { y: 0, duration: 1 }),
            // onLeaveBack: () => gsap.to(square.current, { y: 0, duration: 1 }),
            toggleActions: `play reverse play reverse`,
         },
         y: -100,
         duration: 1,
      });

      gsap.to(rect.current, {
         duration: 5,
         repeat: 12,
         repeatDelay: 3,
         yoyo: true,
         ease: "power1.inOut",
         motionPath: {
            path: "#path",
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
         },
      });
   });

   return (
      <div className={`w-full flex flex-col items-center gap-4`}>
         <div className={`w-32 p-2 rounded-md bg-teal-500`} ref={square}>
            This is a cool box.
         </div>
         <svg className={`!bg-transparent`} width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
            < circle cx="100" cy="100" r="3" />
            <circle cx="300" cy="20" r="3" />
            <path className={`!bg-transparent !fill-transparent !text-black`} id="path"
                  d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
            <g ref={rect} id="rect">
               <rect width="85" height="30" fill="dodgerblue" />
               <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
            </g>
         </svg>

         <div id="div">#div</div>
      </div>
   );
};

export default MotionPathExample;