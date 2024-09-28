import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "T3 GALLERY",
  description: "Generated by create-t3-app by FARHAN",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="max-w-8xl flex w-full flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
