import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { APP_DESCRIPTION_LONGER, APP_KEYWORDS, APP_NAME, AUTHOR, AUTHOR_WEBSITE } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/providers";

const geistSans = localFont({
   src: "./fonts/GeistVF.woff",
   variable: "--font-geist-sans",
});
const geistMono = localFont({
   src: "./fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
});

export const metadata: Metadata = {
   title: APP_NAME,
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
      <html color={`dark`} suppressHydrationWarning lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Providers>
         <Navbar />
         <main className={`min-h-[70vh]`}>
            {children}
         </main>
         <Footer />
      </Providers>
      </body>
      </html>
   );
}
