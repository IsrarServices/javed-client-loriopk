export type Product = {
  slug: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  accent: string;
  tagline: string;
  benefits: string[];
  description: string;
  isBundle?: boolean;
};

export const WHATSAPP_NUMBER = "923035864321";
export const BRAND = "Lorio";
export const CURRENCY = "PKR";

export const PRICE_PER_BAR = 150;
export const FAMILY_PACK_PRICE = 1200;

export const products: Product[] = [
  {
    slug: "jasmine-scent",
    name: "Lorio Jasmine Scent",
    variant: "Jasmine Scent",
    price: PRICE_PER_BAR,
    image: "/assets/lorio-jasmine.jpg",
    accent: "#7cc4e8",
    tagline: "Fresh floral cleanse with 100% natural jasmine.",
    benefits: ["100% Natural", "Nourishing", "Long-lasting fragrance"],
    description:
      "A delicate white bar infused with the fresh scent of blooming jasmine. Cleanses gently while nourishing skin for a soft, radiant finish.",
  },
  {
    slug: "pink-rose-glow",
    name: "Lorio Pink Rose Glow",
    variant: "Pink Rose Glow",
    price: PRICE_PER_BAR,
    image: "/assets/lorio-rose.jpg",
    accent: "#f4b6c9",
    tagline: "Moisturizing rose petals for a radiant glow.",
    benefits: ["100% Natural", "Moisturizing", "Radiant glow"],
    description:
      "Blush-pink bar packed with rose petal extracts. Locks in moisture while leaving skin dewy, soft and beautifully scented.",
  },
  {
    slug: "milk-almond-honey",
    name: "Lorio Milk Almond & Honey",
    variant: "Milk Almond & Honey",
    price: PRICE_PER_BAR,
    image: "/assets/lorio-almond.jpg",
    accent: "#e6c39a",
    tagline: "Smooth & radiant skin with milk, almond and honey.",
    benefits: ["100% Natural", "Smooth & Radiant Skin", "Deep nourishment"],
    description:
      "A creamy golden bar blending milk, almond oil and honey. Deeply nourishes for smooth, radiant, healthy-looking skin every day.",
  },
  {
    slug: "family-pack",
    name: "Lorio Family Pack",
    variant: "Family Pack · 3 Scents Bundle",
    price: FAMILY_PACK_PRICE,
    image: "/assets/lorio-family.jpg",
    accent: "#d9b382",
    tagline: "All three signature scents — the complete Lorio experience.",
    benefits: ["Jasmine + Rose + Milk Almond & Honey", "Best value bundle", "Perfect gift"],
    description:
      "The complete Lorio family — Jasmine Scent, Pink Rose Glow and Milk Almond & Honey together in one beautifully priced bundle. Ideal for gifting or stocking up.",
    isBundle: true,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
