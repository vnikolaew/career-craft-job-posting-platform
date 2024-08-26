"use client";
import { TOASTS } from "@/config/toasts";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Fragment, useId, useMemo, useState } from "react";
import { CustomizePreferencesModal } from "./CookieConsentBannerClient";
import { gql } from "@/__generated__";
import { useApolloClient, useMutation } from "@apollo/client";
import { useToasts } from "@/components/common/Toast";
import { ME_QUERY } from "@/components/Navbar";
import { useMeQuery } from "@/hooks/useMeId";

export interface CookieConsentBannerClientTwoProps {
}

const cookieConsentMotionProps: MotionProps = {
   initial: { opacity: 0, translateX: -20 },
   animate: { opacity: 100, translateX: 0 },
   exit: { opacity: 0, translateX: -20 },
   transition: {
      duration: 0.2,
   },
};

const customizePrefsModalProps: MotionProps = {
   initial: { opacity: 0, translateY: 20 },
   animate: { opacity: 100, translateY: 0 },
   exit: { opacity: 0, translateY: 20 },
   transition: {
      duration: 0.2,
   },
};

const ACCEPT_ALL_COOKIES_MUTATION = gql(/* GraphQL */`
    mutation AcceptAllCookies {
        acceptAllCookies
    }
`);

const DECLINE_ALL_COOKIES_MUTATION = gql(/* GraphQL */`
    mutation DeclineAllCookies {
        declineAllCookies
    }
`);

