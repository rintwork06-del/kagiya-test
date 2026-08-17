// サイトに写真を出すための共通コンポーネント（2026-08-17）。
//
// 現在置いている写真はすべてAI生成の仮画像。実際に手がけた案件の写真ではないため、
// 右下に「イメージ」バッジを重ねて、実績と誤解されないようにしている
// （案件概要.md「AI生成画像の扱い」参照）。実写真に差し替えたら badge={null} にする。
//
// next/image を使う理由：GitHub Pagesのプロジェクトページでは basePath
// （/kagiya-test）が付くため、素の <img src="/images/..."> だと本番でパスが
// 壊れる。next/image は basePath を自動で解決してくれる。
// next.config.ts で images.unoptimized: true にしているので、
// 実際に出力されるのは単純な img タグ（静的エクスポートでも問題なく動く）。

import Image, { type StaticImageData } from "next/image";

export default function SitePhoto({
  src,
  alt,
  className = "",
  badge = "イメージ",
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  badge?: string | null;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      {badge && (
        <span className="t-note absolute bottom-2 right-2 rounded-full bg-black/55 px-2.5 py-1 text-white backdrop-blur-sm">
          {badge}
        </span>
      )}
    </div>
  );
}
