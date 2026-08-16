'use client';

import { Mail, Phone, MapPin, Send, Sparkles, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-emerald-950 text-white min-h-screen">

      {/* 1. Contact Hero Section (Dark Emerald) */}
      <section className="relative py-24 px-6 lg:px-20 bg-[#061614] border-b border-emerald-900/40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
            alt="Global Export Contact"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061614] via-[#061614]/90 to-[#061614]/70"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-10"></div>

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[350px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Get In Touch
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
            CONTACT OUR <span className="text-emerald-400">TEAM.</span>
          </h1>

          <p className="text-emerald-100/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Ready to request custom denier specifications, sample kits, or bulk export quotations? Connect with our trade specialists today.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#061614] border-b border-emerald-900/40 relative text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/30 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Direct Communication
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Let's Discuss Your Fiber Requirements
                </h2>
                <p className="text-emerald-100/75 text-base leading-relaxed">
                  Our team ensures swift responses for all international shipping inquiries, technical data sheets, and custom orders.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Phone Card */}
                <div className="bg-emerald-900/20 border border-emerald-500/20 p-6 rounded-3xl shadow-sm flex items-center gap-5 hover:border-emerald-500/40 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400/70 uppercase tracking-wider">Direct Line</h4>
                    <p className="text-base font-bold text-white mt-0.5">+92 (61) 555-FIBER</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-emerald-900/20 border border-emerald-500/20 p-6 rounded-3xl shadow-sm flex items-center gap-5 hover:border-emerald-500/40 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400/70 uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-base font-bold text-white mt-0.5">sales@koushiartejarat.com</p>
                  </div>
                </div>

                {/* Office Location Card */}
                <div className="bg-emerald-900/20 border border-emerald-500/20 p-6 rounded-3xl shadow-sm flex items-center gap-5 hover:border-emerald-500/40 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400/70 uppercase tracking-wider">Global Headquarters</h4>
                    <p className="text-base font-bold text-white mt-0.5">Multan, Punjab, Pakistan</p>
                  </div>
                </div>

              </div>

              {/* Business Hours Note */}
              <div className="bg-emerald-900/20 border border-emerald-500/20 p-6 rounded-3xl flex items-center gap-4">
                <Clock className="w-6 h-6 text-emerald-400 shrink-0" />
                <p className="text-xs font-medium text-emerald-100/80">
                  <strong className="text-white block mb-0.5 font-bold">Working Hours:</strong>
                  Monday - Saturday: 9:00 AM - 6:00 PM (GMT+5)
                </p>
              </div>

            </div>

            {/* Right Column: Interactive Green Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#09221e] border border-emerald-500/30 p-8 sm:p-12 rounded-[2.5xl] shadow-2xl space-y-6">
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">Send Us a Message</h3>
                  <p className="text-sm text-emerald-100/70">Fill out the form below and our export department will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. John Doe" 
                        className="w-full bg-emerald-950/60 border border-emerald-500/30 px-4 py-3.5 rounded-xl text-sm text-white placeholder-emerald-700/60 focus:outline-none focus:border-emerald-400 focus:bg-emerald-950 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Business Email</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-emerald-950/60 border border-emerald-500/30 px-4 py-3.5 rounded-xl text-sm text-white placeholder-emerald-700/60 focus:outline-none focus:border-emerald-400 focus:bg-emerald-950 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="text" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full bg-emerald-950/60 border border-emerald-500/30 px-4 py-3.5 rounded-xl text-sm text-white placeholder-emerald-700/60 focus:outline-none focus:border-emerald-400 focus:bg-emerald-950 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Product / Interest</label>
                      <select className="w-full bg-emerald-950/60 border border-emerald-500/30 px-4 py-3.5 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-400 focus:bg-emerald-950 transition-all">
                        <option className="bg-emerald-950 text-white">Solid Polyester Fiber</option>
                        <option className="bg-emerald-950 text-white">Hollow Conjugated Fiber (HCF)</option>
                        <option className="bg-emerald-950 text-white">Cotton-Type Polyester Fiber</option>
                        <option className="bg-emerald-950 text-white">Custom Denier Order</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Message / Specifications</label>
                    <textarea 
                      rows={4} 
                      placeholder="Please specify estimated quantity, destination port, or required technical parameters..." 
                      className="w-full bg-emerald-950/60 border border-emerald-500/30 px-4 py-3.5 rounded-xl text-sm text-white placeholder-emerald-700/60 focus:outline-none focus:border-emerald-400 focus:bg-emerald-950 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold py-4 px-8 rounded-xl transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4 text-emerald-950" />
                  </button>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Global Shipping Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#061614] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50 inline-block">
            Worldwide Export
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Receive Your Sample Kit?
          </h2>
          <p className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto">
            We ship standard testing sample packages globally to verified spinning mills and manufacturing plants.
          </p>
        </div>
      </section>

    </div>
  );
}