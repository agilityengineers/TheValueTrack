import Image from 'next/image';
import { images, links, location, phone } from '@/lib/site';
import { LinkedInIcon } from './icons';

const EXPLORE_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'About', href: '#about' },
];

const SERVICE_LINKS = [
  { label: 'Value Building', href: links.valueBuilding },
  { label: 'Sell Your Business', href: links.sellYourBusiness },
  { label: 'Business Valuation', href: links.businessValuation },
  { label: 'Speaking', href: links.speaking },
];

const FOOTER_LINK_CLASS = 'text-footer-text transition-colors hover:text-mint';

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text">
      <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-11 px-6 pb-10 pt-[70px]">
        <div>
          <Image
            src={images.logo}
            alt="The Value Track"
            width={262}
            height={69}
            style={{ height: '46px', width: 'auto', filter: 'grayscale(1) brightness(0) invert(0.78)' }}
          />
          <p className="mb-[22px] mt-[18px] max-w-[280px] text-sm leading-[1.8]">
            Helping business owners get the most out of their life’s work — building value, and
            selling the right way.
          </p>
          <a
            href={links.linkedin}
            aria-label="The Value Track on LinkedIn"
            className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] transition-colors duration-[250ms] hover:bg-mint"
          >
            <LinkedInIcon size={16} fill="#fff" />
          </a>
        </div>
        <nav aria-label="Explore">
          <h3 className="mb-5 font-display text-base font-semibold text-white">Explore</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {EXPLORE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={FOOTER_LINK_CLASS}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <h3 className="mb-5 font-display text-base font-semibold text-white">Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {SERVICE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={FOOTER_LINK_CLASS}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="mb-5 font-display text-base font-semibold text-white">Get In Touch</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href={phone.href} className={FOOTER_LINK_CLASS}>
                {phone.display}
              </a>
            </li>
            <li>
              <a href={links.contactPage} className={FOOTER_LINK_CLASS}>
                Contact Us
              </a>
            </li>
            <li>
              <a href={links.faq} className={FOOTER_LINK_CLASS}>
                FAQ
              </a>
            </li>
            <li>
              <span>{location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.08]">
        <p className="mx-auto max-w-shell px-6 py-[22px] text-[13px] text-[#7e868d]">
          Copyright © 2010 – 2026 The Value Track. All rights reserved.&nbsp;{' '}
          <span className="text-[#5f676e]">
            Demo site — design language adapted from a financial-services template; content sourced
            from getonthevaluetrack.com.
          </span>
        </p>
      </div>
    </footer>
  );
}
