// ページの一番上（2026-11-09）。2段。
//   1. 白い帯：店名（左）と、営業時間＋電話のボタン（右）
//   2. 紺のメニューの帯：押すとページ内の各セクションへ飛ぶ。スクロールしても画面の上に残る
// 2026-11-11、一番上にあった細い帯（一言と、店舗情報・対応エリアへのリンク）を消した
// （兄：リンクが下のメニューと同じで意味がない）。
// 店名の左の鍵のアイコンは付けない（2026-11-08、兄「いらんくない」）。

import { SHOP_NAME, SHOP_PHONE } from "../../lib/shopInfo";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon } from "../Icons";

const MENU = [
  { href: "#service", label: "家の鍵・車の鍵" },
  { href: "#price", label: "料金" },
  { href: "#direct", label: "当店について" },
  { href: "#flow", label: "ご依頼の流れ" },
  { href: "#area", label: "対応エリア" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function SiteHeader() {
  return (
    <>
      <header className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-5 py-3">
          <div className="flex flex-col">
            <p className="t-note font-bold text-blue">群馬県の鍵のトラブルに対応</p>
            <p className="t-heading font-bold text-navy">{SHOP_NAME}</p>
          </div>
          <div className="flex items-center">
            <p className="t-note mr-3 hidden flex-col justify-center text-right leading-tight text-slate-600 sm:flex">
              <span className="font-bold text-navy">営業時間 7:00〜22:00</span>
              <span>不定休</span>
            </p>
            <PhoneLink className="flex items-center gap-2 bg-brand-red px-3 py-2 font-bold text-white transition hover:brightness-110 sm:px-5">
              <PhoneIcon className="h-5 w-5" />
              <span className="t-body hidden sm:inline sm:t-heading">{SHOP_PHONE}</span>
              <span className="t-note sm:hidden">電話する</span>
            </PhoneLink>
          </div>
        </div>
      </header>

      {/* メニュー。スマホでは横にスクロールして全部見られる */}
      <nav className="sticky top-0 z-20 w-full bg-navy">
        <ul className="mx-auto flex w-full max-w-5xl overflow-x-auto">
          {MENU.map((m) => (
            <li key={m.href} className="flex-1 shrink-0 border-r border-white/20 first:border-l">
              <a
                href={m.href}
                className="t-note block whitespace-nowrap px-4 py-3.5 text-center font-bold text-white transition hover:bg-white/10 sm:t-body"
              >
                {m.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
