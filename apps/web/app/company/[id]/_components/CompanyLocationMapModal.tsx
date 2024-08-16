"use client";
import React from "react";
import Map from "@/app/company/[id]/_components/Map";

export interface CompanyLocationMapModalProps {
   id: string;
   coordinates: {
      lat: number
      lng: number
   }
}

const CompanyLocationMapModal = ({ id , coordinates }: CompanyLocationMapModalProps) => {
   return (
      <dialog id={id} className="modal ">
         <div className="modal-box min-w-[800px] !w-1/2 !bg-neutral-100 !mx-auto">
            <form method="dialog">
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">
               View map
            </h3>
            <div className="py-4 w-full !min-h-[400px]">
               <Map coordinates={coordinates} />
            </div>
         </div>
         <form method="dialog" className="modal-backdrop">
            <button>close</button>
         </form>
      </dialog>
   );
};

export default CompanyLocationMapModal;