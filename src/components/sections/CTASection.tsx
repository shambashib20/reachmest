export default function CTASection() {
    return (
        <section className="relative bg-[#0d1117] px-10 py-24 overflow-hidden">

            {/* Background gradient blob */}
            <div className="absolute right-0 top-0 w-[600px] h-full bg-gradient-to-l from-blue-900/40 via-blue-800/20 to-transparent pointer-events-none" />
            <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-[560px]">
                <span className="text-blue-400 text-[12px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
                    Get Started
                </span>
                <h2 className="text-white text-[44px] font-bold leading-tight mb-5">
                    Ready to Grow <br />Your Business?
                </h2>
                <p className="text-gray-400 text-[16px] leading-7 mb-8">
                    Partner with Reachmest for AI-powered digital marketing and custom software
                    development solutions that drive growth.
                </p>

                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-[15px]"
                >
                    Get In Touch With Our Experts ↗
                </a>

                <p className="text-gray-600 text-[13px] mt-5">
                    Free consultation · Flexible engagement · No lock-in contracts
                </p>
            </div>

        </section>
    )
}