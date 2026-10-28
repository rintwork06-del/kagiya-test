import PatternA from "./components/patterns/PatternA";

// 【本番トップ】
// 2026-10-28、兄の「今ある情報だけでもサイトに反映して」を受けて、案①を "/" に昇格した
// （それまでは技術検証用の仮ページ。/samples と同じページを出す）。
// 料金・件数などオーナー未回答の項目は、表示から外したまま。

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <PatternA />
    </div>
  );
}
