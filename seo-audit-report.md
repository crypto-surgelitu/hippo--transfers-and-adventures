# SEO & Indexing Audit Report

**Project:** Hippo Transfers and Adventures
**Date:** June 2, 2026
**Scope:** Static code analysis of all routes, metadata, sitemap, robots.txt, internal linking, structured data, and canonical tags.
**Runtime not verified.**

---

## Pages Inventory

| Page | Route | File |
|------|-------|------|
| Home | `/` | `src/app/page.tsx` |
| Packages | `/packages` | `src/app/packages/page.tsx` |
| Package Detail | `/packages/[slug]` (×10) | `src/app/packages/[slug]/page.tsx` |
| Excursions | `/excursions` | `src/app/excursions/page.tsx` |
| Excursion Detail | `/excursions/[slug]` (×4) | `src/app/excursions/[slug]/page.tsx` |
| About | `/about` | `src/app/about/page.tsx` |
| Contact | `/contact` | `src/app/contact/page.tsx` + `src/app/contact/layout.tsx` |
| Privacy Policy | `/privacy-policy` | `src/app/privacy-policy/page.tsx` |
| API | `/api/contact` | `src/app/api/contact/route.ts` |

---

## 1. Sitemap (`src/app/sitemap.ts`)

**Pages included:** `/`, `/packages`, `/about`, `/contact`, all 10 package details, all 4 excursion details

**Pages MISSING from sitemap:**
- `/excursions` — the excursions listing page is omitted entirely
- `/privacy-policy` — the privacy policy page is omitted entirely

**Priority scheme:** Home=1.0, Package details=0.9, Static pages=0.8, Excursion details=0.8

---

## 2. Robots.txt (`public/robots.txt`)

- `Allow: /` for all user agents
- `Disallow: /api/` (correct)
- `Sitemap:` points to `https://hippotransfersandadventures.com/sitemap.xml`
- `Crawl-delay: 1`

No issues detected in robots.txt.

---

## 3. Metadata Analysis

### Root Layout (`src/app/layout.tsx`)
- `metadataBase`: `process.env.NEXT_PUBLIC_SITE_URL || 'https://hippotransfersandadventures.com'` — correct
- Title template: `'%s | Hippo Transfers and Adventures'`
- Default title: `'Hippo Transfers and Adventures | Kenya Safari Packages'`
- Indexing: `index: true, follow: true` — correct

### CRITICAL: Title Duplication via Template

The root layout defines `title.template: '%s | Hippo Transfers and Adventures'`, but **every page already includes the brand name** in its own title. The template appends it a second time.

| Page | Child Title | Rendered Title |
|------|-------------|----------------|
| Home | `Hippo Transfers and Adventures \| Luxury Safari Experiences` | `Hippo Transfers and Adventures \| Luxury Safari Experiences \| Hippo Transfers and Adventures` |
| Packages | `Safari Packages & Excursions \| Hippo Transfers and Adventures` | `Safari Packages & Excursions \| Hippo Transfers and Adventures \| Hippo Transfers and Adventures` |
| Excursions | `Day Tours & Excursions \| Hippo Transfers and Adventures` | `Day Tours & Excursions \| Hippo Transfers and Adventures \| Hippo Transfers and Adventures` |
| About | `Our Story \| Hippo Transfers and Adventures` | `Our Story \| Hippo Transfers and Adventures \| Hippo Transfers and Adventures` |
| Contact | `Contact Us \| Hippo Transfers and Adventures` | `Contact Us \| Hippo Transfers and Adventures \| Hippo Transfers and Adventures` |
| Privacy Policy | `Privacy Policy \| Hippo Transfers and Adventures` | `Privacy Policy \| Hippo Transfers and Adventures \| Hippo Transfers and Adventures` |

**All 7 static pages have brand name duplicated in their rendered `<title>` tag. This is a critical SEO defect** — titles become 70+ characters with redundant branding, which may trigger truncation and looks like keyword stuffing.

### OpenGraph `url` is a Relative Path

Root layout sets `openGraph.url: '/'` — a relative path instead of an absolute URL. When individual pages override OG metadata (Packages, Excursions, About, Contact, Privacy Policy), they omit `url`, so **all pages inherit `og:url: /`** instead of their own canonical URL (e.g., `/packages`, `/about`). This means a shared OG URL across every page, confusing crawlers.

### Contact Page: Duplicate Metadata Definitions

Two files define `export const metadata` for `/contact`:
- `src/app/contact/layout.tsx` — `title: 'Contact Us | Hippo Transfers and Adventures'`, `description: 'Get in touch with our safari specialists...'`
- `src/app/contact/page.tsx` — `title: 'Contact Us | Hippo Transfers and Adventures'`, `description: 'Connect with our safari specialists to craft a personalized...'`

While the page's metadata will override the layout's in the final output, having both creates a **clear conflict** with **different descriptions**.

### Dynamic Page Meta Descriptions Too Short

