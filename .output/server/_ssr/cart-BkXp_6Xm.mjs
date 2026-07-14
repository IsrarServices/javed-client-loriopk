import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useCart, r as WHATSAPP_NUMBER } from "./cart-pbamU8er.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { c as Plus, d as MessageCircle, i as Trash2, n as Upload, t as X, u as Minus, v as Check } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, r as cn, t as Button } from "./site-layout-BwmAO3Zt.mjs";
import { n as Label, r as Textarea, t as Input } from "./label-DGYnWAZ8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-BkXp_6Xm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var PAYMENT_METHODS = [{
	id: "easypaisa",
	name: "Easypaisa",
	accountTitle: "Abdul Samad Javeed",
	accountNumber: "03478924066",
	extra: "Send to the number above and upload the screenshot below."
}, {
	id: "allied",
	name: "Allied Bank",
	accountTitle: "Abdul Samad Javed",
	accountNumber: "03940010125976930010"
}];
var schema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	phone: stringType().trim().min(7, "Phone is required").max(20).regex(/^[+0-9\s-]+$/, "Invalid phone"),
	address: stringType().trim().min(5, "Address is required").max(300),
	city: stringType().trim().min(1, "City is required").max(60),
	notes: stringType().trim().max(500).optional().or(literalType(""))
});
var MAX_RECEIPT_BYTES = 5 * 1024 * 1024;
function CartPage() {
	const { detailed, setQty, remove, total, clear, count } = useCart();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		address: "",
		city: "",
		notes: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [paymentId, setPaymentId] = (0, import_react.useState)(PAYMENT_METHODS[0].id);
	const [receipt, setReceipt] = (0, import_react.useState)(null);
	const [receiptErr, setReceiptErr] = (0, import_react.useState)("");
	const [confirmOpen, setConfirmOpen] = (0, import_react.useState)(false);
	const [waHref, setWaHref] = (0, import_react.useState)("");
	const fileRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const payment = PAYMENT_METHODS.find((p) => p.id === paymentId);
	if (count === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-2xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Explore our collection and add your favourite scents."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "brand",
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					children: "Shop the collection"
				})
			})
		]
	}) });
	const onFile = (f) => {
		setReceiptErr("");
		if (!f) return setReceipt(null);
		if (!/^image\/|application\/pdf$/.test(f.type)) {
			setReceiptErr("Upload an image or PDF");
			return;
		}
		if (f.size > MAX_RECEIPT_BYTES) {
			setReceiptErr("File must be under 5MB");
			return;
		}
		setReceipt(f);
	};
	const submit = (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		const errs = {};
		if (!parsed.success) parsed.error.issues.forEach((i) => errs[String(i.path[0])] = i.message);
		if (!receipt) setReceiptErr("Please upload your payment screenshot");
		if (Object.keys(errs).length || !receipt) {
			setErrors(errs);
			return;
		}
		setErrors({});
		const lines = detailed.map((i) => `• ${i.qty} × ${i.product.name} — PKR ${i.qty * i.product.price}`).join("\n");
		const msg = `*New Lorio Order*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*City:* ${form.city}\n*Address:* ${form.address}\n` + (form.notes ? `*Notes:* ${form.notes}\n` : "") + `\n*Items:*\n${lines}\n\n*Payment method:* ${payment.name}\n*Paid to:* ${payment.accountTitle} — ${payment.accountNumber}\n*Receipt:* ${receipt.name} (attached separately)\n\n*Total:* PKR ${total}`;
		setWaHref(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
		setConfirmOpen(true);
	};
	const finishOnWhatsApp = () => {
		window.open(waHref, "_blank", "noopener,noreferrer");
		toast.success("Opening WhatsApp — attach your receipt to complete.");
		clear();
		setConfirmOpen(false);
		setTimeout(() => navigate({ to: "/" }), 400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl md:text-5xl",
				children: "Checkout"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Review your order, pay online, and confirm on WhatsApp."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/60 bg-card p-5 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Your items"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: detailed.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 rounded-xl border border-border/60 p-3 sm:flex-row sm:items-center sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-24 w-24 shrink-0 overflow-hidden rounded-lg",
								style: { background: `linear-gradient(160deg, ${i.product.accent}33, ${i.product.accent}0d)` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: i.product.image,
									alt: i.product.name,
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/products/$slug",
											params: { slug: i.slug },
											className: "font-display text-lg hover:text-brand",
											children: i.product.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: i.product.variant
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 text-sm text-muted-foreground",
											children: [
												"PKR",
												" ",
												i.product.price,
												" × ",
												i.qty
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => remove(i.slug),
										className: "rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-destructive",
										"aria-label": "Remove",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center rounded-full border border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "flex h-9 w-9 items-center justify-center hover:bg-accent",
												onClick: () => setQty(i.slug, i.qty - 1),
												"aria-label": "Decrease",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-8 text-center text-sm font-medium",
												children: i.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "flex h-9 w-9 items-center justify-center hover:bg-accent",
												onClick: () => setQty(i.slug, i.qty + 1),
												"aria-label": "Increase",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-semibold text-brand",
										children: [
											"PKR",
											" ",
											i.qty * i.product.price
										]
									})]
								})]
							})]
						}, i.slug))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					id: "checkout-form",
					onSubmit: submit,
					className: "rounded-2xl border border-border/60 bg-card p-5 md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Your details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "name",
									label: "Full name",
									value: form.name,
									error: errors.name,
									onChange: (v) => setForm((f) => ({
										...f,
										name: v
									}))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "phone",
									label: "Phone / WhatsApp",
									value: form.phone,
									error: errors.phone,
									onChange: (v) => setForm((f) => ({
										...f,
										phone: v
									}))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "city",
									label: "City",
									value: form.city,
									error: errors.city,
									onChange: (v) => setForm((f) => ({
										...f,
										city: v
									}))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "address",
											children: "Delivery address"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "address",
											rows: 2,
											maxLength: 300,
											value: form.address,
											onChange: (e) => setForm((f) => ({
												...f,
												address: e.target.value
											}))
										}),
										errors.address && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.address
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "notes",
										children: "Notes (optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "notes",
										rows: 2,
										maxLength: 500,
										value: form.notes,
										onChange: (e) => setForm((f) => ({
											...f,
											notes: e.target.value
										}))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl",
									children: "Payment method"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Pay online, then upload your receipt below."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-3",
									children: PAYMENT_METHODS.map((m) => {
										const active = m.id === paymentId;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPaymentId(m.id),
											className: cn("relative rounded-xl border p-4 text-left transition", active ? "border-brand bg-brand-soft/40 shadow-elegant" : "border-border hover:border-brand/50 hover:bg-accent/40"),
											"aria-pressed": active,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: m.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("flex h-5 w-5 items-center justify-center rounded-full border", active ? "border-brand bg-brand text-brand-foreground" : "border-border"),
													children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Tap to select"
											})]
										}, m.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-xl border border-border/60 bg-secondary/40 p-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2 text-xs font-semibold uppercase tracking-widest text-brand",
										children: [payment.name, " details"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Account title",
												value: payment.accountTitle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Account number",
												value: payment.accountNumber
											}),
											payment.extra && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs text-muted-foreground",
												children: payment.extra
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "receipt",
											children: "Payment screenshot / receipt"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: cn("mt-2 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition", receipt ? "border-brand/60 bg-brand-soft/30" : "border-border hover:border-brand/40"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: fileRef,
												id: "receipt",
												type: "file",
												accept: "image/*,application/pdf",
												className: "hidden",
												onChange: (e) => onFile(e.target.files?.[0] ?? null)
											}), receipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6 text-brand" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-medium",
													children: receipt.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs text-muted-foreground",
													children: [(receipt.size / 1024).toFixed(0), " KB · ready to send on WhatsApp"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													type: "button",
													variant: "outline",
													size: "sm",
													onClick: () => fileRef.current?.click(),
													children: "Replace file"
												})
											] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6 text-muted-foreground" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-medium",
													children: "Upload payment screenshot"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-muted-foreground",
													children: "PNG, JPG or PDF · max 5MB"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													type: "button",
													variant: "outline",
													size: "sm",
													onClick: () => fileRef.current?.click(),
													children: "Choose file"
												})
											] })]
										}),
										receiptErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: receiptErr
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted-foreground",
											children: "Note: WhatsApp doesn't accept file attachments via link — please attach this same file in the WhatsApp chat that opens next."
										})
									]
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-2xl border border-border/60 bg-card p-6 lg:sticky lg:top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Order summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: detailed.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-14 w-14 shrink-0 overflow-hidden rounded-lg",
									style: { background: `linear-gradient(160deg, ${i.product.accent}33, ${i.product.accent}0d)` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: i.product.image,
										alt: i.product.name,
										className: "h-full w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-sm font-medium",
										children: i.product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											"Qty ",
											i.qty,
											" · ",
											"PKR",
											" ",
											i.product.price
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm font-semibold text-brand",
									children: [
										"PKR",
										" ",
										i.qty * i.product.price
									]
								})
							]
						}, i.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-2 border-t border-border/60 pt-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Items",
								value: `${count}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Payment",
								value: payment.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Delivery",
								value: "Confirmed on WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pt-3 text-base font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-brand",
									children: [
										"PKR",
										" ",
										total
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						form: "checkout-form",
						variant: "brand",
						size: "lg",
						className: "mt-6 w-full",
						children: "Place order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-muted-foreground",
						children: "You'll confirm the final details on WhatsApp."
					})
				]
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: confirmOpen,
		onOpenChange: setConfirmOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-7 w-7 text-brand" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-center font-display text-2xl",
						children: "Order ready to send"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-center",
						children: "Tap continue to open WhatsApp with your order details pre-filled. Please attach your payment screenshot in the chat."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/60 bg-secondary/40 p-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Name",
							value: form.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Phone",
							value: form.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Payment",
							value: payment.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between border-t border-border/60 pt-2 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-brand",
								children: [
									"PKR",
									" ",
									total
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
					className: "sm:justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "brand",
						size: "lg",
						className: "w-full gap-2",
						onClick: finishOnWhatsApp,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), "Continue on WhatsApp"]
					})
				})
			]
		})
	})] });
}
function Field({ id, label, value, onChange, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			value,
			onChange: (e) => onChange(e.target.value)
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground",
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
