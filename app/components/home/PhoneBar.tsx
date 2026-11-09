// 画面の一番下にいつも出ている電話のバー（2026-09-04、クライアントが評価した形。文言は変えない）。
// 2026-11-09、色を新しい作りに合わせた（紺地に赤いボタン）。

import { SHOP_PHONE } from "../../lib/shopInfo";
import { CALLBACK_NOTE } from "../../lib/content";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon } from "../Icons";

export default function PhoneBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/20 bg-navy">
      <PhoneLink className="mx-auto flex w-full max-w-5xl items-center justify-center gap-3 px-5 py-3 text-white">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-red">
          <PhoneIcon className="h-5 w-5" />
        </span>
        <span className="flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-3">
          <span className="t-note text-white/75">鍵のトラブルはお電話で（7:00〜22:00）</span>
          <span className="t-heading font-bold tracking-wide">{SHOP_PHONE}</span>
          <span className="t-note text-white/75">{CALLBACK_NOTE}</span>
        </span>
      </PhoneLink>
    </div>
  );
}
