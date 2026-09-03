"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  Package,
  Scale,
  Award
} from "lucide-react";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: "saffron",
      category: "saffron",
      title: "Super Negin Saffron",
      subtitle: "Grade A+ Export Quality",
      image: "https://images.pexels.com/photos/10487658/pexels-photo-10487658.jpeg?_gl=1*1w5qkci*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MzE0OTEkbzIkZzEkdDE3ODg0MzE1MjckajI0JGwwJGgw",
      description: "100% pure, long-thread saffron with deep crimson color and guaranteed high Crocin power.",
      specs: [
        "Crocin Level: 250+ (High Color)",
        "Moisture: Under 7%",
        "Pure All-Red Threads (No Yellow Waste)",
        "Origin: Isfahan, Iran"
      ],
      moq: "1 KG"
    },
    {
      id: "rosebuds",
      category: "rosebuds",
      title: "Organic Damask Rosebuds",
      subtitle: "Dried Culinary & Essential Grade",
      image: "https://images.pexels.com/photos/38946088/pexels-photo-38946088.jpeg?_gl=1*1u9lu32*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MjI2MDAkbzEkZzEkdDE3ODg0MjI2MTUkajQ1JGwwJGgw",
      description: "Hand-picked closed rosebuds preserved carefully for intense floral aroma and natural essential oils.",
      specs: [
        "Color: Deep Pink / Crimson",
        "Purity: 99.5% Whole Buds",
        "Drying Method: Natural Air Dehydrated",
        "Origin: Isfahan, Iran"
      ],
      moq: "50 KG"
    },
    {
      id: "barberry",
      category: "barberry",
      title: "Puffy Dried Barberry (Zereshk)",
      subtitle: "Seedless Premium Culinary Grade",
       image: "https://images.pexels.com/photos/30688213/pexels-photo-30688213.jpeg?_gl=1*vfb6ad*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MjI2MDAkbzEkZzEkdDE3ODg0MjI4MzMkajYwJGwwJGgw",

      description: "Bright ruby-red, seedless dried barberries with a natural sweet and sour flavor balance.",
      specs: [
        "Purity: Seedless & Cleaned",
        "Texture: Soft & Puffy",
        "Moisture: Controlled 14-16%",
        "Origin: Isfahan, Iran"
      ],
      moq: "100 KG"
    }
  ];

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <div className="bg-[#121212] text-white min-h-screen">

      {/* HERO SECTION (SAME BRAND TEMPLATE) */}
      <section className="relative py-28 px-6 lg:px-20 bg-[#121212] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop"
            alt="Sadra Saleh Products"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/70"></div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6B1224]/20 rounded-full blur-[120px] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[380px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Export Catalog
          </div>

          <h1 className="text-5xl sm:text-7xl font-serif font-extrabold tracking-tight text-white leading-tight mb-6">
            OUR <span className="text-[#D4AF37]">PRODUCTS.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Direct wholesale supply of authentic Isfahan Super Negin Saffron, Damask Rosebuds, and Dried Barberry with ISO-certified lab reports.
          </p>

          <div className="mt-8">
            <a href="#catalog" className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8952D] hover:opacity-90 text-[#121212] font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/10 uppercase tracking-wider text-xs">
              View Wholesale Catalog
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: FILTER TABS & PRODUCT CARDS */}
      <section id="catalog" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: "all", label: "All Items" },
              { id: "saffron", label: "Super Negin Saffron" },
              { id: "rosebuds", label: "Damask Rosebuds" },
              { id: "barberry", label: "Barberry (Zereshk)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border ${activeTab === tab.id
                    ? "bg-[#D4AF37] text-[#121212] border-[#D4AF37]"
                    : "bg-[#1A1A1A] text-gray-300 border-[#D4AF37]/20 hover:border-[#D4AF37]/60"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-3xl overflow-hidden hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#121212]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                      MOQ: {product.moq}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest">
                        {product.subtitle}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-1">
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#D4AF37]/10">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/#rfq-section"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8952D] text-[#121212] font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider hover:opacity-90 transition-all"
                  >
                    <span>Request Price Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: B2B EXPORT SPECIFICATIONS TABLE (WARM COCOA TONE) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-10">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 px-4 py-1.5 rounded-full border border-[#6B1224]/20 inline-block">
              Technical Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A221E]">
              B2B Export Specification Chart
            </h2>
            <p className="text-[#4A3E3D] text-sm">
              Standard technical parameters verified for commercial import and customs clearance.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#FAF6F0] rounded-2xl border border-[#D4AF37]/30 shadow-sm p-4">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#D4AF37]/30 text-[#2A221E] font-serif font-bold">
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Quality Grade</th>
                  <th className="p-4">Purity Level</th>
                  <th className="p-4">Moisture Limit</th>
                  <th className="p-4">Shelf Life</th>
                  <th className="p-4">Min Order (MOQ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4AF37]/20 text-[#4A3E3D]">
                <tr>
                  <td className="p-4 font-bold text-[#2A221E]">Super Negin Saffron</td>
                  <td className="p-4">Grade A+ (ISO 3632-1)</td>
                  <td className="p-4">99.8% Pure Threads</td>
                  <td className="p-4">&lt; 7.0%</td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4 font-bold text-[#6B1224]">1 KG</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#2A221E]">Damask Rosebuds</td>
                  <td className="p-4">Hand-Picked Closed Buds</td>
                  <td className="p-4">99.5% Whole Buds</td>
                  <td className="p-4">&lt; 8.5%</td>
                  <td className="p-4">2 Years</td>
                  <td className="p-4 font-bold text-[#6B1224]">50 KG</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#2A221E]">Dried Barberry (Zereshk)</td>
                  <td className="p-4">Puffy Seedless Grade</td>
                  <td className="p-4">99.0% Cleaned</td>
                  <td className="p-4">14.0% - 16.0%</td>
                  <td className="p-4">18 Months</td>
                  <td className="p-4 font-bold text-[#6B1224]">100 KG</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 3: BULK PACKAGING OPTIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
              Custom Packaging
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Export-Ready Packaging Solutions
            </h2>
            <p className="text-gray-400 text-sm">
              We offer both bulk wholesale containers and custom white-label packaging for distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D4AF37]/20 space-y-3">
              <Package className="w-8 h-8 text-[#D4AF37]" />
              <h4 className="font-serif font-bold text-lg text-white">Luxury Metal Tins</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Ideal for 1g, 5g, 10g, and 25g saffron retail packs with custom brand logo printing.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D4AF37]/20 space-y-3">
              <Scale className="w-8 h-8 text-[#D4AF37]" />
              <h4 className="font-serif font-bold text-lg text-white">Air-Sealed Bulk Tins</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                1 KG and 5 KG industrial tins designed for safe air-freight without moisture exposure.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D4AF37]/20 space-y-3">
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <h4 className="font-serif font-bold text-lg text-white">Carton & Vacuum Bags</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                10 KG to 25 KG multi-layer vacuum bags for bulk Rosebuds and Barberry shipments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION (CTA STRIP) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1A1A1A] via-[#22181C] to-[#1A1A1A] border border-[#D4AF37]/40 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Need Product Samples or Custom Pricing?
            </h3>
            <p className="text-xs text-gray-300">
              Send us your target quantity and port destination for an instant quotation.
            </p>
          </div>

          <Link
            href="/#rfq-section"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8952D] text-[#121212] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 shrink-0"
          >
            <span>Request Product RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}