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
      <nav className="sticky top-0 w-full z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant/20 h-[120px] flex items-center">
        <div className="w-full max-w-container-max mx-auto pl-4 md:pl-8 pr-margin-mobile md:pr-gutter flex justify-between items-center h-full">

          {/* Logo — flush left, blends with background */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-150 shrink-0">
            <Image
              src="/logo-transparent.png"
              alt="Hippo Adventures Logo"
              width={180}
              height={100}
              className="h-[100px] w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight">
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
                  className={`font-serif text-base tracking-wide transition-all duration-150 ${
                    isActive(href)
                      ? 'text-secondary border-b border-secondary pb-0.5'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/packages"
              className="bg-secondary text-on-secondary font-label-sm text-[11px] uppercase tracking-[0.15em] px-6 py-3 rounded hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 hidden lg:block whitespace-nowrap"
            >
              Plan Your Journey
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-primary p-2"
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
        <div className="fixed inset-0 top-[100px] z-40 bg-surface md:hidden flex flex-col px-8 pt-6 border-t border-outline-variant/20 overflow-y-auto">
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
              className={`py-5 font-serif text-xl border-b border-outline-variant/20 ${
                isActive(href) ? 'text-secondary font-semibold' : 'text-on-surface'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/packages"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 bg-secondary text-on-secondary font-label-sm text-center uppercase tracking-[0.15em] px-8 py-4 rounded"
          >
            Plan Your Journey
          </Link>
        </div>
      )}
    </>
  );
}
