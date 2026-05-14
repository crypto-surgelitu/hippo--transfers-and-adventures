import Link from 'next/link';
import { Camera, Globe, PlayCircle, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full pt-32 pb-16 bg-inverse-surface border-t border-outline">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="font-serif text-2xl font-bold text-inverse-on-surface block">
              Hippo Adventures Kenya
            </Link>
            <p className="font-body-md text-inverse-on-surface/80 leading-relaxed max-w-xs">
              Crafting extraordinary journeys with soul.
            </p>
            <div className="flex gap-4 items-center text-inverse-on-surface/80">
              <a href="#" className="hover:text-secondary transition-colors duration-300">
                <Camera size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-300">
                <Globe size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-300">
                <PlayCircle size={24} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Explore */}
          <div>
            <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 font-body-md text-inverse-on-surface/80">
              <li><Link href="/about" className="hover:text-secondary transition-colors duration-300">Sustainability</Link></li>
              <li><Link href="/packages" className="hover:text-secondary transition-colors duration-300">Travel Guides</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors duration-300">Partner With Us</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Experiences */}
          <div>
            <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-6">Experiences</h4>
            <ul className="space-y-4 font-body-md text-inverse-on-surface/80">
              <li><Link href="/packages" className="hover:text-secondary transition-colors duration-300">Packages</Link></li>
              <li><Link href="/packages" className="hover:text-secondary transition-colors duration-300">Day Tours</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors duration-300">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 font-body-md text-inverse-on-surface/80">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary" />
                <span>+254 720 899 402</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary" />
                <a href="mailto:hippotransfer@gmail.com" className="hover:text-secondary">hippotransfer@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-secondary" />
                <span className="text-inverse-on-surface/70">Kwarandu business square Box 55 Kaloleni, Mombasa</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-outline/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-sm text-inverse-on-surface/60 text-center md:text-left">
            © {new Date().getFullYear()} Hippo Adventures Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
