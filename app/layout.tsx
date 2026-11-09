import type { Metadata } from "next";
import { SHOP_NAME } from "./lib/shopInfo";
import "./globals.css";

// ページ全体の外枠。タブの名前（title）と検索結果の説明文（description）もここで決める。
// 文字はOS標準のフォントを使う（globals.css）。2026-11-09、使っていなかった
// Next.jsの初期のWebフォント（Geist）の読み込みを外した。

export const metadata: Metadata = {
  title: `${SHOP_NAME}｜群馬の家と車の鍵のトラブル`,
  description:
    "群馬県の東毛・中毛・西毛（西毛は一部地域を除く）で、家と車の鍵開け・鍵交換・鍵作成に対応しています。作業の前に必ずお見積りをお伝えします。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
