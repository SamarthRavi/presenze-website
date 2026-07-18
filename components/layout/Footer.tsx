"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Instagram, Globe, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/lib/navigation";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Apps", href: "#download" },
];

const platformLinks = [
  { label: "Student App", href: "#download" },
  { label: "Dashboard App", href: "#download" },
  { label: "Admin Portal", href: "https://admin.presenze.website" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/presenzehq",
    color: "hover:text-slate-900 dark:hover:text-white"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/company/presenzehq",
    color: "hover:text-primary-600 dark:hover:text-primary-400"
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://www.instagram.com/presenzehq/",
    color: "hover:text-accent-600 dark:hover:text-accent-400"
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:hello@presenze.website",
    color: "hover:text-secondary-600 dark:hover:text-secondary-400"
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-navy-800">
      <div className="container">
        {/* Main footer content */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-8 lg:py-20">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/brand/presenze-app-icon-light.png"
                  alt="Presenze"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover dark:hidden"
                />
                <Image
                  src="/brand/presenze-app-icon-dark.png"
                  alt="Presenze"
                  width={40}
                  height={40}
                  className="hidden h-full w-full object-cover dark:block"
                />
              </div>
              <span className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                Presenze
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              Mobile BLE attendance and campus ERP platform. Built for student scanners, 
              Faculty/HOD Dashboard sessions, and real-time Admin Portal records.
            </p>
            
            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-md dark:bg-white/5 dark:text-slate-400 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Tech stack badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              Mobile BLE · Go · Supabase
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Product
            </h3>
            <ul className="mt-6 space-y-3">
              {productLinks.map((link) => (
                <li key={`product-${link.href}`}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Platform
            </h3>
            <ul className="mt-6 space-y-3">
              {platformLinks.map((link) => (
                <li key={`platform-${link.href}-${link.label}`}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:hello@presenze.website"
                  className="text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  hello@presenze.website
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/presenzehq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Instagram
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/presenzehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  GitHub
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/presenzehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  LinkedIn
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-slate-200 py-8 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Presenze. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <a href="/privacy" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</a>
            <span className="hidden sm:inline">·</span>
            <a href="/terms" className="hover:text-slate-900 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
