// 選ばれる理由（2026-11-09）。紺の帯の一言と、6つの箱。
// 中身は content.ts の STRENGTHS（記入欄で回答済みの事実だけ）。

import { STRENGTHS } from "../../lib/content";
import { CheckIcon } from "../Icons";

export default function Strengths() {
  return (
    <section className="w-full bg-white">
      <div className="w-full bg-navy">
        <p className="t-body mx-auto max-w-5xl px-5 py-3 text-center font-bold text-brand-yellow">
          ＼ 家と車の鍵のトラブル、まずはご相談ください ／
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-5 py-12">
        <p className="t-body text-center font-bold text-navy">＼ お客さまに選ばれる理由 ／</p>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {STRENGTHS.map((s) => (
            <li
              key={s.title}
              className="flex flex-col items-center gap-1 border border-blue/30 bg-mist px-2 py-4 text-center"
            >
              <CheckIcon className="h-6 w-6 text-brand-red" />
              <p className="t-body font-bold text-navy">{s.title}</p>
              <p className="t-note text-slate-600">{s.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
