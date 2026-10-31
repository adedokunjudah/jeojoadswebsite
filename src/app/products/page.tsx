import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: `Building materials from ${site.name}: cement, steel, roofing, blocks, plumbing, and finishes in Ibadan.`,
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        Products
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
        Materials for contractors, quoted without a cart.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Browse the categories we supply in Ibadan. Each line is informational:
        tell us quantities and we prepare a quote. There is no online checkout.
      </p>
      <div className="mt-12">
        <ProductGrid />
      </div>
      <p className="mt-10 text-sm text-muted">
        Do not see an item?{" "}
        <Link
          href="/contact"
          className="font-semibold text-terracotta underline-offset-4 hover:underline"
        >
          Ask on the contact form
        </Link>{" "}
        and we will confirm whether we can source it.
      </p>
    </div>
  );
}
