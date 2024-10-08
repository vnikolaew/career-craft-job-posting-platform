"use client";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { ArrowLeft, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { match } from "ts-pattern";
import { useToasts } from "@/components/common/Toast";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";

interface CustomizePreferencesModalProps extends MotionProps {
   onBack: () => void;
   hideBanner: () => void;
   open: boolean;
   cookiePreferences: Record<string, any>;
}

export interface CookiePreferences {
   Necessary: boolean;
   Statistics: boolean;
   Functionality: boolean;
   Marketing: boolean;
}

const UPDATE_COOKIE_PREFERENCES_MUTATION = gql(/* GraphQL */`
    mutation UpdateCookiePreferences($preferences: UpdateCookiePreferencesInput!) {
        updateCookiePreferences(input: $preferences)
    }
`);

export const CustomizePreferencesModal = ({
                                             open,
                                             onBack,
                                             cookiePreferences,
                                             hideBanner,
                                             ...props
                                          }: CustomizePreferencesModalProps) => {
   const [preferences, setPreferences] = useState<CookiePreferences>({
      Necessary: cookiePreferences?.[`Necessary`] === true,
      Statistics: cookiePreferences?.[`Statistics`] === true,
      Functionality: cookiePreferences?.[`Functionality`] === true,
      Marketing: cookiePreferences?.[`Marketing`] === true,
   });

   const { showToast } = useToasts();
   const toastId = useId()

   const [updateCookiePreferences, { loading }] = useMutation(UPDATE_COOKIE_PREFERENCES_MUTATION, {
      onCompleted: (data) => {
         if (data?.updateCookiePreferences) {
            onBack?.();
            hideBanner?.();

            showToast({ children: <span>Cookie success</span>, id: toastId });
         }
      }
   })

   // @ts-ignore
   return (
      <motion.div
         className={cn(
            `fixed !bottom-8 !left-[30%] !z-20 !mx-auto hidden !w-2/5 items-center justify-between gap-2 rounded-xl shadow-md`,
            open && `!flex !flex-col`,
         )}
         {...props}
      >
         <div className={`card w-full !bg-neutral-900 p-4 !text-white`}>
            <div className={`card-body flex !flex-row items-center gap-2 p-0`}>
               <button
                  onClick={(_) => {
                     onBack?.();
                  }}
                  variant={`ghost`}
                  className={`btn !h-fit !w-fit rounded-full p-2`}
               >
                  <ArrowLeft size={18} />
               </button>
               <h2 className={`!mt-0 text-base font-semibold`}>Title</h2>
            </div>
            <div className={`divider mx-auto my-2 w-full !bg-neutral-300`} />
            <div className={`mt-4`}>
               <div className={`grid grid-cols-2 gap-4 gap-x-12`}>
                  <PreferenceSwitch
                     label={`Necessary`}
                     checked={preferences.Necessary}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Necessary: value })
                     }
                  />

                  <PreferenceSwitch
                     label={`Statistics`}
                     checked={preferences.Statistics}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Statistics: value })
                     }
                  />

                  <PreferenceSwitch
                     label={`Functionality`}
                     checked={preferences.Functionality}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Functionality: value })
                     }
                  />
                  <PreferenceSwitch
                     label={`Marketing`}
                     checked={preferences.Marketing}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Marketing: value })
                     }
                  />
               </div>
            </div>
            <CardFooter
               className={`!-mx-4 !-mb-4 mt-2 flex items-center justify-between bg-neutral-100 p-2 px-4`}
            >
               <button
                  className={`btn items-center gap-1 !text-sm !text-neutral-400`}
               >
                  <Link href={`/service/privacy`}>
                     Learn more{" "}
                     <ExternalLink
                        className={`ml-1 text-neutral-400`}
                        size={12}
                     />
                  </Link>
               </button>
               <button
                  disabled={loading}
                  onClick={(_) => updateCookiePreferences({
                     variables: {
                        ...preferences
                     }
                  })}
                  className={`btn rounded-md !px-8 shadow-md`}
               >
                  {match(loading)
                     .with(true, _ => (
                        <Loader2 className={`animate-spin`} text={`Saving ...`} />
                     )).otherwise(_ => `Save and submit`)}
               </button>
            </CardFooter>
         </div>
      </motion.div>
   );
};

interface PreferenceSwitchProps {
   label: string;
   checked: boolean;
   onCheckedChange: (checked: boolean) => void;
}

const PreferenceSwitch = ({
                             label,
                             onCheckedChange,
                             checked,
                          }: PreferenceSwitchProps) => {
   return (
      <div className={`flex items-center justify-between`}>
         <h2 className={`text-sm font-semibold`}>{label}</h2>
         <input
            type={`checkbox`}
            defaultChecked
            checked={checked}
            onChange={e => onCheckedChange(e.target.checked)}
            className={`h-6 toggle`}
         />
      </div>
   );
};
