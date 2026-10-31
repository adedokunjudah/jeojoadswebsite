import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a building materials quote from ${site.name} in Ibadan, Nigeria.`,
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(site.location);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        Contact
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
        Request a quote for your Ibadan site.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Share the materials list, phone number, and when you need delivery. We
        also take enquiries on WhatsApp and email.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Suspense
          fallback={
            <div className="border border-charcoal/10 bg-sand p-6 text-sm text-muted">
              Loading form…
            </div>
          }
        >
          <ContactForm />
        </Suspense>

        <aside className="space-y-6">
          <div className="border border-charcoal/10 bg-sand p-6">
            <h2 className="font-heading text-2xl font-semibold text-charcoal">
              Yard & reach
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-terracotta">
                  Address
                </dt>
                <dd className="mt-1 text-charcoal">{site.address}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-terracotta">
                  Hours
                </dt>
                <dd className="mt-1 text-charcoal">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-terracotta">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a className="text-charcoal underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-terracotta">
                  Email
                </dt>
                <dd className="mt-1">
                  <a className="text-charcoal underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0e6e62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="overflow-hidden border border-charcoal/10">
            <iframe
              title="Map of Ibadan, Nigeria"
              className="h-64 w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${mapsQuery}&z=12&output=embed`}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
