"use client";

import React from "react";

export default function WorkflowSection() {
  const steps = [
    { num: "01", title: "Harvesting & Sorting", desc: "Hand-picked herbs harvested directly from Al Minya fertile farms." },
    { num: "02", title: "Solar Drying", desc: "Monitored moisture reduction preserving essential oil aroma." },
    { num: "03", title: "Air Sifting & Purity", desc: "Mechanical removal of stems and foreign particles up to 99% purity." },
    { num: "04", title: "Lab Certification", desc: "Complete COA & Phytosanitary analysis before bag sealing." },
    { num: "05", title: "Alexandria Shipping", desc: "Direct container loading & swift port export dispatch." },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#16241D] text-[#E2ECE6] border-y border-[#2A3F33] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#1E3127] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            DIRECT SUPPLY CHAIN
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Our 5-Step Farm-To-Port Workflow
          </h2>
          <p className="text-emerald-100/70 text-sm font-medium">
            Complete transparency from Egyptian soil to global destination ports.
          </p>
        </div>

        {/* WORKFLOW CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#1E3127] border border-[#2D483A] p-5 rounded-2xl shadow-md space-y-3 hover:border-emerald-500 transition-colors">
              <span className="text-2xl font-black text-emerald-400 block">{step.num}</span>
              <h3 className="text-sm font-bold text-white">{step.title}</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}