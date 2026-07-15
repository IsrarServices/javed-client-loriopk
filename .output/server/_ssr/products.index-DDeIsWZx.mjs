import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as products } from "./cart-pbamU8er.mjs";
import { n as SiteLayout } from "./site-layout-BxU1Cj0D.mjs";
import { t as ProductCard } from "./product-card-ChaGUL4C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-DDeIsWZx.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-brand",
					children: "Shop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl text-foreground md:text-6xl",
					children: "Our Collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Three carefully crafted variants — pick your favourite scent, or gift the trio."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 md:grid-cols-3",
			children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
		})]
	}) });
}
//#endregion
export { ProductsPage as component };
