"use client";
import React, { ComponentProps } from "react";

export interface TruckProps extends ComponentProps<"svg"> {
}

const Truck = ({ ...props }: TruckProps) => {
   return (
      <svg
         width="200px"
         height="100px"
         viewBox="0 0 200 100"
         xmlns="http://www.w3.org/2000/svg"
         version="1.1" {...props}>

         <rect x="10" y="40" width="120" height="40" fill="currentColor" />
         <rect x="130" y="30" width="60" height="50" fill="currentColor" />
         <rect x="50" y="30" width="40" height="20" fill="currentColor" />
         <rect x="60" y="35" width="20" height="10" fill="currentColor" />

         <circle cx="40" cy="80" r="10" fill="currentColor" />
         <circle cx="140" cy="80" r="10" fill="currentColor" />

      </svg>

   );
};

export default Truck;