'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  Globe, 
  Building2, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B0F0D] text-[#E2ECE6] min-h-screen selection:bg-emerald-500 selection:text-slate-950">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B0F0D] text-white overflow-hidden py-28 md:py-36 border-b border-[#22332B]">
        
        {/* Background Field Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
            alt="Global Export Contact Desk"
            fill
            priority
            className="object-cover object-center opacity-20 grayscale-[30%] mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0D] via-[#0B0F0D]/90 to-[#0B0F0D]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-transparent to-[#0B0F0D]/80" />
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#141C18]/90 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-emerald-400 uppercase shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DIRECT EXPORT DESK</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-white">GET IN </span>
              <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">TOUCH.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-100 tracking-tight leading-tight">
              Request Wholesale Quotes &amp; Product Samples
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Connect directly with our export management team for FOB/CIF container pricing, laboratory spec sheets, and customized packaging requests.
            </p>

          </div>
        </div>
      </section>

      {/* 2. FORM & DIRECT CONTACT SECTION */}
      <section className="py-20 md:py-28 bg-[#121A16] border-b border-[#22332B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* DIRECT CONTACT INFO (LEFT COLUMN) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-emerald-400 text-xs font-black tracking-widest uppercase bg-[#18231E] border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block">
                QUICK CONNECT
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Direct Communication Channels
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Our trade response team typically replies within 2–4 business hours during export office operations.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-[#18231E] border border-[#22332B] hover:border-emerald-500/50 rounded-2xl transition-all duration-300 group"
              >
                <div className="p-3 bg-[#121A16] border border-emerald-500/30 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-emerald-400/20" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-0.5">Instant WhatsApp</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">+20 123 456 7890</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Available for instant FOB quotes &amp; photos</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:export@aljarhi.com"
                className="flex items-start gap-4 p-5 bg-[#18231E] border border-[#22332B] hover:border-emerald-500/50 rounded-2xl transition-all duration-300 group"
              >
                <div className="p-3 bg-[#121A16] border border-emerald-500/30 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-0.5">Official Export Email</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">export@aljarhi.com</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Send official RFQ documents &amp; LOIs</p>
                </div>
              </a>

              {/* Headquarters & Farms */}
              <div className="p-5 bg-[#18231E] border border-[#22332B] rounded-2xl space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#121A16] border border-emerald-500/30 rounded-xl text-emerald-400 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-0.5">Processing &amp; Farm Facility</span>
                    <h4 className="text-sm font-bold text-white">Al Minya Agriculture Belt, Egypt</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Solar Drying &amp; Mechanical Sifting Center</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-[#22332B]">
                  <div className="p-3 bg-[#121A16] border border-amber-500/30 rounded-xl text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-0.5">Port Dispatch Terminal</span>
                    <h4 className="text-sm font-bold text-white">Alexandria Sea Port, Egypt</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">FCL Container Departure &amp; Customs Clearance</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Operating Hours */}
            <div className="p-4 bg-[#141C18] border border-[#22332B] rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Export Hours:</span>
              </div>
              <span className="font-bold text-white">Mon – Sat | 08:00 – 18:00 (EET)</span>
            </div>
          </div>

          {/* B2B INQUIRY FORM (RIGHT COLUMN) */}
          <div className="lg:col-span-7 bg-[#18231E] border border-[#22332B] p-8 sm:p-10 rounded-3xl shadow-2xl relative">
            
            {submitted ? (
              <div className="text-center py-16 space-y-5">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-black text-white">Inquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting our export division. A trade representative will review your target specifications and send an official response shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 bg-emerald-500 text-slate-950 font-black text-xs uppercase px-6 py-3 rounded-xl hover:bg-emerald-400 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">Request Container Quote</h3>
                  <p className="text-xs text-slate-400 mt-1">Fill in your requirements below to receive direct FOB/CIF pricing.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#121A16] border border-[#22332B] focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Global Botanical Importers"
                      className="w-full bg-[#121A16] border border-[#22332B] focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. buyer@company.com"
                      className="w-full bg-[#121A16] border border-[#22332B] focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#121A16] border border-[#22332B] focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Target Product *</label>
                    <select
                      required
                      className="w-full bg-[#121A16] border border-[#22332B] focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white outline-none transition"
                    >
                      <option value="">Select Primary Herb</option>
                      <option value="marjoram">Egyptian Dried Marjoram</option>
                      <option value="chamomile">Dried Chamomile Flowers</option>
                      <option value="basil">Egyptian Basil Leaves</option>
                      <option value="spearmint">Dried Spearmint / Peppermint</option>
                      <option value="coriander">Coriander Seeds</option>
                      <option value="hibiscus">Hibiscus Flowers (Karkadeh)</option>
                      <option value="other">Multiple / Other Products</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Target Volume &amp; Incoterm *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1x20ft FCL (FOB Alexandria)"
                      className="w-full bg-[#121A16] border border-[#22332B] focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Specification &amp; Destination Details</label>
                  <textarea
                    rows={4}
                    placeholder="Specify target cut (Whole, TBC, Powder), packaging requirements, or destination port (e.g. Hamburg, Genoa, Jebel Ali)..."
                    className="w-full bg-[#121A16] border border-[#22332B] focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/20 active:scale-98"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>Submit Wholesale RFQ</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. ASSURANCE GUARANTEE */}
      <section className="py-16 bg-[#0B0F0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#121A16] border border-[#22332B] rounded-2xl space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-white uppercase">Direct Farm Supplier</h4>
            <p className="text-xs text-slate-400">Zero middleman markup, sourced directly from Al Minya fields.</p>
          </div>

          <div className="p-6 bg-[#121A16] border border-[#22332B] rounded-2xl space-y-2">
            <Globe className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-white uppercase">Worldwide Logistics</h4>
            <p className="text-xs text-slate-400">Reliable container delivery across Europe, Americas, and Asia.</p>
          </div>

          <div className="p-6 bg-[#121A16] border border-[#22332B] rounded-2xl space-y-2">
            <CheckCircle2 className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="text-sm font-bold text-white uppercase">Lab Certified Quality</h4>
            <p className="text-xs text-slate-400">Every shipment verified for purity and low moisture standards.</p>
          </div>
        </div>
      </section>

    </div>
  );
}