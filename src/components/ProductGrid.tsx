import Link from "next/link";
import { products } from "@/lib/site";

type ProductGridProps = {
  featured?: boolean;
};

export function ProductGrid({ featured = false }: ProductGridProps) {
  const list = featured ? products.slice(0, 4) : products;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {list.map((product) => (
        <article
          key={product.slug}
          className="flex flex-col border border-charcoal/10 bg-sand p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Materials
          </p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-charcoal">
            {product.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {product.summary}
          </p>
          <ul className="mt-4 space-y-1 text-sm text-charcoal">
            {product.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-terracotta" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={`/contact?material=${encodeURIComponent(product.name)}`}
            className="mt-6 inline-flex text-sm font-semibold text-terracotta underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Request a quote for {product.name}
          </Link>
        </article>
      ))}
    </div>
  );
}
