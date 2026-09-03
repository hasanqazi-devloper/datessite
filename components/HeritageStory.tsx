"use client";

import React from "react";
import Link from "next/link";
import { History, Award, ShieldCheck, ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function HeritageStory() {
  const milestones = [
    {
      year: "1924",
      title: "Isfahan Cultivation",
      desc: "Traditional saffron & botanical harvesting in Isfahan's fertile soil."
    },
    {
      year: "2010",
      title: "ISO & Lab Modernization",
      desc: "Upgraded with ISO 22000 spectroscopic testing for guaranteed Crocin levels."
    },
    {
      year: "GCC & Global",
      title: "Direct B2B Exports",
      desc: "Direct supply routes to Saudi Arabia, UAE, Europe, and global spice buyers."
    }
  ];

  return (
    <section className="bg-[#121212] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-[#6B1224]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
              <History className="w-3.5 h-3.5" /> 100-Year Isfahan Legacy
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              A Century of Mastery in Pure Saffron & Botanical Harvest
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Rooted in the historical agricultural lands of Isfahan, <strong className="text-[#D4AF37]">Sadra Saleh</strong> has spent over ten decades perfecting the cultivation of Super Negin Saffron, Damask Rosebuds, and Barberry. 
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              By combining ancient hand-picking traditions with modern laboratory testing, we eliminate middleman markups and supply verified, export-grade spices directly to global pharmaceutical and wholesale buyers.
            </p>

            {/* Timeline Breakdown */}
            <div className="space-y-4 pt-2">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-2xl bg-[#1A1A1A]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all">
                  <div className="bg-[#6B1224] text-[#D4AF37] text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 border border-[#D4AF37]/30">
                    {m.year}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif">{m.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="#rfq-section"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8952D] text-[#121212] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5"
              >
                <span>Request Lab Analysis Reports</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Storyboard Cards */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Visual Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80"
                alt="Isfahan Heritage Saffron Harvest"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 bg-[#121212]/90 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-2 rounded-2xl flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Isfahan, Iran</span>
              </div>

              {/* Bottom Card Overlay Details */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" /> Direct Producer • No Middlemen
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  100% Traceable Farm Harvest
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Every batch exported to Saudi Arabia and the GCC is fully traceable back to our original Isfahan farms with ISO purity certifications.
                </p>
              </div>
            </div>

            {/* Overlapping Cert Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#1A1A1A] border border-[#D4AF37]/40 p-5 rounded-2xl shadow-2xl items-center gap-4 max-w-xs backdrop-blur-xl">
              <div className="w-12 h-12 bg-[#6B1224] text-[#D4AF37] rounded-xl flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">ISO 22000 Certified</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">High Crocin & Safranal Potency Guaranteed</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}