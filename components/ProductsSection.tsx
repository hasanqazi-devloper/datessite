import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Super Negin Saffron",
      grade: "Grade A+ • ISO 22000 Certified",
      desc: "All-red, thick filaments with maximum Crocin (coloring potency) and intense aroma. Harvested from Isfahan farms.",
      features: ["Crocin Level: 250+", "Zero Moisture Additives", "Vacuum Bulk / Tin Box"],
      img: "https://images.pexels.com/photos/10487658/pexels-photo-10487658.jpeg?_gl=1*1w5qkci*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MzE0OTEkbzIkZzEkdDE3ODg0MzE1MjckajI0JGwwJGgw"
    },
    {
      title: "Damask Rosebuds & Petals",
      grade: "100% Organic • Steam Dried",
      desc: "Hand-picked Iranian Rosebuds for tea blends, essential oil extraction, and premium confectionery manufacturing.",
      features: ["High Essential Oil Yield", "Vibrant Natural Color", "5kg - 10kg Export Bales"],
      img: "https://images.pexels.com/photos/38946088/pexels-photo-38946088.jpeg?_gl=1*1u9lu32*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MjI2MDAkbzEkZzEkdDE3ODg0MjI2MTUkajQ1JGwwJGgw",
    },
    {
      title: "Puffy Dried Barberry (Zereshk)",
      grade: "Export Grade • Seedless",
      desc: "Naturally shade-dried, vibrant crimson seedless barberries curated for global food importers and wholesale spice markets.",
      features: ["Uniform Crimson Grade", "Pesticide Residue Free", "10kg Sealed Cartons"],
      img: "https://images.pexels.com/photos/30688213/pexels-photo-30688213.jpeg?_gl=1*vfb6ad*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MjI2MDAkbzEkZzEkdDE3ODg0MjI4MzMkajYwJGwwJGgw"
    }
  ];

  return (
    <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 text-white border-t border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#6B1224]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Direct Isfahan Farm Harvest
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white">
              Export-Grade Product Range
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Batch-tested and lab-certified agricultural exports prepared for wholesale distributors, tea blenders, and pharmaceutical labs.
            </p>
          </div>
          <Link 
            href="#rfq-section" 
            className="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:text-white transition-colors border-b border-[#D4AF37]/50 pb-1 text-sm tracking-wider uppercase"
          >
            <span>Download Spec Sheets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500"
            >
              {/* Image Container with Badge */}
              <div className="h-64 w-full relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/30" />
                
                {/* Grade Badge */}
                <div className="absolute top-4 left-4 bg-[#121212]/90 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#D4AF37]">
                  {item.grade}
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet Specs */}
                  <div className="pt-3 space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <Link 
                  href="#rfq-section" 
                  className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#b8952d] text-[#121212] py-3.5 px-6 rounded-xl font-bold transition-all text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/10"
                >
                  <span>Inquire Wholesale Price</span>
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