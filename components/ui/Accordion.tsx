"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 dark:divide-white/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="py-2">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen 
                    ? "rotate-45 border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400" 
                    : "border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                )}
              >
                <Plus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
