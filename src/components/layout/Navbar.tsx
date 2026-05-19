'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { BRAND_NAME, BRAND_TAGLINE } from '@/lib/constants';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant/20 h-[80px] lg:h-[148px] flex items-center transition-[height] duration-200">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] items-center h-full gap-4">

          {/* Logo Section — Balanced Premium Branding */}
          <Link href="/" className="flex items-center gap-3 lg:gap-4 hover:opacity-90 active:opacity-80 transition-opacity duration-200 shrink-0">
            <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[165px] lg:h-[165px]">
              <Image
                src="/brand/hippo-icon.svg"
                alt={BRAND_NAME}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <div className="font-serif text-[1.1rem] sm:text-[1.25rem] lg:text-[1.4rem] font-bold text-primary uppercase tracking-[0.08em] leading-none">
                <div>Hippo</div>
                <div className="text-[0.85em] lg:text-[0.9em] opacity-90">Transfers & Adventures</div>
              </div>
              <span className="font-label-sm text-[7px] sm:text-[8px] lg:text-[9px] text-secondary uppercase tracking-[0.25em] mt-1.5 lg:mt-2 font-semibold opacity-70">
                {BRAND_TAGLINE}
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation (Center) */}
          <div className="hidden lg:flex justify-center items-center h-full">
            <div className="flex items-center gap-7 xl:gap-9">
              {[
                { href: '/', label: 'Home' },
                { href: '/packages', label: 'Packages' },
                { href: '/about', label: 'Our Story' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`font-serif text-base tracking-wide border-b-2 pb-1 transition-colors duration-100 active:opacity-70 whitespace-nowrap ${
                    isActive(href)
                      ? 'text-secondary border-secondary font-semibold'
                      : 'text-on-surface-variant border-transparent hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Zone 3: Actions (Right) */}
          <div className="flex justify-end items-center gap-2 lg:gap-6 shrink-0">
            <Link
              href="/contact"
              className="bg-secondary text-on-secondary font-label-sm text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.1em] lg:tracking-[0.15em] px-3 py-2 sm:px-5 sm:py-2.5 lg:px-8 lg:py-4 rounded hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] active:opacity-90 transition-[transform,background-color,opacity] duration-100 whitespace-nowrap font-bold shadow-md"
            >
              Plan Your Journey
            </Link>

            <button
              className="lg:hidden text-primary p-1 sm:p-2 active:scale-90 transition-transform duration-75 shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} className="sm:w-[28px] sm:h-[28px]" /> : <Menu size={24} className="sm:w-[28px] sm:h-[28px]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] lg:top-[148px] z-40 bg-surface lg:hidden flex flex-col px-8 pt-6 border-t border-surface-variant">
          {[
            { href: '/', label: 'Home' },
            { href: '/packages', label: 'Packages' },
            { href: '/about', label: 'Our Story' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-5 font-serif text-xl border-b border-outline-variant/20 active:bg-surface-variant/30 transition-colors duration-75 ${
                isActive(href) ? 'text-secondary font-semibold' : 'text-on-surface'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 bg-secondary text-on-secondary font-label-sm text-center uppercase tracking-[0.15em] px-8 py-4 rounded active:scale-[0.98] transition-transform duration-75"
          >
            Plan Your Journey
          </Link>
        </div>
      )}
    </>
  );
}
