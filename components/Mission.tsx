import Image from 'next/image';
import { images } from '@/lib/site';

export default function Mission() {
  return (
    <section aria-label="Our mission" className="mx-auto max-w-shell px-6 py-24">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-center gap-[60px]">
        <div data-reveal>
          <p className="mb-[18px] font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-mint">
            Our Mission
          </p>
          <h2 className="mb-5 font-display text-h2 text-ink">
            The toughest, most important sale you’ll ever make — is selling your business.
          </h2>
          <p className="mb-[22px] font-display text-[20px] font-semibold text-mint">
            Our mission is to help you do it right.
          </p>
          <p className="mb-[18px] text-base leading-[1.8]">
            Too many business owners wake up one day thinking they are ready to sell — but their
            business is not ready. Selling a business is an extremely complex, challenging process,
            and only a small percentage of privately-owned businesses ever sell at all.
          </p>
          <p className="mb-[30px] text-base leading-[1.8]">
            That’s why we created The Value Track. You deserve to capitalize on your life’s work and
            get out on your own terms — through a close partnership, a dynamic team approach, and a
            clear view of your company’s value through the eyes of a buyer.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-display font-semibold tracking-[0.06em] text-mint transition-all hover:gap-3 hover:text-mint-dark"
          >
            More About Us <span aria-hidden>→</span>
          </a>
        </div>
        <div data-reveal className="relative">
          <div className="relative h-[480px] overflow-hidden rounded">
            <Image
              src={images.mission}
              alt="Business advisors reviewing an exit strategy"
              fill
              sizes="(min-width: 981px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-[22px] -left-[22px] max-w-[230px] rounded bg-mint px-[30px] py-[26px] text-white shadow-badge">
            <div className="font-display text-[34px] font-bold leading-none">20+</div>
            <div className="mt-1.5 text-sm leading-[1.4]">years helping owners own their future</div>
          </div>
        </div>
      </div>
    </section>
  );
}
