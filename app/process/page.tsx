'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  Leaf, 
  ShieldCheck, 
  Sun, 
  Wind, 
  FileCheck2, 
  Ship, 
  PackageCheck, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles,
  Check,
  Factory,
  Truck
} from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      num: '01',
      title: 'Sustainable Cultivation & Farm Harvest',
      location: 'Al Minya Farms, Egypt',
      icon: Leaf,
      description: 'Cultivated in rich Nile-fed soil under natural sunlight. Harvested at peak volatile oil maturity with zero synthetic post-harvest treatments.',
      highlights: ['Direct farmer partnerships', 'Zero middleman intervention', 'Peak oil timing'],
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80'
    },
    {
      num: '02',
      title: 'Controlled Solar Drying & Moisture Curing',
      location: 'Drying Facilities',
      icon: Sun,
      description: 'Herbs are sun-cured under hygienic solar drying beds. Moisture levels are strictly reduced below 8% to prevent mold while locking in vibrant natural color and aroma.',
      highlights: ['Moisture content < 8%', 'Natural green color retention', 'Preserved essential oils'],
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80'
    },
    {
      num: '03',
      title: 'Precision Mechanical Sifting & Dust Removal',
      location: 'Processing Unit',
      icon: Wind,
      description: 'Advanced air-sifting and mechanical screening remove heavy stems, foreign matter, and fine dust particles to deliver high purity grades.',
      highlights: ['Purity grade ≥ 99%', 'Stem & dust extraction', 'Custom cut sizes (Whole/TBC)'],
      image: 'https://images.unsplash.com/photo-1608683134044-84d4b1432f86?auto=format&fit=crop&q=80'
    },
    {
      num: '04',
      title: 'Laboratory Testing & COA Certification',
      location: 'Quality Control Lab',
      icon: FileCheck2,
      description: 'Representative batch samples undergo rigorous testing for pesticide residues, heavy metals, and microbiological purity prior to packaging approval.',
      highlights: ['Phytosanitary certification', 'COA batch analysis', 'EU & GCC import compliance'],
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80'
    },
    {
      num: '05',
      title: 'Protective Export Bulk Packaging',
      location: 'Packing Facility',
      icon: PackageCheck,
      description: 'Packed into double-layer 20kg / 25kg PP woven bags with protective inner polyethylene liners to prevent moisture absorption during sea transit.',
      highlights: ['Moisture-proof lining', 'Palletized option', 'Custom buyer labeling'],
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80'
    },
    {
      num: '06',
      title: 'Alexandria Port Container Loading & Dispatch',
      location: 'Alexandria Port / Sea Freight',
      icon: Ship,
      description: 'Sealed 20ft / 40ft FCL container dispatch directly from Alexandria Port under FOB or CIF Incoterms to global destination ports.',
      highlights: ['FOB & CIF available', '20ft / 40ft FCL capacity', 'Customs clearance ready'],
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-[#0B0F0D] text-[#E2ECE6] min-h-screen selection:bg-emerald-500 selection:text-slate-950">

      {/* 1. HERO SECTION (PROCESS OVERVIEW) */}
      <section className="relative bg-[#0B0F0D] text-white overflow-hidden py-28 md:py-36 border-b border-[#22332B]">
        
        {/* Background Field Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
            alt="Egyptian Agricultural Farm Processing"
            fill
            priority
            className="object-cover object-center opacity-25 grayscale-[20%] mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0D] via-[#0B0F0D]/90 to-[#0B0F0D]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-transparent to-[#0B0F0D]/80" />
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#141C18]/90 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-emerald-400 uppercase shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SUPPLY CHAIN &amp; PROCESSING</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-white">OUR </span>
              <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">PROCESS.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-100 tracking-tight leading-tight">
              From Al Minya Farms to Alexandria Port
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              A transparent, 6-step export workflow designed to guarantee leaf purity, low moisture retention, and zero middleman delay.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#workflow"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transform active:scale-95 group"
              >
                <span>EXPLORE WORKFLOW</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DETAILED 6-STEP PROCESS TIMELINE */}
      <section id="workflow" className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#18231E] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              QUALITY CONTROL PIPELINE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              6-Step Export Execution Protocol
            </h2>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.num}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#18231E] border border-[#22332B] hover:border-emerald-500/40 p-6 sm:p-8 rounded-3xl transition-all duration-500 shadow-xl ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* TEXT CONTENT */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center justify-between border-b border-[#22332B] pb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-black text-emerald-400">{step.num}</span>
                        <div className="p-2 bg-[#121A16] border border-emerald-500/30 text-emerald-400 rounded-xl">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full">
                        {step.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {/* HIGHLIGHT BADGES */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                      {step.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 bg-[#121A16] border border-[#22332B] px-3 py-2 rounded-xl">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="text-[11px] font-bold text-slate-200">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IMAGE VISUAL */}
                  <div className={`lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#22332B] bg-[#121A16] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover opacity-75 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18231E] via-transparent to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. TESTING PARAMETERS & LAB CONTROL */}
      <section className="py-20 md:py-28 bg-[#0B0F0D] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              LAB CONTROL
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Strict Quality Control Metrics
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              We monitor every physical, chemical, and microbiological parameter to ensure effortless port clearance across Europe, North America, and GCC destination countries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#121A16] border border-[#22332B] rounded-2xl space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Moisture Threshold</span>
                <p className="text-base font-black text-emerald-400">&lt; 8.0% Max</p>
              </div>

              <div className="p-4 bg-[#121A16] border border-[#22332B] rounded-2xl space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Leaf Purity Standard</span>
                <p className="text-base font-black text-emerald-400">≥ 99.0% Pure</p>
              </div>

              <div className="p-4 bg-[#121A16] border border-[#22332B] rounded-2xl space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Essential Oil Retention</span>
                <p className="text-base font-black text-amber-400">1.2% - 1.5% Volatile</p>
              </div>

              <div className="p-4 bg-[#121A16] border border-[#22332B] rounded-2xl space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Stem / Dust Content</span>
                <p className="text-base font-black text-emerald-400">&lt; 1.0% Minimized</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#121A16] border border-[#22332B] p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Full Export Documentation</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Every shipment includes a Certificate of Analysis (COA), Phytosanitary Certificate, Bill of Lading, and Certificate of Origin.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION (RFQ SECTION) */}
      <section id="rfq" className="py-24 md:py-32 bg-[#0B0F0D] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            START EXPORT SHIPMENT
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Schedule a Process Review or Order Samples
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Discuss target specifications, packaging needs, or request FOB/CIF container quotes with our export team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Quick Connect</span>
            </a>

            <a
              href="mailto:export@aljarhi.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141C18] hover:bg-[#1C2823] border border-[#22332B] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Process Desk</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}