import About from '@/components/About';
import Contact from '@/components/Contact';
import Differentiators from '@/components/Differentiators';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Quote from '@/components/Quote';
import ScrollReveal from '@/components/ScrollReveal';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';

export default function Page() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[70] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Services />
        <WhyUs />
        <Differentiators />
        <About />
        <Quote />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
