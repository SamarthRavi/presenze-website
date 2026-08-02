// Performance monitoring utilities for production

export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Log web vitals in production
    const { name, value, id } = metric;
    
    // You can send these to an analytics service
    console.log(`${name}: ${value} (${id})`);
    
    // Optional: Send to analytics
    // window.gtag?.('event', name, {
    //   value: Math.round(name === 'CLS' ? value * 1000 : value),
    //   event_label: id,
    //   non_interaction: true,
    // });
  }
};

// Optimize images loading
export const imageOptimization = {
  loading: 'lazy' as const,
  placeholder: 'blur' as const,
  quality: 85,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
};

// Debounce utility for scroll and resize events
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility for scroll events
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Intersection Observer options for lazy loading
export const intersectionObserverOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1,
};

// Prefetch configuration
export const prefetchConfig = {
  images: true,
  videos: false, // Don't prefetch videos on mobile
  fonts: true,
};

// Check if device is mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Check if device has reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Memory optimization: Clear unused resources
export const clearUnusedResources = () => {
  if (typeof window !== 'undefined') {
    // Clear any cached data that's no longer needed
    try {
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            if (name.includes('old') || name.includes('unused')) {
              caches.delete(name);
            }
          });
        });
      }
    } catch (error) {
      console.error('Error clearing caches:', error);
    }
  }
};
