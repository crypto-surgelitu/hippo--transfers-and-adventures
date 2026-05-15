import Link from 'next/link';
import { Camera, Globe, PlayCircle, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full pt-32 pb-16 bg-[#284420] border-t border-[#4a6741] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjBoLTR2LTRIMnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
              <Link href="/" className="font-serif text-2xl font-bold text-amber-100 block tracking-wide">
              Hippo Adventures Kenya
            </Link>
            <p className="font-sans text-base text-amber-100/80 leading-relaxed max-w-xs italic">
              Crafting extraordinary journeys with soul.
            </p>
            <div className="flex gap-4 items-center text-amber-100/80">
              <a href="#" className="hover:text-amber-300 transition-colors duration-300">
                <Camera size={22} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors duration-300">
                <Globe size={22} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors duration-300">
                <PlayCircle size={22} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Explore */}
          <div>
            <h4 className="font-serif text-sm text-amber-300 uppercase tracking-[0.2em] mb-6 font-light">Explore</h4>
            <ul className="space-y-4 font-sans text-base text-amber-100/80">
              <li><Link href="/about" className="hover:text-amber-300 transition-colors duration-300">Sustainability</Link></li>
              <li><Link href="/packages" className="hover:text-amber-300 transition-colors duration-300">Travel Guides</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors duration-300">Partner With Us</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Experiences */}
          <div>
            <h4 className="font-serif text-sm text-amber-300 uppercase tracking-[0.2em] mb-6 font-light">Experiences</h4>
            <ul className="space-y-4 font-sans text-base text-amber-100/80">
              <li><Link href="/packages" className="hover:text-amber-300 transition-colors duration-300">Packages</Link></li>
              <li><Link href="/packages" className="hover:text-amber-300 transition-colors duration-300">Day Tours</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors duration-300">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif text-sm text-amber-300 uppercase tracking-[0.2em] mb-6 font-light">Contact</h4>
            <ul className="space-y-4 font-sans text-base text-amber-100/80">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-300" />
                <a href="https://wa.me/254720899402" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-300">
                  +254 720 899 402
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-300" />
                <a href="mailto:hippotransfer@gmail.com" className="hover:text-amber-300">hippotransfer@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-300" />
                <span className="text-amber-100/70">Kwarandu business square Box 55 Kaloleni, Mombasa</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-[#4a6741]/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-amber-100/60 text-center md:text-left tracking-wider">
            © {new Date().getFullYear()} Hippo Adventures Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
