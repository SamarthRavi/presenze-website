"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { NAV_LINKS } from "@/lib/navigation";
import { throttle } from "@/app/performance";

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0].id);
  const intersectingMapRef = useRef(new Map<string, number>());

  // Memoized callback to avoid recreating on each render
  const updateActiveSection = useCallback(() => {
    const intersectingMap = intersectingMapRef.current;
    
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
  }, []);

  // Throttled version to improve performance
  const throttledUpdateActiveSection = useCallback(
    throttle(updateActiveSection, 100),
    [updateActiveSection]
  );

  useEffect(() => {
    const intersectingMap = intersectingMapRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        // Update intersection map
        let hasChanges = false;
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            intersectingMap.set(sectionId, entry.intersectionRatio);
            hasChanges = true;
          } else {
            if (intersectingMap.has(sectionId)) {
              intersectingMap.delete(sectionId);
              hasChanges = true;
            }
          }
        });

        // Only update if there were actual changes
        if (hasChanges) {
          throttledUpdateActiveSection();
        }
      },
      {
        // Reduced thresholds for better performance
        threshold: [0, 0.25, 0.5, 0.75, 1],
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
      intersectingMap.clear();
    };
  }, [throttledUpdateActiveSection]);

  return activeSection;
}