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
export const RENU_PRICE_PER_BAR = 120;

export const products: Product[] = [
  {
    slug: "renu-almond-extract",
    name: "Renu Almond Extract",
    variant: "Renu Almond Extract",
    price: RENU_PRICE_PER_BAR,
    image: "/assets/Renu-Almond-Extract.jpeg",
    accent: "#c9975f",
    tagline: "Nourishing almond extract for soft, smooth skin.",
    benefits: ["100% Natural", "Nourishing", "Long-lasting fragrance"],
    description:
      "A rich almond-extract bar that deeply nourishes and softens. Gentle daily cleansing for smooth, supple skin.",
  },
  {
    slug: "renu-jasmine-extract",
    name: "Renu Jasmine Extract",
    variant: "Renu Jasmine Extract",
    price: RENU_PRICE_PER_BAR,
    image: "/assets/Renu-jasmine-extract.jpeg",
    accent: "#4f8fc0",
    tagline: "Fresh jasmine extract for a clean, floral glow.",
    benefits: ["100% Natural", "Nourishing", "Long-lasting fragrance"],
    description:
      "A delicate bar infused with jasmine extract. Cleanses gently while leaving skin fresh, soft and lightly scented.",
  },
  {
    slug: "renu-rose-fresh",
    name: "Renu Rose Fresh",
    variant: "Renu Rose Fresh",
    price: RENU_PRICE_PER_BAR,
    image: "/assets/Renu-Rose-Fresh.jpeg",
    accent: "#e0829e",
    tagline: "Rose petal freshness for a radiant, even tone.",
    benefits: ["100% Natural", "Nourishing", "Long-lasting fragrance"],
    description:
      "A refreshing rose bar that revives and brightens. Moisturizing rose petal care for a naturally radiant finish.",
  },
  {
    slug: "renu-family-pack",
    name: "Renu Family Pack",
    variant: "Family Pack · 3 Scents Bundle",
    price: RENU_PRICE_PER_BAR * 3,
    image: "/assets/Renu-Family-Pack.jpeg",
    accent: "#d9b382",
    tagline: "All three Renu scents — the complete Renu experience.",
    benefits: ["100% Natural", "Nourishing", "Long-lasting fragrance"],
    description:
      "The complete Renu family — Almond Extract, Jasmine Extract and Rose Fresh together in one beautifully priced bundle. Ideal for gifting or stocking up.",
    isBundle: true,
  },
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
    price: PRICE_PER_BAR * 3,
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
