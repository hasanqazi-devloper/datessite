'use client';

import React, { useState } from 'react';

export default function RFQSection() {
  const [incoterm, setIncoterm] = useState('FOB');
  const [charcoalType, setCharcoalType] = useState('Ayin Hardwood');
  const [containerQty, setContainerQty] = useState('1 x 40ft HC');

  return (
    <section id="rfq" className="relative bg-slate-900 text-slate-100 py-20 md:py-28 px-4 md:px-16 border-b border-slate-800/80 overflow-hidden">

      {/* Dynamic Background Glows & Mesh Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-amber-400 text-[11px] font-black tracking-widest uppercase bg-slate-800/90 border border-amber-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
            <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z" />
            </svg>
            Direct Lagos Port Quotation Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Request an Official FOB / CIF Export Quote
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Get instant commercial pricing verified by our port operations team. SGS quality certificate included with every formal offer sheet.
          </p>
        </div>

        {/* MAIN CONTAINER (SLATE METALLIC CARDS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN: VALUE PROPOSITION (5 COLS) */}
          <div className="lg:col-span-5 space-y-6 bg-slate-800/60 border border-slate-700/60 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-1">
                  Excellence Guaranteed
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  Bulk Shipment Assurance
                </h3>
              </div>

              <div className="space-y-5 border-y border-slate-700/60 py-6">

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Fast-Track Turnaround</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Official Proforma Invoice issued within 4 working hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Lab Certified Cargo</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Fumigation, MSDS &amp; Phytosanitary clearances attached.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <path d="M2 20h20M2 4h20M10 4v16M14 4v16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Global Banking Terms</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Flexible LC at sight and T/T options backed by top-tier banks.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* NEPC FOOTER BADGE */}
            <div className="bg-slate-900/80 border border-slate-700/80 p-4 rounded-2xl flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-xs font-bold text-slate-200">NEPC Registered Exporter</span>
              </div>
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Lagos Port Desk
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-CONTRAST NEUTRAL FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/80 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-xl space-y-6">

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

              {/* SELECT INCOTERM */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-300 uppercase tracking-wider block">
                  1. Shipping Term (Incoterms 2020)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['FOB (Apapa / Tin Can Port)', 'CIF (Destination Port)'].map((term) => {
                    const termKey = term.split(' ')[0];
                    const isSelected = incoterm === termKey;
                    return (
                      <button
                        type="button"
                        key={term}
                        onClick={() => setIncoterm(termKey)}
                        className={`p-3.5 text-xs font-bold rounded-xl border transition-all text-left flex items-center justify-between ${isSelected
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-lg shadow-amber-500/20'
                            : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                          }`}
                      >
                        <span>{term}</span>
                        {isSelected && (
                          <svg className="w-4 h-4 fill-current text-slate-950" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* INPUT FIELDS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Charcoal Category</label>
                  <select
                    value={charcoalType}
                    onChange={(e) => setCharcoalType(e.target.value)}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option>Ayin Hardwood (High Density)</option>
                    <option>Restaurant Grade Charcoal</option>
                    <option>Shisha Coconut Briquettes</option>
                    <option>BBQ Lumpwood</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Target Volume / Quantity</label>
                  <select
                    value={containerQty}
                    onChange={(e) => setContainerQty(e.target.value)}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option>1 x 40ft HC (Trial Cargo)</option>
                    <option>2 - 5 x 40ft HC (Monthly Contract)</option>
                    <option>10+ Containers (Annual Supply)</option>
                  </select>
                </div>
              </div>

              {/* BUYER DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Al-Mansoor Trading LLC"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Destination Port (If CIF)</label>
                  <input
                    type="text"
                    placeholder="e.g. Jebel Ali / Rotterdam / Xingang"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-500"
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
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-3 text-xs text-white font-medium focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-[11px] sm:text-xs md:text-sm px-4 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-2 mt-2 cursor-pointer active:scale-[0.98] select-none"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none stroke-[2.5] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span className="text-center">Submit RFQ &amp; Request Proforma Invoice</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}