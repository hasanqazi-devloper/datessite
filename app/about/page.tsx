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
  CheckCircle2, 
  Globe2, 
  PackageCheck, 
  MessageSquare, 
  ArrowUpRight,
  Sprout,
  Check
} from 'lucide-react';

export default function AboutPage() {
  const steps = [
    { num: '01', title: 'Sustainable Cultivation', desc: 'Direct farm management in Al Minya with zero synthetic additives.' },
    { num: '02', title: 'Controlled Solar Drying', desc: 'Moisture reduced below 8% to preserve vital aromatic oils.' },
    { num: '03', title: 'Precision Mechanical Sifting', desc: 'Air-sifting stem and dust particles ensuring ≥ 99% leaf purity.' },
    { num: '04', title: 'Lab Inspection & COA', desc: 'Phytosanitary & batch analysis verifying strict international standards.' },
    { num: '05', title: 'Container Loading & Port Dispatch', desc: 'Sealed export packaging shipped directly from Alexandria Port.' },
  ];

  return (
    <div className="bg-[#0B0F0D] text-[#E2ECE6] min-h-screen selection:bg-emerald-500 selection:text-slate-950">

      {/* 1. HERO SECTION (UPDATED WITH FARM FIELD BG & BRAND ACCENTS) */}
      <section className="relative bg-[#0B0F0D] text-white overflow-hidden py-28 md:py-36 border-b border-[#22332B]">
        
        {/* Background Egyptian Farm Field Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
            alt="Egyptian Farm Field"
            fill
            priority
            className="object-cover object-center opacity-25 grayscale-[20%] mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0D] via-[#0B0F0D]/90 to-[#0B0F0D]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-transparent to-[#0B0F0D]/80" />
        </div>

        {/* Brand Glow Animations & Grid Accent */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#141C18]/90 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-emerald-400 uppercase shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ABOUT AL-JARHI TRADING</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-white">ABOUT </span>
              <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">US.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-100 tracking-tight leading-tight">
              Rooted in Egyptian Soil, Exporting Pure Quality Worldwide
            </h2>

            {/* Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Direct farm sourcing from Al Minya to global destination ports with complete transparency and purity compliance.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transform active:scale-95 group"
              >
                <span>EXPLORE OUR HISTORY</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR ORIGIN & STORY (AL MINYA LEGACY) */}
      <section id="story" className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#1A2620] border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
              <Sprout className="w-4 h-4" />
              <span>THE AL MINYA LEGACY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Direct Farm Sourcing Without Brokers
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
              Al-Jarhi Trading was established in the rich agricultural region of Al Minya, Egypt, with a clear purpose: eliminating middleman markups and delivering authentic, sun-dried Egyptian herbs straight to global B2B importers.
            </p>

            <div className="p-4 bg-[#18231E] border-l-4 border-emerald-500 rounded-r-xl space-y-1">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Core Botanical Focus</p>
              <p className="text-xs text-slate-300">
                Specializing in export-ready Marjoram, Chamomile, Basil, Spearmint, and Coriander Seeds.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#22332B] bg-[#18231E] shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80"
              alt="Dried Egyptian Herbs Processing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#141C18]/90 border border-emerald-500/30 rounded-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-white">Direct Traceability</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every batch is tracked from Al Minya harvest beds to container loading at Alexandria Port.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE CAPABILITIES & VALUE PROPOSITION */}
      <section className="py-20 md:py-28 bg-[#0B0F0D] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              VALUE PROPOSITION
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Export Capabilities Built for Importers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#121A16] border border-[#22332B] hover:border-emerald-500/40 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-emerald-400 w-fit">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Direct Farm Sourcing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero middleman brokers ensures cost savings and complete field traceability.
              </p>
            </div>

            <div className="bg-[#121A16] border border-[#22332B] hover:border-emerald-500/40 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-emerald-400 w-fit">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Precision Air-Sifting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Advanced mechanical sifting guaranteeing ≥ 99% leaf purity free of stems and dust.
              </p>
            </div>

            <div className="bg-[#121A16] border border-[#22332B] hover:border-amber-500/40 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-amber-950/80 border border-amber-500/30 rounded-xl text-amber-400 w-fit">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Controlled Solar Drying</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Solar curing locks in essential volatile oils, natural color, and robust aroma.
              </p>
            </div>

            <div className="bg-[#121A16] border border-[#22332B] hover:border-emerald-500/40 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-emerald-400 w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Export Compliance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lab-certified batches accompanied by Phytosanitary and Certificate of Analysis (COA).
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE EXPORT PROCESS TIMELINE (FARM TO PORT) */}
      <section className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#1A2620] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              WORKFLOW TIMELINE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Farm-To-Port Export Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#18231E] border border-[#22332B] hover:border-emerald-500/30 p-6 rounded-2xl space-y-3 transition-all relative">
                <span className="text-3xl font-black text-emerald-400/80 block">{step.num}</span>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. QUALITY ASSURANCE & LAB STANDARDS */}
      <section className="py-20 md:py-28 bg-[#0B0F0D] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              QUALITY ASSURANCE
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Complying with EU &amp; GCC Import Standards
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              International B2B orders demand rigorous purity. Every batch produced undergoes chemical and microbial laboratory testing prior to packing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#121A16] border border-[#22332B] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Moisture Content &lt; 8%</span>
              </div>
              <div className="flex items-center gap-3 bg-[#121A16] border border-[#22332B] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Purity Grade ≥ 99%</span>
              </div>
              <div className="flex items-center gap-3 bg-[#121A16] border border-[#22332B] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Pesticide Residue Free</span>
              </div>
              <div className="flex items-center gap-3 bg-[#121A16] border border-[#22332B] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Phytosanitary Certified</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121A16] border border-[#22332B] p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto" />
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Lab-Certified Guarantee</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Full documentation provided to guarantee seamless customs clearance at destination ports.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. GLOBAL SHIPPING & CONTAINER LOGISTICS */}
      <section className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#1A2620] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              LOGISTICS CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Container Logistics &amp; Shipping Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#18231E] border border-[#22332B] p-6 rounded-2xl space-y-3">
              <Ship className="w-8 h-8 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Incoterms Options</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                FOB Alexandria Port, CIF, and CFR rates tailored for international procurement teams.
              </p>
            </div>

            <div className="bg-[#18231E] border border-[#22332B] p-6 rounded-2xl space-y-3">
              <PackageCheck className="w-8 h-8 text-amber-400" />
              <h3 className="text-base font-bold text-white">Bulk Packaging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                20kg / 25kg PP woven bags equipped with internal moisture-proof lining.
              </p>
            </div>

            <div className="bg-[#18231E] border border-[#22332B] p-6 rounded-2xl space-y-3">
              <Globe2 className="w-8 h-8 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Destination Routes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Serving importers across Europe, the Middle East, North America, and Asia.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION (RFQ SECTION) */}
      <section id="rfq" className="py-24 md:py-32 bg-[#0B0F0D] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            DIRECT WHOLESALE QUOTE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Source Export-Grade Egyptian Herbs?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Request sample packages or get a customized FOB/CIF wholesale quotation within 24 hours.
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
              <span>Email Request</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}