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

            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            <div className="absolute z-20 left-0 bottom-20 h-full w-full flex px-10 text-white items-end">
                {/* Left — headline */}
                <div className="max-w-[600px] space-y-6">
                    <h1 className="text-[50px] font-bold leading-[1.15]">
                        Accelerating Growth with AI-Powered Marketing &amp; Software Solutions
                    </h1>
                    <p className="text-[16px] leading-7 text-gray-300">
                        Empowering businesses to shape their future — helping startups and enterprises
                        turn their thoughts into reality with custom software and marketing solutions
                        designed to power the next phase of growth.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-blue-600 hover:bg-blue-700 font-semibold text-white px-7 py-4 rounded-full transition-colors duration-200"
                    >
                        Let&apos;s Grow Your Business
                    </a>
                </div>

                {/* Right — AI Partners */}
                <div className="ml-auto">
                    <h3 className="font-semibold uppercase text-[13px] tracking-widest text-gray-400 mb-3">
                        Official AI Partners
                    </h3>
                    <ul className="flex items-center gap-4">
                        <li>
                            <img
                                className="h-7 filter invert"
                                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/OpenAI_wordmark_2017.svg/3840px-OpenAI_wordmark_2017.svg.png"
                                alt="OpenAI"
                            />
                        </li>
                        <li className="text-gray-600 text-2xl">|</li>
                        <li>
                            <img
                                className="h-5 filter invert"
                                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/3840px-Anthropic_logo.svg.png"
                                alt="Anthropic"
                            />
                        </li>
                    </ul>
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
                        <div className="inline-block">
                            <a
                                href="#"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
                            >
                                Free Consultation
                            </a>
                            <p className="text-gray-400 text-[14px] mt-2">Flexible Engagement Model</p>
                        </div>
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