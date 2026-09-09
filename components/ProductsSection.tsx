'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle, Package, ThermometerSnowflake, Sparkles, Scale, Award } from 'lucide-react';

const products = [
  {
    id: 'mazafati',
    title: 'Mazafati Dates (بم مضافتی)',
    subtitle: 'Fresh Grade A • Fresh Date',
    image: 'https://images.pexels.com/photos/17877978/pexels-photo-17877978.jpeg?_gl=1*vn4j6t*_ga*MTk1ODAyMTQxOS4xNzg4OTY1MjY4*_ga_8JE65Q40S6*czE3ODg5NjUyNjgkbzEkZzEkdDE3ODg5NjUzNDAkajU5JGwwJGgw',
    icon: ThermometerSnowflake,
    badge: 'Flagship Export Item',
    desc: 'Soft, dark-black fresh dates harvested directly from Bam & Jiroft groves. Cold-storage maintained.',
    specs: [
      { label: 'Moisture', value: '18% – 22%' },
      { label: 'Packaging', value: '5kg Bulk / Shrink' },
      { label: 'Cold Storage', value: '0°C to 5°C' },
    ],
    bestFor: 'India, UAE, Russia, & Pakistan Wholesale Markets',
  },
  {
    id: 'piarom',
    title: 'Piarom Dates (پیارم)',
    subtitle: 'Semi-Dry • Chocolate Date',
    image: 'https://images.pexels.com/photos/31717524/pexels-photo-31717524.jpeg?_gl=1*q031ou*_ga*MTk1ODAyMTQxOS4xNzg4OTY1MjY4*_ga_8JE65Q40S6*czE3ODg5NjUyNjgkbzEkZzEkdDE3ODg5NjUyODYkajQyJGwwJGgw',
    icon: Sparkles,
    badge: 'Luxury Premium Grade',
    desc: 'Slim, dark brown semi-dry dates with paper-thin skin. Renowned globally for high natural fructose.',
    specs: [
      { label: 'Moisture', value: '< 15%' },
      { label: 'Grade', value: 'Super / Jumbo' },
      { label: 'Shelf Life', value: '18 Months' },
    ],
    bestFor: 'European Gourmet Retailers & GCC Markets',
  },
  {
    id: 'zahedi',
    title: 'Zahedi Dates (زاهدی)',
    subtitle: 'Dry Date • Golden Oval',
    image: 'https://images.pexels.com/photos/5155702/pexels-photo-5155702.jpeg?_gl=1*15kyy1u*_ga*MTk1ODAyMTQxOS4xNzg4OTY1MjY4*_ga_8JE65Q40S6*czE3ODg5NjUyNjgkbzEkZzEkdDE3ODg5NjUzOTAkajkkbDAkaDA.',
    icon: Scale,
    badge: 'High Industrial Demand',
    desc: 'Hard, golden-yellow oval dates with low moisture. Exceptional shelf life and effortless transport.',
    specs: [
      { label: 'Moisture', value: '< 12%' },
      { label: 'Type', value: 'Dry Grade A' },
      { label: 'Packaging', value: '10kg / 25kg Bags' },
    ],
    bestFor: 'Food Processors, Distributers & South Asia',
  },
  {
    id: 'rabbi-kaluteh',
    title: 'Rabbi & Kaluteh (ربی و کلوته)',
    subtitle: 'Semi-Dry • Dark Reddish Brown',
    image: 'https://images.pexels.com/photos/31779629/pexels-photo-31779629.jpeg?_gl=1*zndbyn*_ga*MTk1ODAyMTQxOS4xNzg4OTY1MjY4*_ga_8JE65Q40S6*czE3ODg5NjUyNjgkbzEkZzEkdDE3ODg5NjU0NSQkajU5JGwwJGgw',
    icon: Package,
    badge: 'High Yield Export',
    desc: 'Meaty, long semi-dry dates with sweet caramel taste. Ideal for mass wholesale bulk distribution.',
    specs: [
      { label: 'Moisture', value: '15% – 18%' },
      { label: 'Origin', value: 'Jiroft & Kerman' },
      { label: 'Shipment', value: '20ft/40ft Reefer' },
    ],
    bestFor: 'Bulk Fruit Importers & Re-packers',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative bg-[#0B2B22] text-[#F4F0E6] py-20 md:py-28 px-4 md:px-12 border-b border-[#1A4337] overflow-hidden">
      
      {/* BACKGROUND AMBIENT ACCENT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#C5922E]/10 blur-[140px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-md">
            <Award className="w-3.5 h-3.5 text-[#C5922E]" />
            Direct Processing Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#F4F0E6] leading-tight">
            Premium Iranian Date Varieties
          </h2>
          <p className="text-[#F4F0E6]/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Sourced, machine-sorted, and cold-storage packed at our facilities in the Bam &amp; Jiroft industrial zones.
          </p>
        </div>

        {/* PRODUCTS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="group relative bg-[#133A2E] rounded-3xl border border-[#1A4337] hover:border-[#C5922E] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top Gold Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5922E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                <div>
                  {/* GALLERY IMAGE FRAME */}
                  <div className="relative h-64 w-full overflow-hidden bg-[#0B2B22]">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={80}
                      loading={prod.id === 'mazafati' ? 'eager' : 'lazy'}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-105"
                      priority={prod.id === 'mazafati'}
                    />
                    
                    {/* Dark Gradient Overlay for Text Clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#133A2E] via-[#0B2B22]/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20">
                      <span className="bg-[#0B2B22]/90 backdrop-blur-md text-[#C5922E] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#C5922E]/40 shadow-md">
                        {prod.badge}
                      </span>
                      <div className="p-2 bg-[#0B2B22]/90 backdrop-blur-md rounded-full text-[#C5922E] border border-[#1A4337] shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Floating Title Overlay on Image */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 space-y-0.5">
                      <h3 className="text-lg font-black text-[#F4F0E6] group-hover:text-[#C5922E] transition-colors drop-shadow">
                        {prod.title}
                      </h3>
                      <p className="text-[11px] text-[#C5922E] font-bold drop-shadow-sm">
                        {prod.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* BODY CONTENT */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs text-[#F4F0E6]/70 leading-relaxed font-normal">
                      {prod.desc}
                    </p>

                    {/* Essential Specs Badges */}
                    <div className="flex flex-wrap gap-2">
                      {prod.specs.map((spec, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-medium text-[#F4F0E6]/90 bg-[#0B2B22] border border-[#1A4337] px-2.5 py-1 rounded-lg flex items-center gap-1"
                        >
                          <span className="text-[#F4F0E6]/50">{spec.label}:</span>
                          <strong className="text-[#C5922E] font-bold">{spec.value}</strong>
                        </span>
                      ))}
                    </div>

                    {/* Application Tag */}
                    <div className="flex items-center gap-2 text-xs text-[#F4F0E6]/80 bg-[#0B2B22]/60 p-2.5 rounded-xl border border-[#1A4337]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5922E] shrink-0" />
                      <span className="truncate text-[11px]">
                        Target: <strong className="text-[#F4F0E6] font-bold">{prod.bestFor}</strong>
                      </span>
                    </div>

                  </div>
                </div>

                {/* CTA BUTTON */}
                <div className="p-5 pt-0">
                  <a
                    href="#rfq"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
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