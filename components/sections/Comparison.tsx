import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const rows = [
  {
    label: "Classroom setup",
    old: "Registers, codes, cards, or dedicated readers",
    presenze: "Mobile-only BLE session from the professor's phone",
  },
  {
    label: "Student action",
    old: "Wait for roll call or scan a shared code",
    presenze: "Open Presenze and tap Mark Attendance",
  },
  {
    label: "Faculty effort",
    old: "Manual count, manual entry, late reconciliation",
    presenze: "Start one session in Presenze Dashboard",
  },
  {
    label: "Records",
    old: "Spreadsheets and delayed uploads",
    presenze: "Go backend writes verified records to Supabase",
  },
  {
    label: "Visibility",
    old: "Reports arrive after follow-up work",
    presenze: "Admin Portal updates while the session is live",
  },
  {
    label: "Product surface",
    old: "Separate apps for every staff role",
    presenze: "Two mobile apps plus one web Admin Portal",
  },
];

export function Comparison() {
  return (
    <section className="bg-white/40 py-28 dark:bg-white/[0.02]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mono-tag mb-4">the difference</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-deep-900 dark:text-white sm:text-5xl">
              What changes when attendance becomes a verified data flow
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-deep-100 dark:border-white/10">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-deep-900 text-white">
              <div className="px-5 py-4 text-sm text-slate-400">&nbsp;</div>
              <div className="px-5 py-4 text-sm font-medium text-slate-300">
                Traditional
              </div>
              <div className="flex items-center gap-2 bg-signal-500/10 px-5 py-4 text-sm font-medium text-signal-400">
                Presenze
              </div>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.1fr_1fr_1fr] ${
                  i % 2 === 0
                    ? "bg-white/60 dark:bg-white/[0.02]"
                    : "bg-white/30 dark:bg-white/[0.04]"
                }`}
              >
                <div className="px-5 py-4 text-sm font-medium text-deep-900 dark:text-white">
                  {row.label}
                </div>
                <div className="flex items-start gap-2 px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                  <X size={15} className="mt-0.5 shrink-0 text-slate-400" />
                  {row.old}
                </div>
                <div className="flex items-start gap-2 bg-signal-500/[0.04] px-5 py-4 text-sm text-deep-900 dark:text-white">
                  <Check size={15} className="mt-0.5 shrink-0 text-signal-500" />
                  {row.presenze}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
