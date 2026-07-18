import type { Config } from 'tailwindcss';

// Design tokens from the handoff README (Global Design Tokens).
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#43c3a0', // accent — buttons, links, icons, eyebrows, differentiators band
          dark: '#37a98a', // accent hover
          tint: '#eafaf5', // icon circle backgrounds
          light: '#8fe3cc', // accent light on dark — hero eyebrow, quote attribution
        },
        ink: '#2b3038', // headings, nav text
        body: '#737b83', // body copy
        muted: '#8b939a', // uppercase stat/field labels
        section: '#f5f7f8', // alternating section backgrounds, cards
        line: {
          DEFAULT: '#eaedef', // card borders
          input: '#dce1e4', // input borders
        },
        topbar: {
          DEFAULT: '#3a4148', // slate utility bar
          text: '#c8ced3',
          bright: '#e7ebee',
        },
        footer: {
          DEFAULT: '#2a3038',
          text: '#a7afb6',
        },
        error: '#d9534f',
        success: {
          DEFAULT: '#2f8a72',
          border: '#b9e9dc',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(36px, 5.6vw, 62px)', { lineHeight: '1.07', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['clamp(28px, 3.6vw, 40px)', { lineHeight: '1.18', fontWeight: '700' }],
        quote: ['clamp(22px, 3vw, 32px)', { lineHeight: '1.45' }],
      },
      boxShadow: {
        card: '0 22px 46px rgba(30, 50, 60, 0.10)',
        header: '0 6px 22px rgba(20, 30, 40, 0.10)',
        badge: '0 18px 40px rgba(45, 90, 80, 0.28)',
        form: '0 20px 50px rgba(30, 50, 60, 0.06)',
      },
      maxWidth: {
        shell: '1180px', // content max-width
      },
      screens: {
        desk: '981px', // single breakpoint: ≤980px swaps nav for hamburger
      },
    },
  },
  plugins: [],
};

export default config;
