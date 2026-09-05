'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  ArrowUpRight,
  Globe
} from 'lucide-react';

const faqs = [
  {
    q: 'What is your Minimum Order Quantity (MOQ)?',
    a: 'Our standard MOQ for export orders is one 40ft High Cube (HC) container, which holds approximately 20 to 22 Metric Tons depending on product packaging.',
  },
  {
    q: 'Can I request a sample before issuing a Purchase Order?',
    a: 'Yes, we provide 5KG express courier sample batches via DHL or FedEx. The buyer covers express air freight, which is credited back upon placing a container order.',
  },
  {
    q: 'What payment terms do you accept for container shipments?',
    a: 'We accept 100% Irrevocable Letter of Credit (L/C) at sight from top-tier international banks, or Bank Telegraphic Transfer (T/T) with standard deposit & BL balance terms.',
  },
  {
    q: 'How long does it take to prepare and ship a container?',
    a: 'Our typical FOB stuffing and loading lead time is 7 to 14 days from deposit or L/C receipt at Lagos Port (Apapa / Tin Can Island).',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: 'ayin',
    quantity: '1 Container (40ft HC)',
    incoterm: 'FOB Lagos',
    destinationPort: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen selection:bg-amber-500 selection:text-slate-950">
      
      {/* ==========================================
          SECTION 1: HERO SECTION
      ========================================== */}
      <section className="relative min-h-[70vh] flex items-center justify-start px-6 md:px-16 overflow-hidden border-b border-slate-800/80 pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&auto=format&fit=crop&q=80"
            alt="Global Business Contact"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              24/7 B2B INQUIRIES &amp; RFQ
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
            CONTACT US<span className="text-amber-500">.</span>
          </h1>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 max-w-2xl leading-tight">
              Request a Proforma Invoice or Schedule a Port Inspection
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Connect directly with our export desk for FOB &amp; CIF quotes, private label packaging, and sample dispatches.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: CONTACT CARDS & FORM GRID
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Direct Channels
              </span>
              <h2 className="text-3xl font-black text-white mt-3">Get In Touch</h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Our export sales team responds to all formal RFQs and container inquiries within 4 business hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-slate-900/60 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 transition-all flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Email Inquiry</span>
                  <h3 className="text-sm font-black text-white mt-0.5">exports@charcoalbrand.com</h3>
                  <p className="text-xs text-slate-400 mt-1">Send formal Purchase Orders (PO) &amp; Specification inquiries.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 transition-all flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">WhatsApp Instant Export Desk</span>
                  <h3 className="text-sm font-black text-white mt-0.5">+234 (0) 800 CHARCOAL</h3>
                  <p className="text-xs text-slate-400 mt-1">Direct messaging for live loading photos &amp; instant CIF quotes.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 transition-all flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Headquarters &amp; Port Facility</span>
                  <h3 className="text-sm font-black text-white mt-0.5">Lagos Port Commercial Complex</h3>
                  <p className="text-xs text-slate-400 mt-1">Commercial Avenue, Apapa Marine Quays, Lagos State, Nigeria.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-3xl border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Export Desk Hours</h4>
                    <p className="text-[11px] text-slate-400">Mon – Sat: 08:00 – 18:00 (WAT / GMT+1)</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Desk Active
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ Form */}
          <div className="lg:col-span-7 bg-slate-900/80 p-8 sm:p-12 rounded-3xl border border-slate-800/90 shadow-2xl backdrop-blur-xl relative">
            <div className="space-y-2 mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                RFQ Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Request For Quotation</h2>
              <p className="text-xs text-slate-400">Fill out your trade specifications for an instant formal Proforma Quotation.</p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Quotation Request Received</h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                  Thank you! Our export team is preparing your custom proforma quotation and specs sheet. You will receive an email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 rounded-xl"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Global Charcoal Importers Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Product Variety</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="ayin">Ayin Hardwood</option>
                      <option value="restaurant">Restaurant Grade Lump</option>
                      <option value="bbq">BBQ Lumpwood</option>
                      <option value="shisha">Shisha Coconut Charcoal</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Volume Required</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="1 Container (40ft HC)">1 Container (40ft HC)</option>
                      <option value="2-5 Containers">2 - 5 Containers / Month</option>
                      <option value="10+ Containers">10+ Containers Bulk Contract</option>
                      <option value="Sample Request">5KG Express Courier Sample</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Preferred Term</label>
                    <select
                      value={formData.incoterm}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="FOB Lagos">FOB Lagos Port</option>
                      <option value="CIF Destination">CIF Destination Port</option>
                      <option value="CFR Freight">CFR (Cost &amp; Freight)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Destination Port &amp; Country</label>
                  <input
                    type="text"
                    placeholder="e.g. Jebel Ali (UAE) or Rotterdam (Netherlands)"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Message &amp; Packaging Specs</label>
                  <textarea
                    rows={4}
                    placeholder="Specify bag size (20kg PP, 5kg Kraft Paper), moisture preference, or target shipment schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-slate-950 py-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95"
                >
                  <span>Submit Proforma Quote Request</span>
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: FAQ SECTION
      ========================================== */}
      <section className="py-20 px-6 md:px-16 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Trade Clarifications
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <HelpCircle className="w-4 h-4 shrink-0" />
                  <h4>{faq.q}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: GLOBAL REPRESENTATIVE DESKS
      ========================================== */}
      <section className="py-20 px-6 md:px-16 bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Regional Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Global Trade Desks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Primary Origin Hub</span>
              <h3 className="text-lg font-bold text-white">Lagos, Nigeria (Port Office)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Factory processing, container stuffing, NAQS phytosanitary clearance, and Apapa Port handling.
              </p>
            </div>

            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Middle East Sales</span>
              <h3 className="text-lg font-bold text-white">Dubai, UAE (Regional Office)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Managing GCC buyer accounts, shisha lounge contracts, and Jebel Ali port distribution.
              </p>
            </div>

            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">European Desk</span>
              <h3 className="text-lg font-bold text-white">Rotterdam, Netherlands</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Coordinating EU import documentation, REACH compliance guidance, and CIF Rotterdam logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}