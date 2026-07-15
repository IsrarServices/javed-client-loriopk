import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Lorio.pk" },
      { name: "description", content: "Review Lorio.pk's terms of use, product limitations, customer responsibilities, intellectual property, and governing law." },
      { property: "og:title", content: "Terms & Conditions" },
      { property: "og:description", content: "Lorio.pk Terms & Conditions of use." },
    ],
  }),
  component: TermsConditions,
});

function TermsConditions() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24 animate-fade-in">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand">Legal Policies</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl text-foreground">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective Date: July 15, 2026</p>
        
        <div className="mt-12 space-y-10 text-foreground/90">
          <div className="prose-custom">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Welcome to <strong>Lorio.pk</strong>. These Terms & Conditions govern your access to and use of our website, including any purchases made here. By accessing, browsing, or placing an order on this website, you acknowledge that you have read, understood, and agreed to be bound by these terms.
            </p>
          </div>

          <hr className="border-t border-border/60" />

          {/* Acceptable Website Use */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">1. Acceptable Website Use</h2>
            <p className="leading-relaxed text-muted-foreground">
              By using our website, you warrant and represent that:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Age Requirements:</strong> You are at least 18 years of age, or are accessing the website under the direct supervision of a parent or legal guardian.
              </li>
              <li>
                <strong>Lawful Usage:</strong> You will not use the website for any fraudulent, unauthorized, or illegal activities, including placing fake or mock orders.
              </li>
              <li>
                <strong>Technical Integrity:</strong> You will not attempt to disrupt the website's infrastructure, bypass security measures, inject malicious scripts, or run automated scraping tools to extract product details, prices, or customer reviews without our prior written consent.
              </li>
            </ul>
          </div>

          {/* Product Accuracy & Descriptions */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">2. Product Accuracy, Variations & Availability</h2>
            <p className="leading-relaxed text-muted-foreground">
              We strive to represent our catalog as accurately as possible:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Natural Ingredient Variations:</strong> Because Lorio soaps are crafted using 100% natural extracts (such as jasmine, rose, almond, milk, and honey), slight variations in color, texture, shape, and scent may occur between different production batches. These variations are normal and do not affect product quality.
              </li>
              <li>
                <strong>Display Differences:</strong> We make every effort to display product colors and images accurately. However, the exact colors you see depend on your device's screen calibration; we cannot guarantee that your monitor or phone display will exactly reflect the true product color.
              </li>
              <li>
                <strong>Pricing & Stock Adjustments:</strong> All prices and product availability are subject to change without prior notice. In the event that a product is listed at an incorrect price due to a system error, we reserve the right to cancel any orders placed for that product and issue a full refund if pre-paid.
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">3. Intellectual Property Rights</h2>
            <p className="leading-relaxed text-muted-foreground">
              All content featured on Lorio.pk—including but not limited to brand logos, trademarks, text, product descriptions, website layouts, custom graphics, source code, and professional product photography—is the exclusive property of Lorio Industry and is protected by copyright, trademark, and intellectual property laws of Pakistan. You may not reproduce, copy, distribute, or exploit any part of this website for commercial purposes without our express written permission.
            </p>
          </div>

          {/* Limitation of Liability & Customer Responsibility */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">4. Limitation of Liability & Customer Responsibility</h2>
            <p className="leading-relaxed text-muted-foreground">
              Your safety is important to us, and we encourage informed skincare practices:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Skin Sensitivity & Patch Testing:</strong> Although our soaps are formulated with natural ingredients, individual skin reactions may occur. We strongly advise performing a skin patch-test on a small area of your skin before using any Lorio product. Stop usage immediately if redness, irritation, or swelling occurs.
              </li>
              <li>
                <strong>Liability Cap:</strong> Lorio.pk shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or website. In no event shall our total financial liability to you exceed the actual invoice price paid for the specific product purchase in question.
              </li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">5. Governing Law & Jurisdiction</h2>
            <p className="leading-relaxed text-muted-foreground">
              These Terms & Conditions, along with any transactions conducted on Lorio.pk, shall be governed by, construed, and enforced in accordance with the laws of the Islamic Republic of Pakistan. Any legal disputes or claims arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts of Pakistan.
            </p>
          </div>

          {/* Termination & COD Abuse Policy */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-primary">6. Service Suspension & COD Abuse Policy</h2>
            <p className="leading-relaxed text-muted-foreground">
              We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion:
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Specifically, customers who repeatedly reject or fail to collect Cash on Delivery (COD) packages without a valid, pre-approved reason cause significant financial losses in double transit shipping fees. To protect our business, we reserve the right to blacklist phone numbers and shipping addresses that engage in systematic COD abuse, preventing them from ordering from us in the future.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
