// ご依頼の流れ（2026-11-09）。中身は content.ts の FLOW_STEPS。

import { FLOW_STEPS } from "../../lib/content";
import SectionTitle from "./SectionTitle";

export default function Flow() {
  return (
    <section id="flow" className="w-full bg-mist">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-16">
        <SectionTitle label="HOW TO ORDER" title="ご依頼の流れ" lead="お電話一本から、すべての段取りをご案内します。" />
        <ol className="grid gap-4 sm:grid-cols-4">
          {FLOW_STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col border border-slate-300 bg-white">
              <span className="t-body w-fit bg-brand-red px-3 py-1 font-bold text-white">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5 p-4">
                <p className="t-body font-bold text-navy">{step.title}</p>
                <p className="t-note text-slate-600">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
