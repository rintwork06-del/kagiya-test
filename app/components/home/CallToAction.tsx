// 最後の電話の帯（2026-11-09）。写真に紺を重ね、その上に電話のボタン。

import Image from "next/image";
import { PHOTOS } from "../../lib/photos";
import { SHOP_NAME, SHOP_PHONE } from "../../lib/shopInfo";
import { CALLBACK_NOTE } from "../../lib/content";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon } from "../Icons";

export default function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image src={PHOTOS.contact} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy/90" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-5 py-16 text-center">
        <p className="t-heading font-bold text-white">
          家や車の鍵で困ったら、
          <br />
          {SHOP_NAME}にご相談ください
        </p>
        <p className="t-body text-white/85">対応できるかどうかと、作業の前の金額を、お電話でお伝えします。</p>
        <PhoneLink className="flex items-center gap-2 bg-brand-red px-8 py-4 font-bold text-white transition hover:brightness-110">
          <PhoneIcon className="h-7 w-7" />
          <span className="t-heading">{SHOP_PHONE}</span>
        </PhoneLink>
        <p className="t-note text-white/80">
          営業時間 7:00〜22:00（不定休）。{CALLBACK_NOTE}
          <br />
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </div>
    </section>
  );
}
