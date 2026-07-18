"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/navigation";

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0].id);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestId = NAV_LINKS[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = link.id;
        }
      });

      setActiveSection((prev) => (prev === closestId ? prev : closestId));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
}