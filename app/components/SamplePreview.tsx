"use client";

// デザイン比較用のタブ切り替え。お客様（鍵屋オーナー）に3パターンを
// 見比べてもらうためのメタUIなので、各パターンの世界観と混ざらない
// ニュートラルな見た目に留める。

import { useState } from "react";
import PatternA from "./patterns/PatternA";
import PatternB from "./patterns/PatternB";
import PatternC from "./patterns/PatternC";

const PATTERNS = [
  {
    id: "a",
    label: "案① 誠実",
    description: "比較表・料金を前面に",
    dot: "#0d2b4e",
  },
  {
    id: "b",
    label: "案② 親しみ",
    description: "実績とお客様の声を扉で",
    dot: "#1f6f54",
  },
  {
    id: "c",
    label: "案③ 老舗",
    description: "電話への早さを最優先",
    dot: "#b45309",
  },
] as const;

type PatternId = (typeof PATTERNS)[number]["id"];

export default function SamplePreview() {
  const [active, setActive] = useState<PatternId>("a");

  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <nav className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-black/95">
        <div className="mx-auto flex w-full max-w-3xl items-stretch justify-center gap-2 px-4 py-3">
          {PATTERNS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              aria-pressed={active === p.id}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl border px-3 py-2.5 t-body transition sm:flex-none sm:px-5 ${
                active === p.id
                  ? "border-zinc-900 bg-zinc-900 text-white shadow-sm dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              }`}
            >
              <span className="flex items-center gap-1.5 font-bold">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: p.dot }}
                />
                {p.label}
              </span>
              <span className="hidden t-note opacity-70 sm:block">
                {p.description}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <div className="w-full">
        {active === "a" && <PatternA />}
        {active === "b" && <PatternB />}
        {active === "c" && <PatternC />}
      </div>
    </div>
  );
}
