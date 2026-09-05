'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Sparkles, Utensils, Zap, ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';

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

export default function Products() {
  return (
    <section id="products" className="relative bg-slate-950 text-slate-100 py-20 md:py-28 px-4 md:px-12 border-b border-slate-800/80 overflow-hidden">
      
      {/* BACKGROUND AMBIENT LIGHTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-amber-400 text-xs font-black tracking-widest uppercase bg-slate-900 border border-amber-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
            Export Product Line
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Export-Grade Charcoal Varieties
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Carefully selected, laboratory screened, and moisture-controlled in Nigeria for global container dispatch.
          </p>
        </div>

        {/* PRODUCTS CARDS GRID */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
  {products.map((prod) => {
    const Icon = prod.icon;
    return (
      <div
        key={prod.id}
        className="group relative bg-slate-950/90 rounded-3xl border border-slate-800/90 hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)] hover:-translate-y-2 backdrop-blur-xl"
      >
        {/* Top Border Glow Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

        <div>
          {/* HIGH-END GALLERY IMAGE FRAME (Height Increased to h-72) */}
          <div className="relative h-72 w-full overflow-hidden bg-slate-950">
            <Image
              src={prod.image}
              alt={prod.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
              priority={prod.id === 'ayin'}
            />
            
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-black/30" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20">
              <span className="bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/30 shadow-md">
                {prod.badge}
              </span>
              <div className="p-2 bg-slate-950/80 backdrop-blur-md rounded-full text-amber-400 border border-slate-700/80 shadow-md">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Floating Title Overlay on Image */}
            <div className="absolute bottom-3 left-3 right-3 z-20 space-y-0.5">
              <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors drop-shadow-md">
                {prod.title}
              </h3>
              <p className="text-[11px] text-amber-400 font-semibold drop-shadow">
                {prod.subtitle}
              </p>
            </div>
          </div>

          {/* STREAMLINED CLEAN BODY */}
          <div className="p-5 space-y-4">
            
            {/* Essential Specs Badges */}
            <div className="flex flex-wrap gap-2">
              {prod.specs.slice(0, 3).map((spec, i) => (
                <span 
                  key={i} 
                  className="text-[10px] font-medium text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1"
                >
                  <span className="text-slate-500">{spec.label}:</span>
                  <strong className="text-amber-400 font-bold">{spec.value}</strong>
                </span>
              ))}
            </div>

            {/* Application Tag */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/40 p-2 rounded-xl border border-slate-800/50">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate text-[11px]">
                Best for: <strong className="text-slate-200 font-bold">{prod.bestFor}</strong>
              </span>
            </div>

          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="p-5 pt-0">
          <a
            href="#rfq"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-amber-500/20 active:scale-95"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}