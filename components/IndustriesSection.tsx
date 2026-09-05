'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, ShieldCheck, Quote, Award, Anchor } from 'lucide-react';

export default function ExportExcellenceSection() {
  return (
    <section className="bg-slate-900/80 text-white py-16 px-4 md:px-12 border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Trust &amp; Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Backed by Decades of Export Excellence
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Direct leadership and verified operational expertise ensuring seamless Nigerian charcoal shipments worldwide.
          </p>
        </div>

        {/* 2-COLUMN GRID (CLIENT CARD + EXCELLENCE METRICS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: CLIENT / OPERATIONS LEAD CARD */}
          <div className="bg-slate-950/90 border border-slate-800 p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            {/* Background Decorative Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />

            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Client Avatar */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-500/50 shrink-0 bg-slate-900 shadow-inner">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D4E03AQETazKjpjmCVg/profile-displayphoto-crop_800_800/B4EaBh6WUWIkAI-/0/1788349082799?e=1790208000&v=beta&t=yTM_Kz3Tp-xUTtHcma4cx8acQY_zSQvs95owEknrj6E"
                      alt="Chinenye Grace Onyemaechi"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Client Details */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-black text-white">
                        Chinenye Grace Onyemaechi
                      </h3>
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full shrink-0">
                        1st
                      </span>
                    </div>

                    <p className="text-xs text-amber-400 font-bold mt-0.5">
                      Exporter of High Quality Charcoal
                    </p>

                    <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Lagos, Lagos State, Nigeria</span>
                    </p>
                  </div>
                </div>

                {/* LinkedIn SVG Icon */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition shrink-0 flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-800/80" />

              {/* Operations Badge & Statement */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-lg w-fit">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Managing Export Operations Efficiently</span>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-800 absolute -top-1 -left-2 -z-0 opacity-60" />
                  <p className="text-xs text-slate-300 leading-relaxed pl-4 relative z-10 italic">
                    &ldquo;Managing end-to-end charcoal export operations efficiently from Lagos Port. Specializing in premium Nigerian Ayin hardwood charcoal with strict moisture control and seamless container loading.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: OPERATIONAL HIGHLIGHTS CARDS */}
          <div className="flex flex-col justify-between gap-4">
            
            <div className="bg-slate-950/90 border border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/30 transition shadow-lg">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Direct Kiln Sourcing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminating middleman costs with direct factory kiln sourcing in Nigeria to guarantee 100% pure Ayin hardwood.
                </p>
              </div>
            </div>

            <div className="bg-slate-950/90 border border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/30 transition shadow-lg">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
                <Anchor className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Fast-Track Port Clearance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated operations team at Lagos Port ensuring swift container stuffing, customs clearance, and Bill of Lading release.
                </p>
              </div>
            </div>

            <div className="bg-slate-950/90 border border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/30 transition shadow-lg">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Guaranteed Lab Specs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every container is double-screened for zero dust and moisture checked below 8% prior to sealing.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}