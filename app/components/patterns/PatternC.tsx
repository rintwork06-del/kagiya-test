// パターンC：老舗・職人系
// ダークブラウン×生成り、控えめなゴールド。積み重ねた実績で信頼を出す層向け。
// 構成の特徴：沿革を年表風に見せる、余白多めで落ち着いた店舗情報。
import {
  SHOP_NAME,
  OWNER_NAME,
  SHOP_PHONE,
  SHOP_ADDRESS,
  QUALIFICATIONS,
} from "../../lib/shopInfo";
import ContactPreview from "./ContactPreview";

export default function PatternC() {
  return (
    <div className="flex w-full flex-col bg-stone-50 text-stone-800">
      <header className="flex flex-col items-center gap-2 border-b border-amber-800/20 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900">
          {SHOP_NAME}
        </h1>
        <p className="max-w-md text-lg font-medium text-amber-700">
          変わらぬ技術、積み重ねた信頼。地域の鍵の専門店
        </p>
      </header>

      <section className="flex flex-col gap-6 border-b border-amber-800/10 px-6 py-12">
        <h2 className="text-center text-lg font-semibold text-stone-900">
          沿革
        </h2>
        <ol className="mx-auto flex w-full max-w-sm flex-col gap-6 border-l border-amber-800/30 pl-6">
          <li className="relative">
            <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-amber-700" />
            <p className="text-sm text-amber-700">創業</p>
            <p className="text-stone-700">地域に根差した鍵の専門店として開業（ダミー年）</p>
          </li>
          <li className="relative">
            <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-amber-700" />
            <p className="text-sm text-amber-700">現在</p>
            <p className="text-stone-700">
              15年以上の実績を積み重ね、変わらぬ技術で対応しています
            </p>
          </li>
        </ol>
      </section>

      <section className="flex flex-col gap-3 border-b border-amber-800/10 px-6 py-10">
        <h2 className="text-lg font-semibold text-stone-900">店舗情報</h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-stone-700">
          <dt className="text-stone-500">代表者</dt>
          <dd>{OWNER_NAME}</dd>
          <dt className="text-stone-500">電話番号</dt>
          <dd>{SHOP_PHONE}</dd>
          <dt className="text-stone-500">住所</dt>
          <dd>{SHOP_ADDRESS}</dd>
          <dt className="text-stone-500">営業時間</dt>
          <dd>9:00〜18:00（年中無休・ダミー）</dd>
          {QUALIFICATIONS && (
            <>
              <dt className="text-stone-500">資格</dt>
              <dd>{QUALIFICATIONS}</dd>
            </>
          )}
        </dl>
      </section>

      <ContactPreview theme="c" />

      <section className="flex flex-col items-center gap-2 bg-stone-800 px-6 py-10 text-center text-stone-50">
        <p className="font-medium">お急ぎの場合はお電話ください</p>
        <p className="text-lg font-semibold">{SHOP_PHONE}</p>
        <p className="text-sm text-amber-200/80">
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </section>
    </div>
  );
}
