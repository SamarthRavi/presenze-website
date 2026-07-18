"use client";

import { motion } from "framer-motion";
import {
  Bluetooth,
  Database,
  Laptop,
  Radio,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Upload,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { scrollToSection } from "@/lib/navigation";

const steps = [
  {
    icon: Smartphone,
    title: "Faculty/HOD opens Presenze Dashboard",
    description: "Shared mobile app authenticates the user and loads role-appropriate screens. Session links to class, subject, timetable, and room automatically.",
  },
  {
    icon: Bluetooth,
    title: "Phone requests Bluetooth & becomes advertiser",
    description: "App requests the Bluetooth access needed to run the live BLE flow. Professor's phone then broadcasts a secure session signal nearby.",
  },
  {
    icon: Smartphone,
    title: "Students open Presenze app",
    description: "Students use the dedicated Presenze student app for attendance and tap Mark Attendance to start scanning only for the active, valid classroom session.",
  },
  {
    icon: Search,
    title: "Student phones scan for advertiser",
    description: "Scanner phones detect the Dashboard advertiser over Bluetooth Low Energy and identify the active session signal.",
  },
  {
    icon: ShieldCheck,
    title: "Attendance verified",
    description: "System validates session token, student identity, and BLE proximity to ensure authentic presence verification.",
  },
  {
    icon: Upload,
    title: "Uploaded to Go backend",
    description: "Verified events sent to backend for validation and persistence with complete audit trail.",
  },
  {
    icon: Database,
    title: "Stored in Supabase",
    description: "Clean records written to database with real-time Admin Portal sync for instant visibility.",
  },
  {
    icon: Laptop,
    title: "Live Admin Portal updates",
    description: "Records appear instantly in the web-based Admin Portal where administrators can view, manage, and analyze attendance data in real-time.",
  },
];

const flow = [
  { label: "Dashboard App", sub: "Faculty/HOD", icon: Smartphone, color: "primary" },
  { label: "BLE Advertiser", sub: "Professor phone", icon: Radio, color: "secondary" },
  { label: "Student App", sub: "Mark attendance", icon: Smartphone, color: "accent" },
  { label: "BLE Scanner", sub: "Student phone", icon: Search, color: "primary" },
  { label: "Verification", sub: "Token validation", icon: ShieldCheck, color: "secondary" },
  { label: "Go Backend", sub: "Processing", icon: Server, color: "accent" },
  { label: "Supabase", sub: "Records", icon: Database, color: "primary" },
  { label: "Admin Portal", sub: "Live view", icon: Laptop, color: "secondary" },
];

const colorMap = {
  primary: {
    icon: "text-primary-600 dark:text-primary-400",
    bg: "bg-primary-500/10 dark:bg-primary-500/20",
    border: "border-primary-500/30",
    glow: "shadow-[0_0_20px_rgba(30,94,255,0.3)]",
  },
  secondary: {
    icon: "text-secondary-600 dark:text-secondary-400",
    bg: "bg-secondary-500/10 dark:bg-secondary-500/20",
    border: "border-secondary-500/30",
    glow: "shadow-[0_0_20px_rgba(14,165,233,0.3)]",
  },
  accent: {
    icon: "text-accent-600 dark:text-accent-400",
    bg: "bg-accent-500/10 dark:bg-accent-500/20",
    border: "border-accent-500/30",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section scroll-mt-24 bg-white dark:bg-navy-700"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
              <span className="mono-tag">The Mobile BLE Sequence</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              A professor-led signal, student scanners,{" "}
              <span className="gradient-text">and instant ERP records</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Follow the complete journey from BLE broadcast to real-time Admin Portal visibility
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          {/* Flow Visualization - Sticky on desktop */}
          <Reveal>
            <div className="sticky top-24">
              <div className="flow-panel-bg overflow-hidden rounded-3xl border border-slate-200 p-6 shadow-xl dark:border-white/10 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="mono-tag !text-slate-500 dark:!text-slate-400">Live Attendance Path</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                      From BLE Signal to Admin Portal
                    </h3>
                  </div>
                  <span className="signal-dot" />
                </div>

                <div className="relative space-y-3">
                  {flow.map((node, i) => {
                    const colors = colorMap[node.color as keyof typeof colorMap];
                    
                    return (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="relative"
                      >
                        <div className={`relative flex items-center gap-4 rounded-2xl border bg-white/80 p-4 backdrop-blur-sm dark:bg-white/5 ${colors.border}`}>
                          {/* Connecting line to next node */}
                          {i < flow.length - 1 && (
                            <motion.div
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                              className={`absolute left-[34px] top-[68px] h-8 w-0.5 origin-top ${colors.bg}`}
                            />
                          )}

                          {/* Icon with pulse animation */}
                          <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.bg}`}>
                            <node.icon className={`h-6 w-6 ${colors.icon}`} />
                            
                            {/* Animated pulse ring */}
                            <motion.span
                              className={`absolute inset-0 rounded-xl border-2 ${colors.border}`}
                              animate={{ 
                                scale: [1, 1.8, 1.8], 
                                opacity: [0.6, 0, 0] 
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeOut",
                              }}
                            />
                          </div>

                          {/* Text content */}
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">
                              {node.label}
                            </div>
                            <div className="mono-tag !text-slate-500 dark:!text-slate-400 mt-0.5">
                              {node.sub}
                            </div>
                          </div>

                          {/* Step number badge */}
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200/80 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-white">
                            {i + 1}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom status indicator */}
                <div className="mt-6 flex items-center justify-between rounded-xl bg-white/60 px-4 py-3 border border-primary-200 backdrop-blur-sm dark:bg-accent-500/10 dark:border-accent-500/30">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse-slow dark:bg-accent-400" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Live Sync Active</span>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Real-time updates</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Step-by-step breakdown */}
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 6) * 0.05}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-card-hover dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-primary-500/30"
                >
                  {/* Step number badge */}
                  <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600 transition-colors group-hover:bg-primary-100 group-hover:text-primary-600 dark:bg-white/5 dark:text-slate-400 dark:group-hover:bg-primary-500/20 dark:group-hover:text-primary-400">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-primary-100 group-hover:text-primary-600 group-hover:scale-110 dark:bg-white/5 dark:text-slate-300 dark:group-hover:bg-primary-500/20 dark:group-hover:text-primary-400">
                    <step.icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>

                  {/* Connecting arrow for visual flow (every other row) */}
                  {i % 2 === 0 && i < steps.length - 1 && (
                    <div className="pointer-events-none absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-primary-300 to-transparent sm:block dark:from-primary-500/50" />
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom info card */}
        <Reveal delay={0.4}>
          <div className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-white/10 dark:from-white/[0.03] dark:to-white/[0.01] lg:mt-20 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  No Classroom Hardware Required
                </h3>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Unlike traditional systems that require fixed RFID readers or biometric devices in 
                  every classroom, Presenze uses the phones already in everyone&apos;s pockets. Faculty 
                  phones act as BLE advertisers, student phones scan, and the entire flow happens 
                  through mobile apps.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm dark:bg-white/5">
                    <ShieldCheck className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                    <span className="text-slate-700 dark:text-slate-300">Secure BLE validation</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm dark:bg-white/5">
                    <Upload className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-slate-700 dark:text-slate-300">Real-time sync</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm dark:bg-white/5">
                    <Database className="h-4 w-4 text-secondary-600 dark:text-secondary-400" />
                    <span className="text-slate-700 dark:text-slate-300">Supabase records</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => scrollToSection("screenshots")}
                  className="btn-primary btn-lg whitespace-nowrap"
                >
                  View App Screenshots
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
