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
              {/* <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[12px] font-medium px-3.5 py-1.5 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                AI-Powered Marketing &amp; Software Agency
              </div> */}

              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[54px] font-bold leading-[1.15] tracking-tight text-white">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Strategic Partner
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  for Growth
                </span>{" "}
                in the
                <br />
                AI Era
              </h1>

              <p className="text-[14px] leading-[1.85] text-gray-300 max-w-[520px]">
                Our AI-powered marketing and software development solutions help
                bring visionary ideas and plans into life. We give businesses
                the opportunity to expand and scale into the future with our
                expertise in software, digital and data solutions.
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
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
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
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,174,255,0.15), transparent 65%)",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-blue-400 text-[54px] font-bold leading-none">
                    98%
                  </p>
                  <p className="text-gray-200 text-[14px] font-medium mt-3">
                    Client Retention Rate
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-green-400 text-[12px] font-medium">
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
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
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,174,255,0.15), transparent 65%)",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-cyan-400 text-[50px] font-bold leading-none">
                    55+
                  </p>
                  <p className="text-gray-200 text-[13px] font-medium mt-3">
                    Projects Delivered
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-blue-400 text-[12px] font-medium">
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
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
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 24px rgba(56,189,248,0.07)",
                }}
              >
                <div
                  className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,174,255,0.07), transparent 60%)",
                  }}
                />
                <div
                  className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,174,255,0.20), transparent 65%)",
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-blue-400 text-[54px] font-bold leading-none">
                      15+
                    </p>
                    <p className="text-gray-200 text-[14px] font-medium mt-3">
                      Years of Combined Expertise
                    </p>
                    <p className="mt-1.5 text-gray-400 text-[13px]">
                      Software · Marketing · Data
                    </p>
                  </div>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
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
                <p className="text-gray-400 text-[14px] mt-1">
                  Years of Combined Experience
                </p>
              </li>
              <li className="flex-1 px-10">
                <h2 className="text-white text-[34px] font-bold">
                  Free Consultation
                </h2>
                <p className="text-gray-400 text-[14px] mt-2">
                  Flexible Engagement Model
                </p>
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

              <h2 className="text-[28px] sm:text-[42px] lg:text-[46px] xl:text-[54px] font-bold leading-[1.15] tracking-tight text-white mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Reachmest:
                </span>
                <br />
                Building
                {/* <br /> */}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Smarter Digital Futures
                </span>{" "}
                Through Marketing & Technology
              </h2>
              {/* <h2 className="text-white text-[42px] font-bold leading-tight mb-4">
                Reachmest: Building Smarter Digital Futures Through Marketing
                &amp; Technology
              </h2> */}
              <p className="text-gray-400 text-[15px] leading-7 mb-10">
                As a modern, integrated Marketing & Technology firm, our focus
                is to provide cutting edge digital marketing and software
                development solutions that boost the visibility of our clients
                and help attract the right quality leads, and develop
                intelligent digital solutions at scale.
              </p>

              <ul className="divide-y divide-gray-800">
                <li className="py-5 flex items-center gap-60">
                  <span className="text-white text-[52px] font-bold w-32">
                    55+
                  </span>
                  <span className="text-gray-300 font-bold text-[20px]">
                    Marketing Experts
                  </span>
                </li>
                <li className="py-5 flex items-center gap-60">
                  <span className="text-white text-[52px] font-bold w-32">
                    52+
                  </span>
                  <span className="text-gray-300 font-bold text-[20px]">
                    Vetted Developers
                  </span>
                </li>
                <li className="py-5 flex items-center gap-60">
                  <span className="text-white text-[52px] font-bold w-32">
                    75+
                  </span>
                  <span className="text-gray-300 font-bold text-[20px]">
                    Global Clients
                  </span>
                </li>
                <li className="py-5 flex items-center gap-60">
                  <span className="text-white text-[52px] font-bold w-32">
                    10+
                  </span>
                  <span className="text-gray-300 font-bold text-[20px]">
                    Countries
                  </span>
                </li>
              </ul>
            </div>

            {/* Right - visual */}
            <div className="flex-1 flex justify-center items-center">
              <svg
                viewBox="0 0 480 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[480px]"
              >
                {/* Background glow */}
                <ellipse
                  cx="240"
                  cy="180"
                  rx="200"
                  ry="150"
                  fill="rgba(59,130,246,0.04)"
                />

                {/* Grid lines */}
                {[60, 120, 180, 240, 300].map((y) => (
                  <line
                    key={y}
                    x1="60"
                    y1={y}
                    x2="440"
                    y2={y}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                ))}
                {[60, 160, 260, 360, 440].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="40"
                    x2={x}
                    y2="300"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                ))}

                {/* Area fill under curve */}
                <path
                  d="M60 260 C110 240, 160 220, 210 190 C260 160, 310 120, 360 90 C390 72, 420 65, 440 60 L440 300 L60 300 Z"
                  fill="url(#areaGrad)"
                  opacity="0.35"
                />

                {/* Main growth curve */}
                <path
                  d="M60 260 C110 240, 160 220, 210 190 C260 160, 310 120, 360 90 C390 72, 420 65, 440 60"
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Secondary dashed curve */}
                <path
                  d="M60 280 C120 265, 180 250, 240 230 C300 210, 360 180, 440 155"
                  stroke="rgba(99,179,237,0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                />

                {/* Data points */}
                {[
                  { cx: 60, cy: 260 },
                  { cx: 160, cy: 220 },
                  { cx: 260, cy: 160 },
                  { cx: 360, cy: 90 },
                  { cx: 440, cy: 60 },
                ].map(({ cx, cy }, i) => (
                  <g key={i}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r="6"
                      fill="#0f172a"
                      stroke="rgba(96,165,250,0.9)"
                      strokeWidth="2"
                    />
                    <circle cx={cx} cy={cy} r="3" fill="rgba(96,165,250,0.9)" />
                  </g>
                ))}

                {/* Stat callout cards */}
                {/* Card: 55+ */}
                <g>
                  <rect
                    x="60"
                    y="20"
                    width="90"
                    height="38"
                    rx="8"
                    fill="rgba(15,30,60,0.85)"
                    stroke="rgba(59,130,246,0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x="80"
                    y="37"
                    fill="rgba(96,165,250,1)"
                    fontSize="13"
                    fontWeight="700"
                  >
                    55+
                  </text>
                  <text x="100" y="37" fill="rgba(156,163,175,1)" fontSize="10">
                    Experts
                  </text>
                  <text x="80" y="50" fill="rgba(156,163,175,0.7)" fontSize="9">
                    Marketing
                  </text>
                </g>

                {/* Card: 75+ */}
                <g>
                  <rect
                    x="295"
                    y="58"
                    width="90"
                    height="38"
                    rx="8"
                    fill="rgba(15,30,60,0.85)"
                    stroke="rgba(59,130,246,0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x="315"
                    y="75"
                    fill="rgba(34,211,238,1)"
                    fontSize="13"
                    fontWeight="700"
                  >
                    75+
                  </text>
                  <text x="335" y="75" fill="rgba(156,163,175,1)" fontSize="10">
                    Clients
                  </text>
                  <text
                    x="315"
                    y="88"
                    fill="rgba(156,163,175,0.7)"
                    fontSize="9"
                  >
                    Global
                  </text>
                </g>

                {/* Card: 52+ */}
                <g>
                  <rect
                    x="175"
                    y="148"
                    width="90"
                    height="38"
                    rx="8"
                    fill="rgba(15,30,60,0.85)"
                    stroke="rgba(59,130,246,0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x="195"
                    y="165"
                    fill="rgba(96,165,250,1)"
                    fontSize="13"
                    fontWeight="700"
                  >
                    52+
                  </text>
                  <text
                    x="215"
                    y="165"
                    fill="rgba(156,163,175,1)"
                    fontSize="10"
                  >
                    Devs
                  </text>
                  <text
                    x="195"
                    y="178"
                    fill="rgba(156,163,175,0.7)"
                    fontSize="9"
                  >
                    Vetted
                  </text>
                </g>

                {/* Y axis label */}
                <text
                  x="30"
                  y="260"
                  fill="rgba(107,114,128,0.8)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Low
                </text>
                <text
                  x="30"
                  y="80"
                  fill="rgba(107,114,128,0.8)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  High
                </text>

                {/* X axis label */}
                <text
                  x="60"
                  y="318"
                  fill="rgba(107,114,128,0.8)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Y1
                </text>
                <text
                  x="260"
                  y="318"
                  fill="rgba(107,114,128,0.8)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Y3
                </text>
                <text
                  x="440"
                  y="318"
                  fill="rgba(107,114,128,0.8)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Y5
                </text>

                {/* Legend */}
                <circle cx="130" cy="338" r="4" fill="rgba(96,165,250,0.9)" />
                <text
                  x="140"
                  y="342"
                  fill="rgba(156,163,175,0.8)"
                  fontSize="10"
                >
                  Growth Trajectory
                </text>
                <circle cx="260" cy="338" r="4" fill="rgba(99,179,237,0.5)" />
                <text
                  x="270"
                  y="342"
                  fill="rgba(156,163,175,0.8)"
                  fontSize="10"
                >
                  Industry Average
                </text>

                <defs>
                  <linearGradient
                    id="lineGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(96,165,250,0.6)" />
                    <stop offset="100%" stopColor="rgba(34,211,238,1)" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </>
    );
}