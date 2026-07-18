import Image from 'next/image';
import { images } from '@/lib/site';
import { CheckIcon } from './icons';

const CHECKLIST = [
  'How dependent is the business on you?',
  'How clean and accurate are your records?',
  'Do sales rely on one person?',
  'Are you compliant on legal & tax?',
  'Is your team aligned with your vision?',
  'Do you have recurring, repeat revenue?',
];

export default function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-shell px-6 py-24">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-center gap-[60px]">
        <div data-reveal>
          <div className="relative h-[500px] overflow-hidden rounded">
            <Image
              src={images.whyUs}
              alt="Owner reviewing business performance with an advisor"
              fill
              sizes="(min-width: 981px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div data-reveal>
          <p className="mb-[18px] font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-mint">
            Sale-Readiness
          </p>
          <h2 className="mb-[18px] font-display text-h2 text-ink">
            It’s time to kick the tires on your own business.
          </h2>
          <p className="mb-7 text-base leading-[1.8]">
            Owners struggle to build the value they need because they aren’t diving deeply enough
            into the areas a buyer will scrutinize. Start with the questions a buyer will ask:
          </p>
          <ul className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-x-8 gap-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-[11px] text-[15px] text-[#4c545b]">
                <CheckIcon className="mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-sm bg-mint px-8 py-4 font-display text-[13.5px] font-semibold uppercase tracking-[0.14em] text-white transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-mint-dark"
          >
            Get Clear Today
          </a>
        </div>
      </div>
    </section>
  );
}
