"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  Building2,
  CalendarClock,
  History,
  Monitor,
  ShieldCheck,
  Smartphone,
  User,
  UserCheck,
  Users,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const apps = [
  {
    title: "Presenze",
    subtitle: "Student App",
    description:
      "Students mark attendance, review history, follow timetables, and stay connected with their academic schedule.",
    image: "/brand/presenze-app-icon-light.png",
    darkImage: "/brand/presenze-app-icon-dark.png",
    color: "primary",
    features: [
      { icon: UserCheck, label: "Mark Attendance" },
      { icon: History, label: "Attendance History" },
      { icon: CalendarClock, label: "Timetable" },
      { icon: Bell, label: "Notifications" },
      { icon: User, label: "Profile" },
    ],
    status: "Coming Soon",
    cta: null,
  },
  {
    title: "Presenze Dashboard",
    subtitle: "Faculty & HOD App",
    description:
      "One shared mobile app with role-based authentication for session control, live monitoring, and academic visibility.",
    image: "/brand/presenze-app-icon-light.png",
    darkImage: "/brand/presenze-app-icon-dark.png",
    color: "secondary",
    features: [
      { icon: ShieldCheck, label: "Role-Based Auth" },
      { icon: Smartphone, label: "Start Session" },
      { icon: Monitor, label: "Live Class View" },
      { icon: Users, label: "Faculty/HOD Tools" },
      { icon: Building2, label: "Department Access" },
    ],
    status: "Coming Soon",
    cta: null,
  },
  {
    title: "Admin Portal",
    subtitle: "Web ERP Platform",
    description:
      "Institution control layer for academic structure, student records, faculty management, reports, analytics, and bulk imports.",
    image: "/brand/presenze-logo-mark-light.png",
    darkImage: "/brand/presenze-logo-mark-dark.png",
    color: "accent",
    features: [
      { icon: Users, label: "Students & Faculty" },
      { icon: Building2, label: "Departments" },
      { icon: CalendarClock, label: "Timetables" },
      { icon: Monitor, label: "Reports & Analytics" },
      { icon: ArrowUpRight, label: "Excel Import" },
    ],
    status: "Live Now",
    cta: {
      label: "Open Admin Portal",
      href: "https://admin.presenze.website",
    },
  },
];

const colorMap = {
  primary: {
    badge: "bg-primary-100 text-primary-700 border-primary-200 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500/30",
    icon: "text-primary-600 dark:text-primary-400",
    glow: "group-hover:shadow-[0_0_40px_rgba(30,94,255,0.15)]",
  },
  secondary: {
    badge: "bg-secondary-100 text-secondary-700 border-secondary-200 dark:bg-secondary-500/20 dark:text-secondary-400 dark:border-secondary-500/30",
    icon: "text-secondary-600 dark:text-secondary-400",
    glow: "group-hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]",
  },
  accent: {
    badge: "bg-accent-100 text-accent-700 border-accent-200 dark:bg-accent-500/20 dark:text-accent-400 dark:border-accent-500/30",
    icon: "text-accent-600 dark:text-accent-400",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
  },
};

export function DownloadSection() {
  return (
    <section
      id="download"
      className="section scroll-mt-24 relative overflow-hidden bg-white dark:bg-navy-700"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] dark:opacity-20" />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary-500/10 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-3xl"
        />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
              <Sparkles size={14} className="text-primary-500" />
              <span className="mono-tag">Apps & Portal</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Two Mobile Apps,{" "}
              <span className="gradient-text">One Admin Portal</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:mt-6 xl:text-lg">
              Presenze keeps daily attendance mobile while the web portal manages 
              institutional structure, records, and analytics.
            </p>
          </Reveal>
        </div>

        {/* Apps Grid */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 xl:mt-20 xl:gap-8">
          {apps.map((app, index) => {
            const colors = colorMap[app.color as keyof typeof colorMap];
            
            return (
              <Reveal key={app.title} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className={`group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-500 dark:border-white/10 dark:bg-white/[0.03] lg:rounded-3xl lg:p-7 xl:p-8 ${colors.glow}`}
                >
                  {/* Top gradient line */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${colors.icon}`} />

                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 dark:ring-white/10 lg:h-18 lg:w-18 xl:h-20 xl:w-20">
                      <Image
                        src={app.image}
                        alt={app.title}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 dark:hidden"
                      />
                      <Image
                        src={app.darkImage}
                        alt={app.title}
                        width={80}
                        height={80}
                        className="hidden h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 dark:block"
                      />
                    </div>
                    <div className={`rounded-full border px-2.5 py-1 text-xs font-semibold lg:px-3 lg:py-1.5 ${colors.badge}`}>
                      {app.subtitle}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-white lg:mt-6 xl:text-2xl">
                    {app.title}
                  </h3>
                  
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 lg:mt-3 lg:text-[15px]">
                    {app.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-5 space-y-2 lg:mt-6 lg:space-y-2.5">
                    {app.features.map((feature, i) => (
                      <motion.div
                        key={feature.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-3 rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 lg:px-4 lg:py-3"
                      >
                        <feature.icon className={`h-4 w-4 shrink-0 ${colors.icon}`} />
                        {feature.label}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA or Status */}
                  <div className="mt-6 lg:mt-8">
                    {app.cta ? (
                      <a
                        href={app.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center px-5 py-2.5 text-sm lg:px-6 lg:py-3"
                      >
                        {app.cta.label}
                        <ArrowUpRight size={14} className="lg:h-4 lg:w-4" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 lg:py-3">
                        <div className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-slate-400 dark:bg-slate-500" />
                        {app.status}
                      </div>
                    )}
                  </div>

                  {/* Background glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
                    <div className={`h-full w-full rounded-full ${app.color === 'primary' ? 'bg-primary-500/20' : app.color === 'secondary' ? 'bg-secondary-500/20' : 'bg-accent-500/20'}`} />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom info card */}
        <Reveal delay={0.4}>
          <div className="mt-12 rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 text-center shadow-sm dark:border-primary-500/20 dark:from-primary-500/10 dark:to-transparent lg:mt-16 lg:rounded-3xl lg:p-8 xl:mt-20 xl:p-10">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white px-3.5 py-2 shadow-sm dark:bg-white/10 lg:gap-3 lg:px-4">
                <Smartphone size={16} className="text-primary-600 dark:text-primary-400 lg:h-[18px] lg:w-[18px]" />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Mobile Apps Coming Soon
                </span>
              </div>
              <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:mt-6 lg:text-lg">
                Presenze and Presenze Dashboard are currently in development. The Admin Portal 
                is live and ready for institutional setup. Mobile releases will follow with 
                full BLE attendance capabilities.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:mt-8 lg:gap-4">
                <a
                  href="https://github.com/presenzehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-5 py-2.5 text-sm lg:px-6 lg:py-3"
                >
                  Follow on GitHub
                  <ArrowUpRight size={14} className="lg:h-4 lg:w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/presenzehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-5 py-2.5 text-sm lg:px-6 lg:py-3"
                >
                  Connect on LinkedIn
                  <ArrowUpRight size={14} className="lg:h-4 lg:w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

