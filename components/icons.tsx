// Inline SVG icon set transcribed 1:1 from the design reference
// (stroke-style line icons, mint by default). All icons are decorative;
// accessible names live on the surrounding link/button/text.

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function svgProps(size: number, props: Omit<IconProps, 'size'>) {
  return { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, ...props } as const;
}

export function PhoneIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function MailIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function PinIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LinkedInIcon({ size = 14, fill = '#e7ebee', ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill={fill}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H21.4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H13.7z" />
    </svg>
  );
}

export function BurgerIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

/* ---- Stats strip (42px, stroke 1.6) ---- */

export function ChartIcon({ size = 42, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 3 3 5-6" />
    </svg>
  );
}

export function AwardIcon({ size = 42, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </svg>
  );
}

export function UsersIcon({ size = 42, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function CalendarIcon({ size = 42, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

/* ---- Service cards (30px, stroke 1.7) ---- */

export function ValueBuildingIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M9 21v-6h6v6" />
      <path d="m7 12 2.5 2 4-4" />
    </svg>
  );
}

export function DollarIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export function ValuationIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M5 12H2M22 12h-3" />
      <circle cx="12" cy="12" r="6" />
      <path d="M12 9v3l2 1" />
    </svg>
  );
}

export function ExitPlanIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

export function ReviewIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}

export function SpeakingIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke="#43c3a0" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

/* ---- Checkmarks & quote glyph ---- */

export function CheckIcon({ size = 20, stroke = '#43c3a0', ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="none" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function QuoteIcon({ size = 46, ...props }: IconProps) {
  return (
    <svg {...svgProps(size, props)} fill="#43c3a0">
      <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5zM18.5 6a5.17 5.17 0 0 0-5.17 5.17V18H20v-6.83h-3.33A1.67 1.67 0 0 1 18.5 9.5z" />
    </svg>
  );
}
