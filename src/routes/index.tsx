import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products, WHATSAPP_NUMBER } from "@/lib/products";
import { Leaf, Sparkles, ShieldCheck, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 500px at 80% -10%, oklch(0.9 0.08 30 / 0.55), transparent 60%), radial-gradient(900px 400px at 0% 30%, oklch(0.9 0.05 220 / 0.4), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 md:px-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand">
              <Sparkles className="h-3.5 w-3.5" /> 100% Natural
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Radiant skin, <span className="italic text-brand">crafted by nature.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Discover Lorio's premium beauty soaps — infused with jasmine, rose petals, milk, almond and honey to
              nourish and glow every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/products">Shop the collection</Link>
              </Button>
              <Button asChild variant="brand-outline" size="lg">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6 text-sm">
              <Feature icon={<Leaf className="h-4 w-4" />} label="100% Natural" />
              <Feature icon={<ShieldCheck className="h-4 w-4" />} label="Dermatologist Safe" />
              <Feature icon={<Truck className="h-4 w-4" />} label="Easypaisa & Bank Transfer" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/20 via-transparent to-gold/20 blur-2xl" />
            <img
              src="/assets/lorio-family.jpg"
              alt="The Lorio soap family — Pink Rose Glow, Jasmine Scent and Milk Almond & Honey"
              className="w-full rounded-[2rem] object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">Our Collection</div>
            <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">Three scents. One glow.</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-medium text-brand hover:underline md:inline">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">Our Promise</div>
            <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
              Skincare inspired by tradition, refined by science.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every Lorio bar is crafted with 100% natural ingredients — sourced with care, blended for balance, and
              designed to leave your skin feeling soft, smooth and radiant. No harsh chemicals. No compromises.
            </p>
            <Button asChild variant="brand" className="mt-6">
              <Link to="/about">Read our story</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 2).map((p) => (
              <div
                key={p.slug}
                className="overflow-hidden rounded-2xl"
                style={{ background: `linear-gradient(160deg, ${p.accent}33, ${p.accent}0d)` }}
              >
                <img src={p.image} alt={p.name} className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-10 text-brand-foreground md:p-16">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(400px at 80% 20%, var(--gold), transparent 60%)" }} />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl">Ready to glow?</h2>
            <p className="mt-3 max-w-xl opacity-90">
              Order your favourite Lorio bar directly through our checkout or send us a message on WhatsApp — we'll
              take care of the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/products">Shop now</Link>
              </Button>
              <Button asChild size="lg" variant="brand-outline" className="border-brand-foreground/60 text-brand-foreground hover:bg-brand-foreground/10">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-foreground/80">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
