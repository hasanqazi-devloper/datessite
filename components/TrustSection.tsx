"use client";

import React from "react";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function ShipmentsComparison() {
  return (
    <section className="py-20 md:py-28 bg-[#1B2A22] text-[#E2ECE6] border-y border-[#2E483A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#23362C] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
            WHY RISK YOUR CAPITAL?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#E2ECE6] tracking-tight">
            A Tale of Two Shipments
          </h2>
          <p className="text-emerald-100/70 text-sm font-medium">
            See the critical difference between unverified brokers and Al-Jarhi's direct-farm export protocol.
          </p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* TRADITIONAL BROKER */}
          <div className="bg-[#23362C] border border-rose-500/30 rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                  Typical Broker Risk
                </h3>
                <span className="text-[10px] font-black uppercase text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-md">
                  High Rejection Risk
                </span>
              </div>
              <ul className="space-y-3.5 text-xs text-emerald-100/80 font-medium">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>High moisture levels causing mold growth during sea transit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Excessive stem dust and foreign matter mixed in bulk bags.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Customs delays at EU/GCC ports due to missing COA documents.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AL-JARHI DIRECT */}
          <div className="bg-[#23362C] border-2 border-emerald-500/60 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Al-Jarhi Direct Protocol
                </h3>
                <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                  Guaranteed Quality
                </span>
              </div>
              <ul className="space-y-3.5 text-xs text-emerald-100/90 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strict solar-cured moisture control under 8% threshold.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Multi-stage air-sifting ensuring ≥ 99% pure leaves.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Instant port clearance with Phytosanitary &amp; Lab COA attached.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}