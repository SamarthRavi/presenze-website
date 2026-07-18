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
      className="relative overflow-hidden bg-white pb-24 pt-32 dark:bg-navy-700 sm:pt-40 lg:pb-32 lg:pt-48"
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
        <div className="mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Content */}
          <div className="relative z-10">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary-200/50 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm dark:border-primary-500/20 dark:bg-white/5">
                <span className="signal-dot" />
                <span className="mono-tag">Mobile BLE · Go Backend · Supabase</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
                Attendance verified by{" "}
                <span className="gradient-text">phones already in the room</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                Faculty and HODs start sessions in Presenze Dashboard. Their phone becomes the 
                secure BLE advertiser, student phones scan when marking attendance, and every 
                verified record appears in the Admin Portal in real time.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('download')}
                  className="btn-primary btn-lg group"
                >
                  Explore Apps
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="btn-secondary btn-lg group"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white dark:bg-primary-500">
                    <Play size={14} fill="currentColor" />
                  </span>
                  See How It Works
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 dark:border-white/10 sm:grid-cols-4 sm:gap-6">
                {[
                  { value: "0", label: "Classroom Hardware" },
                  { value: "2", label: "Mobile Apps" },
                  { value: "<3s", label: "BLE Verification" },
                  { value: "1", label: "Admin Portal" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mono-tag mt-2">{stat.label}</div>
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
              className="perspective-1200 relative mx-auto h-[500px] w-full max-w-[540px] sm:h-[600px]"
            >
              {/* BLE Signal Rings */}
              <SignalRings
                size={500}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
              />

              {/* Main Device Frame */}
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative z-10 mx-auto h-[480px] w-[240px] rounded-[2.8rem] border border-slate-300/60 bg-white/80 p-2.5 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-white/5 dark:shadow-black/50 sm:h-[540px] sm:w-[270px]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-navy-800">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-3xl bg-navy-900 sm:h-7 sm:w-32" />
                  
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-grid opacity-10" />

                  {/* Device Content */}
                  <div className="relative flex h-full flex-col px-4 pb-6 pt-10 text-white sm:px-5 sm:pb-6 sm:pt-11">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/brand/presenze-app-icon-dark.png"
                          alt="Presenze"
                          width={28}
                          height={28}
                          className="rounded-lg shadow-lg sm:h-8 sm:w-8"
                        />
                        <div>
                          <div className="text-xs font-semibold sm:text-sm">Presenze Dashboard</div>
                          <div className="mono-tag !text-[10px] !text-slate-500 sm:!text-xs">Faculty Role</div>
                        </div>
                      </div>
                      <span className="signal-dot scale-75 sm:scale-100" />
                    </div>

                    {/* Active Session Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:mt-8 sm:rounded-2xl sm:p-4"
                    >
                      <div className="mono-tag !text-[10px] !text-slate-400 sm:!text-xs">Live Session</div>
                      <div className="mt-1.5 font-display text-base font-semibold sm:mt-2 sm:text-xl">
                        Operating Systems
                      </div>
                      <div className="mt-0.5 text-xs text-slate-400 sm:mt-1 sm:text-sm">
                        Room 4B · B.Tech CSE · 09:00 AM
                      </div>
                      <div className="mt-3 flex items-center justify-between rounded-lg bg-primary-500 px-3 py-2.5 text-white shadow-button-primary sm:mt-4 sm:rounded-xl sm:px-4 sm:py-3">
                        <span className="text-xs font-semibold sm:text-sm">Session Active</span>
                        <Radio size={14} className="animate-pulse-slow sm:h-4 sm:w-4" />
                      </div>
                    </motion.div>

                    {/* Status Grid */}
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
                      {[
                        { icon: Bluetooth, label: "BLE Status", value: "Broadcasting" },
                        { icon: Radio, label: "Phone Role", value: "Advertiser" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="rounded-lg border border-white/10 bg-white/5 p-2.5 sm:rounded-xl sm:p-3"
                        >
                          <item.icon size={14} className="text-accent-400 sm:h-4 sm:w-4" />
                          <div className="mono-tag !text-[10px] !text-slate-500 mt-1.5 sm:!text-xs sm:mt-2">{item.label}</div>
                          <div className="mt-0.5 text-[10px] font-semibold sm:mt-1 sm:text-xs">{item.value}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Detected Students List */}
                    <div className="mt-3 flex-1 space-y-1.5 overflow-hidden sm:mt-4 sm:space-y-2">
                      {detectedStudents.map(([name, status], i) => (
                        <motion.div
                          key={name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + i * 0.15 }}
                          className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-2 sm:rounded-xl sm:px-3 sm:py-3"
                        >
                          <div>
                            <div className="text-xs font-medium sm:text-sm">{name}</div>
                            <div className="mono-tag !text-[10px] !text-slate-500 sm:!text-xs">Student Scanner</div>
                          </div>
                          <span
                            className={`text-[10px] font-medium sm:text-xs ${
                              status === "verified"
                                ? "text-accent-400"
                                : "text-slate-400"
                            }`}
                          >
                            {status}
                          </span>
                        </motion.div>
                      ))}
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
