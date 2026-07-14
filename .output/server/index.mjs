globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-14T13:09:58.853Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-14T13:09:58.903Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/about-CIoxLulm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f3-x8h8+AGrWfqVutNcUqS0Hf3hysM\"",
		"mtime": "2026-07-14T16:49:49.880Z",
		"size": 1523,
		"path": "../public/assets/about-CIoxLulm.js"
	},
	"/assets/cart-BfQf1CNt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2dc-Rsvlkh+R9nuD6ihq5+dbRQrpuNY\"",
		"mtime": "2026-07-14T16:49:49.881Z",
		"size": 45788,
		"path": "../public/assets/cart-BfQf1CNt.js"
	},
	"/assets/contact-BHHaoM9K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e19-kthUKOJmu7wMl4EeEeEy3U6M+D0\"",
		"mtime": "2026-07-14T16:49:49.882Z",
		"size": 3609,
		"path": "../public/assets/contact-BHHaoM9K.js"
	},
	"/assets/lorio-almond.jpg": {
		"type": "image/jpeg",
		"etag": "\"29f61-+4FAeX9FUUCPEFCzD1Zzy1eBUog\"",
		"mtime": "2026-07-14T13:37:54.774Z",
		"size": 171873,
		"path": "../public/assets/lorio-almond.jpg"
	},
	"/assets/lorio-jasmine.jpg": {
		"type": "image/jpeg",
		"etag": "\"3320f-Nb8XYmF/3ZZQGEn8FvmscBVMmCI\"",
		"mtime": "2026-07-14T13:37:54.771Z",
		"size": 209423,
		"path": "../public/assets/lorio-jasmine.jpg"
	},
	"/assets/lorio-family.jpg": {
		"type": "image/jpeg",
		"etag": "\"30cc8-tGsaloo8c5k+u5KCT3ZQF5Q+dWE\"",
		"mtime": "2026-07-14T13:37:54.780Z",
		"size": 199880,
		"path": "../public/assets/lorio-family.jpg"
	},
	"/assets/index-MQrpzWXf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5dade-R/QI7HVbXAvsNhuZD0gDW2ZwpJM\"",
		"mtime": "2026-07-14T16:49:49.879Z",
		"size": 383710,
		"path": "../public/assets/index-MQrpzWXf.js"
	},
	"/assets/plus-DtEiSaXQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"111-brR7BrJAmzyR0JyBo71rGQgngjA\"",
		"mtime": "2026-07-14T16:49:49.882Z",
		"size": 273,
		"path": "../public/assets/plus-DtEiSaXQ.js"
	},
	"/assets/product-card-BfT6Vgur.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d4-wM7vfwF1uhqUPshTCETXrT+SmOM\"",
		"mtime": "2026-07-14T16:49:49.884Z",
		"size": 1236,
		"path": "../public/assets/product-card-BfT6Vgur.js"
	},
	"/assets/lorio-rose.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f282-Er/7EWj6dw4e9YvmhjeLdz1A/eg\"",
		"mtime": "2026-07-14T13:37:54.796Z",
		"size": 193154,
		"path": "../public/assets/lorio-rose.jpg"
	},
	"/assets/products._slug-CFBGWPJA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f7-hGkGRxrxf17dr+7x6R7KgHFMefw\"",
		"mtime": "2026-07-14T16:49:49.884Z",
		"size": 5623,
		"path": "../public/assets/products._slug-CFBGWPJA.js"
	},
	"/assets/products.index-C-ZHpwwI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34a-RuX6jautK3DLc0ibMPMsBr8D4jc\"",
		"mtime": "2026-07-14T16:49:49.889Z",
		"size": 842,
		"path": "../public/assets/products.index-C-ZHpwwI.js"
	},
	"/assets/products._slug-CPD2wNdr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8-Qy59JM0GqR+Owa1EEAk2KvsmWVc\"",
		"mtime": "2026-07-14T16:49:49.886Z",
		"size": 440,
		"path": "../public/assets/products._slug-CPD2wNdr.js"
	},
	"/assets/routes-CwlFpycz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc5-JyEdPfHK0xH7EGa8WHuXqX+2K44\"",
		"mtime": "2026-07-14T16:49:49.891Z",
		"size": 7109,
		"path": "../public/assets/routes-CwlFpycz.js"
	},
	"/assets/products._slug-Dtz1R2yj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-F1oD1u7uvUf+UFP36bhpkxMoLCQ\"",
		"mtime": "2026-07-14T16:49:49.886Z",
		"size": 423,
		"path": "../public/assets/products._slug-Dtz1R2yj.js"
	},
	"/assets/site-layout-C2fcLIk3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b45-1KjQ0V/Xmvd4SVXSDWIAi8Ay7ro\"",
		"mtime": "2026-07-14T16:49:49.892Z",
		"size": 39749,
		"path": "../public/assets/site-layout-C2fcLIk3.js"
	},
	"/assets/types-B5pp1DZK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e409-wGrWU0oqzOUaF4bVjxUtOrc4Uvg\"",
		"mtime": "2026-07-14T16:49:49.895Z",
		"size": 58377,
		"path": "../public/assets/types-B5pp1DZK.js"
	},
	"/assets/styles-CCC9UwGT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1455e-yajaIdPID+cZR0QQm3cKrc9lfcg\"",
		"mtime": "2026-07-14T16:49:49.896Z",
		"size": 83294,
		"path": "../public/assets/styles-CCC9UwGT.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ZFeeFD = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ZFeeFD
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
