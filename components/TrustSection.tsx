'use client';

import React from 'react';
import { ShieldCheck, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

export default function PainPoints() {
  return (
  <section className="bg-slate-900/90 text-white py-16 px-4 md:px-12 border-y border-slate-800/80 relative overflow-hidden">
  <div className="max-w-6xl mx-auto space-y-10 relative z-10">
    <div className="text-center space-y-2">
      <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
        Risk vs Reliability
      </span>
      <h2 className="text-3xl md:text-4xl font-black text-white">A Tale of Two Shipments</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Bad Experience Card */}
      <div className="bg-slate-950/80 border border-red-500/30 p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-red-400">Typical Broker Risk</h3>
          <span className="text-[10px] bg-red-500/10 text-red-400 font-bold px-2.5 py-1 rounded-full border border-red-500/20">HIGH RISK</span>
        </div>
        <ul className="space-y-3 text-xs text-slate-300">
          <li className="flex items-center gap-2">❌ High moisture level resulting in weight loss during shipping.</li>
          <li className="flex items-center gap-2">❌ Unscreened charcoal with high dust &amp; unburnt wood pieces.</li>
          <li className="flex items-center gap-2">❌ Delayed port clearance and hidden logistics costs.</li>
        </ul>
      </div>

      {/* CGO Verified Card */}
      <div className="bg-slate-950/90 border border-emerald-500/40 p-8 rounded-2xl shadow-xl space-y-4 relative">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-emerald-400">Verified Direct Export</h3>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">GUARANTEED</span>
        </div>
        <ul className="space-y-3 text-xs text-slate-200">
          <li className="flex items-center gap-2">✅ Double-screened &amp; moisture controlled below 8%.</li>
          <li className="flex items-center gap-2">✅ SGS / SGS-equivalent lab analysis certificate provided.</li>
          <li className="flex items-center gap-2">✅ Guaranteed loading timeline with fixed FOB/CIF rates.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
}