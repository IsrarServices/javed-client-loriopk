import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/lib/cart";
import { CURRENCY, WHATSAPP_NUMBER } from "@/lib/products";
import { PAYMENT_METHODS, type PaymentMethod } from "@/lib/payment-methods";
import { Check, Minus, Plus, Trash2, Upload, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Checkout — Lorio" },
      { name: "description", content: "Review your Lorio order and checkout via WhatsApp." },
    ],
  }),
  component: CartPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Phone is required")
    .max(20)
    .regex(/^[+0-9\s-]+$/, "Invalid phone"),
  address: z.string().trim().min(5, "Address is required").max(300),
  city: z.string().trim().min(1, "City is required").max(60),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

const MAX_RECEIPT_BYTES = 5 * 1024 * 1024; // 5MB

function CartPage() {
  const { detailed, setQty, remove, total, clear, count } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentId, setPaymentId] = useState<PaymentMethod["id"]>(PAYMENT_METHODS[0].id);
  const [receipt, setReceipt] = useState<File | null>(null);
  const [receiptErr, setReceiptErr] = useState<string>("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [waHref, setWaHref] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const payment = PAYMENT_METHODS.find((p) => p.id === paymentId)!;

  if (count === 0) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h1 className="font-display text-4xl">Your cart is empty</h1>
          <p className="mt-3 text-muted-foreground">Explore our collection and add your favourite scents.</p>
          <Button asChild variant="brand" className="mt-6">
            <Link to="/products">Shop the collection</Link>
          </Button>
        </section>
      </SiteLayout>
    );
  }

  const onFile = (f: File | null) => {
    setReceiptErr("");
    if (!f) return setReceipt(null);
    if (!/^image\/|application\/pdf$/.test(f.type)) {
      setReceiptErr("Upload an image or PDF");
      return;
    }
    if (f.size > MAX_RECEIPT_BYTES) {
      setReceiptErr("File must be under 5MB");
      return;
    }
    setReceipt(f);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    const errs: Record<string, string> = {};
    if (!parsed.success) parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
    if (!receipt) setReceiptErr("Please upload your payment screenshot");
    if (Object.keys(errs).length || !receipt) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const lines = detailed
      .map((i) => `• ${i.qty} × ${i.product.name} — ${CURRENCY} ${i.qty * i.product.price}`)
      .join("\n");
    const msg =
      `*New Lorio Order*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*City:* ${form.city}\n` +
      `*Address:* ${form.address}\n` +
      (form.notes ? `*Notes:* ${form.notes}\n` : "") +
      `\n*Items:*\n${lines}\n\n` +
      `*Payment method:* ${payment.name}\n` +
      `*Paid to:* ${payment.accountTitle} — ${payment.accountNumber}\n` +
      `*Receipt:* ${receipt.name} (attached separately)\n\n` +
      `*Total:* ${CURRENCY} ${total}`;

    setWaHref(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setConfirmOpen(true);
  };

  const finishOnWhatsApp = () => {
    window.open(waHref, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — attach your receipt to complete.");
    clear();
    setConfirmOpen(false);
    setTimeout(() => navigate({ to: "/" }), 400);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-4xl md:text-5xl">Checkout</h1>
          <p className="text-muted-foreground">Review your order, pay online, and confirm on WhatsApp.</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          {/* LEFT: items + form + payment */}
          <div className="space-y-8">
            {/* Items */}
            <div className="rounded-2xl border border-border/60 bg-card p-5 md:p-6">
              <h2 className="font-display text-2xl">Your items</h2>
              <div className="mt-4 space-y-3">
                {detailed.map((i) => (
                  <div
                    key={i.slug}
                    className="flex flex-col gap-3 rounded-xl border border-border/60 p-3 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <div
                      className="h-24 w-24 shrink-0 overflow-hidden rounded-lg"
                      style={{ background: `linear-gradient(160deg, ${i.product.accent}33, ${i.product.accent}0d)` }}
                    >
                      <img src={i.product.image} alt={i.product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to="/products/$slug"
                            params={{ slug: i.slug }}
                            className="font-display text-lg hover:text-brand"
                          >
                            {i.product.name}
                          </Link>
                          <div className="text-xs text-muted-foreground">{i.product.variant}</div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {CURRENCY} {i.product.price} × {i.qty}
                          </div>
                        </div>
                        <button
                          onClick={() => remove(i.slug)}
                          className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-destructive"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center hover:bg-accent"
                            onClick={() => setQty(i.slug, i.qty - 1)}
                            aria-label="Decrease"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{i.qty}</span>
                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center hover:bg-accent"
                            onClick={() => setQty(i.slug, i.qty + 1)}
                            aria-label="Increase"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="font-semibold text-brand">
                          {CURRENCY} {i.qty * i.product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer form */}
            <form
              id="checkout-form"
              onSubmit={submit}
              className="rounded-2xl border border-border/60 bg-card p-5 md:p-6"
            >
              <h2 className="font-display text-2xl">Your details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field
                  id="name" label="Full name" value={form.name} error={errors.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                />
                <Field
                  id="phone" label="Phone / WhatsApp" value={form.phone} error={errors.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                />
                <Field
                  id="city" label="City" value={form.city} error={errors.city}
                  onChange={(v) => setForm((f) => ({ ...f, city: v }))}
                />
                <div className="sm:col-span-2">
                  <Label htmlFor="address">Delivery address</Label>
                  <Textarea
                    id="address" rows={2} maxLength={300}
                    value={form.address}
                    onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                  />
                  {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address}</p>}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="notes">Notes (optional)</Label>
                  <Textarea
                    id="notes" rows={2} maxLength={500}
                    value={form.notes}
                    onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  />
                </div>
              </div>

              {/* Payment methods */}
              <div className="mt-8">
                <h2 className="font-display text-2xl">Payment method</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pay online, then upload your receipt below.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {PAYMENT_METHODS.map((m) => {
                    const active = m.id === paymentId;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setPaymentId(m.id)}
                        className={cn(
                          "relative rounded-xl border p-4 text-left transition",
                          active
                            ? "border-brand bg-brand-soft/40 shadow-elegant"
                            : "border-border hover:border-brand/50 hover:bg-accent/40",
                        )}
                        aria-pressed={active}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{m.name}</span>
                          <span
                            className={cn(
                              "flex h-5 w-5 items-center justify-center rounded-full border",
                              active ? "border-brand bg-brand text-brand-foreground" : "border-border",
                            )}
                          >
                            {active && <Check className="h-3 w-3" />}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Tap to select</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-xl border border-border/60 bg-secondary/40 p-4 text-sm">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">
                    {payment.name} details
                  </div>
                  <div className="grid gap-1">
                    <Row label="Account title" value={payment.accountTitle} />
                    <Row label="Account number" value={payment.accountNumber} />
                    {payment.extra && (
                      <p className="mt-2 text-xs text-muted-foreground">{payment.extra}</p>
                    )}
                  </div>
                </div>

                {/* Receipt upload */}
                <div className="mt-5">
                  <Label htmlFor="receipt">Payment screenshot / receipt</Label>
                  <div
                    className={cn(
                      "mt-2 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition",
                      receipt ? "border-brand/60 bg-brand-soft/30" : "border-border hover:border-brand/40",
                    )}
                  >
                    <input
                      ref={fileRef}
                      id="receipt"
                      type="file"
                      accept="image/*,application/pdf"
                      className="hidden"
                      onChange={(e) => onFile(e.target.files?.[0] ?? null)}
                    />
                    {receipt ? (
                      <>
                        <Check className="h-6 w-6 text-brand" />
                        <div className="text-sm font-medium">{receipt.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {(receipt.size / 1024).toFixed(0)} KB · ready to send on WhatsApp
                        </div>
                        <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
                          Replace file
                        </Button>
                      </>
                    ) : (
                      <>
                        <Upload className="h-6 w-6 text-muted-foreground" />
                        <div className="text-sm font-medium">Upload payment screenshot</div>
                        <div className="text-xs text-muted-foreground">PNG, JPG or PDF · max 5MB</div>
                        <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
                          Choose file
                        </Button>
                      </>
                    )}
                  </div>
                  {receiptErr && <p className="mt-1 text-xs text-destructive">{receiptErr}</p>}
                  <p className="mt-2 text-xs text-muted-foreground">
                    Note: WhatsApp doesn't accept file attachments via link — please attach this same file in the
                    WhatsApp chat that opens next.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT: summary */}
          <aside className="h-fit rounded-2xl border border-border/60 bg-card p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-2xl">Order summary</h2>
            <div className="mt-4 space-y-3">
              {detailed.map((i) => (
                <div key={i.slug} className="flex items-center gap-3">
                  <div
                    className="h-14 w-14 shrink-0 overflow-hidden rounded-lg"
                    style={{ background: `linear-gradient(160deg, ${i.product.accent}33, ${i.product.accent}0d)` }}
                  >
                    <img src={i.product.image} alt={i.product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{i.product.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Qty {i.qty} · {CURRENCY} {i.product.price}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-brand">
                    {CURRENCY} {i.qty * i.product.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2 border-t border-border/60 pt-4 text-sm">
              <Row label="Items" value={`${count}`} />
              <Row label="Payment" value={payment.name} />
              <Row label="Delivery" value="Confirmed on WhatsApp" />
              <div className="flex items-center justify-between pt-3 text-base font-semibold">
                <span>Total</span>
                <span className="text-brand">{CURRENCY} {total}</span>
              </div>
            </div>

            <Button
              type="submit"
              form="checkout-form"
              variant="brand"
              size="lg"
              className="mt-6 w-full"
            >
              Place order
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              You'll confirm the final details on WhatsApp.
            </p>
          </aside>
        </div>
      </section>

      {/* Confirmation dialog */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft">
              <Check className="h-7 w-7 text-brand" />
            </div>
            <DialogTitle className="text-center font-display text-2xl">Order ready to send</DialogTitle>
            <DialogDescription className="text-center">
              Tap continue to open WhatsApp with your order details pre-filled. Please attach your payment
              screenshot in the chat.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 text-sm">
            <Row label="Name" value={form.name} />
            <Row label="Phone" value={form.phone} />
            <Row label="Payment" value={payment.name} />
            <div className="mt-2 flex items-center justify-between border-t border-border/60 pt-2 font-semibold">
              <span>Total</span>
              <span className="text-brand">{CURRENCY} {total}</span>
            </div>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button variant="brand" size="lg" className="w-full gap-2" onClick={finishOnWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              Continue on WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}

function Field({
  id, label, value, onChange, error,
}: { id: string; label: string; value: string; onChange: (v: string) => void; error?: string }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
