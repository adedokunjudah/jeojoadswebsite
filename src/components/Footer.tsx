import Link from "next/link";
import { nav, site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-charcoal/10 bg-charcoal text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-semibold tracking-wide">
            {site.shortName}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-concrete">
            Global Enterprises
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-concrete">
            Building materials supply for contractors and builders in Ibadan,
            Nigeria.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Visit
          </p>
          <p className="mt-3 text-sm">{site.address}</p>
          <p className="mt-2 text-sm text-concrete">{site.hours}</p>
          <p className="mt-2 text-sm">
            <a
              className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              href={`tel:${site.phoneTel}`}
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Pages
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  className="hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="hover:text-terracotta"
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-concrete sm:px-6">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
