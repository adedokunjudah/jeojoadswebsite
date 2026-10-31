import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn how ${site.name} supplies building contractors and builders in Ibadan, Nigeria.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        About us
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
        Supplying the materials Ibadan building sites actually use.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {site.name} is a building materials supplying company based in Ibadan,
        Nigeria. We work with building contractors, masons, and project owners
        who need dependable stock—not a catalogue of items that never arrives.
      </p>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="border border-charcoal/10 bg-sand p-8">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">
            Who we serve
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Contractors running residential and commercial jobs, builders
            stocking a yard, and teams buying for a single pour or a full
            package. If you are building in Ibadan or nearby, we can quote the
            materials list.
          </p>
        </div>
        <div className="border border-charcoal/10 bg-sand p-8">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">
            What we supply
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Cement, steel and iron rods, roofing sheets, blocks and tiles,
            plumbing fittings, and paints and finishes. One conversation covers
            the core of a typical Nigerian building job.
          </p>
        </div>
      </section>

      <section className="mt-14 bg-charcoal px-6 py-10 text-sand sm:px-10">
        <h2 className="font-heading text-3xl font-semibold">
          Grounded in Ibadan
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-concrete">
          Being based in Ibadan means we understand local site timelines, the
          way contractors buy, and the need to get bags, rods, and sheets onto
          a truck without delay. We are here for builders who treat materials
          as part of the programme, not an afterthought.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          <li>
            <p className="text-xs uppercase tracking-[0.16em] text-terracotta">
              Location
            </p>
            <p className="mt-2 font-heading text-xl font-semibold">{site.location}</p>
          </li>
          <li>
            <p className="text-xs uppercase tracking-[0.16em] text-terracotta">
              Hours
            </p>
            <p className="mt-2 font-heading text-xl font-semibold">{site.hours}</p>
          </li>
          <li>
            <p className="text-xs uppercase tracking-[0.16em] text-terracotta">
              Contact
            </p>
            <p className="mt-2 font-heading text-xl font-semibold">{site.phoneDisplay}</p>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted">
        Need a quote for an upcoming job?{" "}
        <Link
          href="/contact"
          className="font-semibold text-terracotta underline-offset-4 hover:underline"
        >
          Request materials from the contact page
        </Link>
        .
      </p>
    </div>
  );
}
