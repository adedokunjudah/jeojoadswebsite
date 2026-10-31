"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-sand/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center bg-charcoal font-heading text-sm font-bold tracking-wide text-sand"
          >
            JJ
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-semibold tracking-wide text-charcoal sm:text-xl">
              JoeJoads
            </span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">
              Global Enterprises
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                  active
                    ? "text-terracotta"
                    : "text-charcoal hover:text-terracotta"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-sm bg-terracotta px-4 py-2 text-sm font-semibold text-sand transition-colors hover:bg-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:inline-flex"
          >
            Request a quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-charcoal/20 text-charcoal md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-charcoal/10 bg-sand px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-3 text-base font-medium text-charcoal hover:bg-concrete/40 hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-sm bg-terracotta px-3 py-3 text-center text-sm font-semibold text-sand hover:bg-rust"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
            <p className="px-2 pt-3 text-xs text-muted">{site.location}</p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
