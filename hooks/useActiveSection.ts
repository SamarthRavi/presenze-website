"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/navigation";

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0].id);

  useEffect(() => {
    // Track which sections are currently intersecting with their ratios
    const intersectingMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        // Update intersection map
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            intersectingMap.set(sectionId, entry.intersectionRatio);
          } else {
            intersectingMap.delete(sectionId);
          }
        });

        // Find section closest to viewport center among visible sections
        if (intersectingMap.size > 0) {
          const viewportCenter = window.innerHeight / 2;
          let closestId = NAV_LINKS[0].id;
          let closestDistance = Number.POSITIVE_INFINITY;

          intersectingMap.forEach((_, sectionId) => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(sectionCenter - viewportCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestId = sectionId;
            }
          });

          // Only update if the active section actually changed
          setActiveSection((prev) => (prev === closestId ? prev : closestId));
        }
      },
      {
        // Use thresholds to detect when sections enter/leave viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        // Extend observation area slightly for smoother transitions
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    // Observe all sections
    NAV_LINKS.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Initial check after mount
    const initialCheck = () => {
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

      setActiveSection(closestId);
    };

    // Run initial check after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(initialCheck, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return activeSection;
}