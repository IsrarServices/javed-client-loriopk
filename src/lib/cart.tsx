import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

type CartItem = { slug: string; qty: number };
type CartCtx = {
  items: CartItem[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  detailed: (CartItem & { product: Product })[];
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lorio_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("lorio_cart", JSON.stringify(items));
  }, [items, hydrated]);

  const add: CartCtx["add"] = (slug, qty = 1) =>
    setItems((cur) => {
      const existing = cur.find((i) => i.slug === slug);
      if (existing) return cur.map((i) => (i.slug === slug ? { ...i, qty: i.qty + qty } : i));
      return [...cur, { slug, qty }];
    });
  const remove: CartCtx["remove"] = (slug) => setItems((cur) => cur.filter((i) => i.slug !== slug));
  const setQty: CartCtx["setQty"] = (slug, qty) =>
    setItems((cur) =>
      qty <= 0 ? cur.filter((i) => i.slug !== slug) : cur.map((i) => (i.slug === slug ? { ...i, qty } : i)),
    );
  const clear = () => setItems([]);

  const detailed = items
    .map((i) => {
      const product = products.find((p) => p.slug === i.slug);
      return product ? { ...i, product } : null;
    })
    .filter(Boolean) as (CartItem & { product: Product })[];

  const count = detailed.reduce((s, i) => s + i.qty, 0);
  const total = detailed.reduce((s, i) => s + i.qty * i.product.price, 0);

  return <Ctx.Provider value={{ items, add, remove, setQty, clear, count, total, detailed }}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
};
