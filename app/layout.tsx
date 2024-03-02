import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextauthSesssionProvider from "./provider/session-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300`}>
        <NextauthSesssionProvider>
        {children}
        </NextauthSesssionProvider>
        </body>
    </html>
  );
}
