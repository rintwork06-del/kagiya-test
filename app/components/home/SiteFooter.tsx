// フッター（2026-11-09）。紺地。4列：店の情報／サービス／対応エリア／電話。
// 下に、画面の一番下にいつも出ている電話のバーの分の余白をとる（2026-11-09、白い隙間の修正）。

import { SHOP_NAME, SHOP_PHONE } from "../../lib/shopInfo";
import { AREA_REGIONS, CALLBACK_NOTE } from "../../lib/content";
import { PhoneLink } from "../PhoneLink";

const LINKS = [
  { href: "#service", label: "対応している鍵" },
  { href: "#price", label: "料金の目安" },
  { href: "#flow", label: "ご依頼の流れ" },
  { href: "#faq", label: "よくあるご質問" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-navy pb-28 text-white">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <p className="t-heading font-bold">{SHOP_NAME}</p>
          <p className="t-note text-white/80">
            群馬の家と車の鍵のトラブルに対応
            <br />
            営業時間 7:00〜22:00（不定休）
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="t-body font-bold text-white">サービス</p>
          <ul className="t-note flex flex-col gap-1.5 text-white/85">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="t-body font-bold text-white">対応エリア</p>
          <ul className="t-note flex flex-col gap-1.5 text-white/85">
            {AREA_REGIONS.map((r) => (
              <li key={r.name}>{r.name}（{r.cities}）</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="t-body font-bold text-white">お電話</p>
          <PhoneLink className="t-heading font-bold hover:underline">☎ {SHOP_PHONE}</PhoneLink>
          <p className="t-note text-white/80">{CALLBACK_NOTE}</p>
        </div>
      </div>
      <p className="t-note border-t border-white/20 px-5 pt-5 text-center text-white/60">
        © {SHOP_NAME}
      </p>
    </footer>
  );
}
