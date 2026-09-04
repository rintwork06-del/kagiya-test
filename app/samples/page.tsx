import PatternA from "../components/patterns/PatternA";

// 【デザイン確認用ページ】
// 2026-09-04、クライアントが案①（誠実）を採用と決定。案②③は削除し、
// 3パターン比較のタブUI（SamplePreview.tsx）も役目を終えたため撤去した。
// 掲載内容は料金・実績を含めすべてダミーのまま（オーナー確認待ち）。
// 本番トップ "/" への昇格は、実データが揃うまで保留（2026-09-04、りん判断）。

export default function SamplesPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <PatternA />
    </div>
  );
}
