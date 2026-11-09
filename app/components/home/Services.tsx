// 対応している鍵（2026-11-09）。写真付きのカード4枚と、カードごとのお困りごと。金額は下の料金の欄。

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
    <section id="service" className="w-full bg-mist">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-14">
        <SectionTitle title="対応している鍵" lead="このようなお困りごとに対応します" />
        <ul className="grid gap-5 sm:grid-cols-2">
          {CARDS.map((c) => (
            <li key={c.title} className="flex flex-col border border-slate-300 bg-white">
              <div className="relative aspect-[2/1] w-full">
                <Image src={c.photo} alt={`${c.title}の作業の様子`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <h3 className="t-heading font-bold text-navy">{c.title}</h3>
                  <p className="t-note text-slate-500">{c.lead}</p>
                </div>
                <ul className="flex flex-col gap-1 border-t border-slate-200 pt-3">
                  {c.troubles.map((t) => (
                    <li key={t} className="t-body flex items-center gap-2 text-slate-800">
                      <span className="text-brand-red" aria-hidden="true">・</span>
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
