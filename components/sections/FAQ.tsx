"use client";

import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import type { FaqItem } from "@/types";

const faqs: FaqItem[] = [
  {
    question: "How does Presenze detect attendance?",
    answer:
      "Faculty or HOD opens Presenze Dashboard and starts a session. Their phone requests Bluetooth permission and becomes the BLE advertiser. Students open Presenze, tap Mark Attendance, and their phones scan for the live session. Verified attendance uploads to the Go backend, stores in Supabase, and appears in the Admin Portal instantly.",
  },
  {
    question: "Does Presenze require classroom devices?",
    answer:
      "No. Presenze is completely mobile-based. The professor's phone acts as the BLE advertiser, and student phones act as BLE scanners. No fixed hardware required.",
  },
  {
    question: "How many apps does Presenze have?",
    answer:
      "Two mobile apps: Presenze for students, and Presenze Dashboard for Faculty and HOD users. Faculty and HODs log into the same Dashboard app—the interface changes based on their role. Plus one web Admin Portal for institutional management.",
  },
  {
    question: "What is the Admin Portal used for?",
    answer:
      "The web Admin Portal manages students, faculty, HODs, departments, timetables, subject allocation, attendance reports, classroom management, academic structure, user management, analytics, and Excel imports.",
  },
  {
    question: "Can someone mark a friend present without being there?",
    answer:
      "The system uses authenticated users, live session tokens, and Bluetooth proximity validation. A student must use their own account and phone to scan the active session nearby.",
  },
  {
    question: "What happens if the internet drops mid-session?",
    answer:
      "Presenze has offline resilience. Session activity can be queued locally and reconciled with the Go backend and Supabase once connectivity returns.",
  },
  {
    question: "Where is attendance data stored?",
    answer:
      "Verified attendance is processed by the Go backend and stored in Supabase, where it becomes available for reports, analytics, and Admin Portal workflows.",
  },
  {
    question: "Can it scale beyond one department?",
    answer:
      "Yes. Since Presenze uses mobile BLE instead of classroom hardware, it scales through software rollout, role-based access, and Admin Portal management across departments and entire campuses.",
  },
];

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@presenze.website",
    href: "mailto:hello@presenze.website",
    color: "primary",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "presenzehq",
    href: "https://github.com/presenzehq",
    color: "accent",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "presenzehq",
    href: "https://www.linkedin.com/company/presenzehq",
    color: "primary",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@presenzehq",
    href: "https://www.instagram.com/presenzehq/",
    color: "secondary",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section scroll-mt-24 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="container">
        {/* FAQ Section */}
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span className="mono-tag">Questions</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                The details Institutions{" "}
                <span className="gradient-text">ask before rollout</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Common questions about how Presenze works, what it requires, and how it scales.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <Accordion items={faqs} />
          </Reveal>
        </div>

        {/* Contact Section */}
        <div className="mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal delay={0.3}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                <span className="mono-tag">Get in Touch</span>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Bringing Presenze to a new campus?
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Connect with us to discuss institutional setup, implementation, or partnership opportunities.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            {contacts.map((contact, i) => (
              <Reveal key={contact.label} delay={0.45 + i * 0.05}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card-hover dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-primary-500/30"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    contact.color === 'primary' ? 'bg-primary-100 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400' :
                    contact.color === 'secondary' ? 'bg-secondary-100 text-secondary-600 dark:bg-secondary-500/20 dark:text-secondary-400' :
                    'bg-accent-100 text-accent-600 dark:bg-accent-500/20 dark:text-accent-400'
                  }`}>
                    <contact.icon size={20} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="mono-tag">{contact.label}</div>
                    <div className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                      {contact.value}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
