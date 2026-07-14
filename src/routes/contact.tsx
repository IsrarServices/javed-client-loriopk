import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WHATSAPP_NUMBER } from "@/lib/products";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lorio — Get in Touch" },
      { name: "description", content: "Reach out to Lorio for orders, wholesale enquiries and support. WhatsApp, email or send us a message." },
      { property: "og:title", content: "Contact Lorio" },
      { property: "og:description", content: "Reach out for orders and support." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Hello Lorio,%0A%0AName: ${encodeURIComponent(values.name)}%0AEmail: ${encodeURIComponent(
      values.email,
    )}%0A%0A${encodeURIComponent(values.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast.success("Opening WhatsApp — send the message to complete.");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">Get in touch</div>
            <h1 className="mt-2 font-display text-5xl md:text-6xl">We'd love to hear from you.</h1>
            <p className="mt-4 text-muted-foreground">
              Questions about products, wholesale, or your order? Send us a message and we'll reply on WhatsApp.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Phone className="h-4 w-4" />
                </span>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-brand">
                  +92 303 5864321 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:support@lorio.pk" className="hover:text-brand">support@lorio.pk</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                Pakistan
              </li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-border/60 bg-card p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  maxLength={100}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  maxLength={255}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  maxLength={1000}
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" variant="brand" size="lg" className="w-full">
                Send via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
