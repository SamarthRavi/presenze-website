"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";
import { NAV_LINKS, scrollToSection, getNavHref, isHomePage } from "@/lib/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";

function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/brand/presenze-app-icon-light.png"
          alt="Presenze"
          width={36}
          height={36}
          className="h-full w-full object-cover dark:hidden"
          priority
        />
        <Image
          src="/brand/presenze-app-icon-dark.png"
          alt="Presenze"
          width={36}
          height={36}
          className="hidden h-full w-full object-cover dark:block"
          priority
        />
      </div>
      <span className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
        Presenze
      </span>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrolled();
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const onHomePage = isHomePage(pathname);

  const handleNavClick = (e: React.MouseEvent, link: typeof NAV_LINKS[0]) => {
    // If we're on homepage, prevent default and scroll
    if (onHomePage) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      scrollToSection(link.id);
    } else {
      // On other pages, let the Link component handle navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={false}
        animate={{
          scale: isScrolled ? 0.98 : 1,
          opacity: isScrolled ? 0.98 : 1,
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "flex w-full max-w-7xl items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
          isScrolled
            ? "glass shadow-glass dark:shadow-glass-dark"
            : "bg-white/60 shadow-sm backdrop-blur-md dark:bg-navy-800/60"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
          aria-label="Go to home"
        >
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const href = getNavHref(link, pathname);
            const isActive = onHomePage && activeSection === link.id;
            
            return (
              <Link
                key={link.id}
                href={href}
                onClick={(e) => handleNavClick(e, link)}
                className={cn(
                  "relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                  "outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-xl bg-slate-100 dark:bg-white/10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 0.8,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Admin Portal Button */}
          <motion.a
            href="https://admin.presenze.website"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-button-primary transition-all duration-200 hover:bg-primary-700 hover:shadow-button-hover dark:bg-primary-500 dark:hover:bg-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            Admin Portal
            <ArrowUpRight size={15} />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl text-slate-900 transition-colors duration-200 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-900/80 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-[70] h-full w-full max-w-sm bg-white shadow-2xl dark:bg-navy-800 lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-white/10">
                  <BrandLogo />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-900 transition-colors duration-200 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {NAV_LINKS.map((link, index) => {
                      const href = getNavHref(link, pathname);
                      const isActive = onHomePage && activeSection === link.id;
                      
                      return (
                        <motion.div
                          key={link.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={href}
                            onClick={(e) => handleNavClick(e, link)}
                            className={cn(
                              "block w-full rounded-xl px-5 py-4 text-left text-base font-medium transition-colors duration-200",
                              isActive
                                ? "bg-primary-50 text-primary-900 dark:bg-primary-500/20 dark:text-primary-100"
                                : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="border-t border-slate-200 p-6 dark:border-white/10">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Theme
                    </span>
                    <button
                      onClick={toggleTheme}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors duration-200 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                      aria-label="Toggle theme"
                    >
                      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                  </div>
                  <a
                    href="https://admin.presenze.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-4 text-base font-semibold text-white shadow-button-primary transition-all duration-200 hover:bg-primary-700 dark:bg-primary-500"
                  >
                    Admin Portal
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
