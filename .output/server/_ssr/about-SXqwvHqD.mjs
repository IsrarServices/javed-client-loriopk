import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteLayout } from "./site-layout-BwmAO3Zt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-SXqwvHqD.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-4xl px-4 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-widest text-brand",
				children: "Our Story"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl md:text-6xl",
				children: "Beauty, the natural way."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-muted-foreground",
				children: "Lorio was born from a simple belief: your daily skincare should be as pure as the ingredients that inspire it. We craft premium beauty soaps using 100% natural extracts — jasmine, rose, milk, almond and honey — bringing time-honoured traditions into every bar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/assets/lorio-family.jpg",
				alt: "Lorio product family",
				className: "mt-10 w-full rounded-3xl object-cover shadow-elegant"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-3",
				children: [
					{
						t: "100% Natural",
						d: "Only pure, plant-based ingredients — no harsh chemicals, ever."
					},
					{
						t: "Nourishing",
						d: "Formulated to moisturise, protect and reveal glowing skin."
					},
					{
						t: "Made with love",
						d: "Every bar is quality-checked to meet our promise of purity."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl text-brand",
						children: v.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: v.d
					})]
				}, v.t))
			})
		]
	}) });
}
//#endregion
export { About as component };
