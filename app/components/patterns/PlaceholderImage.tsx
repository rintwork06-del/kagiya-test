// 実際の写真がまだ用意できていない箇所のプレースホルダー。
// フリー素材等でごまかさず、「差し替え予定の枠」だと分かる見た目にしておく
// （HP分析/調査結果.mdの方針。実際の施工写真等が揃い次第、差し替える）。
//
// 破線枠だけだと工事中感が強く安っぽいため、うっすらした斜めストライプの下地＋
// 中央のラベルチップという「意図してある枠」の見た目にしている。
// 下地色・文字色は呼び出し側のclassNameで指定する（各パターンのテーマカラーに合わせるため）。

import { CameraIcon } from "./Icons";

export default function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* 斜めストライプ（currentColorをごく薄く重ねる） */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 12px, currentColor 12px, currentColor 14px)",
        }}
      />
      <div className="relative z-10 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm">
        <CameraIcon className="h-4 w-4 opacity-70" />
        <span className="t-note font-medium opacity-80">
          {label}（写真差し替え予定）
        </span>
      </div>
    </div>
  );
}
