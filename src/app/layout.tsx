import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Hippo Transfers and Adventures',
  description: 'Experience unforgettable safari adventures and transfers. Discover our safari packages and excursions.',
  openGraph: {
    title: 'Hippo Transfers and Adventures',
    description: 'Experience unforgettable safari adventures and transfers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}