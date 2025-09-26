import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* SVG Logo Here */}
            <span className="hidden font-bold sm:inline-block">Simple DS</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#" className="transition-colors hover:text-foreground/80 font-semibold text-foreground">
              Products
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Community
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Resources
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
