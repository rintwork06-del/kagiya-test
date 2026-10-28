import type { Metadata } from "next";
import { HouseIcon, CarIcon, DialIcon, ServiceIcon } from "../components/patterns/Icons";
import { PRICE_NOTE, SERVICE_CATEGORIES } from "../lib/dummyContent";

// 【料金表の見せ方の比較用ページ（一時的）】
// 2026-10-28、兄とオーナーに料金表の形を選んでもらうために作った。
// ①カード型（今のサイトと同じ）／②表型（普通の鍵とディンプルキーを列で並べる）／
// ③一覧型（作業ごとに条件を書く）の3つを上から並べる。
// 金額はすべて仮（dummyContent.ts の SERVICE_CATEGORIES と同じ値）。
// 形が決まったら、選ばれた形を PatternA に入れて、このページは消す。

export const metadata: Metadata = {
  title: "料金表の見せ方の比較（確認用）",
  robots: { index: false, follow: false },
};

const NAVY = "#0d2b4e";

// ②表型：1行に「普通の鍵」と「ディンプルキー」などの2列を並べる
const TABLE_ROWS = [
  { group: "家の鍵", item: "鍵開け", a: "8,800円〜", b: "16,500円〜" },
  { group: "家の鍵", item: "合鍵作成（1本・他の作業とあわせて）", a: "1,100円〜", b: "3,300円〜" },
  { group: "家の鍵", item: "鍵交換（部品代込み）", a: "16,500円〜", b: "27,500円〜" },
  { group: "家の鍵", item: "鍵穴から鍵を作る", a: "16,500円〜", b: "お見積り" },
  { group: "家の鍵", item: "競売物件の鍵の対応", a: "お見積り", b: "お見積り" },
] as const;

const TABLE_ROWS_CAR = [
  { item: "鍵開け", a: "8,800円〜（国産車）", b: "16,500円〜（外国車）" },
  { item: "鍵作成（紛失時）", a: "16,500円〜（イモビライザーなし）", b: "33,000円〜（イモビライザー・スマートキー）" },
] as const;

const TABLE_ROWS_SAFE = [
  { item: "開錠（家庭用のみ）", a: "8,800円〜（鍵穴）", b: "16,500円〜（ダイヤル・暗証番号）" },
] as const;

// ③一覧型：作業ごとに「何で値段が変わるか」を書く
const LIST_ROWS = [
  {
    icon: HouseIcon,
    title: "家の鍵",
    rows: [
      { name: "鍵開け（普通の鍵）", price: "8,800円〜", detail: "鍵の種類・ドアの状態で変わります" },
      { name: "鍵開け（ディンプルキー）", price: "16,500円〜", detail: "防犯性の高い鍵は作業に時間がかかります" },
      { name: "合鍵作成（普通の鍵・1本）", price: "1,100円〜", detail: "他の作業とあわせたご依頼のみ" },
      { name: "合鍵作成（ディンプルキー・1本）", price: "3,300円〜", detail: "メーカーから取り寄せる場合は日数がかかります" },
      { name: "鍵交換（普通の鍵）", price: "16,500円〜", detail: "部品代込み。メーカー・型番で変わります" },
      { name: "鍵交換（ディンプルキー）", price: "27,500円〜", detail: "部品代込み。MIWA・GOAL・KABAなど" },
      { name: "鍵穴から鍵を作る", price: "16,500円〜", detail: "鍵によっては対応できない場合があります" },
      { name: "競売物件の鍵の対応", price: "お見積り", detail: "開錠と交換をあわせてお見積りします" },
    ],
  },
  {
    icon: CarIcon,
    title: "車の鍵",
    rows: [
      { name: "鍵開け（国産車）", price: "8,800円〜", detail: "車種・年式によっては対応できない場合があります" },
      { name: "鍵開け（外国車）", price: "16,500円〜", detail: "車種・年式によっては対応できない場合があります" },
      { name: "鍵作成（紛失時・イモビライザーなし）", price: "16,500円〜", detail: "車種・年式で変わります" },
      { name: "鍵作成（紛失時・イモビライザー・スマートキー）", price: "33,000円〜", detail: "車種によって大きく変わります。お電話でご確認ください" },
    ],
  },
  {
    icon: DialIcon,
    title: "金庫（家庭用のみ）",
    rows: [
      { name: "開錠（鍵穴）", price: "8,800円〜", detail: "業務用・大型の金庫は対応していません" },
      { name: "開錠（ダイヤル・暗証番号）", price: "16,500円〜", detail: "テンキー式は高くなる場合があります" },
    ],
  },
] as const;

