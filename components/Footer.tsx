'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0B2B22] text-[#F4F0E6]/70 border-t border-[#1A4337] pt-16 pb-8 px-4 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1A4337]">
        
        {/* BRAND OVERVIEW */}
        <div className="space-y-4">
          <Link href="/" className="inline-block group">
            <div className="relative h-12 w-44 md:w-56 flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/navbar.png"
                alt="Siah Almas Bami Dates Export Logo"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="object-contain object-left drop-shadow-md"
                priority
              />
            </div>
          </Link>

          <p className="text-xs text-[#F4F0E6]/60 leading-relaxed">
            Direct Iranian dates processor and exporter[cite: 7]. Sourcing premium Mazafati, Piarom, Zahedi, and Kaluteh directly from Bam and Jiroft groves.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/989000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5922E]/10 text-[#C5922E] border border-[#C5922E]/30 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[#C5922E]/20 transition shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#C5922E]" />
              <span>WhatsApp Direct Desk[cite: 7]</span>
            </a>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div>
          <h4 className="text-[#F4F0E6] font-black text-xs uppercase tracking-widest mb-4">
            Quick Navigation[cite: 7]
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/" className="hover:text-[#C5922E] transition-colors">
                Home[cite: 7]
              </Link>
            </li>
            <li>
              <Link href="#quality" className="hover:text-[#C5922E] transition-colors">
                Direct Sourcing
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-[#C5922E] transition-colors">
                Date Varieties[cite: 7]
              </Link>
            </li>
            <li>
              <Link href="#export" className="hover:text-[#C5922E] transition-colors">
                Cold Storage Logistics
              </Link>
            </li>
            <li>
              <Link href="#rfq" className="hover:text-[#C5922E] transition-colors">
                Contact &amp; RFQ[cite: 7]
              </Link>
            </li>
          </ul>
        </div>

        {/* EXPORT CATALOG */}
        <div>
          <h4 className="text-[#F4F0E6] font-black text-xs uppercase tracking-widest mb-4">
            Export Catalog[cite: 7]
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Mazafati Dates</span>
              <span className="text-[10px] font-bold text-[#0B2B22] bg-[#C5922E] px-2 py-0.5 rounded">Grade A Fresh</span>
            </li>
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Piarom Dates</span>
              <span className="text-[10px] font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2 py-0.5 rounded">Jumbo Semi-Dry</span>
            </li>
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Zahedi Dates</span>
              <span className="text-[10px] font-bold text-[#F4F0E6]/60 bg-[#133A2E] border border-[#1A4337] px-2 py-0.5 rounded">Dry</span>
            </li>
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Rabbi / Kaluteh</span>
              <span className="text-[10px] font-bold text-[#F4F0E6]/60 bg-[#133A2E] border border-[#1A4337] px-2 py-0.5 rounded">Bulk</span>
            </li>
          </ul>
        </div>

        {/* OPERATIONS & CONTACT */}
        <div>
          <h4 className="text-[#F4F0E6] font-black text-xs uppercase tracking-widest mb-4">
            Export Operations[cite: 7]
          </h4>
          <ul className="space-y-3 text-xs font-medium">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
              <span>Bam &amp; Jiroft Cold Storage, Bandar Abbas Port, Iran</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C5922E] shrink-0" />
              <a href="tel:+989000000000" className="hover:text-[#F4F0E6] transition-colors">
                +98 900 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#C5922E] shrink-0" />
              <a href="mailto:export@siahalmas.com" className="hover:text-[#F4F0E6] transition-colors">
                export@siahalmas.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F4F0E6]/50 gap-4">
        <p>© {new Date().getFullYear()} Siah Almas Bami (شرکت سیاه الماس بمی) Dates Export. All Rights Reserved[cite: 7].</p>
        <div className="flex items-center gap-4">
          <span>Global Desk: <strong className="text-[#F4F0E6]/80">Siah Almas Trading</strong></span>
          <span>|</span>
          <a href="#rfq" className="text-[#C5922E] font-bold hover:underline flex items-center gap-1">
            <span>Container RFQ[cite: 7]</span>
            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}