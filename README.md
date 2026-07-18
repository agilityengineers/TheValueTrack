# Handoff: The Value Track — Marketing Site

## Overview
A production-quality, fully responsive single-page marketing website for **The Value Track**
— a firm that helps business owners build the value of their company and sell it the right way
(value building, exit planning, business valuation, business sales). The design mirrors the
visual language and section rhythm of the TemplateMonster "Mortgates / Financial Services"
template (demo ID 67116), adapted to Value Track's real brand and content.

## Run & Deploy (Replit)

This repo contains the production implementation of the design below: **Next.js (App Router) +
TypeScript + Tailwind CSS**, one component per section under `components/`, design tokens in
`tailwind.config.ts`, fonts self-hosted via `next/font`.

**Run locally** (Node 18.18+):

```bash
npm install
npm run dev     # http://localhost:3000 — binds 0.0.0.0, honors $PORT
npm run build && npm run start   # production
```

**Run on Replit:** import this repo (Create Repl → Import from GitHub) and press **Run**.
`.replit` + `replit.nix` pin Node 20, install dependencies, and start the dev server bound to
`0.0.0.0:$PORT` so the webview picks it up automatically.

**Deploy on Replit:** open **Deployments → Autoscale** and deploy — the build
(`npm install && npm run build`) and run (`npm run start`) commands are preconfigured in
`.replit`, and the server binds the `PORT` Replit injects.

**Wiring left for production:**
- `app/api/contact/route.ts` — the contact form POSTs here; it validates, logs, and returns
  success. See the marked `TODO` to connect an email/form service (Resend, Formspree, HubSpot…).
- `lib/site.ts` — all image URLs (Unsplash placeholders + hotlinked logo), external links, and
  phone number centralized for easy swapping.
- Quote band is a placeholder for real client testimonials (`components/Quote.tsx`).

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the
intended look and behavior, **not** production code to ship as-is. `Value Track.dc.html` is a
"Design Component" (an internal streaming-HTML prototype format) and `support.js` is only the
runtime that lets it render in a browser — **do not port `support.js`**.

The task is to **recreate this design in the target codebase's environment** using its
established patterns and libraries. If no codebase exists yet, the recommended stack is
**Next.js (App Router) + Tailwind CSS**, or plain semantic HTML/CSS/JS — a single marketing
page needs no heavy framework. Everything below is written so a developer who wasn't in the
original conversation can rebuild it from this README alone.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and interactions are all
specified. Recreate the UI to match, using the target codebase's component conventions.

---

## Global Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Accent (mint/teal) | `#43c3a0` | primary buttons, links, icons, eyebrows, differentiators band |
| Accent hover | `#37a98a` | button/link hover |
| Accent tint | `#eafaf5` | icon circle backgrounds |
| Accent light (on dark) | `#8fe3cc` | hero eyebrow, quote attribution |
| Slate (top bar) | `#3a4148` | utility bar background |
| Ink (headings) | `#2b3038` | all headings, nav text |
| Body gray | `#737b83` | body copy |
| Muted label gray | `#8b939a` | uppercase stat/field labels |
| Light section | `#f5f7f8` | alternating section backgrounds, cards |
| Border | `#eaedef` / `#dce1e4` | card borders / input borders |
| Footer bg | `#2a3038` | footer |
| Footer text | `#a7afb6` | footer links |
| Error | `#d9534f` | form validation messages |
| Success bg / text | `#eafaf5` / `#2f8a72` | form success banner |

### Typography
- **Headings / nav / buttons / stat numbers:** `Poppins` (Google Fonts), weights 500/600/700.
  Buttons & nav CTAs are UPPERCASE with `letter-spacing` ~`.12–.16em`.
- **Body:** `Open Sans` (Google Fonts), weights 400/600/700.
- Load with `display=swap`.

Scale (hifi):
- Hero H1: `clamp(36px, 5.6vw, 62px)`, weight 700, line-height 1.07, letter-spacing -.01em
- Section H2: `clamp(28px, 3.6vw, 40px)`, weight 700, line-height 1.18
- Card H3: 21px, weight 600
- Eyebrow: 13px, weight 600, uppercase, letter-spacing .24em, color accent
- Body: 15–16px, line-height 1.75–1.8
- Stat number: 24–34px Poppins 700; stat label: 12–13px uppercase, letter-spacing .08em

### Spacing / radius / shadow
- Content max-width: **1180px**, horizontal padding 24px.
- Standard section vertical padding: **96px** top/bottom (stats strip 48px; differentiators 64px).
- Border radius: buttons `2px`, cards/inputs `3–6px`, avatars/icon circles `50%`.
- Card hover shadow: `0 22px 46px rgba(30,50,60,.10)` with `transform: translateY(-8px)`.
- Sticky-header scrolled shadow: `0 6px 22px rgba(20,30,40,.10)`.

