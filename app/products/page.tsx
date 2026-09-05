'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Flame, 
  Utensils, 
  Zap, 
  Sparkles, 
  ArrowDown, 
  ArrowUpRight, 
  Download, 
  Package, 
  Box, 
  Truck, 
  Video, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const products = [
  {
    id: 'ayin',
    title: 'Ayin Hardwood Charcoal',
    subtitle: 'Anogeissus leiocarpa',
    image: 'https://images.unsplash.com/photo-1697970684485-eea7cccfa61f?w=800&auto=format&fit=crop&q=80',
    icon: Flame,
    badge: 'High Heat / Ultra-Dense',
    desc: 'Dense Nigerian Ayin wood delivering intense heat output, extreme burn duration, and minimal ash residue.',
    specs: [
      { label: 'Burn Duration', value: '5 - 6+ Hours' },
      { label: 'Fixed Carbon', value: '≥ 80%' },
      { label: 'Lump Size', value: '40mm – 150mm' },
    ],
    bestFor: 'Commercial Grilling & Bulk Wholesalers',
  },
  {
    id: 'restaurant',
    title: 'Restaurant-Grade Lump',
    subtitle: 'Commercial Kitchen Grade',
    image: 'https://images.unsplash.com/photo-1665362739408-cc7adc24d663?w=800&auto=format&fit=crop&q=80',
    icon: Utensils,
    badge: 'Smoke & Spark Free',
    desc: 'Uniformly screened large lump pieces crafted for commercial grills, offering clean ignition and predictable airflow.',
    specs: [
      { label: 'Burn Duration', value: '4 - 5 Hours' },
      { label: 'Ash Content', value: '< 2.5%' },
      { label: 'Lump Size', value: '50mm – 150mm' },
    ],
    bestFor: 'Indoor Grills & Steak Houses',
  },
  {
    id: 'bbq',
    title: 'BBQ Lumpwood Charcoal',
    subtitle: 'Natural Hardwood Blend',
    image: 'https://images.unsplash.com/photo-1606728789023-ca3de19c1285?w=800&auto=format&fit=crop&q=80',
    icon: Zap,
    badge: 'Easy Ignition',
    desc: 'Fast-lighting, steady-heat lumpwood charcoal designed for clean handling with reduced charcoal dust.',
    specs: [
      { label: 'Ignition Time', value: '< 12 Mins' },
      { label: 'Moisture', value: '< 8%' },
      { label: 'Packaging', value: '3kg, 5kg, 10kg' },
    ],
    bestFor: 'Retail Brands, Supermarkets & BBQ',
  },
  {
    id: 'shisha',
    title: 'Shisha Coconut Charcoal',
    subtitle: 'Premium Hookah Cubes',
    image: 'https://images.unsplash.com/photo-1774881191514-200d159a6589?w=800&auto=format&fit=crop&q=80',
    icon: Sparkles,
    badge: 'Pure White Ash',
    desc: 'High-density coconut shell cubes producing zero odor, no chemical taste, and pristine white ash for lounge performance.',
    specs: [
      { label: 'Ash Color', value: 'Pure White' },
      { label: 'Calorific Value', value: '> 7500 kcal' },
      { label: 'Ash Content', value: '< 2.0%' },
    ],
    bestFor: 'Shisha Lounges & Hookah Retailers',
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.id === activeTab);

  return (
    <main className="bg-slate-950 text-white min-h-screen selection:bg-amber-500 selection:text-slate-950">
      
      {/* ==========================================
          SECTION 1: HERO SECTION
      ========================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-start px-6 md:px-16 overflow-hidden border-b border-slate-800/80 pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1697970684485-eea7cccfa61f?w=1600&auto=format&fit=crop&q=80"
            alt="Export Quality Charcoal"
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
              OUR EXPORT CATALOG
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
            PRODUCTS<span className="text-amber-500">.</span>
          </h1>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 max-w-2xl leading-tight">
              Premium Nigerian Ayin Hardwood, Shisha Coconut, &amp; BBQ Charcoal
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Lab-tested bulk shipments prepared for seamless FOB &amp; CIF international container delivery.
            </p>
          </div>

          <div>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Explore Catalog</span>
              <ArrowDown className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: CATEGORY FILTER TABS
      ========================================== */}
      <section id="catalog" className="py-12 px-6 md:px-16 border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Select Category
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Export Grade Varieties</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800/80 shadow-inner">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              All Varieties
            </button>
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                  activeTab === p.id
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {p.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: PRODUCT CATALOG (HOME FLOW CARDS)
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((prod) => {
            const IconComponent = prod.icon;
            return (
              <div
                key={prod.id}
                className="group relative bg-slate-900/60 rounded-3xl border border-slate-800/80 hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)] hover:-translate-y-2 backdrop-blur-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                <div>
                  {/* Card Header & Image */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/40" />

                    {/* Badge & Icon Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                      <span className="bg-slate-950/90 backdrop-blur-md text-amber-400 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/30 shadow-md">
                        {prod.badge}
                      </span>
                      <div className="p-2 bg-slate-950/90 backdrop-blur-md rounded-full text-amber-400 border border-slate-700/80 shadow-md">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-20">
                      <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors drop-shadow-md">
                        {prod.title}
                      </h3>
                      <p className="text-xs text-amber-400 font-bold drop-shadow">
                        {prod.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-5">
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {prod.desc}
                    </p>

                    {/* Specs Grid */}
                    <div className="space-y-2 border-t border-b border-slate-800/80 py-3">
                      {prod.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-medium">{spec.label}</span>
                          <span className="text-amber-400 font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best For Tag */}
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-[11px] font-medium leading-tight">
                        <strong className="text-slate-200">Ideal:</strong> {prod.bestFor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <a
                    href="#rfq"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-amber-500/20 active:scale-95"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          SECTION 4: COMPARATIVE MATRIX TABLE
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Technical Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Export Specification Matrix</h2>
          </div>

          <div className="bg-slate-950/90 border border-slate-800/90 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-amber-400 uppercase tracking-wider">
                  <tr>
                    <th className="py-5 px-6 font-black">Variety</th>
                    <th className="py-5 px-6 font-black">Grade / Type</th>
                    <th className="py-5 px-6 font-black">Key Spec</th>
                    <th className="py-5 px-6 font-black">Primary Application</th>
                    <th className="py-5 px-6 font-black">Container Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {products.map((p) => {
                    const IconComp = p.icon;
                    return (
                      <tr key={p.id} className="hover:bg-slate-900/50 transition-colors">
                        <td className="py-5 px-6 font-bold text-white flex items-center gap-3">
                          <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span>{p.title}</span>
                        </td>
                        <td className="py-5 px-6 text-slate-400">{p.subtitle}</td>
                        <td className="py-5 px-6 text-amber-400 font-bold">
                          {p.specs[0].label}: {p.specs[0].value}
                        </td>
                        <td className="py-5 px-6 font-medium text-slate-300">{p.bestFor}</td>
                        <td className="py-5 px-6 font-semibold text-emerald-400">20 – 22 MT (40ft HC)</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: PACKAGING & STUFFING SOLUTIONS
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Custom Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Packaging &amp; Container Stuffing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-4 hover:border-amber-500/40 transition-all">
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 w-fit">
                <Package className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white">Heavy-Duty PP Woven Bags</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Available in 20kg, 25kg, and 32kg poly-laminated woven bags built to endure rough sea freight handling and protect against ambient humidity.
              </p>
            </div>

            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-4 hover:border-amber-500/40 transition-all">
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 w-fit">
                <Box className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white">Private Label Retail Packaging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom kraft paper bags and printed cartons (3kg, 5kg, 10kg) with full importer branding, barcodes, and regulatory warning labels.
              </p>
            </div>

            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-4 hover:border-amber-500/40 transition-all">
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 w-fit">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white">Max-Volume Container Loading</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Expert hand-stuffing options allowing up to 22 Metric Tons in 40ft HC containers, or palletized shrink-wrapped loading upon buyer request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: COURIER SAMPLE & INSPECTION
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800/90 p-8 sm:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-2xl backdrop-blur-xl">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-500/20">
              Quality Assurance
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Test Before You Order Bulk Containers</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We eliminate buyer risk. Order a 5KG express courier sample batch or join live video loading streams directly from Lagos Port.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">5KG Express Courier Sample</h4>
                <p className="text-[11px] text-slate-400">Air freighted via DHL/FedEx with full lab certificate</p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Port Live-Stream Inspection</h4>
                <p className="text-[11px] text-slate-400">Direct container stuffing video feed at Lagos Port</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: BOTTOM CALL TO ACTION
      ========================================== */}
      <section id="rfq" className="py-20 px-6 md:px-16 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 sm:p-14 rounded-3xl text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Instant B2B Quote
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Need Custom Packaging or Bulk Container Volume?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Get an instant FOB Lagos or CIF destination port quotation with direct shipping timeline estimates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 py-4 px-8 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Get Proforma Invoice</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="/products-spec-sheet.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 py-4 px-8 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Product Specs (PDF)</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}