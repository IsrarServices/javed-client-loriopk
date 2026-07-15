import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Lorio.pk" },
      { name: "description", content: "Learn how Lorio.pk collects, protects, and uses your personal information when you shop for our natural skincare products." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "Lorio.pk Privacy Policy and data protection terms." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24 animate-fade-in">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand">Legal Policies</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective Date: July 15, 2026</p>
        
        <div className="mt-12 space-y-10 text-foreground/90">
          <div className="prose-custom">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Welcome to <strong>Lorio.pk</strong>. We deeply value your trust and are committed to protecting your personal data. This Privacy Policy details how we collect, use, store, and share your personal information when you visit, browse, or make a purchase from our website.
            </p>
          </div>

          <hr className="border-t border-border/60" />

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">1. Information We Collect</h2>
            <p className="leading-relaxed text-muted-foreground">
              To process your orders, deliver our handmade skincare products, and provide a personalized experience, we collect specific details when you interact with our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Personal Identifiers:</strong> Your name, billing address, physical shipping address for delivery, active email address, and telephone/WhatsApp number.
              </li>
              <li>
                <strong>Transaction & Order Details:</strong> Details of the items you view, add to your cart, or purchase, alongside your chosen payment preferences.
              </li>
              <li>
                <strong>Technical & Navigation Data:</strong> Your device's IP address, browser type, operating system version, referring URLs, pages viewed, and timestamps of your visits.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">2. How We Use Your Information</h2>
            <p className="leading-relaxed text-muted-foreground">
              We utilize your personal information for essential business purposes, ensuring you receive the highest standard of customer care:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Fulfilling Orders:</strong> Processing your cart transactions, preparing package invoices, and coordinating courier logistics.
              </li>
              <li>
                <strong>Customer Support & Delivery:</strong> Relaying tracking numbers and dispatch status updates via email, SMS, or WhatsApp. We may contact you to verify shipping addresses or order details.
              </li>
              <li>
                <strong>Improving Website Performance:</strong> Monitoring traffic analytics to speed up page response times, refine layouts, and enhance product discovery.
              </li>
              <li>
                <strong>Promotions & Updates:</strong> Sending occasional updates about new beauty soap releases, special discounts, or natural skincare tips (only if you have opted in, with the right to unsubscribe at any point).
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">3. Data Security</h2>
            <p className="leading-relaxed text-muted-foreground">
              The security of your personal data is a top priority. We implement appropriate technical, administrative, and physical security measures to safeguard your information from unauthorized access, modification, disclosure, or destruction. All transactions are handled over encrypted channels, and access to customer databases is strictly restricted to authorized staff members who require the information to perform their roles.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">4. Cookies & Tracking Technologies</h2>
            <p className="leading-relaxed text-muted-foreground">
              Our website uses cookies to improve website efficiency and track user interactions:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Essential Cookies:</strong> Critical files that allow the cart page to store chosen products while you navigate other sections of the site.
              </li>
              <li>
                <strong>Performance & Analytics:</strong> Cookies that track anonymous site usage statistics, helping us diagnose technical bugs and adapt design layouts.
              </li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              You can choose to disable cookies through your browser settings, though doing so might prevent certain checkout or navigation systems from working as intended.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">5. Third-Party Services</h2>
            <p className="leading-relaxed text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. We share data only with designated service providers who help us run our operations in Pakistan:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Logistics Partners:</strong> Trusted courier networks (such as Leopards, TCS, Trax, or Call Courier) to carry out the physical delivery of your order.
              </li>
              <li>
                <strong>Payment Gateways:</strong> Digital payment services (EasyPaisa, JazzCash, or bank transfer systems) used to verify transfers safely.
              </li>
              <li>
                <strong>Analytics Providers:</strong> Services that analyze traffic patterns to help us measure web performance.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">6. Your Rights & Choice</h2>
            <p className="leading-relaxed text-muted-foreground">
              We recognize your right to manage the personal data we store:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Access & Correction:</strong> You have the right to request a copy of the information we hold about you or request changes to outdated details (such as updated phone numbers or delivery addresses).
              </li>
              <li>
                <strong>Data Deletion:</strong> You can contact us to request the erasure of your personal data from our active order systems.
              </li>
              <li>
                <strong>Opt-Out:</strong> You may unsubscribe from marketing notifications at any time by replying "STOP" or clicking the unsubscribe options.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">7. Contact Information</h2>
            <p className="leading-relaxed text-muted-foreground">
              For any queries concerning this Privacy Policy, your stored data, or to execute your privacy rights, please reach out to our support desk:
            </p>
            <ul className="list-none space-y-2 pl-0 leading-relaxed text-muted-foreground">
              <li><strong>Email:</strong> <a href="mailto:support@lorio.pk" className="text-brand hover:underline">support@lorio.pk</a></li>
              <li><strong>WhatsApp Helpline:</strong> +92 303 5864321</li>
              <li><strong>Mailing Address:</strong> Lorio Industry, Pakistan</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
