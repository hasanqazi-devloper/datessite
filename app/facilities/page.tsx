'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Building2, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Truck, 
  Factory, 
  Boxes, 
  CheckCircle2, 
  ArrowRight,
  Warehouse,
  Flame,
  Scale
} from 'lucide-react';

export default function FacilitiesPage() {
  const facilitiesData = [
    {
      title: 'State-of-the-Art Cold Storage & Refrigeration',
      description: 'Our primary Bam-based cold storage hub maintains a strict temperature range of 0°C to 5°C with computer-regulated humidity sensors, preserving the delicate moisture and soft texture of Mazafati Rotab dates[cite: 6].',
      icon: <ThermometerSnowflake className="w-6 h-6 text-[#C5922E]" />,
      spec: 'Capacity: 5,000 Metric Tons'
    },
    {
      title: 'Automated Sorting & Grading Line',
      description: 'Advanced optical grading and sizing technology eliminates bruised or uneven fruit, sorting dates by exact length, moisture percentage, and visual uniformity[cite: 6].',
      icon: <Factory className="w-6 h-6 text-[#C5922E]" />,
      spec: 'Throughput: 40 Tons / Day'
    },
    {
      title: 'Hygienic Washing & Sanitization Hub',
      description: 'Multi-stage UV sterilizing and purified water washing lines ensure complete removal of dust and field impurities while keeping the natural fruit sugar intact[cite: 6].',
      icon: <ShieldCheck className="w-6 h-6 text-[#C5922E]" />,
      spec: 'ISO 22000 & HACCP Certified'
    },
    {
      title: 'Vacuum Packaging & Sealing Zone',
      description: 'Automated vacuum sealing and nitrogen-flushed packaging lines protect dry and semi-dry varieties (like Piarom and Zahedi) from oxidation and insect infestation[cite: 6].',
      icon: <Boxes className="w-6 h-6 text-[#C5922E]" />,
      spec: 'Custom Retail & Bulk Drums'
    },
    {
      title: 'Controlled Fumigation Chambers',
      description: 'Phytosanitary treatment chambers operating under strict international quarantine protocols to guarantee zero pest risk for global shipments[cite: 6].',
      icon: <Flame className="w-6 h-6 text-[#C5922E]" />,
      spec: 'ISPM 15 Compliant'
    },
    {
      title: 'Reefer Container Staging Yard',
      description: 'On-site power plug-in bays for 40ft refrigerated containers, allowing continuous cold chain monitoring right from loading to dispatch ports[cite: 6].',
      icon: <Truck className="w-6 h-6 text-[#C5922E]" />,
      spec: 'Direct Port Logistics'
    }
  ];

  const standards = [
    'HACCP Food Safety Management System',
    'ISO 9001 Quality Assurance Standard',
    'ISO 22000 Food Safety Standards',
    'Halal Certified Processing Facilities',
    'Global G.A.P. Farm Sourcing Protocols',
    'FDA Registered Export Operations'
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-28 md:py-36 border-b border-[#1A4337]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Siah Almas Bami Processing Facility"
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
              <span>INFRASTRUCTURE &amp; TECH</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">OUR </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">FACILITIES.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Advanced Processing &amp; Cold Storage Centers in Bam &amp; Jiroft
            </h2>

            {/* Description */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Equipped with modern sorting technology, computerized cold chain units, and strict sanitary packaging lines to ensure export compliance worldwide[cite: 6].
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#infrastructure"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INFRASTRUCTURE GRID SECTION */}
      <section id="infrastructure" className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              INDUSTRIAL CAPACITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              End-to-End Processing Technology
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F0E6]/70 leading-relaxed">
              From harvest collection points in southern Iranian palm groves to final container stuffing, every step is managed internally to guarantee product integrity[cite: 6].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData.map((item, index) => (
              <div 
                key={index}
                className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#133A2E] border border-[#1A4337] flex items-center justify-center group-hover:border-[#C5922E]/50 transition-colors">
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-[#F4F0E6] tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F4F0E6]/70 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1A4337]">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#C5922E] bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
                    {item.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. QUALITY COMPLIANCE & STANDARDS */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              CERTIFIED EXCELLENCE
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Global Food Safety Standards &amp; Certifications
            </h2>

            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
              Our facilities operate under strict international food regulatory frameworks. Every batch undergoes physical, microbial, and chemical testing prior to export clearance[cite: 6].
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {standards.map((std, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-[#133A2E] border border-[#1A4337] px-4 py-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0" />
                  <span className="text-xs font-bold text-[#F4F0E6]">{std}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#133A2E] border border-[#1A4337] p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />
            <Warehouse className="w-16 h-16 text-[#C5922E]" />
            <h3 className="text-2xl font-black text-[#F4F0E6] uppercase tracking-tight">Visit Our Facilities</h3>
            <p className="text-xs sm:text-sm text-[#F4F0E6]/70 leading-relaxed">
              We welcome international wholesale buyers, quality inspectors, and distributor partners for scheduled audits and warehouse walkthroughs in Bam, Iran[cite: 6].
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition"
              >
                <span>Schedule Facility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section id="contact" className="py-24 md:py-32 bg-[#0B2B22] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            PARTNER WITH US
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Ready to Secure Premium Date Supplies?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Contact our export desk for facility documentation, sample requests, or custom container scheduling[cite: 6].
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <span>WhatsApp Direct Line</span>
            </a>

            <a
              href="mailto:export@siah-almas.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#1A4337] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Export Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}