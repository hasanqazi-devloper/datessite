"use client";

import React from "react";
import Link from "next/link";
import { 
  Sprout, 
  FlaskConical, 
  PackageCheck, 
  Truck, 
  ShieldCheck, 
  Award, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 lg:px-20 bg-[#121212] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop"
            alt="Isfahan Heritage Harvest"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/70"></div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6B1224]/20 rounded-full blur-[120px] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[380px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            About Sadra Saleh
          </div>

          <h1 className="text-5xl sm:text-7xl font-serif font-extrabold tracking-tight text-white leading-tight mb-6">
            ABOUT <span className="text-[#D4AF37]">US.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Direct producers of pure Isfahan Saffron, Damask Rosebuds, and Barberry. Built on 100 years of traditional farming and high-quality export standards.
          </p>

          <div className="mt-8">
            <a href="#heritage" className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8952D] hover:opacity-90 text-[#121212] font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/10 uppercase tracking-wider text-xs">
              Explore Our History
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: 100-YEAR HERITAGE & ORIGINS */}
      <section id="heritage" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212] border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 px-4 py-1.5 rounded-full border border-[#6B1224]/20 inline-block">
              Est. 1924 • Isfahan, Iran
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A221E] leading-tight">
              100 Years of Real Farming & Trusted Traditions
            </h2>
            <p className="text-[#4A3E3D] text-base leading-relaxed">
              Our journey started in 1924 in the famous agricultural lands of Isfahan. For a whole century, our family has focused on growing pure Saffron, fragrant Rosebuds, and fresh Barberries without chemical shortcuts.
            </p>
            <p className="text-[#4A3E3D] text-base leading-relaxed">
              We care for our soil naturally. By avoiding harsh pesticides and harvesting every single crop by hand at sunrise, we make sure our spices retain their natural color, deep aroma, and full health benefits.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 shadow-sm">
              <h3 className="text-3xl font-serif font-bold text-[#6B1224] mb-1">100+</h3>
              <p className="text-xs font-bold text-[#2A221E] uppercase tracking-wider">Years of Legacy</p>
              <p className="text-xs text-gray-600 mt-2">Passed down through generations in Isfahan.</p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 shadow-sm">
              <h3 className="text-3xl font-serif font-bold text-[#D4AF37] mb-1">100%</h3>
              <p className="text-xs font-bold text-[#2A221E] uppercase tracking-wider">Organic Care</p>
              <p className="text-xs text-gray-600 mt-2">Hand-picked crops with zero synthetic chemicals.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CULTIVATION TO EXPORT PIPELINE (4 STEPS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              From Our Fields to Your Port
            </h2>
            <p className="text-gray-400 text-sm">
              Our simple 4-step process guarantees fresh, high-grade spices for every wholesale order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all space-y-4">
              <div className="w-12 h-12 bg-[#6B1224] text-[#D4AF37] rounded-xl flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Sunrise Harvesting</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Farmers hand-pick delicate saffron threads and rosebuds early in the morning to protect their natural oil content.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all space-y-4">
              <div className="w-12 h-12 bg-[#6B1224] text-[#D4AF37] rounded-xl flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Lab Testing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Each batch is tested in a certified lab to verify Crocin (color strength), taste, aroma, and absolute purity.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all space-y-4">
              <div className="w-12 h-12 bg-[#6B1224] text-[#D4AF37] rounded-xl flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Sealed Packaging</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Goods are packed in food-grade, moisture-proof tins or vacuum containers to prevent any damage during transit.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all space-y-4">
              <div className="w-12 h-12 bg-[#6B1224] text-[#D4AF37] rounded-xl flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-white">GCC Delivery</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct air cargo routes to Dubai, Riyadh, Jeddah, and European ports with fast customs clearance support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: LAB CERTIFICATIONS & ISO STANDARDS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 px-4 py-1.5 rounded-full border border-[#6B1224]/20 inline-block">
              Guaranteed Quality
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A221E]">
              Lab Tested & Internationally Certified
            </h2>
            <p className="text-[#4A3E3D] text-sm">
              We provide full lab analysis documents with every shipment so you always know what you are buying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#6B1224]" />
              <h4 className="font-serif font-bold text-lg text-[#2A221E]">Crocin Level 250+</h4>
              <p className="text-xs text-[#4A3E3D]">Guarantees deep, bright red coloring power in every gram.</p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <FlaskConical className="w-8 h-8 text-[#6B1224]" />
              <h4 className="font-serif font-bold text-lg text-[#2A221E]">ISO 22000 Ready</h4>
              <p className="text-xs text-[#4A3E3D]">Tested for food safety, zero additives, and zero artificial colors.</p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <Award className="w-8 h-8 text-[#6B1224]" />
              <h4 className="font-serif font-bold text-lg text-[#2A221E]">Halal Certified</h4>
              <p className="text-xs text-[#4A3E3D]">100% natural processing complying with all Middle East import rules.</p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <PackageCheck className="w-8 h-8 text-[#6B1224]" />
              <h4 className="font-serif font-bold text-lg text-[#2A221E]">Batch Tracking</h4>
              <p className="text-xs text-[#4A3E3D]">Every container comes with its own farm origin and lab report number.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CORE PRODUCT VALUES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
              Why Choose Sadra Saleh
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              What Makes Our Products Special?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#D4AF37]">Super Negin Saffron</h3>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> All-red long strands</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> No yellow waste or filler weight</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Strong natural aroma & taste</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#D4AF37]">Damask Rosebuds</h3>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Tight, whole unopened buds</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Rich pink-crimson natural color</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Perfect for herbal teas & oils</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#D4AF37]">Puffy Dried Barberry</h3>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Seedless and soft texture</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Bright ruby red appearance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Cleaned and ready for packaging</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: GLOBAL FOOTPRINT & SUPPLY CHAIN */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 px-4 py-1.5 rounded-full border border-[#6B1224]/20 inline-block">
              Global B2B Supply
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A221E]">
              Direct Shipping to Saudi Arabia & GCC
            </h2>
            <p className="text-[#4A3E3D] text-base leading-relaxed">
              We regularly supply major spice wholesalers, packaging houses, and pharmaceutical buyers across Saudi Arabia, UAE, Qatar, Kuwait, and European markets.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-[#D4AF37]/30">
                <Globe2 className="w-6 h-6 text-[#6B1224]" />
                <div>
                  <h4 className="font-bold text-sm text-[#2A221E]">Saudi Arabia</h4>
                  <p className="text-[11px] text-gray-600">Riyadh & Jeddah Hubs</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-[#D4AF37]/30">
                <Globe2 className="w-6 h-6 text-[#6B1224]" />
                <div>
                  <h4 className="font-bold text-sm text-[#2A221E]">UAE & GCC</h4>
                  <p className="text-[11px] text-gray-600">Dubai Cargo Depots</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#121212] p-8 rounded-3xl border border-[#D4AF37]/40 text-white space-y-4">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> No Middlemen Markups
            </span>
            <h3 className="text-2xl font-serif font-bold">Buy Direct From Isfahan Producers</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              By cutting out unnecessary trading agents, we provide competitive wholesale pricing while keeping the quality 100% pure and traceable.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6: DIRECT B2B CALL TO ACTION (CTA STRIP) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1A1A1A] via-[#22181C] to-[#1A1A1A] border border-[#D4AF37]/40 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Want Sample Kits & Lab Reports?
            </h3>
            <p className="text-xs text-gray-300">
              Get price quotes and sample packages delivered directly to your company desk.
            </p>
          </div>

          <Link 
            href="/#rfq-section" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8952D] text-[#121212] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 shrink-0"
          >
            <span>Request Wholesale RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}