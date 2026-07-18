import Image from 'next/image';
import { images } from '@/lib/site';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[640px] items-center">
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(30,44,50,0.82),rgba(38,55,60,0.55))]"
      />
      <div className="relative mx-auto w-full max-w-shell px-6 py-24">
        <div className="max-w-[660px]">
          <p className="mb-5 font-display text-[14px] font-semibold uppercase tracking-[0.32em] text-mint-light">
            Planning to Sell?
          </p>
          <h1 className="mb-6 font-display text-hero text-white">
            Get your business on the Value Track.
          </h1>
          <p className="mb-[38px] max-w-[540px] text-[19px] leading-[1.7] text-[#e6ecee]">
            Build the value of your business before you sell — then sell it right and get the return
            you deserve for your life’s work.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-sm bg-mint px-9 py-[18px] font-display text-[13.5px] font-semibold uppercase tracking-[0.14em] text-white transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-mint-dark"
            >
              Schedule a Meeting
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 rounded-sm border-2 border-white/[0.55] px-[34px] py-4 font-display text-[13.5px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-[250ms] hover:border-white hover:bg-white hover:text-ink"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
