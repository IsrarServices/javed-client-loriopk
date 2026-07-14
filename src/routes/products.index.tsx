import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Shop Lorio Soaps — Jasmine, Rose, Milk Almond & Honey" },
      { name: "description", content: "Browse all Lorio 100% natural beauty soaps and order online." },
      { property: "og:title", content: "Shop Lorio Soaps" },
      { property: "og:description", content: "Browse all Lorio 100% natural beauty soaps." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">Shop</div>
          <h1 className="mt-2 font-display text-5xl text-foreground md:text-6xl">Our Collection</h1>
          <p className="mt-4 text-muted-foreground">
            Three carefully crafted variants — pick your favourite scent, or gift the trio.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
