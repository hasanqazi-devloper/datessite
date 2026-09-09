'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, TreePalm, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function DirectSourcing() {
  const highlights = [
    "Direct ownership & long-term leases of Bam & Jiroft palm groves.",
    "Advanced cold storage facilities near Bandar Abbas export hub.",
    "Strict ISO 22000 & HACCP quality control protocols.",
    "Zero middleman markup, ensuring competitive B2B container rates."
  ];

  return (
    <section id="about-sourcing" className="py-20 md:py-28 bg-[#0B2B22] text-[#F4F0E6] border-y border-[#1A4337] relative z-10 w-full overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C5922E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C5922E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-24 w-full relative z-10 space-y-16">

        {/* SECTION HEADER */}
        <div className="text-center space-y-3 w-full max-w-2xl mx-auto">
          <span className="text-[#C5922E] text-[11px] font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            ABOUT SIAH ALMAS BAMI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-[#F4F0E6]">
            Decades of Direct Date Sourcing
          </h2>
          <p className="text-xs sm:text-sm font-medium text-[#F4F0E6]/70 leading-relaxed">
            Controlling every step from origin palm groves to international container shipments.
          </p>
        </div>

        {/* MAIN ABOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: CLIENT / FOUNDER PICTURE & BADGES */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#1A4337] bg-[#133A2E] shadow-2xl group">
              
              {/* Executive Image Container */}
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E35AQFjNFm12qtURg/profile-framedphoto-shrink_800_800/B4EZ7.Ab9cJgAY-/0/1782377988448?e=1789567200&v=beta&t=n0kR-tIms1t_IVbP1MP3yyKjtRFu0TKCYO3rRjvQ9oM" // Aapni Client/Founder ki image ka path yahan dein
                  alt="Siah Almas Bami Founder & Director"
                  fill
                  className="object-cover object-top filter contrast-[1.05] grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Gradient Overlay for Dark Blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent opacity-90" />
              </div>

              {/* FLOATING OVERLAY CARD: FOUNDER INFO */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B2B22]/95 backdrop-blur-md border border-[#C5922E]/30 p-4 rounded-2xl space-y-1 shadow-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-[#F4F0E6]">Alireza Bami</h4>
                  <span className="text-[10px] font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2 py-0.5 rounded">
                    Managing Director
                  </span>
                </div>
                <p className="text-[11px] text-[#F4F0E6]/70">
                  "Over 25 years of commitment to exporting authentic Iranian fresh dates worldwide."
                </p>
              </div>

              {/* BADGE ICON TOP RIGHT */}
              <div className="absolute top-4 right-4 bg-[#0B2B22]/80 backdrop-blur-md p-3 rounded-2xl border border-[#1A4337] text-[#C5922E]">
                <TreePalm className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* RIGHT: STORY, STATS & HIGHLIGHTS */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#F4F0E6] leading-tight">
                Eliminating Middlemen to Deliver Uncompromised Harvest Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#F4F0E6]/80 leading-relaxed font-normal">
                Siah Almas Bami operates at the heart of Iran’s date capital—Bam and Jiroft. By direct ownership and long-term grove leases, we bypass supply chain markups, guaranteeing full transparency, optimal moisture retention, and certified cold-chain logistics for bulk buyers across India, Russia, Europe, and the Middle East.
              </p>
            </div>

            {/* KEY STATS ROW */}
            <div className="grid grid-cols-3 gap-3 border-y border-[#1A4337] py-6">
              <div className="space-y-1">
                <span className="text-xl sm:text-2xl font-black text-[#C5922E]">25+</span>
                <p className="text-[10px] sm:text-xs font-semibold text-[#F4F0E6]/70 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="space-y-1 border-x border-[#1A4337] px-3">
                <span className="text-xl sm:text-2xl font-black text-[#C5922E]">10K+</span>
                <p className="text-[10px] sm:text-xs font-semibold text-[#F4F0E6]/70 uppercase tracking-wider">Tons Annual Export</p>
              </div>
              <div className="space-y-1 pl-1">
                <span className="text-xl sm:text-2xl font-black text-[#C5922E]">30+</span>
                <p className="text-[10px] sm:text-xs font-semibold text-[#F4F0E6]/70 uppercase tracking-wider">Export Destinations</p>
              </div>
            </div>

            {/* VALUE BULLETS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {highlights.map((point, index) => (
                <div key={index} className="bg-[#133A2E] border border-[#1A4337] p-3.5 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#F4F0E6]/80 font-medium leading-normal">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* ACTION CALLOUT */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#rfq"
                className="w-full sm:w-auto bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#F4F0E6]/60">
                <ShieldCheck className="w-4 h-4 text-[#C5922E]" />
                <span>ISO 22000 &amp; Phytosanitary Certified Facility</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}