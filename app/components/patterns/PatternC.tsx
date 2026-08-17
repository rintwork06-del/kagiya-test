// パターンC：老舗・職人系／緊急対応・利便性訴求型
// 生成り×墨色、差し色に金茶（配色70:25:5。HP分析/調査結果.md参照）。
// 見出しは明朝体（OS標準のみ、globals.cssの.font-mincho）で老舗の構えを出す。
// 今まさに困っている人に向けた構成：画面下に常時表示の電話バー、
// 営業時間・対応エリアを最上部近くに。演出は最小限のまま（2026-08-17の
// 振り分け合意：謎解き的な演出は緊急対応の方向性とケンカするため入れない）。
// 2026-08-17:「見た目が安っぽい」フィードバックを受けて全面的に作り直し。
import {
  SHOP_NAME,
  OWNER_NAME,
  SHOP_PHONE,
  SHOP_PHONE_TEL_HREF,
  SHOP_ADDRESS,
  QUALIFICATIONS,
} from "../../lib/shopInfo";
import { PRICING_ITEMS, SERVICE_AREA_NOTE } from "../../lib/dummyContent";
import ContactPreview from "./ContactPreview";
import PlaceholderImage from "./PlaceholderImage";
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  ShieldIcon,
} from "./Icons";

const SUMI = "#292524";
const KINCHA = "#b45309";