Package and excursion detail pages use `generateMetadata()` that copies the data object's `description` field. Several are too short for effective SEO:

| Package | Description | Length |
|---------|-------------|--------|
| "7 Days: Masai Mara to Tsavo East" | "A grand tour across Kenya's most famous landscapes..." | ~80 chars |
| "1 Day Private Safari to Tsavo East" | "An intensive day trip to Kenya's largest national park..." | ~89 chars |
| Others | Similar pattern | 80-100 chars |

Optimal meta description length is 150-160 characters.

---

## 4. Canonical Tags

**No canonical tags (`<link rel="canonical">`) are set on any page.** Neither the root layout nor any individual page exports `alternates: { canonical: ... }` in their metadata. Next.js App Router does not auto-generate canonical tags.

This means Google must determine canonical URLs on its own, risking split ranking signals.

---

## 5. Structured Data (JSON-LD)

| Page | Structured Data |
|------|----------------|
| `/` (Home) | `TravelAgency` schema (name, url, logo, address, areaServed, sameAs, telephone, email, priceRange) |
| `/packages` | None |
| `/packages/[slug]` | None — **missed opportunity: these should have `TouristTrip` or `Product` schema** |
| `/excursions` | None |
| `/excursions/[slug]` | None |
| `/about` | None |
| `/contact` | None — **missed: should have `ContactPoint` schema** |
| `/privacy-policy` | None |

---

## 6. Internal Linking & Orphan Pages

### `/excursions` — ORPHAN PAGE

The `/excursions` listing page is:
1. Not linked from the navbar (navbar has Home, Packages, Our Story, Contact)
2. Not linked from the footer (footer links to `/packages` as "Day Tours" but never to `/excursions`)
3. Not linked from the home page
4. Not in the sitemap

Excursion detail pages (`/excursions/[slug]`) are linked from `/packages` page (the excursions section there uses `ExcursionCard` components that link to individual slugs), but the `ExcursionCard` is also used on `/excursions` itself — a page crawlers may never find.

**This page is effectively invisible to search engines.**

### Footer Link Text Mismatches

| Footer Label | Links To | Problem |
|-------------|----------|---------|
| "Sustainability" | `/about` | About page does not specifically cover sustainability |
| "Travel Guides" | `/packages` | Packages listing, not travel guides |
| "Day Tours" | `/packages` | Should likely go to `/excursions` or `/packages#day-tours` |

These are not broken links but **misleading anchor text** that sets wrong user/crawler expectations.

---

## 7. Route Generation

Neither `src/app/packages/[slug]/page.tsx` nor `src/app/excursions/[slug]/page.tsx` export `generateStaticParams()`. The 10 package pages and 4 excursion detail pages will be dynamically server-rendered (no pre-rendering at build time), which increases TTFB for crawlers but does not block indexing.

---

## 8. Indexing Assessment per Page

| Page | Indexable | In Sitemap | Canonical | Linked Internally | Status Code |
|------|-----------|------------|-----------|-------------------|-------------|
| `/` | Yes | Yes | Unset | Yes | 200 |
| `/packages` | Yes | Yes | Unset | Yes | 200 |
| `/about` | Yes | Yes | Unset | Yes | 200 |
| `/contact` | Yes | Yes | Unset | Yes | 200 |
| `/excursions` | Yes | **Missing** | Unset | **Orphan** | 200 |
| `/privacy-policy` | Yes | **Missing** | Unset | Yes (footer) | 200 |
| `/packages/[slug]` (×10) | Yes | Yes | Unset | Yes (from /packages) | 200 |
| `/excursions/[slug]` (×4) | Yes | Yes | Unset | Yes (from /packages) | 200 |

---

## Summary of Issues

### Pages Google May Fail to Index
1. **`/excursions`** — orphan page, not in navbar, footer, home page, or sitemap. Near-invisible to crawlers.

### Pages Missing from Sitemap
1. `/excursions` — listing page omitted
2. `/privacy-policy` — legal page omitted

### Critical Metadata Problems
1. **Title duplication on ALL 7 static pages** — brand name appears twice due to template + child title both containing it
2. **OG `url` set to `/` on all pages** — relative path, never overridden per page
3. **Contact page has conflicting metadata in both `page.tsx` and nested `layout.tsx`** — two different descriptions

### Canonical Issues
1. **Zero canonical tags across the entire site** — no page declares `<link rel="canonical">`

### Structured Data Gaps
1. No `TouristTrip`/`Product` schema on any of the 14 tour/package pages
2. No `ContactPoint` schema on the contact page
3. No `Organization` schema on the about page

### Content Quality
1. Dynamic package and excursion detail pages use descriptions that are too short (~80-100 chars) for meta descriptions

### Internal Linking
1. Footer labels "Sustainability" → `/about` and "Travel Guides" → `/packages` have misleading anchor text
2. No breadcrumb navigation on any page (lost depth context for crawlers)
