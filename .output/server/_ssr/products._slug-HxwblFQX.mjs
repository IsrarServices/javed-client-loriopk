import { i as getProduct } from "./cart-Bdzj7kz4.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-HxwblFQX.js
var $$splitErrorComponentImporter = () => import("./products._slug-Ci1WQVV6.mjs");
var $$splitNotFoundComponentImporter = () => import("./products._slug-C0sJh08Z.mjs");
var $$splitComponentImporter = () => import("./products._slug-Ct9vdT2Q.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.product.name} — Lorio` },
		{
			name: "description",
			content: loaderData.product.tagline
		},
		{
			property: "og:title",
			content: loaderData.product.name
		},
		{
			property: "og:description",
			content: loaderData.product.tagline
		},
		{
			property: "og:image",
			content: loaderData.product.image
		},
		{
			name: "twitter:image",
			content: loaderData.product.image
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
