// パターンA：誠実・フォーマル系／比較訴求型
// ネイビー×白、CTAはオレンジ（配色70:25:5。HP分析/調査結果.md参照）。
// 「ちゃんとした業者か」「他と比べて損しないか」を重視する層に向けた構成。
// 構成の特徴：比較表と料金を前面に出し、「作業前に必ず見積提示」の流れを明示して
// 高額請求トラブルの多い業界での透明性を訴求する。
// 2026-08-17：「見た目が安っぽい」フィードバックを受けて全面的に作り直し。
// 絵文字→SVGアイコン、全幅ベタ置き→max-w-5xlの整ったレイアウト、
// ヒーローの2カラム化、比較表のカード化など。
// 扉演出はパターンBに寄せ、Aは「開けて相談」ボタンの軽い傾きのみ
// （スクロールすれば普通にフォームへ辿り着ける状態を維持）。
import {
  SHOP_NAME,
  OWNER_NAME,
  SHOP_PHONE,
  SHOP_PHONE_TEL_HREF,
  SHOP_ADDRESS,
  QUALIFICATIONS,
} from "../../lib/shopInfo";
import {
  SERVICE_CATEGORIES,
  SERVICE_INQUIRY_NOTE,
  COMPARISON_ROWS,
  FLOW_STEPS,
} from "../../lib/dummyContent";
import ContactPreview from "./ContactPreview";
import ShopIllustration from "./ShopIllustration";
import SitePhoto from "./SitePhoto";
import heroWork from "../../../public/images/hero-work.jpg";
import {
  PhoneIcon,
  ShieldIcon,
  ServiceIcon,
  CheckIcon,
  CrossIcon,
  KeyIcon,
} from "./Icons";

const NAVY = "#0d2b4e";

