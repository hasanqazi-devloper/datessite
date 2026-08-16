import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/90 text-gray-800 border-t border-gray-100 pt-16 pb-12 px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-auto overflow-hidden flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Koushiar Tejarat Logo" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Supplying high-grade Solid, Hollow Conjugated, and Cotton-Type polyester staple fibers to manufacturers worldwide with consistent quality and reliable logistics.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 block mb-1">
                Headquarters
              </span>
              <p className="text-gray-700 text-sm font-medium">
                Tehran, Iran • International Export Operations
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-600 transition-colors">Products Catalog</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-emerald-600 transition-colors">Industries Served</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-600 transition-colors">About Company</Link>
              </li>
              <li>
                <Link href="#rfq-section" className="hover:text-emerald-600 transition-colors">Request Quote (RFQ)</Link>
              </li>
            </ul>
          </div>

          {/* Core Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Fiber Portfolio
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/products#solid" className="hover:text-emerald-600 transition-colors">Solid Polyester Fiber</Link>
              </li>
              <li>
                <Link href="/products#hollow" className="hover:text-emerald-600 transition-colors">Hollow Conjugated Fiber</Link>
              </li>
              <li>
                <Link href="/products#cotton" className="hover:text-emerald-600 transition-colors">Cotton-Type Polyester</Link>
              </li>
              <li>
                <Link href="/products#custom" className="hover:text-emerald-600 transition-colors">Custom Specifications</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>info@koushiartejarat.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>+98 (Tehran Office)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Tehran Export Hub, Iran</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Koushiar Tejarat. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Trade</Link>
            <Link href="/sitemap" className="hover:text-emerald-600 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}