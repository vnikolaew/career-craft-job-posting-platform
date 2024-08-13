import type { Metadata } from "next";
import { Inter, Oswald, Rubik, Rubik_Mono_One, PT_Sans, Work_Sans, Raleway, Montserrat, Roboto_Mono, Open_Sans, Dancing_Script, Merriweather, Lato, Noto_Sans } from "next/font/google";
import "./globals.css";

import { APP_DESCRIPTION_LONGER, APP_KEYWORDS, APP_NAME, AUTHOR, AUTHOR_WEBSITE } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/providers";

const inter = Inter({
   weight: ["400", "500", "600", "700"],
   subsets: ["latin"],
   variable: "--font-mono",

});

const roboto = Roboto_Mono({
   weight: "400",
   subsets: ["latin"],
   display: "swap",
   variable: "--font-mono",
});

const openSans = Open_Sans({
   variable: "--font-mono",
   weight: "400",
   subsets: ["latin"],
   display: "swap",
});

const dancingScript = Rubik({
   variable: "--font-mono",
   weight: "400",
   subsets: ["latin"],
   display: "swap",
});

export const metadata: Metadata = {
   title: `${APP_NAME} | ${APP_DESCRIPTION_LONGER}`,
   description: APP_DESCRIPTION_LONGER,
   keywords: APP_KEYWORDS,
   authors: [
      {
         name: AUTHOR,
         url: AUTHOR_WEBSITE,
      },
   ],
   applicationName: APP_NAME,
};

export default function RootLayout({
                                      children,
                                   }: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html className={`${dancingScript.variable}`} style={{}} color={`dark`} suppressHydrationWarning lang="en">
      <body>
      <Providers>
         <Navbar />
         <main className={`min-h-[70vh] mt-24`}>
            {children}
         </main>
         <Footer />
      </Providers>
      </body>
      </html>
   );
}
