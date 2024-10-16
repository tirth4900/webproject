import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google';

import Topbar from '@/components/shared/Topbar'
import Leftsidebar from '@/components/shared/Leftsidebar'
import Rightsidebar from '@/components/shared/Rightsidebar'
import Bottombar from '@/components/shared/Bottombar'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'], // Adjust based on your usage
});


export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>

    <body className={`${inter.className} ${geistSans.className} ${geistMono.className} antialiased`}>
          <Topbar />

              <main className="flex flex-row">
                <Leftsidebar />

                <section className="main-container">
                  <div className="w-full max-w-4xl">
                    {children}
                  </div>

                </section>

                <Rightsidebar />
              </main>
              
              <Bottombar />
      </body>
    </html>
    </ClerkProvider>
  );
}
