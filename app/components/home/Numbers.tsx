// 数字の帯（2026-11-09）。紺地に白い大きな数字。中身は content.ts の NUMBERS。
// 件数・到着時間はオーナーの回答待ちのため入れていない。

import { NUMBERS } from "../../lib/content";

export default function Numbers() {
  return (
    <section className="w-full bg-navy">
      <ul className="mx-auto grid w-full max-w-5xl gap-3 px-5 py-10 sm:grid-cols-3">
        {NUMBERS.map((n) => (
          <li key={n.label} className="flex flex-col items-center gap-1 px-3 py-3 text-center sm:border-l sm:border-white/25 sm:first:border-l-0">
            <p className="font-bold text-white">
              <span className="t-display">{n.num}</span>
              {n.unit && <span className="t-body ml-1">{n.unit}</span>}
            </p>
            <p className="t-note text-white/80">{n.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
