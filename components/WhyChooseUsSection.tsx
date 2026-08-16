import { ShieldCheck, Clock, Award, CheckCircle2 } from "lucide-react";

export default function WhyChooseUsSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality Control",
      desc: "Every single production batch undergoes rigorous laboratory testing for denier consistency, strength, and oil pickup."
    },
    {
      icon: Clock,
      title: "Reliable On-Time Delivery",
      desc: "We understand global manufacturing timelines. Our export logistics ensure your containers arrive as scheduled, every time."
    },
    {
      icon: Award,
      title: "Direct Manufacturer Pricing",
      desc: "Cut out unnecessary middlemen. Partnering with us guarantees direct factory pricing with maximum profit margins."
    },
    {
      icon: CheckCircle2,
      title: "Customized Specifications",
      desc: "Need specific cut lengths, siliconization levels, or denier sizes? We tailor our fiber production lines to your exact machine requirements."
    }
  ];

  return (
    <>
      {/* 1. Dark Emerald Feature Section */}
      <section className="bg-emerald-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
         
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Minimizing Supply Chain Risks for Global Buyers
            </h2>
            <p className="text-emerald-100/70 text-base md:text-lg">
              We don't just supply raw materials; we build long-term supply chain stability for your business.
            </p>
          </div>

          {/* 4 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {points.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-emerald-900/40 border border-emerald-800/60 p-8 rounded-3xl backdrop-blur-sm hover:bg-emerald-900/60 hover:border-emerald-600/60 transition-all duration-300 flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-emerald-100/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. Clean White Background Numeric Counters Section */}
      <section className="w-full bg-white/90 py-16 border-y border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-3xl py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-sm">
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-700 mb-1">100%</span>
              <span className="text-xs uppercase tracking-wider text-gray-700 font-bold">Virgin & Recycled Grade</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-700 mb-1">24/7</span>
              <span className="text-xs uppercase tracking-wider text-gray-700 font-bold">Export Assistance</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-700 mb-1">50+</span>
              <span className="text-xs uppercase tracking-wider text-gray-700 font-bold">Global Client Ports</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-700 mb-1">0%</span>
              <span className="text-xs uppercase tracking-wider text-gray-700 font-bold">Middlemen Markup</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}