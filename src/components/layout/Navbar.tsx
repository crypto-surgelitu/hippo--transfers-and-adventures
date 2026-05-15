'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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
        <div className="w-full max-w-[1440px] mx-auto pl-margin-mobile md:pl-gutter pr-margin-mobile md:pr-gutter flex justify-between items-center h-full">

          {/* Logo — flush left, blends with background */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 active:opacity-70 transition-opacity duration-100 shrink-0">
            <Image
              src="/logo-transparent.webp"
              alt="Hippo Adventures Logo"
              width={140}
              height={140}
              className="h-[60px] lg:h-[120px] w-auto object-contain"
            />
            <div className="hidden xl:flex flex-col leading-tight">
              <span className="font-serif text-[2rem] font-medium text-primary uppercase tracking-[0.08em] leading-none">
                Hippo Adventures
              </span>
              <span className="font-label-sm text-[9px] md:text-[11px] text-secondary uppercase tracking-[0.25em] mt-0.5">
                Service beyond expectation
              </span>
            </div>
          </Link>

          {/* Right-side: Nav links + CTA */}
          <div className="flex items-center gap-10">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-7">
              {[
                { href: '/', label: 'Home' },
                { href: '/packages', label: 'Packages' },
                { href: '/about', label: 'Our Story' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`font-serif text-base tracking-wide border-b-2 pb-1 transition-colors duration-100 active:opacity-70 ${
                    isActive(href)
                      ? 'text-secondary border-secondary'
                      : 'text-on-surface-variant border-transparent hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/packages"
              className="bg-secondary text-on-secondary font-label-sm text-[11px] uppercase tracking-[0.15em] px-6 py-3 rounded hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] active:opacity-90 transition-[transform,background-color,opacity] duration-100 hidden lg:block whitespace-nowrap"
            >
              Plan Your Journey
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-primary p-2 active:scale-90 transition-transform duration-75"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] lg:top-[148px] z-40 bg-surface md:hidden flex flex-col px-8 pt-6 border-t border-outline-variant/20 overflow-y-auto">
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
            href="/packages"
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
