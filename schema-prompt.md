# Schema.org Structured Data Prompt for Agent

## Task

Open `src/app/page.tsx` and add Schema.org JSON-LD structured data for the homepage.

## Instructions

1. Use a `<script type="application/ld+json">` tag placed inside the returned JSX (before the main page content).
2. Render the script tag using `dangerouslySetInnerHTML` with `JSON.stringify(schema)` inside the page component's returned JSX.
3. Place it at the top level of the page content (before the first section).
4. If there are already other `<script>` tags on the page, place this one alongside them.
5. **Do not remove or modify any existing page sections, components, or imports.**
6. If the project already has a phone number or email address used elsewhere (like in the contact page or WhatsApp component), pull the real values from there instead of using placeholders. If not, use placeholder values and mark them clearly with a `// TODO: update` comment.
7. Show me the complete updated `page.tsx` file after making the changes.

## Schema Object

Use this exact schema object, but fill in any real values if they exist in the project:

```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Hippo Transfers and Adventures",
  "url": "https://www.hippotransfersandadventures.com",
  "logo": "https://www.hippotransfersandadventures.com/logo.webp",
  "image": "https://www.hippotransfersandadventures.com/og-image.webp",
  "description": "Luxury safari packages, airport transfers, and coastal excursions in Kenya. Explore Tsavo, Amboseli, Masai Mara and more with expert local guides.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressLocality": "Mombasa"
  },
  "areaServed": [
    { "@type": "City", "name": "Mombasa" },
    { "@type": "City", "name": "Diani Beach" },
    { "@type": "City", "name": "Nairobi" },
    { "@type": "City", "name": "Malindi" },
    { "@type": "City", "name": "Watamu" }
  ],
  "telephone": "+254-XXX-XXX-XXX",
  "email": "info@hippotransfersandadventures.com",
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/YOUR_PAGE",
    "https://www.instagram.com/YOUR_HANDLE"
  ]
}
```

## Example Implementation Pattern

```tsx
const schema = {
  // ... schema object above ...
};

// Inside your page component return:
<>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
  {/* existing page content */}
</>
```

## Output

Show me the **complete updated `page.tsx` file** after making the changes.
