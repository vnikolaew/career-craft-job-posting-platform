"use client";
import React, { ReactNode } from "react";
import { useMeQuery } from "@/hooks/useMeId";
import Image from "next/image";
import { DEFAULT_USER_AVATAR_URL } from "@/providers/apollo/ApolloProvider";
import { FileCheck, Grid2X2, Home, ListChecks, Loader2, LogOut, Mail, Phone, Search, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { ME_QUERY, SIGN_OUT_MUTATION } from "@/components/Navbar";
import { useDrawerContext } from "@/components/common/Drawer";

export interface SideDrawerProps {
}

const SideDrawer = ({}: SideDrawerProps) => {
   const me = useMeQuery()!;
   const [signOut, { data: signOutData, loading: signingOut }] = useMutation(SIGN_OUT_MUTATION, {
      refetchQueries: [ME_QUERY],
   });

   async function handleSignOut() {
      await signOut({
         variables: {}, onCompleted: (data) => {
            if (data?.signOut) {
            }
         },
      });
   }

   return (
      <div className={`w-full min-w-[300px] h-full p-4 flex flex-col items-start`}>
         <Link href={`/dashboard`} className={`w-full flex items-center gap-6`}>
            <Image className={`rounded-full shadow-sm`} height={40} width={40}
                   src={me?.me?.image ?? DEFAULT_USER_AVATAR_URL}
                   alt={me?.me?.name ?? ``} />
            <div className={`flex flex-col gap-0 items-start`}>
               <span className={`text-lg`}>{me.me?.name}</span>
               <span className={`text-neutral-500`}>{me.me?.email}</span>
            </div>
         </Link>
         <div className={`divider w-full`} />
         <ul className={`flex flex-col items-start gap-2 w-full`}>
            <SideDrawerLink href={`/`} icon={<Home />}>
               Home
            </SideDrawerLink>
            <SideDrawerLink href={`/`} icon={<Search />}>
               Job listings
            </SideDrawerLink>
            <SideDrawerLink href={`/trends`} icon={<TrendingUp />}>
               Trends
            </SideDrawerLink>
         </ul>
         <div className={`divider w-full my-0 `} />
         <ul className={`flex flex-col items-start gap-2 w-full`}>
            <SideDrawerLink href={`/dashboard`} icon={<Grid2X2 />}>
               My account
            </SideDrawerLink>
            <SideDrawerLink href={`/my-files`} icon={<FileCheck />}>
               My files
            </SideDrawerLink>
            <SideDrawerLink href={`/applications`} icon={<ListChecks />}>
               Applications
            </SideDrawerLink>
            <SideDrawerLink href={`/subscriptions`} icon={<Mail />}>
               Email notifications
            </SideDrawerLink>
            <SideDrawerLink href={`/contacts`} icon={<Phone />}>
               Contacts
            </SideDrawerLink>
            <SideDrawerLink onClick={async () => {
               await handleSignOut();
            }} icon={<LogOut />}>
               <button disabled={signingOut}
                       className={`btn btn-error !h-fit !min-h-fit !py-2 text-lg !gap-3 !bg-transparent !text-black !border-none !px-0 !font-normal disabled:!opacity-80`}>
                  {signingOut ? (
                     <>
                        <Loader2 size={18} className={`animate-spin`} />
                        <span>Signing out ...</span>
                     </>
                  ) : `Sign out`
                  }

               </button>
            </SideDrawerLink>
         </ul>
         <div className={`divider w-full !my-0`} />
         <div className={`flex items-center gap-2 !w-full justify-between`}>
            <span className={`flex-1 p-2 hover:!bg-neutral-200 cursor-pointer rounded-md`}>
               Bulgarian
            </span>
            <span className={`flex-1 p-2 hover:!bg-neutral-200 cursor-pointer rounded-md`}>
               English
            </span>
         </div>
      </div>
   );
};

const SideDrawerLink = ({
                           icon, children, href, onClick,
                        }: {
   icon: ReactNode,
   children: ReactNode;
   href?: string;
   onClick?: () => void | Promise<void>
}) => {
   const {setOpen } = useDrawerContext()
   return (
      <Link onClick={e => {
         setOpen(false)
         if (onClick) {
            e.preventDefault();
            onClick?.();
         }
      }} className={`w-full`} href={href ?? ``}>
         <li className={`w-full flex items-center gap-8 hover:!bg-neutral-200 cursor-pointer !py-2 rounded-md`}>
            <span className={`ml-2`}>
               {icon}
            </span>
            <div className={`text-lg`}>{children}</div>
         </li>
      </Link>
   );
};
export default SideDrawer;