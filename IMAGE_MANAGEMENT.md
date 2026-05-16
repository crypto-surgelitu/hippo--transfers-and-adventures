# IMAGE MANAGEMENT GUIDE

This guide explains how to manage, add, and replace images for packages and excursions in the Hippo Transfers and Adventures website.

---

## 1. FOLDER STRUCTURE

```
public/
├── assets/
│   └── safaris/           ← Package & excursion images live here
│       ├── masai_mara_hero_hq.webp
│       ├── picture 1 of safari .webp
│       ├── picture 3 of safari.webp
│       └── ...
├── brand/
├── logo.webp
├── og-image.webp
└── robots.txt

src/
└── assets/                ← Hero images for pages (imported directly)
    ├── Golden Hour Safari_ Lions Awaken in Masai Mara.webp
    └── ...
```

**IMPORTANT**: Images for packages/excursions MUST be in `public/assets/safaris/`. Files in `src/assets/` are imported directly in components (for hero images), but `public/` files are referenced by URL path.

---

## 2. FILES CONTROLLING IMAGES

### PACKAGE IMAGES

| File | Purpose |
|------|---------|
| `src/data/packages.ts` | Package data including `imageSrc` (card) and `heroImage` (detail page) |
| `src/components/PackageCard.tsx` | Renders package cards using `imageSrc` prop |

### EXCURSION IMAGES

| File | Purpose |
|------|---------|
| `src/data/excursions.ts` | Excursion data including `imageSrc` and `heroImage` |
| `src/components/ExcursionCard.tsx` | Renders excursion cards using `imageSrc` prop |

### PAGE RENDERING

| File | Purpose |
|------|---------|
| `src/app/packages/page.tsx` | Maps data to cards |

---

## 3. HOW THE IMAGE SYSTEM WORKS

### Data Structure (in `packages.ts` / `excursions.ts`)

```typescript
export interface SafariPackage {
  slug: "1-day-tsavo-east",      // URL slug - links to /packages/1-day-tsavo-east
  title: "1 Day Private Safari to Tsavo East",
  imageSrc: "/assets/safaris/picture 3 of safari.webp",  // Card image path
  heroImage: "/assets/safaris/picture 3 of safari.webp", // Detail page hero
  // ...
  itinerary: [
    {
      day: "1",
      image: "/assets/safaris/picture 1 of safari .webp"  // Day-specific image
    }
  ]
}
```

### Component Flow

```
packages.ts (data) 
    ↓
packages/page.tsx (maps data to components)
    ↓
PackageCard.tsx (receives props)
    ↓
<Image src={imageSrc} /> renders the image
```

---

## 4. HOW TO REPLACE IMAGES

### STEP 1: Add Image to Folder

1. Convert your image to WebP format
2. Place in: `public/assets/safaris/`
3. Name it clearly (e.g., `tsavo-elephants.webp`)

### STEP 2: Update the Data File

In `src/data/packages.ts` or `src/data/excursions.ts`:

**For card images (most common):**

```typescript
// Find the package you want to change
{
  slug: "1-day-tsavo-east",
  title: "1 Day Private Safari to Tsavo East",
  // ... other fields ...
  imageSrc: "/assets/safaris/tsavo-elephants.webp",  // CHANGE THIS LINE
  heroImage: "/assets/safaris/tsavo-elephants.webp", // CHANGE THIS TOO
  // ...
}
```

**For itinerary/day images:**

```typescript
itinerary: [
  {
    day: "1",
    title: "Morning Game Drive",
    // ...
    image: "/assets/safaris/tsavo-elephants.webp"  // CHANGE THIS LINE
  }
]
```

---

## 5. EXCURSION IMAGES

In `src/data/excursions.ts`:

```typescript
{
  slug: "wasini-island",
  title: "Wasini Island",
  // ...
  imageSrc: "/assets/safaris/your-new-image.webp",    // Card image
  heroImage: "/assets/safaris/your-new-image.webp",   // Hero image
  // ...
}
```

---

## 6. CURRENT IMAGE PATHS (Example)

From `packages.ts`:

```typescript
imageSrc: "/assets/safaris/masai_mara_hero_hq.webp",
heroImage: "/assets/safaris/masai_mara_hero_hq.webp",
```

### Available Images in `public/assets/safaris/`

- `download.webp`
- `Golden Hour Safari_ Lions Awaken in Masai Mara.webp`
- `Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp`
- `masai_mara_hero_hq.webp`
- `Our Readers' Favorite 10 African Safari Tours in 2021.webp`
- `picture 1 of safari .webp`
- `picture 3 of safari.webp`
- `Why Does The Great Migration Occur In East Africa_.webp`

---

## 7. SAFE WORKFLOW FOR ADDING IMAGES

### 1. Prepare your image

- Convert to WebP format
- Recommended size: 1920x1080 max for heroes, 800x600 for cards

### 2. Add to folder

```
Copy: your-image.webp
To: public/assets/safaris/your-image.webp
```

### 3. Update data file

```typescript
// In src/data/packages.ts or src/data/excursions.ts
imageSrc: "/assets/safaris/your-image.webp",
heroImage: "/assets/safaris/your-image.webp",
```

### 4. Verify

- Run `npm run build` to ensure no errors
- Check image renders correctly

---

## 8. COMMON MISTAKES TO AVOID

| Mistake | Problem | Solution |
|---------|---------|----------|
| Adding to `src/assets/` | Won't work for dynamic URLs | Use `public/assets/` for referenced paths |
| Wrong path format | 404 errors | Use `/assets/safaris/image.webp` (with leading slash) |
| Not WebP format | Larger file sizes | Convert to WebP |
| Wrong slug | Broken "View Details" link | Match the slug exactly in URL |
| Case mismatch | Linux servers are case-sensitive | Match exact case in filenames |

---

## 9. IMAGE PATHS SUMMARY

| Type | Path Format | Example |
|------|-------------|---------|
| Card | `/assets/safaris/filename.webp` | `/assets/safaris/masai_mara_hero_hq.webp` |
| Hero | `/assets/safaris/filename.webp` | `/assets/safaris/masai_mara_hero_hq.webp` |
| Itinerary | `/assets/safaris/filename.webp` | `/assets/safaris/picture 1 of safari .webp` |

All paths start from `public/` folder, so `/assets/safaris/` = `public/assets/safaris/`

---

## 10. IMAGE REQUIREMENTS

- **Format**: WebP (required for performance)
- **Naming**: Use lowercase, descriptive names with hyphens or underscores
- **Size**: 
  - Hero images: Max 1920x1080px
  - Card images: Max 800x600px
  - Thumbnails: Max 400x300px
- **Quality**: 80-90% quality for optimal file size

---

## 11. DYNAMIC ROUTING

Package and excursion pages use slugs to generate dynamic routes:

- URL: `/packages/1-day-tsavo-east`
- Slug: `1-day-tsavo-east`
- Links to: `src/app/packages/[slug]/page.tsx`

The slug must match exactly between the data file and the URL.

---

## 12. ACCESSIBILITY

All images use descriptive alt text generated from the package/excursion data:

```typescript
alt={`${title} - ${duration} safari to ${location}`}
```

Ensure new images have meaningful context for screen readers.