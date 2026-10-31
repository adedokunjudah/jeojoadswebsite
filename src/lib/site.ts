export const site = {
  name: "JoeJoads Global Enterprises",
  shortName: "JoeJoads",
  tagline: "Building materials for contractors who cannot afford to wait.",
  description:
    "JoeJoads Global Enterprises supplies quality building materials to contractors, builders, and project teams across Ibadan, Nigeria.",
  location: "Ibadan, Oyo State, Nigeria",
  address: "Ibadan, Oyo State, Nigeria",
  hours: "Monday – Saturday, 8:00 AM – 6:00 PM",
  phoneDisplay: "+234 800 000 0000",
  phoneTel: "+2348000000000",
  email: "sales@joejoadsglobal.com",
  whatsappNumber: "2348000000000",
  whatsappMessage:
    "Hello JoeJoads, I would like a quote on building materials for a project in Ibadan.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

export const valueProps = [
  {
    title: "Quality stock on hand",
    body: "Cement, steel, roofing, and finishes sourced for site work—not leftover lots. Ask for what you need and we confirm availability.",
  },
  {
    title: "Built for contractors",
    body: "We supply builders, masons, and project teams who need reliable quantities, clear pricing, and materials that match the spec.",
  },
  {
    title: "Delivery you can plan around",
    body: "Based in Ibadan, we move materials to yards and active sites across the city so your crew is not standing idle.",
  },
  {
    title: "Straightforward quotes",
    body: "Tell us the job list. We respond with quantities, options, and a quote you can take to site without a shopping cart.",
  },
] as const;

export const products = [
  {
    slug: "cement",
    name: "Cement",
    summary:
      "Bagged cement for foundations, blocks, plaster, and structural work. Suitable for residential and commercial sites.",
    items: ["Ordinary Portland cement", "Bulk orders for site pours", "Consistent grade for block work"],
  },
  {
    slug: "steel",
    name: "Steel & iron rods",
    summary:
      "Reinforcement steel for columns, slabs, and beams. Cut and supplied to the sizes contractors actually use on site.",
    items: ["High-yield iron rods", "Binding wire", "Common bar sizes in stock"],
  },
  {
    slug: "roofing",
    name: "Roofing",
    summary:
      "Sheets and accessories for new roofs and replacements—durable covers that stand up to Ibadan weather.",
    items: ["Long-span roofing sheets", "Ridges and flashings", "Nails and roofing accessories"],
  },
  {
    slug: "blocks-tiles",
    name: "Blocks & tiles",
    summary:
      "Walling and finishing materials for masonry and floor work, from block courses to tiled interiors.",
    items: ["Blocks and sandcrete units", "Floor and wall tiles", "Tile adhesives and grout"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    summary:
      "Pipes, fittings, and sanitary supplies for wet areas, drainage, and water distribution on new builds.",
    items: ["PVC and pressure pipes", "Fittings and valves", "Taps and sanitary ware"],
  },
  {
    slug: "paints",
    name: "Paints & finishes",
    summary:
      "Coatings and finishing materials to close out interiors and exteriors once the structure is up.",
    items: ["Emulsion and gloss paints", "Primers and sealers", "Brushes and application supplies"],
  },
] as const;

export function whatsappHref() {
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function mailtoQuote(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
