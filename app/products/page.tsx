'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  Leaf, 
  ShieldCheck, 
  Filter, 
  Download, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles,
  Check,
  Package,
  Layers
} from 'lucide-react';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    {
      id: 'marjoram',
      name: 'Egyptian Dried Marjoram',
      botanicalName: 'Origanum majorana',
      category: 'Leaves & Herbs',
      purity: '≥ 99% Pure Leaves',
      moisture: '< 8%',
      oilContent: '1.2% - 1.5%',
      moq: '5 Metric Tons (1x20ft FCL)',
      packaging: '20kg / 25kg PP Woven Bags',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80',
      description: 'Sun-dried Al Minya Marjoram with high essential oil content, air-sifted for zero stems and dust.',
      tags: ['Top Exporter Choice', 'EU Standard']
    },
    {
      id: 'chamomile',
      name: 'Dried Chamomile Flowers',
      botanicalName: 'Matricaria chamomilla',
      category: 'Flowers',
      purity: '≥ 98% Whole Flowers',
      moisture: '< 9%',
      oilContent: '0.8% - 1.1%',
      moq: '3 Metric Tons',
      packaging: '15kg Carton Boxes / PP Bags',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80',
      description: 'Bright golden chamomile flower heads harvested from fertile Egyptian soil, ideal for herbal tea blends.',
      tags: ['Tea Grade', 'High Aroma']
    },
    {
      id: 'basil',
      name: 'Egyptian Basil Leaves',
      botanicalName: 'Ocimum basilicum',
      category: 'Leaves & Herbs',
      purity: '≥ 99% Crushed / Whole',
      moisture: '< 7.5%',
      oilContent: '1.0% - 1.4%',
      moq: '5 Metric Tons',
      packaging: '20kg Kraft Paper / PP Bags',
      image: 'https://plus.unsplash.com/premium_photo-1673264299391-8ca6b2b1a667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpZWQlMjBiYXNpbCUyMCUyRiUyMGJhc2lsJTIwbGVhdmVzfGVufDB8fDB8fHww',
      description: 'Aromatic sweet dried basil leaves processed under strict temperature-controlled solar drying.',
      tags: ['Culinary Grade', 'Lab Certified']
    },
    {
      id: 'spearmint',
      name: 'Dried Spearmint & Peppermint',
      botanicalName: 'Mentha spicata / piperita',
      category: 'Leaves & Herbs',
      purity: '≥ 98.5%',
      moisture: '< 8%',
      oilContent: '1.5% - 2.0%',
      moq: '4 Metric Tons',
      packaging: '20kg PP Bags with Liner',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80',
      description: 'Intense menthol fragrance mint leaves sifted for tea bag cut and fine culinary applications.',
      tags: ['High Essential Oil']
    },
    {
      id: 'coriander',
      name: 'Whole Coriander Seeds',
      botanicalName: 'Coriandrum sativum',
      category: 'Seeds & Spices',
      purity: '≥ 99% Clean Whole',
      moisture: '< 9%',
      oilContent: '0.5% - 0.8%',
      moq: '10 Metric Tons',
      packaging: '25kg / 50kg PP Bags',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80',
      description: 'Golden yellow whole coriander seeds machine-cleaned for spice processors and extraction facilities.',
      tags: ['Bulk Export', 'Clean Machine Grade']
    },
    {
      id: 'hibiscus',
      name: 'Hibiscus Flowers (Karkadeh)',
      botanicalName: 'Hibiscus sabdariffa',
      category: 'Flowers',
      purity: '≥ 98% Whole Calyces',
      moisture: '< 10%',
      oilContent: 'Natural Organic Acids',
      moq: '5 Metric Tons',
      packaging: '25kg Compressed Bales / Bags',
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80',
      description: 'Deep crimson Egyptian hibiscus calyces prized for rich color extraction and beverage manufacturing.',
      tags: ['Deep Red Color', 'Beverage Ready']
    }
  ];

  const categories = ['All', 'Leaves & Herbs', 'Flowers', 'Seeds & Spices'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#0B0F0D] text-[#E2ECE6] min-h-screen selection:bg-emerald-500 selection:text-slate-950">

      {/* 1. HERO SECTION (PRODUCT CATALOGUE) */}
      <section className="relative bg-[#0B0F0D] text-white overflow-hidden py-28 md:py-36 border-b border-[#22332B]">
        
        {/* Background Field Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Egyptian Spice Sourcing"
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
              <span>EXPORT CATALOGUE</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-white">OUR </span>
              <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">PRODUCTS.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-100 tracking-tight leading-tight">
              Export-Grade Egyptian Herbs, Botanicals &amp; Seeds
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              100% naturally solar-dried, lab-inspected, and air-sifted for bulk global distribution straight from Al Minya farms.
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transform active:scale-95 group"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER & CATALOGUE GRID */}
      <section id="catalog" className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#22332B] pb-6">
            <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest">
              <Filter className="w-4 h-4" />
              <span>Filter Category:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                      : 'bg-[#18231E] text-slate-300 border border-[#22332B] hover:border-emerald-500/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTS DISPLAY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-[#18231E] border border-[#22332B] hover:border-emerald-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* IMAGE CONTAINER */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#121A16]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18231E] via-transparent to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="bg-[#141C18]/90 border border-emerald-500/30 text-emerald-400 text-[10px] font-black px-2.5 py-1 rounded-full uppercase backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase block mb-1">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-black text-white tracking-tight leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs italic text-slate-400 font-serif mt-0.5">
                        {product.botanicalName}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* KEY SPECS LIST */}
                    <div className="space-y-2 pt-2 border-t border-[#22332B]">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Purity Grade:</span>
                        <span className="font-bold text-emerald-400">{product.purity}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Moisture Level:</span>
                        <span className="font-bold text-slate-200">{product.moisture}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Volatile Oil:</span>
                        <span className="font-bold text-amber-400">{product.oilContent}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Min. Order (MOQ):</span>
                        <span className="font-bold text-slate-200">{product.moq}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <div className="p-6 pt-0">
                  <a
                    href="#rfq"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#141C18] hover:bg-emerald-500 hover:text-slate-950 border border-[#22332B] hover:border-emerald-500 text-slate-200 font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300"
                  >
                    <span>Request FOB/CIF Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. QUALITY & PACKAGING SPECIFICATIONS */}
      <section className="py-20 md:py-28 bg-[#0B0F0D] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
              EXPORT STANDARDS
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Custom Bulk Packaging &amp; Processing
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              We process product cuts based on buyer specifications—ranging from whole leaves and seeds to TBC (Tea Bag Cut) and powder grades.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-[#121A16] border border-[#22332B] p-4 rounded-2xl">
                <Package className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Protective Export Lining</h4>
                  <p className="text-xs text-slate-400">20kg / 25kg Polypropylene (PP) woven bags with polyethylene moisture barriers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#121A16] border border-[#22332B] p-4 rounded-2xl">
                <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Custom Cuts &amp; Sifting</h4>
                  <p className="text-xs text-slate-400">Available in Whole Leaf, Coarse Crushed, TBC (0.5mm - 2mm), and Powder options.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#121A16] border border-[#22332B] p-8 rounded-3xl space-y-6 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Batch Lab Compliance</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Every export shipment is issued a Certificate of Analysis (COA) detailing moisture percentage, volatile oil content, and phytosanitary purity.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION (RFQ SECTION) */}
      <section id="rfq" className="py-24 md:py-32 bg-[#0B0F0D] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            DIRECT WHOLESALE QUOTE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Request Product Samples &amp; Container Pricing
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Specify your required tonnage, product cut, and destination port for an immediate FOB or CIF quote.
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