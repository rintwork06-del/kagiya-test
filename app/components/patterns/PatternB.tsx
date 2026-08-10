// パターンB：親しみ・安心系
// 深緑×アイボリー。初めて鍵屋を探す不安な状態の人に向けた、柔らかい安心感。
// 構成の特徴：丸みのあるカード、店主の名前を丸アイコンで見せる、安心ポイントを列挙。
import {
  SHOP_NAME,
  OWNER_NAME,
  SHOP_PHONE,
  SHOP_ADDRESS,
  QUALIFICATIONS,
} from "../../lib/shopInfo";
import ContactPreview from "./ContactPreview";

export default function PatternB() {
  return (
    <div className="flex w-full flex-col bg-orange-50 text-emerald-950">
      <header className="flex flex-col items-center gap-3 px-6 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 text-xl font-bold text-white">
          {OWNER_NAME.charAt(0)}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-emerald-900">
          {SHOP_NAME}
        </h1>
        <p className="max-w-md text-lg font-medium text-emerald-800">
          鍵のトラブル、あなたのそばに。すぐに駆けつけます
        </p>
      </header>

      <section className="mx-6 flex flex-col gap-3 rounded-2xl bg-white/90 px-6 py-8">
        <h2 className="text-lg font-semibold text-emerald-900">
          安心ポイント（ダミー例）
        </h2>
        <ul className="flex flex-col gap-2 text-emerald-950/80">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-600">●</span>
            15年以上、地域の皆様の「困った」に寄り添ってきました
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-600">●</span>
            電話ですぐに状況を確認、丁寧にご案内します（ダミー項目）
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-600">●</span>
            毎月多数のご依頼をいただいております（件数はダミーです）
          </li>
        </ul>
      </section>

      <section className="mx-6 mt-6 flex flex-col gap-3 rounded-2xl bg-white/90 px-6 py-8">
        <h2 className="text-lg font-semibold text-emerald-900">店舗情報</h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-emerald-950/80">
          <dt className="text-emerald-700">代表者</dt>
          <dd>{OWNER_NAME}</dd>
          <dt className="text-emerald-700">電話番号</dt>
          <dd>{SHOP_PHONE}</dd>
          <dt className="text-emerald-700">住所</dt>
          <dd>{SHOP_ADDRESS}</dd>
          <dt className="text-emerald-700">営業時間</dt>
          <dd>9:00〜18:00（年中無休・ダミー）</dd>
          {QUALIFICATIONS && (
            <>
              <dt className="text-emerald-700">資格</dt>
              <dd>{QUALIFICATIONS}</dd>
            </>
          )}
        </dl>
      </section>

      <ContactPreview theme="b" />

      <section className="flex flex-col items-center gap-2 bg-emerald-800 px-6 py-10 text-center text-emerald-50">
        <p className="font-medium">お急ぎのときは、まずお電話ください</p>
        <p className="text-lg font-semibold">{SHOP_PHONE}</p>
        <p className="text-sm text-emerald-100">
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </section>
    </div>
  );
}
