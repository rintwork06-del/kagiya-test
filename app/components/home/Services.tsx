// 鍵の対応サービス（2026-11-09）。赤い全面の帯に、写真付きのカード4枚。
// カードごとに「こんな時に」の困りごとを並べる（参考サイトの形）。金額は下の料金の欄。

import Image from "next/image";
import { SERVICE_CATEGORIES, AUCTION_SERVICE } from "../../lib/content";
import { PHOTOS } from "../../lib/photos";
import SectionTitle from "./SectionTitle";

const CARDS = [
  ...SERVICE_CATEGORIES.map((c) => ({
    title: c.title,
    lead: c.lead,
    troubles: c.troubles,
    photo: PHOTOS[c.id],
  })),
  {
    title: AUCTION_SERVICE.title,
    lead: AUCTION_SERVICE.lead,
    troubles: AUCTION_SERVICE.troubles,
    photo: PHOTOS.auction,
  },
];

export default function Services() {
  return (
    <section id="service" className="w-full bg-brand-red">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-14">
        <SectionTitle label="SERVICE" title="鍵の対応サービス" lead="こんな時はご相談ください" onDark />
        <ul className="grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <li key={c.title} className="flex flex-col bg-white shadow-lg">
              <div className="relative aspect-[2/1] w-full">
                <Image src={c.photo} alt={`${c.title}の作業の様子`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                <span className="t-note absolute top-0 left-0 bg-navy px-2.5 py-1 font-bold text-white">
                  CASE {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="border-b-2 border-brand-red pb-2">
                  <h3 className="t-heading font-bold text-navy">{c.title}</h3>
                  <p className="t-note text-slate-500">{c.lead}</p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {c.troubles.map((t) => (
                    <li key={t} className="t-body flex items-center gap-2 text-slate-800">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
