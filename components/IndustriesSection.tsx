"tsx"
import Link from "next/link";
import { ArrowRight, Bed, Layers, Shirt, Factory } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Bed,
      title: "Bedding & Home Textile",
      desc: "Hollow conjugated fibers engineered for high loft, resilience, and comfort in luxury pillows, quilts, and mattresses.",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Factory,
      title: "Automotive & Nonwovens",
      desc: "High-durability solid fibers used for sound insulation padding, seat cushioning, and industrial filtration media.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Layers,
      title: "Geotextiles & Carpets",
      desc: "Consistent staple length fibers optimized for needle-punched carpets, civil engineering, and protective fabrics.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Shirt,
      title: "Apparel & Textile Spinning",
      desc: "Cotton-type polyester fibers designed for seamless blending with natural cotton in ring and open-end spinning mills.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Market Applications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Industries We Serve Worldwide
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our synthetic fibers form the backbone of quality manufacturing across multiple global sectors.
          </p>
        </div>

        {/* 4-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-emerald-50/70 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col sm:flex-row group"
              >
                {/* Industry Image */}
                <div className="sm:w-2/5 h-52 sm:h-auto relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <Link 
                    href="#rfq-section" 
                    className="text-emerald-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    <span>Request Industry Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}