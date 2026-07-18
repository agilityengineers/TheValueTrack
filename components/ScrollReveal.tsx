'use client';

import { useEffect } from 'react';

// Scroll-reveal per the handoff spec: [data-reveal] elements start at
// opacity:0 / translateY(26px) and animate in via IntersectionObserver
// (threshold 0.1, rootMargin 0 0 -30px 0), unobserved after firing.
// Initial styles are applied from JS so content stays visible without JS,
// and everything stays visible for reduced-motion users.
export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (elements.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );

    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
