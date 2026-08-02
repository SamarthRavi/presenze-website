"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { throttle } from "@/app/performance";

export function useScrolled(threshold = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);
  const tickingRef = useRef(false);

  const update = useCallback(() => {
    const next = window.scrollY > threshold;
    
    setIsScrolled(prev => {
      if (prev === next) return prev;
      return next;
    });

    tickingRef.current = false;
  }, [threshold]);

  const handleScroll = useCallback(
    throttle(() => {
      if (!tickingRef.current) {
        requestAnimationFrame(update);
        tickingRef.current = true;
      }
    }, 16), // ~60fps
    [update]
  );

  useEffect(() => {
    // Initial update
    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, update]);

  return isScrolled;
}