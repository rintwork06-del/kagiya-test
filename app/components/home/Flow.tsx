// ご依頼の流れ（2026-11-09）。中身は content.ts の FLOW_STEPS。

import { FLOW_STEPS } from "../../lib/content";
import SectionTitle from "./SectionTitle";

export default function Flow() {
  return (
    <section id="flow" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-16">
        <SectionTitle title="ご依頼の流れ" lead="ご相談から作業、お支払いまでの流れです。" />
        <ol className="grid gap-4 sm:grid-cols-4">
          {FLOW_STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-3 border-t-4 border-navy bg-mist p-4 sm:flex-col">
              <span className="t-heading font-bold text-brand-red">{i + 1}</span>
              <div className="flex flex-col gap-1.5">
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
