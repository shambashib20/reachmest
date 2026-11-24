'use client'

import dynamic from 'next/dynamic'

const HeroVideo = dynamic(() => import('../HeroVideo'), {
    ssr: false
})

export default function HeroSection() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative h-screen w-full overflow-hidden">
                <HeroVideo />

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                <div className="absolute z-20 inset-0 flex items-center px-6 md:px-10 lg:px-16">

                    {/* ── Left ── */}
                    <div className="flex-1 max-w-[560px] space-y-5 mt-16">

                        <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[12px] font-medium px-3.5 py-1.5 rounded-full w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            AI-Powered Marketing &amp; Software Agency
                        </div>

                        <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[54px] font-bold leading-[1.15] tracking-tight text-white">
                            Your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Strategic Partner
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                for Growth
                            </span>{" "}in the
                            <br />
                            AI Era
                        </h1>

                        <p className="text-[14px] leading-[1.85] text-gray-300 max-w-[520px]">
                            Our AI-powered marketing and software development solutions help bring
                            visionary ideas and plans into life. We give businesses the opportunity
                            to expand and scale into the future with our expertise in software,
                            digital and data solutions.
                        </p>

                        <div className="flex items-center gap-4 pt-1">
                            {/* Primary CTA — subtle blue shadow */}
                            <a
                                href="#"
                                className="inline-block bg-blue-600 hover:bg-blue-700 font-semibold text-white
            px-6 py-3.5 rounded-full text-[14px] transition-all duration-300
            shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                            >
                                Let&apos;s Grow Your Business
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-[14px] transition-colors duration-200 group"
                            >
                                View Our Work
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                   {/* ── Right — 3 big glowing glassmorphism cards ── */}
{/* ── Right — 3 glowing glassmorphism cards ── */}
<div className="hidden lg:block relative w-[460px] h-[400px] shrink-0 ml-auto mt-16">

  {/* Card 1 — 98% — large, top-left */}
  <div
    className="absolute top-0 left-0 z-10 overflow-hidden rounded-[22px] p-7 w-[250px]
      backdrop-blur-[16px] border border-[rgba(56,189,248,0.2)] hover:border-[rgba(0,195,255,0.6)]
      hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
    style={{
      background: "rgba(15,30,44,0.72)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
    }}
  >
    <div
      className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: "radial-gradient(circle, rgba(0,174,255,0.15), transparent 65%)" }}
    />
    <div className="relative z-10">
      <p className="text-blue-400 text-[54px] font-bold leading-none">98%</p>
      <p className="text-gray-200 text-[14px] font-medium mt-3">Client Retention Rate</p>
      <div className="mt-3 flex items-center gap-1.5 text-green-400 text-[12px] font-medium">
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        Consistently maintained
      </div>
    </div>
  </div>

  {/* Card 2 — 55+ — overlaps Card 1 right, slightly lower */}
  <div
    className="absolute top-[28px] left-[214px] z-20 overflow-hidden rounded-[22px] p-6 w-[225px]
      backdrop-blur-[16px] border border-[rgba(56,189,248,0.2)] hover:border-[rgba(0,195,255,0.6)]
      hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
    style={{
      background: "rgba(15,30,44,0.72)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
    }}
  >
    <div
      className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: "radial-gradient(circle, rgba(0,174,255,0.15), transparent 65%)" }}
    />
    <div className="relative z-10">
      <p className="text-cyan-400 text-[50px] font-bold leading-none">55+</p>
      <p className="text-gray-200 text-[13px] font-medium mt-3">Projects Delivered</p>
      <div className="mt-3 flex items-center gap-1.5 text-blue-400 text-[12px] font-medium">
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        10+ industries
      </div>
    </div>
  </div>

  {/* Card 3 — 15+ — wide accent, centered below both, with overlap */}
  <div
    className="absolute top-[170px] left-[48px] z-30 overflow-hidden rounded-[22px] p-7 w-[345px]
      backdrop-blur-[16px] border border-[rgba(56,189,248,0.3)] hover:border-[rgba(0,195,255,0.7)]
      hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
    style={{
      background: "rgba(10,25,50,0.82)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 24px rgba(56,189,248,0.07)",
    }}
  >
    <div
      className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none opacity-100"
      style={{ background: "radial-gradient(circle, rgba(0,174,255,0.07), transparent 60%)" }}
    />
    <div
      className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: "radial-gradient(circle, rgba(0,174,255,0.20), transparent 65%)" }}
    />
    <div className="relative z-10 flex items-center justify-between">
      <div>
        <p className="text-blue-400 text-[54px] font-bold leading-none">15+</p>
        <p className="text-gray-200 text-[14px] font-medium mt-3">Years of Combined Expertise</p>
        <p className="mt-1.5 text-gray-400 text-[13px]">Software · Marketing · Data</p>
      </div>
      <div className="shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>

