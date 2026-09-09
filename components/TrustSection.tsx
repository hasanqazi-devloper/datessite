"use client";

import React from "react";
import { CheckCircle2, XCircle, ShieldAlert, Award } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-[#133A2E] text-[#F4F0E6] border-y border-[#1A4337] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            PROTECT YOUR BULK INVESTMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
            A Tale of Two Date Shipments
          </h2>
          <p className="text-[#F4F0E6]/70 text-sm font-medium">
            Compare unverified middleman sourcing against Siah Almas Bami's direct Bam &amp; Jiroft processing standards.
          </p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* TRADITIONAL BROKER RISK */}
          <div className="bg-[#0B2B22]/70 border border-rose-500/30 rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
                <h3 className="text-lg font-bold text-[#F4F0E6] flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                  Unverified Middleman Sourcing
                </h3>
                <span className="text-[10px] font-black uppercase text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-md">
                  High Risk &amp; Shrinkage
                </span>
              </div>
              <ul className="space-y-3.5 text-xs text-[#F4F0E6]/70 font-medium">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Uncontrolled moisture levels causing fermentation or mold during sea freight.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Inconsistent fruit grading—mixing Grade B/C dates inside 5kg bulk cartons.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Broken cold chains in transport causing soft dates (Mazafati) to squash and leak juice.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Customs holds at Nhava Sheva or Jebel Ali due to missing Phytosanitary papers.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SIAH ALMAS BAMI PROTOCOL */}
          <div className="bg-[#1A4337] border-2 border-[#C5922E] rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6">
            {/* Top Accent Badge */}
            <div className="absolute top-0 right-0 bg-[#C5922E] text-[#0B2B22] text-[9px] font-black tracking-widest uppercase px-4 py-1 rounded-bl-xl">
              DIRECT FACTORY CONTROL
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#C5922E]/30 pb-4">
                <h3 className="text-lg font-bold text-[#F4F0E6] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C5922E]" />
                  Siah Almas Bami Protocol
                </h3>
                <span className="text-[10px] font-black uppercase text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2.5 py-1 rounded-md">
                  Guaranteed Quality
                </span>
              </div>
              <ul className="space-y-3.5 text-xs text-[#F4F0E6] font-semibold">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <span>Calibrated moisture testing (18%–22% for Fresh / &lt;15% for Dry) before loading.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <span>Double-stage hand-sorting &amp; mechanical sizing at Bam &amp; Jiroft industrial centers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <span>Unbroken cold-chain loading into reefer containers at Bandar Abbas port.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <span>Complete export docs: Phytosanitary Certificate, Bill of Lading, and Certificate of Origin.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}