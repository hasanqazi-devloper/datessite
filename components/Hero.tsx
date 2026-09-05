'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Flame, ShieldCheck, Truck, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-800/80">
      
      {/* BACKGROUND FLAME & EMBER ANIMATIONS */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating Sparks Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HEADLINE & ACTIONS */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-black text-amber-400 shadow-lg backdrop-blur-md">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400/20 animate-bounce" />
              <span className="tracking-widest uppercase">Direct B2B Charcoal Exporter</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Premium Nigerian <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-500 drop-shadow-sm">
                Hardwood Charcoal
              </span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0 font-normal">
              Double-screened, moisture-controlled lump charcoal engineered for maximum heat output and long burn times. Supplying 40ft HC containers globally.
            </p>

            {/* CTA Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full">
  <a
    href="#rfq"
    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/15 hover:shadow-amber-500/30 transform active:scale-95"
  >
    <span>Get Container Quote</span>
    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
  </a>

  <a
    href="#specs"
    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/40 text-slate-200 hover:text-white px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
  >
    <Download className="w-4 h-4 text-amber-400" />
    <span>View Specifications</span>
  </a>
</div>

{/* TRUST MARKERS BAR (RESPONSIVE GRID) */}
<div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-left max-w-xl mx-auto lg:mx-0 w-full">
  {/* Item 1 */}
  <div className="flex items-center gap-3">
    <div className="p-2.5 sm:p-2 bg-emerald-950/80 rounded-xl border border-emerald-500/20 text-emerald-400 shrink-0">
      <ShieldCheck className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-xs font-black text-white">Lab Tested</h4>
      <p className="text-[10px] text-slate-400 font-medium">Guaranteed Specs</p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="flex items-center gap-3 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-800/80 sm:pl-4">
    <div className="p-2.5 sm:p-2 bg-amber-950/80 rounded-xl border border-amber-500/20 text-amber-400 shrink-0">
      <Sparkles className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-xs font-black text-white font-sans">High Carbon</h4>
      <p className="text-[10px] text-slate-400 font-medium">Long Burn Time</p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="flex items-center gap-3 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-800/80 sm:pl-4">
    <div className="p-2.5 sm:p-2 bg-blue-950/80 rounded-xl border border-blue-500/20 text-blue-400 shrink-0">
      <Truck className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-xs font-black text-white">Global Dispatch</h4>
      <p className="text-[10px] text-slate-400 font-medium">FOB &amp; CIF Terms</p>
    </div>
  </div>
</div>

          </div>

          {/* RIGHT COLUMN: PNG IMAGE DISPLAY WITH GLOW EFFECT */}
          <div className="lg:col-span-5 flex items-center justify-center relative p-2">
            
            {/* Glowing Backdrop behind Image */}
            <div className="absolute w-72 h-72 bg-amber-500/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative w-full max-w-md md:max-w-lg aspect-square flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="Nigerian Hardwood Charcoal Export"
                fill
                priority
                className="object-contain drop-shadow-[0_25px_35px_rgba(217,119,6,0.25)] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}