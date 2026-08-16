"tsx"
import { ShieldCheck, PackageCheck, Globe, BadgePercent } from "lucide-react";

export default function TrustSection() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Strict Quality Control",
      description: "Batch-tested polyester fibers ensuring high tensile strength, loft, and zero contamination."
    },
    {
      icon: PackageCheck,
      title: "Export-Grade Packaging",
      description: "Compressed bale wrapping designed for safe, moisture-free long-distance container shipping."
    },
    {
      icon: Globe,
      title: "Global Supply Support",
      description: "Seamless international logistics assistance, documentation, and on-time port delivery."
    },
    {
      icon: BadgePercent,
      title: "Direct Factory Pricing",
      description: "Competitive wholesale rates straight from manufacturer to manufacturer with no middlemen."
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Why Importers Trust Koushiar Tejarat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Minimizing Supply Chain Risks for Global Buyers
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We bridge the gap between quality manufacturing and dependable global trade.
          </p>
        </div>

        {/* 4 Grid Cards with Visible Gray Background on White Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {trustItems.map((item, index) => {
    const IconComponent = item.icon;
    return (
      <div 
        key={index} 
        className="bg-emerald-50/60 border border-emerald-100/80 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-300 hover:bg-white group"
      >
        <div className="w-14 h-14 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          <IconComponent className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
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