</div>

                </div>
            </section>

            {/* ── STATS BAR ────────────────────────────────────── */}
            <section className="bg-[#0d1117] border-t border-gray-800">
                <div className="px-10 py-10">
                    <ul className="flex items-center divide-x divide-gray-700">
                        <li className="flex-1 px-10">
                            <h2 className="text-white text-[34px] font-bold">98%</h2>
                            <p className="text-gray-400 text-[14px] mt-1">Retention Rate</p>
                        </li>
                        <li className="flex-1 px-10">
                            <h2 className="text-white text-[34px] font-bold">$9/hr</h2>
                            <p className="text-gray-400 text-[14px] mt-1">Starting Cost</p>
                        </li>
                        <li className="flex-1 px-10">
                            <h2 className="text-white text-[34px] font-bold">15+</h2>
                            <p className="text-gray-400 text-[14px] mt-1">Years of Combined Experience</p>
                        </li>
                        <li className="flex-1 px-10">
                            <a
                                href="#"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
                            >
                                Free Consultation
                            </a>
                            <p className="text-gray-400 text-[14px] mt-2">Flexible Engagement Model</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* ── ABOUT / NUMBERS ──────────────────────────────── */}
            <section className="bg-black px-10 py-20">
                <div className="flex items-center gap-16">

                    {/* Left */}
                    <div className="flex-1">
                        <span className="text-gray-500 text-[12px] uppercase tracking-widest mb-4 inline-block">
                        /// Who We Are
                        </span>
                        <h2 className="text-white text-[42px] font-bold leading-tight mb-4">
                            Reachmest: Building Smarter Digital Futures Through Marketing &amp; Technology
                        </h2>
                        <p className="text-gray-400 text-[15px] leading-7 mb-10">
                            Accelerate growth with our AI-powered digital marketing and software development.
                            We boost visibility, attract quality leads and build smart digital solutions
                            that move your business forward at scale.
                        </p>

                        <ul className="divide-y divide-gray-800">
                            <li className="py-5 flex items-center gap-8">
                                <span className="text-white text-[52px] font-bold w-32">55+</span>
                                <span className="text-gray-300 text-[16px]">Marketing Experts</span>
                            </li>
                            <li className="py-5 flex items-center gap-8">
                                <span className="text-white text-[52px] font-bold w-32">52+</span>
                                <span className="text-gray-300 text-[16px]">Vetted Developers</span>
                            </li>
                            <li className="py-5 flex items-center gap-8">
                                <span className="text-white text-[52px] font-bold w-32">75+</span>
                                <span className="text-gray-300 text-[16px]">Global Clients</span>
                            </li>
                            <li className="py-5 flex items-center gap-8">
                                <span className="text-white text-[52px] font-bold w-32">10+</span>
                                <span className="text-gray-300 text-[16px]">Countries</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right - visual */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src="/stats-visual.png"
                            alt="Reachmest Visual"
                            className="w-full max-w-[500px]"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}