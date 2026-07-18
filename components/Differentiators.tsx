const DIFFERENTIATORS = [
  {
    title: 'A close partnership',
    copy: 'We work alongside you, not from a distance — invested in the outcome of your life’s work.',
  },
  {
    title: 'A dynamic team approach',
    copy: 'The right team and suite of tools at the table for every stage of value building and sale.',
  },
  {
    title: 'A smart, customized strategy',
    copy: 'A selling strategy built around your business, your timeline, and the return you deserve.',
  },
];

export default function Differentiators() {
  return (
    <section aria-label="What makes us different" className="bg-mint">
      <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-9 px-6 py-16">
        {DIFFERENTIATORS.map(({ title, copy }, index) => (
          <div
            key={title}
            className={`text-white ${index > 0 ? 'border-l border-white/[0.28] pl-9' : ''}`}
          >
            <h3 className="mb-2.5 font-display text-[20px] font-bold">{title}</h3>
            <p className="text-[15px] leading-[1.7] text-[#e9fbf5]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
