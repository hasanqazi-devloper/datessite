'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  ShieldCheck, 
  Filter, 
  MessageSquare, 
  ArrowUpRight,
  Package,
  Layers,
  ThermometerSnowflake,
  Scale
} from 'lucide-react';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    {
      id: 'mazafati',
      name: 'Fresh Mazafati Dates (Bam)',
      botanicalName: 'Phoenix dactylifera L. - Rotab',
      category: 'Fresh & Semi-Fresh',
      moisture: '18% - 22%',
      shelfLife: '12 Months (Cold Stored 0°C to 5°C)',
      moq: '15 Metric Tons (1x20ft Reefer FCL)',
      packaging: '500g / 600g / 800g Retail Boxes (12/Master Carton)',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80',
      description: 'Plump, soft black Rotab dates sourced directly from Bam palm orchards. Famous for rich natural sweetness, thin skin, and high juice content.',
      tags: ['Best Seller', 'Bam Origin']
    },
    {
      id: 'piarom',
      name: 'Royal Piarom Dates (Chocolate Dates)',
      botanicalName: 'Phoenix dactylifera L. - Semi-Dry',
      category: 'Semi-Dry & Dry',
      moisture: '< 15%',
      shelfLife: '18 Months (Ambient / Cool Storage)',
      moq: '5 Metric Tons',
      packaging: '5kg / 10kg Export Cartons / Vacuum Packed',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80',
      description: 'Luxury semi-dry dates with a dark brown skin fused to the flesh. Known as the chocolate date due to its rich caramel-like taste profile.',
      tags: ['Premium Grade A', 'High Shelf Life']
    },
    {
      id: 'zahedi',
      name: 'Golden Zahedi Dates',
      botanicalName: 'Phoenix dactylifera L. - Dry',
      category: 'Semi-Dry & Dry',
      moisture: '< 14%',
      shelfLife: '24 Months (Standard Storage)',
      moq: '10 Metric Tons',
      packaging: '10kg / 25kg PP Bags / Master Cartons',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80',
      description: 'Golden-yellow dry dates with low sugar density and long shelf life. Extensively demanded by spice importers, bakeries, and direct consumers.',
      tags: ['High Demand', 'Industrial & Retail']
    },
    {
      id: 'kaluteh',
      name: 'Fresh Kaluteh (Kalooteh) Dates',
      botanicalName: 'Phoenix dactylifera L. - Semi-Fresh',
      category: 'Fresh & Semi-Fresh',
      moisture: '16% - 18%',
      shelfLife: '12 Months (Cold Storage 2°C to 5°C)',
      moq: '10 Metric Tons',
      packaging: '5kg / 10kg Cartons or 500g Trays',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80',
      description: 'Cultivated in Jiroft groves, similar in appearance to Mazafati but slightly drier texture, offering high resistance to handling during transport.',
      tags: ['Jiroft Harvest', 'Cost Efficient']
    },
    {
      id: 'rabbi',
      name: 'Dark Long Rabbi Dates',
      botanicalName: 'Phoenix dactylifera L. - Semi-Dry',
      category: 'Semi-Dry & Dry',
      moisture: '< 16%',
      shelfLife: '18 Months (Cool Storage)',
      moq: '5 Metric Tons',
      packaging: '10kg Bulk Cartons / 1kg Retail Boxes',
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80',
      description: 'Long reddish-black semi-dry dates with a distinctive chewy texture. Naturally sweet with minimal moisture, ideal for snack manufacturing.',
      tags: ['Long Shelf Life', 'Chewy Texture']
    },
    {
      id: 'date-paste',
      name: 'Industrial Date Paste & Syrup',
      botanicalName: 'Phoenix dactylifera Processed',
      category: 'Value-Added Products',
      moisture: '18% - 20%',
      shelfLife: '18 Months',
      moq: '10 Metric Tons',
      packaging: '12.5kg / 25kg Food-Grade Plastic Drums / Buckets',
      image: 'https://plus.unsplash.com/premium_photo-1673264299391-8ca6b2b1a667?w=500&auto=format&fit=crop&q=60',
      description: '100% natural date paste without additive sugars or preservatives. Used as natural sweetener for confectionery, energy bars, and bakery products.',
      tags: ['Industrial Grade', '100% Natural Sugar']
    }
  ];

  const categories = ['All', 'Fresh & Semi-Fresh', 'Semi-Dry & Dry', 'Value-Added Products'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-28 md:py-36 border-b border-[#1A4337]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Iranian Date Palms Harvest"
            fill
            priority
            className="object-cover object-center opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22] via-[#0B2B22]/90 to-[#0B2B22]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-[#0B2B22]/80" />
        </div>

        {/* Ambient Gold Glow Effects */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5922E]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#1A4337]/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#133A2E]/90 border border-[#C5922E]/40 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-[#C5922E] uppercase shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C5922E] animate-ping" />
              <span>EXPORT CATALOGUE</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">OUR </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">PRODUCTS.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Export-Grade Iranian Fresh &amp; Dry Dates
            </h2>

            {/* Description */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              100% hand-harvested, lab-certified, and cold-stored dates processed in Bam &amp; Jiroft facilities for global B2B distributors.
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>EXPLORE CATALOGUE</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER & CATALOGUE GRID */}
      <section id="catalog" className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1A4337] pb-6">
            <div className="flex items-center gap-2 text-xs font-black text-[#C5922E] uppercase tracking-widest">
              <Filter className="w-4 h-4" />
              <span>Filter Variety:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#C5922E] text-[#0B2B22] shadow-lg shadow-[#C5922E]/20'
                      : 'bg-[#0B2B22] text-[#F4F0E6]/80 border border-[#1A4337] hover:border-[#C5922E]/40 hover:text-[#F4F0E6]'
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
                className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* IMAGE CONTAINER */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#0B2B22]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="bg-[#133A2E]/90 border border-[#C5922E]/40 text-[#C5922E] text-[10px] font-black px-2.5 py-1 rounded-full uppercase backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#C5922E] uppercase block mb-1">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-black text-[#F4F0E6] tracking-tight leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs italic text-[#F4F0E6]/60 font-serif mt-0.5">
                        {product.botanicalName}
                      </p>
                    </div>

                    <p className="text-xs text-[#F4F0E6]/80 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* KEY SPECS LIST */}
                    <div className="space-y-2 pt-2 border-t border-[#1A4337]">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#F4F0E6]/60">Moisture Content:</span>
                        <span className="font-bold text-[#C5922E]">{product.moisture}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#F4F0E6]/60">Storage / Shelf Life:</span>
                        <span className="font-bold text-[#F4F0E6]">{product.shelfLife}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#F4F0E6]/60">Min. Order (MOQ):</span>
                        <span className="font-bold text-[#F4F0E6]">{product.moq}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#F4F0E6]/60">Packaging Type:</span>
                        <span className="font-bold text-[#F4F0E6]/90 truncate max-w-[170px] text-right" title={product.packaging}>{product.packaging}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <div className="p-6 pt-0">
                  <a
                    href="#rfq"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#C5922E] hover:text-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E] text-[#F4F0E6] font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300"
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

      {/* 3. PACKAGING & COLD STORAGE SPECS */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              EXPORTS &amp; PACKAGING
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Custom Private Labeling &amp; Reefer Packaging
            </h2>

            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
              Whether you require retail-ready branded boxes for supermarket chains or bulk industrial packaging for food processors, we accommodate custom packing specifications.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-[#133A2E] border border-[#1A4337] p-4 rounded-2xl">
                <Package className="w-5 h-5 text-[#C5922E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#F4F0E6] uppercase">Retail &amp; Bulk Packing Options</h4>
                  <p className="text-xs text-[#F4F0E6]/70">500g, 600g, 800g retail trays, or 5kg/10kg heavy-duty corrugated export cartons.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#133A2E] border border-[#1A4337] p-4 rounded-2xl">
                <ThermometerSnowflake className="w-5 h-5 text-[#C5922E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#F4F0E6] uppercase">Cold Chain Reefers</h4>
                  <p className="text-xs text-[#F4F0E6]/70">40ft Reefer containers dispatched at 0°C to 5°C with continuous temperature tracking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#133A2E] border border-[#1A4337] p-8 rounded-3xl space-y-6 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-[#C5922E] mx-auto" />
            <h3 className="text-xl font-black text-[#F4F0E6] uppercase tracking-tight">Batch Quality Assurance</h3>
            <p className="text-xs text-[#F4F0E6]/70 max-w-md mx-auto leading-relaxed">
              Every container includes official Phytosanitary Certificates, Fumigation Inspection, and Lab Certificates of Analysis (COA) for rapid customs release.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION (RFQ SECTION) */}
      <section id="rfq" className="py-24 md:py-32 bg-[#0B2B22] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            DIRECT WHOLESALE QUOTE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Request Product Samples &amp; Container Pricing
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Specify your desired variety, tonnage, packaging, and target port (e.g., Nhava Sheva, Jebel Ali, St. Petersburg) for a 24-hour FOB or CIF quote.
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