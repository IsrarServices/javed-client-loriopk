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
	"/assets/cart-ojrCmpga.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2dc-DOsYdLwFSJd56qB44APxqWAKQK8\"",
		"mtime": "2026-07-15T16:49:40.424Z",
		"size": 45788,
		"path": "../public/assets/cart-ojrCmpga.js"
	},
	"/assets/about-BKIpLNug.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f3-/oz0ud8FHknLHRzhwK5pbvX8xr0\"",
		"mtime": "2026-07-15T16:49:40.423Z",
		"size": 1523,
		"path": "../public/assets/about-BKIpLNug.js"
	},
	"/assets/contact-CJIo3Kt9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e19-orOFzbBaqPSQUIOxY+S9a5K/IUU\"",
		"mtime": "2026-07-15T16:49:40.424Z",
		"size": 3609,
		"path": "../public/assets/contact-CJIo3Kt9.js"
	},
	"/assets/lorio-family.jpg": {
		"type": "image/jpeg",
		"etag": "\"30cc8-tGsaloo8c5k+u5KCT3ZQF5Q+dWE\"",
		"mtime": "2026-07-14T13:37:54.780Z",
		"size": 199880,
		"path": "../public/assets/lorio-family.jpg"
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
	"/assets/lorio-rose.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f282-Er/7EWj6dw4e9YvmhjeLdz1A/eg\"",
		"mtime": "2026-07-14T13:37:54.796Z",
		"size": 193154,
		"path": "../public/assets/lorio-rose.jpg"
	},
	"/assets/plus-BeMwabvB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"111-ddHNPIELJ/LDazhppTM9iMndfm8\"",
		"mtime": "2026-07-15T16:49:40.424Z",
		"size": 273,
		"path": "../public/assets/plus-BeMwabvB.js"
	},
	"/assets/products._slug-B-Uiy2TG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8-gukkx/93kEL+l7gDUCsu76Fs8k8\"",
		"mtime": "2026-07-15T16:49:40.426Z",
		"size": 440,
		"path": "../public/assets/products._slug-B-Uiy2TG.js"
	},
	"/assets/privacy-policy-DFrTmJVv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2098-VpllFfGx/gw8f+p+4vys0M608wc\"",
		"mtime": "2026-07-15T16:49:40.425Z",
		"size": 8344,
		"path": "../public/assets/privacy-policy-DFrTmJVv.js"
	},
	"/assets/product-card-FhywiH_l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d4-HKnKI3RGlVz+9HV5UM+E7SxVfuw\"",
		"mtime": "2026-07-15T16:49:40.426Z",
		"size": 1236,
		"path": "../public/assets/product-card-FhywiH_l.js"
	},
	"/assets/index-U4JpoJyP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e23d-SJmQt5aqhljixc8nhUKAjMlZY74\"",
		"mtime": "2026-07-15T16:49:40.423Z",
		"size": 385597,
		"path": "../public/assets/index-U4JpoJyP.js"
	},
	"/assets/refund-return-policy-BUep8bqj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c49-puAmM4kAfER0fe0nDdp3vo7E8qI\"",
		"mtime": "2026-07-15T16:49:40.428Z",
		"size": 7241,
		"path": "../public/assets/refund-return-policy-BUep8bqj.js"
	},
	"/assets/products._slug-DaY-G2em.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-mBW8+oAFgbXg4o0E6wJP6p6XgDw\"",
		"mtime": "2026-07-15T16:49:40.426Z",
		"size": 423,
		"path": "../public/assets/products._slug-DaY-G2em.js"
	},
	"/assets/products.index-Dapa93XH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34a-ISjs5G2WFA/DAOODkuDpy1Em4GE\"",
		"mtime": "2026-07-15T16:49:40.427Z",
		"size": 842,
		"path": "../public/assets/products.index-Dapa93XH.js"
	},
	"/assets/routes-DhvXhhCs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc5-8yoP8lWXe2hRRnS1mF5gYar5vcE\"",
		"mtime": "2026-07-15T16:49:40.429Z",
		"size": 7109,
		"path": "../public/assets/routes-DhvXhhCs.js"
	},
	"/assets/products._slug-oIv1lBcM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f7-HGLVZ9gOK0VYsfEl5QvMx6yjXWs\"",
		"mtime": "2026-07-15T16:49:40.427Z",
		"size": 5623,
		"path": "../public/assets/products._slug-oIv1lBcM.js"
	},
	"/assets/site-layout-DdlYmrh4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9da1-eFZ/YLVhc6GwWC/6oaA5+i1efCU\"",
		"mtime": "2026-07-15T16:49:40.429Z",
		"size": 40353,
		"path": "../public/assets/site-layout-DdlYmrh4.js"
	},
	"/assets/terms-conditions-2JEDDC4i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bb3-4+bceLZEOwNMCGbytNI4hwt1K/8\"",
		"mtime": "2026-07-15T16:49:40.429Z",
		"size": 7091,
		"path": "../public/assets/terms-conditions-2JEDDC4i.js"
	},
	"/assets/styles-I8qLwtVB.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"147a9-6ryxI57Wm0ltl9RfqFu+IF2BtJ8\"",
		"mtime": "2026-07-15T16:49:40.431Z",
		"size": 83881,
		"path": "../public/assets/styles-I8qLwtVB.css"
	},
	"/assets/types-ChoHV3oh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e409-B3f7NJU+3YiRGQaJWJ1rzhARw4I\"",
		"mtime": "2026-07-15T16:49:40.431Z",
		"size": 58377,
		"path": "../public/assets/types-ChoHV3oh.js"
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
