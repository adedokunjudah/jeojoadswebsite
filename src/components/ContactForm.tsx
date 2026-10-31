"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { mailtoQuote, products, site } from "@/lib/site";

const materialOptions = ["General enquiry", ...products.map((item) => item.name)];

export function ContactForm() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("material") ?? "General enquiry";
  const initialMaterial = materialOptions.includes(preset)
    ? preset
    : "General enquiry";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [material, setMaterial] = useState(initialMaterial);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const mailHref = useMemo(() => {
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Materials: ${material}`,
      "",
      message,
    ].join("\n");
    return mailtoQuote(`Quote request — ${material}`, body);
  }, [material, message, name, phone]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailHref;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="border border-charcoal/10 bg-sand p-6"
        role="status"
      >
        <p className="font-heading text-2xl font-semibold text-charcoal">
          Your email app should open next.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          If nothing opened, send the same details to{" "}
          <a className="font-medium text-terracotta underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or continue on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 border border-charcoal/10 bg-sand p-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1.5 w-full rounded-sm border border-charcoal/20 bg-background px-3 py-2.5 text-charcoal outline-none focus-visible:border-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="mt-1.5 w-full rounded-sm border border-charcoal/20 bg-background px-3 py-2.5 text-charcoal outline-none focus-visible:border-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30"
        />
      </div>
      <div>
        <label htmlFor="materials" className="block text-sm font-medium text-charcoal">
          Materials needed
        </label>
        <select
          id="materials"
          name="materials"
          value={material}
          onChange={(event) => setMaterial(event.target.value)}
          className="mt-1.5 w-full rounded-sm border border-charcoal/20 bg-background px-3 py-2.5 text-charcoal outline-none focus-visible:border-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30"
        >
          {materialOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Quantities, site location in Ibadan, and when you need delivery."
          className="mt-1.5 w-full rounded-sm border border-charcoal/20 bg-background px-3 py-2.5 text-charcoal outline-none placeholder:text-muted/70 focus-visible:border-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30"
        />
      </div>
      <button
        type="submit"
        className="rounded-sm bg-terracotta px-5 py-3 text-sm font-semibold text-sand transition-colors hover:bg-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        Send quote request
      </button>
    </form>
  );
}
