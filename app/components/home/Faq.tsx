// よくあるご質問。質問の中身は content.ts の FAQ_ITEMS。
// HTML標準の <details>（押すと開く箱）を使っているので、JavaScriptなしで開閉する。

import { FAQ_ITEMS } from "../../lib/content";
import SectionTitle from "./SectionTitle";

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-16">
        <SectionTitle label="FAQ" title="よくあるご質問" />
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group border border-slate-300 bg-white">
              <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 [&::-webkit-details-marker]:hidden">
                <span className="t-note flex h-7 w-7 shrink-0 items-center justify-center bg-brand-red font-bold text-white">
                  Q
                </span>
                <span className="t-body flex-1 font-bold text-navy">{item.q}</span>
                {/* 開くと「＋」が45度回って「×」に見える */}
                <span className="t-body shrink-0 text-blue transition-transform group-open:rotate-45">
                  ＋
                </span>
              </summary>
              <p className="t-body border-t border-slate-200 px-4 py-4 pl-14 text-slate-700">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
