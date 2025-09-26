import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
