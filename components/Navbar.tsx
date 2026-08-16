"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative h-12 w-auto overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Koushiar Tejarat Logo"
                  className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors">
              Products
            </Link>
            <Link href="/Industries" className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors">
              Industries
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+92615550000"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 text-sm font-medium transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Direct Inquiry</span>
            </a>

            <Link
              href="#rfq-section"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-5 px-6 transition-all animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-emerald-600 font-medium text-base py-2 border-b border-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-emerald-600 font-medium text-base py-2 border-b border-gray-50"
            >
              About Us
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-emerald-600 font-medium text-base py-2 border-b border-gray-50"
            >
              Products
            </Link>
            <Link
              href="/Industries"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-emerald-600 font-medium text-base py-2 border-b border-gray-50"
            >
              Industries
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-emerald-600 font-medium text-base py-2"
            >
              Contact
            </Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="#rfq-section"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white w-full py-3 rounded-xl font-medium text-base shadow-md shadow-emerald-600/20"
              >
                <span>Request a Quote (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}