'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf, ShieldCheck, Ship, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#0B0F0D] text-white overflow-hidden py-16 lg:py-24 border-b border-[#22332B]">
      
      {/* BACKGROUND HERBAL GLOW ANIMATIONS */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HEADLINE & ACTIONS (6 COLS) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-black text-emerald-400 shadow-lg backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20 animate-bounce" />
              <span className="tracking-widest uppercase">Direct Farm Sourcing — Al Minya, Egypt</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
              Premium Egyptian <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-400 drop-shadow-sm">
                Dried Marjoram & Herbs
              </span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              100% naturally sun-dried, high-purity Marjoram, Chamomile, and Basil sourced straight from Al Minya farms. Supplying bulk orders for global B2B importers.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1 w-full">
              <a
                href="#rfq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-500/15 hover:shadow-emerald-500/30 transform active:scale-95"
              >
                <span>Get Wholesale Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#specs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141C18] hover:bg-[#1C2823] border border-[#22332B] hover:border-emerald-500/40 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>View Product Specs</span>
              </a>
            </div>

            {/* TRUST MARKERS BAR */}
            <div className="pt-6 border-t border-[#22332B] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0 w-full">
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-950/80 rounded-xl border border-emerald-500/20 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">99% Pure Grade</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Lab Certified Batches</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#22332B] sm:pl-3">
                <div className="p-2 bg-amber-950/80 rounded-xl border border-amber-500/20 text-amber-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white font-sans">100% Sun-Dried</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Preserved Natural Oils</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#22332B] sm:pl-3">
                <div className="p-2 bg-emerald-950/80 rounded-xl border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Global Dispatch</h4>
                  <p className="text-[10px] text-slate-400 font-medium">FOB &amp; CIF Terms</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HERB DISPLAY WITH GLOW EFFECT (6 COLS) */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full">
            
            {/* Glowing Backdrop behind Image */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-lg lg:max-w-none h-[320px] sm:h-[400px] lg:h-[460px] flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="Al-Jarhi Egyptian Dried Marjoram Export"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center lg:object-right drop-shadow-[0_20px_30px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}