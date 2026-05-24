# iPhone 13 Mobile Scaling Fix - Prompt for Agent

## Problem
On iPhone 13 (and likely other iOS devices), the website exhibits erratic zooming, layout breaking, and content cutoff when scrolling. The hero section shrinks, footer shows on half the screen, and the page zooms in/out unexpectedly. This is caused by a manually added `<head>` tag with a viewport meta tag conflicting with Next.js 14 App Router's automatic viewport handling.

## Task
Fix the mobile scaling issue in `src/app/layout.tsx` by:
1. Removing the manual `<head>` element containing the viewport meta tag
2. Adding a proper `viewport` export for Next.js 14 App Router
3. Ensuring no other width/overflow CSS conflicts exist

## Instructions

### Step 1: Remove manual `<head>` tag
Delete this entire block from the `RootLayout` component's JSX:
```tsx
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

The `<html>` tag should look like this after removal:
```tsx
<html lang="en" className={`light ${plusJakartaSans.variable} ${notoSerif.variable}`}>
  <body className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
```

### Step 2: Add viewport export
Add this export **before** the `metadata` export (at the top level of the file, after imports):

```tsx
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
```

### Step 3: Check for CSS overflow issues
In `src/styles/globals.css` (or wherever your global styles are), ensure there are no rules like:
- `html, body { overflow-x: hidden; }` combined with fixed-width children
- `min-width` values larger than the viewport on mobile
- Any `transform: scale()` or `zoom` properties

If `overflow-x: hidden` exists on `html` or `body`, move it to a wrapper `div` instead, or remove it entirely.

### Step 4: Verify no fixed widths on mobile
Check that no components have hardcoded widths like `w-[500px]` or `min-w-[400px]` without responsive breakpoints. Look especially at:
- Navbar component
- Hero section
- Footer
- Any container/wrapper divs

Replace fixed widths with responsive classes like `w-full md:w-[500px]` or use `max-w` instead of fixed `w`.

## Requirements
- Do NOT remove or modify any existing metadata fields, fonts, imports, or page structure
- Do NOT add `userScalable: false` to the viewport — it hurts accessibility
- Preserve all existing styling, components, and functionality
- Show me the complete updated `layout.tsx` file
- Also show me any changes made to `globals.css` or other files

## Expected Result
After deployment, the site should:
- Load at correct scale on iPhone 13 without zooming
- Scroll smoothly without layout breaking
- Show all content full-width on mobile
- Not zoom in/out when tapping buttons or scrolling
