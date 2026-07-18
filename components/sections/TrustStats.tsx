import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { label: "mobile apps", value: 2, suffix: "" },
  { label: "Admin Portal modules", value: 12, suffix: "+" },
  { label: "median BLE verification", value: 2.8, suffix: "s", decimals: 1 },
  { label: "classroom hardware required", value: 0, suffix: "" },
];

export function TrustStats() {
  return (
    <section className="border-y border-deep-100 bg-white/40 py-16 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="container">
        <Reveal>
          <p className="mono-tag mb-10 text-center">
            mobile-first attendance · role-based dashboard · real-time ERP
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
