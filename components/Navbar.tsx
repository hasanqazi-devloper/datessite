"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Globe, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const languages = [
    { code: "EN", label: "EN" },
    { code: "AR", label: "AR" },
    { code: "FA", label: "FA" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality & Export", href: "/quality&export" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-[#D4AF37]/30 text-white shadow-xl">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#0A0A0A] text-xs py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[#D4AF37] font-semibold tracking-wider">
              100-YEAR ISFAHAN HERITAGE
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline text-gray-300">
              Direct Producer & Supplier of Saffron, Damask Rose & Barberry
            </span>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                    currentLang === lang.code
                      ? "bg-[#D4AF37] text-black shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Container */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/navbar.png"
              alt="Sadra Saleh Logo"
              className="h-12 w-auto object-contain"
            />
            {/* <div className="hidden sm:flex flex-col border-l border-[#D4AF37]/40 pl-3">
              <span className="text-base font-serif font-bold text-white tracking-widest leading-none">
                SADRA SALEH
              </span>
              <span className="text-[9px] text-[#D4AF37] font-bold tracking-[0.2em] mt-1 uppercase">
                Farm To Export
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-widest uppercase transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Export Desk</span>
            </a>

            <Link
              href="#rfq-section"
              className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8952d] text-black px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-105"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-[#D4AF37] text-sm font-semibold tracking-wider uppercase py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#rfq-section"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-black py-3 rounded-full font-bold text-xs uppercase tracking-wider w-full mt-4"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

    </header>
  );
}