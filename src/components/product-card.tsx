import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { CURRENCY } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-elegant"
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${product.accent}33, ${product.accent}0d)` }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{product.variant}</div>
        <h3 className="mt-1 font-display text-xl text-foreground">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-brand">
            {CURRENCY} {product.price}
          </span>
          <span className="text-xs font-medium text-brand group-hover:underline">View details →</span>
        </div>
      </div>
    </Link>
  );
}
