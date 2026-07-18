import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Value Track — Build the Value of Your Business. Sell It Right.',
  description:
    'Build the value of your business before you sell — then sell it right and get the return you deserve for your life’s work. Value building, exit planning, business valuation, and business sales in Metro Atlanta, Georgia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="bg-white font-sans text-body antialiased">{children}</body>
    </html>
  );
}
