import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as CartProvider } from "./cart-pbamU8er.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$10 } from "./products._slug-aAdcUJR0.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D89hoX0T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-I8qLwtVB.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:brightness-110",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Please try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground hover:brightness-110",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lorio — 100% Natural Beauty Soap | Jasmine, Rose & Milk Almond" },
			{
				name: "description",
				content: "Lorio premium 100% natural beauty soaps — Jasmine Scent, Pink Rose Glow and Milk Almond & Honey. Order online across Pakistan on WhatsApp."
			},
			{
				name: "author",
				content: "Lorio"
			},
			{
				property: "og:title",
				content: "Lorio — 100% Natural Beauty Soap | Jasmine, Rose & Milk Almond"
			},
			{
				property: "og:description",
				content: "Lorio premium 100% natural beauty soaps — Jasmine Scent, Pink Rose Glow and Milk Almond & Honey. Order online across Pakistan on WhatsApp."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Lorio — 100% Natural Beauty Soap | Jasmine, Rose & Milk Almond"
			},
			{
				name: "twitter:description",
				content: "Lorio premium 100% natural beauty soaps — Jasmine Scent, Pink Rose Glow and Milk Almond & Honey. Order online across Pakistan on WhatsApp."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fd696701-e339-40f8-a69c-d188a2f66752/id-preview-d6699b89--f80d7b44-9f3e-4f5c-a4a0-f8efe48037e0.lovable.app-1783946120142.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fd696701-e339-40f8-a69c-d188a2f66752/id-preview-d6699b89--f80d7b44-9f3e-4f5c-a4a0-f8efe48037e0.lovable.app-1783946120142.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true
		})] })
	});
}
var $$splitComponentImporter$7 = () => import("./terms-conditions-D5wL27bu.mjs");
var Route$8 = createFileRoute("/terms-conditions")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions — Lorio.pk" },
		{
			name: "description",
			content: "Review Lorio.pk's terms of use, product limitations, customer responsibilities, intellectual property, and governing law."
		},
		{
			property: "og:title",
			content: "Terms & Conditions"
		},
		{
			property: "og:description",
			content: "Lorio.pk Terms & Conditions of use."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var BASE_URL = "";
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + [
		{
			path: "/",
			priority: "1.0"
		},
		{
			path: "/products",
			priority: "0.9"
		},
		{
			path: "/products/jasmine-scent",
			priority: "0.8"
		},
		{
			path: "/products/pink-rose-glow",
			priority: "0.8"
		},
		{
			path: "/products/milk-almond-honey",
			priority: "0.8"
		},
		{
			path: "/about",
			priority: "0.6"
		},
		{
			path: "/contact",
			priority: "0.6"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n") + `\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./refund-return-policy-CKndl5_r.mjs");
var Route$6 = createFileRoute("/refund-return-policy")({
	head: () => ({ meta: [
		{ title: "Refund & Return Policy — Lorio.pk" },
		{
			name: "description",
			content: "Understand Lorio.pk's shipping guidelines, return conditions, refund processes, and order cancellation terms."
		},
		{
			property: "og:title",
			content: "Refund & Return Policy"
		},
		{
			property: "og:description",
			content: "Lorio.pk Refund, Return, and Shipping Policy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-policy-CSZUnrQ5.mjs");
var Route$5 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — Lorio.pk" },
		{
			name: "description",
			content: "Learn how Lorio.pk collects, protects, and uses your personal information when you shop for our natural skincare products."
		},
		{
			property: "og:title",
			content: "Privacy Policy"
		},
		{
			property: "og:description",
			content: "Lorio.pk Privacy Policy and data protection terms."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-BHEE-Hkp.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Lorio — Get in Touch" },
		{
			name: "description",
			content: "Reach out to Lorio for orders, wholesale enquiries and support. WhatsApp, email or send us a message."
		},
		{
			property: "og:title",
			content: "Contact Lorio"
		},
		{
			property: "og:description",
			content: "Reach out for orders and support."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./cart-pOiSDycJ.mjs");
var Route$3 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Checkout — Lorio" }, {
		name: "description",
		content: "Review your Lorio order and checkout via WhatsApp."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-Bl69TuKK.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Lorio — Our Natural Skincare Story" },
		{
			name: "description",
			content: "Learn about Lorio's commitment to 100% natural, nourishing beauty soaps handcrafted in Pakistan."
		},
		{
			property: "og:title",
			content: "About Lorio"
		},
		{
			property: "og:description",
			content: "Our commitment to 100% natural beauty soaps."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-DKQIuCVl.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./products.index-DDeIsWZx.mjs");
var Route = createFileRoute("/products/")({
	head: () => ({ meta: [
		{ title: "Shop Lorio Soaps — Jasmine, Rose, Milk Almond & Honey" },
		{
			name: "description",
			content: "Browse all Lorio 100% natural beauty soaps and order online."
		},
		{
			property: "og:title",
			content: "Shop Lorio Soaps"
		},
		{
			property: "og:description",
			content: "Browse all Lorio 100% natural beauty soaps."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermsConditionsRoute = Route$8.update({
	id: "/terms-conditions",
	path: "/terms-conditions",
	getParentRoute: () => Route$9
});
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$9
});
var RefundReturnPolicyRoute = Route$6.update({
	id: "/refund-return-policy",
	path: "/refund-return-policy",
	getParentRoute: () => Route$9
});
var PrivacyPolicyRoute = Route$5.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var CartRoute = Route$3.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var ProductsIndexRoute = Route.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	ContactRoute,
	PrivacyPolicyRoute,
	RefundReturnPolicyRoute,
	SitemapDotxmlRoute,
	TermsConditionsRoute,
	ProductsSlugRoute: Route$10.update({
		id: "/products/$slug",
		path: "/products/$slug",
		getParentRoute: () => Route$9
	}),
	ProductsIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
