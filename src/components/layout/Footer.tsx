import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 pt-8 pb-40">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* SVG Logo Here */}
            <span className="font-bold">Simple DS</span>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">
            A design system for your website.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Integrations</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Changelog</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Community</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">API Docs</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Status</Link></li>
          </ul>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Simple Design System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
