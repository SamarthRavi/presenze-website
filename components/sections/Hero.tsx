"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bluetooth,
  CheckCircle2,
  Database,
  Play,
  Radio,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SignalRings } from "@/components/ui/SignalRings";
import { scrollToSection } from "@/lib/navigation";

const detectedStudents = [
  ["Aarav Mehta", "verified"],
  ["Sara Iyer", "verified"],
  ["Devika Rao", "verified"],
  ["Kabir Shah", "syncing"],
];

const syncSteps = [
  { icon: Server, label: "Go API" },
  { icon: Database, label: "Supabase" },
  { icon: CheckCircle2, label: "Admin Portal" },
];

// Floating shape component
function FloatingShape({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-40, 40], [4, -4]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-40, 40], [-4, 4]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 80 - 40);
    my.set(((e.clientY - rect.top) / rect.height) * 80 - 40);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50 pb-16 pt-24 dark:bg-navy-700 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36 xl:pb-32 xl:pt-48"
    >
      {/* Premium gradient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-mesh opacity-20 dark:opacity-30" />
        
        {/* Animated glow orbs */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary-500/20 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-accent-500/20 blur-3xl"
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent)] dark:opacity-30" />
        
        {/* Top border gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        
        {/* Floating shapes */}
        <FloatingShape
          delay={0}
          className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-primary-400/10 to-secondary-400/10 blur-2xl"
        />
        <FloatingShape
          delay={2}
          className="absolute right-[15%] top-[60%] h-40 w-40 rounded-full bg-gradient-to-br from-accent-400/10 to-primary-400/10 blur-2xl"
        />
        <FloatingShape
          delay={4}
          className="absolute left-[20%] bottom-[10%] h-36 w-36 rounded-full bg-gradient-to-br from-secondary-400/10 to-accent-400/10 blur-2xl"
        />
      </div>

      <div className="container relative">
        <div className="mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left column - Content */}
          <div className="relative z-10">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary-200/50 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm dark:border-primary-500/20 dark:bg-white/5">
                <span className="signal-dot" />
                <span className="mono-tag">Mobile BLE · Go Backend · Supabase</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Attendance verified by{" "}
                <span className="gradient-text">phones already in the room</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg lg:mt-6 xl:text-xl">
                Faculty and HODs start sessions in Presenze Dashboard. Their phone becomes the 
                secure BLE advertiser, student phones scan when marking attendance, and every 
                verified record appears in the Admin Portal in real time.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3 lg:gap-4">
                <button
                  onClick={() => scrollToSection('download')}
                  className="btn-primary group px-6 py-3 text-sm lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 xl:text-base"
                >
                  Explore Apps
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 xl:h-[18px] xl:w-[18px]" />
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="btn-secondary group px-6 py-3 text-sm lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 xl:text-base"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-white dark:bg-primary-500 xl:h-8 xl:w-8">
                    <Play size={12} fill="currentColor" className="xl:h-[14px] xl:w-[14px]" />
                  </span>
                  See How It Works
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-6 dark:border-white/10 sm:grid-cols-4 sm:gap-6 lg:mt-14 lg:pt-7 xl:mt-16 xl:gap-8 xl:pt-8">
                {[
                  { value: "0", label: "Classroom Hardware" },
                  { value: "2", label: "Mobile Apps" },
                  { value: "<3s", label: "BLE Verification" },
                  { value: "1", label: "Admin Portal" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl xl:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mono-tag mt-1.5 xl:mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column - Interactive Device Frame */}
          <div className="relative -mx-4 sm:mx-0">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                mx.set(0);
                my.set(0);
              }}
              className="perspective-1200 relative mx-auto h-[420px] w-full max-w-[480px] sm:h-[500px] lg:h-[520px] xl:h-[600px]"
            >
              {/* BLE Signal Rings */}
              <SignalRings
                size={500}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
              />

              {/* Main Device Frame */}
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative z-10 mx-auto h-[400px] w-[200px] rounded-[2.5rem] border border-slate-300/60 bg-white/80 p-2 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-white/5 dark:shadow-black/50 sm:h-[460px] sm:w-[230px] lg:h-[480px] lg:w-[240px] xl:h-[540px] xl:w-[270px]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-black">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-3xl bg-black sm:h-6 sm:w-28 xl:h-7 xl:w-32" />
                  
                  {/* Actual Screenshot */}
                  <div className="relative h-full w-full flex items-center justify-center pt-3 pb-3 sm:pt-4 sm:pb-4 xl:pt-5 xl:pb-5">
                    <div className="relative w-full h-full">
                      <Image
                        src="/screenshots/faculty-dashboard.jpeg"
                        alt="Presenze Faculty/HOD Dashboard App"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards - positioned outside phone frame */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-panel absolute -left-8 top-20 z-30 hidden w-56 p-4 lg:block xl:-left-16"
                style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone size={18} className="text-primary-500" />
                  <span className="mono-tag">Student App</span>
                </div>
                <div className="mt-3 rounded-xl bg-navy-800 p-3 text-white shadow-lg">
                  <div className="text-sm font-semibold">Mark Attendance</div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <span className="signal-dot scale-75" />
                    Scanning for session
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="glass-panel absolute -right-8 top-36 z-30 hidden w-60 p-4 lg:block xl:-right-16"
                style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={18} className="text-accent-500" />
                  <span className="mono-tag">Verified</span>
                </div>
                <div className="mt-2 text-sm font-medium leading-relaxed text-slate-900 dark:text-white">
                  Session token matched · Device in BLE range
                </div>
              </motion.div>

              {/* Sync Pipeline - Desktop only */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="glass-panel absolute bottom-4 left-1/2 z-30 hidden w-[min(100%,500px)] -translate-x-1/2 p-3 sm:block sm:p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="mono-tag">Real-Time Sync</span>
                  <Sparkles size={14} className="text-primary-500" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {syncSteps.map((step, i) => (
                    <div
                      key={step.label}
                      className="relative rounded-xl border border-slate-200 bg-white/90 p-3 dark:border-white/10 dark:bg-white/5"
                    >
                      {i > 0 && (
                        <div className="absolute -left-3 top-1/2 h-px w-3 bg-primary-500/40" />
                      )}
                      <step.icon size={18} className="text-primary-600 dark:text-primary-400" />
                      <div className="mt-2 text-xs font-semibold text-slate-900 dark:text-white">
                        {step.label}
                      </div>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-primary-500"
                          initial={{ width: "30%" }}
                          animate={{ width: ["30%", "100%", "30%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Status Badge */}
              <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 sm:hidden">
                <div className="glass-panel flex items-center gap-2 rounded-full px-4 py-2">
                  <Sparkles size={12} className="text-primary-500" />
                  <span className="text-xs font-medium text-slate-900 dark:text-white">Real-Time Sync Active</span>
                  <div className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-accent-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
