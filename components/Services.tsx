import { links } from '@/lib/site';
import {
  DollarIcon,
  ExitPlanIcon,
  ReviewIcon,
  SpeakingIcon,
  ValuationIcon,
  ValueBuildingIcon,
} from './icons';

const SERVICES = [
  {
    icon: ValueBuildingIcon,
    title: 'Value Building',
    copy: 'Build the value of your business before you sell. We work on the areas buyers scrutinize most — so you grow the value that translates into a higher offer.',
    href: '#contact',
  },
  {
    icon: DollarIcon,
    title: 'Sell Your Business',
    copy: 'Sell your business and get the return you deserve. A smart, customized selling strategy guides you from decision through to the closing table.',
    href: '#contact',
  },
  {
    icon: ValuationIcon,
    title: 'Business Valuation',
    copy: 'Understand what it’s worth. Knowing your value today sets a baseline for growth, maps your sale scenario, and gets everyone working from the same foundation.',
    href: '#contact',
  },
  {
    icon: ExitPlanIcon,
    title: 'Exit Planning',
    copy: 'Set expectations and a clear path through exit planning to the closing table — with timing, succession, and transition mapped out well in advance.',
    href: '#contact',
  },
  {
    icon: ReviewIcon,
    title: 'Sale-Readiness Review',
    copy: 'Get clear on the sale-readiness of your business, the key mistakes to avoid, and exactly how the value-building and sale processes really work.',
    href: '#contact',
  },
  {
    icon: SpeakingIcon,
    title: 'Speaking & Workshops',
    copy: 'Bring The Value Track to your group. Practical, buyer-focused talks and workshops that help owners understand value, timing, and selling the right way.',
    href: links.speaking,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-section py-24">
      <div className="mx-auto max-w-shell px-6">
        <div data-reveal className="mx-auto mb-[58px] max-w-[680px] text-center">
          <p className="mb-4 font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-mint">
            What We Do
          </p>
          <h2 className="mb-[18px] font-display text-h2 text-ink">
            How we get your business on track
          </h2>
          <p className="text-base leading-[1.75]">
            A unique team approach to exit planning that makes growth, value creation, and
            business-sale optimization achievable for owners.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-7">
          {SERVICES.map(({ icon: Icon, title, copy, href }) => (
            <div
              key={title}
              data-reveal
              className="rounded border border-line bg-white px-[34px] py-[42px] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-card"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-mint-tint">
                <Icon />
              </div>
              <h3 className="mb-3 font-display text-[21px] font-semibold text-ink">{title}</h3>
              <p className="mb-5 text-[15px] leading-[1.75]">{copy}</p>
              <a
                href={href}
                className="inline-flex items-center gap-[7px] font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-mint transition-all hover:gap-[11px]"
              >
                Learn More <span aria-hidden>→</span>
                <span className="sr-only">— {title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
