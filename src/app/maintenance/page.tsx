import type { Metadata } from 'next'
import { BRAND_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: '503 — Service Temporarily Unavailable',
  description: 'Our servers are currently experiencing issues. Our team is actively working to restore service. Please check back shortly.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop bg-[#fbf9f5]">
      <div className="max-w-lg w-full text-center">

        {/* Status code badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200/50 mb-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-red-600 font-semibold">
            Server Unavailable — 503
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-6">
          The server is currently<br />
          experiencing issues
        </h1>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
            We&rsquo;re aware of the issue and our team is actively working to
            restore service. Please check back shortly.
          </p>
          <p className="font-mono text-xs text-on-surface-variant/50 tracking-tight bg-stone-100 inline-block px-4 py-2 rounded border border-stone-200">
            Error: Service Unavailable (503) &mdash; upstream connection refused
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-stone-300 mx-auto mb-10" />

        {/* Brand */}
        <p className="font-serif text-sm text-on-surface-variant/50 tracking-[0.15em] uppercase">
          {BRAND_NAME}
        </p>

      </div>
    </div>
  )
}
