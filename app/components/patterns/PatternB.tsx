// パターンB：親しみ・安心系／実績訴求型
// 生成りのアイボリー×深緑、差し色に琥珀（配色70:25:5。HP分析/調査結果.md参照）。
// 初めて鍵屋を探す不安な状態の人に向けた構成。
// 構成の特徴：施工実績・お客様の声・代表者の人柄を、3つの「木の扉」をタップして
// 開ける演出で見せる。比較表はあえて出さない（実績と人柄で信頼を出す）。
// 2026-08-17：「見た目が安っぽい」フィードバックを受けて全面的に作り直し。
// 扉はCSSグラデーションで木目・鏡板・真鍮ノブまで描く作りに変更（DoorReveal.tsx）。
import {
  SHOP_NAME,
  OWNER_NAME,
  SHOP_PHONE,
  SHOP_PHONE_TEL_HREF,
  SHOP_ADDRESS,
  QUALIFICATIONS,
} from "../../lib/shopInfo";
import {
  PRICING_ITEMS,
  TESTIMONIALS,
  BEFORE_AFTER_EXAMPLES,
  OWNER_INTRO,
} from "../../lib/dummyContent";
import ContactPreview from "./ContactPreview";
import PlaceholderImage from "./PlaceholderImage";
import DoorReveal from "./DoorReveal";
import {
  PhoneIcon,
  ShieldIcon,
  SpeechIcon,
  BadgeIcon,
  CheckIcon,
  KeyIcon,
} from "./Icons";

const IVORY = "#faf6ef";
const GREEN = "#1f6f54";

