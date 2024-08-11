"use client";
import Link from "next/link";
import React from "react";
import logo from "@/public/favicon.png";
import Image from "next/image";
import { DEFAULT_USER_AVATAR_URL } from "@/providers/ApolloProvider";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

export interface NavbarProps {
}

const ME_QUERY = gql(/* GraphQL */`
    query MeQuery {
        me {
            id
            name
            email
            image
            metadata
        }
    }
`);

const Navbar = ({}: NavbarProps) => {
   const { data, loading, error } = useQuery(ME_QUERY, {});

   return (
      <div id={`navbar`} className={`w-full px-24 py-4 border-b border-neutral-800`}>
         <nav className={`flex items-center justify-between`}>
            <Link href={`/`}>
               <Image className={`rounded-full shadow-md`} height={32} width={32} src={logo} alt={`logo`} />
            </Link>
            <div className={`flex items-center gap-4`}>
               {loading ? (
                  <div className={`h-10 w-10 rounded-full bg-neutral-700 animate-pulse`} />
               ) : (
                  <Link href={`/`}>
                     <Image height={40} width={40} className={`rounded-full shadow-md`}
                            src={data?.me?.image ?? DEFAULT_USER_AVATAR_URL}
                            alt={``} />
                  </Link>
               )}
               {loading && <div className={`h-3 rounded-md w-12 bg-neutral-700 animate-pulse`} />}
               {data?.me?.name && !loading && <span className={``}>{data.me.name}</span>}
               {!data?.me?.name && !loading && <span>Not signed in.</span>}

               {data?.me?.name ? (
                  <span>
                      <Link className={`text-blue-500 underline`} href={`/`}>Logout</Link>
                  </span>
               ) : (
                  <span>
                   <Link className={`text-blue-500 underline`} href={`/signin`}>Sign in</Link>
                  </span>
               )
               }
            </div>
         </nav>
      </div>
   );
};

export default Navbar;