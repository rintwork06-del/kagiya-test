import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SHOP_NAME } from "./lib/shopInfo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SHOP_NAME}｜群馬の家と車の鍵のトラブル`,
  description:
    "群馬県の東毛・中毛・西毛（西毛は一部地域を除く）で、家と車の鍵開け・鍵交換・鍵作成に対応しています。作業の前に必ずお見積りをお伝えします。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