export default function PatternA() {
  return (
    <div className="flex w-full flex-col bg-slate-50 text-slate-800">
      {/* ヘッダー帯（電話表示①） */}
      <div className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-4 sm:flex-row">
          <p className="flex items-center gap-2 t-heading font-bold tracking-tight text-slate-900">
            <KeyIcon className="h-5 w-5 text-sky-700" />
            {SHOP_NAME}
          </p>
          <a
            href={SHOP_PHONE_TEL_HREF}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 transition hover:border-sky-600"
          >
            <PhoneIcon className="h-4 w-4 text-sky-700" />
            <span className="t-body font-bold text-slate-900">
              {SHOP_PHONE}
            </span>
          </a>
        </div>
      </div>

      {/* ヒーロー */}
      <section
        className="w-full text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${NAVY} 0%, #123a68 55%, #17497f 100%)`,
        }}
      >
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-20">
          <div className="flex flex-col items-start gap-5">
            <p className="rounded-full border border-white/25 bg-white/10 px-4 py-1 t-note font-medium tracking-wide">
              家と車の鍵のトラブルに対応
            </p>
            <h1 className="t-display font-bold leading-snug tracking-tight">
              適正価格を、
              <br />
              作業の前に、はっきりと。
            </h1>
            <p className="t-body leading-relaxed text-white/80">
              創業15年以上。広告費をかけない分、無理のない価格でご案内します。
              お見積りの前に作業を始めることはありません。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SHOP_PHONE_TEL_HREF}
                className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 active:translate-y-px"
              >
                <PhoneIcon className="h-5 w-5" />
                今すぐ電話で相談
              </a>
              {/* 「扉を開けて相談」：hoverで軽く開く演出だけ残す（JS不要） */}
              <a
                href="#pattern-a-contact"
                className="rounded-lg border-2 border-white/40 px-6 py-3 font-bold text-white transition-transform duration-300 [transform-origin:left_center] hover:[transform:perspective(600px)_rotateY(-12deg)] hover:border-white/70"
              >
                フォームで相談する
              </a>
            </div>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 t-note text-white/75">
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-orange-400" />
                作業前に必ずお見積り
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-orange-400" />
                出張費0円（ダミー）
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-orange-400" />
                追加請求なし
              </li>
            </ul>
          </div>
          <SitePhoto
            src={heroWork}
            alt="玄関ドアの鍵を作業している様子"
            className="h-64 w-full rounded-xl md:h-80"
            priority
          />
        </div>
      </section>

      {/* 実績の数字帯 */}
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 divide-y divide-slate-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { num: "15年以上", label: "地域での営業実績" },
            { num: "月30件〜", label: "ご依頼件数（ダミー数値）" },
            { num: "0円", label: "出張費・お見積り（ダミー）" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 py-8"
            >
              <p className="t-heading font-bold tracking-tight text-slate-900">
                {s.num}
              </p>
              <p className="t-note text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 比較表（このパターンの主役） */}
      <section className="w-full bg-slate-50">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="t-note font-bold tracking-[0.2em] text-sky-700">
              COMPARISON
            </p>
            <h2 className="t-heading font-bold tracking-tight text-slate-900">
              他社と比べてください
            </h2>
            <p className="t-body text-slate-500">
              仲介サイトを通さない直接のご依頼だから、余計な費用がかかりません
              <br className="hidden sm:block" />
              ※内容はダミーです。実際の条件はオーナー確認後に反映します
            </p>
          </div>
          <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[560px] border-collapse t-body">
              <thead>
                <tr>
                  <th className="w-[26%] border-b border-slate-200 bg-slate-50 px-5 py-4 text-left font-medium text-slate-500">
                    比較項目
                  </th>
                  <th
                    className="w-[37%] border-b px-5 py-4 text-left text-white"
                    style={{ backgroundColor: NAVY, borderColor: NAVY }}
                  >
                    <span className="flex items-center gap-2 font-bold">
                      <ShieldIcon className="h-4 w-4 text-orange-400" />
                      {SHOP_NAME}
                    </span>
                  </th>
                  <th className="w-[37%] border-b border-slate-200 bg-slate-50 px-5 py-4 text-left font-medium text-slate-500">
                    他社（一般的な例）
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.item}>
                    <td
                      className={`px-5 py-4 text-slate-500 ${
                        i < COMPARISON_ROWS.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      {row.item}
                    </td>
                    <td
                      className={`bg-sky-50/60 px-5 py-4 font-bold text-slate-900 ${
                        i < COMPARISON_ROWS.length - 1
                          ? "border-b border-sky-100"
                          : ""
                      }`}
                    >
                      <span className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
                        {row.ours}
                      </span>
                    </td>
                    <td
                      className={`px-5 py-4 text-slate-400 ${
                        i < COMPARISON_ROWS.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      <span className="flex items-start gap-2">
                        <CrossIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 対応サービス・料金 */}
      <section className="w-full border-y border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="t-note font-bold tracking-[0.2em] text-sky-700">
              SERVICE / PRICE
            </p>
            <h2 className="t-heading font-bold tracking-tight text-slate-900">
              対応サービスと料金の目安
            </h2>
            <p className="t-body text-slate-500">
              ※対応可否・金額はオーナー確認中のダミー表示です
            </p>
          </div>
          {/* 家・車を大きく、金庫を小さく。カテゴリごとにカードを分ける */}
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICE_CATEGORIES.filter((c) => c.id !== "safe").map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-lg text-white shadow-sm"
                    style={{ backgroundColor: NAVY }}
                  >
                    <ServiceIcon name={cat.icon} className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col">
                    <p className="t-heading font-bold tracking-tight text-slate-900">
                      {cat.title}
                    </p>
                    <p className="t-note text-slate-500">{cat.lead}</p>
                  </div>
                </div>
                <ul className="flex flex-col divide-y divide-slate-200 border-y border-slate-200">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 py-3"
                    >
                      <ServiceIcon
                        name={item.icon}
                        className="h-4 w-4 shrink-0 text-sky-700"
                      />
                      <span className="t-body flex-1 text-slate-700">
                        {item.name}
                      </span>
                      <span className="t-body font-bold text-slate-900">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                {cat.caution && (
                  <p className="t-note rounded-lg bg-orange-50 px-3 py-2 text-orange-900">
                    {cat.caution}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* 金庫＋お気軽に相談を横並びで */}
          <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
            {SERVICE_CATEGORIES.filter((c) => c.id === "safe").map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sky-700 shadow-sm">
                    <ServiceIcon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col">
                    <p className="t-body font-bold text-slate-900">
                      {cat.title}
                    </p>
                    <p className="t-note text-slate-500">{cat.lead}</p>
                  </div>
                </div>
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between border-y border-slate-200 py-3"
                  >
                    <span className="t-body text-slate-700">{item.name}</span>
                    <span className="t-body font-bold text-slate-900">
                      {item.price}
                    </span>
                  </div>
                ))}
                {cat.caution && (
                  <p className="t-note rounded-lg bg-orange-50 px-3 py-2 text-orange-900">
                    {cat.caution}
                  </p>
                )}
              </div>
            ))}
            <a
              href={SHOP_PHONE_TEL_HREF}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 p-6 text-center transition hover:border-sky-400 hover:bg-sky-50/50"
            >
              <PhoneIcon className="h-6 w-6 text-sky-700" />
              <p className="t-body font-medium text-slate-700">
                {SERVICE_INQUIRY_NOTE}
              </p>
              <p className="t-note text-slate-500">
                対応できるかどうかも、その場でお答えします
              </p>
            </a>
          </div>

          <p className="text-center t-note text-slate-400">
            鍵の種類・状況により変わります。お電話でおおよその金額をお伝えできます
          </p>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="w-full bg-slate-50">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="t-note font-bold tracking-[0.2em] text-sky-700">
              FLOW
            </p>
            <h2 className="t-heading font-bold tracking-tight text-slate-900">
              ご依頼からお支払いまで
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-4">
            {FLOW_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="relative flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 pt-7"
              >
                <span
                  className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full t-note font-bold text-white shadow"
                  style={{ backgroundColor: NAVY }}
                >
                  {i + 1}
                </span>
                <p className="t-body font-bold text-slate-900">{step.title}</p>
                <p className="t-note leading-relaxed text-slate-500">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="w-full border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="t-note font-bold tracking-[0.2em] text-sky-700">
                SHOP
              </p>
              <h2 className="t-heading font-bold tracking-tight text-slate-900">
                店舗情報
              </h2>
            </div>
            <dl className="grid grid-cols-[5.5rem_1fr] gap-y-3 rounded-xl border border-slate-200 bg-slate-50 p-6 t-body">
              <dt className="text-slate-500">代表者</dt>
              <dd className="font-medium text-slate-900">{OWNER_NAME}</dd>
              <dt className="text-slate-500">電話番号</dt>
              <dd className="font-medium text-slate-900">{SHOP_PHONE}</dd>
              <dt className="text-slate-500">住所</dt>
              <dd className="font-medium text-slate-900">{SHOP_ADDRESS}</dd>
              <dt className="text-slate-500">営業時間</dt>
              <dd className="font-medium text-slate-900">
                9:00〜18:00（年中無休・ダミー）
              </dd>
              {QUALIFICATIONS && (
                <>
                  <dt className="text-slate-500">資格</dt>
                  <dd className="font-medium text-slate-900">
                    {QUALIFICATIONS}
                  </dd>
                </>
              )}
            </dl>
          </div>
          {/* 外観は写真が出せない可能性があるためイラストで代替（仮） */}
          <div className="flex flex-col gap-2">
            <ShopIllustration
              accent="#f97316"
              className="h-56 w-full overflow-hidden rounded-xl bg-slate-100 text-slate-600 md:h-64"
            />
            <p className="t-note text-center text-slate-400">
              ※外観はイメージイラストです
            </p>
          </div>
        </div>
      </section>

      {/* 問い合わせフォーム（フル版） */}
      <div id="pattern-a-contact" className="w-full scroll-mt-20 bg-slate-50">
        <ContactPreview theme="a" variant="full" />
      </div>

      {/* フッター（電話表示②） */}
      <section
        className="flex w-full flex-col items-center gap-3 px-6 py-12 text-center text-white"
        style={{ backgroundColor: NAVY }}
      >
        <p className="t-body font-medium text-white/80">
          お急ぎの場合はお電話ください
        </p>
        <a
          href={SHOP_PHONE_TEL_HREF}
          className="flex items-center gap-2 t-heading font-bold tracking-tight"
        >
          <PhoneIcon className="h-6 w-6 text-orange-400" />
          {SHOP_PHONE}
        </a>
        <p className="t-note text-white/60">
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </section>
    </div>
  );
}
