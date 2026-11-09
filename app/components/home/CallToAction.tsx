// 最後の電話の大きな帯（2026-11-09）。写真に紺を重ね、その上に電話のボタン。

import Image from "next/image";
import { PHOTOS } from "../../lib/photos";
import { SHOP_PHONE } from "../../lib/shopInfo";
import { CALLBACK_NOTE } from "../../lib/content";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon } from "../Icons";

export default function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden border-b-4 border-brand-yellow">
      <Image src={PHOTOS.contact} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-5 py-16 text-center">
        <p className="t-note bg-brand-red px-3 py-0.5 font-bold text-white">CONTACT</p>
        <p className="t-display font-bold text-white">
          群馬の鍵のこと、
          <br />
          まずは<span className="text-brand-yellow">お電話</span>ください。
        </p>
        <p className="t-body text-white/85">
          状況をうかがって、対応できるかどうかや金額をご案内します。
        </p>
        <PhoneLink className="flex flex-col items-center border-4 border-brand-yellow bg-brand-red px-8 py-4 font-bold text-white transition hover:brightness-110">
          <span className="t-note tracking-widest">TEL</span>
          <span className="t-heading flex items-center gap-2 sm:t-display">
            <PhoneIcon className="h-7 w-7" />
            {SHOP_PHONE}
          </span>
        </PhoneLink>
        <p className="t-note text-white/80">
          営業時間 7:00〜22:00（不定休）／ {CALLBACK_NOTE}
          <br />
          お電話の際は「ホームページを見た」とお伝えください。
        </p>
      </div>
    </section>
  );
}
