"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  FlaskConical, 
  Award, 
  Truck, 
  CheckCircle2, 
  FileCheck, 
  Globe2, 
  ArrowRight,
  PackageCheck,
  ThermometerSnowflake
} from "lucide-react";

export default function QualityExportPage() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">

      {/* HERO SECTION (SAME BRAND TEMPLATE) */}
      <section className="relative py-28 px-6 lg:px-20 bg-[#121212] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop"
            alt="Sadra Saleh Quality Testing"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/70"></div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6B1224]/20 rounded-full blur-[120px] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-center min-h-[380px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Export Standards
          </div>

          <h1 className="text-5xl sm:text-7xl font-serif font-extrabold tracking-tight text-white leading-tight mb-6">
            QUALITY & <span className="text-[#D4AF37]">EXPORT.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            ISO-certified testing, 100% pure organic harvesting, and fast customs-cleared logistics for Saudi Arabia and global markets.
          </p>

          <div className="mt-8">
            <a href="#standards" className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8952D] hover:opacity-90 text-[#121212] font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/10 uppercase tracking-wider text-xs">
              View Our Certifications
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: QUALITY GUARANTEES (WARM COCOA TONE) */}
      <section id="standards" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 px-4 py-1.5 rounded-full border border-[#6B1224]/20 inline-block">
              Purity Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A221E]">
              Zero Compromise on Export Quality
            </h2>
            <p className="text-[#4A3E3D] text-sm">
              We follow strict international lab checks before sealing any container for shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3">
              <FlaskConical className="w-8 h-8 text-[#6B1224]" />
              <h3 className="font-serif font-bold text-lg text-[#2A221E]">Spectroscopic Testing</h3>
              <p className="text-xs text-[#4A3E3D] leading-relaxed">
                Verifies exact Crocin (color), Picrocrocin (flavor), and Safranal (aroma) levels.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#6B1224]" />
              <h3 className="font-serif font-bold text-lg text-[#2A221E]">No Chemical Additives</h3>
              <p className="text-xs text-[#4A3E3D] leading-relaxed">
                Guaranteed zero artificial coloring agents, chemical sprays, or heavy metal residues.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3">
              <ThermometerSnowflake className="w-8 h-8 text-[#6B1224]" />
              <h3 className="font-serif font-bold text-lg text-[#2A221E]">Moisture Control</h3>
              <p className="text-xs text-[#4A3E3D] leading-relaxed">
                Dehydrated using modern clean tech to ensure long shelf-life without fungus risk.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3">
              <FileCheck className="w-8 h-8 text-[#6B1224]" />
              <h3 className="font-serif font-bold text-lg text-[#2A221E]">Certificate with Order</h3>
              <p className="text-xs text-[#4A3E3D] leading-relaxed">
                Every commercial batch includes a physical certified lab analysis sheet inside the shipment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: OFFICIAL CERTIFICATIONS GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
              International Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Certificates & Trade Compliance
            </h2>
            <p className="text-gray-400 text-sm">
              Approved documents for hassle-free import clearance across GCC, European, and Asian ports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <Award className="w-10 h-10 text-[#D4AF37]" />
              <h3 className="text-xl font-serif font-bold text-white">ISO 22000 & HACCP</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Complete compliance with international food safety management systems from field harvesting to export sealing.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <Award className="w-10 h-10 text-[#D4AF37]" />
              <h3 className="text-xl font-serif font-bold text-white">Halal Export Certified</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                100% natural organic processing compliant with Gulf Standards Organization (GSO) requirements.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#D4AF37]/20 space-y-4">
              <Award className="w-10 h-10 text-[#D4AF37]" />
              <h3 className="text-xl font-serif font-bold text-white">Phytosanitary Health Pass</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Official agricultural quarantine approval verifying zero pests, soil trace, or plant infections.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: EXPORT LOGISTICS & GCC SHIPPING (WARM COCOA TONE) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-[#121212] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 px-4 py-1.5 rounded-full border border-[#6B1224]/20 inline-block">
              Fast Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A221E]">
              Direct Shipping & Custom Clearance
            </h2>
            <p className="text-[#4A3E3D] text-base leading-relaxed">
              We handle air freight and sea cargo logistics directly to major trade hubs including Riyadh, Jeddah, Dubai, and European destinations.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-[#D4AF37]/30">
                <Truck className="w-6 h-6 text-[#6B1224] shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-[#2A221E]">Air Cargo Express</h4>
                  <p className="text-xs text-gray-600">3-5 days delivery for high-value Saffron orders.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-[#D4AF37]/30">
                <PackageCheck className="w-6 h-6 text-[#6B1224] shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-[#2A221E]">Sea Container Freight</h4>
                  <p className="text-xs text-gray-600">Cost-efficient bulk shipments for Rosebuds and Barberry.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#121212] p-8 rounded-3xl border border-[#D4AF37]/40 text-white space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#D4AF37]">Customs Documents Included:</h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Commercial Invoice & Packing List</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Certificate of Origin (COO)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Official Laboratory Test Reports</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Phytosanitary & Halal Certificates</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION (CTA STRIP) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1A1A1A] via-[#22181C] to-[#1A1A1A] border border-[#D4AF37]/40 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Request Sample Kits & Lab Certificates
            </h3>
            <p className="text-xs text-gray-300">
              Verify our Crocin power and purity firsthand before placing bulk export orders.
            </p>
          </div>

          <Link 
            href="/#rfq-section" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8952D] text-[#121212] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 shrink-0"
          >
            <span>Request Quality Samples</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}