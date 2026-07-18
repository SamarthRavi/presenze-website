import { Reveal } from "@/components/ui/Reveal";
import type { TimelineItem } from "@/types";

const items: TimelineItem[] = [
  {
    year: "1990s",
    title: "Paper registers",
    description: "A roll call read aloud, marked by hand, and tallied at term end.",
  },
  {
    year: "2000s",
    title: "RFID cards",
    description: "A tap at the door, faster than paper but dependent on physical cards.",
  },
  {
    year: "2010s",
    title: "QR codes",
    description: "A visible code per class, quick to deploy but easy to share.",
  },
  {
    year: "Now",
    title: "Presenze BLE flow",
    description:
      "A Dashboard phone advertises the session, student phones scan, and records sync instantly.",
    active: true,
  },
];

export function Timeline() {
  return (
    <section className="bg-mist py-28 dark:bg-ink">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mono-tag mb-4">how we got here</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-deep-900 dark:text-white sm:text-5xl">
              Four eras of making attendance less fragile
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-deep-100 dark:bg-white/10 md:left-0 md:top-4 md:h-px md:w-full" />
          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {items.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className="relative pl-10 md:pl-0 md:pt-10">
                  <div
                    className={`absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2 md:top-0 ${
                      item.active
                        ? "bg-signal-500 shadow-glow"
                        : "bg-deep-300 dark:bg-slate-600"
                    }`}
                  />
                  <div className="mono-tag mb-2">{item.year}</div>
                  <h3
                    className={`font-display text-lg font-semibold ${
                      item.active
                        ? "text-signal-600 dark:text-signal-400"
                        : "text-deep-900 dark:text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
