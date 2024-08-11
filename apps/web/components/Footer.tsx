import React from "react";
import Link from "next/link";
import logo from "@/public/favicon.png";
import Image from "next/image";

export interface FooterProps {
}

const Footer = ({}: FooterProps) => {
   return (
      <section className={`w-full px-24 py-12 mt-24 border-t border-neutral-800`}>
         <div className={`flex items-center justify-between w-full`}>
            <Link href={`/`}>
               <Image className={`rounded-full shadow-md`} height={32} width={32} src={logo} alt={`logo`} />
            </Link>
            <div>
               <h2 className={`text-xl`}>
                  Socials
               </h2>
            </div>
         </div>
      </section>
   );
};

export default Footer;