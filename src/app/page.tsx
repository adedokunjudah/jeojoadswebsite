import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { site, valueProps, whatsappHref } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          Why contractors work with us
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          A supply partner for building work in Ibadan.
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {valueProps.map((item) => (
            <li key={item.title} className="border-l-2 border-terracotta pl-4">
              <h3 className="font-heading text-xl font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Featured materials
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
                What we keep on the yard.
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-terracotta underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              View all products
            </Link>
          </div>
          <ProductGrid featured />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            About {site.shortName}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Ibadan-based supply for serious building work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {site.name} is a building materials supplier serving contractors,
            builders, and project teams in Ibadan. We stock the core items a
            site needs—from cement and iron rods to roofing, plumbing, and
            finishes—so you can order from one yard instead of chasing traders.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
          >
            Read our story
          </Link>
        </div>
        <div className="bg-charcoal p-8 text-sand">
          <p className="font-heading text-2xl font-semibold leading-snug">
            Ready to price a job list?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-concrete">
            Send quantities, your site in Ibadan, and when you need delivery. We
            reply with a quote—no online checkout.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-terracotta px-5 py-3 text-sm font-semibold text-sand hover:bg-rust"
            >
              Request a quote
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-sand/25 px-5 py-3 text-sm font-semibold hover:border-terracotta hover:text-terracotta"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
