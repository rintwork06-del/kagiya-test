// 対応エリア（2026-11-09）。地域ごとの箱に、主な市を「など」付きで並べる。
// 中身は content.ts の AREA_REGIONS と SERVICE_AREA_NOTE。
// 除く市町村と、北毛に伺うかはオーナーに確認中。決まったら「群馬県全域（※〇〇市を除く）」の形にする（2026-11-08、兄）。

import { AREA_REGIONS } from "../../lib/content";
import { MapPinIcon } from "../Icons";
import SectionTitle from "./SectionTitle";

export default function Area() {
  return (
    <section id="area" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-16">
        <SectionTitle
          label="SERVICE AREA"
          title="群馬県の東毛・中毛・西毛に出張します"
          lead="伺えるかどうかは、お電話でその場でお答えします。"
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {AREA_REGIONS.map((r) => (
            <li key={r.name} className="flex flex-col border border-slate-300">
              <p className="t-body flex items-center gap-2 bg-navy px-4 py-2.5 font-bold text-white">
                <MapPinIcon className="h-5 w-5 text-brand-yellow" />
                {r.name}
              </p>
              <p className="t-body px-4 py-4 text-slate-800">{r.cities}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
