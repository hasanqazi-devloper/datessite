"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Globe2 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    product: "Saffron",
    quantity: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to our Sadra Saleh export team.");
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen">

      {/* HERO SECTION (SAME BRAND TEMPLATE) */}
      <section className="relative py-28 px-6 lg:px-20 bg-[#121212] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop"
            alt="Sadra Saleh Contact"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/70"></div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6B1224]/20 rounded-full blur-[120px] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[380px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Get In Touch
          </div>

          <h1 className="text-5xl sm:text-7xl font-serif font-extrabold tracking-tight text-white leading-tight mb-6">
            CONTACT <span className="text-[#D4AF37]">US.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Connect directly with our Isfahan export managers for wholesale pricing, sample kits, or custom packaging solutions.
          </p>

          <div className="mt-8">
            <a href="#inquiry-form" className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8952D] hover:opacity-90 text-[#121212] font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/10 uppercase tracking-wider text-xs">
              Send Wholesale Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: DIRECT CONTACT CARDS (WARM COCOA TONE) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#D4AF37]/30 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#6B1224] text-[#D4AF37] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2A221E]">Phone & WhatsApp</h3>
              <p className="text-xs text-[#4A3E3D] mt-1">Direct export line for instant response</p>
            </div>
            <p className="text-sm font-bold text-[#6B1224]">+98 913 000 0000</p>
          </div>

          <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#D4AF37]/30 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#6B1224] text-[#D4AF37] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2A221E]">Email Quotations</h3>
              <p className="text-xs text-[#4A3E3D] mt-1">Official RFQ and commercial invoices</p>
            </div>
            <p className="text-sm font-bold text-[#6B1224]">export@sadrasaleh.com</p>
          </div>

          <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#D4AF37]/30 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#6B1224] text-[#D4AF37] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2A221E]">Farm & Export Hub</h3>
              <p className="text-xs text-[#4A3E3D] mt-1">Primary production facility</p>
            </div>
            <p className="text-xs font-bold text-[#2A221E]">Isfahan Agricultural Zone, Iran</p>
          </div>

        </div>
      </section>

      {/* SECTION 2: B2B INQUIRY FORM & OFFICE DETAILS */}
      <section id="inquiry-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/20 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Quick RFQ Form
              </span>
              <h2 className="text-3xl font-serif font-bold text-white mt-1">
                Request Wholesale Price Quote
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-300 font-bold block mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    className="w-full bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-3 text-xs text-white focus:border-[#D4AF37] outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 font-bold block mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-3 text-xs text-white focus:border-[#D4AF37] outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-300 font-bold block mb-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Business / Importer Name"
                    className="w-full bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-3 text-xs text-white focus:border-[#D4AF37] outline-none"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 font-bold block mb-1">Destination Country *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Saudi Arabia, UAE, Germany"
                    className="w-full bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-3 text-xs text-white focus:border-[#D4AF37] outline-none"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-300 font-bold block mb-1">Select Product</label>
                  <select 
                    className="w-full bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-3 text-xs text-white focus:border-[#D4AF37] outline-none"
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                  >
                    <option value="Saffron">Super Negin Saffron</option>
                    <option value="Rosebuds">Damask Rosebuds</option>
                    <option value="Barberry">Puffy Dried Barberry</option>
                    <option value="All">Multiple Items</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-300 font-bold block mb-1">Target Quantity (KG)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 5 KG Saffron or 500 KG Rosebuds"
                    className="w-full bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-3 text-xs text-white focus:border-[#D4AF37] outline-none"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-300 font-bold block mb-1">Message / Requirements</label>
                <textarea 
                  rows={4}
                  placeholder="Specify packaging needs, target port, or lab report requests..."
                  className="w-full bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-3 text-xs text-white focus:border-[#D4AF37] outline-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8952D] text-[#121212] font-extrabold py-4 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <span>Submit Price Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-4 h-4" /> Response Time
              </span>
              <h3 className="text-xl font-serif font-bold text-white">Under 12 Hours Guarantee</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Our trade managers directly process every inquiry to provide custom per-kilogram pricing and air cargo estimates promptly.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> Regional Support
              </span>
              <h3 className="text-xl font-serif font-bold text-white">GCC Trade Desks</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Dedicated export assistance for Riyadh, Jeddah, Dubai, and European commercial ports.
              </p>
            </div>

            <a 
              href="https://wa.me/989130000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black font-extrabold p-6 rounded-3xl flex items-center justify-center gap-3 text-sm tracking-wide hover:opacity-90 transition-all shadow-lg"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (WARM COCOA TONE) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212]">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 px-4 py-1.5 rounded-full border border-[#6B1224]/20 inline-block">
              Export FAQ
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2A221E]">
              Frequently Asked Export Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#2A221E]">What is the Minimum Order Quantity (MOQ)?</h4>
              <p className="text-xs text-[#4A3E3D]">Our minimum export order for Super Negin Saffron is 1 KG, while Damask Rosebuds start at 50 KG and Barberry at 100 KG.</p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#2A221E]">Can I request sample packages before placing a bulk order?</h4>
              <p className="text-xs text-[#4A3E3D]">Yes, we dispatch certified sample kits containing lab reports directly to your corporate address via DHL or express cargo.</p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#2A221E]">Which payment and delivery terms (Incoterms) do you support?</h4>
              <p className="text-xs text-[#4A3E3D]">We regularly operate under FOB, CIF, and CPT terms via major international ports and air cargo operators.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}