function OptionHeading({ no, title, lead }: { no: string; title: string; lead: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="t-note font-bold tracking-[0.2em] text-orange-600">案{no}</p>
      <h2 className="t-heading font-bold tracking-tight text-slate-900">{title}</h2>
      <p className="t-body text-slate-500">{lead}</p>
    </div>
  );
}

export default function PriceOptionsPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-slate-50 font-sans">
      <header className="w-full text-white" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-10">
          <h1 className="t-display font-bold tracking-tight">料金表の見せ方の比較</h1>
          <p className="t-body text-white/80">
            料金表の形を3つ並べています。金額はすべて仮（地域の相場から）で、3案とも同じです。
            形を選んでいただいたら、その形でサイトに入れます。このページは確認用です。
          </p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12">
        {/* ① カード型（今のサイトと同じ） */}
        <section className="flex flex-col gap-6">
          <OptionHeading
            no="①"
            title="カード型（今のサイトと同じ）"
            lead="家・車・金庫ごとにカードを分けて、作業と金額を並べます。スマホでも読みやすい形です。"
          />
          <p className="t-body text-slate-500">{PRICE_NOTE}</p>
          <div className="grid gap-5 md:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: NAVY }}
                  >
                    <ServiceIcon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <p className="t-body font-bold text-slate-900">{cat.title}</p>
                </div>
                <ul className="flex flex-col divide-y divide-slate-200 border-y border-slate-200">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-3 py-2.5">
                      <span className="t-note flex-1 text-slate-700">{item.name}</span>
                      <span className="t-note font-bold text-slate-900">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ② 表型 */}
        <section className="flex flex-col gap-6">
          <OptionHeading
            no="②"
            title="表型（鍵の種類を列で比べる）"
            lead="作業を行、鍵の種類を列にして並べます。普通の鍵とディンプルキーの値段の違いが一目で分かります。"
          />
          <p className="t-body text-slate-500">{PRICE_NOTE}</p>
          <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] border-collapse t-body">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-500">家の鍵</th>
                  <th className="border-b px-5 py-3 font-bold text-white" style={{ backgroundColor: NAVY, borderColor: NAVY }}>普通の鍵</th>
                  <th className="border-b px-5 py-3 font-bold text-white" style={{ backgroundColor: NAVY, borderColor: NAVY }}>ディンプルキー</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((r) => (
                  <tr key={r.item} className="border-b border-slate-100">
                    <td className="px-5 py-3 text-slate-700">{r.item}</td>
                    <td className="px-5 py-3 font-bold text-slate-900">{r.a}</td>
                    <td className="px-5 py-3 font-bold text-slate-900">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] border-collapse t-body">
              <thead>
                <tr className="text-left">
                  <th className="w-[30%] border-b border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-500">車の鍵・金庫</th>
                  <th className="border-b border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-500" colSpan={2}>料金の目安</th>
                </tr>
              </thead>
              <tbody>
                {[...TABLE_ROWS_CAR, ...TABLE_ROWS_SAFE].map((r) => (
                  <tr key={r.item} className="border-b border-slate-100">
                    <td className="px-5 py-3 text-slate-700">{r.item}</td>
                    <td className="px-5 py-3 font-bold text-slate-900">{r.a}</td>
                    <td className="px-5 py-3 font-bold text-slate-900">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ③ 一覧型（条件つき） */}
        <section className="flex flex-col gap-6">
          <OptionHeading
            no="③"
            title="一覧型（作業ごとに条件を書く）"
            lead="金額の横に「何で値段が変わるか」を書きます。高額請求を心配しているお客様に、一番安心してもらいやすい形です。"
          />
          <p className="t-body text-slate-500">{PRICE_NOTE}</p>
          <div className="flex flex-col gap-6">
            {LIST_ROWS.map((g) => (
              <div key={g.title} className="flex flex-col gap-2">
                <p className="flex items-center gap-2 t-body font-bold text-slate-900">
                  <g.icon className="h-5 w-5 text-sky-700" />
                  {g.title}
                </p>
                <ul className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                  {g.rows.map((r) => (
                    <li
                      key={r.name}
                      className="flex flex-col gap-1 border-b border-slate-100 px-5 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-4"
                    >
                      <span className="t-body flex-1 font-medium text-slate-800">{r.name}</span>
                      <span className="t-body font-bold text-slate-900 sm:w-32 sm:text-right">{r.price}</span>
                      <span className="t-note text-slate-500 sm:w-72">{r.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
