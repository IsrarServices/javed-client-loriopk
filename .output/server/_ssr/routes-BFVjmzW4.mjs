import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as products, r as WHATSAPP_NUMBER } from "./cart-pbamU8er.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, h as Leaf, r as Truck, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as Button } from "./site-layout-BwmAO3Zt.mjs";
import { t as ProductCard } from "./product-card-ChaGUL4C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BFVjmzW4.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10",
				style: { background: "radial-gradient(1200px 500px at 80% -10%, oklch(0.9 0.08 30 / 0.55), transparent 60%), radial-gradient(900px 400px at 0% 30%, oklch(0.9 0.05 220 / 0.4), transparent 60%)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " 100% Natural"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl",
						children: ["Radiant skin, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-brand",
							children: "crafted by nature."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-base text-muted-foreground md:text-lg",
						children: "Discover Lorio's premium beauty soaps — infused with jasmine, rose petals, milk, almond and honey to nourish and glow every day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "brand",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								children: "Shop the collection"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "brand-outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${WHATSAPP_NUMBER}`,
								target: "_blank",
								rel: "noreferrer",
								children: "Order on WhatsApp"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4" }),
								label: "100% Natural"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }),
								label: "Dermatologist Safe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4" }),
								label: "Easypaisa & Bank Transfer"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/20 via-transparent to-gold/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/lorio-family.jpg",
						alt: "The Lorio soap family — Pink Rose Glow, Jasmine Scent and Milk Almond & Honey",
						className: "w-full rounded-[2rem] object-cover shadow-elegant"
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "products",
			className: "mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-brand",
					children: "Our Collection"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl text-foreground md:text-5xl",
					children: "Three scents. One glow."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					className: "hidden text-sm font-medium text-brand hover:underline md:inline",
					children: "View all →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/60 bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-brand",
						children: "Our Promise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl text-foreground md:text-5xl",
						children: "Skincare inspired by tradition, refined by science."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "Every Lorio bar is crafted with 100% natural ingredients — sourced with care, blended for balance, and designed to leave your skin feeling soft, smooth and radiant. No harsh chemicals. No compromises."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "brand",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "Read our story"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: products.slice(0, 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl",
						style: { background: `linear-gradient(160deg, ${p.accent}33, ${p.accent}0d)` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							className: "aspect-square w-full object-cover"
						})
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-brand p-10 text-brand-foreground md:p-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-30",
					style: { background: "radial-gradient(400px at 80% 20%, var(--gold), transparent 60%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-5xl",
							children: "Ready to glow?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl opacity-90",
							children: "Order your favourite Lorio bar directly through our checkout or send us a message on WhatsApp — we'll take care of the rest."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									children: "Shop now"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "brand-outline",
								className: "border-brand-foreground/60 text-brand-foreground hover:bg-brand-foreground/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${WHATSAPP_NUMBER}`,
									target: "_blank",
									rel: "noreferrer",
									children: "WhatsApp us"
								})
							})]
						})
					]
				})]
			})
		})
	] });
}
function Feature({ icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-foreground/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium",
			children: label
		})]
	});
}
//#endregion
export { Home as component };
