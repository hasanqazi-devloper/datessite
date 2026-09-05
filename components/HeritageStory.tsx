'use client';

import React from 'react';
import { 
  FileSearch, 
  FlaskConical, 
  PackageCheck, 
  Ship, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const workflowSteps = [
  {
    step: '01',
    title: 'RFQ & Spec Matching',
    desc: 'Specify your charcoal grade, lump sizing (e.g., 50mm–150mm), and preferred packaging (10kg/20kg PP bags).',
    icon: FileSearch,
  },
  {
    step: '02',
    title: 'Lab Analysis & COA',
    desc: 'Independent SGS / Bureau Veritas testing verifies moisture (<8%) and carbon content before packing.',
    icon: FlaskConical,
  },
  {
    step: '03',
    title: 'Double-Screening & Bagging',
    desc: 'Vibrating screens eliminate dust and fines. Charcoal is packed into moisture-resistant export bags.',
    icon: PackageCheck,
  },
  {
    step: '04',
    title: 'Container Stuffing & Sealing',
    desc: 'Stuffing at Lagos port with live photo/video proof sent to buyer prior to customs sealing.',
    icon: Ship,
  },
  {
    step: '05',
    title: 'Port Clearance & Shipping',
    desc: 'Complete export documentation dispatched including Bill of Lading, Phytosanitary, Fumigation & MSDS.',
    icon: CheckCircle2,
  },
];

export default function ExportWorkflow() {
  return (
  <section className="bg-slate-900/60 text-white py-16 px-4 md:px-12 border-b border-slate-800/80">
  <div className="max-w-7xl mx-auto space-y-12">
    <div className="text-center space-y-2">
      <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
        Process
      </span>
      <h2 className="text-3xl md:text-4xl font-black text-white">Our 5-Step Export Workflow</h2>
    </div>

    {/* Workflow Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {[
        { step: '01', title: 'RFQ & Specs', desc: 'Confirm size, carbon %, and packaging type.' },
        { step: '02', title: 'Contract & PI', desc: 'Issue Proforma Invoice with agreed FOB/CIF terms.' },
        { step: '03', title: 'Double Screening', desc: 'Dust removal and moisture level check in warehouse.' },
        { step: '04', title: 'Stuffing & Inspection', desc: 'Container loading with SGS / Lab report clearance.' },
        { step: '05', title: 'Bill of Lading', desc: 'Container dispatch & full shipping doc transfer.' },
      ].map((item, idx) => (
        <div key={idx} className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-3 relative group hover:border-amber-500/50 transition-all">
          <span className="text-2xl font-black text-amber-400/80 group-hover:text-amber-400">{item.step}</span>
          <h3 className="text-sm font-bold text-white">{item.title}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}