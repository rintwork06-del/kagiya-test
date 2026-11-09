// 数字の帯（2026-11-09）。青地に黄色の大きな数字。中身は content.ts の NUMBERS。
// 件数・到着時間はオーナーの回答待ちのため入れていない。

import { NUMBERS } from "../../lib/content";

export default function Numbers() {
  return (
    <section className="w-full bg-blue">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-12">
        <p className="t-body text-center font-bold text-white">＼ 数字で見る、地元の鍵屋 ／</p>
        <ul className="grid gap-3 sm:grid-cols-3">
          {NUMBERS.map((n) => (
            <li key={n.label} className="flex flex-col items-center gap-1 border border-white/40 px-3 py-5 text-center">
              <p className="font-bold text-brand-yellow">
                <span className="t-display">{n.num}</span>
                {n.unit && <span className="t-body ml-1">{n.unit}</span>}
              </p>
              <p className="t-note text-white/90">{n.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
