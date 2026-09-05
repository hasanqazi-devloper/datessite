'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 shadow-2xl py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center group py-1">
          <div className="relative h-11 md:h-13 w-40 md:w-52 flex items-center transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/navbar.png"
              alt="CGO Charcoal Logo"
              fill
              sizes="(max-width: 768px) 160px, 208px"
              className="object-contain object-left priority drop-shadow-[0_4px_16px_rgba(217,119,6,0.2)]"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV LINKS (SIMPLE NAMES) */}
        <nav className="hidden lg:flex items-center gap-8 bg-slate-900/90 border border-slate-800 rounded-full px-8 py-2.5 shadow-inner backdrop-blur-md">
          <Link
            href="/"
            className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors relative group py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <Link
            href="/about"
            className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors relative group py-1"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <Link
            href="/products"
            className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors relative group py-1"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <Link
            href="/Shipping"
            className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors relative group py-1"
          >
            Shipping
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <Link
            href="/contact"
            className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors relative group py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/2348060102925"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2.5 rounded-xl hover:bg-emerald-900/60 transition shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#rfq"
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/10 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <span>Get Quote</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-white bg-slate-900 rounded-xl border border-slate-800 hover:border-amber-500/50 transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-5 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-4 text-xs font-black uppercase tracking-wider text-slate-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition"
            >
              About Us
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Products
            </Link>
            <Link
              href="/Shiping"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Shipping &amp; Logistics
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a
              href="https://wa.me/2348060102925"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 py-3 rounded-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="#rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-md"
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