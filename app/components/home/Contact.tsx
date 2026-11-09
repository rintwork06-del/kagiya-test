// お問い合わせフォーム（見た目だけ）。
// 送信はまだつないでいない。8月に作った ContactForm.tsx（GASへの送信つき）に、本番化のときにつなぐ。
// 2026-11-09、案A/B/Cの色分け（テーマ）を外して、1つの見た目にした。
//
// 「24時間受付」について（2026-08-17）：フォームは仕組み上いつでも送れるので事実として書ける。
// ただし実際の対応は営業時間内のみ。「24時間対応」と読み違えられないよう、受付と対応を必ず並べて書く。

import SectionTitle from "./SectionTitle";

const INPUT =
  "t-body border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-mist">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-5 py-16">
        <SectionTitle
          label="CONTACT"
          title="お問い合わせ"
          lead="フォームは24時間受付しています。ご返信・ご対応は営業時間内です。"
        />
        <div className="flex flex-col gap-4 border-t-4 border-navy bg-white px-6 py-8">
          <label className="t-body flex flex-col gap-1.5 font-bold text-navy">
            お名前
            <input type="text" placeholder="山田 太郎" className={INPUT} />
          </label>
          <label className="t-body flex flex-col gap-1.5 font-bold text-navy">
            電話番号
            <input type="tel" placeholder="090-0000-0000" className={INPUT} />
          </label>
          <label className="t-body flex flex-col gap-1.5 font-bold text-navy">
            メールアドレス
            <input type="email" placeholder="example@example.com" className={INPUT} />
          </label>
          <label className="t-body flex flex-col gap-1.5 font-bold text-navy">
            お問い合わせ内容
            <textarea rows={4} placeholder="鍵の交換をお願いしたいです" className={INPUT} />
          </label>
          <button
            type="button"
            className="t-body mt-1 bg-brand-red px-6 py-3.5 font-bold text-white transition hover:brightness-110"
          >
            この内容で送信する
          </button>
        </div>
      </div>
    </section>
  );
}
