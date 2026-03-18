# SafetyStudio.net — Improvement Tracker

## Completed

### Tier 1: High Impact, Quick Wins
- [x] **Color contrast fix** — Muted color `#8a9ab5` → `#9fb0cc` for WCAG AA. Low-opacity variants bumped to `/70` min.
- [x] **SEO: OG tags, structured data, sitemap, robots.txt** — OpenGraph + Twitter cards on all pages. Organization JSON-LD (layout), Article JSON-LD (blog). `sitemap.xml` auto-generated. `robots.txt` created.
- [x] **Skip-to-content link** — Visually-hidden link in root layout. `id="main-content"` on all `<main>` elements.
- [x] **Mobile nav keyboard support** — Escape key closes menu, focus trap, `aria-expanded` on hamburger, `role="dialog"` on menu panel, focus returns to trigger on close.
- [x] **Reduced motion** — `scroll-behavior: smooth` wrapped in `prefers-reduced-motion: no-preference`.
- [x] **Custom 404 page** — Branded `app/not-found.tsx` with nav, message, and CTA.
- [x] **Footer enhancement** — 3-column: brand + tagline, quick links, industries + ISO alignment.

### Tier 2: High Impact, Moderate Effort
- [x] **Tool discoverability** — Incident Rate Calculator opens by default (`defaultOpen` prop on ToolCard).
- [x] **Calculator "Copy Results"** — Formats all metrics as plain text, clipboard copy with feedback.
- [x] **Calculator input accessibility** — Explicit `id`/`htmlFor` on all inputs.
- [x] **Back-to-top button** — Floating button after 500px scroll, on homepage + blog article.
- [x] **Blog article h2 IDs** — All headings have IDs for future ToC integration.

---

## Remaining (Not Yet Implemented)

### Tier 2
- [ ] **Blog Table of Contents + Reading Progress** — Sticky sidebar ToC on `lg:` screens using IntersectionObserver. Reading progress bar using `useScroll` + `useTransform`.
  - Files: `components/blog/TableOfContents.tsx`, `components/blog/ReadingProgress.tsx`, update blog article layout.

### Tier 3: Nice to Have
- [ ] **More blog content** — Blog index has only 1 post. Suggested next articles:
  - "How to Run an Effective Safety Moment" (cross-links Safety Moment Library)
  - "Understanding HAZOP: A Practical Guide" (cross-links consultancy service)
  - "LTIF vs TRCF: What's the Difference?" (cross-links calculator)
- [ ] **Contact form** — Replace/supplement mailto CTA with a form (Formspree or Web3Forms). File: `components/ContactForm.tsx`, update `components/Contact.tsx`.
- [ ] **Services detail expansion** — Add expandable bullet points to each service card. File: `components/Services.tsx`.
- [ ] **FAQ section** — Accordion FAQ targeting HSE search queries + `FAQPage` JSON-LD schema. File: `components/FAQ.tsx`, insert between About and Contact.
- [ ] **Social proof / testimonials** — Industries served strip or client testimonials in About section. File: `components/About.tsx`.
- [ ] **Framer Motion reduced-motion in components** — Use `useReducedMotion()` hook to conditionally disable animations in Hero, SectionHeader, Services, About, Contact, Button, ToolCard.
