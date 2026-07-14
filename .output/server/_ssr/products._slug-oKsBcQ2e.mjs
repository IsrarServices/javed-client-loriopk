import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteLayout } from "./site-layout-BwmAO3Zt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-oKsBcQ2e.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-4 py-24 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl",
		children: "Something went wrong"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: reset,
		className: "mt-4 text-brand hover:underline",
		children: "Try again"
	})]
}) });
//#endregion
export { SplitErrorComponent as errorComponent };
