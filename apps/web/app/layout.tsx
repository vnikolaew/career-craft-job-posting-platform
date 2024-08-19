import type { Metadata } from "next";
import {
   Inter,
   Rubik,
   Roboto_Mono,
   Open_Sans,
} from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

import { APP_DESCRIPTION_LONGER, APP_KEYWORDS, APP_NAME, AUTHOR, AUTHOR_WEBSITE } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/providers";
import Script from "next/script";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

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

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = `0`;

export default function RootLayout({
                                      children,
                                   }: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         // data-theme={`corporate`}
            className={`${dancingScript.variable}`} style={{}} color={`dark`} suppressHydrationWarning lang="en">
      <head>
         <Script src="https://leaflet-extras.github.com/leaflet.css/dist/leaflet.css.bundle.min.js"></Script>
         <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
               integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
               crossOrigin="" />
      </head>
      <body>
      <Providers>
         <Navbar />
         <main className={`min-h-[70vh] mt-24`}>
            {children}
         </main>
         <ScrollToTopButton />
         <Footer />
      </Providers>
      </body>
      </html>
   );
}