export default function PatternC() {
  return (
    <div className="relative flex w-full flex-col bg-[#f5f1ea] pb-24 text-stone-800">
      {/* 画面下に常時表示の電話バー（緊急対応パターンの核） */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-amber-900/30"
        style={{ backgroundColor: SUMI }}
      >
        <a
          href={SHOP_PHONE_TEL_HREF}
          className="mx-auto flex w-full max-w-5xl items-center justify-center gap-3 px-6 py-4 text-white"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: KINCHA }}
          >
            <PhoneIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-xs text-white/70">
              鍵のトラブルで今お困りの方
            </span>
            <span className="text-xl font-bold tracking-wide">
              {SHOP_PHONE}
            </span>
          </span>
        </a>
      </div>

      {/* ヘッダー：屋号 */}
      <header className="flex w-full flex-col items-center gap-4 px-6 pb-10 pt-14 text-center">
        <p className="text-xs tracking-[0.35em] text-stone-500">
          創業15年・地域の鍵専門店
        </p>
        <h1 className="font-mincho text-4xl font-semibold tracking-[0.15em] text-stone-900 sm:text-5xl">
          {SHOP_NAME}
        </h1>
        <span
          className="h-px w-16"
          style={{ backgroundColor: KINCHA }}
          aria-hidden="true"
        />
        <p className="font-mincho text-base tracking-wider text-stone-600">
          困った時の、町の鍵屋。
        </p>
        {/* 電話表示① */}
        <a
          href={SHOP_PHONE_TEL_HREF}
          className="mt-2 flex items-center gap-2.5 rounded-md border border-stone-300 bg-white px-6 py-3.5 shadow-sm transition hover:border-amber-700"
        >
          <PhoneIcon className="h-5 w-5" style={{ color: KINCHA }} />
          <span className="text-xl font-bold tracking-wide text-stone-900">
            {SHOP_PHONE}
          </span>
        </a>
        <p className="text-xs text-stone-500">
          お電話の際は「ホームページを見た」とお伝えください
        </p>
      </header>

      {/* 営業時間・緊急対応・エリアの3枚 */}
      <section className="w-full px-6">
        <div className="mx-auto grid w-full max-w-5xl gap-4 sm:grid-cols-3">
          {[
            {
              icon: <ClockIcon className="h-5 w-5" />,
              title: "営業時間",
              body: "9:00〜18:00",
              note: "年中無休（ダミー）",
            },
            {
              icon: <ShieldIcon className="h-5 w-5" />,
              title: "緊急・時間外対応",
              body: "対応可否確認中",
              note: "オーナー確認待ち",
            },
            {
              icon: <MapPinIcon className="h-5 w-5" />,
              title: "対応エリア",
              body: "○○市とその周辺",
              note: "詳細は下の地図へ（ダミー）",
            },
          ].map((tile) => (
            <div
              key={tile.title}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-5 py-6 text-center shadow-sm"
            >
              <span style={{ color: KINCHA }}>{tile.icon}</span>
              <p className="text-xs tracking-widest text-stone-500">
                {tile.title}
              </p>
              <p className="font-mincho text-lg font-semibold text-stone-900">
                {tile.body}
              </p>
              <p className="text-[11px] text-stone-400">{tile.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 対応エリア地図 */}
      <section className="w-full px-6 py-14">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          <h2 className="text-center font-mincho text-2xl font-semibold tracking-widest text-stone-900">
            対応エリア
          </h2>
          <PlaceholderImage
            label="対応エリア地図"
            className="h-56 w-full rounded-lg bg-white text-amber-800 shadow-sm"
          />
          <p className="text-center text-xs text-stone-500">
            {SERVICE_AREA_NOTE}
          </p>
        </div>
      </section>

      {/* 問い合わせフォーム①（簡易版） */}
      <ContactPreview theme="c" variant="compact" />

      {/* 料金 */}
      <section className="w-full px-6 py-14">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
          <h2 className="text-center font-mincho text-2xl font-semibold tracking-widest text-stone-900">
            料金の目安
          </h2>
          <p className="text-center text-xs text-stone-500">
            ※金額はダミー表示です。実際の料金はオーナー確認後に反映します
          </p>
          <div className="flex flex-col divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white shadow-sm">
            {PRICING_ITEMS.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="text-sm text-stone-700">{item.name}</span>
                <span className="font-mincho text-lg font-semibold text-stone-900">
                  {item.price}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-sm text-stone-700">出張料金</span>
              <span
                className="font-mincho text-lg font-semibold"
                style={{ color: KINCHA }}
              >
                無料
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="w-full bg-white px-6 py-14">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
          <h2 className="text-center font-mincho text-2xl font-semibold tracking-widest text-stone-900">
            沿革
          </h2>
          <ol className="mx-auto flex w-full max-w-md flex-col gap-8 border-l border-stone-300 pl-8">
            <li className="relative">
              <span
                className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: KINCHA }}
              />
              <p className="text-xs tracking-widest text-stone-500">創業</p>
              <p className="mt-1 font-mincho text-stone-800">
                地域に根差した鍵の専門店として開業（ダミー年）
              </p>
            </li>
            <li className="relative">
              <span
                className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: KINCHA }}
              />
              <p className="text-xs tracking-widest text-stone-500">現在</p>
              <p className="mt-1 font-mincho text-stone-800">
                15年以上の実績を積み重ね、変わらぬ技術で対応しています
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="w-full px-6 py-14">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
          <h2 className="text-center font-mincho text-2xl font-semibold tracking-widest text-stone-900">
            店舗情報
          </h2>
          <dl className="grid grid-cols-[5.5rem_1fr] gap-y-3 rounded-lg border border-stone-200 bg-white p-6 text-sm shadow-sm">
            <dt className="text-stone-500">代表者</dt>
            <dd className="font-medium text-stone-900">{OWNER_NAME}</dd>
            <dt className="text-stone-500">電話番号</dt>
            <dd className="font-medium text-stone-900">{SHOP_PHONE}</dd>
            <dt className="text-stone-500">住所</dt>
            <dd className="font-medium text-stone-900">{SHOP_ADDRESS}</dd>
            <dt className="text-stone-500">営業時間</dt>
            <dd className="font-medium text-stone-900">
              9:00〜18:00（年中無休・ダミー）
            </dd>
            {QUALIFICATIONS && (
              <>
                <dt className="text-stone-500">資格</dt>
                <dd className="font-medium text-stone-900">{QUALIFICATIONS}</dd>
              </>
            )}
          </dl>
        </div>
      </section>

      {/* 問い合わせフォーム②（フル版） */}
      <div className="w-full bg-white">
        <ContactPreview theme="c" variant="full" />
      </div>

      {/* フッター（電話表示②） */}
      <section
        className="flex w-full flex-col items-center gap-3 px-6 py-12 text-center text-stone-100"
        style={{ backgroundColor: SUMI }}
      >
        <p className="text-sm text-stone-300">お急ぎの場合はお電話ください</p>
        <a
          href={SHOP_PHONE_TEL_HREF}
          className="flex items-center gap-2 font-mincho text-2xl font-semibold tracking-wide"
        >
          <PhoneIcon className="h-6 w-6" style={{ color: "#e8c877" }} />
          {SHOP_PHONE}
        </a>
        <p className="text-xs text-stone-400">
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </section>
    </div>
  );
}
