import styles from "./page.module.css";

export default function Home() {
   return (
      <section className={styles.page}>
         <h2 className={`text-2xl font-normal`}>
            <span className={`mx-1 font-bold`}>
               Apollo
            </span>
            &
            <span className={`mx-1 font-bold`}>
               NextJS
            </span>
            Starter Template.
         </h2>
      </section>
   );
}
