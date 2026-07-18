'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { images, links, location, phone } from '@/lib/site';
import { BurgerIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './icons';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: links.insights },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-topbar text-[13px] text-topbar-text">
        <div className="mx-auto flex min-h-[46px] max-w-shell flex-wrap items-center justify-between gap-4 px-6">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 py-1.5">
            <a
              href={phone.href}
              className="inline-flex items-center gap-[9px] font-semibold tracking-[0.02em] text-topbar-bright hover:text-white"
            >
              <PhoneIcon />
              {phone.display}
            </a>
            <a href="#contact" className="hidden items-center gap-[9px] hover:text-white desk:inline-flex">
              <MailIcon />
              Schedule a Meeting
            </a>
            <span className="hidden items-center gap-[9px] desk:inline-flex">
              <PinIcon />
              {location}
            </span>
          </div>
          <div className="inline-flex items-center gap-[18px] py-1.5">
            <a href={links.faq} className="hidden tracking-[0.02em] hover:text-white desk:inline">
              FAQ
            </a>
            <a href={links.insights} className="hidden tracking-[0.02em] hover:text-white desk:inline">
              Insights
            </a>
            <a
              href={links.linkedin}
              aria-label="The Value Track on LinkedIn"
              className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] transition-colors duration-[250ms] hover:bg-mint"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header
        className={`sticky top-0 z-[60] bg-white transition-shadow duration-300 ${scrolled ? 'shadow-header' : 'shadow-none'}`}
      >
        <div className="mx-auto flex min-h-[86px] max-w-shell items-center justify-between gap-5 px-6">
          <a href="#home" className="inline-flex shrink-0 items-center">
            <Image
              src={images.logo}
              alt="The Value Track"
              width={262}
              height={69}
              priority
              style={{ height: '46px', width: 'auto' }}
            />
          </a>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 font-display text-[15px] font-medium desk:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-ink transition-colors hover:text-mint">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center rounded-sm border-2 border-mint px-[26px] py-[13px] font-display text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-[250ms] hover:bg-mint hover:text-white desk:inline-flex"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-[3px] border-0 bg-mint text-white desk:hidden"
          >
            <BurgerIcon />
          </button>
        </div>

        {/* Mobile dropdown menu (≤980px) */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="border-t border-[#eef1f3] bg-white font-display font-medium desk:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="block border-b border-[#f2f4f5] px-6 py-[15px] text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="block bg-mint px-6 py-4 text-[13px] uppercase tracking-[0.12em] text-white"
            >
              Get in Touch
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
