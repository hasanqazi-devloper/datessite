"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Globe2, Award, Truck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#121212] text-white border-b border-[#D4AF37]/20">
      {/* =========================================================
          BACKGROUND ATMOSPHERE (GOLD & ROSE GLOW)
      ========================================================== */}

      {/* Primary Gold Glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-[#D4AF37]/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Secondary Rose Burgundy Glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-[#6B1224]/20 blur-[130px]"
        aria-hidden="true"
      />

      {/* Subtle Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32">
        {/* =========================================================
            TRUST BADGE
        ========================================================== */}

        <div className="mb-8 flex">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/30 bg-[#1A1A1A]/80 px-4 py-2 shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#D4AF37] animate-pulse" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-xs">
              100-Year Legacy • Farm-to-Export Direct Producer
            </span>
          </div>
        </div>

        {/* =========================================================
            MAIN HERO GRID
        ========================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}

          <div className="lg:col-span-7">
            {/* Main Heading */}
            <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-serif">
              Premium Isfahan Saffron & Damask Rose for{" "}
              <span className="text-[#D4AF37] underline decoration-[#6B1224]/60 underline-offset-8">
                Global B2B Buyers
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Direct farm supply of high-grade{" "}
              <span className="font-semibold text-[#D4AF37]">
                Super Negin Saffron, Damask Rosebuds, and Barberry
              </span>{" "}
              engineered for international spice importers, cosmetic labs, and wholesale distributors worldwide.
            </p>

            {/* Target Audience Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-gray-400 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-[#D4AF37]" />
                Spice Wholesale Importers
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#D4AF37] sm:block" />

              <span className="inline-flex items-center gap-2">
                <Award className="h-4 w-4 text-[#D4AF37]" />
                Cosmetics & Essential Oils
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#D4AF37] sm:block" />

              <span className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#D4AF37]" />
                GCC & Saudi Arabia Freight
              </span>
            </div>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <Link
                href="#rfq-section"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8952D] px-7 text-sm font-bold text-[#121212] shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#D4AF37]/30 sm:px-8 sm:text-base"
              >
                <span>Request Wholesale Quote</span>

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/products"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#1A1A1A]/60 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#6B1224]/30 sm:px-8 sm:text-base"
              >
                <span>Explore Export Catalog</span>

                <ArrowRight className="h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* =====================================================
                METRICS
            ====================================================== */}

            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="grid grid-cols-3 gap-4 sm:max-w-xl sm:gap-8">
                {/* Metric 1 */}
                <div>
                  <div className="text-2xl font-extrabold tracking-tight text-[#D4AF37] sm:text-3xl">
                    100+
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400 sm:text-[10px]">
                    Years Farm Heritage
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="border-l border-white/10 pl-4 sm:pl-8">
                  <div className="text-2xl font-extrabold tracking-tight text-[#D4AF37] sm:text-3xl">
                    100%
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400 sm:text-[10px]">
                    Pure & Lab Tested
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="border-l border-white/10 pl-4 sm:pl-8">
                  <div className="text-2xl font-extrabold tracking-tight text-[#D4AF37] sm:text-3xl">
                    GCC & Global
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400 sm:text-[10px]">
                    Export Logistics
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT HERO VISUAL
          ======================================================== */}

          <div className="relative lg:col-span-5 flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* Ambient Gold Glow */}
            <div
              className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Visual Wrapper */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/hero.png"
                alt="Sadra Saleh Premium Saffron and Rosebuds Export Supply"
                width={1000}
                height={800}
                loading="eager"
                fetchPriority="high"
                className="
                  relative z-10
                  w-full
                  max-w-[540px]
                  lg:max-w-none
                  h-auto
                  object-contain
                  drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                "
              />
            </div>

            {/* Export Badge */}
            <div className="absolute bottom-2 left-2 sm:left-4 z-20 rounded-2xl border border-[#D4AF37]/30 bg-[#121212]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5 sm:py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6B1224]/60 border border-[#D4AF37]/30">
                  <Globe2 className="h-4 w-4 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                    Farm-To-Export Ready
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-300">
                    Direct Isfahan Wholesale Sourcing
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Transition Gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#121212] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}