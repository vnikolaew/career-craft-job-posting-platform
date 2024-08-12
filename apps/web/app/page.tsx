"use client"
import {  useQuery } from "@apollo/client";
import styles from "./page.module.css";
import { gql } from "@/__generated__";
import { ME_QUERY } from "@/components/Navbar";

const ME_FRAGMENT = gql(/* GraphQL */`
    fragment MeFragment on User {
        id
        name
        email
        cookiePreferences {
            Functionality
            Marketing
            Necessary
            Statistics
        }
    }
`);

export default function Home() {
   const {data: me, loading} = useQuery(ME_QUERY, { })

   const now = new Date()
   const message = now.getHours() <= 12 ? `Good Morning` : now.getHours() <= 18 ? `Good Afternoon` : `Good Evening`;

   return (
      <section className={styles.page}>
         <h2 className={`text-2xl font-normal text-center`}>
            <span className={`mx-1 font-bold`}>
               Apollo
            </span>
            &
            <span className={`mx-1 font-bold`}>
               NextJS
            </span>
            <br/>
            Starter Template.
         </h2>
         {loading && <div className={`h-4 rounded-md w-32 bg-neutral-700 animate-pulse`}/>}
         {!loading && me?.me?.name && (
            <h2 className={`text-xl`}>{message}, <b>{me?.me?.name}</b>.</h2>
         )}
      </section>
   );
}
