import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-Bdzj7kz4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "923035864321";
var BRAND = "Lorio";
var products = [
	{
		slug: "renu-almond-extract",
		name: "Renu Almond Extract",
		variant: "Renu Almond Extract",
		price: 120,
		image: "/assets/Renu-Almond-Extract.jpeg",
		accent: "#c9975f",
		tagline: "Nourishing almond extract for soft, smooth skin.",
		benefits: [
			"100% Natural",
			"Nourishing",
			"Long-lasting fragrance"
		],
		description: "A rich almond-extract bar that deeply nourishes and softens. Gentle daily cleansing for smooth, supple skin."
	},
	{
		slug: "renu-jasmine-extract",
		name: "Renu Jasmine Extract",
		variant: "Renu Jasmine Extract",
		price: 120,
		image: "/assets/Renu-jasmine-extract.jpeg",
		accent: "#4f8fc0",
		tagline: "Fresh jasmine extract for a clean, floral glow.",
		benefits: [
			"100% Natural",
			"Nourishing",
			"Long-lasting fragrance"
		],
		description: "A delicate bar infused with jasmine extract. Cleanses gently while leaving skin fresh, soft and lightly scented."
	},
	{
		slug: "renu-rose-fresh",
		name: "Renu Rose Fresh",
		variant: "Renu Rose Fresh",
		price: 120,
		image: "/assets/Renu-Rose-Fresh.jpeg",
		accent: "#e0829e",
		tagline: "Rose petal freshness for a radiant, even tone.",
		benefits: [
			"100% Natural",
			"Nourishing",
			"Long-lasting fragrance"
		],
		description: "A refreshing rose bar that revives and brightens. Moisturizing rose petal care for a naturally radiant finish."
	},
	{
		slug: "renu-family-pack",
		name: "Renu Family Pack",
		variant: "Family Pack · 3 Scents Bundle",
		price: 360,
		image: "/assets/Renu-Family-Pack.jpeg",
		accent: "#d9b382",
		tagline: "All three Renu scents — the complete Renu experience.",
		benefits: [
			"100% Natural",
			"Nourishing",
			"Long-lasting fragrance"
		],
		description: "The complete Renu family — Almond Extract, Jasmine Extract and Rose Fresh together in one beautifully priced bundle. Ideal for gifting or stocking up.",
		isBundle: true
	},
	{
		slug: "jasmine-scent",
		name: "Lorio Jasmine Scent",
		variant: "Jasmine Scent",
		price: 150,
		image: "/assets/lorio-jasmine.jpg",
		accent: "#7cc4e8",
		tagline: "Fresh floral cleanse with 100% natural jasmine.",
		benefits: [
			"100% Natural",
			"Nourishing",
			"Long-lasting fragrance"
		],
		description: "A delicate white bar infused with the fresh scent of blooming jasmine. Cleanses gently while nourishing skin for a soft, radiant finish."
	},
	{
		slug: "pink-rose-glow",
		name: "Lorio Pink Rose Glow",
		variant: "Pink Rose Glow",
		price: 150,
		image: "/assets/lorio-rose.jpg",
		accent: "#f4b6c9",
		tagline: "Moisturizing rose petals for a radiant glow.",
		benefits: [
			"100% Natural",
			"Moisturizing",
			"Radiant glow"
		],
		description: "Blush-pink bar packed with rose petal extracts. Locks in moisture while leaving skin dewy, soft and beautifully scented."
	},
	{
		slug: "milk-almond-honey",
		name: "Lorio Milk Almond & Honey",
		variant: "Milk Almond & Honey",
		price: 150,
		image: "/assets/lorio-almond.jpg",
		accent: "#e6c39a",
		tagline: "Smooth & radiant skin with milk, almond and honey.",
		benefits: [
			"100% Natural",
			"Smooth & Radiant Skin",
			"Deep nourishment"
		],
		description: "A creamy golden bar blending milk, almond oil and honey. Deeply nourishes for smooth, radiant, healthy-looking skin every day."
	},
	{
		slug: "family-pack",
		name: "Lorio Family Pack",
		variant: "Family Pack · 3 Scents Bundle",
		price: 450,
		image: "/assets/lorio-family.jpg",
		accent: "#d9b382",
		tagline: "All three signature scents — the complete Lorio experience.",
		benefits: [
			"Jasmine + Rose + Milk Almond & Honey",
			"Best value bundle",
			"Perfect gift"
		],
		description: "The complete Lorio family — Jasmine Scent, Pink Rose Glow and Milk Almond & Honey together in one beautifully priced bundle. Ideal for gifting or stocking up.",
		isBundle: true
	}
];
var getProduct = (slug) => products.find((p) => p.slug === slug);
var Ctx = (0, import_react.createContext)(null);
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem("lorio_cart");
			if (raw) setItems(JSON.parse(raw));
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem("lorio_cart", JSON.stringify(items));
	}, [items, hydrated]);
	const add = (slug, qty = 1) => setItems((cur) => {
		if (cur.find((i) => i.slug === slug)) return cur.map((i) => i.slug === slug ? {
			...i,
			qty: i.qty + qty
		} : i);
		return [...cur, {
			slug,
			qty
		}];
	});
	const remove = (slug) => setItems((cur) => cur.filter((i) => i.slug !== slug));
	const setQty = (slug, qty) => setItems((cur) => qty <= 0 ? cur.filter((i) => i.slug !== slug) : cur.map((i) => i.slug === slug ? {
		...i,
		qty
	} : i));
	const clear = () => setItems([]);
	const detailed = items.map((i) => {
		const product = products.find((p) => p.slug === i.slug);
		return product ? {
			...i,
			product
		} : null;
	}).filter(Boolean);
	const count = detailed.reduce((s, i) => s + i.qty, 0);
	const total = detailed.reduce((s, i) => s + i.qty * i.product.price, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			items,
			add,
			remove,
			setQty,
			clear,
			count,
			total,
			detailed
		},
		children
	});
}
var useCart = () => {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useCart must be inside CartProvider");
	return c;
};
//#endregion
export { products as a, getProduct as i, CartProvider as n, useCart as o, WHATSAPP_NUMBER as r, BRAND as t };
