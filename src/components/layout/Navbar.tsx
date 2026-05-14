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
      <nav className="sticky top-0 w-full z-50 bg-surface border-b border-outline-variant/30 shadow-sm h-[140px] flex items-center">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-full">
          {/* Logo Area */}
          <Link href="/" className="h-[75%] flex items-center gap-4 hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Hippo Adventures Logo" 
              width={80} 
              height={80} 
              className="h-[80px] w-auto object-contain rounded-full shadow-sm" 
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-3xl md:text-4xl font-bold text-primary leading-none">Hippo Adventures</span>
              <span className="font-label-sm text-[10px] md:text-[12px] text-secondary uppercase tracking-[0.2em] mt-1 whitespace-nowrap">Service beyond expectation</span>
            </div>
          </Link>
          
          {/* Right-side Actions (Nav + Button) */}
          <div className="flex items-center gap-12">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className={`font-serif text-lg tracking-wide transition-all duration-150 ${isActive('/') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'}`}>Home</Link>
              <Link href="/packages" className={`font-serif text-lg tracking-wide transition-all duration-150 ${isActive('/packages') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'}`}>Packages</Link>
              <Link href="/about" className={`font-serif text-lg tracking-wide transition-all duration-150 ${isActive('/about') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'}`}>Our Story</Link>
              <Link href="/contact" className={`font-serif text-lg tracking-wide transition-all duration-150 ${isActive('/contact') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'}`}>Contact</Link>
            </div>
            
            {/* Primary Action */}
            <div className="flex items-center">
              <Link href="/packages" className="bg-secondary text-on-secondary font-label-sm text-label-sm uppercase px-8 py-4 rounded hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 hidden lg:block">
                Plan Your Journey
              </Link>
              <button 
                className="md:hidden text-primary p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[140px] z-40 bg-surface md:hidden flex flex-col p-8 border-t border-outline-variant/30 overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`py-4 font-serif text-2xl border-b border-outline-variant/30 ${isActive('/') ? 'text-secondary font-bold' : 'text-on-surface'}`}>Home</Link>
          <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className={`py-4 font-serif text-2xl border-b border-outline-variant/30 ${isActive('/packages') ? 'text-secondary font-bold' : 'text-on-surface'}`}>Packages</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`py-4 font-serif text-2xl border-b border-outline-variant/30 ${isActive('/about') ? 'text-secondary font-bold' : 'text-on-surface'}`}>Our Story</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`py-4 font-serif text-2xl border-b border-outline-variant/30 ${isActive('/contact') ? 'text-secondary font-bold' : 'text-on-surface'}`}>Contact</Link>
          <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-secondary text-on-secondary font-label-sm text-center uppercase px-8 py-4 rounded">
            Plan Your Journey
          </Link>
        </div>
      )}
    </>
  );
}
