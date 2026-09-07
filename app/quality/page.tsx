'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  ShieldCheck, 
  FileCheck2, 
  Microscope, 
  CheckCircle2, 
  Award, 
  FlaskConical, 
  Scale, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles,
  Check,
  Building2,
  FileSpreadsheet
} from 'lucide-react';

export default function QualityPage() {
  const qualityMetrics = [
    {
      title: 'Purity & Cleanliness',
      target: '≥ 99.0%',
      desc: 'Mechanical air-sifting removes foreign matter, stems, and heavy dust particles to ensure pure leaf cuts.',
      icon: FlaskConical
    },
    {
      title: 'Moisture Control',
      target: '< 8.0%',
      desc: 'Controlled solar-curing keeps moisture strictly under 8% to prevent mold growth during ocean transport.',
      icon: Scale
    },
    {
      title: 'Essential Oil Yield',
      target: '1.2% - 1.5%',
      desc: 'Low-temperature handling locks in high volatile oil concentrations for maximum aroma and flavor profile.',
      icon: Sparkles
    },
    {
      title: 'Microbiological Safety',
      target: 'Pass Grade',
      desc: 'Rigorous batch screening ensures compliance with international microbial and pathogen standards.',
      icon: Microscope
    }
  ];

  const certificates = [
    {
      title: 'Phytosanitary Certificate',
      issuer: 'Egyptian Ministry of Agriculture',
      desc: 'Verifies that shipments are free from quarantine pests and plant diseases prior to vessel loading.'
    },
    {
      title: 'Certificate of Analysis (COA)',
      issuer: 'Independent Accredited Labs',
      desc: 'Detailed batch test report outlining moisture levels, purity percentages, and volatile oil content.'
    },
    {
      title: 'Certificate of Origin',
      issuer: 'Chamber of Commerce',
      desc: 'Official verification certifying 100% Egyptian origin for preferential trade duties.'
    },
    {
      title: 'Customs & Port Compliance',
      issuer: 'Alexandria Port Authority',
      desc: 'Pre-vessel inspection documents ensuring seamless customs clearance at European and global ports.'
    }
  ];

  return (
    <div className="bg-[#0B0F0D] text-[#E2ECE6] min-h-screen selection:bg-emerald-500 selection:text-slate-950">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B0F0D] text-white overflow-hidden py-28 md:py-36 border-b border-[#22332B]">
        
        {/* Background Field Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80"
            alt="Quality Control Laboratory Testing"
            fill
            priority
            className="object-cover object-center opacity-20 grayscale-[30%] mix-blend-luminosity scale-105"
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
              <span>QUALITY &amp; COMPLIANCE</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-white">QUALITY </span>
              <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">ASSURANCE.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-100 tracking-tight leading-tight">
              Uncompromising Standards for B2B Global Import
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Every shipment undergoes rigorous laboratory inspection to meet the strict microbiological, purity, and pesticide safety demands of global importers.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#metrics"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transform active:scale-95 group"
              >
                <span>VIEW QC METRICS</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE QC METRICS GRID */}
      <section id="metrics" className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#18231E] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              LABORATORY METRICS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Strict Purity &amp; Quality Parameters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#18231E] border border-[#22332B] hover:border-emerald-500/40 p-6 rounded-3xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#121A16] border border-emerald-500/30 rounded-2xl text-emerald-400">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full uppercase">
                        {item.target}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CERTIFICATIONS & DOCUMENTATION */}
      <section className="py-20 md:py-28 bg-[#0B0F0D] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              OFFICIAL COMPLIANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Export Certification &amp; Documentation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-[#121A16] border border-[#22332B] hover:border-emerald-500/30 p-6 sm:p-8 rounded-3xl space-y-3 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-[#22332B] pb-3">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base font-bold text-white">{cert.title}</h3>
                  </div>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    Official
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
                  {cert.desc}
                </p>

                <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Issued By: <strong className="text-slate-200">{cert.issuer}</strong></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. LAB AUDIT GUARANTEE */}
      <section className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#18231E] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              INSPECTION PROFILES
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Pre-Shipment Inspection (PSI) Available
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              To give foreign buyers absolute assurance, we welcome third-party pre-shipment inspections at Alexandria Port by international surveyors (such as SGS or Bureau Veritas) upon request.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 bg-[#18231E] border border-[#22332B] p-3.5 rounded-2xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Third-Party Lab Sampling Permitted</span>
              </div>
              <div className="flex items-center gap-3 bg-[#18231E] border border-[#22332B] p-3.5 rounded-2xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Pesticide &amp; Heavy Metal Screening</span>
              </div>
              <div className="flex items-center gap-3 bg-[#18231E] border border-[#22332B] p-3.5 rounded-2xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Container Seal &amp; Weight Verification</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#18231E] border border-[#22332B] p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Zero-Defect Commitment</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              If a batch fails agreed-upon moisture or purity parameters during port sampling, it is re-processed or replaced prior to container dispatch.
            </p>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION (RFQ SECTION) */}
      <section id="rfq" className="py-24 md:py-32 bg-[#0B0F0D] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            REQUEST SPECIFICATION SHEET
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Need Sample Lab Reports or Product COAs?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Contact our quality assurance team to obtain sample Certificates of Analysis or discuss custom testing requirements.
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
              <span>Email Quality Desk</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}