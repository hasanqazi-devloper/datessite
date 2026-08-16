
'use client';
import { useState } from 'react';
import { Factory, ShieldCheck, ArrowRight, CheckCircle2,Sparkles, Layers, Globe2 } from 'lucide-react';
import Link from 'next/link';

const industriesData = [
  {
    id: 1,
    category: 'spinning',
    title: 'Textile Spinning Mills',
    badge: 'Ring & Rotor Spinning',
    description: 'Our Cotton-Type and Fine Denier Polyester Staple Fibers blend seamlessly with natural cotton, ensuring high yarn strength, uniform twist, and minimal breakages on high-speed spinning frames.',
    image: 'https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZSUyMHNwaW5uaW5nJTIwbWlsbCUyMG1hY2hpbmVyeXxlbnwwfHwwfHx8MA%3D%3D',
    benefits: ['Optimized blend ratio', 'Reduced yarn breakage', 'Enhanced tensile strength']
  },
  {
    id: 2,
    category: 'nonwoven',
    title: 'Non-Woven & Geo-Textiles',
    badge: 'Industrial Infrastructure',
    description: 'Solid polyester fibers engineered for needle-punch non-wovens, providing superior structural integrity for civil engineering, road stabilization, and filtration systems.',
    image: 'https://images.unsplash.com/photo-1758270804188-8ca0b6d254bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5vbiUyMHdvdmVuJTIwZmFicmljJTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MHx8MHx8fDA%3D',
    benefits: ['High durability & tenacity', 'Excellent drainage filtration', 'Soil stabilization support']
  },
  {
    id: 3,
    category: 'home',
    title: 'Home Furnishing & Bedding',
    badge: 'Duvets & Pillows',
    description: 'Hollow Conjugated Fibers (HCF) designed specifically for superior resilience, loft recovery, and plush thermal insulation in pillows, cushions, and winter comforters.',
    image: 'https://images.unsplash.com/photo-1741437136281-c66625b1a3c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpbGxvdyUyMGZpbGxpbmclMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    benefits: ['Exceptional loft & bulkiness', 'Siliconized smooth touch', 'Long-lasting resilience']
  },
  {
    id: 4,
    category: 'automotive',
    title: 'Automotive Upholstery',
    badge: 'Interior Components',
    description: 'High-performance solid fibers utilized in automotive molded carpets, trunk liners, and seating insulation pads that meet strict automotive fire-retardant and wear standards.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTJ3JQW1Y3AjXhBydavAg4fpIvcsMTP_nvqNsF6Bsl5rrDCcGwBkh8V8L&s=10',
    benefits: ['Acoustic insulation support', 'High wear resistance', 'Consistent denier structure']
  }
];

export default function HighEndIndustriesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredIndustries = activeTab === 'all' 
    ? industriesData 
    : industriesData.filter(item => item.category === activeTab);
  return (
    <div className="bg-emerald-950 text-white min-h-screen">

      {/* 1. Industries Hero Section (Dark Emerald) */}
      <section className="relative py-24 px-6 lg:px-20 bg-[#061614] border-b border-emerald-900/40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
            alt="Industrial Sector Applications"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061614] via-[#061614]/90 to-[#061614]/70"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-10"></div>

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[400px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Global Applications
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
            INDUSTRIES WE <span className="text-emerald-400">SERVE.</span>
          </h1>

          <p className="text-emerald-100/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Powering diverse manufacturing sectors worldwide with precision-engineered polyester staple fibers tailored for exceptional industrial output.
          </p>

          <div className="mt-10">
            <a href="#sectors" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-emerald-950/50 cursor-pointer">
              Explore Sectors
            </a>
          </div>
        </div>
      </section>

      {/* 2. Target Industries Grid (Soft Light Theme) */}
 <section id="sectors" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f7f6] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Sector Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Tailored Fiber Solutions for Global Manufacturing
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We collaborate closely with industrial leaders to provide customized denier configurations that optimize production lines.
          </p>
        </div>

        {/* Interactive Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'All Sectors' },
            { id: 'spinning', label: 'Textile Spinning' },
            { id: 'nonwoven', label: 'Non-Woven & Geo' },
            { id: 'home', label: 'Home Furnishing' },
            { id: 'automotive', label: 'Automotive' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm ${
                activeTab === tab.id
                  ? 'bg-emerald-950 text-white shadow-emerald-950/25 scale-[1.02]'
                  : 'bg-white text-gray-700 hover:bg-emerald-50/80 border border-gray-200/90'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Industries Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredIndustries.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-200/90 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Image Banner with Modern Overlay */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-950/85 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight group-hover:text-emerald-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Key Advantages Grid */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block mb-3">Key Advantages:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-emerald-50/50 border border-emerald-100/60 px-3 py-2 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="text-xs font-semibold text-gray-700">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900 hover:text-emerald-950 transition-all group-hover:translate-x-1 duration-200"
                  >
                    <span>Inquire For This Sector</span>
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

      {/* 3. Supply Chain & Export Logistics (Dark Emerald Theme) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#061614] border-b border-emerald-900/60 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50 inline-block">
              Global Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Seamless Container Dispatch & Port Delivery
            </h2>
            <p className="text-emerald-100/70 text-base leading-relaxed">
              We manage rigorous hydraulic bale pressing and secure container loading to ensure moisture-free transit and efficient warehousing upon arrival at your mill site.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-[#0b221e]/80 p-6 rounded-2xl border border-emerald-500/20">
                <h4 className="text-2xl font-bold text-emerald-400">100%</h4>
                <p className="text-xs text-emerald-100/70 mt-1">Hydraulic Bale Protection</p>
              </div>
              <div className="bg-[#0b221e]/80 p-6 rounded-2xl border border-emerald-500/20">
                <h4 className="text-2xl font-bold text-emerald-400">Global</h4>
                <p className="text-xs text-emerald-100/70 mt-1">Export Port Coverage</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0b221e]/80 border border-emerald-500/20 p-8 sm:p-10 rounded-3xl space-y-6 backdrop-blur-md">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Partner With Industry Experts</h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Whether you operate a large-scale spinning mill or a home textile manufacturing plant, our technical team provides custom sample evaluations and direct container quotations.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-emerald-950/50">
                Get Bulk Quotation
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#061614] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0b221e] to-[#071916] border border-emerald-500/30 p-12 rounded-3xl shadow-2xl relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50 inline-block">
            Start Collaboration
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Optimize Your Industrial Production?
          </h2>
          <p className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto">
            Contact our export division today for technical specification sheets and trial sample orders.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold py-4 px-10 rounded-xl transition-all shadow-lg shadow-emerald-950/50">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}