"tsx"
import { CheckCircle2, ShieldCheck, Globe2,Target, Award,Lightbulb, Factory, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-emerald-950 text-white min-h-screen">

      {/* 1. Page Hero Section */}
      <section className="relative py-24 px-6 lg:px-20 bg-[#061614] border-b border-emerald-900/40 overflow-hidden">

        {/* Industrial Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
            alt="Industrial Manufacturing Background"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061614] via-[#061614]/90 to-[#061614]/70"></div>
        </div>

        {/* Background Glow Effect - Subtle Emerald Orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-10"></div>

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[400px]">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            About Koushiar Tejarat
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
            ABOUT <span className="text-emerald-400">US.</span>
          </h1>

          {/* Description */}
          <p className="text-emerald-100/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            We create powerful industrial experiences through innovative manufacturing, premium quality control, and strategic export solutions that help global manufacturers grow and succeed.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a href="#identity" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-emerald-950/50 cursor-pointer">
              Discover Our Story
            </a>
          </div>

        </div>
      </section>

      {/* 2. Our Story & Legacy Section */}
   <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f7f6] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-4 py-1.5 rounded-full border border-emerald-200/60 inline-block shadow-sm">
            Our Legacy & Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Built on Decades of Precision Manufacturing & Export Mastery
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Founded with a clear vision to revolutionize synthetic fiber supply chains, Koushiar Tejarat has grown from a regional producer into a powerhouse global exporter. We specialize in engineering high-performance Solid, Hollow Conjugated, and Cotton-Type Polyester Staple Fibers tailored for industrial spinning, geo-textiles, automotive upholstery, and home furnishing applications.
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            Our state-of-the-art production facilities utilize advanced recycling and virgin polymer processing technologies, ensuring strict compliance with international denier, cut length, and tenacity standards.
          </p>
        </div>

        {/* Right Column: Clean White Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Advanced Production</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cutting-edge extrusion and crimping lines engineered for uniform fiber characteristics.
            </p>
          </div>

          <div className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-4 sm:mt-8">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Global Reach</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Seamless container dispatch and robust logistics networks serving international ports worldwide.
            </p>
          </div>
        </div>

      </div>
    </section>

      {/* 3. Mission & Vision Section */}
   <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#061614] border-b border-emerald-900/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-[#0b221e]/80 border border-emerald-500/20 p-8 rounded-3xl space-y-4 backdrop-blur-md">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50 inline-block">
            Our Core Mission
          </span>
          <h3 className="text-2xl font-bold text-white">Driving Industrial Success Worldwide</h3>
          <p className="text-emerald-100/70 text-sm leading-relaxed">
            To deliver consistent, premium-grade polyester staple fibers that elevate the structural strength and performance of non-woven and textile products globally, while maintaining absolute transparency and cost efficiency for our manufacturing partners.
          </p>
        </div>

        <div className="bg-[#0b221e]/80 border border-emerald-500/20 p-8 rounded-3xl space-y-4 backdrop-blur-md">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
            <Lightbulb className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50 inline-block">
            Our Long-Term Vision
          </span>
          <h3 className="text-2xl font-bold text-white">Setting the Benchmark in Fiber Export</h3>
          <p className="text-emerald-100/70 text-sm leading-relaxed">
            To be recognized globally as the most dependable and quality-obsessed polyester fiber exporter, pioneering sustainable manufacturing practices and fostering lifelong commercial relationships across borders.
          </p>
        </div>

      </div>
    </section>

      {/* 4. Quality Standards & Assurance */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f7f6] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-4 py-1.5 rounded-full border border-emerald-200/60 inline-block shadow-sm">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Strict Quality Control Protocols
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Every batch undergoes rigorous lab testing before container sealing to guarantee optimal manufacturing output.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Denier Uniformity</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Exact fineness parameters maintained across every single bale for stable processing.</p>
          </div>

          <div className="bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Cut Length Accuracy</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Precision cutting machinery ensures zero variance in staple fiber length.</p>
          </div>

          <div className="bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Optimal Oil Pickup</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Balanced lubricant application for smooth carding and friction reduction.</p>
          </div>

          <div className="bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">High Tenacity</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Enhanced tensile strength designed for demanding industrial spinning requirements.</p>
          </div>
        </div>

      </div>
    </section>

      {/* 5. Call to Action / RFQ Bridge */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#061614] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0b221e] to-[#071916] border border-emerald-500/30 p-12 rounded-3xl shadow-2xl relative z-10 space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50 inline-block">
          Partner With Us
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Ready to Secure Premium Fiber Supply for Your Mill?
        </h2>
        <p className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto">
          Connect with our export team today to request custom sample kits or get competitive container pricing within 24 hours.
        </p>
        <div className="pt-4">
          <Link href="/#rfq-section" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold py-4 px-10 rounded-xl transition-all shadow-lg shadow-emerald-950/50">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>

    </div>
  );
}