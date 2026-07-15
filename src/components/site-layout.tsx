import { Link, useRouter } from "@tanstack/react-router";
import { ShoppingBag, Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { useState, type ReactNode } from "react";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/share/1PvQPCLB7q/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/lorio_industry.pk?igsh=M3BrOWl5eTNhbWIw", icon: Instagram },
  {
    name: "TikTok",
    href: "https://tiktok.com/@loriorenu2",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden="true">
        <path d="M19.6 6.9a5.6 5.6 0 0 1-3.3-1.1 5.6 5.6 0 0 1-2.2-3.6h-3.3v13.1a2.7 2.7 0 1 1-2-2.6v-3.3a6 6 0 1 0 5.3 5.9V9.9a8.8 8.8 0 0 0 5.5 1.9V8.5a5.6 5.6 0 0 1 0-1.6z" />
      </svg>
    ),
  },
] as const;
import { useCart } from "@/lib/cart";
import { BRAND, WHATSAPP_NUMBER } from "@/lib/products";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = router.state.location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-tight text-brand">{BRAND}</span>
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
              Pure Care
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm transition-colors hover:text-brand ${
                  path === n.to ? "text-brand font-medium" : "text-foreground/80"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/cart" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-accent">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-semibold text-brand-foreground">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-accent md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm ${
                    path === n.to ? "bg-accent text-brand font-medium" : "text-foreground/80"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-5 md:px-6">
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-brand">{BRAND}</div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Premium 100% natural beauty soaps crafted for radiant, nourished skin — enjoyed by families across
              Pakistan.
            </p>
            <div className="mt-5 flex gap-3">
              <Button asChild variant="brand" size="sm">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Follow us</div>
              <div className="mt-3 flex gap-3">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background text-foreground/80 transition-colors hover:border-brand hover:text-brand"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-brand">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/cart" className="hover:text-brand">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Legal</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="hover:text-brand">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-return-policy" className="hover:text-brand">
                  Refund & Return Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-brand">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-brand" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-brand">
                  +92 303 5864321
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-brand" />
                <a href="mailto:support@lorio.pk" className="hover:text-brand">
                  support@lorio.pk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
