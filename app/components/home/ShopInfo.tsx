// 店舗情報（2026-11-09）。店名・代表者・電話・住所などの実際の値は、
// コードに書かず環境変数から読む（lib/shopInfo.ts。手元は .env.local、公開は GitHub Secrets）。
// 以前あった店の外観のイラストは外した（外観のある店舗ではないため。2026-11-08、兄）。

import { OWNER_NAME, SHOP_NAME, SHOP_PHONE, SHOP_ADDRESS, QUALIFICATIONS } from "../../lib/shopInfo";
import { CALLBACK_NOTE, SERVICE_AREA_NOTE } from "../../lib/content";
import { PhoneLink } from "../PhoneLink";
import SectionTitle from "./SectionTitle";

export default function ShopInfo() {
  const rows = [
    { label: "店名", value: SHOP_NAME },
    { label: "代表者", value: OWNER_NAME },
    { label: "住所", value: SHOP_ADDRESS },
    { label: "営業時間", value: "7:00〜22:00（不定休・年末年始も営業）" },
    { label: "対応エリア", value: `群馬県 ${SERVICE_AREA_NOTE}` },
    ...(QUALIFICATIONS ? [{ label: "資格", value: QUALIFICATIONS }] : []),
  ];

  return (
    <section id="shop" className="w-full bg-mist">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-16">
        <SectionTitle label="SHOP" title="店舗情報" />
        <dl className="grid grid-cols-[6rem_1fr] border-t border-slate-300 bg-white sm:grid-cols-[8rem_1fr]">
          {rows.map((r) => (
            <div key={r.label} className="contents">
              <dt className="t-body border-b border-slate-300 bg-navy/5 px-4 py-3 font-bold text-navy">{r.label}</dt>
              <dd className="t-body border-b border-slate-300 px-4 py-3 text-slate-800">{r.value}</dd>
            </div>
          ))}
          <dt className="t-body border-b border-slate-300 bg-navy/5 px-4 py-3 font-bold text-navy">電話番号</dt>
          <dd className="t-body border-b border-slate-300 px-4 py-3 text-slate-800">
            <PhoneLink className="font-bold text-blue underline underline-offset-4">{SHOP_PHONE}</PhoneLink>
            <span className="t-note block text-slate-500">{CALLBACK_NOTE}</span>
          </dd>
        </dl>
      </div>
    </section>
  );
}
