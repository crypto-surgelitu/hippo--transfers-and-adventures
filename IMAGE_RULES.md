# IMAGE_RULES.md

**MANDATORY RULE:** Before making any image-related changes, agents MUST read this document completely. This file ensures visual consistency, high performance, and scalable asset management.

---

# IMAGE PHILOSOPHY
The imagery is the core of the Hippo Adventures brand. Every image must evoke a premium, cinematic safari and coastal experience.

---

# FORMAT & OPTIMIZATION

## MUST:
- Use **WebP** format for all production assets.
- Use the **Next.js `<Image />`** component for all images.
- Provide a descriptive `alt` tag for SEO and accessibility.
* Use `priority` prop only for LCP (Largest Contentful Paint) elements (e.g., Homepage Hero, Navbar Logo).

## MUST NOT:
- Use oversized RAW/high-resolution JPGs or PNGs in production.
- Use placeholders or generated AI imagery with visible artifacts.
- Bypass Next.js Image optimization by using standard `<img>` tags.

---

# SCALABLE ARCHITECTURE

Images must be organized into a predictable folder structure within the `public/` directory.

## FOLDER STRUCTURE:
```text
public/images/
  ├── packages/          # Safari Package specific assets
  │   ├── masai-mara/
  │   ├── amboseli/
  │   └── [package-slug]/
  ├── excursions/        # Day Tour & Excursion specific assets
  │   ├── wasini-island/
  │   └── [excursion-slug]/
  ├── brand/             # Logos, icons, and brand-wide assets
  └── ui/                # UI-specific backgrounds or textures
```

## NAMING CONVENTION:
Within each package/excursion folder:
- `card.webp`: The primary thumbnail for listing pages (approx. 800x600).
- `hero.webp`: The cinematic header image for detail pages (approx. 1920x1080).
- `gallery-[1..n].webp`: Additional experience/itinerary images.

---

# RESPONSIVENESS & SIZING

## CARD IMAGES:
- **Aspect Ratio**: 4:3 (Preferred)
- **Object Fit**: `object-cover`
- **Sizes Attribute**: `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"`

## HERO IMAGES:
- **Height**: Minimum `60vh` to `80vh`.
- **Object Fit**: `object-cover`
- **Presentation**: Use gradient overlays (e.g., `from-black/60 to-transparent`) to ensure text readability.

---

# PACKAGE/EXCURSION MAPPING

Always use the centralized mapping utility if available.

## DATA REFERENCES:
- Safari Packages: `src/data/packages.ts`
- Excursions: `src/data/excursions.ts`
- Mapping Logic: `src/data/image-mapping.ts`

When adding new packages, ensure the `slug` matches the folder name in `public/images/packages/`.

---

# QUALITY STANDARDS
- **Consistency**: All package cards in a grid must feel unified in color tone and quality.
- **Clarity**: Subject matter (animals, landscapes, boats) must be clear and centered where possible.
- **Tone**: Favor warm, golden-hour lighting or vibrant coastal blues. Avoid dull or low-contrast photography.
