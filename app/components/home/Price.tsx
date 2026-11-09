// 料金（2026-11-09）。上に黄色い帯「作業の前に総額をお伝えします」（3つのお約束）、下に料金表。
// 金額はすべて仮（content.ts のコメント参照）。料金表の形は、兄・オーナーの返事（/price-options）で決まったら直す。

import { SERVICE_CATEGORIES, AUCTION_SERVICE, PRICE_NOTE, PROMISES } from "../../lib/content";
import { ServiceIcon } from "../Icons";
import SectionTitle from "./SectionTitle";

export default function Price() {
  return (
    <section id="price" className="w-full bg-white">
      {/* 黄色い帯 */}
      <div className="w-full bg-brand-yellow">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-1 md:w-1/3">
            <p className="t-note w-fit bg-brand-red px-2.5 py-0.5 font-bold text-white">安心の明朗会計</p>
            <p className="t-heading font-bold text-navy">
              作業の前に、<span className="text-brand-red">総額</span>をお伝えします
            </p>
          </div>
          <ul className="grid flex-1 gap-3 sm:grid-cols-3">
            {PROMISES.map((p, i) => (
              <li key={p.title} className="flex flex-col gap-1 border-2 border-navy bg-white px-4 py-3">
                <span className="t-note font-bold text-brand-red">お約束 {i + 1}</span>
                <span className="t-body font-bold text-navy">{p.title}</span>
                <span className="t-note text-slate-600">{p.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 料金表 */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-14">
        <SectionTitle label="PRICE" title="料金の目安" lead={PRICE_NOTE} />
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex flex-col border border-slate-300">
              <h3 className="t-body flex items-center gap-2 bg-navy px-4 py-2.5 font-bold text-white">
                <ServiceIcon name={cat.icon} className="h-5 w-5 text-brand-yellow" />
                {cat.title}
              </h3>
              <ul className="flex flex-col divide-y divide-slate-200 px-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-3 py-3">
                    <span className="t-body text-slate-800">{item.name}</span>
                    <span className="t-body shrink-0 font-bold text-brand-red">{item.price}</span>
                  </li>
                ))}
              </ul>
              {(cat.note || cat.caution) && (
                <div className="flex flex-col gap-1 border-t border-slate-200 bg-cream px-4 py-3">
                  {cat.note && <p className="t-note text-slate-700">{cat.note}</p>}
                  {cat.caution && <p className="t-note font-bold text-slate-800">※{cat.caution}</p>}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col border border-slate-300">
            <h3 className="t-body flex items-center gap-2 bg-navy px-4 py-2.5 font-bold text-white">
              <ServiceIcon name="house" className="h-5 w-5 text-brand-yellow" />
              {AUCTION_SERVICE.title}
            </h3>
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="t-body text-slate-800">{AUCTION_SERVICE.name}</span>
              <span className="t-body shrink-0 font-bold text-brand-red">{AUCTION_SERVICE.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