export default function PatternB() {
  return (
    <div
      className="flex w-full flex-col text-emerald-950"
      style={{ backgroundColor: IVORY }}
    >
      {/* ヘッダー帯（電話表示①） */}
      <div className="w-full border-b border-emerald-900/10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-4 sm:flex-row">
          <p className="flex items-center gap-2 text-lg font-bold tracking-tight text-emerald-950">
            <KeyIcon className="h-5 w-5" style={{ color: GREEN }} />
            {SHOP_NAME}
          </p>
          <a
            href={SHOP_PHONE_TEL_HREF}
            className="flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 transition hover:border-emerald-600"
          >
            <PhoneIcon className="h-4 w-4" style={{ color: GREEN }} />
            <span className="text-base font-bold text-emerald-950">
              {SHOP_PHONE}
            </span>
          </a>
        </div>
      </div>

      {/* ヒーロー */}
      <section className="w-full">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 py-16 text-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg ring-4 ring-white"
            style={{ backgroundColor: GREEN }}
          >
            {OWNER_NAME.charAt(0)}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-emerald-950 sm:text-4xl">
            鍵のこと、
            <br className="sm:hidden" />
            ひとりで悩まないでください。
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-emerald-950/70 sm:text-base">
            {SHOP_NAME}
            は、この街で15年以上続く小さな鍵屋です。開かない・失くした・不安、
            どんなことでもまずはお話を聞かせてください。
          </p>
          <a
            href={SHOP_PHONE_TEL_HREF}
            className="flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white shadow-lg transition hover:brightness-110 active:translate-y-px"
            style={{
              backgroundColor: GREEN,
              boxShadow: "0 10px 24px -8px rgba(31,111,84,0.5)",
            }}
          >
            <PhoneIcon className="h-5 w-5" />
            {SHOP_PHONE}
          </a>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs text-emerald-950/60">
            <li className="flex items-center gap-1.5">
              <CheckIcon className="h-3.5 w-3.5 text-amber-600" />
              夜間のご相談もまずはお電話を（ダミー）
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon className="h-3.5 w-3.5 text-amber-600" />
              女性のお客様おひとりでも安心してご相談ください
            </li>
          </ul>
        </div>
      </section>

      {/* 施工事例 */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
              WORKS
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-emerald-950">
              最近のお仕事
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {BEFORE_AFTER_EXAMPLES.map((example) => (
              <figure
                key={example.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm"
              >
                <PlaceholderImage
                  label={example.title}
                  className="h-44 w-full text-emerald-800"
                />
                <figcaption className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-sm font-medium text-emerald-950">
                    {example.title}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                    {example.note}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 問い合わせフォーム①（簡易版） */}
      <ContactPreview theme="b" variant="compact" />

      {/* 3つの扉 */}
      <section className="w-full">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
              OPEN THE DOOR
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-emerald-950">
              3つの扉を、開けてみてください
            </h2>
            <p className="text-sm text-emerald-950/60">
              当店のことがもう少し分かります
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <DoorReveal
              icon={<ShieldIcon className="h-6 w-6" />}
              label="実績"
              contentClassName="bg-[#fdfbf6] text-emerald-950"
            >
              <h3 className="font-bold text-emerald-900">実績（ダミー例）</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-emerald-950/80">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  15年以上、地域の皆様の「困った」に寄り添ってきました
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  毎月30件〜のご依頼をいただいております（件数はダミーです）
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  電話ですぐに状況を確認、丁寧にご案内します（ダミー項目）
                </li>
              </ul>
            </DoorReveal>

            <DoorReveal
              icon={<SpeechIcon className="h-6 w-6" />}
              label="お客様の声"
              contentClassName="bg-[#fdfbf6] text-emerald-950"
            >
              <h3 className="font-bold text-emerald-900">お客様の声</h3>
              <p className="text-[11px] text-emerald-950/50">
                ※ダミーの声です。実際の声は今後確認して差し替えます
              </p>
              <div className="flex flex-col gap-3">
                {TESTIMONIALS.map((t) => (
                  <blockquote
                    key={t.name}
                    className="rounded-xl bg-emerald-50/70 p-3"
                  >
                    <p className="text-sm leading-relaxed text-emerald-950/90">
                      「{t.comment}」
                    </p>
                    <footer className="mt-1 text-xs text-emerald-700">
                      {t.name}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </DoorReveal>

            <DoorReveal
              icon={<BadgeIcon className="h-6 w-6" />}
              label="代表者のこと"
              contentClassName="bg-[#fdfbf6] text-emerald-950"
            >
              <h3 className="font-bold text-emerald-900">
                代表者・資格について
              </h3>
              <PlaceholderImage
                label="代表者の写真"
                className="h-24 w-24 self-center rounded-full bg-emerald-50 text-emerald-700"
              />
              <p className="text-center text-sm font-bold text-emerald-950">
                {OWNER_NAME}
              </p>
              <p className="text-sm leading-relaxed text-emerald-950/75">
                {OWNER_INTRO}
              </p>
              {QUALIFICATIONS && (
                <p className="rounded-lg bg-emerald-50/70 px-3 py-2 text-xs text-emerald-800">
                  保有資格：{QUALIFICATIONS}
                </p>
              )}
            </DoorReveal>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-6 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
              PRICE
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-emerald-950">
              料金の目安
            </h2>
            <p className="text-xs text-emerald-950/50">
              ※金額はダミー表示です。実際の料金はオーナー確認後に反映します
            </p>
          </div>
          <ul className="flex flex-col divide-y divide-emerald-900/10 rounded-3xl border border-emerald-900/10 bg-[#fdfbf6] px-6">
            {PRICING_ITEMS.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-4"
              >
                <span className="text-sm text-emerald-950/80">{item.name}</span>
                <span className="text-lg font-bold tracking-tight text-emerald-900">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="w-full">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-6 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700">
              SHOP
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-emerald-950">
              店舗情報
            </h2>
          </div>
          <dl className="grid grid-cols-[5.5rem_1fr] gap-y-3 rounded-3xl border border-emerald-900/10 bg-white p-6 text-sm">
            <dt className="text-emerald-700">代表者</dt>
            <dd className="font-medium text-emerald-950">{OWNER_NAME}</dd>
            <dt className="text-emerald-700">電話番号</dt>
            <dd className="font-medium text-emerald-950">{SHOP_PHONE}</dd>
            <dt className="text-emerald-700">住所</dt>
            <dd className="font-medium text-emerald-950">{SHOP_ADDRESS}</dd>
            <dt className="text-emerald-700">営業時間</dt>
            <dd className="font-medium text-emerald-950">
              9:00〜18:00（年中無休・ダミー）
            </dd>
            {QUALIFICATIONS && (
              <>
                <dt className="text-emerald-700">資格</dt>
                <dd className="font-medium text-emerald-950">
                  {QUALIFICATIONS}
                </dd>
              </>
            )}
          </dl>
        </div>
      </section>

      {/* 問い合わせフォーム②（フル版） */}
      <div className="w-full bg-white">
        <ContactPreview theme="b" variant="full" />
      </div>

      {/* フッター（電話表示②） */}
      <section
        className="flex w-full flex-col items-center gap-3 px-6 py-12 text-center text-emerald-50"
        style={{ backgroundColor: GREEN }}
      >
        <p className="text-sm font-medium text-emerald-100/90">
          お急ぎのときは、まずお電話ください
        </p>
        <a
          href={SHOP_PHONE_TEL_HREF}
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <PhoneIcon className="h-6 w-6 text-amber-300" />
          {SHOP_PHONE}
        </a>
        <p className="text-xs text-emerald-100/70">
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </section>
    </div>
  );
}
