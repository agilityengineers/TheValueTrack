import Image from 'next/image';
import { images } from '@/lib/site';
import { QuoteIcon } from './icons';

// TODO: replace with real client testimonials.
export default function Quote() {
  return (
    <section aria-label="Quote" className="relative">
      <Image src={images.quote} alt="" fill sizes="100vw" className="object-cover object-center" />
      <div aria-hidden className="absolute inset-0 bg-[rgba(28,40,45,0.88)]" />
      <figure data-reveal className="relative mx-auto max-w-[900px] px-6 py-[92px] text-center text-white">
        <QuoteIcon className="mx-auto mb-6" />
        <blockquote>
          <p className="mb-6 font-display text-quote font-semibold">
            You deserve to capitalize on your life’s work and get out on your own terms. Let’s roll
            up our sleeves and get your business on The Value Track.
          </p>
        </blockquote>
        <figcaption className="text-[13px] font-semibold uppercase tracking-[0.08em] text-mint-light">
          The Value Track
        </figcaption>
      </figure>
    </section>
  );
}
