// セクションの見出し（2026-11-09）。小さな英字の札 ＋ 大きな見出し ＋ 説明の一文。
// どのセクションでも同じ形にそろえるため、部品にした。

export default function SectionTitle({
  label,
  title,
  lead,
  onDark = false,
}: {
  label: string;
  title: string;
  lead?: string;
  onDark?: boolean; // 色の濃い背景の上に置くとき true
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="t-note bg-brand-red px-2.5 py-0.5 font-bold tracking-wider text-white">
        {label}
      </span>
      <h2 className={`t-heading font-bold ${onDark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {lead && (
        <p className={`t-body ${onDark ? "text-white/85" : "text-slate-600"}`}>{lead}</p>
      )}
    </div>
  );
}
