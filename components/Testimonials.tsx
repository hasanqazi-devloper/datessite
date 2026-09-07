"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Leaf } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Sarah M.",
      role: "Tea Importer & Blended Goods (Germany)",
      text: "Sourcing Chamomile flowers directly from Al-Jarhi's Al Minya farms exceeded our quality expectations. The flower head integrity and rich volatile oil content are top-tier."
    },
    {
      name: "David K.",
      role: "Wholesale Spice Distributor (UAE)",
      text: "Al-Jarhi Trading delivers exceptional Marjoram batches. Their sifting process ensures zero dust and optimal moisture levels, giving us confidence in every container."
    },
    {
      name: "Elizabeth R.",
      role: "Pharma & Botanical Buyer (France)",
      text: "Finding reliable Egyptian herb exporters with consistent COA certifications can be tough. Al-Jarhi provides lab-verified purity and strict compliance with European standards."
    },
    {
      name: "Marcus V.",
      role: "Bulk Herb Importer (UK)",
      text: "Seamless port clearance from Alexandria and crystal-clear shipping timelines. Their team handles custom packaging and FOB terms with complete professional transparency."
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#1B2A22] text-[#E2ECE6] border-y border-[#2E483A] relative z-10 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 w-full space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-3 w-full">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#23362C] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            GLOBAL BUYER REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Trusted by Importers Worldwide
          </h2>
          <p className="text-sm font-medium text-emerald-100/70 max-w-xl mx-auto">
            Verified testimonials from B2B partners across Europe, the Middle East, and Asia.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative max-w-3xl mx-auto w-full">
          <m.div layout className="w-full bg-[#23362C] rounded-2xl border border-[#2E483A] shadow-xl relative overflow-hidden p-8 md:p-12">
            <Quote size={80} className="absolute -bottom-4 -right-4 text-emerald-400/10 pointer-events-none transform -rotate-12" />

            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col justify-between text-left h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-emerald-50 font-medium leading-relaxed italic">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2E483A] flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wide">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-emerald-400 text-xs font-bold mt-0.5">
                      {reviews[activeIndex].role}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Leaf size={14} />
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-6 w-full">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-[#23362C] border border-[#2E483A] text-white hover:text-emerald-400 transition-all shadow-md"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeIndex ? "w-6 bg-emerald-400" : "w-1.5 bg-[#2E483A]"}`} />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-[#23362C] border border-[#2E483A] text-white hover:text-emerald-400 transition-all shadow-md"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}