---

## Screens / Views
Single scrolling page. Sections top → bottom:

1. **Top utility bar** (`#3a4148`, min-height 46px)
   - Left: phone `(770) 329-5224` (tel link), "Schedule a Meeting" (→ #contact), "Metro Atlanta, Georgia" — each with a mint line icon.
   - Right: "FAQ", "Insights", and a circular LinkedIn icon button (bg `rgba(255,255,255,.08)`, hover fill `#43c3a0`).
   - The three left middle items + FAQ/Insights hide below 980px (`.vt-topx`).

2. **Sticky header** (white, `position: sticky; top:0; z-index:60`, min-height 86px)
   - Left: Value Track logo image, height 46px.
     Src: `https://getonthevaluetrack.com/wp-content/uploads/cropped-the-value-track-logo-e1689430795234-262x69.png`
   - Center (desktop ≥980px): nav — Home (#home), Services (#services), Why Us (#why), About (#about), **Insights** (→ `https://insights.getonthevaluetrack.com`). Poppins 500, 15px, ink, hover accent.
   - Right (desktop): "GET IN TOUCH" outlined button — 2px accent border, uppercase, hover fills accent white text.
   - Below 980px: nav + CTA hidden; a mint hamburger button (46×46, `#43c3a0`) toggles a full-width vertical dropdown menu (same links, last item is a solid accent "Get in Touch").
   - On scroll (>18px) the header gains the scrolled shadow.

3. **Hero** (`#home`, min-height 640px)
   - Full-bleed background image with overlay `linear-gradient(120deg, rgba(30,44,50,.82), rgba(38,55,60,.55))` over `images.unsplash.com/photo-1521737604893-d14cc237f11d` (**placeholder**).
   - Left-aligned content, max-width 660px, white:
     - Eyebrow: "Planning to Sell?"
     - H1: "Get your business on the Value Track."
     - Sub: "Build the value of your business before you sell — then sell it right and get the return you deserve for your life's work."
     - Buttons: solid mint "Schedule a Meeting" (→ #contact) + ghost/outline "Our Services" (→ #services).

4. **Stats strip** (`#f5f7f8`, auto-fit grid min 210px)
   - 4 items, each = mint line icon + uppercase label + Poppins 700 value:
     - In Business Since — **2000**
     - Owner Experience — **25+ Years**
     - Our Approach — **Team-Based**
     - Get Started — **60-Min Meeting**

5. **Mission / intro** (white, 2-col auto-fit min 340px)
   - Left copy: eyebrow "Our Mission"; H2 "The toughest, most important sale you'll ever make — is selling your business."; accent lead "Our mission is to help you do it right."; two paragraphs; "More About Us →" link.
   - Right: image (`photo-1600880292203-757bb62b4baf`, **placeholder**), 480px tall, `object-fit:cover`, with an overlapping mint badge card bottom-left: "20+ / years helping owners own their future".

6. **Services** (`#services`, `#f5f7f8`)
   - Centered header: eyebrow "What We Do", H2 "How we get your business on track", sub.
   - Auto-fit grid (min 300px) of **6 cards** (white, mint icon circle, H3, description, "Learn More →"). Hover = lift + shadow. Cards:
     Value Building · Sell Your Business · Business Valuation · Exit Planning · Sale-Readiness Review · Speaking & Workshops. (Exact copy is in the HTML file.)

7. **Why Us / Sale-Readiness** (`#why`, white, 2-col)
   - Left: image (`photo-1454165804606-c3d57bc86b40`, **placeholder**), 500px tall.
   - Right: eyebrow "Sale-Readiness"; H2 "It's time to kick the tires on your own business."; paragraph; a 2-col auto-fit list of 6 checkmark items (mint check icon + question); solid mint "Get Clear Today" button.

8. **Differentiators band** (solid `#43c3a0`, white text, 3 columns w/ left dividers)
   - "A close partnership" · "A dynamic team approach" · "A smart, customized strategy" — each with a short paragraph.

9. **About / Founder** (`#about`, white, 2-col)
   - Left: card (`#f5f7f8`) with a **"DS" monogram avatar** (120px circle, gradient `#43c3a0→#2f9e82`, **placeholder for a real headshot of David Shavzin**), name "David Shavzin", role "Founder, The Value Track", short line, "Connect on LinkedIn".
   - Right: eyebrow "About Us"; H2 "Helping business owners own their future."; two paragraphs; three inline stats (2000 Practice Founded · 25 Yrs Experience · 1:1 Owner Partnership).

10. **Quote band** (dark overlay `rgba(28,40,45,.88)` over `photo-1486406146926-c627a92ad1ab`, **placeholder**)
    - Centered mint quote glyph, large Poppins quote ("You deserve to capitalize on your life's work…"), attribution "The Value Track". **TODO in code: replace with real client testimonials.**

11. **Contact** (`#contact`, `#f5f7f8`, 2-col)
    - Left: eyebrow "Contact Us"; H2 "Get clear on the sale-readiness of your business."; paragraph; three info rows (Call Us, Email/Schedule, Connect) each with a mint icon circle.
    - Right: white form card (border, soft shadow) — fields **Name, Email, Phone (optional), Message** + full-width mint submit "Schedule a Meeting". A success banner shows above the form on valid submit.

12. **Footer** (`#2a3038`, auto-fit grid)
    - Col 1: grayscale/light Value Track logo (same src as header, CSS `filter: grayscale(1) brightness(0) invert(0.78)`), tagline, circular LinkedIn button.
    - Col 2 "Explore": Home, Services, Why Us, About.
    - Col 3 "Services": Value Building, Sell Your Business, Business Valuation, Speaking (link to live site pages).
    - Col 4 "Get In Touch": phone, Contact Us, FAQ, "Metro Atlanta, Georgia".
    - Bottom bar: "Copyright © 2010 – 2026 The Value Track. All rights reserved." + demo note.

---

## Interactions & Behavior
- **Smooth-scroll anchors:** `html { scroll-behavior: smooth; scroll-padding-top: 140px; }` so anchor targets clear the sticky top bar + header.
- **Sticky header shadow:** scroll listener toggles box-shadow when `scrollY > 18`.
- **Scroll reveal:** elements marked `data-reveal` start at `opacity:0; translateY(26px)` and animate to visible via `IntersectionObserver` (`threshold 0.1`, `rootMargin 0 0 -30px 0`), transition `opacity/transform .7s ease`, unobserved after firing.
- **Mobile menu:** hamburger toggles a `menuOpen` boolean; links close it on click. Breakpoint 980px.
- **Button/link hovers:** accent → accent-dark; primary buttons also `translateY(-2px)`; cards lift + shadow; ghost hero button inverts to white bg.

## Form: validation rules & state
State: `{ name, email, phone, message }`, plus `errors` object and `sent` boolean.
- **Name:** required.
- **Email:** required; regex `^[^@\s]+@[^@\s]+\.[^@\s]+$`.
- **Message:** required.
- **Phone:** optional.
- On submit: `preventDefault`; if any errors, render inline error text (`#d9534f`) under the field; else show success banner, clear the form.
- **Backend is stubbed** — see the `TODO` in the submit handler. Wire `form` state to a real endpoint / form service (Formspree, HubSpot, serverless function). Currently it only `console.log`s.

## Responsive behavior
- Layout uses `grid` with `repeat(auto-fit, minmax(...))` and `clamp()` type — most sections reflow with no media queries.
- Only breakpoint (≤980px): swap desktop nav + header CTA for the hamburger menu, and hide the extra top-bar items.

## Assets
- **Logo (real):** `https://getonthevaluetrack.com/wp-content/uploads/cropped-the-value-track-logo-e1689430795234-262x69.png` — header (as-is) and footer (grayscale filter). Replace with a hosted asset in production.
- **Photography (PLACEHOLDERS — replace with licensed Value Track imagery):**
  - Hero: `images.unsplash.com/photo-1521737604893-d14cc237f11d`
  - Mission: `images.unsplash.com/photo-1600880292203-757bb62b4baf`
  - Why Us: `images.unsplash.com/photo-1454165804606-c3d57bc86b40`
  - Quote band: `images.unsplash.com/photo-1486406146926-c627a92ad1ab`
  - Value Track ships `img_build_value_before_sale_h1410.webp` and `img_sell_for_return_h1410.webp` on their site.
- **Founder photo:** currently a "DS" monogram — replace with a real headshot.
- **Icons:** inline SVGs (stroke style, mint) — reuse or swap for the codebase's icon library.
- **Fonts:** Poppins + Open Sans via Google Fonts.

## Content source
All copy, service names, founder bio, phone, and LinkedIn were pulled from the live site:
`https://getonthevaluetrack.com/`, `/about-us/`, `/business-valuation/`. No invented facts.

## Files
- `Value Track.dc.html` — the full design reference (markup, inline styles, JS logic). Open in a browser to view; use as the source of truth for exact copy, SVG icons, and styling.
- `support.js` — prototype runtime only; **do not port**.
