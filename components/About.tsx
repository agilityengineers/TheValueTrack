import { links } from '@/lib/site';
import { LinkedInIcon } from './icons';

const ABOUT_STATS = [
  { value: '2000', label: 'Practice Founded' },
  { value: '25 Yrs', label: 'Experience' },
  { value: '1:1', label: 'Owner Partnership' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-shell px-6 py-24">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-[60px]">
        <div data-reveal className="flex justify-center">
          <div className="w-full max-w-[360px] rounded-md border border-line bg-section px-10 py-[44px] text-center">
            {/* Placeholder monogram — swap for a real headshot of David Shavzin. */}
            <div
              aria-hidden
              className="mx-auto mb-[22px] flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-mint to-[#2f9e82] font-display text-[44px] font-bold text-white"
            >
              DS
            </div>
            <h3 className="font-display text-[22px] font-bold text-ink">David Shavzin</h3>
            <div className="mt-1 text-sm font-semibold tracking-[0.05em] text-mint">
              Founder, The Value Track
            </div>
            <p className="mb-[22px] mt-[18px] text-sm leading-[1.7]">
              Value creation, exit strategy, succession planning &amp; business sales.
            </p>
            <a
              href={links.linkedin}
              className="inline-flex items-center gap-[9px] font-display text-[13px] font-semibold tracking-[0.06em] text-mint hover:text-mint-dark"
            >
              <LinkedInIcon size={17} fill="currentColor" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <div data-reveal>
          <p className="mb-[18px] font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-mint">
            About Us
          </p>
          <h2 className="mb-5 font-display text-h2 text-ink">
            Helping business owners own their future.
          </h2>
          <p className="mb-[18px] text-base leading-[1.8]">
            David Shavzin, Founder of The Value Track, brings together a unique combination of
            skills in value creation, exit strategy, succession planning, and business sales — with
            the right team and suite of tools to bring to the table.
          </p>
          <p className="mb-[30px] text-base leading-[1.8]">
            He created the practice in 2000 to help business owners, partners, and family members
            benefit from their hard work — drawing on 25 years of experience guiding this usually
            once-in-a-lifetime milestone.
          </p>
          <div className="flex flex-wrap gap-10">
            {ABOUT_STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-[32px] font-bold text-ink">{value}</div>
                <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
