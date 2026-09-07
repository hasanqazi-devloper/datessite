'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, Sparkles, Sun, Flame, ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';

const products = [
  {
    id: 'marjoram',
    title: 'Dried Marjoram',
    subtitle: 'Origanum majorana',
    image: 'https://images.unsplash.com/photo-1720745467792-32d556860ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERyaWVkJTIwTWFyam9yYW18ZW58MHx8MHx8fDA%3D',
    icon: Leaf,
    badge: 'Flagship Export Item',
    desc: 'Naturally sun-dried Egyptian Marjoram from Al Minya with rich volatile oil retention and intense aroma.',
    specs: [
      { label: 'Purity', value: '≥ 99%' },
      { label: 'Moisture', value: '< 10%' },
      { label: 'Processing', value: 'Sun-Dried' },
    ],
    bestFor: 'Pharma, Food Importers & Spice Blenders',
  },
  {
    id: 'chamomile',
    title: 'Egyptian Chamomile',
    subtitle: 'Matricaria chamomilla',
    image: 'https://images.unsplash.com/photo-1601761707463-c9d47c48bb1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhbW9taWxlJTIwJTJGJTIwZHJpZWQlMjBjaGFtb21pbGUlMjBmbG93ZXJzfGVufDB8fDB8fHww',
    icon: Sparkles,
    badge: 'High Essential Oil',
    desc: 'Whole dried chamomile flower heads featuring natural golden petals and high calming active compounds.',
    specs: [
      { label: 'Purity', value: '≥ 98%' },
      { label: 'Grade', value: 'Whole Flowers' },
      { label: 'Moisture', value: '< 11%' },
    ],
    bestFor: 'Herbal Tea Brands & Wellness Industry',
  },
  {
    id: 'basil',
    title: 'Sweet Basil Leaves',
    subtitle: 'Ocimum basilicum',
    image: 'https://plus.unsplash.com/premium_photo-1673264299391-8ca6b2b1a667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpZWQlMjBiYXNpbCUyMCUyRiUyMGJhc2lsJTIwbGVhdmVzfGVufDB8fDB8fHww',
    icon: Sun,
    badge: 'Pesticide Free',
    desc: 'Vibrant green sun-dried basil leaves, double-sifted for minimal dust and foreign organic matter.',
    specs: [
      { label: 'Purity', value: '≥ 99%' },
      { label: 'Color', value: 'Natural Green' },
      { label: 'Admixture', value: '< 0.5%' },
    ],
    bestFor: 'Culinary Packaging & Overseas Importers',
  },
  {
    id: 'mint',
    title: 'Spearmint / Peppermint',
    subtitle: 'Mentha spicata',
    image: 'https://images.unsplash.com/photo-1561407958-54aa9fa49a21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpZWQlMjBtaW50fGVufDB8fDB8fHww',
    icon: Flame,
    badge: 'High Aroma Cut',
    desc: 'Coarse cut dried mint leaves packed with natural menthol flavor and fresh herbal scent.',
    specs: [
      { label: 'Purity', value: '≥ 98.5%' },
      { label: 'Cut Size', value: 'Crushed / Leaves' },
      { label: 'Moisture', value: '< 10%' },
    ],
    bestFor: 'Beverage Brands & Herb Distributors',
  },
];

export default function Products() {
  return (
    <section id="catalog" className="relative bg-[#0B0F0D] text-slate-100 py-20 md:py-28 px-4 md:px-12 border-b border-[#22332B] overflow-hidden">
      
      {/* BACKGROUND AMBIENT HERBAL LIGHTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
            <Leaf className="w-3.5 h-3.5 text-emerald-400 fill-current" />
            Product Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Export-Grade Herbal Varieties
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Carefully cultivated, hand-harvested, and naturally sun-dried in Al Minya, Egypt for global B2B container dispatch.
          </p>
        </div>

        {/* PRODUCTS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="group relative bg-[#141C18]/90 rounded-3xl border border-[#22332B] hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:-translate-y-2 backdrop-blur-xl"
              >
                {/* Top Border Glow Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                <div>
                  {/* GALLERY IMAGE FRAME */}
                  <div className="relative h-72 w-full overflow-hidden bg-[#0B0F0D]">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                      priority={prod.id === 'marjoram'}
                    />
                    
                    {/* Cinematic Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-[#0B0F0D]/20 to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20">
                      <span className="bg-[#0B0F0D]/80 backdrop-blur-md text-emerald-400 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-500/30 shadow-md">
                        {prod.badge}
                      </span>
                      <div className="p-2 bg-[#0B0F0D]/80 backdrop-blur-md rounded-full text-emerald-400 border border-[#22332B] shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Floating Title Overlay on Image */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 space-y-0.5">
                      <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors drop-shadow-md">
                        {prod.title}
                      </h3>
                      <p className="text-[11px] text-amber-400 font-semibold drop-shadow">
                        {prod.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* BODY CONTENT */}
                  <div className="p-5 space-y-4">
                    
                    {/* Essential Specs Badges */}
                    <div className="flex flex-wrap gap-2">
                      {prod.specs.slice(0, 3).map((spec, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-medium text-slate-300 bg-[#0B0F0D]/90 border border-[#22332B] px-2.5 py-1 rounded-lg flex items-center gap-1"
                        >
                          <span className="text-slate-500">{spec.label}:</span>
                          <strong className="text-emerald-400 font-bold">{spec.value}</strong>
                        </span>
                      ))}
                    </div>

                    {/* Application Tag */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 bg-[#0B0F0D]/40 p-2 rounded-xl border border-[#22332B]">
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
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-emerald-500/20 active:scale-95"
                  >
                    <span>Request Sample / Quote</span>
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