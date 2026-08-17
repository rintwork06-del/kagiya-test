// デザイン比較用：問い合わせフォームの「見た目だけ」のプレビュー。
// 送信機能（Googleフォームへの実送信）はまだ組み込まない。
// 実装済みの ContactForm.tsx を使うのは、デザイン確定後の本実装段階で行う。
//
// variant="compact"：ページ上部用。項目を絞った簡易版
// variant="full"（既定）：ページ下部用。項目をすべて含むフル版
// 電話番号と合わせて「問い合わせフォームを上部・下部の複数箇所に設置する」
// 方針（案件概要.md 2026-08-11）に対応するため、1ページ内で2回呼び出す想定。

type Theme = "a" | "b" | "c";
type Variant = "compact" | "full";

const THEME_STYLES: Record<
  Theme,
  {
    card: string;
    heading: string;
    label: string;
    input: string;
    button: string;
    note: string;
  }
> = {
  a: {
    card: "rounded-xl border border-slate-200 bg-white shadow-[0_10px_30px_-12px_rgba(13,43,78,0.25)]",
    heading: "text-slate-900",
    label: "text-slate-600",
    input:
      "rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-sky-600 focus:bg-white focus:ring-2 focus:ring-sky-600/20",
    button:
      "rounded-lg bg-orange-500 px-6 py-3 font-bold text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600 active:translate-y-px",
    note: "text-slate-400",
  },
  b: {
    card: "rounded-3xl border border-emerald-900/10 bg-white shadow-[0_10px_30px_-12px_rgba(31,111,84,0.3)]",
    heading: "text-emerald-950",
    label: "text-emerald-900/70",
    input:
      "rounded-xl border border-emerald-900/15 bg-[#faf6ef] px-3.5 py-2.5 text-emerald-950 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20",
    button:
      "rounded-full bg-emerald-700 px-6 py-3 font-bold text-white shadow-md shadow-emerald-700/30 transition hover:bg-emerald-800 active:translate-y-px",
    note: "text-emerald-900/40",
  },
  c: {
    card: "rounded-lg border border-stone-300 bg-white shadow-[0_10px_30px_-12px_rgba(41,37,36,0.35)]",
    heading: "text-stone-900",
    label: "text-stone-600",
    input:
      "rounded-md border border-stone-300 bg-stone-50 px-3.5 py-2.5 text-stone-900 outline-none transition focus:border-amber-700 focus:bg-white focus:ring-2 focus:ring-amber-700/20",
    button:
      "rounded-md bg-amber-700 px-6 py-3 font-bold text-white shadow-md shadow-amber-700/30 transition hover:bg-amber-800 active:translate-y-px",
    note: "text-stone-400",
  },
};

export default function ContactPreview({
  theme,
  variant = "full",
}: {
  theme: Theme;
  variant?: Variant;
}) {
  const s = THEME_STYLES[theme];

  return (
    <section className="flex w-full flex-col items-center px-6 py-12">
      <div className={`w-full max-w-lg px-6 py-8 sm:px-8 ${s.card}`}>
        <h2 className={`text-center text-xl font-bold ${s.heading}`}>
          {variant === "compact" ? "まずはご相談ください" : "お問い合わせ"}
        </h2>
        <p className={`mt-1 text-center text-xs ${s.note}`}>
          ※デザイン確認用の見た目のみです。送信機能は組み込んでいません
        </p>
        <div className="mt-6 flex flex-col gap-4">
          {variant === "full" && (
            <label className={`flex flex-col gap-1.5 text-sm font-medium ${s.label}`}>
              お名前
              <input type="text" placeholder="山田 太郎" className={s.input} />
            </label>
          )}
          <label className={`flex flex-col gap-1.5 text-sm font-medium ${s.label}`}>
            電話番号
            <input
              type="tel"
              placeholder="090-0000-0000"
              className={s.input}
            />
          </label>
          {variant === "full" && (
            <label className={`flex flex-col gap-1.5 text-sm font-medium ${s.label}`}>
              メールアドレス
              <input
                type="email"
                placeholder="example@example.com"
                className={s.input}
              />
            </label>
          )}
          <label className={`flex flex-col gap-1.5 text-sm font-medium ${s.label}`}>
            お問い合わせ内容
            <textarea
              rows={variant === "compact" ? 2 : 4}
              placeholder="鍵の交換をお願いしたいです"
              className={s.input}
            />
          </label>
          <button type="button" className={`mt-1 ${s.button}`}>
            この内容で送信する
          </button>
        </div>
      </div>
    </section>
  );
}
