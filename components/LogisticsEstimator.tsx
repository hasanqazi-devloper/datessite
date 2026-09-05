'use client';

import React, { useState } from 'react';
import { 
  FlaskConical, 
  ShieldCheck, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Layers, 
  Zap, 
  Thermometer, 
  Clock, 
  Scale,
  Award
} from 'lucide-react';

const productsData = [
  {
    id: 'ayin',
    name: 'Ayin Hardwood',
    tagline: 'Premium Export Standard • High Density',
    badge: 'Most Popular',
    specs: [
      { label: 'Fixed Carbon', value: '≥ 80%', icon: Flame, status: 'High Purity' },
      { label: 'Moisture Content', value: '< 8%', icon: Thermometer, status: 'Kiln Dried' },
      { label: 'Ash Residual', value: '< 3.0%', icon: Layers, status: 'White Ash' },
      { label: 'Burn Duration', value: '5 - 6+ Hrs', icon: Clock, status: 'Extended Thermal' },
      { label: 'Calorific Output', value: '> 7,800 kcal', icon: Zap, status: 'Maximum Heat' },
      { label: '40ft HC Capacity', value: '20 Tons', icon: Scale, status: 'Max Volume' },
    ],
    highlight: 'Zero Sparking, Odorless, Double-screened for ZERO dust particles.'
  },
  {
    id: 'restaurant',
    name: 'Restaurant Grade',
    tagline: 'Heavy Commercial Charcoal Grills',
    badge: 'High Heat',
    specs: [
      { label: 'Fixed Carbon', value: '75% - 80%', icon: Flame, status: 'Clean Burn' },
      { label: 'Moisture Content', value: '< 8%', icon: Thermometer, status: 'Low Smoke' },
      { label: 'Ash Residual', value: '< 2.5%', icon: Layers, status: 'Easy Cleanup' },
      { label: 'Burn Duration', value: '4 - 5 Hrs', icon: Clock, status: 'Consistent Heat' },
      { label: 'Calorific Output', value: '> 7,500 kcal', icon: Zap, status: 'Sustained' },
      { label: '40ft HC Capacity', value: '18 Tons', icon: Scale, status: 'Standard Loading' },
    ],
    highlight: 'Ideal for open-kitchen BBQ and rotisserie setups with minimal ash buildup.'
  },
  {
    id: 'shisha',
    name: 'Shisha Coconut',
    tagline: 'Cube / Briquette Format • Zero Odor',
    badge: 'Ultra Pure',
    specs: [
      { label: 'Fixed Carbon', value: '≥ 82%', icon: Flame, status: 'Smokeless' },
      { label: 'Moisture Content', value: '< 5%', icon: Thermometer, status: 'Ultra Dry' },
      { label: 'Ash Residual', value: '< 2.0%', icon: Layers, status: 'Pure White' },
      { label: 'Burn Duration', value: '2.5 Hrs', icon: Clock, status: 'Steady Glow' },
      { label: 'Calorific Output', value: '> 7,600 kcal', icon: Zap, status: 'Clean Ignition' },
      { label: '40ft HC Capacity', value: '24 Tons', icon: Scale, status: 'Palletized' },
    ],
    highlight: 'Strictly zero chemical additives. Pure natural coconut shell binding.'
  },
  {
    id: 'bbq',
    name: 'BBQ Lumpwood',
    tagline: 'Retail & Catering Standard',
    badge: 'Fast Ignition',
    specs: [
      { label: 'Fixed Carbon', value: '72% - 78%', icon: Flame, status: 'Quick Light' },
      { label: 'Moisture Content', value: '< 10%', icon: Thermometer, status: 'Optimal' },
      { label: 'Ash Residual', value: '< 4.0%', icon: Layers, status: 'Standard' },
      { label: 'Burn Duration', value: '3 - 4 Hrs', icon: Clock, status: 'Even Burn' },
      { label: 'Calorific Output', value: '> 7,200 kcal', icon: Zap, status: 'High Temp' },
      { label: '40ft HC Capacity', value: '18 Tons', icon: Scale, status: 'PP Bags' },
    ],
    highlight: 'Perfect balance between fast lighting speed and high flame output.'
  }
];

export default function TechSpecs() {
  const [activeProduct, setActiveProduct] = useState(productsData[0]);

  return (
    <section id="specs" className="relative bg-slate-950 text-slate-100 py-20 md:py-28 px-4 md:px-12 border-b border-slate-800/80 overflow-hidden">
      
      {/* Dynamic Ambient Glow Behind Component */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800/80 pb-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-amber-400 text-xs font-black tracking-widest uppercase bg-slate-900 border border-amber-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
              <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
              SGS &amp; Bureau Veritas Verified
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Export Grade Specification Matrix
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-normal">
              Select a charcoal category below to inspect lab-tested physical &amp; chemical properties.
            </p>
          </div>

          {/* VERIFICATION BADGE */}
          <div className="flex items-center gap-4 shrink-0 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-800 shadow-2xl">
            <div className="p-3 bg-emerald-950/80 rounded-xl text-emerald-400 border border-emerald-500/30 shadow-inner">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm font-black text-white flex items-center gap-1.5">
                <span>100% Pre-Shipment Tested</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-xs text-slate-400 block mt-0.5">MSDS, Fumigation &amp; Phytosanitary Included</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE SELECTOR TABS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {productsData.map((prod) => {
            const isActive = activeProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProduct(prod)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 relative border flex flex-col justify-between group ${
                  isActive 
                    ? 'bg-slate-900 border-amber-500/80 shadow-[0_10px_30px_rgba(217,119,6,0.15)] scale-[1.02] z-10' 
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border ${
                      isActive 
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      {prod.badge}
                    </span>
                    {isActive && <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />}
                  </div>
                  <h3 className={`text-base font-black tracking-wide ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {prod.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-3 line-clamp-1 font-medium">
                  {prod.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* ACTIVE PRODUCT DISPLAY CARD */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-xl">
          
          {/* Active Header Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                <Award className="w-4 h-4" />
                Active Specification Inspection
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                {activeProduct.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
                {activeProduct.tagline}
              </p>
            </div>

            <a
              href="#rfq"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 text-xs font-black px-6 py-3.5 rounded-xl shadow-lg transition-all shrink-0 uppercase tracking-wider transform active:scale-95"
            >
              <FileText className="w-4 h-4 stroke-[2.5]" />
              <span>Download Official {activeProduct.name} COA</span>
            </a>
          </div>

          {/* 6 KEY METRICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activeProduct.specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 space-y-3 relative group hover:border-amber-500/50 transition-all duration-300 shadow-inner"
                >
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                    <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {item.value}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-md inline-block">
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* HIGHLIGHT FOOTER */}
          <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex items-center gap-3 text-xs md:text-sm text-slate-300">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span><strong className="text-white font-bold">Quality Guarantee:</strong> {activeProduct.highlight}</span>
          </div>

        </div>

      </div>
    </section>
  );
}