"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useRelativeMouse } from "@/hooks/useMousePosition";

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { pos, onMouseMove, onMouseLeave } = useRelativeMouse(ref);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: pos.x * 0.25, y: pos.y * 0.25 }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
