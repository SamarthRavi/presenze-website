"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";

export function useCounter(target: number, duration = 1800, decimals = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px", amount: 0.3 });
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>();

  const animate = useCallback(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      
      // Use more performant easing function
      const eased = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const newValue = Number((eased * target).toFixed(decimals));
      setValue(newValue);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [target, duration, decimals]);

  useEffect(() => {
    if (!inView) return;

    animate();
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, animate]);

  return { ref, value };
}
