import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useCart, r as WHATSAPP_NUMBER, t as BRAND } from "./cart-pbamU8er.mjs";
import { _ as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { _ as Facebook, f as Menu, g as Instagram, l as Phone, m as Mail, o as ShoppingBag, p as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-BxU1Cj0D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			brand: "bg-brand text-brand-foreground shadow-elegant hover:brightness-110 hover:shadow-glow transition-all",
			"brand-outline": "border border-brand/40 text-brand bg-transparent hover:bg-brand/10"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var SOCIALS = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/share/1PvQPCLB7q/",
		icon: Facebook
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/lorio_industry.pk?igsh=M3BrOWl5eTNhbWIw",
		icon: Instagram
	},
	{
		name: "TikTok",
		href: "https://tiktok.com/@loriorenu2",
		icon: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: props.className,
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.6 6.9a5.6 5.6 0 0 1-3.3-1.1 5.6 5.6 0 0 1-2.2-3.6h-3.3v13.1a2.7 2.7 0 1 1-2-2.6v-3.3a6 6 0 1 0 5.3 5.9V9.9a8.8 8.8 0 0 0 5.5 1.9V8.5a5.6 5.6 0 0 1 0-1.6z" })
		})
	}
];
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteLayout({ children }) {
	const { count } = useCart();
	const [open, setOpen] = (0, import_react.useState)(false);
	const path = useRouter().state.location.pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-tight text-brand",
								children: BRAND
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline",
								children: "Pure Care"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 md:flex",
							children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								className: `text-sm transition-colors hover:text-brand ${path === n.to ? "text-brand font-medium" : "text-foreground/80"}`,
								children: n.label
							}, n.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-semibold text-brand-foreground",
									children: count
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-accent md:hidden",
								onClick: () => setOpen((v) => !v),
								"aria-label": "Toggle menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/60 bg-background md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex max-w-6xl flex-col px-4 py-3",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: () => setOpen(false),
							className: `rounded-md px-3 py-3 text-sm ${path === n.to ? "bg-accent text-brand font-medium" : "text-foreground/80"}`,
							children: n.label
						}, n.to))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-24 border-t border-border/60 bg-secondary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-5 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-3xl text-brand",
									children: BRAND
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-sm text-sm text-muted-foreground",
									children: "Premium 100% natural beauty soaps crafted for radiant, nourished skin — enjoyed by families across Pakistan."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "brand",
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://wa.me/${WHATSAPP_NUMBER}`,
											target: "_blank",
											rel: "noreferrer",
											children: "Order on WhatsApp"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold uppercase tracking-widest text-foreground",
										children: "Follow us"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex gap-3",
										children: SOCIALS.map((s) => {
											const Icon = s.icon;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: s.href,
												target: "_blank",
												rel: "noreferrer",
												"aria-label": s.name,
												className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background text-foreground/80 transition-colors hover:border-brand hover:text-brand",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
											}, s.name);
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-foreground",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								className: "hover:text-brand",
								children: n.label
							}) }, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								className: "hover:text-brand",
								children: "Cart"
							}) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-foreground",
							children: "Legal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy-policy",
									className: "hover:text-brand",
									children: "Privacy Policy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/refund-return-policy",
									className: "hover:text-brand",
									children: "Refund & Return Policy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms-conditions",
									className: "hover:text-brand",
									children: "Terms & Conditions"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-foreground",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `https://wa.me/${WHATSAPP_NUMBER}`,
										className: "hover:text-brand",
										children: "+92 303 5864321"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:support@lorio.pk",
										className: "hover:text-brand",
										children: "support@lorio.pk"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pakistan" })]
								})
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/60 py-5 text-center text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						BRAND,
						". All rights reserved."
					]
				})]
			})
		]
	});
}
//#endregion
export { SiteLayout as n, cn as r, Button as t };
