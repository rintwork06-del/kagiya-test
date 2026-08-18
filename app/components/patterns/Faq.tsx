// よくあるご質問（2026-08-18、参考サイト「沖縄カギの窓口」の踏襲要素）。
// 申し込み直前の不安を潰す装置として、フル版フォームの直前に置く想定。
//
// HTML標準の<details>/<summary>で実装しているため、JavaScriptなしで開閉が動く
// （HP分析/調査結果.md「静的サイトで実現できる技術要素」）。
// 質問の中身はdummyContent.tsのFAQ_ITEMS（3パターン共通、見た目だけ変える）。

import { FAQ_ITEMS } from "../../lib/dummyContent";

type Theme = "a" | "b" | "c";

const THEME_STYLES: Record<
  Theme,
  { item: string; question: string; answer: string; marker: string }
> = {
  a: {
    item: "rounded-xl border border-slate-200 bg-white",
    question: "text-slate-900",
    answer: "text-slate-600",
    marker: "text-sky-700",
  },
  b: {
    item: "rounded-2xl border border-emerald-900/10 bg-white",
    question: "text-emerald-950",
    answer: "text-emerald-950/70",
    marker: "text-emerald-700",
  },
  c: {
    item: "rounded-md border border-stone-200 bg-white shadow-sm",
    question: "text-stone-900",
    answer: "text-stone-600",
    marker: "text-amber-700",
  },
};

export default function Faq({ theme }: { theme: Theme }) {
  const s = THEME_STYLES[theme];

  return (
    <div className="flex w-full flex-col gap-3">
      {FAQ_ITEMS.map((item) => (
        <details key={item.q} className={`group ${s.item}`}>
          <summary
            className={`flex cursor-pointer list-none items-center gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden ${s.question}`}
          >
            <span className={`t-body font-bold ${s.marker}`} aria-hidden="true">
              Q
            </span>
            <span className="t-body flex-1 font-medium">{item.q}</span>
            {/* 開閉インジケーター：openで「＋」が「×」に見える45度回転 */}
            <span
              aria-hidden="true"
              className={`t-body shrink-0 transition-transform duration-200 group-open:rotate-45 ${s.marker}`}
            >
              ＋
            </span>
          </summary>
          <p className={`t-body px-5 pb-4 pl-12 leading-relaxed ${s.answer}`}>
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
