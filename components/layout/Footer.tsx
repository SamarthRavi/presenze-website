"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/lib/navigation";
import { memo, useCallback } from "react";

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

const SocialIcon = memo(function SocialIcon({ 
  social 
}: { 
  social: typeof socialLinks[0] 
}) {
  return (
    <a
      href={social.href}
      target={social.href.startsWith('http') ? '_blank' : undefined}
      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={social.label}
      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-md dark:bg-white/5 dark:text-slate-400 ${social.color}`}
      style={{ willChange: 'transform' }}
    >
      <social.icon size={18} />
    </a>
  );
});

const FooterLink = memo(function FooterLink({ 
  link, 
  type 
}: { 
  link: { label: string; href: string }; 
  type: string;
}) {
  const handleClick = useCallback(() => {
    scrollToSection(link.href);
  }, [link.href]);

  if (link.href.startsWith('#')) {
    return (
      <button
        onClick={handleClick}
        className="text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        style={{ willChange: 'color' }}
      >
        {link.label}
      </button>
    );
  }

  const isExternal = link.href.startsWith('http');
  
  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-1.5 text-[15px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white ${isExternal ? 'inline-flex' : ''}`}
      style={{ willChange: 'color' }}
    >
      {link.label}
      {isExternal && <ArrowUpRight size={12} />}
    </a>
  );
});

export const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-navy-800" style={{ willChange: 'auto' }}>
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
                  loading="lazy"
                />
                <Image
                  src="/brand/presenze-app-icon-dark.png"
                  alt="Presenze"
                  width={40}
                  height={40}
                  className="hidden h-full w-full object-cover dark:block"
                  loading="lazy"
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
                <SocialIcon key={social.label} social={social} />
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
                  <FooterLink link={link} type="product" />
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
                  <FooterLink link={link} type="platform" />
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
                  style={{ willChange: 'color' }}
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
                  style={{ willChange: 'color' }}
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
                  style={{ willChange: 'color' }}
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
                  style={{ willChange: 'color' }}
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
            <span>&copy; {currentYear} Presenze. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <a 
              href="/privacy" 
              className="hover:text-slate-900 dark:hover:text-white"
              style={{ willChange: 'color' }}
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline">·</span>
            <a 
              href="/terms" 
              className="hover:text-slate-900 dark:hover:text-white"
              style={{ willChange: 'color' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
