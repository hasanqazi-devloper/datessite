'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  Ship, 
  Globe2, 
  FileCheck2, 
  ShieldCheck, 
  Clock, 
  Anchor, 
  Container, 
  CheckCircle2, 
  ArrowUpRight, 
  Download, 
  Video, 
  Scale, 
  FileText 
} from 'lucide-react';

const shippingRoutes = [
  {
    region: 'Middle East',
    ports: 'Jebel Ali (UAE), Jeddah (KSA), Hamad (Qatar), Sohar (Oman)',
    transit: '18 – 24 Days',
    frequency: 'Weekly Sailings',
  },
  {
    region: 'Europe',
    ports: 'Rotterdam (NL), Antwerp (BE), Hamburg (DE), Piraeus (GR)',
    transit: '20 – 26 Days',
    frequency: 'Bi-Weekly Sailings',
  },
  {
    region: 'Asia-Pacific',
    ports: 'Shanghai (CN), Ningbo (CN), Port Klang (MY), Chittagong (BD)',
    transit: '28 – 35 Days',
    frequency: 'Weekly Sailings',
  },
  {
    region: 'Americas',
    ports: 'Houston (US), Newark (US), Santos (BR), Montreal (CA)',
    transit: '25 – 32 Days',
    frequency: 'Bi-Weekly Sailings',
  },
];

const exportDocs = [
  {
    title: 'Bill of Lading (B/L)',
    desc: 'Clean On-Board Ocean Bill of Lading dispatched instantly via DHL/FedEx after vessel departure.',
  },
  {
    title: 'NDG & MSDS Certification',
    desc: 'Non-Dangerous Goods (NDG) certificate and Material Safety Data Sheet for hassle-free shipping line acceptance.',
  },
  {
    title: 'Phytosanitary Certificate',
    desc: 'Official certificate issued by Nigeria Agricultural Quarantine Service (NAQS) ensuring pest-free treatment.',
  },
  {
    title: 'Certificate of Origin',
    desc: 'Approved by Lagos Chamber of Commerce & Industry and Federal Ministry of Trade & Investment.',
  },
  {
    title: 'SGS / Bureau Veritas Report',
    desc: 'Independent third-party inspection certificate verifying total weight, lump size, and moisture content (< 8%).',
  },
  {
    title: 'Commercial Invoice & Packing List',
    desc: 'Fully compliant international trade documentation detailing HS Code (4402.90) and container breakdown.',
  },
];

