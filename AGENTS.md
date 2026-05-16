# AGENTS.md

**MANDATORY RULE:** Before starting any work in a session, you MUST read AGENTS.md completely. This file is the absolute authority for all development decisions. No work should begin without reviewing these guidelines first.

**IMAGE RULE:** Before making any image-related changes, you MUST read [IMAGE_RULES.md](file:///c:/Users/ANTONY/Desktop/hippo--transfers-and-adventures/IMAGE_RULES.md) to ensure consistency and performance. For manual image management workflow, see [IMAGE_MANAGEMENT.md](file:///c:/Users/ANTONY/Desktop/hippo--transfers-and-adventures/IMAGE_MANAGEMENT.md).

---

# PROJECT OVERVIEW

Hippo Transfers and Adventures is a modern safari and tourism marketing website focused on:
- safari package discovery
- excursion listings
- lead generation
- WhatsApp inquiries
- contact inquiries
- mobile-first user experience
- SEO optimization

The website is based on approved Stitch designs.
Agents must faithfully implement the approved UI without redesigning layouts.

---

# TECH STACK

## Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## UI
- shadcn/ui

## Animation
- Framer Motion

## Email Service
- Resend

## Messaging
- WhatsApp Click-to-Chat

## Hosting
- Vercel

## Maps
- Google Maps JavaScript API

## Version Control
- Git + GitHub

---

# CORE DEVELOPMENT PRINCIPLES

The project must prioritize:
- production-ready code
- clean maintainable architecture
- mobile-first responsiveness
- high performance
- SEO optimization
- maintainability
- lightweight implementation
- reusable components
- fast inquiry conversion
- scalability
- predictable architecture

Avoid overengineering at all costs.

---

# STRICT RULES

## NEVER:
- install unnecessary libraries
- create backend systems unless requested
- add authentication systems
- add databases
- add dashboards/admin panels
- add CMS systems
- add payment systems
- add server-side complexity
- hallucinate APIs/imports/files/hooks
- redesign approved layouts
- refactor unrelated files
- generate entire applications at once
- replace working implementations unnecessarily
- invent unsupported integrations
- generate pseudo-production code
- run random/unspecified tests (only run tests when explicitly requested by user)

---

# DESIGN RULES

## MUST:
- follow approved Stitch designs accurately
- maintain spacing consistency
- preserve visual hierarchy
- preserve mobile layouts
- use semantic HTML
- use reusable components
- maintain clean typography scale

## MUST NOT:
- redesign sections
- invent layouts
- add unnecessary visual effects
- add random gradients/animations
- overcomplicate UI systems

---

# IMAGE RULES

All image implementations must follow the standards defined in [IMAGE_RULES.md](file:///c:/Users/ANTONY/Desktop/hippo--transfers-and-adventures/IMAGE_RULES.md).

## KEY PRINCIPLES:
- Use WebP format
- Use Next.js `<Image />` component
- Follow standard folder structure in `public/images/`
- Maintain cinematic, premium aesthetic
- Ensure responsive scaling and object-fit

---

# RESPONSIVENESS RULES

Development must be mobile-first.

Required breakpoints:
- 375px
- 768px
- 1024px
- 1440px

Layouts must:
- avoid overflow
- avoid fixed-width sections
- adapt smoothly across devices

Priority:
Mobile → Tablet → Desktop

---

# PERFORMANCE RULES

## MUST:
- use Next.js Image component
- optimize images
- keep bundle size lightweight
- minimize client components
- avoid unnecessary re-renders
- prioritize performance

## MUST NOT:
- install heavy dependencies unnecessarily
- create hydration mismatch risks
- overuse useEffect
- create animation-heavy pages

---

# COMPONENT RULES

## MUST:
- keep components isolated
- use single-responsibility components
- reuse layouts where appropriate
- keep component APIs simple
- use Tailwind utilities directly
- write modular reusable components
- maintain consistent component patterns

## MUST NOT:
- deeply nest components unnecessarily
- create premature abstractions
- create unnecessary utility systems
- create massive monolithic components
- duplicate logic unnecessarily

---

# CODE QUALITY RULES

## MUST:
- write clean maintainable production-ready code
- use clear naming conventions
- keep files organized and readable
- keep implementations simple and scalable
- use predictable architecture patterns
- preserve consistency across the codebase
- keep logic separated from presentation where appropriate
- prefer readability over cleverness
- use strict TypeScript typing where possible
- maintain consistent formatting and structure

## MUST NOT:
- generate placeholder implementations
- invent dependencies that do not exist
- assume project structure without verification
- create fake utility functions
- create dead code or unused abstractions
- create inconsistent component patterns

---

# HALLUCINATION PREVENTION RULES

Before generating code, agents must:
- verify file existence
- verify import paths
- verify dependency availability
- verify component relationships
- verify Next.js conventions
- preserve existing architecture

Agents must NEVER:
- reference non-existent files
- reference non-installed packages
- assume APIs exist
- invent backend infrastructure
- fabricate environment variables
- fabricate database schemas

If uncertain:
- preserve current implementation
- avoid speculative generation
- keep changes isolated and minimal

---

# MAINTAINABILITY RULES

The project must remain:
- scalable
- easy to debug
- easy to extend
- easy to refactor
- easy to onboard into later

Agents must prioritize:
- reusable architecture
- predictable folder structure
- isolated responsibilities
- low coupling
- component reusability
- minimal complexity

Avoid:
- overengineering
- deeply coupled systems
- excessive abstractions
- unnecessary state management
- fragile architecture

---

# IMPLEMENTATION PHILOSOPHY

Prefer:
- simple solutions
- stable patterns
- predictable architecture
- explicit logic
- maintainable code

Avoid:
- experimental patterns
- unnecessary complexity
- AI-generated cleverness
- abstraction for abstraction's sake

Production reliability is more important than sophistication.

---

# TAILWIND RULES

Preferred:
- utility-first styling
- responsive utility classes
- reusable utility patterns

Avoid:
- excessive custom CSS
- unnecessary inline styles
- duplicated utility chains

---

# SHADCN/UI RULES

Use shadcn/ui only when beneficial.

Allowed:
- buttons
- dialogs
- sheets
- cards
- accordions
- inputs

Do NOT:
- install unnecessary shadcn components
- replace simple Tailwind implementations unnecessarily

---

# ANIMATION RULES

Animations must remain subtle.

Allowed:
- fade-ins
- hover effects
- slight slide transitions
- soft reveal animations

Forbidden:
- heavy parallax
- cinematic transitions
- excessive motion
- distracting animation systems

Performance is more important than visual spectacle.

---

# EMAIL SYSTEM RULES

Use Resend only.

Architecture:
Frontend Form
→ Next.js API Route
→ Resend
→ Client Inbox

Requirements:
- environment variables only
- never expose API keys
- validate form inputs
- keep forms minimal

Do NOT:
- setup SMTP manually
- add email queue systems
- add inquiry databases
- create complex backend infrastructure

---

# WHATSAPP RULES

Use WhatsApp Click-to-Chat only.

Allowed:
- floating WhatsApp button
- package inquiry CTA
- contact page CTA

Do NOT:
- build chatbot systems
- build webhook systems
- build automation infrastructure
- integrate Meta Cloud API

Keep WhatsApp implementation lightweight.

---

# SEO RULES

## MUST:
- use semantic HTML
- maintain proper heading hierarchy
- add metadata
- optimize alt tags
- support OpenGraph metadata
- optimize accessibility

Avoid:
- duplicate headings
- inaccessible layouts
- poor semantic structure

---

# FILE STRUCTURE RULES

Preferred structure:

src/
├── app/
├── components/
├── sections/
├── data/
├── lib/
├── hooks/
├── styles/
└── public/

Maintain consistent organization.

---

# CODE GENERATION RULES

## MUST:
- generate isolated components/sections
- preserve existing architecture
- keep implementations production-ready
- explain dependencies before installation

## MUST NOT:
- rewrite unrelated files
- generate speculative features
- modify unrelated sections
- generate entire applications

---

# GIT WORKFLOW RULES

After every stable feature:
- commit changes immediately
- keep commits isolated
- use clear commit messages

Examples:
- completed homepage hero
- added responsive navbar
- integrated contact form
- added whatsapp CTA

Avoid massive commits.

---

# DEVELOPMENT ORDER

Build in this order:

1. Foundation/Layout
2. Homepage
3. Packages Page
4. Excursions Page
5. About Page
6. Contact Page
7. SEO Optimization
8. Performance Pass
9. Deployment

Do not skip implementation order unnecessarily.

---

# FINAL PRINCIPLE

This project is a lean production marketing website.

Prioritize:
- clarity
- maintainability
- responsiveness
- performance
- reliability
- inquiry conversion

Avoid overengineering at all costs.