# SafetyStudio.net — Improvement Tracker

## Completed

### 2026-11-05: Review and Security Updates
- [x] Upgraded Next.js to 16.4.5 and React to 19.3.1; configured ESLint and static sitemap/social image generation. Node 22.23.4 is specified in `.node-version`.
- [x] Improved mobile navigation and calculator input labels and bounds; removed unsupported benchmark comparisons.
- [x] Simplified homepage labels and set the hero animation to play once, honoring reduced motion.
- [x] Added `object-src 'none'` to the Cloudflare content security policy.

### Tier 1: High Impact, Quick Wins
- [x] **Color contrast fix** — Muted color `#8a9ab5` → `#9fb0cc` for WCAG AA. Low-opacity variants bumped to `/70` min.
- [x] **SEO: OG tags, structured data, sitemap, robots.txt** — OpenGraph + Twitter cards on all pages. Organization JSON-LD (layout), Article JSON-LD (blog). `sitemap.xml` auto-generated. `robots.txt` created.
- [x] **Skip-to-content link** — Visually-hidden link in root layout. `id="main-content"` on all `<main>` elements.
- [x] **Mobile nav keyboard support** — Escape closes the mobile disclosure, `aria-expanded` describes its state, and focus returns to the trigger on Escape.
- [x] **Reduced motion** — `scroll-behavior: smooth` wrapped in `prefers-reduced-motion: no-preference`.
- [x] **Custom 404 page** — Branded `app/not-found.tsx` with nav, message, and CTA.
- [x] **Footer enhancement** — 3-column: brand + tagline, quick links, industries + ISO alignment.

### Tier 2: High Impact, Moderate Effort
- [x] **Tool discoverability** — Incident Rate Calculator opens by default (`defaultOpen` prop on ToolCard).
- [x] **Calculator "Copy Results"** — Formats all metrics as plain text, clipboard copy with feedback.
- [x] **Calculator input accessibility** — Explicit `id`/`htmlFor` on all inputs.
- [x] **Back-to-top button** — Floating button after 500px scroll, on homepage + blog article.
- [x] **Blog article h2 IDs** — All headings have IDs for future ToC integration.
- [x] **Google Analytics 4** — GA4 script added to `app/layout.tsx` (`G-5PZMFRT2XF`). Custom `tool_used` events fire on: calculator copy results (`IncidentRateCalc.tsx`), safety moment category switch and copy (`SafetyMomentLibrary.tsx`).
- [x] **Library tab** — New "Library" nav link (`/#library`) and section added to `TabbedContent.tsx`. Safety Moment Library moved from Free Tools into dedicated `components/Library.tsx`. Free Tools now contains only the Incident Rate Calculator.
- [x] **Blog Table of Contents + Reading Progress** — Sticky sidebar ToC on `lg:` screens using IntersectionObserver. Reading progress bar using `useScroll` + `useTransform`. `BlogArticleLayout.tsx` wraps all articles with shared chrome (Nav, Footer, BackToTop, ToC, ReadingProgress).
- [x] **Section centering** — Free Tools, Library, and Blog index content centered with `max-w-3xl mx-auto` (was left-aligned).
- [x] **Calculator frames** — `IncidentRateCalc` split into 3 named `CalcFrame` sections: Personal Injury Incident Rate Calculator, SIF Potential Events, Motor Vehicle Incidents. `ToolCard` wrapper removed from `FreeTools.tsx`.
- [x] **Web design guidelines review** — Applied Vercel web-design-guidelines fixes: `touch-action: manipulation` on `button, a`; `text-wrap: balance` on `h1/h2/h3`; `font-variant-numeric: tabular-nums` on MetricCard values; `focus-visible` ring on all inputs and Button variants; `useReducedMotion()` applied to SectionHeader, Services, and About animations; trailing slash fix on Blog links in Nav and Footer.

---

## Remaining (Not Yet Implemented)

- [ ] **Dependency advisory** — Full npm audit reports eight moderate entries in the development linting chain, all tracing to minimatch (GHSA-g3hv-75wg-m249). Production-only audit reported zero findings on 2026-11-05. Recheck for a compatible upstream fix; do not force an untested major override.

### Tier 3: Nice to Have
- [ ] **More blog content** — Blog index has 3 posts (SIF, HPI, Chronic Unease & Complacency). Remaining suggested articles:
  - "How to Run an Effective Safety Moment" (cross-links Safety Moment Library)
  - "Understanding HAZOP: A Practical Guide" (cross-links consultancy service)
  - "LTIF vs TRCF: What's the Difference?" (cross-links calculator)
- [x] **Contact form** — DONE 2026-07: Web3Forms-backed `components/ContactForm.tsx` live on `/about/`, verified end-to-end in production (key: `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` + Cloudflare Pages env var; `api.web3forms.com` whitelisted in `public/_headers` CSP `connect-src`).
- [x] **FAQ section** — DONE 2026-07: `components/FAQ.tsx` + `data/faq.ts` (6 owner-reviewed Q&As) with `FAQPage` JSON-LD on `/about/`.
- [ ] **Services detail expansion** — Add expandable bullet points to each service row. File: `components/Services.tsx`.
- [ ] **Social proof / case studies** — PARKED by owner until real anonymized metrics exist; placeholder safety statistics must never deploy. Structure spec in `plan/growth-phase-plan.md` (untracked, local).
- [ ] **Framer Motion → CSS migration** — descoped from the 2026-07 redesign (14 files import it, incl. mobile-menu focus trap and AnimatePresence transitions); needs its own careful pass. `useReducedMotion()` is already applied in the components that animate.
- [ ] **SEO next steps** — article cluster (see suggestions above), `Organization` JSON-LD with the new logo, Search Console sitemap submission, blog RSS feed.
