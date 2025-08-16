import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteNav } from "~/app/_components/layout/site-nav";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Manuel Meraz",
  description: "Manuel Meraz's personal website",
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/favicon.svg" },
    { rel: "icon", url: "/favicon.ico", sizes: "any" }, // fallback
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#f4efdc] font-sans">
        {" "}
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
