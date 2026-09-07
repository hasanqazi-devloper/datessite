'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, ShieldCheck, Quote, Award, Anchor, Leaf } from 'lucide-react';

export default function ExportExcellenceSection() {
  return (
    <section className="bg-[#0B0F0D] text-white py-16 px-4 md:px-12 border-b border-[#22332B] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-[#141C18] px-3.5 py-1.5 rounded-full border border-emerald-500/30 inline-flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            Trust &amp; Direct Sourcing
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Backed by Decades of Farm &amp; Export Excellence
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Direct farm leadership and verified operational expertise ensuring seamless Egyptian botanical herb shipments worldwide.
          </p>
        </div>

        {/* 2-COLUMN GRID (DIRECTOR CARD + EXCELLENCE METRICS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: CLIENT / OPERATIONS LEAD CARD */}
          <div className="bg-[#141C18] border border-[#22332B] p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            {/* Background Decorative Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none" />

            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Avatar Frame */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-emerald-500/50 shrink-0 bg-[#0B0F0D] shadow-inner">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                      alt="Al-Jarhi Export Management"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Leadership Details */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-black text-white">
                        Al-Jarhi Export Operations
                      </h3>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                        DIRECTOR
                      </span>
                    </div>

                    <p className="text-xs text-emerald-400 font-bold mt-0.5">
                      Exporter of Premium Egyptian Botanical Herbs
                    </p>

                    <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>Al Minya &amp; Alexandria, Egypt</span>
                    </p>
                  </div>
                </div>

                {/* LinkedIn SVG Icon */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0B0F0D] rounded-xl border border-[#22332B] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition shrink-0 flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-[#22332B]" />

              {/* Operations Badge & Statement */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/20 px-3 py-1 rounded-lg w-fit">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Direct Farm Supply Chain</span>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-800 absolute -top-1 -left-2 -z-0 opacity-60" />
                  <p className="text-xs text-slate-300 leading-relaxed pl-4 relative z-10 italic">
                    &ldquo;Managing direct herb sourcing from Al Minya farms to Egyptian sea ports. Specializing in high-purity dried Marjoram, Chamomile, and Basil with strict moisture control and guaranteed lab analysis for international buyers.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: OPERATIONAL HIGHLIGHTS CARDS */}
          <div className="flex flex-col justify-between gap-4">
            
            <div className="bg-[#141C18] border border-[#22332B] p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/30 transition shadow-lg">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Direct Al Minya Farm Sourcing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminating trader markups with direct farm harvesting in Egypt to guarantee 100% natural, pesticide-free herbs.
                </p>
              </div>
            </div>

            <div className="bg-[#141C18] border border-[#22332B] p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/30 transition shadow-lg">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 shrink-0">
                <Anchor className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Fast-Track Egyptian Port Logistics</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated operations team at Alexandria / Said ports ensuring smooth customs clearance, phytosanitary checks, and swift Bill of Lading transfer.
                </p>
              </div>
            </div>

            <div className="bg-[#141C18] border border-[#22332B] p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/30 transition shadow-lg">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Verified 99% Purity &amp; Specs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every batch is double-sifted for zero dust and moisture controlled below 10% prior to container stuffing.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}