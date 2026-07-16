import Link from 'next/link';
import Image from 'next/image';
import { Camera, Globe, PlayCircle, Phone, Mail, MapPin, Leaf, BookOpen, HeartHandshake, Shield, Package, Sun, Book, MessageSquare } from 'lucide-react';

import { BRAND_NAME, BRAND_TAGLINE } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-[#284420] border-t border-[#4a6741] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjBoLTR2LTRIMnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>

      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-12 mb-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4 justify-start">

            {/* Logo + Name row */}
            <Link href="/" className="flex flex-col gap-3 hover:opacity-90 transition-opacity duration-200 w-fit">
              <div className="relative h-[110px] w-[110px] shrink-0">
                <Image
                  src="/brand/hippo-icon-white.svg"
                  alt={BRAND_NAME}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-serif text-[0.82rem] font-bold text-amber-100 uppercase tracking-[0.06em] leading-snug">
                  Hippo Transfers &amp; Adventures
                </span>
                <span className="text-[9px] text-amber-100/50 uppercase tracking-[0.22em] font-sans">
                  {BRAND_TAGLINE}
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="font-sans text-sm text-amber-100/70 leading-relaxed italic">
              Crafting extraordinary journeys with soul.
            </p>

            {/* Socials */}
            <div className="flex gap-6 items-center text-amber-100/70">
              <a href="https://www.instagram.com/hippotransfer" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-300">
                <Camera size={24} />
              </a>
              <a href="https://www.facebook.com/hippotransfer" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-300">
                <Globe size={24} />
              </a>
              <a href="https://www.youtube.com/@hippotransfer" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-300">
                <PlayCircle size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm text-amber-200 uppercase tracking-[0.3em] font-light border-b border-amber-200/20 pb-3">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <Leaf size={16} className="text-amber-300 shrink-0" />
                <Link href="/about" className="font-sans text-sm">Sustainability</Link>
              </li>
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <BookOpen size={16} className="text-amber-300 shrink-0" />
                <Link href="/packages" className="font-sans text-sm">Travel Guides</Link>
              </li>
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <HeartHandshake size={16} className="text-amber-300 shrink-0" />
                <Link href="/contact" className="font-sans text-sm whitespace-nowrap">Partner With Us</Link>
              </li>
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <Shield size={16} className="text-amber-300 shrink-0" />
                <Link href="/privacy-policy" className="font-sans text-sm whitespace-nowrap">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Experiences */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm text-amber-200 uppercase tracking-[0.3em] font-light border-b border-amber-200/20 pb-3">
              Experiences
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <Package size={16} className="text-amber-300 shrink-0" />
                <Link href="/packages" className="font-sans text-sm">Packages</Link>
              </li>
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <Sun size={16} className="text-amber-300 shrink-0" />
                <Link href="/packages" className="font-sans text-sm">Day Tours</Link>
              </li>
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <Book size={16} className="text-amber-300 shrink-0" />
                <Link href="/about" className="font-sans text-sm">Our Story</Link>
              </li>
              <li className="flex items-center gap-3 text-amber-100/75 hover:text-amber-300 transition-colors duration-200">
                <MessageSquare size={16} className="text-amber-300 shrink-0" />
                <Link href="/contact" className="font-sans text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm text-amber-200 uppercase tracking-[0.3em] font-light border-b border-amber-200/20 pb-3">
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-amber-100/75">
                <Phone size={16} className="text-amber-300 shrink-0 mt-0.5" />
                <a href="https://wa.me/254741020481" target="_blank" rel="noopener noreferrer" className="font-sans text-sm whitespace-nowrap hover:text-amber-300 transition-colors duration-200">
                  +254 741 020 481
                </a>
              </li>
              <li className="flex items-start gap-3 text-amber-100/75">
                <Mail size={16} className="text-amber-300 shrink-0 mt-0.5" />
                <a href="mailto:info@hippotransfersandadventures.com" className="font-sans text-sm hover:text-amber-300 transition-colors duration-200 break-words">
                  info@hippotransfers<br />andadventures.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-amber-100/75">
                <MapPin size={16} className="text-amber-300 shrink-0 mt-0.5" />
                <span className="font-sans text-sm leading-relaxed">
                  Kwarandu Business Square,<br />Kaloleni, Mombasa
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4a6741]/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-amber-100/40 text-center md:text-left tracking-widest uppercase">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
