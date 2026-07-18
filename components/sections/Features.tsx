"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bluetooth,
  BookOpen,
  Building2,
  Monitor,
  Network,
  ShieldCheck,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { scrollToSection } from "@/lib/navigation";

const features = [
  {
    icon: Bluetooth,
    title: "Bluetooth Low Energy Attendance",
    description:
      "Faculty phone advertises a secure live session while student phones scan and verify presence over BLE within seconds. Verified records instantly sync through the Go backend to Supabase and appear live in the Admin Portal.",
    color: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Authentication & Security",
    description:
      "Faculty and HODs use the same Presenze Dashboard app with screens and permissions tailored to their role. Secure cloud backend validates sessions and writes clean, auditable attendance records with full traceability.",
    color: "accent",
  },
  {
    icon: Smartphone,
    title: "Student Mobile App",
    description:
      "Students get Mark Attendance, history, timetable, notifications, and profile access in one streamlined app. Receive timely attendance, timetable, and administrative updates directly through push notifications.",
    color: "primary",
  },
  {
    icon: Monitor,
    title: "Faculty & HOD Dashboard",
    description:
      "Start sessions, monitor live detection, review classes, and access role-scoped academic views on mobile. Connect to official timetables so faculty start the right class with minimal manual setup.",
    color: "secondary",
  },
  {
    icon: Building2,
    title: "Admin ERP Portal",
    description:
      "Web portal for managing students, faculty, HODs, departments, classrooms, users, reports, and analytics. Bulk import institutional data via Excel without rebuilding records manually.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Attendance Analytics & Reports",
    description:
      "Track attendance by student, subject, section, department, or timeframe without manual spreadsheet work. Generate comprehensive reports and insights for data-driven decision making.",
    color: "primary",
  },
  {
    icon: Network,
    title: "Department & Academic Management",
    description:
      "Organize departments, HOD access, classroom allocation, and academic reporting from one unified layer. Model courses, semesters, sections, subjects, and allocations so attendance lands in the correct record.",
    color: "secondary",
  },
  {
    icon: WifiOff,
    title: "Offline Resilience",
    description:
      "Temporary network drops don't break sessions; queued records reconcile automatically when connectivity returns. The system ensures no attendance data is lost even during connectivity issues.",
    color: "accent",
  },
  {
    icon: BookOpen,
    title: "Scalable Campus Infrastructure",
    description:
      "The mobile BLE pattern scales from one department to full campus without requiring classroom hardware. Designed to grow with your institution's needs while maintaining performance and reliability.",
    color: "primary",
  },
];

const colorClasses = {
  primary: {
    icon: "text-primary-600 dark:text-primary-400",
    bg: "bg-primary-500/10 dark:bg-primary-500/20",
    border: "border-primary-200 dark:border-primary-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(30,94,255,0.15)]",
  },
  secondary: {
    icon: "text-secondary-600 dark:text-secondary-400",
    bg: "bg-secondary-500/10 dark:bg-secondary-500/20",
    border: "border-secondary-200 dark:border-secondary-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
  },
  accent: {
    icon: "text-accent-600 dark:text-accent-400",
    bg: "bg-accent-500/10 dark:bg-accent-500/20",
    border: "border-accent-200 dark:border-accent-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
};

export function Features() {
  return (
    <section id="features" className="section scroll-mt-24 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              <span className="mono-tag">Platform Capabilities</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Everything attendance needs, from{" "}
              <span className="gradient-text">BLE verification to ERP control</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Presenze keeps the product surface simple: one student app, one shared Dashboard 
              app for Faculty and HOD roles, and one Admin Portal for the institution.
            </p>
          </Reveal>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          {features.map((feature, i) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <Reveal key={feature.title} delay={(i % 6) * 0.05}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ 
                    y: -6, 
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className={`group relative h-full overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 dark:bg-white/[0.03] ${colors.border} ${colors.glow} hover:border-opacity-100 hover:shadow-card-hover`}
                >
                  {/* Top gradient line */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${colors.icon}`} />
                  
                  {/* Icon container */}
                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${colors.bg} group-hover:scale-110`}>
                    <feature.icon className={`h-6 w-6 transition-colors duration-300 ${colors.icon}`} />
                    
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50 ${colors.bg}`} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>

                  {/* Hover arrow indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className={colors.icon}>Learn more</span>
                    <motion.svg
                      className={`h-4 w-4 ${colors.icon}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>

                  {/* Background pattern */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className={`h-full w-full rounded-full blur-3xl ${colors.bg}`} />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="mt-16 text-center lg:mt-20">
            <p className="text-slate-600 dark:text-slate-400">
              Want to see how it all works together?
            </p>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="btn-secondary btn-md mt-4"
            >
              View the Complete Flow
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
