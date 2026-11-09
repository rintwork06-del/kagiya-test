// セクションの見出し（2026-11-09）。見出し ＋ 下の赤い短い線 ＋ 説明の一文。
// どのセクションでも同じ形にそろえるため、部品にした。
// 2026-11-09、英字の小さな札（SERVICE など）はやめた。参考サイトと同じ言い方になっていたため。

export default function SectionTitle({
  title,
  lead,
  onDark = false,
}: {
  title: string;
  lead?: string;
  onDark?: boolean; // 色の濃い背景の上に置くとき true
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h2 className={`t-heading font-bold ${onDark ? "text-white" : "text-navy"}`}>{title}</h2>
      <span className={`h-1 w-12 ${onDark ? "bg-white" : "bg-brand-red"}`} aria-hidden="true" />
      {lead && <p className={`t-body ${onDark ? "text-white/85" : "text-slate-600"}`}>{lead}</p>}
    </div>
  );
}
