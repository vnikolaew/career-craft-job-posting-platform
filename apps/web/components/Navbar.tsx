"use client";
import Link from "next/link";
import React from "react";
import logo from "@/public/favicon.png";
import Image from "next/image";
import { DEFAULT_USER_AVATAR_URL, meIdVar } from "@/providers/ApolloProvider";
import { gql } from "@/__generated__";
import { useMutation, useQuery } from "@apollo/client";
import { UserSignInInput } from "@/__generated__/graphql";
import { APP_NAME } from "@/config/site";

export interface NavbarProps {
}

const DEFAULT_USER: UserSignInInput = {
   email: `victorio.nikolaev25@gmail.com`,
   username: `vnikolaew2`,
   password: `6]F?U2Y$b@8u]tU`,
};

const SIGN_OUT_MUTATION = gql(/* GraphQL */`
    mutation SignOut {
        signOut
    }
`);

const SIGN_IN_MUTATION = gql(/* GraphQL */`
    mutation SignIn($signInModel: UserSignInInput!) {
        signIn(signInModel: $signInModel) {
            id
            name
            email
            image
            metadata
            cookieConsent
            cookiePreferences {
                Functionality
                Marketing
                Necessary
                Statistics
            }
            createdAt
        }
    }
`);

export const ME_QUERY = gql(/* GraphQL */`
    query MeQuery {
        me {
            id
            name
            email
            image
            metadata
            cookieConsent
            cookiePreferences {
                Functionality
                Marketing
                Necessary
                Statistics
            }
        }
    }
`);

const Navbar = ({}: NavbarProps) => {
   const { data, loading, error } = useQuery(ME_QUERY, {
      onCompleted: (data) => {
         if (data?.me?.id) {
            meIdVar(data?.me?.id);
         }
      },
   });

   const [signIn, { data: signInData, loading: signingIn }] = useMutation(SIGN_IN_MUTATION, {});
   const [signOut, { data: signOutData, loading: signingOut }] = useMutation(SIGN_OUT_MUTATION, {});

   return (
      <div id={`navbar`} className={`w-full px-24 py-4 border-b border-neutral-800`}>
         <nav className={`flex items-center justify-between`}>
            <Link className={`inline-flex gap-4 items-center`} href={`/`}>
               <Image className={`rounded-full shadow-md`} height={32} width={32} src={logo} alt={`logo`} />
               <h2 className={`text-xl`}>{APP_NAME}</h2>
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

               <span>
               {data?.me?.name ? (
                  <Link onClick={async e => {
                     e.preventDefault();
                     await signOut({
                        variables: {}, onCompleted: (data) => {
                           if (data?.signOut) window.location.reload();
                        },
                     });
                  }} className={`text-blue-500 underline`} href={`/`}>Sign out</Link>
               ) : (
                  <Link onClick={async e => {
                     e.preventDefault();
                     await signIn({
                        variables: {
                           signInModel: DEFAULT_USER,
                        },
                        onCompleted: (data) => {
                           if (data?.signIn?.id) {
                              console.log(data.signIn);
                              window.location.reload();
                           }
                        },
                     });

                  }} className={`text-blue-500 underline`} href={`/signin`}>Sign in</Link>
               )}
          </span>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;