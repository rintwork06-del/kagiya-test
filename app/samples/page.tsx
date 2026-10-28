import PatternA from "../components/patterns/PatternA";

// 【デザイン確認用ページ】
// 2026-09-04、クライアントが案①（誠実）を採用と決定。案②③は削除し、
// 3パターン比較のタブUI（SamplePreview.tsx）も役目を終えたため撤去した。
// 2026-10-28、案①を本番トップ "/" に昇格した。ここは共有済みのURLのために残している（中身は "/" と同じ）。

export default function SamplesPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <PatternA />
    </div>
  );
}
