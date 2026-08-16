"tsx"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Solid Polyester Fiber",
      desc: "High-durability fibers for industrial nonwovens and automotive padding.",
      img: "https://images.unsplash.com/photo-1643766883802-be314eb4d339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN5bnRoZXRpYyUyMGZpYmVyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Hollow Conjugated Fiber",
      desc: "Premium resilience and loft for bedding, pillows, and luxury quilts.",
      img: "https://images.unsplash.com/photo-1761642932833-fa22d121766b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZsdWZmeSUyMHdoaXRlJTIwY290dG9ufGVufDB8fDB8fHww"
    },
    {
      title: "Cotton-Type Fiber",
      desc: "Excellent uniformity for seamless textile spinning and fabric blends.",
      img: "https://images.unsplash.com/photo-1758270804188-8ca0b6d254bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRleHRpbGUlMjBzcGlubmluZyUyMG1pbGx8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <section className="bg-emerald-950 py-24 px-4 sm:px-6 lg:px-8 text-white border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
        
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Our Product Range
            </h2>
            <p className="text-emerald-100/70 text-base md:text-lg">
              Precision-manufactured synthetic staple fibers designed to meet international spinning and nonwoven standards.
            </p>
          </div>
          <Link 
            href="#rfq-section" 
            className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors border-b border-emerald-400/50 pb-1"
          >
            <span>Request Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="bg-emerald-900/40 border border-emerald-800/60 rounded-3xl overflow-hidden backdrop-blur-md flex flex-col justify-between group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-60 w-full relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-emerald-100/80 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Action CTA Button with High Contrast */}
                <Link 
                  href="#rfq-section" 
                  className="w-full flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 py-3.5 px-6 rounded-xl font-bold transition-colors text-sm shadow-md"
                >
                  <span>View Details & Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}