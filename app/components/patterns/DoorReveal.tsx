"use client";

// タップすると扉が開いて中身が見える演出。パターンB（親しみ・実績訴求型）専用。
//
// 実装方針：
// - 中身（children）は常にDOM上に存在する（読み上げ・SEOに配慮）。扉はその上に
//   position: absoluteで重ねた別要素で、タップ時にrotateYで開く見た目にするだけ
// - 「謎解きが必須」にならないよう、あくまで演出。中身が読めないと困る情報
//   （住所・電話番号など）はこのコンポーネントの外、常に見える場所に置く前提
// - 見た目はCSSグラデーションだけで「木の扉」を描く（画像不使用。枠・鏡板・
//   木目・真鍮のノブとプレート）。2026-08-17の「安っぽい」というフィードバックを
//   受けて、絵文字＋単色ブロックからこの作りに変更した

import { useId, useState, type ReactNode } from "react";

export default function DoorReveal({
  icon,
  label,
  hint = "タップして開ける",
  contentClassName = "",
  children,
}: {
  icon: ReactNode;
  label: string;
  hint?: string;
  contentClassName?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    // 扉の枠（ダークブラウン）。開いたときに奥行きが見えるようperspectiveを付ける
    <div
      className="relative rounded-xl bg-[#3d2b1c] p-1.5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5),0_8px_20px_-8px_rgba(61,43,28,0.5)]"
      style={{ perspective: "1400px" }}
    >
      {/* 中身：扉の裏側の部屋。開けたときに少し暗い奥から見える演出 */}
      <div
        id={contentId}
        className={`flex min-h-[15rem] flex-col gap-3 rounded-lg p-5 ${contentClassName}`}
      >
        {children}
      </div>

      {/* 扉本体 */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        className={`absolute inset-1.5 z-10 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg text-[#f3e3c6] transition-[transform,box-shadow] duration-700 [transition-timing-function:cubic-bezier(0.55,0,0.2,1)] ${
          open
            ? "pointer-events-none shadow-none"
            : "shadow-[4px_0_14px_rgba(0,0,0,0.35)]"
        }`}
        style={{
          transformOrigin: "left center",
          transform: open ? "rotateY(-108deg)" : "rotateY(0deg)",
          backfaceVisibility: "hidden",
          // 木の下地＋縦の木目
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.10) 0 2px, transparent 2px 26px)," +
            "linear-gradient(180deg, #8a6440 0%, #75512f 45%, #684626 100%)",
        }}
      >
        {/* 鏡板（上下2枚の彫り込み） */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[14%] top-[8%] h-[34%] rounded-sm border-2 border-[#5c3f22] shadow-[inset_0_2px_6px_rgba(0,0,0,0.35),inset_0_-1px_2px_rgba(255,255,255,0.12)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[14%] bottom-[8%] h-[30%] rounded-sm border-2 border-[#5c3f22] shadow-[inset_0_2px_6px_rgba(0,0,0,0.35),inset_0_-1px_2px_rgba(255,255,255,0.12)]"
        />
        {/* 真鍮のドアノブ */}
        <span
          aria-hidden="true"
          className="absolute right-[9%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#f0d48a] via-[#c9a24d] to-[#8a6a25] shadow-[0_1px_3px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]"
        />
        {/* 表札プレート */}
        <span className="relative z-10 flex flex-col items-center gap-1 rounded-md border border-[#c9a24d]/60 bg-[#2e2014]/70 px-5 py-3 backdrop-blur-[1px]">
          <span className="text-[#e8c877]">{icon}</span>
          <span className="t-body font-bold tracking-wide">{label}</span>
          <span className="t-note text-[#f3e3c6]/70">{hint}</span>
        </span>
      </button>
    </div>
  );
}