const CookieConsentBannerClientTwo = ({
                                      }: CookieConsentBannerClientTwoProps) => {
   const me = useMeQuery()
   const cookiePrefs = useMemo(() => ({
      Necessary: me?.me?.cookiePreferences?.[`necessary`] === true,
      Statistics: me?.me?.cookiePreferences?.[`statistics`] === true,
      Functionality: me?.me?.cookiePreferences?.[`functionality`] === true,
      Marketing: me?.me?.cookiePreferences?.[`marketing`] === true,
   }), [me?.me?.cookiePreferences])

   const { showToast } = useToasts();
   const dialogId = useId();
   const client = useApolloClient();

   const [hideBanner, setHideBanner] = useState(false);
   const [showManagePrefsBanner, setShowManagePrefsBanner] = useState(false);

   const [declineCookieConsent, { loading: declineLoading }] = useMutation(DECLINE_ALL_COOKIES_MUTATION, {
      onCompleted: (data) => {
         if (data?.declineAllCookies) {
            client.refetchQueries({ include: [ME_QUERY] });

            setHideBanner(true);
            setShowManagePrefsBanner(true);
         }
      },
   });

   const [acceptAllCookies, { loading: acceptLoading }] = useMutation(ACCEPT_ALL_COOKIES_MUTATION, {
      onCompleted: (data) => {
         if (data?.acceptAllCookies) {
            client.refetchQueries({ include: [ME_QUERY] });

            setHideBanner(true);
            showToast({
               id: dialogId,
               icon: TOASTS.ACCEPT_COOKIE_CONSENT_SUCCESS.icon,
               duration: 5000,
               children: <div className={`flex items-center gap-2`}>
                  <div className={`flex flex-col items-start gap-2`}>
                     <span className={`text-xl`}>{TOASTS.ACCEPT_COOKIE_CONSENT_SUCCESS.message}</span>
                     <span className={`text-base`}>{TOASTS.ACCEPT_COOKIE_CONSENT_SUCCESS.description}</span>
                  </div>
               </div>,
            });
         }

      },
   });


   return (
      <Fragment>
         <AnimatePresence>
            {!hideBanner && (
               <motion.section
                  {...cookieConsentMotionProps}
                  className={cn(
                     "fixed bottom-8 left-8 z-[1000] mx-auto max-w-3xl rounded-2xl border border-gray-200 p-4 md:flex md:items-center md:gap-x-4 !bg-neutral-100 !text-neutral-700",
                     hideBanner && `!hidden`,
                  )}
               >
                  <div className="flex items-center gap-x-4">
                     <span
                        className="inline-flex shrink-0 rounded-lg bg-neutral-300/80 p-2 text-green-700 dark:bg-neutral-200/60">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M17.9803 8.5468C17.5123 8.69458 17.0197 8.7931 16.5271 8.7931C14.2118 8.76847 12.3399 6.89655 12.3153 4.58128C12.3153 4.13793 12.3892 3.69458 12.537 3.27586C11.9951 2.68473 11.6995 1.92118 11.6995 1.13301C11.6995 0.812808 11.7488 0.492611 11.8473 0.172414C11.2315 0.0738918 10.6158 0 10 0C4.48276 0 0 4.48276 0 10C0 15.5172 4.48276 20 10 20C15.5172 20 20 15.5172 20 10C20 9.77833 20 9.55665 19.9754 9.33498C19.2611 9.26108 18.5468 8.99015 17.9803 8.5468ZM4.58128 7.31527C6.30542 7.31527 6.30542 10.0246 4.58128 10.0246C2.85714 10.0246 2.61084 7.31527 4.58128 7.31527ZM6.05912 15.7635C4.08867 15.7635 4.08867 12.8079 6.05912 12.8079C8.02956 12.8079 8.02956 15.7635 6.05912 15.7635ZM9.01478 1.33005C10.7389 1.33005 10.7389 4.28571 9.01478 4.28571C7.29064 4.28571 7.04434 1.33005 9.01478 1.33005ZM10.2463 8.84237C11.7241 8.84237 11.7241 10.8128 10.2463 10.8128C8.76848 10.8128 9.01478 8.84237 10.2463 8.84237ZM11.9704 16.9458C10.4926 16.9458 10.4926 14.9754 11.9704 14.9754C13.4483 14.9754 13.202 16.9458 11.9704 16.9458ZM16.6503 13.1034C15.4187 13.1034 15.4187 11.133 16.6503 11.133C17.8818 11.133 17.8818 13.1034 16.6503 13.1034Z"
                              fill="currentColor"
                           />
                        </svg>
                     </span>
                     <p className="text-sm leading-5 !text-neutral-700">
                        {`We use cookies to ensure that we give you the best experience on our website.`}
                        <Link
                           href="/cookie-policy"
                           className="ml-1 text-green-700 hover:underline"
                        >
                           Read our cookie policy.
                        </Link>
                     </p>
                  </div>
                  <div className="mt-6 flex shrink-0 items-center gap-x-4 lg:mt-0">
                     <button
                        onClick={(_) => {
                           setHideBanner(true);
                           setShowManagePrefsBanner(true);
                        }}
                        className="w-1/2 text-xs underline transition-colors duration-300 hover:text-gray-600 focus:outline-none dark:text-white dark:hover:text-gray-400 md:w-auto !text-neutral-700"
                     >
                        Cookie Settings
                     </button>

                     <button
                        disabled={acceptLoading}
                        onClick={(_) => acceptAllCookies()}
                        className="flex w-1/2 items-center gap-2 rounded-lg bg-green-700 px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none md:w-auto"
                     >
                        {acceptLoading ? (
                           <Fragment>
                              <Loader2 size={14} className={`animate-spin`} />
                              Accepting ...
                           </Fragment>
                        ) : (
                           `Accept All Cookies`
                        )}
                     </button>
                  </div>
               </motion.section>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {showManagePrefsBanner && (
               <CustomizePreferencesModal
                  onBack={() => {
                     setShowManagePrefsBanner(false);
                     setHideBanner(false);
                  }}
                  hideBanner={() => setHideBanner(true)}
                  open={showManagePrefsBanner}
                  cookiePreferences={cookiePrefs ?? { }}
                  {...customizePrefsModalProps}
               />
            )}
         </AnimatePresence>
      </Fragment>
   );
};

export default CookieConsentBannerClientTwo;
