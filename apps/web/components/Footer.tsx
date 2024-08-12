import React from "react";
import Link from "next/link";
import logo from "@/public/favicon.png";
import Image from "next/image";
import { Github } from "lucide-react";
import { APP_NAME } from "@/config/site";

export interface FooterProps {
}

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
   twitter: (props: IconProps) => (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         enableBackground="new 0 0 1668.56 1221.19"
         viewBox="0 0 1668.56 1221.19"
         id="twitter-x"
         {...props}
      >
         <path
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
            transform="translate(52.39 -25.059)"
         ></path>
      </svg>
   ),
   github: (props: IconProps) => <Github {...props} />,
   facebook: (props: IconProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" {...props}>
         <path
            d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
      </svg>
   ),
   linkedIn: (props: IconProps) => (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         id="linkedin"
         {...props}
      >
         <path
            d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
      </svg>
   ),
};
const ICON_CLASSNAME = `h-6 w-6 !fill-neutral-200 text-white transition-colors duration-100 hover:!fill-accent hover:!text-accent`

const Footer = ({}: FooterProps) => {
   return (
      <section className={`w-full px-24 py-12 mt-24 border-t border-neutral-800`}>
         <div className={`flex items-center justify-between w-full`}>
            <div className={`flex flex-col items-start`}>
               <Link className={`inline-flex gap-2 items-center`} href={`/`}>
                  <Image className={`rounded-full shadow-md`} height={32} width={32} src={logo} alt={`logo`} />
                  <h2 className={`text-lg font-semibold`}>{APP_NAME}</h2>
               </Link>
               <span className={`!mt-4 text-sm !text-secondary`}>
                  Copyright © {new Date().getFullYear()} - All rights reserved.
               </span>
            </div>
            <div>
               <div className="mb-8 mt-4 flex space-x-6">
                  <Link
                     title={`Twitter`}
                     target="_blank"
                     rel="noreferrer"
                     href={`https://twitter.com/`}
                  >
                     <span className="sr-only">Twitter</span>
                     <Icons.twitter className={ICON_CLASSNAME} />
                  </Link>
                  <Link
                     title={`LinkedIn`}
                     target="_blank"
                     rel="noreferrer"
                     href={`https://linkedin.com/`}
                  >
                     <span className="sr-only">LinkedIn</span>
                     <Icons.linkedIn className={ICON_CLASSNAME} />
                  </Link>
                  <Link
                     title={`LinkedIn`}
                     target="_blank"
                     rel="noreferrer"
                     href={`https://facebook.com/`}
                  >
                     <span className="sr-only">Facebook</span>
                     <Icons.facebook className={ICON_CLASSNAME} />
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;