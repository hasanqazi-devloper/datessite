"use client"
import { useState } from 'react';
import { Layers, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const productsData = [
  {
    id: 1,
    category: 'solid',
    title: 'Solid Polyester Staple Fiber',
    badge: 'Industrial Spinning',
    description: 'Engineered for high-speed spinning, geo-textiles, and robust automotive needle-punch non-wovens providing exceptional structural integrity.',
    specs: ['Denier Range: 1.2D to 15D', 'Cut Length: 32mm to 64mm', 'High Tenacity & Low Shrinkage'],
    image: 'https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kdXN0cmlhbCUyMGZpYmVyJTIwbWFudWZhY3R1cmluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D',
    icon: Layers,
  },
  {
    id: 2,
    category: 'hollow',
    title: 'Hollow Conjugated Fiber (HCF)',
    badge: 'Home Furnishing & Filling',
    description: 'Characterized by superior resilience, bulkiness, and thermal insulation. Ideal for premium home fillings, duvets, pillows, and winter apparel.',
    specs: ['Siliconized & Non-Siliconized', 'Exceptional Loft & Recovery', 'Soft Hand Feel & Durability'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH-lZWvNwpzjzwds_RcwLTHP30HCCpJiJTYpIBrJnpLHMx2IFUYZTnNsf&s=10',
    icon: Cpu,
  },
  {
    id: 3,
    category: 'cotton',
    title: 'Cotton-Type Polyester Fiber',
    badge: 'Textile Spinning Mills',
    description: 'Blends seamlessly with natural cotton fibers in spinning mills, offering enhanced yarn strength, uniform twist, and reduced breakages.',
    specs: ['Fine Denier: 1.2D - 1.4D', 'Perfect Cotton Blend Ratio', 'Controlled Oil Pickup'],
    image: 'https://i.etsystatic.com/6897754/r/il/5d00fd/3629442618/il_fullxfull.3629442618_6o0f.jpg',
    icon: Sparkles,
  },
  {
    id: 4,
    category: 'solid',
    title: 'Super Bright Solid Fiber',
    badge: 'Specialty Non-Wovens',
    description: 'Glossy finish solid fibers optimized for decorative carpets, specialized displays, and high-luster industrial felt applications.',
    specs: ['Denier Range: 3D to 6D', 'Cut Length: 51mm', 'High Luster Finish'],
    image: 'https://images.unsplash.com/photo-1782828152662-cb3ba2eff30d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRleHRpbGUlMjBzcGlubmluZyUyMG1pbGwlMjBtYWNoaW5lcnl8ZW58MHx8MHx8fDA%3D',
    icon: Layers,
  },
  {
    id: 5,
    category: 'hollow',
    title: 'Slick Hollow Conjugated Fiber',
    badge: 'Premium Bedding',
    description: 'Extra slippery surface treatment designed for high-end filling where down-like luxury and fluid movement are required.',
    specs: ['Denier Range: 7D / 15D', 'Cut Length: 64mm', 'Advanced Slick Coating'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpJmi_lAcoO-eNI14WdkA_XcCrnEUNoTImUaAqy8Es5Yfv4aziE8p1Oom&s=10',
    icon: Cpu,
  }
];
export default function HighEndProductGallery() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? productsData 
    : productsData.filter(item => item.category === activeTab);


  return (
    <div className="bg-emerald-950 text-white min-h-screen">

      {/* 1. Products Hero Section (Dark Emerald with Industrial Background) */}
      <section className="relative py-24 px-6 lg:px-20 bg-[#061614] border-b border-emerald-900/40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop"
            alt="Synthetic Fiber Manufacturing"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061614] via-[#061614]/90 to-[#061614]/70"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-10"></div>

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[400px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Koushiar Tejarat Portfolio
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
            OUR <span className="text-emerald-400">PRODUCTS.</span>
          </h1>

          <p className="text-emerald-100/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Engineering high-performance Solid, Hollow Conjugated, and Cotton-Type Polyester Staple Fibers designed for elite industrial spinning and non-woven applications worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#catalog" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-emerald-950/50 cursor-pointer">
              Explore Catalog
            </a>
            <Link href="/contact" className="inline-block bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-200 font-bold py-4 px-8 rounded-xl border border-emerald-500/30 transition-all backdrop-blur-md">
              Request Sample Kit
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Portfolio Section (Soft Light Theme) */}
     <section id="catalog" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f7f6] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-4 py-1.5 rounded-full border border-emerald-200/60 inline-block shadow-sm">
            Comprehensive Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Industrial-Grade Polyester Staple Fibers
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Manufactured with strict adherence to global specifications, offering optimal tenacity, denier uniformity, and superior carding performance.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'solid', label: 'Solid Fibers' },
            { id: 'hollow', label: 'Hollow Conjugated' },
            { id: 'cotton', label: 'Cotton-Type' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm ${
                activeTab === tab.id
                  ? 'bg-emerald-900 text-white shadow-emerald-950/20'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={product.id}
                className="bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Thumbnail Header with Image Overlay */}
                <div className="relative h-52 overflow-hidden bg-gray-900">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {product.badge}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{product.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2.5 pt-2 text-sm text-gray-700 font-medium border-t border-gray-100">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      Request Quotation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>

      {/* 3. Technical Specifications Table Section (Dark Emerald Theme) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#061614] border-b border-emerald-900/60 text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50 inline-block">
              Precision Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Standard Export Specifications
            </h2>
            <p className="text-emerald-100/70 text-base">
              Every container is packed under strict hydraulic bale pressing ensuring standard weight and moisture control.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#0b221e]/80 border border-emerald-500/20 rounded-3xl p-6 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-emerald-900/60 text-emerald-300 text-sm uppercase tracking-wider">
                  <th className="py-4 px-6">Fiber Type</th>
                  <th className="py-4 px-6">Denier (D)</th>
                  <th className="py-4 px-6">Cut Length</th>
                  <th className="py-4 px-6">Lustre / Finish</th>
                  <th className="py-4 px-6">Primary Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/40 text-sm text-emerald-100/80">
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Solid PSFD</td>
                  <td className="py-4 px-6">1.2D - 15D</td>
                  <td className="py-4 px-6">32mm / 51mm / 64mm</td>
                  <td className="py-4 px-6">Semi-Dull / Bright</td>
                  <td className="py-4 px-6">Non-wovens, Geo-textiles</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Hollow Conjugated</td>
                  <td className="py-4 px-6">3D, 7D, 15D</td>
                  <td className="py-4 px-6">64mm</td>
                  <td className="py-4 px-6">Siliconized / Slick</td>
                  <td className="py-4 px-6">Bedding, Pillows, Toys</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Cotton Type</td>
                  <td className="py-4 px-6">1.2D - 1.4D</td>
                  <td className="py-4 px-6">38mm</td>
                  <td className="py-4 px-6">Semi-Dull</td>
                  <td className="py-4 px-6">Ring Spinning Blends</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#061614] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0b221e] to-[#071916] border border-emerald-500/30 p-12 rounded-3xl shadow-2xl relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50 inline-block">
            Custom Orders
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Need Specific Denier or Custom Cut Lengths?
          </h2>
          <p className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto">
            Our R&D and manufacturing plant can formulate bespoke fiber specifications tailored directly to your production line requirements.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold py-4 px-10 rounded-xl transition-all shadow-lg shadow-emerald-950/50">
              Speak With Our Engineers
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}