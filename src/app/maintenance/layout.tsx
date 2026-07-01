import type { Metadata } from 'next'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Temporary Service Disruption | Hippo Transfers and Adventures',
  description: 'We are currently experiencing a temporary service disruption. Our team is actively working to restore full functionality. Thank you for your patience.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        nav { display: none !important; }
        footer { display: none !important; }
        a[href*="wa.me"] { display: none !important; }
      `}</style>
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </>
  )
}
