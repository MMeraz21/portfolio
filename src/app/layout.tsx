import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { SiteNav } from "~/app/_components/layout/site-nav";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Manuel Meraz",
  description: "Manuel Meraz's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-[#fbfbf3]"> {/* Set the background color here */}
        <TRPCReactProvider>
          {/* <SiteNav /> */}
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
