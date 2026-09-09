'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Ship, 
  Truck, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  ThermometerSnowflake, 
  Globe, 
  FileCheck,
  PackageCheck
} from 'lucide-react';

export default function ShippingPage() {
  const shippingFeatures = [
    {
      title: 'Cold Chain Reefer Logistics',
      description: 'Continuous temperature control maintained between 0°C to 5°C throughout transit to preserve the moisture, texture, and natural freshness of Mazafati Rotab dates[cite: 6].',
      icon: <ThermometerSnowflake className="w-6 h-6 text-[#C5922E]" />,
      spec: '40ft Reefer FCL Containers'
    },
    {
      title: 'Global Port Coverage',
      description: 'Direct export routing from southern Iranian hubs to major global ports including Jebel Ali, Nhava Sheva, Hamburg, St. Petersburg, and Rotterdam[cite: 6].',
      icon: <Globe className="w-6 h-6 text-[#C5922E]" />,
      spec: 'Worldwide B2B Delivery'
    },
    {
      title: 'Customs Clearance Support',
      description: 'Full documentation suite provided with every shipment to ensure fast, hassle-free customs clearance at destination ports[cite: 6].',
      icon: <FileCheck className="w-6 h-6 text-[#C5922E]" />,
      spec: 'Phytosanitary & COA Docs'
    },
    {
      title: 'Secure Container Stuffing',
      description: 'Professional palletization and secure container loading protocols designed to prevent shifting and cargo damage during rough ocean voyages[cite: 6].',
      icon: <PackageCheck className="w-6 h-6 text-[#C5922E]" />,
      spec: 'Impact-Resistant Packaging'
    }
  ];

  const exportPorts = [
    {
      port: 'Bandar Abbas Port, Iran',
      role: 'Primary Ocean Freight Terminal',
      transit: 'Direct feeder connections to global hubs'
    },
    {
      port: 'Jebel Ali Port, UAE',
      role: 'Middle East & Regional Transshipment Hub',
      transit: '2 - 4 Days'
    },
    {
      port: 'Nhava Sheva, India',
      role: 'South Asia Distribution Gateway',
      transit: '5 - 7 Days'
    },
    {
      port: 'European Main Ports (Rotterdam/Hamburg)',
      role: 'European Union Entry Points',
      transit: '18 - 25 Days'
    }
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-28 md:py-36 border-b border-[#1A4337]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Siah Almas Bami Shipping and Logistics"
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
              <span>GLOBAL LOGISTICS</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">SHIPPING &amp; </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">LOGISTICS.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Reliable Cold Chain &amp; Freight Solutions Worldwide
            </h2>

            {/* Description */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Ensuring optimal temperature control, secure container stuffing, and timely global delivery for all date varieties[cite: 6].
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#methods"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>EXPLORE SHIPPING SPECS</span>
                <ArrowRight className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHIPPING FEATURES GRID */}
      <section id="methods" className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              TRANSIT INTEGRITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              How We Protect Your Cargo
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F0E6]/70 leading-relaxed">
              Dates are sensitive organic products. Our specialized transport network ensures they arrive fresh and market-ready[cite: 6].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shippingFeatures.map((item, index) => (
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

      {/* 3. EXPORT PORTS & TRANSIT TIMELINE */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              GLOBAL ROUTES
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Major Shipping Corridors &amp; Transit Times
            </h2>

            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
              We coordinate seamlessly with top ocean liners to secure competitive freight rates and guaranteed slot bookings for all seasonal consignments[cite: 6].
            </p>

            <div className="space-y-3 pt-2">
              {exportPorts.map((route, i) => (
                <div key={i} className="flex items-center justify-between bg-[#133A2E] border border-[#1A4337] p-4 rounded-2xl">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-[#F4F0E6] uppercase">{route.port}</h4>
                    <p className="text-[11px] text-[#F4F0E6]/60">{route.role}</p>
                  </div>
                  <span className="text-xs font-black text-[#C5922E] bg-[#0B2B22] border border-[#1A4337] px-3 py-1.5 rounded-xl">
                    {route.transit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#133A2E] border border-[#1A4337] p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />
            <Ship className="w-16 h-16 text-[#C5922E]" />
            <h3 className="text-2xl font-black text-[#F4F0E6] uppercase tracking-tight">Incoterms Supported</h3>
            <p className="text-xs sm:text-sm text-[#F4F0E6]/70 leading-relaxed">
              We offer flexible trade terms including FOB (Free on Board), CFR (Cost and Freight), and CIF (Cost, Insurance, and Freight) tailored to your import requirements[cite: 6].
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition"
              >
                <span>Request Freight Rate</span>
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
            LOGISTICS DESK
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Plan Your Next Container Shipment
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Get in touch with our logistics team to check current vessel schedules, container availability, and CIF rates to your destination port[cite: 6].
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <span>WhatsApp Logistics Desk</span>
            </a>

            <a
              href="mailto:export@siah-almas.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#1A4337] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Shipping Inquiry</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}