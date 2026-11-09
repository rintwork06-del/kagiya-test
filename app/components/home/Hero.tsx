// メイン（ページを開いて最初に見える所。2026-11-09）。
// 参考サイトにならい、職人の写真を全面に敷き、左側に文字を載せる。
// 写真の左側には白を重ねて、どんな写真でも文字が読めるようにしている。
//
// 載せるのは、兄の言う「お客さんがまず知りたい2つ」＝ 来てくれる地域 と いくらか（2026-11-08）。
// 金額は料金表（content.ts）の「鍵開け（普通の鍵）」の行から取る。仮の金額（りんの判断で出す）。

import Image from "next/image";
import { SERVICE_CATEGORIES, AUCTION_SERVICE, SERVICE_AREA_NOTE } from "../../lib/content";
import { PHOTOS } from "../../lib/photos";
import { SHOP_PHONE } from "../../lib/shopInfo";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon, MapPinIcon } from "../Icons";

const UNLOCK_PRICE = SERVICE_CATEGORIES[0].items[0].price;

// 丸い写真のアイコン（押すと対応サービスへ）
const SHORTCUTS = [
  { label: "家の鍵", photo: PHOTOS.house },
  { label: "車の鍵", photo: PHOTOS.car },
  { label: "金庫", photo: PHOTOS.safe },
  { label: AUCTION_SERVICE.title, photo: PHOTOS.auction },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={PHOTOS.hero}
        alt="鍵の作業をする職人"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 md:via-white/80 md:to-transparent" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-5 px-5 pt-10 pb-8 md:pt-14">
        <p className="t-note w-fit bg-brand-red px-3 py-1 font-bold text-white">
          群馬で家と車の鍵のトラブルなら
        </p>
        <h1 className="t-display font-bold text-navy">
          鍵のトラブル、
          <br />
          <span className="text-brand-red">作業の前に</span>
          <br className="sm:hidden" />
          金額をお伝えします
        </h1>

        {/* 来てくれる地域 と いくらか */}
        <div className="flex max-w-xl flex-col border-l-4 border-brand-red bg-white/95 shadow-sm">
          <p className="flex items-start gap-2.5 border-b border-slate-200 px-4 py-3">
            <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
            <span className="t-body">
              <span className="font-bold text-navy">対応エリア：</span>
              <span className="bg-brand-yellow/60 px-1 font-bold">群馬県 {SERVICE_AREA_NOTE}</span>
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
          創業8年・経験15年以上。お電話には、作業をする本人が出ます。
        </p>

        <ul className="flex flex-wrap gap-4">
          {SHORTCUTS.map((s) => (
            <li key={s.label}>
              <a href="#service" className="group flex flex-col items-center gap-1.5">
                <span className="relative block h-16 w-16 overflow-hidden rounded-full border-4 border-brand-red bg-white sm:h-20 sm:w-20">
                  <Image src={s.photo} alt="" fill sizes="80px" className="object-cover transition group-hover:scale-105" />
                </span>
                <span className="t-note border border-brand-red bg-white px-2 font-bold text-brand-red">
                  {s.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* 電話の帯 */}
        <div className="mt-2 flex flex-col items-center gap-3 border-2 border-brand-yellow bg-navy px-5 py-4 sm:flex-row sm:justify-center sm:gap-6">
          <p className="t-note text-center font-bold text-brand-yellow">
            ＼ 押すとすぐにお電話できます ／
            <span className="block font-normal text-white/80">営業時間 7:00〜22:00（不定休）</span>
          </p>
          <PhoneLink className="flex items-center gap-2 bg-white px-5 py-2 font-bold text-brand-red transition hover:bg-cream">
            <PhoneIcon className="h-6 w-6" />
            <span className="t-heading">{SHOP_PHONE}</span>
          </PhoneLink>
          {/* 押すとページ下のお問い合わせフォームへ移動する（11/9、りん：元のサイトにあったボタンを戻す） */}
          <a
            href="#contact"
            className="t-body border-2 border-white px-5 py-2 font-bold text-white transition hover:bg-white hover:text-navy"
          >
            お問い合わせ ↓
          </a>
        </div>
      </div>
    </section>
  );
}
