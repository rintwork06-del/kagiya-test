// メイン（ページを開いて最初に見える所。2026-11-09）。
// 職人の写真を全面に敷き、左側に文字を載せる。写真の左側には白を重ねて、文字が読めるようにしている。
//
// 載せるのは、兄の言う「お客さんがまず知りたい2つ」＝ 来てくれる地域 と いくらか（2026-11-08）。
// 金額は料金表（content.ts）の「鍵開け（普通の鍵）」の行から取る。仮の金額（りんの判断で出す）。
// 2026-11-09、参考サイトに似すぎていた所（丸い写真のアイコン、黄色い枠の電話の帯）を外した。

import Image from "next/image";
import { SERVICE_CATEGORIES, SERVICE_AREA_NOTE } from "../../lib/content";
import { PHOTOS } from "../../lib/photos";
import { SHOP_PHONE } from "../../lib/shopInfo";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon, MapPinIcon } from "../Icons";

const UNLOCK_PRICE = SERVICE_CATEGORIES[0].items[0].price;

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={PHOTOS.hero}
        alt="鍵を手にした鍵職人"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 md:via-white/80 md:to-transparent" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-5 px-5 pt-10 pb-10 md:pt-14 md:pb-14">
        <p className="t-body font-bold text-brand-red">群馬県の家と車の鍵のトラブルに</p>
        <h1 className="t-display font-bold text-navy">
          鍵のトラブル、
          <br />
          <span className="text-brand-red">作業の前に</span>
          <br className="sm:hidden" />
          金額をお伝えします
        </h1>

        {/* 来てくれる地域 と いくらか */}
        <div className="flex max-w-xl flex-col border border-slate-300 bg-white/95">
          <p className="flex items-start gap-2.5 border-b border-slate-200 px-4 py-3">
            <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-navy" />
            <span className="t-body">
              <span className="font-bold text-navy">対応エリア：</span>
              <span className="font-bold underline decoration-brand-red decoration-2 underline-offset-4">
                群馬県 {SERVICE_AREA_NOTE}
              </span>
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
            <p className="t-body">
              <span className="font-bold text-navy">鍵開け </span>
              <span className="t-heading font-bold text-brand-red">{UNLOCK_PRICE}</span>
              <span className="t-note block text-slate-500">
                税込の目安です。作業の前に必ず総額をお伝えします
              </span>
            </p>
            <a
              href="#price"
              className="t-note border border-navy px-3 py-2 font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              料金の詳細はこちら ↓
            </a>
          </div>
        </div>

        <p className="t-body max-w-xl font-bold text-slate-700">
          創業8年・経験15年以上。お電話を受けた本人が伺います。
        </p>

        {/* 電話とお問い合わせ（お問い合わせは、ページ下のフォームへ移動する） */}
        <div className="flex flex-wrap items-center gap-3">
          <PhoneLink className="flex items-center gap-2 bg-brand-red px-5 py-3 font-bold text-white transition hover:brightness-110">
            <PhoneIcon className="h-6 w-6" />
            <span className="t-heading">{SHOP_PHONE}</span>
          </PhoneLink>
          <a
            href="#contact"
            className="t-body border-2 border-navy bg-white px-5 py-3 font-bold text-navy transition hover:bg-navy hover:text-white"
          >
            お問い合わせ ↓
          </a>
        </div>
        <p className="t-note text-slate-600">営業時間 7:00〜22:00（不定休）</p>
      </div>
    </section>
  );
}
