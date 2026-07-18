"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Bluetooth,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileSpreadsheet,
  Radio,
  UserCheck,
  Users,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Phone Frame Component
function PhoneFrame({
  title,
  role,
  children,
  delay = 0,
}: {
  title: string;
  role: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -12, 
        rotateY: -2,
        rotateX: 2,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="perspective-1200 mx-auto w-full max-w-[340px]"
    >
      <div className="group relative rounded-[3rem] border border-slate-300/80 bg-white/90 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:border-white/20 dark:bg-white/5 dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
        {/* Screen */}
        <div className="relative h-[620px] overflow-hidden rounded-[2.5rem] bg-navy-800">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-7 w-36 -translate-x-1/2 rounded-b-3xl bg-navy-900 shadow-lg" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid opacity-[0.07]" />

          {/* Content */}
          <div className="relative flex h-full flex-col px-6 pb-8 pt-12 text-white">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/brand/presenze-app-icon-dark.png"
                    alt="Presenze"
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mono-tag !text-slate-500 !tracking-wider">{role}</div>
                </div>
              </div>
              <span className="signal-dot scale-90" />
            </div>
            
            {/* Main content area */}
            {children}
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-[3rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

// Student App Mockup
function StudentAppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0 }}
      whileHover={{ 
        y: -12, 
        rotateY: -2,
        rotateX: 2,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="perspective-1200 mx-auto w-full max-w-[340px]"
    >
      <div className="group relative rounded-[3rem] border border-slate-300/80 bg-white/90 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:border-white/20 dark:bg-white/5 dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
        {/* Screen */}
        <div className="relative h-[660px] overflow-hidden rounded-[2.5rem] bg-black">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-8 w-40 -translate-x-1/2 rounded-b-3xl bg-black shadow-lg" />
          
          {/* Actual Screenshot */}
          <div className="relative h-full w-full flex items-center justify-center pt-6 pb-6">
            <div className="relative w-full h-full">
              <Image
                src="/screenshots/student-dashboard.jpg"
                alt="Presenze Student App Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-[3rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

// Dashboard App Mockup
function DashboardAppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      whileHover={{ 
        y: -12, 
        rotateY: -2,
        rotateX: 2,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="perspective-1200 mx-auto w-full max-w-[340px]"
    >
      <div className="group relative rounded-[3rem] border border-slate-300/80 bg-white/90 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:border-white/20 dark:bg-white/5 dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
        {/* Screen */}
        <div className="relative h-[660px] overflow-hidden rounded-[2.5rem] bg-black">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-8 w-40 -translate-x-1/2 rounded-b-3xl bg-black shadow-lg" />
          
          {/* Actual Screenshot */}
          <div className="relative h-full w-full flex items-center justify-center pt-6 pb-6">
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

        {/* Shine effect on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-[3rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

// Admin Portal Mockup (Desktop browser window)
function AdminPortalMockup() {
  return (
    <motion.a
      href="https://admin.presenze.website"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      whileHover={{ 
        y: -10,
        rotateX: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="perspective-1200 mx-auto w-full max-w-5xl block cursor-pointer"
    >
      <div className="group relative rounded-3xl border border-slate-300 bg-white/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] dark:border-white/20 dark:bg-white/5 dark:hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.7)]">
        {/* Browser chrome */}
        <div className="flex items-center justify-between rounded-t-2xl border-b border-slate-200 bg-slate-100/80 px-5 py-3 dark:border-white/10 dark:bg-navy-900/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
          </div>
          <div className="flex-1 mx-4">
            <div className="rounded-md bg-white/80 px-4 py-1.5 text-center text-xs text-slate-600 dark:bg-white/5 dark:text-slate-400 flex items-center justify-center gap-2">
              <span>admin.presenze.website</span>
              <svg className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* Portal content - Actual Screenshot */}
        <div className="overflow-hidden rounded-b-2xl bg-white dark:bg-navy-800">
          <div className="relative w-full flex items-center justify-center" style={{ height: '580px' }}>
            <div className="relative w-full h-full">
              <Image
                src="/screenshots/admin-dashboard.png"
                alt="Presenze Admin Portal Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        </div>
      </div>
    </motion.a>
  );
}

export function Screenshots() {
  return (
    <section id="screenshots" className="section scroll-mt-24 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              <span className="mono-tag">Product Showcase</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Three surfaces,{" "}
              <span className="gradient-text">one attendance record</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Students use Presenze, Faculty and HODs share Presenze Dashboard, and 
              administrators manage the institution from the web portal.
            </p>
          </Reveal>
        </div>

        {/* Mobile Apps */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-500/20 dark:text-primary-400">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                Mobile App 01
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Student App
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Mark attendance, review history, and follow timetable
              </p>
            </div>
            <StudentAppMockup />
          </div>

          <div>
            <div className="mb-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-700 dark:bg-secondary-500/20 dark:text-secondary-400">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
                Mobile App 02
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Faculty & HOD Dashboard
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                One Dashboard app with role-based controls
              </p>
            </div>
            <DashboardAppMockup />
          </div>
        </div>

        {/* Admin Portal */}
        <div className="mt-20 lg:mt-28">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/20 dark:text-accent-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Web Portal
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-white">
              Admin Portal
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Institution-wide management and analytics
            </p>
          </div>
          <AdminPortalMockup />
        </div>
      </div>
    </section>
  );
}
