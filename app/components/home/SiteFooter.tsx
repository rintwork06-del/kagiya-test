// フッター（2026-11-09）。紺地。4列：店の情報／サービス／対応エリア／電話。
// 下に、画面の一番下にいつも出ている電話のバーの分の余白をとる（2026-11-09、白い隙間の修正）。
// 2026-11-11、下の余白＝電話バーの高さ（スマホ79px・PC65px）＋20px にした。「© 店名」の上の線との間（pt-5＝20px）と、
// 電話バーとの間を同じにするため（兄：一番下までスクロールしたときの重なりに違和感）。

import { SHOP_NAME, SHOP_PHONE } from "../../lib/shopInfo";
import { AREA_REGIONS } from "../../lib/content";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon } from "../Icons";

const LINKS = [
  { href: "#service", label: "対応している鍵" },
  { href: "#price", label: "料金の目安" },
  { href: "#flow", label: "ご依頼の流れ" },
  { href: "#faq", label: "よくあるご質問" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-navy pb-[99px] text-white sm:pb-[85px]">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <p className="t-heading font-bold">{SHOP_NAME}</p>
          <p className="t-note text-white/80">
            群馬県の鍵のトラブルに対応
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
          {/* 2026-11-11、☎の文字をほかと同じ電話のアイコンにし、番号が途中で折り返さないようにした（タブレットで崩れていた） */}
          <PhoneLink className="t-body flex items-center gap-2 whitespace-nowrap font-bold hover:underline">
            <PhoneIcon className="h-5 w-5 shrink-0" />
            {SHOP_PHONE}
          </PhoneLink>
        </div>
      </div>
      <p className="t-note border-t border-white/20 px-5 pt-5 text-center text-white/60">
        © {SHOP_NAME}
      </p>
    </footer>
  );
}
