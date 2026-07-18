import { useEffect } from 'react';

// Reveals elements marked with [data-reveal] as they scroll into view.
// Pass a `key` (e.g. the current route) to re-scan when the page changes.
export function useReveal(key) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );

    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .65s ease, transform .65s ease';
      io.observe(el);
    });

    return () => io.disconnect();
  }, [key]);
}
