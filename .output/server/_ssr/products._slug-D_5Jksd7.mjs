import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as products, o as useCart, r as WHATSAPP_NUMBER } from "./cart-pbamU8er.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Plus, o as ShoppingBag, u as Minus, v as Check } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as Button } from "./site-layout-BwmAO3Zt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./products._slug-CRnr3msu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-D_5Jksd7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { product } = Route.useLoaderData();
	const [qty, setQty] = (0, import_react.useState)(1);
	const { add } = useCart();
	const navigate = useNavigate();
	const handleAdd = () => {
		add(product.slug, qty);
		toast.success(`${product.name} added to cart`);
	};
	const handleBuy = () => {
		add(product.slug, qty);
		navigate({ to: "/cart" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-6 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-brand",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "hover:text-brand",
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: product.variant
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 md:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl",
					style: { background: `linear-gradient(160deg, ${product.accent}40, ${product.accent}10)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "aspect-square w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-brand",
						children: product.variant
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl text-foreground md:text-5xl",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-4xl text-brand",
							children: [
								"PKR",
								" ",
								product.price
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: "per bar · incl. tax"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2",
						children: product.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-foreground/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
							}), b]
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center rounded-full border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "flex h-11 w-11 items-center justify-center hover:bg-accent",
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										"aria-label": "Decrease quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-10 text-center font-medium",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "flex h-11 w-11 items-center justify-center hover:bg-accent",
										onClick: () => setQty((q) => q + 1),
										"aria-label": "Increase quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "brand",
								size: "lg",
								onClick: handleAdd,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), " Add to cart"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "brand-outline",
								size: "lg",
								onClick: handleBuy,
								children: "Buy now"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: [
							"Prefer WhatsApp?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-brand hover:underline",
								href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Lorio, I'd like to order ${qty} × ${product.name} (PKR ${product.price * qty}).`)}`,
								target: "_blank",
								rel: "noreferrer",
								children: "Order this on WhatsApp →"
							})
						]
					})
				] })]
			}),
			!product.isBundle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 overflow-hidden rounded-3xl border border-border/60 bg-secondary/40 p-6 md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-2 md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-3",
						children: [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square w-1/3 overflow-hidden rounded-2xl shadow-elegant",
							style: {
								background: `linear-gradient(160deg, ${product.accent}40, ${product.accent}10)`,
								transform: `translateY(${i === 1 ? "-12px" : "0"})`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.name,
								className: "h-full w-full object-cover"
							})
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-brand",
							children: "Stock up & save"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-2 font-display text-3xl md:text-4xl",
							children: ["Buy 3 × ", product.variant]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Love this scent? Grab three bars together — perfect for the whole family or to keep one in every bathroom."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 font-display text-3xl text-brand",
							children: [
								"PKR",
								" ",
								product.price * 3
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "brand",
							size: "lg",
							className: "mt-5",
							onClick: () => {
								add(product.slug, 3);
								toast.success(`3 × ${product.name} added to cart`);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), " Add 3-pack to cart"]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-6 md:grid-cols-2",
					children: products.filter((p) => p.slug !== product.slug && !p.isBundle).slice(0, 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] w-full",
							style: { background: `linear-gradient(160deg, ${p.accent}33, ${p.accent}0d)` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "h-full w-full object-cover transition-transform group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-sm text-brand",
								children: [
									"PKR",
									" ",
									p.price
								]
							})]
						})]
					}, p.slug))
				})]
			})
		]
	}) });
}
//#endregion
export { ProductDetail as component };
