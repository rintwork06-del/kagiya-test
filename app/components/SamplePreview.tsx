"use client";

import { useState } from "react";
import PatternA from "./patterns/PatternA";
import PatternB from "./patterns/PatternB";
import PatternC from "./patterns/PatternC";

const PATTERNS = [
  { id: "a", label: "①誠実", description: "ネイビー×白／フォーマル" },
  { id: "b", label: "②親しみ", description: "深緑×アイボリー／柔らかい" },
  { id: "c", label: "③老舗", description: "ブラウン×生成り／落ち着いた" },
] as const;

type PatternId = (typeof PATTERNS)[number]["id"];

export default function SamplePreview() {
  const [active, setActive] = useState<PatternId>("a");

  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <nav className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-center gap-2 border-b border-zinc-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-zinc-800 dark:bg-black/90">
        {PATTERNS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(p.id)}
            className={`flex flex-col items-center rounded-lg px-4 py-2 text-sm transition-colors ${
              active === p.id
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            <span className="font-medium">{p.label}</span>
            <span className="text-xs opacity-80">{p.description}</span>
          </button>
        ))}
      </nav>

      <div className="w-full">
        {active === "a" && <PatternA />}
        {active === "b" && <PatternB />}
        {active === "c" && <PatternC />}
      </div>
    </div>
  );
}
