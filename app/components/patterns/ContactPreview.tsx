// デザイン比較用：問い合わせフォームの「見た目だけ」のプレビュー。
// 送信機能（Googleフォームへの実送信）はまだ組み込まない。
// 実装済みの ContactForm.tsx を使うのは、デザイン確定後の本実装段階で行う。

type Theme = "a" | "b" | "c";

const THEME_STYLES: Record<
  Theme,
  { label: string; input: string; button: string }
> = {
  a: {
    label: "text-slate-700",
    input:
      "rounded border border-slate-300 bg-white px-3 py-2 text-slate-800",
    button: "rounded bg-slate-900 px-5 py-2.5 font-medium text-white",
  },
  b: {
    label: "text-emerald-900",
    input:
      "rounded-xl border border-emerald-200 bg-white px-3 py-2 text-emerald-950",
    button: "rounded-xl bg-emerald-700 px-5 py-2.5 font-medium text-white",
  },
  c: {
    label: "text-stone-700",
    input:
      "rounded border border-amber-800/30 bg-white px-3 py-2 text-stone-800",
    button: "rounded bg-stone-800 px-5 py-2.5 font-medium text-white",
  },
};

export default function ContactPreview({ theme }: { theme: Theme }) {
  const s = THEME_STYLES[theme];

  return (
    <section className="flex w-full flex-col items-center gap-4 px-6 py-12">
      <h2 className="text-lg font-semibold">お問い合わせ</h2>
      <p className="text-xs opacity-60">
        ※デザイン確認用の見た目のみです。送信機能は組み込んでいません
      </p>
      <div className="flex w-full max-w-md flex-col gap-4">
        <label className={`flex flex-col gap-1 text-sm ${s.label}`}>
          お名前
          <input
            type="text"
            placeholder="山田 太郎"
            className={s.input}
          />
        </label>
        <label className={`flex flex-col gap-1 text-sm ${s.label}`}>
          電話番号
          <input
            type="tel"
            placeholder="090-0000-0000"
            className={s.input}
          />
        </label>
        <label className={`flex flex-col gap-1 text-sm ${s.label}`}>
          メールアドレス
          <input
            type="email"
            placeholder="example@example.com"
            className={s.input}
          />
        </label>
        <label className={`flex flex-col gap-1 text-sm ${s.label}`}>
          お問い合わせ内容
          <textarea
            rows={4}
            placeholder="鍵の交換をお願いしたいです"
            className={s.input}
          />
        </label>
        <button type="button" className={s.button}>
          送信する
        </button>
      </div>
    </section>
  );
}
