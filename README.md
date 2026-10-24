# RecBay Production Portfolio Website

**Version:** 1.12.1  
**Last updated:** 2026-10-24  
**Status:** Apple-craft restyle pass (v1.12.0) — near-white surfaces, soft elevation, pill buttons, translucent nav, full-bleed home video hero, frosted About caption card; Archivo Black display, Space Mono metadata, desaturated lime accent

## Table of Contents

1. [Overview](#1-overview)
2. [Project objectives](#2-project-objectives)
3. [Technology stack](#3-technology-stack)
4. [Website structure](#4-website-structure)
5. [Services](#5-services)
6. [Portfolio project concepts](#6-portfolio-project-concepts)
7. [Brand direction](#7-brand-direction)
8. [Concept labeling in the UI](#8-concept-labeling-in-the-ui)
9. [Project detail pages and SEO](#9-project-detail-pages-and-seo)
10. [Case-study template](#10-case-study-template)
11. [Installation and local preview](#11-installation-and-local-preview)
12. [Customization and placeholder inventory](#12-customization-and-placeholder-inventory)
13. [Contact form](#13-contact-form)
14. [Accessibility requirements](#14-accessibility-requirements)
15. [Performance requirements](#15-performance-requirements)
16. [SEO and metadata](#16-seo-and-metadata)
17. [Privacy and legal](#17-privacy-and-legal)
18. [QA/testing checklist](#18-qa-testing-checklist)
19. [Known limitations](#19-known-limitations)
20. [Current project status](#20-current-project-status)
21. [Deployment checklist](#21-deployment-checklist)
22. [License and usage](#22-license-and-usage)
23. [Changelog](#23-changelog)

## 1. Overview

RecBay is a creative production team specializing in video editing, visual production, commercials and brand films, photography, motion graphics and visual effects (VFX), and color grading.

This website serves as RecBay's digital portfolio, presenting its creative identity, showcasing selected projects, explaining its services, and providing a point of contact for potential clients and collaborators.

The website uses an Apple-craft premium design system on near-white `#fbfbfd`: system sans body copy at 17px, hairline borders at 6% opacity, soft low-opacity shadows, pill buttons and filter chips, rounded media cards (8/12/16/24px radii), 120–340ms ease-out/spring motion, and a strict 8pt spacing grid. Archivo Black remains the display voice (sentence case, balanced lines) and Space Mono remains reserved for labels, eyebrows, metadata, and small stats. The accent is a desaturated lime `#a8e63a`, used for state, focus rings, nav CTA, and one CTA row per page. The homepage opens with a full-bleed muted video hero with floating type; Work opens with a rounded hero image frame containing the softened scroll pull-back (1.08 → 1.0) plus pill filter chips; About keeps the full-bleed B&W hero with a frosted-glass caption card and a deliberately dark editorial interior. A device-aware light/dark theme is first-class on every page — every token has a dark equivalent — with the visitor's explicit choice stored locally.

## 2. Project objectives

The website is designed to:

- Establish RecBay's online brand presence.
- Showcase creative projects and production capabilities.
- Communicate services to individual clients, businesses, brands, and creative collaborators.
- Provide a dedicated space for project descriptions and visual presentations.
- Encourage potential clients to initiate production inquiries.
- Establish a foundation for future website expansion.

## 3. Technology stack

The website uses standard front-end web technologies.

- **HTML5:** Structures the website's pages and content.
- **CSS3:** Controls the visual identity, layouts, typography, responsiveness, and animations.
- **JavaScript:** Supports interactive elements, including project filtering, navigation interactions, and contact-form handling.

The website is designed as a static front-end project and does not currently require a database or server-side application.

## 4. Website structure

### 4.1 Pages

| File | Purpose | Status |
|---|---|---|
| `index.html` | Homepage: full-bleed muted video hero with floating type, the 15-second showreel section, a selected-work grid, services, process, and a contact banner. | Exists |
| `work.html` | Portfolio gallery: "Five projects, four disciplines" intro, category filters (All/Film/Photography/Motion/Grade), concept labelling, and a concept-work notice. | Exists |
| `project-product-film.html` | Static project detail page: Object of Desire (spec commercial concept). | Exists |
| `project-editorial.html` | Static project detail page: In Their Element (editorial photography concept). | Exists |
| `project-short-film.html` | Static project detail page: After Hours (short film concept). | Exists |
| `project-color-study.html` | Static project detail page: Color, Reconsidered (color grading concept). | Exists |
| `project-motion-ident.html` | Static project detail page: Form in Flux (motion design concept). | Exists |
| `services.html` | Overview of RecBay's creative and production services. | Exists |
| `about.html` | Brand introduction, creative philosophy, and team information. | Exists |
| `contact.html` | Contact information and project inquiry form. | Exists |
| `404.html` | Custom page-not-found page. | Exists |
| `privacy.html` | Privacy policy (placeholder draft for review before launch). | Exists |
| `css/styles.css` | Shared stylesheet: layout, typography, responsive rules, animations. | Exists |
| `js/main.js` | Navigation, portfolio filtering, contact-form handling. | Exists |
| `assets/images/recbay-mark.svg` | Starter brand mark used as favicon and icon. Replace before launch. | Exists |
| `sitemap.xml` | Search-engine sitemap (domain placeholder must be updated). | Exists |
| `robots.txt` | Search-engine crawling policy (domain placeholder must be updated). | Exists |

### 4.2 Main navigation

The website is organized around five primary sections:

1. Home
2. Work
3. Services
4. About
5. Contact

Individual project pages provide additional detail without complicating the main navigation.

### 4.3 Project folder structure — existing vs intended

The table below marks each item **Exists** (committed to the repository) or **Intended** (documented structure to be created as content is added). Empty asset directories contain `.gitkeep` files so the folders track in Git; replace the `.gitkeep` files with real assets as production work is added.

| Path | Status | Purpose |
|---|---|---|
| `index.html`, `work.html`, `services.html`, `about.html`, `contact.html`, `404.html`, `privacy.html` | Exists | Website pages |
| `project-*.html` (five files) | Exists | Static project detail pages |
| `README.md` | Exists | Project documentation (this file) |
| `css/styles.css` | Exists | Shared stylesheet |
| `js/main.js` | Exists | JavaScript |
| `assets/images/recbay-mark.svg` | Exists | Starter brand mark / favicon |
| `assets/images/brand/recbay-logo.svg` | Exists | Placeholder brand mark — replace with final owned/licensed logo |
| `assets/images/home/hero-poster.webp` | Exists | Home hero video poster (preloaded on the homepage) |
| `assets/images/home/hero-study.svg` | Exists (unreferenced) | Legacy hero placeholder — superseded by the hero poster and video |
| `assets/images/projects/object-of-desire-card.webp` | Exists | Project card still (Object of Desire); also used as the showreel poster frame |
| `assets/images/projects/in-their-element-card.webp` | Exists | Project card still (In Their Element) |
| `assets/images/projects/after-hours-card.webp` | Exists | Project card still (After Hours) |
| `assets/images/projects/color-reconsidered-card.webp` | Exists | Project card still (Color, Reconsidered) |
| `assets/images/projects/form-in-flux-card.webp` | Exists | Project card still (Form in Flux) |
| `assets/images/projects/*.svg` (five files) | Exists (unreferenced) | Legacy SVG project placeholders — superseded by the WebP cards; safe to delete |
| `assets/images/about/about-hero.webp`, `about-body.webp` | Exists | About hero and body images |
| `assets/images/about/*.svg` (three files) | Exists (unreferenced) | Legacy About placeholders — superseded by the WebP images |
| `assets/images/contact-sheet/*.svg` (twelve files) | Exists (unreferenced) | Legacy Work-hero contact sheet — no longer referenced |
| `assets/videos/hero-16x9.mp4`, `hero-16x9.webm` | Exists (draft) | Home hero looping video; `hero-1x1.mp4`, `hero-9x16.*`, and `hero-v2-9x16.webm` are unused alternate exports |
| `assets/videos/showreel-poster.webp` | Exists | Showreel poster in the homepage showreel section |
| `assets/videos/showreel.mp4` + `.webm` | Exists (draft) | Wired into the homepage showreel section (click-to-play, `preload="none"`); the MP4 is 8.8 MB and needs a compressed final encode |
| `assets/videos/showreyyel.mp4` | Exists (unreferenced) | Typo-named duplicate draft; not referenced anywhere — delete once confirmed |
| `assets/icons/arrow.svg`, `play.svg`, `close.svg` | Exists | Interface icon placeholders |
| `assets/images/brand/`, `assets/images/projects/`, `assets/images/home/`, `assets/images/about/`, `assets/videos/`, `assets/icons/`, `assets/fonts/` | Intended folder structure | `.gitkeep` present in each; replace with real assets as production work is added |

**Note:** `README.txt` was retired; this `README.md` is the single source of project documentation. The folder structure references `README.md`.

## 5. Services

The portfolio presents six core services:

### Video Editing
Professional editing, pacing, storytelling, sequencing, and post-production for digital and commercial content.

### Visual Production
Creative development and production of visual content for brands, individuals, organizations, and digital platforms.

### Commercials and Brand Films
Promotional videos, advertising content, brand stories, and campaign films designed to communicate a clear message.

### Photography
Creative, commercial, editorial, and promotional photography.

### Motion Graphics and VFX
Animated typography, graphic sequences, visual effects, and supporting visual elements for video production.

### Color Grading
Color correction and creative grading to establish visual consistency, mood, and cinematic character.

## 6. Portfolio project concepts

The initial portfolio is built around five original project concepts intended to demonstrate the team's range:

1. **Product Film:** A cinematic product-focused commercial emphasizing lighting, detail, and visual storytelling.
2. **Editorial Photography:** A photographic series demonstrating composition, lighting, and creative direction.
3. **Short Film:** A narrative-driven production highlighting editing, pacing, and storytelling.
4. **Color Grading Showcase:** A demonstration of color treatment, tonal consistency, and visual mood.
5. **Motion Design:** A motion graphics concept demonstrating animation, typography, and visual effects.

These concepts should be replaced or supplemented with actual RecBay productions as they become available. Concept work must be clearly identified as such and should not be represented as commissioned client work.

## 7. Brand direction

The visual identity is an Apple-craft premium system — a production studio that studied Apple, not an Apple product page — with a dark editorial interior on About.

**Core principles:**

- Near-white `#fbfbfd` surfaces (`#000000` in dark mode), near-black `#1d1d1f` (`#f5f5f7`) type, white elevated panels, sunken `#f5f5f7` wells, and a desaturated lime `#a8e63a` accent used only for state, focus, nav CTA, and one CTA row per page.
- No hard borders and no offset shadows: 1px hairlines at 6% opacity, soft low-opacity elevation (`--shadow-sm/md/lg`), radii 8/12/16/24px, pills at 980px.
- One display voice: Archivo Black, sentence case with balanced lines, on home/section/banner headings. Service and project detail headings step down to system sans semibold. Body copy is system sans at 17px; Space Mono is reserved for labels, eyebrows, metadata, and the number rails.
- Motion is 120–340ms: ease-out fades, spring presses (`scale(0.97)`), interruptible, and fully static under `prefers-reduced-motion`.
- Home opens with a full-bleed muted video hero — floating type over a gradient scrim, no frame or badge. Work opens with a rounded hero image frame whose image settles from `scale(1.08)` to `1.0` on scroll (reduced/data-saver static at 1.0) plus pill filter chips.
- Dark mode is first-class: every token (colors, hairlines, shadows) has a dark equivalent, and light-toned artwork is dimmed with a CSS filter and a scrim so it reads as imagery.
- About is the only always-dark editorial section: full-bleed B&W hero with a frosted-glass caption card; everything else follows the active light or dark theme.
- Strict 8-point spacing; clear calls to action and consistent presentation across desktop and mobile devices.

The current wordmark and visual styling serve as an initial brand direction. The final identity can be refined as RecBay establishes its preferred logo, typography, colors, and visual guidelines.

## 8. Concept labeling in the UI

Concept work is labeled in the interface, not only in this document:

- Every project card on `index.html` and `work.html` lists its type and a "Concept" marker in the project meta (for example, "01 · Product film · Concept").
- `work.html` carries a notice under the grid stating that the five projects are self-initiated studies, not commissioned client productions.
- Every static project page lists **Status: Concept / self-initiated** in its project facts.

Concepts must not be represented as commissioned client work. Replace them with real, client-cleared productions as they are produced.

## 9. Project detail pages and SEO

**Decision:** each project has its own static HTML page (`project-product-film.html`, etc.) instead of a single query-parameter detail page.

**Why:** query-parameter detail pages share one URL, one title, and one description across all projects, which harms indexing and makes links impossible to share meaningfully. Static pages give each project a unique URL, unique title and meta description, a canonical URL, and its own Open Graph / Twitter card data — better for SEO and shareability.

The static project pages are the only detail templates; no query-parameter template remains.

When adding future projects, generate a static page per project using the case-study template in Section 10 rather than extending the query-parameter approach.

## 10. Case-study template

Use this template for every finished project page:

```markdown
## [Project title]

**Status:** Concept / self-initiated  |  Completed client work  |  In progress  
**Year:** [YYYY]  
**Disciplines:** [e.g. Production, editing, color]  
**Tools:** [cameras, software, techniques]  
**Credits:** [crew and collaborators]

### Creative brief
The problem or opportunity, the intended audience, and the desired outcome.

### RecBay's role
What RecBay contributed (creative direction, production, editing, grading, etc.).

### Process
The steps taken from brief to delivery.

### Deliverables
What was produced (film, image series, grade, social cuts, etc.).

### Process notes
What was learned, constraints, and decisions worth sharing with prospective clients.
```

Replace concept text with the real case study once each project is produced, and update the status field accordingly.

## 11. Installation and local preview

### Requirements

- A modern web browser.
- A code editor such as Visual Studio Code, if source-code editing is required.

No package manager or build process is required for the basic static website.

### Setup

1. **Clone the repository** (recommended, since the project is distributed via Git):

   ```bash
   git clone <repository-url>
   cd recbay-portfolio
   ```

   Or download the repository as a ZIP from the repository page, extract it, and open the folder.

2. Open the project folder in your preferred code editor.
3. Open `index.html` in a browser to preview the website.

For a more reliable local development environment, use Visual Studio Code with the Live Server extension and launch `index.html` through the local server.

## 12. Customization and placeholder inventory

Before publishing, review and customize the following:

- **Brand identity:** Refine the logo, colors, typography, and brand messaging.
- **Portfolio content:** Replace concept visuals with original photographs, videos, and production stills.
- **Project descriptions:** Add the creative brief, RecBay's role, process, and deliverables (case-study template, Section 10).
- **Contact information:** Replace placeholder email addresses with a working business email and add appropriate social media links.
- **Navigation and links:** Verify that every page and call to action points to the correct destination.
- **Metadata:** Update page titles, descriptions, canonical URLs, and social-sharing information.
- **Accessibility:** Check image alternative text, keyboard navigation, color contrast, and video captions.

### Placeholder inventory

Every item below must be replaced or confirmed before a professional launch:

| Placeholder | Current value | Location(s) | Action before launch |
|---|---|---|---|
| Business email | `annchristine894@gmail.com` | `contact.html`, all page footers | Confirm this is the final business email, or replace it everywhere |
| Social links | None present (deliberate) | Footer | Add real social profiles when they exist; no links are fabricated |
| Form endpoint | Web3Forms with `YOUR_ACCESS_KEY` placeholder | `contact.html`, `js/main.js` | Sign up for Web3Forms, paste the real access key, and test a live submission (Section 13) |
| Domain | `recbay.example` placeholder | `sitemap.xml`, `robots.txt`, canonical and Open Graph URLs on project pages | Purchase a domain and update all URLs |
| Analytics ID | None | Not implemented | Add only with user consent |
| Project images | WebP concept cards | `assets/images/projects/*-card.webp` | Replace with real client work as it is produced; legacy SVG placeholders remain on disk, unreferenced |
| About images | WebP stills | `assets/images/about/about-hero.webp`, `about-body.webp` | Replace with final RecBay photography when available |
| Brand logo | SVG placeholder | `assets/images/brand/recbay-logo.svg`, `assets/images/recbay-mark.svg` | Replace with final owned/licensed logo |
| Showreel | Draft 15-second silent cut | `assets/videos/showreel.mp4` (8.8 MB), `showreel.webm`, `showreel-poster.webp` | Cut and compress the final 60–90 second reel, update the homepage duration copy ("The 15-second cut", "0:15"), and replace the poster (currently byte-identical to the Object of Desire card) |
| Response-time promise | "We reply within one business day" | `contact.html` (aside and form hint), homepage contact banner, contact `<title>` | Confirm the promise is one RecBay can keep, or reword it |
| Icons | SVG placeholders | `assets/icons/arrow.svg`, `play.svg`, `close.svg` | Replace with final icon set |

## 13. Contact form

### Chosen submission method: Web3Forms

The contact form is set up for **Web3Forms**: a static-site-friendly service that forwards submissions to RecBay's business email and requires no backend code. The form in `contact.html` posts to `https://api.web3forms.com/submit` with a hidden `access_key` field, and `js/main.js` submits it via `fetch` with JSON. The access key is currently the literal placeholder `YOUR_ACCESS_KEY` — sign up at web3forms.com, paste the real key into `contact.html`, and test a live submission before launch.

**Alternatives:** Formspree, Netlify Forms, Cloudflare Pages Functions, or a private serverless endpoint. To switch, update the form `action` and the fetch call in `js/main.js`, and re-verify validation and spam protection.

### Implementation

- Built-in HTML5 validation: required fields and `type="email"`.
- **Honeypot field** (`hp`): hidden from users with CSS; any submission containing a value is rejected by the JavaScript handler.
- **Privacy consent:** a required checkbox linked to `privacy.html`.
- **JavaScript handling:** intercepts submit, validates honeypot, consent, and field validity, then posts to the form endpoint and shows inline success/error states (`aria-live="polite"`).
- No submissions are stored by the site itself; they are delivered to RecBay's business email via the form provider.

### Data handling

Submissions contain name, email, service interest, budget, timeline, and message. They are used only to respond to the inquiry and coordinate potential production work. Data is not sold or shared with third parties except as handled by the chosen form provider — review that provider's privacy terms before launch. Data is not used for marketing without explicit consent. See `privacy.html` (placeholder draft, to be finalized before launch).

## 14. Accessibility requirements

- **Alt text:** descriptive alternative text on all content images; empty alt or `aria-hidden` on decorative images.
- **Video:** captions or transcripts for all video content.
- **Keyboard navigation:** all menus, controls, and forms operable by keyboard; visible focus states.
- **Skip link:** "Skip to content" link at the top of every page.
- **Color contrast:** dark-theme text meets WCAG AA (4.5:1 normal text, 3:1 large text).
- **Theme:** the header toggle switches light/dark mode; first visit follows `prefers-color-scheme`, an explicit choice is stored in `localStorage`, and the browser `theme-color` updates with the active theme.
- **Reduced motion:** animations and transitions honor `prefers-reduced-motion: reduce` (already implemented in `css/styles.css`).
- **Semantics:** logical heading order, labels on every input, landmark regions.

## 15. Performance requirements

### Implemented
- **Lazy loading:** `loading="lazy"` + `decoding="async"` on below-the-fold images (project grid, showreel poster, About body); the homepage hero video uses `preload="metadata"` and its poster is preloaded with `fetchpriority="high"`; the Work hero image is `loading="eager"` + `fetchpriority="high"` (it is the LCP element there).
- **Image dimensions:** explicit `width`/`height` on every image to prevent layout shift; the Work hero frame uses a fixed aspect ratio so the pull-back cannot shift layout.
- **Resource hints:** `<link rel="preload">` for the homepage hero poster, the Work hero image, and `css/styles.css`.
- **Simplified loading path:** the Work pull-back runs on a passive scroll listener rAF-throttled to one update per frame and clamps within [0,1]; no keyframes run on load anywhere (services map is static).
- **Deferred JavaScript:** `js/main.js` loaded with `defer`; non-critical JS deferred.
- **Video:** the homepage hero is a muted, inline looping video; the showreel section is poster-first with `preload="none"` and only requests video when the visitor presses play.
- **Reduced motion:** `prefers-reduced-motion: reduce` disables animations/transitions.

### To implement before launch
- **Responsive images:** `srcset`/`sizes` with WebP/AVIF sources and fallbacks for every project still and the About images.
- **Compressed video:** encode `assets/videos/showreel.mp4` (H.264/H.265 or AV1, compressed, web-optimized).
- **Cache headers:** long-lived cache headers for static assets, short-lived for HTML, configured at the host/CDN.
- **Font optimization:** `font-display: swap` if custom fonts are added; self-host to avoid third-party requests.

## 16. SEO and metadata

- Unique page title and meta description on every page.
- Canonical URLs; pick one canonical host (www or non-www) and redirect the other.
- Open Graph and Twitter card tags on project pages for rich sharing.
- `sitemap.xml` and `robots.txt` included; submit the sitemap to search consoles after launch (update the domain placeholders first).
- Favicon included (SVG starter; replace with a final multi-size favicon).
- Custom `404.html` page included.
- Descriptive, human-readable URLs (static project pages, not query parameters).

## 17. Privacy and legal

- Publish a privacy policy (`privacy.html` placeholder included) linked from the contact form and footer.
- Request cookie/analytics consent before enabling any non-essential tracking if analytics are added.
- Confirm licenses for fonts, images, video, music, and icons (see Section 22.3).
- Obtain model/location releases for recognizable people or private property shown in portfolio work.

## 18. QA/testing checklist

- [ ] Mobile layouts (phones, tablets, desktop).
- [ ] Keyboard navigation (Tab order, skip link, menus, forms).
- [ ] Link checks (internal and external links, no broken links).
- [ ] Form testing (validation, honeypot rejection, success/error states, consent).
- [ ] Browser testing (Chrome, Firefox, Safari, Edge; mobile Safari and Chrome).
- [ ] Lighthouse performance audit and axe accessibility audit.
- [ ] W3C HTML and CSS validation.
- [ ] 404 test: missing page returns the custom 404 page and is usable.
- [ ] Live form submission test on staging/production before announcing the site.

## 19. Known limitations

- This is a concept-stage starter: all five portfolio projects are concepts or placeholders, not commissioned client work.
- The contact form is not production-ready until a submission backend is connected, tested, and protected against spam.
- Business contact details, domain, analytics, social links, and final brand assets are missing (see the placeholder inventory in Section 12).
- Query-parameter detail pages are not used in production; the static project pages are authoritative.

## 20. Current project status

| Area | Status | Notes |
|---|---|---|
| Site structure and pages | Done | Home, work, services, about, contact, plus 404 and privacy pages |
| Static project detail pages | Done | Five static project pages |
| Styles, layout, responsiveness | Done | Apple-craft system (near-white surfaces, hairlines, soft elevation, pills, 8pt spacing) with mobile breakpoints and `prefers-reduced-motion` |
| Navigation and skip link | Done | Mobile menu and keyboard-accessible navigation |
| Home hero + showreel | Done | Full-bleed muted video hero with floating type and gradient scrim; poster-first 15-second silent showreel section below |
| Work grid + filters | Done | Filterable 01–05 grid with concept labels and a concept-work notice |
| Typography system | Done | Archivo Black display voice on home/section/banner headings (sentence case, balanced); service and project detail headings step down to system sans semibold; body system sans 17px; Space Mono for labels, metadata, number rails |
| Concept labeling in UI | Done | "Concept" markers on Home and Work cards, notice on `work.html`, status facts on project pages |
| Contact form UI and validation | Done | Honeypot, required consent, success/error states |
| Contact form submission backend | Placeholder | Web3Forms wired; `YOUR_ACCESS_KEY` must be replaced and tested live |
| Placeholder inventory | Done | See Section 12 |
| 404 page, `robots.txt`, `sitemap.xml` | Done | Domain placeholders must be updated before launch |
| Privacy policy page | Placeholder | Draft for legal review before launch |
| Favicon | Placeholder | `recbay-mark.svg`; replace with final brand asset |
| Real business email | Confirm | `annchristine894@gmail.com` used throughout; confirm it is the final address |
| Project images | Concept | WebP concept cards in `assets/images/projects/`; replace with real work as it is produced |
| About images | Draft | WebP stills in place; replace with final RecBay photography when available |
| Showreel | Draft | Wired into the homepage (15-second silent cut); needs a final 60–90 second cut, a compressed encode, and a dedicated poster |
| Final brand identity | Not started | Logo, typography, and colors to be finalized |
| Analytics | Not started | Add only with consent mechanism |
| Domain, DNS, hosting | Not started | See deployment checklist (Section 21) |
| Live form test | Not started | Required before launch |

## 21. Deployment checklist

- [ ] HTTPS enabled on the hosting platform.
- [ ] Custom domain purchased and DNS configured.
- [ ] www vs non-www redirect configured to one canonical host.
- [ ] Cache headers set: short-lived for HTML, long-lived for static assets.
- [ ] Canonical URLs, `sitemap.xml`, and `robots.txt` point to the live domain.
- [ ] Live contact form submission test, including error and consent paths.
- [ ] 404 test: request a missing URL and confirm `404.html` renders.
- [ ] Analytics configured only after the consent mechanism is in place.
- [ ] Favicon and social-preview images present.
- [ ] Honeypot spam protection tested.

## 22. License and usage

### 22.1 Code license

The HTML, CSS, and JavaScript written for this site are intended for RecBay's portfolio. Confirm and insert the chosen code license (for example MIT) before launch.

### 22.2 Original content license

Original text, structure, and concept visuals created for RecBay: © RecBay. All rights reserved. Do not reproduce without permission.

### 22.3 Third-party asset licenses

Fonts, photographs, video footage, music, and icons remain subject to their own licenses. Confirm commercial, web, and modification rights for every third-party asset before publishing. The starter `recbay-mark.svg` is a placeholder brand mark — replace it with a final owned or licensed logo.

## 23. Changelog

### v1.12.1 — 2026-10-24 — Unified project hero

- Project pages (`project-*.html`): the text page-hero and the separate detail-art card merged into one cinematic hero — full-bleed media with a gradient scrim and floating type (mono "Project 0X" eyebrow, Archivo Black title in `#f5f5f7`, short intro), the same system as the Home/About heroes. The duplicated mid-page art card is retired.
- The pull-back from Work now applies here too: the media settles 1.08 → 1.0 as the page scrolls (rAF-throttled, `project-hero--static` for reduced motion/data-saver).
- Hero images are the LCP element: `loading="eager"`, `fetchpriority="high"`, and a per-page `<link rel="preload" as="image">`.
- No structure/copy changes elsewhere; one h1 per page preserved (now `.project-hero__title`). Verified on all five pages × light/dark × 1366/390: no overflow, no broken assets, no console errors.

### v1.12.0 — 2026-10-23 — Apple-craft restyle

- Full restyle of the design system (`css/styles.css` rewritten): near-white `#fbfbfd` surfaces, `#1d1d1f` text, desaturated lime `#a8e63a` accent (only for state/focus/CTA), 1px hairlines at 6% opacity, soft elevation, radii 8/12/16/24 + pills, strict 8pt spacing, 120–340ms ease-out/spring motion. Every token has a dark equivalent (`#000000` ground). All 3px borders, hard offset shadows, rotated stickers, and hard-translate hovers removed.
- Home: full-bleed muted video hero with floating type over a gradient scrim (frame link and rotated badge removed; the poster-first showreel section stays). Rotation-free thumbnail chips on the reel.
- Work: new hero — mono rail ("Selected work" as the h1, services-style), rounded image frame with a softened scroll pull-back (1.08 → 1.0, rAF-throttled, reduced-motion/data-saver static), "05 projects" + "Concept work is labelled." stat, and pill filter chips. The old text page-hero retired.
- Services: the six service nodes are soft-elevation cards that lift 2px on hover, with mono numbers; stage labels are plain mono text; the draw animation stays gone.
- About: the caption is now a frosted-glass card (blur 24px, 10% border) floating bottom-left; entrance fades tightened to 340ms; belief stays system sans over the B&W hero.
- Contact/privacy/404/projects inherit the new chrome: pill buttons, hairline-ringed rounded inputs with lime focus ring, rounded project facts/notice, and plain mono metadata labels replace the rotated "Project 0X" stickers.
- Accessibility and parity verified: one h1 per page, no duplicate IDs, no broken assets or console errors, no horizontal overflow, filters/reel/theme-toggle interactives re-tested, and a full `prefers-reduced-motion` pass (hero video paused with poster visible, Work hero static at scale 1, About static).
- Docs updated for the new system; the Work hero currently reuses the About studio still (`assets/images/about/about-body.webp`) until a dedicated `assets/images/work/work-hero.webp` shot is sourced.

### v1.11.0 — 2026-10-22

- Typography unification: Archivo Black uppercase is now the single display voice site-wide — the service detail headings and project info headings joined it, and the About page's mixed-case editorial heading overrides were removed (the photo-hero belief line stays editorial as the one deliberate exception). Body prose sits at 16–17px in Helvetica Neue; Space Mono is limited to labels, eyebrows, metadata, and buttons.
- Removed the non-clickable fanned project deck and all of its CSS; the Work page's filterable 01–05 grid now owns the portfolio, introduced by "Five projects, four disciplines." with a concept-work notice.
- Homepage: the hero video frame is a link to the showreel section ("Watch the reel" badge), and the poster-first click-to-play showreel moved from Work to the homepage. Honest caption: "Showreel · 0:15 · Silent cut".
- Dark mode: light-toned artwork is dimmed with `brightness(.78) contrast(1.05) saturate(.92)` plus a `rgba(16,16,16,.22)` scrim so stills sit calmly on dark surfaces.
- Concrete copy pass: slogan headlines replaced with specifics site-wide (hero "Video, photo & motion.", "Six services. Production to delivery.", "Understand. Make. Refine.", per-page banners), descriptive `<title>`s on every page, new footer tagline "Video, photo & motion graphics.", and a response-time promise ("We reply within one business day") on the contact page and homepage banner — pending owner confirmation.
- Accessibility: every page now has exactly one `<h1>` (promoted on About, Services, and Contact). Verified at 1366px and 390px in both themes: no horizontal overflow, no duplicate IDs, no broken assets or console errors; the hero anchor lands below the sticky header; filters, reel playback, and the theme toggle verified in-browser.
- Housekeeping: deleted 47 tracked `qa-*` scratch files and the dead lineup/reel CSS; README and ASSET-SOURCING updated for the hero-video, showreel, and Web3Forms reality.

### v1.10.0 - 2026-10-22

- Removed the Home hero video and headline. The homepage now opens with a five-project lineup: a fanned deck on desktop, a stacked deck on mobile.
- The lineup is decorative (`aria-hidden`) and links nowhere; the full project grid below is the accessible navigation.
- Replaced the featured first project card with a uniform project grid containing all five concepts, starting with project 01. The first lineup card repeats as project 01 below.
- Added numbered project metadata on Home (`01 · Product film · Concept`) and simplified the section heading to "All work."
- Retired the Home hero CSS and JS; the old hero video and poster remain on disk but are no longer referenced.
- Updated `ASSET-SOURCING.md` for portrait lineup crops and removed the Home hero loop from the minimum launch set.

### v1.9.0 - 2026-10-22

- Added a device-aware light/dark theme. On first visit the site follows `prefers-color-scheme`; an explicit toggle choice is stored in `localStorage` and applied before CSS to avoid a flash.
- Added a header theme toggle outside the primary navigation so it stays visible on mobile. It updates its accessible label, title, and the `theme-color` meta tag, and continues following system changes until the visitor makes an explicit choice.
- Added dark tokens for page surfaces, panels, text, borders, hard shadows, form controls, notices, and lime accent surfaces; the About hero and team section remain dark/editorial in both modes.
- Fixed the active Contact nav CTA contrast in dark mode and verified no horizontal overflow at 390, 520, 800, 801, 1024, and 1366px. Lighthouse remains 100 for Accessibility, Best Practices, and SEO on tested pages in both themes.

### v1.8.0 — 2026-10-21

- Home hero rebuilt as a true full-bleed video: the `<video>` is now a direct child of `.hero` (not inside the max-width container), so it covers the viewport edge to edge.
- Added a two-way legibility scrim over the video and moved the hero copy to a bottom-left anchor with a hairline rule — the headline no longer collides with the video frame, and the CTA is a light solid button that reads over footage.
- Home headline capped at `clamp(40px, 6.2vw, 88px)` with a 16ch measure; removed the invalid `loading`/`decoding`/`fetchpriority` attributes from `<video>` and the empty caption track.
- Showreel video no longer uses `class="hero-image"` (which forced `position:absolute; z-index:-1` and hid it); introduced a normal-flow `.showreel` component. Both videos are silent, autoplay, looping, and control-free.
- Work hero layout fixed: the visual was `height:100%` inside an auto-height parent and collapsed to zero, which also exposed a native horizontal scrollbar. The visual is now absolutely inset to a full-width hero, the strip fills the row, and the scrollbar is gone.
- Work hero metadata reorganised into label/date + a bottom rail (count + trust line + filters). Meta is visible at rest; filters are clickable again (`pointer-events` was disabled by the parent).
- Project count is now derived in JS from `.project-grid .project-card[data-category]` and rendered as `05 PROJECTS` (HTML fallback also updated from 24).
- Mobile work strip is a duplicated, seamless marquee instead of an overflowing scroller.
- Services hero rebuilt as a 6-column grid: stage labels (`CAPTURE / SHAPE / DELIVER`) span two nodes each, dots sit on a single hairline, and names no longer overlap the line or run off-screen. The sixth node is visible.
- Services mobile is a left-aligned vertical timeline (dot · number · name) with the stage labels as a `CAPTURE → SHAPE → DELIVER` legend — no competing numerals.
- Services line now draws vertically on mobile (`scaleY`) and horizontally on desktop, with matching static/reduced-motion fallbacks.
- About hero fixed: the image wrapper was `height:100%` inside an auto-height container and collapsed to zero, hiding the still and pushing the caption to the top. The image is now an absolute full-bleed layer with a bottom-weighted scrim.
- About caption is a balanced two-column bottom rail (belief + fact left, "The team ↓" right) instead of a corner block with dead space; mobile stacks cleanly.
- Placeholder `room-still.svg` lightened so the production-room scene is actually legible behind the scrim.
- Footer/CTA and mobile hero rules retuned for `100svh` and the new bottom-anchored layout.
- Removed the global `img[loading="lazy"]{opacity:0}` gate. Nothing ever added `.is-loaded`, so every lazy-loaded thumbnail, contact-sheet still, and project image was invisible.
- Work filter categories corrected (`post` → `grade` / `motion`); Motion and Grade no longer return an empty grid.
- Privacy page switched from the two-column `about-grid` to a single readable `legal-layout`.
- Added explicit no-JS fallbacks for the services diagram and about caption so they render fully if JS fails.
- Video playback is now started explicitly with `video.play()` after load (some browsers defer attribute autoplay). The call is muted and failure-safe; `prefers-reduced-motion` and `Save-Data` visitors keep the poster instead of a moving loop.
- Accessibility: removed the redundant `aria-label` on wordmark links so the visible text is the accessible name; raised contrast on light-surface metadata (`#777` → `#666`), hero numerals (`#8a8a8a`), dark-surface small notes (`#9a9a9a`), and stopped the consent sentence inheriting the lime required-field colour.
- Lighthouse (desktop-headless run): Home, Work, Services, About, and Contact all score 100 for Accessibility and SEO; Best Practices 100 where reported.

### v1.7.0 — 2026-10-21

- Privacy checkbox: reduced from 44px touch target to 20px square — no longer oversized.
- About hero caption: spans full width (left:6vw to right:6vw) instead of crammed in corner; eliminates empty dark space below caption.
- Services hero mobile: nodes stack vertically (dot → number → name) instead of horizontal row — numbers no longer compete with text.
- Videos: autoplay loop muted, `controls` attribute removed — clean UI, no player chrome.
- Home hero video: `hero-16x9.webm` and `hero-16x9.mp4` now autoplay looping; poster shows until video loads.
- Showreel video: `autoplay loop muted playsinline` without `controls`; `showreel.mp4` still needs to be sourced.

### v1.6.0 — 2026-10-21

- Work hero project count made data-driven: counts `.project-card[data-category]` elements and writes `NN PROJECTS` into the hero — never hardcoded.
- Contact page: no hero section (flagged in README §7 — needs its own brief before assets can be listed).

### v1.5.0 — 2026-10-21

- About page hero replaced with documentary still (full-height monochrome image + bottom-left caption block).
  - 100vh full-bleed monochrome still with duotone treatment (grayscale + contrast in CSS).
  - Ambient drift: scales 1.000 → 1.030 → 1.000 over 12s, imperceptible frame to frame.
  - One-time entrance (~900ms): hairline draws, then belief line, fact line, and scroll cue fade up together.
  - Caption block: belief line ("We build films frame by frame."), fact line, "The team ↓" scroll cue.
  - Metadata rail: ABOUT (top-left), EST. 20XX (top-right).
  - Mobile: 70vh, caption full-width bottom-aligned.
  - Fallbacks: prefers-reduced-motion, no-JS, Save-Data all render static.
  - Placeholder images: assets/images/about/room-still.svg (default), assets/images/about/portrait-still.svg (alternate).
  - Body enhanced: founding story, team roles, process steps.

### v1.4.0 — 2026-10-21

- Services page hero replaced with production chain diagram (routing table).
  - 70vh static hero with 6 numbered service nodes on a single hairline: CAPTURE → SHAPE → DELIVER.
  - Functions as jump-nav into each service section below.
  - One-time draw animation (~1.4s), then completely still — no video, no scroll-linked motion.
  - Bottom CTA line: "Not sure what you need? → Start a project" for visitors who don't know the vocabulary.
  - Mobile: vertical timeline with stage dividers, 44px tap targets.
  - Fallbacks: prefers-reduced-motion, no-JS, Save-Data all render static.
- Service body sections enhanced with scope notes under each description.

### v1.3.0 — 2026-10-21

- Work page hero replaced with scroll-linked pull-back (no video).
  - 90vh hero (60vh mobile) with one tight-cropped project still that pulls back to full frame as the visitor scrolls.
  - Dark overlay lightens from 55% → 20% as the image pulls back.
  - Contact-sheet strip (12 stills) slides up from the bottom and resolves into the grid; on mobile it becomes an 18s auto-marquee.
  - Utilitarian type only: SELECTED WORK label, 2024—2026 date range, data-driven PROJECTS count, "Concept work is labelled" trust line, and filter chips — no headline.
  - Scroll-linked via `requestAnimationFrame`-throttled JS; static fallback for `prefers-reduced-motion`, `Save-Data`, and no-JS.
  - Contact sheet placeholders in `assets/images/contact-sheet/01–12.svg`.

### v1.2.0 — 2026-10-21

- Mobile-first optimizations: `viewport-fit=cover` for safe areas on notched devices.
- Touch targets: 44px minimum on all buttons, nav links, filter buttons, and form controls.
- `touch-action: manipulation` on all interactive elements to remove 300ms tap delay.
- `font-size: 16px` on form inputs to prevent iOS auto-zoom on focus.
- `fetchpriority="high"` on the hero image for faster LCP on mobile.
- `inputmode="text"` on name and timeline fields for better mobile keyboards.
- Safe area insets (`env(safe-area-inset-*)`) on header, footer, and sections.
- `100dvh` hero height for mobile address bar handling.
- Larger tap targets on mobile navigation (56px min-height links).
- Responsive grid: single-column project grid below 520px.

### v1.1.0 — 2026-10-21

- Removed arrows from all CTA buttons for a cleaner, human feel.
- Removed AI-feeling decorative elements: outline text, status dots, grain overlays, framed hero with play button, rotated banner stamp, CSS-generated abstract shapes, and concept badges.
- Replaced decorative CSS art with SVG placeholder images in `assets/images/`.
- Simplified page copy and headings.
- Updated all HTML to clean, unminified markup.
- `README.txt` retired; this `README.md` is the single documentation source.

### v1.0.0 — 2026-10-20

- Initial public documentation release.
- Static site foundation: six core pages plus 404 and privacy pages.
- Five generated static project detail pages for SEO and shareable URLs.
- Contact form hardened: honeypot, required privacy consent, validation, success/error states.
- Concept work labeled in the UI; placeholder inventory and status table added.
- Accessibility, performance, SEO, privacy, QA, deployment, and licensing sections added.
- `README.txt` retired; this `README.md` is the single documentation source.
