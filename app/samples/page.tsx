import SamplePreview from "../components/SamplePreview";

// 【デザイン比較用ページ】
// お客様アンケートでデザインを確定するための、3パターン比較ページ。
// 掲載内容はすべてダミー。技術検証（フォーム送信）は "/" 側で完結している。

export default function SamplesPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <SamplePreview />
    </div>
  );
}
