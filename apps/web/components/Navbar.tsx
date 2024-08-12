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
import { isValidUrl } from "@/lib/utils";
import Google from "@/components/icons/Google";
import { LogOut } from "lucide-react";

export interface NavbarProps {
}

const DEFAULT_USER: UserSignInInput = {
   email: `victorio.nikolaev25@gmail.com`,
   username: `vnikolaew`,
   password: `vNikolaew123!`,
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
                functionality
                marketing
                necessary
                statistics
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
                functionality
                marketing
                necessary
                statistics
            }
        }
    }
`);

export const GOOGLE_LOGIN_QUERY = gql(/* GraphQL */`
    query GoogleLoginQuery($redirectUrl: String!) {
        googleLoginUrl(redirect_url: $redirectUrl)
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
   const { refetch: getGoogleLoginUrl, loading: getGoogleLoginUrlLoading } = useQuery(GOOGLE_LOGIN_QUERY, {
      skip: true,
   });

   const [signIn, { data: signInData, loading: signingIn }] = useMutation(SIGN_IN_MUTATION, {});
   const [signOut, { data: signOutData, loading: signingOut }] = useMutation(SIGN_OUT_MUTATION, {});

   const handleGoogleSignIn = async () => {
      const res = await getGoogleLoginUrl({ redirectUrl: window.location.href });
      if (isValidUrl(res.data.googleLoginUrl)) {
         window.location.href = res.data.googleLoginUrl;
      }
   };

   const handleRegularSignIn = async () => {
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
   };

   async function handleSignOut() {
      await signOut({
         variables: {}, onCompleted: (data) => {
            if (data?.signOut) window.location.reload();
         },
      });
   }

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
                  <Link className={`!w-fit !h-fit `} href={`/`}>
                     <Image height={40} width={40} className={`rounded-full shadow-md`}
                            src={data?.me?.image ?? DEFAULT_USER_AVATAR_URL}
                            alt={``} />
                  </Link>
               )}

               {loading && <div className={`h-3 rounded-md w-12 bg-neutral-700 animate-pulse mr-4`} />}
               {data?.me?.name && !loading && <span className={`mr-4`}>{data.me.name}</span>}
               {!data?.me?.name && !loading && <span className={`mr-4`}>Not signed in.</span>}

               <span>
               {data?.me?.name ? (
                  <Link onClick={async e => {
                     e.preventDefault();
                     await handleSignOut();
                  }} className={`btn btn-error !h-fit !min-h-fit !py-2 !px-4 !text-white text-base !gap-3`} href={`/`}>
                     Sign out
                     <LogOut size={18} />
                  </Link>
               ) : (
                  <div className={`flex items-center gap-4`}>
                     <Link onClick={async e => {
                        e.preventDefault();
                        await handleRegularSignIn();
                     }} className={` btn btn-info !h-fit !min-h-fit !py-3 !px-6 !text-white`} href={`/signin`}>Sign
                        in</Link>
                     <Link onClick={async e => {
                        e.preventDefault();
                        await handleGoogleSignIn();
                     }}
                           className={`text-white inline-flex items-center gap-2 text-nowrap btn btn-ghost !h-fit !min-h-fit !py-3 !px-6 `}
                           href={`/signin`}>
                        <Google className={`fill-white`} />
                        Continue with Google
                     </Link>
                  </div>
               )}
          </span>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;