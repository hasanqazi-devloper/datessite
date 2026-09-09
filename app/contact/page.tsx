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
  Building2, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-28 md:py-36 border-b border-[#1A4337]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Siah Almas Bami Contact Us"
            fill
            priority
            className="object-cover object-center opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22] via-[#0B2B22]/90 to-[#0B2B22]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-[#0B2B22]/80" />
        </div>

        {/* Ambient Gold Glow Effects */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5922E]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#1A4337]/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#133A2E]/90 border border-[#C5922E]/40 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-[#C5922E] uppercase shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C5922E] animate-ping" />
              <span>GET IN TOUCH</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">CONTACT </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">US.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Connect with Our Global Export &amp; Sales Desk
            </h2>

            {/* Description */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Reach out for wholesale container pricing, sample requests, or schedule a visit to our processing facilities in Bam, Iran[cite: 6].
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>SEND AN INQUIRY</span>
                <ArrowRight className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section id="contact-form" className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
                COMMUNICATION CHANNELS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
                Direct Corporate Contacts
              </h2>
              <p className="text-xs sm:text-sm text-[#F4F0E6]/70 leading-relaxed">
                Our export support team responds to all B2B inquiries within 24 hours[cite: 6].
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#0B2B22] border border-[#1A4337] p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#133A2E] border border-[#1A4337] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5922E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F4F0E6] uppercase">Headquarters &amp; Processing Plant</h4>
                  <p className="text-xs text-[#F4F0E6]/60 mt-1">Bam Industrial Zone, Kerman Province, Iran[cite: 6]</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#0B2B22] border border-[#1A4337] p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#133A2E] border border-[#1A4337] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C5922E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F4F0E6] uppercase">Export Email Desk</h4>
                  <p className="text-xs text-[#F4F0E6]/60 mt-1">export@siah-almas.com[cite: 6]</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#0B2B22] border border-[#1A4337] p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#133A2E] border border-[#1A4337] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C5922E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F4F0E6] uppercase">WhatsApp &amp; Direct Phone</h4>
                  <p className="text-xs text-[#F4F0E6]/60 mt-1">+98 (Office) / WhatsApp Direct Support[cite: 6]</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#0B2B22] border border-[#1A4337] p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#133A2E] border border-[#1A4337] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C5922E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F4F0E6] uppercase">Working Hours</h4>
                  <p className="text-xs text-[#F4F0E6]/60 mt-1">Saturday – Thursday: 8:00 AM – 6:00 PM (IRST)[cite: 6]</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INQUIRY FORM */}
          <div className="lg:col-span-7 bg-[#0B2B22] border border-[#1A4337] p-8 sm:p-10 rounded-3xl shadow-2xl relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />
            
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 bg-[#133A2E] border border-[#C5922E]/50 rounded-full flex items-center justify-center mx-auto text-[#C5922E]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#F4F0E6] uppercase tracking-tight">Inquiry Received Successfully</h3>
                <p className="text-xs sm:text-sm text-[#F4F0E6]/70 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Siah Almas Bami. Our export desk will review your requirements and get back to you within 24 hours[cite: 6].
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-[#C5922E] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition"
                >
                  <span>Send Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase">
                    RFQ / DIRECT MESSAGE
                  </span>
                  <h3 className="text-2xl font-black text-[#F4F0E6] tracking-tight">
                    Request a Quote or Sample
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F4F0E6]/80 uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] text-xs px-4 py-3.5 rounded-xl outline-none transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F4F0E6]/80 uppercase">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Global Imports Ltd."
                      className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] text-xs px-4 py-3.5 rounded-xl outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F4F0E6]/80 uppercase">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@globalimports.com"
                      className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] text-xs px-4 py-3.5 rounded-xl outline-none transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F4F0E6]/80 uppercase">Phone / WhatsApp *</label>
                    <input
                      type="text"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] text-xs px-4 py-3.5 rounded-xl outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F4F0E6]/80 uppercase">Product Variety *</label>
                    <select
                      className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] text-xs px-4 py-3.5 rounded-xl outline-none transition"
                    >
                      <option>Mazafati Dates (Fresh)</option>
                      <option>Piarom Dates (Royal)</option>
                      <option>Zahedi Dates (Dry)</option>
                      <option>Kaluteh Dates</option>
                      <option>Rabbi Dates</option>
                      <option>Industrial Date Paste</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F4F0E6]/80 uppercase">Estimated Tonnage / MOQ</label>
                    <input
                      type="text"
                      placeholder="e.g. 15 Metric Tons (1 Container)"
                      className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] text-xs px-4 py-3.5 rounded-xl outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#F4F0E6]/80 uppercase">Message &amp; Destination Port *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify target port, packaging requirements, or any custom requests..."
                    className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] text-xs p-4 rounded-xl outline-none transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
                >
                  <Send className="w-4 h-4 fill-[#0B2B22]" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}