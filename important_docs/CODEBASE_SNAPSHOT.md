# Codebase Snapshot - Lorio.pk

This document provides a concise snapshot of the Lorio.pk e-commerce codebase architecture and files.

## Project Architecture

The project is built using:
- **Framework:** TanStack Start (React framework with Vite and file-based routing)
- **Routing:** TanStack Router (configured with auto-generated routing tree)
- **Styling:** Tailwind CSS v4 (with standard typography/colors defined in `src/styles.css`)
- **Package Manager:** NPM / Bun

---

## File Directory Structure

- `src/` - Root source directory
  - `components/` - Shared UI elements and application shell
    - `ui/` - Custom components (shadcn-like base components)
    - `site-layout.tsx` - App layout containing the Header, Footer, and navigation links.
  - `routes/` - TanStack Router file-based pages
    - `__root.tsx` - Root layout wrapping all pages
    - `index.tsx` - Homepage route (`/`)
    - `about.tsx` - About page route (`/about`)
    - `contact.tsx` - Contact page route (`/contact`)
    - `cart.tsx` - Cart & checkout route (`/cart`)
    - `products.index.tsx` - Shop/Products catalog route (`/products`)
    - `products.$slug.tsx` - Dynamic product details route (`/products/:slug`)
    - `sitemap[.]xml.ts` - Server-side sitemap XML route
    - `privacy-policy.tsx` - [NEW] Privacy policy page route (`/privacy-policy`)
    - `refund-return-policy.tsx` - [NEW] Refund, Return & Shipping Policy page route (`/refund-return-policy`)
    - `terms-conditions.tsx` - [NEW] Terms & Conditions page route (`/terms-conditions`)
  - `lib/` - Utilities, helpers, and state management (e.g., `cart.tsx`, `products.ts`)
  - `routeTree.gen.ts` - Auto-generated routing tree (TanStack Router)
  - `styles.css` - Global stylesheet importing Tailwind CSS
  - `vite.config.ts` - Bundler settings and routing plugins

---

## Legal & Compliance Pages Integration (July 2026)

Three comprehensive legal policy pages were added following the existing design tokens (e.g., display serif fonts, soft margins, and neutral-colored cards):

1. **Privacy Policy (`/privacy-policy`)**: Outlines customer data collection, cookie options, sharing limits with local carriers, and support contacts.
2. **Refund & Return Policy (`/refund-return-policy`)**: Highlights Pakistan-wide shipping, transit delays, pre-dispatch cancellations, the 7-day return request window, personal care hygiene exemptions, and refund methods (Bank Transfer, EasyPaisa, JazzCash).
3. **Terms & Conditions (`/terms-conditions`)**: Outlines acceptable usage limits, natural handmade variation tolerances, device color reproductions, intellectual property rights, patch-testing skin advice, and COD abuse limitations.

Links to all three pages have been integrated into the footer under the **Explore** list in [site-layout.tsx](file:///d:/Clients/javed/loriopk-main/src/components/site-layout.tsx).
