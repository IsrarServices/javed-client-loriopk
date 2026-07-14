import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lorio — Our Natural Skincare Story" },
      { name: "description", content: "Learn about Lorio's commitment to 100% natural, nourishing beauty soaps handcrafted in Pakistan." },
      { property: "og:title", content: "About Lorio" },
      { property: "og:description", content: "Our commitment to 100% natural beauty soaps." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand">Our Story</div>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Beauty, the natural way.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Lorio was born from a simple belief: your daily skincare should be as pure as the ingredients that inspire
          it. We craft premium beauty soaps using 100% natural extracts — jasmine, rose, milk, almond and honey —
          bringing time-honoured traditions into every bar.
        </p>
        <img src="/assets/lorio-family.jpg" alt="Lorio product family" className="mt-10 w-full rounded-3xl object-cover shadow-elegant" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { t: "100% Natural", d: "Only pure, plant-based ingredients — no harsh chemicals, ever." },
            { t: "Nourishing", d: "Formulated to moisturise, protect and reveal glowing skin." },
            { t: "Made with love", d: "Every bar is quality-checked to meet our promise of purity." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="font-display text-xl text-brand">{v.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
