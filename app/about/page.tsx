'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  ShieldCheck, 
  Sun, 
  ThermometerSnowflake, 
  FileCheck2, 
  Ship, 
  Globe2, 
  PackageCheck, 
  MessageSquare, 
  ArrowUpRight,
  Sprout,
  Check,
  Award,
  Scale
} from 'lucide-react';

export default function AboutPage() {
  const steps = [
    { num: '01', title: 'Harvesting & Grove Collection', desc: 'Direct hand-picking of fresh Mazafati, Piarom, Zahedi, and Kaluteh dates from Bam & Jiroft palm orchards.' },
    { num: '02', title: 'Double-Stage Sorting & Grading', desc: 'Mechanical calibration and meticulous hand-sorting to eliminate stem dust, defective fruit, and foreign matter.' },
    { num: '03', title: 'Cold Storage & Moisture Control', desc: 'Immediate temperature-controlled storage (0°C to 5°C) preserving fruit plumpness, natural sugar, and ideal moisture.' },
    { num: '04', title: 'Lab COA & Phytosanitary Inspection', desc: 'Official lab testing, fumigation certification, and phytosanitary verification for frictionless international clearance.' },
    { num: '05', title: 'Bandar Abbas Port Dispatch', desc: 'Sealed reefer container loading and rapid maritime export toward India, UAE, Russia, and European ports.' },
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-28 md:py-36 border-b border-[#1A4337]">
        
        {/* Background Date Grove Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Bam Date Palm Groves"
            fill
            priority
            className="object-cover object-center opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22] via-[#0B2B22]/90 to-[#0B2B22]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-[#0B2B22]/80" />
        </div>

        {/* Brand Glow Animations */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5922E]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#1A4337]/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#133A2E]/90 border border-[#C5922E]/40 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-[#C5922E] uppercase shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C5922E] animate-ping" />
              <span>ABOUT SIAH ALMAS BAMI</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">ABOUT </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">US.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Rooted in Bam Groves, Exporting Premium Dates Worldwide
            </h2>

            {/* Paragraph */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Direct processing facilities in Bam &amp; Jiroft supplying cold-stored, moisture-calibrated Iranian dates straight to global B2B importers.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>EXPLORE OUR HERITAGE</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR ORIGIN & STORY */}
      <section id="story" className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full">
              <Sprout className="w-4 h-4" />
              <span>THE BAM &amp; JIROFT LEGACY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Direct Grove Sourcing Without Middleman Markups
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              Siah Almas Bami operates directly within Iran&apos;s primary palm-growing belts in Bam and Jiroft. By eliminating broker layers, we maintain strict cold chains, certified moisture levels, and machine-sorted precision for wholesale fruit importers.
            </p>

            <div className="p-4 bg-[#0B2B22] border-l-4 border-[#C5922E] rounded-r-xl space-y-1 border border-[#1A4337]">
              <p className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Core Product Lineup</p>
              <p className="text-xs text-[#F4F0E6]/80">
                Specializing in export-grade Mazafati, Piarom, Zahedi, Kaluteh, and Rabbi Dates.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#1A4337] bg-[#0B2B22] shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
              alt="Iranian Dates Processing Facility"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B2B22]/90 border border-[#1A4337] rounded-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-[#F4F0E6]">Complete Cold Chain Control</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-1">
                Every batch is temperature-controlled from Bam harvest beds to reefer container dispatches at Bandar Abbas Port.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE CAPABILITIES & VALUE PROPOSITION */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              VALUE PROPOSITION
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Export Capabilities Built for Importers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Direct Factory Control</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Zero middleman brokers ensures lower landed cost and complete field traceability.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Cold Storage Preserved</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Unbroken 0°C to 5°C cold storage preventing date squashing and juice leakage.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Precision Moisture Testing</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Calibrated testing ensuring 18%–22% moisture for Fresh and &lt;15% for Dry varieties.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Export Compliance</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Lab-certified shipments with Phytosanitary Papers, Certificate of Origin, and COA.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WORKFLOW TIMELINE */}
      <section className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              WORKFLOW TIMELINE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Grove-To-Port Supply Chain Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/40 p-6 rounded-2xl space-y-3 transition-all relative">
                <span className="text-3xl font-black text-[#C5922E] block">{step.num}</span>
                <h3 className="text-sm font-bold text-[#F4F0E6]">{step.title}</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. QUALITY ASSURANCE & LAB STANDARDS */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              QUALITY ASSURANCE
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Complying with India, UAE, Russia &amp; EU Customs Standards
            </h2>

            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
              International B2B bulk orders require flawless documentation and zero pest risk. Every batch undergoes fumigation, mechanical sorting, and laboratory verification before container sealing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#133A2E] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Calibrated Moisture Control</span>
              </div>
              <div className="flex items-center gap-3 bg-[#133A2E] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Grade A Uniform Sizing</span>
              </div>
              <div className="flex items-center gap-3 bg-[#133A2E] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Pesticide &amp; Mold Free</span>
              </div>
              <div className="flex items-center gap-3 bg-[#133A2E] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Phytosanitary &amp; COA Verified</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#133A2E] border border-[#1A4337] p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-[#C5922E] mx-auto" />
            <div>
              <h3 className="text-xl font-black text-[#F4F0E6] uppercase tracking-tight">Export Guarantee</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                Full documentation provided to guarantee seamless port customs clearance at Nhava Sheva, Jebel Ali, and St. Petersburg.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. GLOBAL SHIPPING & CONTAINER LOGISTICS */}
      <section className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              LOGISTICS CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Reefer Container Logistics &amp; Shipping Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B2B22] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <Ship className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Flexible Incoterms</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                FOB Bandar Abbas Port, CIF, and CFR rates tailored for international procurement teams.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <PackageCheck className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Export Packaging Options</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                5kg / 10kg cartons, shrink-wrapped trays, and 25kg bulk bags engineered for long ocean freight.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <Globe2 className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Target Export Corridors</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Regular container dispatches to wholesale hubs across India, UAE, Russia, CIS countries, and Europe.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION (RFQ SECTION) */}
      <section id="rfq" className="py-24 md:py-32 bg-[#0B2B22] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            DIRECT WHOLESALE QUOTE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Ready to Source Export-Grade Iranian Dates?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Request sample packages or get a customized FOB/CIF wholesale quotation within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>WhatsApp Quick Connect</span>
            </a>

            <a
              href="mailto:export@siah-almas.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#1A4337] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Request</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}