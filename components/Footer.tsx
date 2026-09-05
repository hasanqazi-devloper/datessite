'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-8 px-4 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        
        {/* BRAND OVERVIEW & WHATSAPP LINK */}
        <div className="space-y-4">
          <Link href="/" className="inline-block group">
            <div className="relative h-12  w-44 md:w-56 flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/navbar.png"
                alt="CGO Charcoal Export Logo"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="object-contain object-left drop-shadow-[0_4px_16px_rgba(217,119,6,0.2)]"
                priority
              />
            </div>
          </Link>

          <p className="text-xs text-slate-400 leading-relaxed">
            Direct exporter of premium Nigerian Ayin hardwood charcoal, restaurant lump, BBQ lumpwood, and shisha coconut shell charcoal.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/2348060102925"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-900/60 transition shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct Line</span>
            </a>
          </div>
        </div>

        {/* QUICK NAVIGATION (MATCHED WITH NAVBAR) */}
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#quality" className="hover:text-amber-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-amber-400 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="#export" className="hover:text-amber-400 transition-colors">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="#rfq" className="hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* EXPORT CHARCOAL VARIETIES */}
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">
            Export Catalog
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li className="text-slate-300 flex items-center justify-between">
              <span>Ayin Hardwood Charcoal</span>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">≥80% Carbon</span>
            </li>
            <li className="text-slate-300 flex items-center justify-between">
              <span>Restaurant Grade Lump</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">No Spark</span>
            </li>
            <li className="text-slate-300 flex items-center justify-between">
              <span>BBQ Natural Lumpwood</span>
              <span className="text-[10px] font-bold text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">Easy Light</span>
            </li>
            <li className="text-slate-300 flex items-center justify-between">
              <span>Shisha Coconut Shell</span>
              <span className="text-[10px] font-bold text-white bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">White Ash</span>
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
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Lagos, Nigeria (Port Clearance &amp; Loading Operations)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+2348060102925" className="hover:text-white transition-colors">
                +234 806 010 2925
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:cgocoal@gmail.com" className="hover:text-white transition-colors">
                cgocoal@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} CGO Coal Export. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <span>Operations Lead: <strong className="text-slate-300">Chinenye Grace Onyemaechi</strong></span>
          <span>|</span>
          <a href="#rfq" className="text-amber-400 font-bold hover:underline flex items-center gap-1">
            <span>Container RFQ</span>
            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}