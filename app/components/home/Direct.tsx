// 当店について（2026-11-09）。FGロックサービス自身の話から入る：個人で営業していて、
// 電話を受けた本人が現地に伺い、作業まで行う（オーナーの「個人でやっているので電話に出られないことがある」から）。
// そのあとに、8月から使っている比較表（当店／一般的な例）を置く。中身は content.ts の COMPARISON_ROWS。
// 比較の項目を増やすのは、オーナーの回答（出張費・見積もりなど）が来てから。
// 2026-11-09、参考サイトと同じ言い回し・流れになっていたので書き直した。

import Image from "next/image";
import { COMPARISON_ROWS } from "../../lib/content";
import { PHOTOS } from "../../lib/photos";
import { SHOP_NAME, SHOP_PHONE } from "../../lib/shopInfo";
import { PhoneLink } from "../PhoneLink";
import { PhoneIcon, CheckIcon } from "../Icons";
import SectionTitle from "./SectionTitle";
import ImageNote from "./ImageNote";

export default function Direct() {
  return (
    <section id="direct" className="w-full bg-mist">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 py-16">
        <SectionTitle title="当店について" />

        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] w-full">
            <Image src={PHOTOS.phone} alt="電話を受ける鍵職人" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <ImageNote />
          </div>
          <div className="flex flex-col gap-4">
            <p className="t-heading font-bold text-navy">
              電話に出るのも伺うのも
              <br />
              同じ鍵職人です
            </p>
            <p className="t-body text-slate-700">
              {SHOP_NAME}は、群馬で個人で営業している鍵屋です。お電話を受けた本人が、そのまま現地に伺って作業します。
              お電話の時点で状況をくわしくうかがえるので、伺ってからの話の食い違いが起きにくくなります。
            </p>
            <p className="t-note text-slate-500">
              作業中などで電話に出られないときは、折り返しご連絡します。
            </p>
            <div className="flex flex-col items-start gap-1">
              <PhoneLink className="flex items-center gap-2 bg-brand-red px-6 py-3 font-bold text-white transition hover:brightness-110">
                <PhoneIcon className="h-6 w-6" />
                <span className="t-heading">{SHOP_PHONE}</span>
              </PhoneLink>
            </div>
          </div>
        </div>

        {/* 比較表（2026-08〜。他社の名前は出さず、一般的な例と比べる） */}
        <div className="flex flex-col gap-3">
          <p className="t-body text-center font-bold text-navy">ほかの業者との違い</p>
          <div className="w-full overflow-x-auto border border-slate-300 bg-white">
            <table className="t-body w-full min-w-[520px] border-collapse">
              <thead>
                <tr>
                  <th className="w-1/5 border-b border-slate-300 px-4 py-3 text-left font-bold text-slate-500">項目</th>
                  <th className="w-2/5 border-b border-navy bg-navy px-4 py-3 text-left font-bold text-white">{SHOP_NAME}</th>
                  <th className="w-2/5 border-b border-slate-300 px-4 py-3 text-left font-bold text-slate-500">一般的な例</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r) => (
                  <tr key={r.item} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-4 py-3 text-slate-600">{r.item}</td>
                    <td className="bg-navy/5 px-4 py-3 font-bold text-navy">
                      <span className="flex items-start gap-2">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                        {r.ours}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500">{r.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
