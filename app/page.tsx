import ContactForm from "./components/ContactForm";

// 【検証用の仮ページ】
// 鍵屋オーナーからの実際の情報はまだ確定していないため、掲載内容はすべてダミー。
// 目的は「Next.js + GitHub Pages上で、独自デザインの問い合わせフォームが
// 実際に動作し、りん・兄の両方にメールが届くか」の技術検証。

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full bg-amber-100 px-4 py-2 text-center text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">
        これは技術検証用の仮ページです。掲載内容はすべてダミーです。
      </div>

      <main className="flex w-full max-w-2xl flex-1 flex-col items-center gap-16 px-6 py-20">
        <header className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            〇〇鍵屋（仮）
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            鍵のトラブル、鍵の交換・修理はお任せください
          </p>
        </header>

        <section className="flex w-full flex-col gap-3 text-zinc-700 dark:text-zinc-300">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            当店について
          </h2>
          <p>創業15年以上、地域のお客様の鍵のトラブルに対応してまいりました。</p>
          <p>毎月多数のご依頼をいただいております（件数はダミーです）。</p>
        </section>

        <section className="flex w-full flex-col gap-3 text-zinc-700 dark:text-zinc-300">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            営業時間
          </h2>
          <p>9:00〜18:00（年中無休・ダミー）</p>
        </section>

        <section className="flex w-full flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            お問い合わせ
          </h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
