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
  SERVICE_CATEGORIES,
  SERVICE_INQUIRY_NOTE,
  TESTIMONIALS,
  WORK_EXAMPLES,
  OWNER_INTRO,
} from "../../lib/dummyContent";
import ContactPreview from "./ContactPreview";
import PlaceholderImage from "./PlaceholderImage";
import ShopIllustration from "./ShopIllustration";
import SitePhoto from "./SitePhoto";
import DoorReveal from "./DoorReveal";
import workDoor from "../../../public/images/work-door.jpg";
import workKey from "../../../public/images/work-key.jpg";
import {
  PhoneIcon,
  ShieldIcon,
  SpeechIcon,
  BadgeIcon,
  CheckIcon,
  KeyIcon,
  ServiceIcon,
} from "./Icons";

const IVORY = "#faf6ef";
const GREEN = "#1f6f54";

// WORK_EXAMPLESのkeyと写真の対応。写真は仮のAI生成画像
// （実写真が手に入ったらここを差し替える）。
const WORK_PHOTOS = {
  door: workDoor,
  keyCut: workKey,
} as const;

export default function PatternB() {
  return (
    <div
      className="flex w-full flex-col text-emerald-950"
      style={{ backgroundColor: IVORY }}
    >
      {/* ヘッダー帯（電話表示①） */}
      <div className="w-full border-b border-emerald-900/10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-4 sm:flex-row">
          <p className="flex items-center gap-2 t-heading font-bold tracking-tight text-emerald-950">
            <KeyIcon className="h-5 w-5" style={{ color: GREEN }} />
            {SHOP_NAME}
          </p>
          <a
            href={SHOP_PHONE_TEL_HREF}
            className="flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 transition hover:border-emerald-600"
          >
            <PhoneIcon className="h-4 w-4" style={{ color: GREEN }} />
            <span className="t-body font-bold text-emerald-950">
              {SHOP_PHONE}
            </span>
          </a>
        </div>
      </div>

      {/* ヒーロー */}
      <section className="w-full">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 py-16 text-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full t-heading font-bold text-white shadow-lg ring-4 ring-white"
            style={{ backgroundColor: GREEN }}
          >
            {OWNER_NAME.charAt(0)}
          </div>
          <h1 className="t-display font-bold leading-snug tracking-tight text-emerald-950">
            鍵のこと、
            <br className="sm:hidden" />
            ひとりで悩まないでください。
          </h1>
          <p className="max-w-md t-body leading-relaxed text-emerald-950/70">
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
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 t-note text-emerald-950/60">
            <li className="flex items-center gap-1.5">
              <CheckIcon className="h-3.5 w-3.5 text-amber-600" />
              営業時間内はすぐにお電話がつながります
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon className="h-3.5 w-3.5 text-amber-600" />
              女性のお客様おひとりでも安心してご相談ください
            </li>
          </ul>
        </div>
      </section>

      {/* 対応の一例
          見出しを「最近のお仕事」から変更した（2026-08-17）。
          掲載する写真はAI生成のイメージ画像で、実際に手がけた案件の写真ではない。
          「最近のお仕事」のままだと、やっていない仕事を実績として見せる形になり、
          透明性で信頼を得るというこのサイトの方針と矛盾するため。
          実際の施工写真が手に入ったら、見出しを実績寄りに戻してよい。 */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="t-note font-bold tracking-[0.2em] text-amber-700">
              WORKS
            </p>
            <h2 className="t-heading font-bold tracking-tight text-emerald-950">
              こんな作業に対応しています
            </h2>
            <p className="t-note text-emerald-950/50">
              ※掲載している写真はすべてイメージです
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {WORK_EXAMPLES.map((example) => (
              <figure
                key={example.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm"
              >
                <SitePhoto
                  src={WORK_PHOTOS[example.key]}
                  alt={example.alt}
                  className="h-44 w-full"
                  badge={null}
                />
                <figcaption className="flex items-center justify-between px-5 py-3.5">
                  <span className="t-body font-medium text-emerald-950">
                    {example.title}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 t-note text-emerald-700">
                    イメージ
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
            <p className="t-note font-bold tracking-[0.2em] text-amber-700">
              OPEN THE DOOR
            </p>
            <h2 className="t-heading font-bold tracking-tight text-emerald-950">
              3つの扉を、開けてみてください
            </h2>
            <p className="t-body text-emerald-950/60">
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
              <ul className="flex flex-col gap-2.5 t-body text-emerald-950/80">
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
              <p className="t-note text-emerald-950/50">
                ※ダミーの声です。実際の声は今後確認して差し替えます
              </p>
              <div className="flex flex-col gap-3">
                {TESTIMONIALS.map((t) => (
                  <blockquote
                    key={t.name}
                    className="rounded-xl bg-emerald-50/70 p-3"
                  >
                    <p className="t-body leading-relaxed text-emerald-950/90">
                      「{t.comment}」
                    </p>
                    <footer className="mt-1 t-note text-emerald-700">
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
              <p className="text-center t-body font-bold text-emerald-950">
                {OWNER_NAME}
              </p>
              <p className="t-body leading-relaxed text-emerald-950/75">
                {OWNER_INTRO}
              </p>
              {QUALIFICATIONS && (
                <p className="rounded-lg bg-emerald-50/70 px-3 py-2 t-note text-emerald-800">
                  保有資格：{QUALIFICATIONS}
                </p>
              )}
            </DoorReveal>
          </div>
        </div>
      </section>

      {/* 対応サービス・料金 */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-6 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="t-note font-bold tracking-[0.2em] text-amber-700">
              SERVICE / PRICE
            </p>
            <h2 className="t-heading font-bold tracking-tight text-emerald-950">
              こんなご相談に対応しています
            </h2>
            <p className="t-note text-emerald-950/50">
              ※対応可否・金額はオーナー確認中のダミー表示です
            </p>
          </div>
          {/* カテゴリごとに丸みのあるカードで。家・車を先に、金庫を最後に */}
          <div className="flex flex-col gap-4">
            {SERVICE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col gap-3 rounded-3xl border border-emerald-900/10 bg-[#fdfbf6] p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: GREEN }}
                  >
                    <ServiceIcon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col">
                    <p className="t-body font-bold text-emerald-950">
                      {cat.title}
                    </p>
                    <p className="t-note text-emerald-950/60">{cat.lead}</p>
                  </div>
                </div>
                <ul className="flex flex-col divide-y divide-emerald-900/10 border-t border-emerald-900/10">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 pt-3 pb-3 last:pb-0"
                    >
                      <ServiceIcon
                        name={item.icon}
                        className="h-4 w-4 shrink-0 text-emerald-700"
                      />
                      <span className="flex-1 t-body text-emerald-950/80">
                        {item.name}
                      </span>
                      <span className="t-body font-bold text-emerald-900">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                {cat.caution && (
                  <p className="t-note rounded-xl bg-amber-50 px-3 py-2 text-amber-900">
                    {cat.caution}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="text-center t-note text-emerald-950/50">
            {SERVICE_INQUIRY_NOTE}
            <br />
            対応できるかどうかも、その場でお答えします
          </p>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="w-full">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-6 py-14">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="t-note font-bold tracking-[0.2em] text-amber-700">
              SHOP
            </p>
            <h2 className="t-heading font-bold tracking-tight text-emerald-950">
              店舗情報
            </h2>
          </div>
          {/* 外観は写真が出せない可能性があるためイラストで代替（仮） */}
          <ShopIllustration
            accent="#b45309"
            className="h-48 w-full overflow-hidden rounded-3xl bg-white text-emerald-900"
          />
          <p className="t-note text-center text-emerald-950/40">
            ※外観はイメージイラストです
          </p>
          <dl className="grid grid-cols-[5.5rem_1fr] gap-y-3 rounded-3xl border border-emerald-900/10 bg-white p-6 t-body">
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
        <p className="t-body font-medium text-emerald-100/90">
          お急ぎのときは、まずお電話ください
        </p>
        <a
          href={SHOP_PHONE_TEL_HREF}
          className="flex items-center gap-2 t-heading font-bold tracking-tight"
        >
          <PhoneIcon className="h-6 w-6 text-amber-300" />
          {SHOP_PHONE}
        </a>
        <p className="t-note text-emerald-100/70">
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </section>
    </div>
  );
}
