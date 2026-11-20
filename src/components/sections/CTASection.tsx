export default function CTASection() {
    return (
        <section className="relative bg-[#0d1117] px-10 py-24 overflow-hidden">

            {/* Background gradient blob */}
            <div className="absolute right-0 top-0 w-[600px] h-full bg-gradient-to-l from-blue-900/40 via-blue-800/20 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-[540px]">
                <span className="text-gray-400 text-[12px] uppercase tracking-widest mb-4 inline-block">Get Started</span>
                <h2 className="text-white text-[42px] font-bold leading-tight mb-4">
                    Your next project is 3 days away
                </h2>
                <p className="text-gray-400 text-[15px] leading-7 mb-8">
                    Take the short quiz, book your intro call, and meet pre-screened engineers in about 3 days.
                </p>

                <a href="/contact" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-[15px]">
                    Get Started ↗
                </a>

                <p className="text-gray-500 text-[13px] mt-5">
                    No deposit · Dedicated project manager · Revisions at no cost
                </p>
            </div>

        </section>
    )
}