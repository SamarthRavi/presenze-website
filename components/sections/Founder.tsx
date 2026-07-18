"use client";

import { Caveat } from "next/font/google";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const signature = Caveat({ subsets: ["latin"], weight: "600" });

export function Founder() {
  return (
    <section id="founder" className="section scroll-mt-24 relative overflow-hidden bg-slate-50 dark:bg-navy-800">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200/50 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm dark:border-primary-500/20 dark:bg-white/5">
              <span className="mono-tag">Built with Intent</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              A classroom problem, solved as{" "}
              <span className="gradient-text">campus infrastructure</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="glass-panel mx-auto mt-16 grid max-w-4xl gap-10 p-8 sm:p-10 md:grid-cols-[220px_1fr] md:gap-12">
            {/* Founder Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-primary-200/50 shadow-lg dark:border-primary-500/20 md:h-full md:w-full md:rounded-3xl"
            >
              <img 
                src="/founder/samarth-ravi.jpg" 
                alt="Samarth Ravi Y - Founder of Presenze"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Founder Info */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Samarth Ravi Y
              </h3>
              <p className="mono-tag mt-1 !text-primary-600 dark:!text-primary-400">
                Founder
              </p>

              <p className="mt-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                What started as a frustration with paper attendance in my own classes became Presenze. A mobile-first BLE solution that removes friction from the daily routine. I built this to prove that campus infrastructure can feel modern and effortless, not just digitized. Now, we're expanding beyond attendance to create tools that institutions actually want to use.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                <motion.a
                  href="https://github.com/SamarthRavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/10 dark:hover:text-primary-400"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/samarthravi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/10 dark:hover:text-primary-400"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://www.samarthravi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/10 dark:hover:text-primary-400"
                >
                  <Globe size={18} />
                </motion.a>
                <motion.a
                  href="mailto:samarthravi1225@gmail.com"
                  aria-label="Email"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/10 dark:hover:text-primary-400"
                >
                  <Mail size={18} />
                </motion.a>
              </div>

              {/* Signature */}
              <div className={`${signature.className} mt-8 text-3xl text-primary-600 dark:text-primary-400`}>
                Samarth
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quote */}
        <Reveal delay={0.24}>
          <div className="mx-auto mt-16 max-w-xl text-center">
            <div className="relative">
              <div className="absolute -left-4 -top-2 text-6xl font-serif text-primary-500/20 dark:text-primary-400/20">
                &ldquo;
              </div>
              <p className="relative text-balance font-display text-xl italic text-slate-700 dark:text-slate-300">
                Great software is not just faster.
                <br className="hidden sm:block" /> It makes the correct process feel natural.
              </p>
              <div className="absolute -bottom-6 -right-4 text-6xl font-serif text-primary-500/20 dark:text-primary-400/20">
                &rdquo;
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
