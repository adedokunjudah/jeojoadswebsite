import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-charcoal/10 bg-charcoal text-sand">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 18px, rgba(196,92,38,0.35) 18px, rgba(196,92,38,0.35) 19px)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Ibadan, Nigeria · Building materials supply
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Materials for sites that have to keep moving.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete sm:text-lg">
            {site.name} supplies contractors and builders in Ibadan with cement,
            steel, roofing, plumbing, and finishes—quoted clearly and delivered
            to yard or site.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-terracotta px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
            >
              Request a quote
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-sand/30 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
        <aside className="border border-sand/15 bg-sand/5 p-6 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-terracotta">
            Yard location
          </p>
          <p className="mt-3 font-heading text-2xl font-semibold">{site.location}</p>
          <p className="mt-2 text-sm leading-relaxed text-concrete">
            Serving building contractors, masons, and project teams across
            Ibadan and surrounding Oyo State sites.
          </p>
          <p className="mt-4 text-sm text-sand">{site.hours}</p>
        </aside>
      </div>
    </section>
  );
}
