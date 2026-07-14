import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as WHATSAPP_NUMBER } from "./cart-pbamU8er.mjs";
import { l as Phone, m as Mail, p as MapPin } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as Button } from "./site-layout-BwmAO3Zt.mjs";
import { n as Label, r as Textarea, t as Input } from "./label-DGYnWAZ8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-a9WGEfrf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Invalid email").max(255),
	message: stringType().trim().min(1, "Message is required").max(1e3)
});
function Contact() {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const submit = (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const errs = {};
			parsed.error.issues.forEach((i) => errs[String(i.path[0])] = i.message);
			setErrors(errs);
			return;
		}
		setErrors({});
		const text = `Hello Lorio,%0A%0AName: ${encodeURIComponent(values.name)}%0AEmail: ${encodeURIComponent(values.email)}%0A%0A${encodeURIComponent(values.message)}`;
		window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
		toast.success("Opening WhatsApp — send the message to complete.");
		setValues({
			name: "",
			email: "",
			message: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-brand",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl md:text-6xl",
					children: "We'd love to hear from you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Questions about products, wholesale, or your order? Send us a message and we'll reply on WhatsApp."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${WHATSAPP_NUMBER}`,
								className: "hover:text-brand",
								children: "+92 303 5864321 (WhatsApp)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:support@lorio.pk",
								className: "hover:text-brand",
								children: "support@lorio.pk"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
							}), "Pakistan"]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: submit,
				className: "rounded-3xl border border-border/60 bg-card p-6 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								value: values.name,
								onChange: (e) => setValues((v) => ({
									...v,
									name: e.target.value
								})),
								maxLength: 100
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.name
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								value: values.email,
								onChange: (e) => setValues((v) => ({
									...v,
									email: e.target.value
								})),
								maxLength: 255
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.email
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								rows: 5,
								value: values.message,
								onChange: (e) => setValues((v) => ({
									...v,
									message: e.target.value
								})),
								maxLength: 1e3
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "brand",
							size: "lg",
							className: "w-full",
							children: "Send via WhatsApp"
						})
					]
				})
			})]
		})
	}) });
}
//#endregion
export { Contact as component };
