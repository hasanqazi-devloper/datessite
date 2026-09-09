"use client";

import React from "react";

export default function HeritageStory() {
  const steps = [
    { 
      num: "01", 
      title: "Harvesting & Grove Collection", 
      desc: "Direct hand-picking of fresh Mazafati, Piarom, Zahedi, and Kaluteh dates from Bam & Jiroft palm orchards." 
    },
    { 
      num: "02", 
      title: "Double-Stage Sorting & Grading", 
      desc: "Mechanical calibration and meticulous hand-sorting to eliminate stem dust, defective fruit, and foreign matter." 
    },
    { 
      num: "03", 
      title: "Cold Storage & Moisture Control", 
      desc: "Immediate temperature-controlled storage (0°C to 5°C) preserving fruit plumpness, natural sugar, and ideal moisture." 
    },
    { 
      num: "04", 
      title: "Lab COA & Phytosanitary Inspection", 
      desc: "Official lab testing, fumigation certification, and phytosanitary verification for frictionless international clearance." 
    },
    { 
      num: "05", 
      title: "Bandar Abbas Port Dispatch", 
      desc: "Sealed reefer container loading and rapid maritime export toward India, UAE, Russia, and European ports." 
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#133A2E] text-[#F4F0E6] border-y border-[#1A4337] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            DIRECT SUPPLY CHAIN PROTOCOL
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
            Our 5-Step Grove-To-Port Workflow
          </h2>
          <p className="text-[#F4F0E6]/70 text-sm font-medium">
            End-to-end quality control from Bam &amp; Jiroft processing facilities to your destination port.
          </p>
        </div>

        {/* WORKFLOW CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[#0B2B22] border border-[#1A4337] p-6 rounded-2xl shadow-md space-y-3 hover:border-[#C5922E] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#C5922E] block">{step.num}</span>
                <span className="w-2 h-2 rounded-full bg-[#1A4337]" />
              </div>
              <h3 className="text-sm font-black text-[#F4F0E6]">{step.title}</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed font-normal">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}