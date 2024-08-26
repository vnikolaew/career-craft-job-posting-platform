"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

export interface CircleProps {
}

const Circle = ({}: CircleProps) => {
   let cssCircle = useRef<SVGCircleElement>(null!);
   let circle = useRef<SVGElement>(null!);

   let tl = useRef<gsap.core.Timeline>();

   useGSAP((context, contextSafe) => {
      tl.current = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.5, paused: true, defaults: { duration: 1 } });
      tl.current
         .to(cssCircle.current, { x: 120, scale: 2 })
         .to(cssCircle.current, { duration: 0.5, strokeWidth: 12, stroke: "white" });

      gsap.set(circle.current, { transformOrigin: "50% 50%" });

      Draggable.create(circle.current, {
         type: "rotation",
         inertia: true,
      });
   });

   return (
      <div>
         <svg version="1.1" id="demo" xmlns="http://www.w3.org/2000/svg"
              x="0px" y="0px"
              width="200px" height="200px" viewBox="0 0 600 207"
         >
            <circle ref={cssCircle}
                    id="cssCircle"
                    className="element bg-teal-500 w-full h-full stroke-teal-500 stroke-2 !fill-none"
                    cx="57.464" cy="89.464" r="30.131" />
         </svg>
         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              x="0px" y="0px"
              width="600px" height="300px" viewBox="0 0 600 300" enable-background="new 0 0 600 300"
         >
            <g ref={circle} id="circle">
               <g>
                  <circle fill="#88ce02" stroke="#000000" stroke-miterlimit="10" cx="420.681" cy="149.9" r="80.349" />
               </g>
               <text transform="matrix(1 0 0 1 400.2934 153.4218)" font-family="'MyriadPro-Regular'" font-size="12">spin
                  me
               </text>
               <circle fill="#DDEAB0" cx="484.594" cy="149.9" r="10.48" />
            </g>
         </svg>
         <button
            className={`btn btn-sm btn-accent rounded-full !px-12`}
            onClick={_ => tl.current?.restart()}>
            Click to play
         </button>
      </div>
   );
};

export default Circle;