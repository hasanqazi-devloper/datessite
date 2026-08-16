import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Globe2, BadgeCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      {/* Main emerald glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Secondary glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-emerald-400/5 blur-[110px]"
        aria-hidden="true"
      />

      {/* Very subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32">
        {/* =========================================================
            TRUST PILL
        ========================================================== */}

        {/* <div className="mb-8 flex">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-900/50 px-4 py-2 shadow-sm backdrop-blur-md">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300 sm:text-xs">
              Certified Global Synthetic Fiber Exporter
            </span>
          </div>
        </div> */}

        {/* =========================================================
            MAIN HERO GRID
        ========================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}

          <div className="lg:col-span-7">
            {/* Main Heading */}
            <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
              Premium Polyester Fibers for{" "}
              <span className="text-emerald-400">
                Global Manufacturers
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-100/75 sm:text-lg sm:leading-8">
              Direct factory supply of high-grade{" "}
              <span className="font-normal text-white">
                Solid, Hollow Conjugated, and Cotton-Type
              </span>{" "}
              staple fibers engineered for consistent performance, reliable
              specifications, and global textile production.
            </p>

            {/* Buyer Audience */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-emerald-200/70 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Factory className="h-4 w-4 text-emerald-400" />
                Spinning Mills
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-emerald-600 sm:block" />

              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400" />
                Textile Manufacturers
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-emerald-600 sm:block" />

              <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-emerald-400" />
                Global Buyers
              </span>
            </div>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <Link
                href="#rfq-section"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-400/25 sm:px-8 sm:text-base"
              >
                <span>Request a Quote</span>

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/products"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-emerald-700/70 bg-emerald-900/30 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/70 hover:bg-emerald-900/60 sm:px-8 sm:text-base"
              >
                <span>Explore Our Fibers</span>

                <ArrowRight className="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* =====================================================
                METRICS
            ====================================================== */}

            <div className="mt-10 border-t border-emerald-800/60 pt-7">
              <div className="grid grid-cols-3 gap-4 sm:max-w-xl sm:gap-8">
                {/* Metric 1 */}
                <div>
                  <div className="text-2xl font-extrabold tracking-tight text-emerald-400 sm:text-3xl">
                    100%
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-100/55 sm:text-[10px]">
                    Quality Focus
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="border-l border-emerald-800/60 pl-4 sm:pl-8">
                  <div className="text-2xl font-extrabold tracking-tight text-emerald-400 sm:text-3xl">
                    24/7
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-100/55 sm:text-[10px]">
                    Export Support
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="border-l border-emerald-800/60 pl-4 sm:pl-8">
                  <div className="text-2xl font-extrabold tracking-tight text-emerald-400 sm:text-3xl">
                    Global
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-100/55 sm:text-[10px]">
                    Delivery Network
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT HERO VISUAL (FIXED ALIGNMENT)
          ======================================================== */}

          <div className="relative lg:col-span-5 flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* Ambient emerald glow */}
            <div
              className="absolute inset-0 rounded-full bg-emerald-500/10 blur-[90px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Main visual wrapper */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/heroimg.png"
                alt="Premium polyester fibers and global export supply"
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
                  drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                "
              />
            </div>

            {/* Export badge */}
            <div className="absolute bottom-2 left-2 sm:left-4 z-20 rounded-2xl border border-emerald-400/20 bg-emerald-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5 sm:py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15">
                  <Globe2 className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                    Export-Ready Supply
                  </p>

                  <p className="mt-0.5 text-[11px] text-emerald-100/65">
                    Built for global textile manufacturing
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM TRANSITION
      ========================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-950 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}