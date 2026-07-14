import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { getProduct, products, CURRENCY, WHATSAPP_NUMBER } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Lorio` },
          { name: "description", content: loaderData.product.tagline },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:image", content: loaderData.product.image },
          { name: "twitter:image", content: loaderData.product.image },
        ]
      : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-brand hover:underline">
          Back to shop
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <button onClick={reset} className="mt-4 text-brand hover:underline">Try again</button>
      </div>
    </SiteLayout>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    add(product.slug, qty);
    toast.success(`${product.name} added to cart`);
  };
  const handleBuy = () => {
    add(product.slug, qty);
    navigate({ to: "/cart" });
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-brand">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-brand">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.variant}</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div
            className="overflow-hidden rounded-3xl"
            style={{ background: `linear-gradient(160deg, ${product.accent}40, ${product.accent}10)` }}
          >
            <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">{product.variant}</div>
            <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">{product.name}</h1>
            <p className="mt-4 text-muted-foreground">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <div className="font-display text-4xl text-brand">
                {CURRENCY} {product.price}
              </div>
              <div className="text-sm text-muted-foreground">per bar · incl. tax</div>
            </div>

            <ul className="mt-6 space-y-2">
              {product.benefits.map((b: string) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-border">
                <button
                  className="flex h-11 w-11 items-center justify-center hover:bg-accent"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-medium">{qty}</span>
                <button
                  className="flex h-11 w-11 items-center justify-center hover:bg-accent"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button variant="brand" size="lg" onClick={handleAdd}>
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </Button>
              <Button variant="brand-outline" size="lg" onClick={handleBuy}>
                Buy now
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Prefer WhatsApp?{" "}
              <a
                className="text-brand hover:underline"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hi Lorio, I'd like to order ${qty} × ${product.name} (${CURRENCY} ${product.price * qty}).`,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Order this on WhatsApp →
              </a>
            </p>
          </div>
        </div>

        {!product.isBundle && (
          <div className="mt-20 overflow-hidden rounded-3xl border border-border/60 bg-secondary/40 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="flex items-center justify-center gap-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-square w-1/3 overflow-hidden rounded-2xl shadow-elegant"
                    style={{
                      background: `linear-gradient(160deg, ${product.accent}40, ${product.accent}10)`,
                      transform: `translateY(${i === 1 ? "-12px" : "0"})`,
                    }}
                  >
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">Stock up & save</div>
                <h2 className="mt-2 font-display text-3xl md:text-4xl">Buy 3 × {product.variant}</h2>
                <p className="mt-3 text-muted-foreground">
                  Love this scent? Grab three bars together — perfect for the whole family or to keep one in every bathroom.
                </p>
                <div className="mt-4 font-display text-3xl text-brand">
                  {CURRENCY} {product.price * 3}
                </div>
                <Button
                  variant="brand"
                  size="lg"
                  className="mt-5"
                  onClick={() => {
                    add(product.slug, 3);
                    toast.success(`3 × ${product.name} added to cart`);
                  }}
                >
                  <ShoppingBag className="h-4 w-4" /> Add 3-pack to cart
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20">
          <h2 className="font-display text-3xl">You may also like</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {products
              .filter((p) => p.slug !== product.slug && !p.isBundle)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div
                    className="aspect-[4/3] w-full"
                    style={{ background: `linear-gradient(160deg, ${p.accent}33, ${p.accent}0d)` }}
                  >
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="font-display text-lg">{p.name}</div>
                    <div className="mt-1 text-sm text-brand">{CURRENCY} {p.price}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
