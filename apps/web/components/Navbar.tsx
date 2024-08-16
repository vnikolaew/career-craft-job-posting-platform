"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import logo from "@/public/favicon.png";
import Image from "next/image";
import { DEFAULT_USER_AVATAR_URL, meIdVar } from "@/providers/apollo/ApolloProvider";
import { gql } from "@/__generated__";
import { useMutation, useQuery } from "@apollo/client";
import { UserSignInInput } from "@/__generated__/graphql";
import { isValidUrl } from "@/lib/utils";
import Google from "@/components/icons/Google";
import { Building2, CircleUserRound, LogOut } from "lucide-react";
import LoadingButton from "@/components/common/LoadingButton";

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
            first_name
            last_name
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
            first_name
            last_name
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
            saved_listings {
                id
                listingId
                metadata
                createdAt
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
      <div id={`navbar`}
           className={`w-full px-24 py-5 border-b border-neutral-300 fixed bg-opacity-80 bg-neutral-100 z-10`}>
         <nav className={`flex items-center justify-between`}>
            <Link className={`inline-flex gap-4 items-center`} href={`/`}>
               <Image className={` shadow-md`}
                      height={64} width={132} src={logo} alt={`logo`} />
            </Link>
            <div className={`flex items-center gap-4`}>
               {loading ? (
                  <Fragment>
                     <div className={`h-10 w-10 rounded-full bg-neutral-400 skeleton`} />
                     <div className={`h-4 rounded-md w-24 bg-neutral-400 skeleton mr-4`} />
                  </Fragment>
               ) : <Fragment />}
               <span>
               {data?.me?.id ? (
                  <div className={`flex items-center gap-4`}>
                     <Link className={`!w-fit !h-fit `} href={`/`}>
                        <Image height={40} width={40} className={`rounded-full shadow-md`}
                               src={data?.me?.image ?? DEFAULT_USER_AVATAR_URL}
                               alt={``} />
                     </Link>
                     <span
                        className={`mr-4`}>{data?.me?.name?.length ? data?.me?.name : `${data?.me?.first_name} ${data?.me?.last_name}`}</span>
                     <Link onClick={async e => {
                        e.preventDefault();
                        await handleSignOut();
                     }} href={`/`}>
                        <LoadingButton loadingText={`Signing out`} loading={signingOut} className={`btn-error !h-fit !min-h-fit !py-2 !px-6 !text-white text-base !gap-3`}>
                           Sign out
                           <LogOut size={18} />
                        </LoadingButton>
                     </Link>
                  </div>
               ) : !loading ? (
                     <div className={`flex items-center gap-4`}>
                        <div className={`dropdown`}>
                           <Link onClick={async e => {
                              e.preventDefault();
                              // await handleRegularSignIn();
                           }}
                                 className={`btn btn-outline btn-accent !h-fit !min-h-fit !py-2.5 !px-6 !shadow-md hover:!opacity-95 duration-100 transition-all !text-green-600 !border-green-600 hover:!bg-neutral-100`}
                                 href={`/signup`}>
                              Sign up
                           </Link>
                           <ul
                              className={`menu dropdown-content rounded-md bg-neutral-100 px-2 flex flex-col items-start gap-1`}>
                              <li className={`p-2 cursor-pointer w-full rounded-md min-w-[200px] `}>
                                 <Link className={`w-full inline-flex items-center gap-4 text-lg`} href={`/signup/user`}>
                                    <CircleUserRound size={22} />
                                    User
                                 </Link>
                              </li>
                              <li
                                 className={`p-2 cursor-pointer w-full bg-green-600 transition-all hover:!bg-neutral-100 text-white hover:!text-green-600 rounded-md min-w-[200px]`}>
                                 <Link className={`w-full inline-flex items-center gap-4 text-lg`} href={`/signup`}>
                                    <Building2 size={22} />
                                    Company
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <Link className={`btn btn-info !h-fit !min-h-fit !py-2.5 !px-6 !text-white !bg-green-600 !border-green-600 !shadow-md hover:!opacity-95 duration-100 transition-opacity`}
                              href={`/signin`}>
                           Sign in
                        </Link>
                        <Link onClick={async e => {
                           e.preventDefault();
                           await handleGoogleSignIn();
                        }}
                              className={`text-neutral-500 inline-flex items-center gap-2 text-nowrap btn btn-ghost !h-fit !min-h-fit !py-2.5 !px-6 `}
                              href={`/`}>
                           <Google className={`fill-neutral-700`} />
                           Continue with Google
                        </Link>
                     </div>
                  )
                  : null}
         </span>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;