import { ShieldCheck, PackageCheck, Globe, BadgePercent } from "lucide-react";

export default function TrustSection() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Lab-Certified Purity",
      description: "Every batch of Super Negin Saffron and Damask Rose is ISO & lab tested for high Crocin, zero additives, and pure aroma."
    },
    {
      icon: PackageCheck,
      title: "Export-Grade Vacuum Packaging",
      description: "Moisture-sealed aluminum tins and vacuum bulk packaging tailored for long-distance international and GCC transit."
    },
    {
      icon: Globe,
      title: "GCC & Global Supply Support",
      description: "Direct logistics assistance, phytosanitary clearance, and fast delivery routes to Jeddah, Dammam, Dubai, and European ports."
    },
    {
      icon: BadgePercent,
      title: "Direct Farm Pricing",
      description: "Authentic 100-year Isfahan producer pricing straight from our farms with zero middleman markups."
    }
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/25 relative overflow-hidden">
      
      {/* Subtle Background Glows to kill pure white feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-24 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#6B1224]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 border border-[#6B1224]/20 px-4 py-1.5 rounded-full inline-block">
            Why Importers Trust Sadra Saleh
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            100 Years of Excellence in Global Spice Sourcing
          </h2>
          <p className="text-[#5A626A] text-base sm:text-lg">
            We connect Isfahan's finest agricultural heritage directly with international B2B distributors and wholesale markets.
          </p>
        </div>

        {/* 4 Grid Cards - Warm Soft Tinted Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-b from-[#F4EFE6] to-[#EFE9DD] border border-[#D4AF37]/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#6B1224]/15 hover:border-[#6B1224] hover:-translate-y-1.5 group"
              >
                <div className="w-14 h-14 bg-[#FAF8F5] text-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 shadow-md border border-[#D4AF37]/30 group-hover:bg-[#6B1224] group-hover:text-[#D4AF37] group-hover:border-[#6B1224] transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-3 group-hover:text-[#6B1224] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#5A626A] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}