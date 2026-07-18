import { AwardIcon, CalendarIcon, ChartIcon, UsersIcon } from './icons';

const STATS = [
  { icon: ChartIcon, label: 'In Business Since', value: '2000' },
  { icon: AwardIcon, label: 'Owner Experience', value: '25+ Years' },
  { icon: UsersIcon, label: 'Our Approach', value: 'Team-Based' },
  { icon: CalendarIcon, label: 'Get Started', value: '60-Min Meeting' },
];

export default function Stats() {
  return (
    <section aria-label="The Value Track at a glance" className="border-b border-[#e9ecee] bg-section">
      <dl className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-8 px-6 py-12">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4">
            <Icon />
            <div>
              <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">{label}</dt>
              <dd className="font-display text-2xl font-bold text-ink">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