export default function ShippingPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen selection:bg-amber-500 selection:text-slate-950">
      
      {/* ==========================================
          SECTION 1: HERO SECTION
      ========================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-start px-6 md:px-16 overflow-hidden border-b border-slate-800/80 pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&auto=format&fit=crop&q=80"
            alt="Global Container Shipping"
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
              GLOBAL FREIGHT &amp; LOGISTICS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
            SHIPPING<span className="text-amber-500">.</span>
          </h1>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 max-w-2xl leading-tight">
              Direct Port-to-Port Charcoal Logistics From Lagos
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Seamless containerized freight from Apapa &amp; Tin Can Ports to major destination hubs worldwide.
            </p>
          </div>

          <div>
            <a
              href="#transit-times"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Check Transit Times</span>
              <ArrowDown className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: SUPPORTED INCOTERMS
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Trade Flexibility
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Supported International Trade Terms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950/90 p-8 rounded-3xl border border-slate-800/80 space-y-4 hover:border-amber-500/40 transition-all shadow-xl">
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 w-fit">
                <Anchor className="w-7 h-7" />
              </div>
              <span className="text-xs font-black text-amber-500 uppercase tracking-widest">FOB — Free On Board</span>
              <h3 className="text-xl font-bold text-white">Lagos Port (Apapa / Tin Can)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We manage factory packaging, inland trucking, Lagos port handling, customs clearance, and loading onto your nominated vessel.
              </p>
            </div>

            <div className="bg-slate-950/90 p-8 rounded-3xl border border-slate-800/80 space-y-4 hover:border-amber-500/40 transition-all shadow-xl">
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 w-fit">
                <Ship className="w-7 h-7" />
              </div>
              <span className="text-xs font-black text-amber-500 uppercase tracking-widest">CIF — Cost, Insurance &amp; Freight</span>
              <h3 className="text-xl font-bold text-white">Destination Port Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full-service shipping covering ocean freight charges and 110% marine insurance coverage directly to your preferred discharge port.
              </p>
            </div>

            <div className="bg-slate-950/90 p-8 rounded-3xl border border-slate-800/80 space-y-4 hover:border-amber-500/40 transition-all shadow-xl">
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 w-fit">
                <Globe2 className="w-7 h-7" />
              </div>
              <span className="text-xs font-black text-amber-500 uppercase tracking-widest">CFR — Cost &amp; Freight</span>
              <h3 className="text-xl font-bold text-white">Freight Pre-Paid Option</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ideal for buyers with their own marine insurance policies. We handle ocean freight transit up to your destination discharge terminal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: CONTAINER CAPACITY & STUFFING
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Payload &amp; Volume
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">40ft High Cube Container Specs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3">
                  <Container className="w-6 h-6 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Container Payload Capacity</h3>
                </div>
                <p className="text-2xl font-black text-amber-400">20.0 – 22.0 Metric Tons</p>
                <p className="text-xs text-slate-400">Maximum legal gross weight per 40ft High Cube container load.</p>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Packaging Breakdown</h3>
                </div>
                <p className="text-2xl font-black text-emerald-400">1,000 – 1,100 Bags</p>
                <p className="text-xs text-slate-400">Based on standard 20kg PP woven bags stuffed floor-to-ceiling.</p>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Stuffing Efficiency</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Manual hand-stacking is performed under strict supervision to eliminate air gaps, maximize weight capacity, and protect bags from tearing during transit.
                </p>
              </div>
            </div>

            <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80"
                alt="Container Loading Supervision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/90 backdrop-blur-md rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Container Loading</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  High-security bolt seal application with documented serial numbers before port entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: MANDATORY EXPORT DOCUMENTATION
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              100% Legal Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Mandatory Export Documentation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportDocs.map((doc, idx) => (
              <div key={idx} className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 space-y-3 hover:border-amber-500/40 transition-all">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 w-fit">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{doc.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: TRANSIT TIMES & MAJOR PORTS TABLE
      ========================================== */}
      <section id="transit-times" className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Ocean Freight Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Estimated Transit Times By Region</h2>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950 border-b border-slate-800 text-amber-400 uppercase tracking-wider">
                  <tr>
                    <th className="py-5 px-6 font-black">Destination Region</th>
                    <th className="py-5 px-6 font-black">Major Discharge Ports</th>
                    <th className="py-5 px-6 font-black">Est. Transit Time</th>
                    <th className="py-5 px-6 font-black">Vessel Departure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {shippingRoutes.map((route, i) => (
                    <tr key={i} className="hover:bg-slate-950/50 transition-colors">
                      <td className="py-5 px-6 font-bold text-white flex items-center gap-2">
                        <Globe2 className="w-4 h-4 text-amber-400" />
                        <span>{route.region}</span>
                      </td>
                      <td className="py-5 px-6 text-slate-300 max-w-xs">{route.ports}</td>
                      <td className="py-5 px-6 text-emerald-400 font-bold">{route.transit}</td>
                      <td className="py-5 px-6 font-semibold text-slate-400">{route.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: PORT LIVE INSPECTION
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800/90 p-8 sm:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-2xl backdrop-blur-xl">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-500/20">
              On-Ground Transparency
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Live Port Stuffing &amp; Moisture Check</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We provide video feeds and high-resolution photo logs of moisture testing and container stuffing at Apapa Port prior to seal placement.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Real-Time Loading Stream</h4>
                <p className="text-[11px] text-slate-400">Direct WhatsApp video verification during loading</p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Bolt Seal Verification</h4>
                <p className="text-[11px] text-slate-400">Tamper-proof container seal logged in B/L</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: BOTTOM CALL TO ACTION
      ========================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 sm:p-14 rounded-3xl text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Book Container Capacity
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Planning Your Next Charcoal Container Shipment?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Request an instant CIF/FOB proforma invoice with locked-in ocean freight rates for your destination port.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 py-4 px-8 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Request CIF / Freight Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="/sample-msds.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 py-4 px-8 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Sample B/L &amp; MSDS</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}