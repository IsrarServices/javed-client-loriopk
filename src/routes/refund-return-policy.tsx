import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/refund-return-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Return Policy — Lorio.pk" },
      { name: "description", content: "Understand Lorio.pk's shipping guidelines, return conditions, refund processes, and order cancellation terms." },
      { property: "og:title", content: "Refund & Return Policy" },
      { property: "og:description", content: "Lorio.pk Refund, Return, and Shipping Policy." },
    ],
  }),
  component: RefundReturnPolicy,
});

function RefundReturnPolicy() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24 animate-fade-in">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand">Customer Support</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl text-foreground">Refund, Return & Shipping Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective Date: July 15, 2026</p>
        
        <div className="mt-12 space-y-10 text-foreground/90">
          <div className="prose-custom">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At <strong>Lorio.pk</strong>, we strive to deliver the highest quality natural skincare products to your doorstep. We want your shopping experience to be completely transparent and satisfying. Please review our shipping, cancellation, and refund policies below.
            </p>
          </div>

          <hr className="border-t border-border/60" />

          {/* Shipping Policy Section */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">1. Shipping & Delivery Policy</h2>
            <p className="leading-relaxed text-muted-foreground">
              We process and ship orders efficiently to ensure fresh batch delivery across Pakistan:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Order Processing Time:</strong> All orders are processed and prepared for shipping within <strong>1–2 business days</strong>. Orders placed on Sundays or gazetted public holidays will be processed on the next working day.
              </li>
              <li>
                <strong>Standard Delivery Timeframe:</strong> Once dispatched, standard shipping takes approximately <strong>3–5 working days</strong> to reach major cities, and up to 5-7 working days for remote regions.
              </li>
              <li>
                <strong>Unforeseen Delivery Delays:</strong> While we partner with top courier networks, transit delays may occasionally occur due to extreme weather conditions, public holiday closures, road blockages, or technical carrier issues. In such events, we will notify you and work to expedite delivery.
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">2. Payment Methods</h2>
            <p className="leading-relaxed text-muted-foreground">
              To accommodate our customers across Pakistan, we offer the following payment channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li><strong>Cash on Delivery (COD):</strong> Pay in cash to the courier representative upon receiving your package at your doorstep.</li>
              <li><strong>Digital Wallets:</strong> Secure transfers via EasyPaisa or JazzCash.</li>
              <li><strong>Direct Bank Transfer:</strong> Pre-payment through local online banking apps. Account details are provided during the checkout verification process.</li>
            </ul>
          </div>

          {/* Order Cancellation */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">3. Order Cancellation</h2>
            <p className="leading-relaxed text-muted-foreground">
              You may cancel your order at any time before it has been handed over to the courier partner:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Cancellation Window:</strong> To cancel, contact our WhatsApp helpline (+92 303 5864321) within <strong>4–6 hours</strong> of placing your order, or confirm cancellation when our customer service team contacts you for order verification.
              </li>
              <li>
                <strong>Post-Dispatch:</strong> Once an order is handed over to the courier and a tracking number is generated, the shipment cannot be cancelled.
              </li>
              <li>
                <strong>Delivery Rejection:</strong> Repeatedly refusing to accept Cash on Delivery (COD) shipments without valid reasoning may result in the restriction of your phone number and address from placing future orders on Lorio.pk.
              </li>
            </ul>
          </div>

          {/* Returns & Exchanges */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">4. Returns & Exchanges</h2>
            <p className="leading-relaxed text-muted-foreground">
              We want you to be delighted with your skincare purchase. We support return or exchange requests under the following guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Request Window:</strong> Customers must initiate return or exchange requests within <strong>7 days</strong> of receiving their package.
              </li>
              <li>
                <strong>Eligibility Criteria:</strong> The item must be completely unused, unopened, with all safety seals intact, and in its original, undamaged packaging.
              </li>
              <li>
                <strong>Hygiene & Safety Exception:</strong> Because our beauty soaps, milk, rose, honey, and jasmine skincare items are personal care products, <strong>any items with opened inner plastic wrapping, broken seals, or signs of use cannot be returned or exchanged</strong> due to strict hygiene and health safety regulations.
              </li>
            </ul>
          </div>

          {/* Refund Process */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">5. Refund Process</h2>
            <p className="leading-relaxed text-muted-foreground">
              Once we receive your returned package and inspect its eligibility:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Notification:</strong> We will notify you via SMS, WhatsApp, or Email regarding the approval or rejection of your return based on the product's condition.
              </li>
              <li>
                <strong>Approved Refunds:</strong> Approved returns will be refunded via <strong>Bank Transfer, EasyPaisa, or JazzCash</strong> within <strong>5–7 working days</strong> from the approval date.
              </li>
              <li>
                <strong>Return Shipping Costs:</strong> The customer is responsible for booking and paying return courier charges to ship the item back to our facility, unless the return is due to an error on our part (e.g., we delivered a damaged, defective, or incorrect product). In cases of Lorio.pk error, we will arrange replacement delivery or cover transit expenses.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
