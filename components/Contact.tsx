import { links, phone } from '@/lib/site';
import ContactForm from './ContactForm';
import { LinkedInIcon, MailIcon, PhoneIcon } from './icons';

const INFO_ROWS = [
  {
    icon: <PhoneIcon size={22} />,
    label: 'Call Us',
    value: phone.display,
    href: phone.href,
  },
  {
    icon: <MailIcon size={22} />,
    label: 'Email / Schedule',
    value: 'Book a Value Track Meeting',
    href: links.contactPage,
  },
  {
    icon: <LinkedInIcon size={22} fill="#43c3a0" />,
    label: 'Connect',
    value: 'LinkedIn — David Shavzin',
    href: links.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-section py-24">
      <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-14 px-6">
        <div data-reveal>
          <p className="mb-[18px] font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-mint">
            Contact Us
          </p>
          <h2 className="mb-[18px] font-display text-h2 text-ink">
            Get clear on the sale-readiness of your business.
          </h2>
          <p className="mb-[34px] max-w-[460px] text-base leading-[1.8]">
            The best way to get started is to get informed. Schedule a 60-minute Value Track meeting
            and get a deeper understanding of your business value and how to sell the right way.
          </p>
          {INFO_ROWS.map(({ icon, label, value, href }, index) => (
            <div
              key={label}
              className={`flex items-center gap-4 ${index < INFO_ROWS.length - 1 ? 'mb-5' : ''}`}
            >
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-mint-tint">
                {icon}
              </div>
              <div>
                <div className="text-[13px] font-semibold uppercase tracking-[0.06em] text-muted">
                  {label}
                </div>
                <a href={href} className="font-display text-lg font-semibold text-ink hover:text-mint">
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div data-reveal className="rounded-md border border-line bg-white px-9 py-10 shadow-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
