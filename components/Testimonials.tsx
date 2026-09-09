"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, PackageCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Rahul S.",
      role: "Dry Fruit Wholesaler (India)",
      text: "Sourcing Mazafati directly from Siah Almas Bami's facilities has completely eliminated our cold chain issues. The moisture control and grading are exceptionally consistent."
    },
    {
      name: "Dmitry V.",
      role: "FMCG Distributor (Russia)",
      text: "The Kaluteh and Rabbi shipments arrived with perfect integrity. Their direct Bam sourcing means we avoid middlemen markups, and the quality is outstanding for our bulk retail clients."
    },
    {
      name: "Ahmed K.",
      role: "Gourmet Retail Network (UAE)",
      text: "We require premium Piarom dates with specific moisture levels. Siah Almas delivers lab-verified batches perfectly packed in shrink wrap, making Jebel Ali port clearance seamless."
    },
    {
      name: "Elena M.",
      role: "Food Importer (Germany)",
      text: "Their Zahedi dates are top-tier. Finding a reliable Iranian date exporter with consistent COA documentation is challenging, but Siah Almas provides complete transparency."
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#133A2E] text-[#F4F0E6] border-y border-[#1A4337] relative z-10 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 w-full space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-3 w-full">
          <span className="text-[#C5922E] text-[11px] font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            GLOBAL BUYER REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#F4F0E6]">
            Trusted by Importers Worldwide
          </h2>
          <p className="text-sm font-medium text-[#F4F0E6]/70 max-w-xl mx-auto">
            Verified testimonials from B2B partners across India, Russia, UAE, and Europe.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative max-w-3xl mx-auto w-full">
          <m.div layout className="w-full bg-[#1A4337]/60 backdrop-blur-md rounded-2xl border border-[#235345] shadow-xl relative overflow-hidden p-8 md:p-12">
            <Quote size={80} className="absolute -bottom-4 -right-4 text-[#C5922E]/10 pointer-events-none transform -rotate-12" />

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
                  <div className="flex gap-1 text-[#C5922E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C5922E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-[#F4F0E6] font-medium leading-relaxed italic border-l-2 border-[#C5922E] pl-4">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1A4337] flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-[#F4F0E6] text-sm font-black uppercase tracking-wide">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-[#C5922E] text-xs font-bold mt-0.5">
                      {reviews[activeIndex].role}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#C5922E]/40 bg-[#C5922E]/15 flex items-center justify-center text-[#C5922E] shrink-0">
                    <PackageCheck size={14} />
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-6 w-full">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-[#1A4337] border border-[#235345] text-[#F4F0E6]/70 hover:text-[#C5922E] transition-all shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeIndex ? "w-6 bg-[#C5922E]" : "w-1.5 bg-[#1A4337]"}`} />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-[#1A4337] border border-[#235345] text-[#F4F0E6]/70 hover:text-[#C5922E] transition-all shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}