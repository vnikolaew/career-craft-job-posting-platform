import type { Metadata } from "next";
import {
   Inter,
   Oswald,
   Rubik,
   Rubik_Mono_One,
   PT_Sans,
   Work_Sans,
   Raleway,
   Montserrat,
   Roboto_Mono,
   Open_Sans,
   Dancing_Script,
   Merriweather,
   Lato,
   Noto_Sans,
} from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

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
         <script src="https://leaflet-extras.github.com/leaflet.css/dist/leaflet.css.bundle.min.js"></script>
         <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
               integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
               crossOrigin="" />
         <title>{APP_NAME} | {APP_DESCRIPTION_LONGER}</title>
      </head>
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
