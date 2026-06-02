# Hippo Transfers and Adventures

A modern safari and tourism marketing website focused on safari package discovery, excursion listings, lead generation, and inquiry conversion.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animation**: Framer Motion
- **Email Service**: Resend
- **Messaging**: WhatsApp Click-to-Chat
- **Maps**: Google Maps JavaScript API
- **Hosting**: Vercel
  **DNS**: Cloudflare
  **Mail**: Zoho

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hippo-transfers-and-adventures

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file with:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/     # Reusable UI components
├── sections/      # Page sections
├── data/          # Static data and content
├── lib/           # Utilities and helpers
├── hooks/         # Custom React hooks
└── styles/        # Global styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## Features

- Mobile-first responsive design
- Safari package listings
- Excursion discoveries
- WhatsApp click-to-chat integration
- Contact inquiry forms
- SEO optimized

## Development

Follow the development order outlined in AGENTS.md:

1. Foundation/Layout
2. Homepage
3. Packages Page
4. Excursions Page
5. About Page
6. Contact Page
7. SEO Optimization
8. Performance Pass
9. Deployment

## License

Private - All rights reserved