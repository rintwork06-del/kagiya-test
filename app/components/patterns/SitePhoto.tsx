// サイトに写真を出すための共通コンポーネント（2026-08-17）。
//
// 置いている写真はAI生成の画像。実際の店舗・作業の写真はもらえないため、今後もAI画像を使う。
// 以前は右下に「イメージ」の表示を重ねていたが、2026-11-08の兄との話し合いで外すと決めた。
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
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
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
    </div>
  );
}
