'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, MessageSquare, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0B0F0D]/95 backdrop-blur-xl border-b border-[#22332B] shadow-2xl py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center group py-1">
          <div className="relative h-11 md:h-13 w-44 md:w-56 flex items-center transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/navbar.png"
              alt="Al-Jarhi Trading Logo"
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-contain object-left priority drop-shadow-[0_4px_16px_rgba(16,185,129,0.15)]"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV LINKS (SHORT & CLEAN) */}
        <nav className="hidden lg:flex items-center gap-8 bg-[#141C18]/90 border border-[#22332B] rounded-full px-8 py-2.5 shadow-inner backdrop-blur-md">
          <Link
            href="/"
            className="text-xs font-black uppercase tracking-wider text-emerald-100/80 hover:text-emerald-400 transition-colors relative group py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          <Link
            href="/products"
            className="text-xs font-black uppercase tracking-wider text-emerald-100/80 hover:text-emerald-400 transition-colors relative group py-1"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          <Link
            href="/process"
            className="text-xs font-black uppercase tracking-wider text-emerald-100/80 hover:text-emerald-400 transition-colors relative group py-1"
          >
            Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          <Link
            href="/quality"
            className="text-xs font-black uppercase tracking-wider text-emerald-100/80 hover:text-emerald-400 transition-colors relative group py-1"
          >
            Quality
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          <Link
            href="/contact"
            className="text-xs font-black uppercase tracking-wider text-emerald-100/80 hover:text-emerald-400 transition-colors relative group py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
        </nav>

        {/* ACTION BUTTONS & LANGUAGE SWITCHER */}
        <div className="hidden md:flex items-center gap-3">
          {/* LANGUAGE TOGGLE */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-2.5 rounded-xl hover:bg-amber-500/20 transition cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang}</span>
          </button>

          {/* WHATSAPP ACTION */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2.5 rounded-xl hover:bg-emerald-900/60 transition shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* RFQ CTA BUTTON */}
          <a
            href="#rfq"
            className="relative inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <span>Get Quote</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-white bg-[#141C18] rounded-xl border border-[#22332B] hover:border-emerald-500/50 transition cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F0D]/98 backdrop-blur-2xl border-b border-[#22332B] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-4 text-xs font-black uppercase tracking-wider text-emerald-100/80">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              Products
            </Link>
            <Link
              href="/process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              Process
            </Link>
            <Link
              href="/quality"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              Quality
            </Link>
            <Link
              href="#rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#22332B] space-y-3">
            <button
              onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 py-2.5 rounded-xl"
            >
              <Globe className="w-4 h-4" />
              <span>Language: {lang}</span>
            </button>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 py-3 rounded-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="#rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-md"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}