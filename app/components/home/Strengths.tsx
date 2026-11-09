// 当店の特長（2026-11-09）。6つの箱。中身は content.ts の STRENGTHS（記入欄で回答済みの事実だけ）。

import { STRENGTHS } from "../../lib/content";
import { SHOP_NAME } from "../../lib/shopInfo";
import { CheckIcon } from "../Icons";
import SectionTitle from "./SectionTitle";

export default function Strengths() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-14">
        <SectionTitle title={`${SHOP_NAME}の特長`} />
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {STRENGTHS.map((s) => (
            <li key={s.title} className="flex items-start gap-3 border border-slate-300 px-4 py-4">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
              <div className="flex flex-col">
                <p className="t-body font-bold text-navy">{s.title}</p>
                <p className="t-note text-slate-600">{s.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
