import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteLayout } from "./site-layout-BxU1Cj0D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-C4lxKkQ7.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-4 py-24 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "Product not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/products",
		className: "mt-4 inline-block text-brand hover:underline",
		children: "Back to shop"
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
