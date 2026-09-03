"use client";

import React, { useState } from "react";
import { Truck, Plane, Package, Calculator, ArrowRight, ShieldCheck } from "lucide-react";

export default function LogisticsEstimator() {
  const [product, setProduct] = useState("saffron");
  const [quantity, setQuantity] = useState(50);
  const [freightType, setFreightType] = useState("air");

  // Basic estimation logic
  const getPackagingDetails = () => {
    if (product === "saffron") {
      return {
        packType: "1kg Vacuum Metal Tins",
        grossWeight: (quantity * 1.2).toFixed(1) + " kg",
        estDays: freightType === "air" ? "3 - 5 Days" : "12 - 18 Days",
        minOrder: "10 kg",
      };
    } else if (product === "rosebuds") {
      return {
        packType: "5kg Compressed Bales",
        grossWeight: (quantity * 1.15).toFixed(1) + " kg",
        estDays: freightType === "air" ? "4 - 6 Days" : "15 - 20 Days",
        minOrder: "100 kg",
      };
    } else {
      return {
        packType: "10kg Sealed Cartons",
        grossWeight: (quantity * 1.08).toFixed(1) + " kg",
        estDays: freightType === "air" ? "4 - 7 Days" : "14 - 22 Days",
        minOrder: "500 kg",
      };
    }
  };

  const details = getPackagingDetails();

  return (
    <section className="bg-[#FAF8F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6B1224] bg-[#6B1224]/10 border border-[#6B1224]/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" /> Interactive B2B Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            Container & Logistics Estimator
          </h2>
          <p className="text-[#5A626A] text-base sm:text-lg">
            Calculate estimated freight weights, packaging specs, and transit times for your target export destination.
          </p>
        </div>

        {/* Main Interactive Widget */}
        <div className="bg-gradient-to-b from-[#F4EFE6] to-[#EFE9DD] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-10 shadow-xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Inputs (Form) */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Product Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                1. Select Export Commodity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "saffron", label: "Super Negin Saffron" },
                  { id: "rosebuds", label: "Damask Rosebuds" },
                  { id: "barberry", label: "Organic Barberry" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProduct(item.id)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                      product === item.id
                        ? "bg-[#6B1224] text-white border-[#6B1224] shadow-md"
                        : "bg-white/80 text-[#1A1A1A] border-gray-300 hover:border-[#D4AF37]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Freight Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                2. Shipping Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFreightType("air")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all border ${
                    freightType === "air"
                      ? "bg-[#121212] text-[#D4AF37] border-[#D4AF37]"
                      : "bg-white/80 text-[#1A1A1A] border-gray-300 hover:border-[#D4AF37]"
                  }`}
                >
                  <Plane className="w-4 h-4" />
                  <span>Air Freight (Express)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("sea")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all border ${
                    freightType === "sea"
                      ? "bg-[#121212] text-[#D4AF37] border-[#D4AF37]"
                      : "bg-white/80 text-[#1A1A1A] border-gray-300 hover:border-[#D4AF37]"
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Ocean Freight (FCL/LCL)</span>
                </button>
              </div>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                  3. Order Quantity (KG)
                </label>
                <span className="text-sm font-bold text-[#6B1224] bg-white px-3 py-0.5 rounded-lg border border-[#D4AF37]/30">
                  {quantity} KG
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-semibold">
                <span>10 KG</span>
                <span>500 KG</span>
                <span>1000+ KG</span>
              </div>
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="md:col-span-5 bg-[#121212] text-white rounded-2xl p-6 border border-[#D4AF37]/40 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                <Package className="w-4 h-4" /> Freight Estimate
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Standard Packaging</span>
                  <span className="text-sm font-semibold text-white">{details.packType}</span>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Est. Gross Cargo Weight</span>
                  <span className="text-base font-bold text-[#D4AF37]">{details.grossWeight}</span>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">GCC / Global Port Transit</span>
                  <span className="text-sm font-semibold text-white">{details.estDays}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Includes Phytosanitary & ISO Certification Documents</span>
              </div>

              <a
                href="#rfq-section"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#b8952d] text-[#121212] py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all w-full shadow-lg"
              >
                <span>Lock Freight Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}