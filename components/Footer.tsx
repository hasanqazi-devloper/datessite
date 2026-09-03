import Link from "next/link";
import { Mail, Phone, MapPin, Globe2, Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white border-t border-[#D4AF37]/20 pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Subtle Ambient Background Glows */}
      <div 
        className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#6B1224]/20 blur-[120px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-auto overflow-hidden flex items-center justify-center">
                  <img 
                    src="/navbar.png" 
                    alt="Sadra Saleh Logo" 
                    className="h-12 w-auto object-contain brightness-110"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Cultivating and exporting authentic <strong className="text-[#D4AF37]">Super Negin Saffron, Damask Rosebuds, and Barberry</strong> directly from our 100-year Isfahan farms to global B2B importers, cosmetic labs, and wholesale markets.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> 100-Year Heritage
              </span>
              <p className="text-gray-300 text-sm font-medium">
                Isfahan Farming Hub, Iran • Direct GCC & Worldwide Exports
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#D4AF37] transition-colors">Export Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">100-Year Legacy</Link>
              </li>
              <li>
                <Link href="#rfq-section" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  <span>Request RFQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Agricultural Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Export Commodities
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/products#saffron" className="hover:text-[#D4AF37] transition-colors">Super Negin Saffron (Grade A+)</Link>
              </li>
              <li>
                <Link href="/products#rosebuds" className="hover:text-[#D4AF37] transition-colors">Organic Damask Rosebuds</Link>
              </li>
              <li>
                <Link href="/products#barberry" className="hover:text-[#D4AF37] transition-colors">Puffy Crimson Barberry</Link>
              </li>
              <li>
                <Link href="/products#custom-packaging" className="hover:text-[#D4AF37] transition-colors">Private Labeling & Tins</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Export Desk */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Commercial Desk
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-gray-300">export@sadrasaleh.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-gray-300">+98 (Isfahan Commercial Desk)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-gray-300">Jeddah, Dubai & Worldwide Transit</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sadra Saleh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Terms</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Incoterms & Export Policy</Link>
            <Link href="/sitemap" className="hover:text-[#D4AF37] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}