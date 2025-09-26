import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <section className="container text-center py-40">
  <div className="space-y-6 max-w-4xl mx-auto">
    <main className="text-5xl md:text-7xl font-bold">
      <h1 className="leading-[1.2] tracking-[-0.03em]">
        A design system for your website
      </h1>
    </main>

    <p className="text-[32px] leading-[1.2] text-muted-foreground md:w-10/12 mx-auto">
      A customizable and reusable design system that can be used to build your
      next project.
    </p>

    <div className="space-y-4 md:space-y-0 md:space-x-4">
      <Button>Get started</Button>
      <Button variant="outline">Learn more</Button>
    </div>
  </div>
  <div className="mt-12">
    <Image
      src="/hero-image.png"
      width={1024}
      height={576}
      alt="Hero Image"
      className="w-full rounded-lg shadow-lg"
      priority
    />
  </div>
    </section>
  );
};
