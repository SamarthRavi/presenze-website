"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page has been scrolled past `threshold` px.
 * Used purely for the navbar's "scrolled" visual state (glass
 * background, slight scale-down) — has nothing to do with which
 * section is active.
 */
export function useScrolled(threshold = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
