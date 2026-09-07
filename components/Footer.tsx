'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F0D] text-slate-400 border-t border-[#22332B] pt-16 pb-8 px-4 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#22332B]">
        
        {/* BRAND OVERVIEW & WHATSAPP LINK */}
        <div className="space-y-4">
          <Link href="/" className="inline-block group">
            <div className="relative h-12 w-44 md:w-56 flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/navbar.png"
                alt="Al-Jarhi Egyptian Herbs Export Logo"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="object-contain object-left drop-shadow-[0_4px_16px_rgba(16,185,129,0.2)]"
                priority
              />
            </div>
          </Link>

          <p className="text-xs text-slate-400 leading-relaxed">
            Direct exporter of premium Egyptian botanical herbs, dried marjoram, chamomile flowers, basil, and aromatic spearmint from farm to port.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-900/60 transition shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#quality" className="hover:text-emerald-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-emerald-400 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="#export" className="hover:text-emerald-400 transition-colors">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="#rfq" className="hover:text-emerald-400 transition-colors">
                Contact & RFQ
              </Link>
            </li>
          </ul>
        </div>

        {/* EXPORT HERB VARIETIES */}
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">
            Export Catalog
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li className="text-slate-300 flex items-center justify-between">
              <span>Dried Marjoram</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">≥99% Purity</span>
            </li>
            <li className="text-slate-300 flex items-center justify-between">
              <span>Egyptian Chamomile</span>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">High Essential Oil</span>
            </li>
            <li className="text-slate-300 flex items-center justify-between">
              <span>Sweet Basil Leaves</span>
              <span className="text-[10px] font-bold text-slate-300 bg-[#141C18] border border-[#22332B] px-2 py-0.5 rounded">Clean Sifted</span>
            </li>
            <li className="text-slate-300 flex items-center justify-between">
              <span>Spearmint / Peppermint</span>
              <span className="text-[10px] font-bold text-white bg-[#141C18] border border-[#22332B] px-2 py-0.5 rounded">Rich Aroma</span>
            </li>
          </ul>
        </div>

        {/* OPERATIONS & CONTACT */}
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">
            Export Operations
          </h4>
          <ul className="space-y-3 text-xs font-medium">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Al Minya Farms & Alexandria Port Operations, Egypt</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:+201000000000" className="hover:text-white transition-colors">
                +20 100 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="mailto:export@aljarhi-herbs.com" className="hover:text-white transition-colors">
                export@aljarhi-herbs.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Al-Jarhi Egyptian Botanical Herbs Export. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <span>Global Desk: <strong className="text-slate-300">Al-Jarhi Trading Co.</strong></span>
          <span>|</span>
          <a href="#rfq" className="text-emerald-400 font-bold hover:underline flex items-center gap-1">
            <span>Container RFQ</span>
            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}