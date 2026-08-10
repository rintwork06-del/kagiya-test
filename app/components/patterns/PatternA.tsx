// パターンA：誠実・フォーマル系
// ネイビー×白。「ちゃんとした業者か」を重視する層に向けた、きっちりした企業感。
// 構成の特徴：実績を数字パネルで見せる、店舗情報は表形式でまとめる。
import {
  SHOP_NAME,
  OWNER_NAME,
  SHOP_PHONE,
  SHOP_ADDRESS,
  QUALIFICATIONS,
} from "../../lib/shopInfo";
import ContactPreview from "./ContactPreview";

export default function PatternA() {
  return (
    <div className="flex w-full flex-col bg-white text-slate-800">
      <header className="flex flex-col items-center gap-2 border-b border-slate-200 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {SHOP_NAME}
        </h1>
        <p className="max-w-md text-lg font-medium text-sky-700">
          確かな技術と迅速な対応で、地域の鍵のトラブルに向き合います
        </p>
      </header>

      <section className="grid grid-cols-2 gap-4 border-b border-slate-200 px-6 py-10">
        <div className="flex flex-col items-center gap-1 rounded border border-slate-200 py-6">
          <p className="text-3xl font-bold text-slate-900">15年以上</p>
          <p className="text-sm text-slate-600">の営業実績</p>
        </div>
        <div className="flex flex-col items-center gap-1 rounded border border-slate-200 py-6">
          <p className="text-3xl font-bold text-slate-900">30件〜</p>
          <p className="text-sm text-slate-600">
            毎月のご依頼件数（ダミー数値）
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3 border-b border-slate-200 px-6 py-10">
        <h2 className="text-lg font-semibold text-slate-900">当店について</h2>
        <p className="text-slate-700">
          創業15年以上、豊富な経験と実績で鍵の交換・修理・トラブル解決に対応いたします。
        </p>
      </section>

      <section className="flex flex-col gap-3 border-b border-slate-200 px-6 py-10">
        <h2 className="text-lg font-semibold text-slate-900">店舗情報</h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-slate-700">
          <dt className="text-slate-500">代表者</dt>
          <dd>{OWNER_NAME}</dd>
          <dt className="text-slate-500">電話番号</dt>
          <dd>{SHOP_PHONE}</dd>
          <dt className="text-slate-500">住所</dt>
          <dd>{SHOP_ADDRESS}</dd>
          <dt className="text-slate-500">営業時間</dt>
          <dd>9:00〜18:00（年中無休・ダミー）</dd>
          {QUALIFICATIONS && (
            <>
              <dt className="text-slate-500">資格</dt>
              <dd>{QUALIFICATIONS}</dd>
            </>
          )}
        </dl>
      </section>

      <ContactPreview theme="a" />

      <section className="flex flex-col items-center gap-2 bg-slate-50 px-6 py-10 text-center">
        <p className="font-medium text-slate-900">
          お急ぎの場合はお電話ください
        </p>
        <p className="text-lg font-semibold text-slate-900">{SHOP_PHONE}</p>
        <p className="text-sm text-slate-600">
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </section>
    </div>
  );
}
