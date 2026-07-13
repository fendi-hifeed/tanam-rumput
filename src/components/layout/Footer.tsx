import Link from "next/link";
import { site, nav } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream/80 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-display font-semibold text-cream text-lg mb-2">
              {site.shortName}
            </p>
            <p className="text-sm font-display text-cream/60 mb-4">
              {site.name}
            </p>
            <p className="text-sm leading-relaxed text-cream/70 max-w-xs">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/50 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/50 mb-4">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-cream/70 hover:text-cream transition-colors block mb-2"
            >
              {site.email}
            </a>
            <p className="text-sm text-cream/70">{site.place}</p>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            {site.legalEntity} &middot; Incorporated {site.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
