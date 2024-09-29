import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
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
        <ClerkProvider>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}</ClerkProvider>
      </body>
    </html>
  );
}
