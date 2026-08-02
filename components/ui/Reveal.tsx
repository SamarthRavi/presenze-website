"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) {
  // Memoize animation variants for better performance
  const variants = useMemo(() => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
  }), [y]);

  const transition = useMemo(() => ({
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1],
  }), [delay]);

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once, margin: "-80px", amount: 0.3 }}
      transition={transition}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}
