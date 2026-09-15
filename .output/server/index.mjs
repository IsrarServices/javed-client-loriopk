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
	"/assets/about-C3sAWB-A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f3-VKQb8P0m2ykzQD5UEmpJT1c+Ha4\"",
		"mtime": "2026-09-15T19:25:37.889Z",
		"size": 1523,
		"path": "../public/assets/about-C3sAWB-A.js"
	},
	"/assets/cart-CdnoMAJQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2e1-Cm+UHDR5vHYEmcXFLKwLecRONao\"",
		"mtime": "2026-09-15T19:25:37.892Z",
		"size": 45793,
		"path": "../public/assets/cart-CdnoMAJQ.js"
	},
	"/assets/contact-D6oswzqp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e1e-fMZDyjh44au+i9vf5zsZza2dD2k\"",
		"mtime": "2026-09-15T19:25:37.892Z",
		"size": 3614,
		"path": "../public/assets/contact-D6oswzqp.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-14T13:09:58.903Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-14T13:09:58.853Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/index-BX2le8eI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e8bc-QGc4eFIlZD1gX0jI+BCiyO8QL20\"",
		"mtime": "2026-09-15T19:25:37.889Z",
		"size": 387260,
		"path": "../public/assets/index-BX2le8eI.js"
	},
	"/assets/lorio-almond.jpg": {
		"type": "image/jpeg",
		"etag": "\"29f61-+4FAeX9FUUCPEFCzD1Zzy1eBUog\"",
		"mtime": "2026-07-14T13:37:54.774Z",
		"size": 171873,
		"path": "../public/assets/lorio-almond.jpg"
	},
	"/assets/plus-sEUAYZls.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"111-ikZ/I3q2vMJJanop31Wv4QbgPH0\"",
		"mtime": "2026-09-15T19:25:37.892Z",
		"size": 273,
		"path": "../public/assets/plus-sEUAYZls.js"
	},
	"/assets/privacy-policy-Cv4XmYd3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2098-0w6H7+1lQOD4JJIBCjavXUt8O7o\"",
		"mtime": "2026-09-15T19:25:37.894Z",
		"size": 8344,
		"path": "../public/assets/privacy-policy-Cv4XmYd3.js"
	},
	"/assets/lorio-family.jpg": {
		"type": "image/jpeg",
		"etag": "\"30cc8-tGsaloo8c5k+u5KCT3ZQF5Q+dWE\"",
		"mtime": "2026-07-14T13:37:54.780Z",
		"size": 199880,
		"path": "../public/assets/lorio-family.jpg"
	},
	"/assets/product-card-DDK94nY1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d4-JN13RE69P3jOzGEUuorXGKi5ipg\"",
		"mtime": "2026-09-15T19:25:37.894Z",
		"size": 1236,
		"path": "../public/assets/product-card-DDK94nY1.js"
	},
	"/assets/products.index-DZ5naHQP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34a-s+4bO/7eCkCaxXBDW3xp6iHa01o\"",
		"mtime": "2026-09-15T19:25:37.949Z",
		"size": 842,
		"path": "../public/assets/products.index-DZ5naHQP.js"
	},
	"/assets/products._slug-CaxzJOA5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1697-Gm6sWByg48UzSY2PN2UnGxQqw9w\"",
		"mtime": "2026-09-15T19:25:37.945Z",
		"size": 5783,
		"path": "../public/assets/products._slug-CaxzJOA5.js"
	},
	"/assets/products._slug-CQjd2e5Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-Vm8X0MjA+Ud05ey1miqvWtlNsYg\"",
		"mtime": "2026-09-15T19:25:37.896Z",
		"size": 423,
		"path": "../public/assets/products._slug-CQjd2e5Y.js"
	},
	"/assets/products._slug-DV4WjuU-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8-VNpQiQN5RWOdblCogn3gI7e3x6k\"",
		"mtime": "2026-09-15T19:25:37.949Z",
		"size": 440,
		"path": "../public/assets/products._slug-DV4WjuU-.js"
	},
	"/assets/lorio-jasmine.jpg": {
		"type": "image/jpeg",
		"etag": "\"3320f-Nb8XYmF/3ZZQGEn8FvmscBVMmCI\"",
		"mtime": "2026-07-14T13:37:54.771Z",
		"size": 209423,
		"path": "../public/assets/lorio-jasmine.jpg"
	},
	"/assets/refund-return-policy-CT0QWkvW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c49-vNj5gUFkpRTUp59A9JMzjpNAjoY\"",
		"mtime": "2026-09-15T19:25:37.951Z",
		"size": 7241,
		"path": "../public/assets/refund-return-policy-CT0QWkvW.js"
	},
	"/assets/lorio-rose.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f282-Er/7EWj6dw4e9YvmhjeLdz1A/eg\"",
		"mtime": "2026-07-14T13:37:54.796Z",
		"size": 193154,
		"path": "../public/assets/lorio-rose.jpg"
	},
	"/assets/Renu-Faimly-pack.jpeg": {
		"type": "image/jpeg",
		"etag": "\"10d9a-Db7geDrBPabv34ZoOKDU4PryvKo\"",
		"mtime": "2026-09-15T17:24:25.647Z",
		"size": 69018,
		"path": "../public/assets/Renu-Faimly-pack.jpeg"
	},
	"/assets/Renu-Almond-Extract.jpeg": {
		"type": "image/jpeg",
		"etag": "\"f95f-SssZ3Xso9pRX9FojDRuHwMWtPjI\"",
		"mtime": "2026-09-15T16:50:38.263Z",
		"size": 63839,
		"path": "../public/assets/Renu-Almond-Extract.jpeg"
	},
	"/assets/routes-BwVC2kEr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bfd-gLVvUYW4RRmnmEMAmsJUNFA6YoE\"",
		"mtime": "2026-09-15T19:25:37.951Z",
		"size": 7165,
		"path": "../public/assets/routes-BwVC2kEr.js"
	},
	"/assets/Renu-Family-Pack.jpeg": {
		"type": "image/jpeg",
		"etag": "\"10d9a-Db7geDrBPabv34ZoOKDU4PryvKo\"",
		"mtime": "2026-09-15T17:26:07.221Z",
		"size": 69018,
		"path": "../public/assets/Renu-Family-Pack.jpeg"
	},
	"/assets/site-layout-DAhfM123.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9da1-vvu3ybvmGnr4faUPpskHKgGCvXA\"",
		"mtime": "2026-09-15T19:25:37.951Z",
		"size": 40353,
		"path": "../public/assets/site-layout-DAhfM123.js"
	},
	"/assets/Renu-jasmine-extract.jpeg": {
		"type": "image/jpeg",
		"etag": "\"dae7-ACDYPtDEGDUN4A8g9CAAn6U/SOw\"",
		"mtime": "2026-09-15T16:47:54.103Z",
		"size": 56039,
		"path": "../public/assets/Renu-jasmine-extract.jpeg"
	},
	"/assets/Renu-Rose-Fresh.jpeg": {
		"type": "image/jpeg",
		"etag": "\"adf5-17JzljJl3TaqE8IPL/fM3ns1l8c\"",
		"mtime": "2026-09-15T16:47:41.873Z",
		"size": 44533,
		"path": "../public/assets/Renu-Rose-Fresh.jpeg"
	},
	"/assets/terms-conditions-w3xhCfmk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bb3-pM/8TJcwvuJswLSBfCGmEWjcBGg\"",
		"mtime": "2026-09-15T19:25:37.953Z",
		"size": 7091,
		"path": "../public/assets/terms-conditions-w3xhCfmk.js"
	},
	"/assets/styles-I8qLwtVB.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"147a9-6ryxI57Wm0ltl9RfqFu+IF2BtJ8\"",
		"mtime": "2026-09-15T19:25:37.955Z",
		"size": 83881,
		"path": "../public/assets/styles-I8qLwtVB.css"
	},
	"/assets/types-Bkl1FEmV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e409-FL4uN2phea0vUHkRva98tOSqOQw\"",
		"mtime": "2026-09-15T19:25:37.953Z",
		"size": 58377,
		"path": "../public/assets/types-Bkl1FEmV.js"
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
