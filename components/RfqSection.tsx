'use client';

import React, { useState } from 'react';
import { Leaf, ShieldCheck, Clock, FileText, Send, CheckCircle } from 'lucide-react';

export default function RFQSection() {
  const [incoterm, setIncoterm] = useState('FOB');
  const [herbType, setHerbType] = useState('Dried Marjoram');
  const [containerQty, setContainerQty] = useState('1 x 20ft FCL');

  return (
    <section id="rfq" className="relative bg-[#0B0F0D] text-slate-100 py-20 md:py-28 px-4 md:px-16 border-b border-[#22332B] overflow-hidden">

      {/* Dynamic Background Glows & Mesh Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-400 text-[11px] font-black tracking-widest uppercase bg-[#141C18] border border-emerald-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
            <Leaf className="w-3.5 h-3.5 text-emerald-400 fill-current" />
            Direct Alexandria Port Quotation Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Request an Official FOB / CIF Export Quote
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Get instant commercial pricing verified by our Al-Jarhi port operations team. Lab Certificate of Analysis (COA) included with every formal offer sheet.
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN: VALUE PROPOSITION (5 COLS) */}
          <div className="lg:col-span-5 space-y-6 bg-[#141C18] border border-[#22332B] p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-1">
                  Excellence Guaranteed
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  Direct Farm Sourcing Assurance
                </h3>
              </div>

              <div className="space-y-5 border-y border-[#22332B] py-6">

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Fast-Track Turnaround</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Official Proforma Invoice issued within 4 working hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Lab Certified Cargo</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">COA, Phytosanitary &amp; Fumigation clearances provided.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Global Banking Terms</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Flexible Irrevocable LC at sight and T/T payment options.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* REGISTERED EXPORTER FOOTER BADGE */}
            <div className="bg-[#0B0F0D] border border-[#22332B] p-4 rounded-2xl flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-slate-200">Verified Egyptian Exporter</span>
              </div>
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Alexandria Port Desk
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-CONTRAST FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-[#141C18] border border-[#22332B] p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-xl space-y-6">

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

              {/* SELECT INCOTERM */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-300 uppercase tracking-wider block">
                  1. Shipping Term (Incoterms 2020)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['FOB (Alexandria / Said Port)', 'CIF (Destination Port)'].map((term) => {
                    const termKey = term.split(' ')[0];
                    const isSelected = incoterm === termKey;
                    return (
                      <button
                        type="button"
                        key={term}
                        onClick={() => setIncoterm(termKey)}
                        className={`p-3.5 text-xs font-bold rounded-xl border transition-all text-left flex items-center justify-between ${isSelected
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-lg shadow-emerald-500/20'
                            : 'bg-[#0B0F0D] border-[#22332B] text-slate-300 hover:border-emerald-500/40'
                          }`}
                      >
                        <span>{term}</span>
                        {isSelected && (
                          <CheckCircle className="w-4 h-4 text-slate-950 fill-current" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* INPUT FIELDS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Herb Category</label>
                  <select
                    value={herbType}
                    onChange={(e) => setHerbType(e.target.value)}
                    className="w-full bg-[#0B0F0D] border border-[#22332B] rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option>Dried Marjoram (Purity ≥ 99%)</option>
                    <option>Egyptian Chamomile Flowers</option>
                    <option>Sweet Basil Leaves</option>
                    <option>Spearmint / Peppermint</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Target Volume / Quantity</label>
                  <select
                    value={containerQty}
                    onChange={(e) => setContainerQty(e.target.value)}
                    className="w-full bg-[#0B0F0D] border border-[#22332B] rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option>1 x 20ft FCL (Trial Shipment)</option>
                    <option>1 x 40ft HC (Standard Container)</option>
                    <option>2 - 5 x 40ft HC (Monthly Supply Contract)</option>
                  </select>
                </div>
              </div>

              {/* BUYER DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. BioHerbs Importers GmbH"
                    className="w-full bg-[#0B0F0D] border border-[#22332B] rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Destination Port (If CIF)</label>
                  <input
                    type="text"
                    placeholder="e.g. Hamburg / Rotterdam / Jebel Ali"
                    className="w-full bg-[#0B0F0D] border border-[#22332B] rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Work Email</label>
                  <input
                    type="email"
                    placeholder="procurement@company.com"
                    className="w-full bg-[#0B0F0D] border border-[#22332B] rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+49 151 12345678"
                    className="w-full bg-[#0B0F0D] border border-[#22332B] rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] sm:text-xs md:text-sm px-4 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-2 mt-2 cursor-pointer active:scale-[0.98] select-none"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span className="text-center">Submit RFQ &amp; Request Proforma Invoice</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}