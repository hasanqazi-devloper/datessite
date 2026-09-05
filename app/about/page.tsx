'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  MapPin, 
  ShieldCheck, 
  Quote, 
  Trees, 
  Filter, 
  FlaskConical, 
  Ship, 
  FileCheck2, 
  Flame, 
  Globe2, 
  CheckCircle2, 
  ArrowUpRight,
  Download
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen selection:bg-amber-500 selection:text-slate-950">
      
      {/* ==========================================
          1. HERO SECTION (Sample Inspired Design)
      ========================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-start px-6 md:px-16 overflow-hidden border-b border-slate-800/80 pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-charcoal-bg.jpg"
            alt="Sustainable Nigerian Timber"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              ABOUT CGO EXPORTS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
            ABOUT <span className="text-amber-500">US.</span>
          </h1>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 max-w-2xl leading-tight">
              Empowering Global Industry with Authentic Nigerian Hardwood Charcoal
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Direct forest-to-port supply chain with zero middleman markups.
            </p>
          </div>

          <div>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Explore Our History</span>
              <ArrowDown className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* KEY STATS BAR */}
          <div className="pt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-800/80">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">10,000+ MT</p>
              <p className="text-[11px] text-slate-400 font-medium">Annual Supply Capacity</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">15+ Countries</p>
              <p className="text-[11px] text-slate-400 font-medium">Global Footprint</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">&lt; 8%</p>
              <p className="text-[11px] text-slate-400 font-medium">Guaranteed Moisture Rate</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">100%</p>
              <p className="text-[11px] text-slate-400 font-medium">Legal &amp; Sustainable Forestry</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. OPERATIONAL LEADERSHIP SPOTLIGHT
      ========================================== */}
      <section className="py-20 px-4 md:px-12 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Operational Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Direct On-Ground Supervision</h2>
          </div>

          <div className="bg-slate-950/90 border border-slate-800 p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-amber-500/50 shrink-0 bg-slate-900 shadow-xl">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQETazKjpjmCVg/profile-displayphoto-crop_800_800/B4EaBh6WUWIkAI-/0/1788349082799?e=1790208000&v=beta&t=yTM_Kz3Tp-xUTtHcma4cx8acQY_zSQvs95owEknrj6E"
                  alt="Chinenye Grace Onyemaechi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-center lg:text-left flex-1">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white">Chinenye Grace Onyemaechi</h3>
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">1st</span>
                    </div>
                    <p className="text-sm text-amber-400 font-bold mt-1">Head of Export Operations</p>
                    <p className="text-xs text-slate-400 font-medium flex items-center justify-center lg:justify-start gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Lagos, Lagos State, Nigeria 🇳🇬</span>
                    </p>
                  </div>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition shrink-0 flex items-center gap-2 text-xs font-bold"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified Exporter Badge</span>
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-slate-800 absolute -top-2 -left-3 -z-0 opacity-50 hidden sm:block" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10 italic">
                      &ldquo;Direct commitment to strict moisture control, container stuffing supervision at Lagos Port, and independent SGS/Bureau Veritas pre-shipment inspections.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. OUR FOREST-TO-PORT PROCESS
      ========================================== */}
      <section id="process" className="py-20 px-4 md:px-12 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Traceability
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Forest-To-Port Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Trees className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-amber-500">STEP 01</span>
              <h3 className="text-base font-bold text-white">Sustainable Harvesting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Carbonization of mature Ayin &amp; Hardwood trees in controlled kilns.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Filter className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-amber-500">STEP 02</span>
              <h3 className="text-base font-bold text-white">Processing &amp; Screening</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Double-sifting to eliminate dust and ensure lump size (&gt; 50mm).
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-400">
                <FlaskConical className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-amber-500">STEP 03</span>
              <h3 className="text-base font-bold text-white">Quality Control &amp; Lab Testing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lab checks for fixed carbon (&gt; 75%), volatile matter, and moisture.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Ship className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-amber-500">STEP 04</span>
              <h3 className="text-base font-bold text-white">Port Loading &amp; BL Issue</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fast container stuffing at Lagos/Apapa port with instant BL dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. SUSTAINABILITY & COMPLIANCE MATRIX
      ========================================== */}
      <section className="py-20 px-4 md:px-12 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Legal Assurance
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Eco-Conscious Carbonization &amp; Legal Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950/80 p-8 rounded-2xl border border-slate-800 space-y-3">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">FDF &amp; Ministry Approval</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full government-approved export documentation from Federal Department of Forestry and Ministry of Agriculture.
              </p>
            </div>

            <div className="bg-slate-950/80 p-8 rounded-2xl border border-slate-800 space-y-3">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Non-Dangerous Goods Certification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete MSDS and Self-Heating Test Certificates (IMDG Code) for smooth shipping lines approval.
              </p>
            </div>

            <div className="bg-slate-950/80 p-8 rounded-2xl border border-slate-800 space-y-3">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 w-fit">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Reforestation Commitment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ethical timber sourcing from controlled forestry zones, upholding sustainable wood harvesting standards without deforestation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. LABORATORY & QUALITY STANDARDS TABLE
      ========================================== */}
      <section className="py-20 px-4 md:px-12 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Lab Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Laboratory &amp; Quality Standards</h2>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950 border-b border-slate-800 text-amber-400 uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6 font-black">Parameter</th>
                    <th className="py-4 px-6 font-black">Export Specification Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-950/50 transition">
                    <td className="py-4 px-6 font-bold text-white">Wood Species</td>
                    <td className="py-4 px-6 text-amber-400 font-bold">Pure Ayin (Anogeissus leiocarpus) / Hardwood Mix</td>
                  </tr>
                  <tr className="hover:bg-slate-950/50 transition">
                    <td className="py-4 px-6 font-bold text-white">Fixed Carbon</td>
                    <td className="py-4 px-6 font-semibold">75% – 85% Min</td>
                  </tr>
                  <tr className="hover:bg-slate-950/50 transition">
                    <td className="py-4 px-6 font-bold text-white">Moisture Content</td>
                    <td className="py-4 px-6 font-semibold text-emerald-400">&lt; 8% Max</td>
                  </tr>
                  <tr className="hover:bg-slate-950/50 transition">
                    <td className="py-4 px-6 font-bold text-white">Ash Content</td>
                    <td className="py-4 px-6 font-semibold">&lt; 3%</td>
                  </tr>
                  <tr className="hover:bg-slate-950/50 transition">
                    <td className="py-4 px-6 font-bold text-white">Burning Time</td>
                    <td className="py-4 px-6 font-semibold">5 – 6+ Hours (Zero Spark / Smoke)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. GLOBAL SUPPLY LOGISTICS & SHIPPING TERMS
      ========================================== */}
      <section className="py-20 px-4 md:px-12 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Export Logistics
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Global Supply &amp; Shipping Terms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3">
              <Globe2 className="w-8 h-8 text-amber-400" />
              <h3 className="text-base font-bold text-white">Supported Shipping Terms</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                FOB (Lagos Port), CIF (Worldwide Destination Ports), and CFR terms tailored to your freight preference.
              </p>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3">
              <Ship className="w-8 h-8 text-amber-400" />
              <h3 className="text-base font-bold text-white">Container Loading Capacity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                40ft High Cube containers holding 20 – 22 Metric Tons, packed in durable 20kg–32kg PP woven bags or customized packaging.
              </p>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3">
              <CheckCircle2 className="w-8 h-8 text-amber-400" />
              <h3 className="text-base font-bold text-white">Transparent Payment Terms</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Irrevocable LC (Letter of Credit at sight) or flexible TT (Telegraphic Transfer) milestones for secure trade transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. CALL TO ACTION (CTA) BANNER
      ========================================== */}
      <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Secure Your Allocation
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Lock In Your Seasonal Charcoal Supply?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Request an official Proforma Invoice or schedule a direct video inspection from Lagos Port during container loading.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#rfq"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 py-4 px-8 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Request Proforma Invoice</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="/sgs-testing-report.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 py-4 px-8 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download SGS Report (PDF)</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}