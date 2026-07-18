import {
  Bot,
  CloudCog,
  Layers,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    label: "BLE accuracy",
    detail: "The live session is detected through nearby student scanners, not a shareable code.",
  },
  {
    icon: LockKeyhole,
    label: "Security",
    detail: "Session tokens, authenticated users, and role-scoped access protect the record.",
  },
  {
    icon: Bot,
    label: "Automation",
    detail: "A started session becomes a verified backend record without manual registers.",
  },
  {
    icon: Target,
    label: "Accountability",
    detail: "Faculty, HOD, and admin actions stay tied to the right identity and scope.",
  },
  {
    icon: LineChart,
    label: "Analytics",
    detail: "Trends are visible by student, class, subject, department, and timeframe.",
  },
  {
    icon: CloudCog,
    label: "Go + Supabase",
    detail: "A focused backend validates attendance and stores clean records for reporting.",
  },
  {
    icon: TrendingUp,
    label: "Scalability",
    detail: "The mobile-only BLE workflow can expand without installing classroom devices.",
  },
  {
    icon: Layers,
    label: "Campus ERP",
    detail: "Attendance sits beside timetables, departments, allocations, users, and imports.",
  },
];

export function WhyPresenze() {
  return (
    <section className="border-y border-deep-100 bg-deep-900 py-28 dark:border-white/10">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mono-tag !text-signal-400 mb-4">why presenze</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Built for the checks institutions actually care about
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.label} delay={(i % 4) * 0.06}>
              <div className="group h-full bg-deep-900 p-6 transition-colors hover:bg-white/[0.04]">
                <pillar.icon size={20} className="text-signal-400" />
                <div className="mt-4 font-display text-base font-semibold text-white">
                  {pillar.label}
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                  {pillar.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
