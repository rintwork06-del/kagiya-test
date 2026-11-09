// 当店について：職人が直接お電話に出ます（2026-11-09）。
// 参考サイトの「ネット広告には県外コールセンター経由の業者もあります」の形にならい、
// 他社と比べた不安（✗）と当店（✓）を並べる。それまでの「他社と比べてください」の比較表をここに移した。
// 中身は content.ts の COMPARISON_ROWS。項目を増やすのは、オーナーの回答（出張費・見積もりなど）が来てから。

import Image from "next/image";
import { COMPARISON_ROWS, CALLBACK_NOTE } from "../../lib/content";
import { PHOTOS } from "../../lib/photos";
import { SHOP_NAME, SHOP_PHONE } from "../../lib/shopInfo";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon, CheckIcon, CrossIcon } from "../Icons";
import SectionTitle from "./SectionTitle";

export default function Direct() {
  return (
    <section id="direct" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-16">
        <SectionTitle
          label="WHY DIRECT"
          title="鍵屋を選ぶときに、こんな不安はありませんか？"
          lead="ネット広告の鍵屋には、受付だけして、実際の作業は別の業者が行うところもあります。"
        />

        <ul className="mx-auto flex w-full max-w-2xl flex-col gap-2">
          {COMPARISON_ROWS.map((r) => (
            <li key={r.item} className="t-body flex items-center gap-3 border-l-4 border-brand-red bg-red-50 px-4 py-3 font-bold text-slate-800">
              <CrossIcon className="h-5 w-5 shrink-0 text-brand-red" />
              {r.others}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6 border-2 border-blue/40 border-b-8 border-b-navy bg-mist px-5 py-8 md:px-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="t-note bg-brand-yellow px-3 py-0.5 font-bold text-navy">＼ 私たちは違います ／</p>
            <p className="t-heading font-bold text-brand-red">{SHOP_NAME}は、鍵職人が直接お電話に出ます</p>
          </div>
          <div className="grid gap-6 md:grid-cols-[2fr_3fr] md:items-center">
            <div className="relative aspect-[4/3] w-full">
              <Image src={PHOTOS.phone} alt="電話に出る鍵職人" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
            <ul className="flex flex-col gap-3">
              {COMPARISON_ROWS.map((r) => (
                <li key={r.item} className="flex flex-col gap-0.5 border border-slate-300 bg-white px-4 py-3">
                  <span className="t-body flex items-center gap-2 font-bold text-navy">
                    <CheckIcon className="h-5 w-5 shrink-0 text-blue" />
                    {r.item}
                  </span>
                  <span className="t-body pl-7 text-slate-700">{r.ours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-1">
            <PhoneLink className="flex items-center gap-2 bg-brand-red px-6 py-3 font-bold text-white transition hover:brightness-110">
              <PhoneIcon className="h-6 w-6" />
              <span className="t-heading">{SHOP_PHONE}</span>
            </PhoneLink>
            <p className="t-note text-slate-600">{CALLBACK_NOTE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
