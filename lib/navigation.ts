/**
 * Single source of truth for site navigation.
 *
 * Anything that needs to scroll to a section — the navbar, the footer,
 * or a CTA button inside a section — imports `scrollToSection` and/or
 * `NAV_LINKS` from here instead of rolling its own logic.
 */

export interface NavLink {
  label: string;
  id: string;
  href?: string; // Optional href for direct links
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", id: "home", href: "/" },
  { label: "Features", id: "features", href: "/#features" },
  { label: "How it Works", id: "how-it-works", href: "/#how-it-works" },
  { label: "Apps", id: "download", href: "/#download" },
  { label: "Founder", id: "founder", href: "/#founder" },
  { label: "FAQ", id: "faq", href: "/#faq" },
];

/**
 * Scrolls to the section with the given id (for same-page navigation).
 * Returns true if scroll was performed, false if navigation is needed.
 */
export function scrollToSection(id: string): boolean {
  const elementId = id.startsWith("#") ? id.slice(1) : id;
  const element = document.getElementById(elementId);
  
  if (!element) {
    // Element doesn't exist on current page
    return false;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

/**
 * Get the appropriate href for a navigation link based on current path.
 * On homepage: use anchor links
 * On other pages: use full path with anchors
 */
export function getNavHref(link: NavLink, currentPath: string): string {
  // If on homepage, use anchor links for smooth scrolling
  if (currentPath === "/") {
    return link.id === "home" ? "/" : `#${link.id}`;
  }
  
  // On other pages, return full href
  return link.href || `/#${link.id}`;
}

/**
 * Check if we're on the homepage
 */
export function isHomePage(path: string): boolean {
  return path === "/";
}
