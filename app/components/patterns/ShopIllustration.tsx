// 店舗外観の代わりに仮で置くイラスト（2026-08-17）。
//
// 実際の店舗写真がまだ無く、また個人経営で自宅兼用の可能性があるため
// （案件概要.md「個人情報項目の扱い方」参照）、外観写真は最後まで
// 出せない可能性がある。そこで「写真が来なくても成立する絵」として
// フラットなイラストを用意した。写真が入手できたら差し替える。
//
// 画像ファイルではなくインラインSVGで描いているので、
// 追加のネットワーク読み込みが無く、パターンごとの配色に追従できる。
// 色は accent（差し色）と、それ以外を currentColor で受ける。

export default function ShopIllustration({
  accent,
  className = "",
}: {
  accent: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label="店舗の外観イメージ（イラスト）"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* 空・背景 */}
      <rect width="400" height="260" fill="currentColor" opacity="0.05" />

      {/* 隣家（奥行きを出すための影） */}
      <g opacity="0.12" fill="currentColor">
        <rect x="6" y="96" width="64" height="128" />
        <rect x="330" y="84" width="64" height="140" />
      </g>

      {/* 建物本体 */}
      <rect
        x="72"
        y="62"
        width="256"
        height="162"
        fill="currentColor"
        opacity="0.08"
      />
      {/* 庇（ひさし） */}
      <path
        d="M62 62h276l-14 22H76z"
        fill={accent}
        opacity="0.9"
      />
      {/* 看板 */}
      <rect x="120" y="92" width="160" height="30" rx="3" fill={accent} opacity="0.18" />
      <rect
        x="120"
        y="92"
        width="160"
        height="30"
        rx="3"
        fill="none"
        stroke={accent}
        strokeWidth="2"
      />
      {/* 看板の中の鍵マーク */}
      <g stroke={accent} strokeWidth="2.4" fill="none" strokeLinecap="round">
        <circle cx="176" cy="107" r="5.5" />
        <path d="M181.5 107h20m-4 0v4m-8-4v4" />
      </g>

      {/* ショーウィンドウ */}
      <rect
        x="94"
        y="140"
        width="86"
        height="62"
        rx="2"
        fill="currentColor"
        opacity="0.14"
      />
      <rect
        x="94"
        y="140"
        width="86"
        height="62"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
      <path
        d="M108 140v62M136 140v62M164 140v62"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.22"
      />

      {/* 入口ドア */}
      <rect
        x="206"
        y="132"
        width="70"
        height="92"
        rx="2"
        fill="currentColor"
        opacity="0.18"
      />
      <rect
        x="206"
        y="132"
        width="70"
        height="92"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      {/* ドアのガラス部分 */}
      <rect
        x="218"
        y="146"
        width="46"
        height="34"
        rx="1.5"
        fill="currentColor"
        opacity="0.1"
      />
      {/* ドアノブ */}
      <circle cx="266" cy="190" r="3" fill={accent} />

      {/* 地面 */}
      <rect y="222" width="400" height="4" fill="currentColor" opacity="0.3" />
      <rect y="226" width="400" height="34" fill="currentColor" opacity="0.06" />

      {/* 植木鉢（生活感） */}
      <g fill="currentColor">
        <path d="M290 208h22l-3 14h-16z" opacity="0.26" />
        <circle cx="296" cy="203" r="6" opacity="0.18" />
        <circle cx="306" cy="204" r="7" opacity="0.18" />
        <circle cx="301" cy="197" r="6" opacity="0.18" />
      </g>
    </svg>
  );
}
