'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Ship, Download, Sparkles, ThermometerSnowflake } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#0B2B22] text-[#EFECE6] overflow-hidden py-16 lg:py-24 border-b border-[#1A4337]">
      
      {/* BACKGROUND GLOW ANIMATIONS */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C5922E]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5922E_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HEADLINE & ACTIONS (6 COLS) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full text-xs font-black text-[#C5922E] shadow-lg backdrop-blur-md">
              <ThermometerSnowflake className="w-3.5 h-3.5 text-[#C5922E] animate-pulse" />
              <span className="tracking-widest uppercase">Direct Processing & Cold Storage — Bam & Jiroft, Iran</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#EFECE6]">
              Premium Iranian <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5922E] via-[#E2B755] to-amber-200 drop-shadow-sm">
                Fresh & Dried Dates Export
              </span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="text-[#EFECE6]/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Directly sorted, moisture-controlled, and cold-storage packaged Mazafati, Piarom, Zahedi, Rabbi, and Kaluteh dates. Supplying container loads for buyers in India, UAE, Russia, and Europe.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1 w-full">
              <a
                href="#rfq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C5922E]/15 hover:shadow-[#C5922E]/30 transform active:scale-95"
              >
                <span>Request Container Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#1A4337] border border-[#1A4337] hover:border-[#C5922E]/40 text-[#EFECE6] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-[#C5922E]" />
                <span>Download Packaging Specs</span>
              </a>
            </div>

            {/* TRUST MARKERS BAR */}
            <div className="pt-6 border-t border-[#1A4337] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0 w-full">
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#133A2E] rounded-xl border border-[#1A4337] text-[#C5922E] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#EFECE6]">Grade A Sorted</h4>
                  <p className="text-[10px] text-[#EFECE6]/60 font-medium">5kg Bulk &amp; Shrink Packs</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#1A4337] sm:pl-3">
                <div className="p-2 bg-[#133A2E] rounded-xl border border-[#1A4337] text-[#C5922E] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#EFECE6]">Cold-Chain Fresh</h4>
                  <p className="text-[10px] text-[#EFECE6]/60 font-medium">Bam Industrial Facilities</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#1A4337] sm:pl-3">
                <div className="p-2 bg-[#133A2E] rounded-xl border border-[#1A4337] text-[#C5922E] shrink-0">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#EFECE6]">Bandar Abbas Export</h4>
                  <p className="text-[10px] text-[#EFECE6]/60 font-medium">Nhava Sheva &amp; Jebel Ali</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: DATES DISPLAY WITH GLOW EFFECT (6 COLS) */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full">
            
            {/* Glowing Backdrop behind Image */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-[#C5922E]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-lg lg:max-w-none h-[320px] sm:h-[400px] lg:h-[460px] flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="Siah Almas Bami Iranian Dates Packaging and Cold Storage Export"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center lg:object-right drop-shadow-[0_20px_30px_rgba(197,146,46,0.25)] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}