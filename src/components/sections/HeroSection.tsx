'use client'

import dynamic from 'next/dynamic'

const HeroVideo = dynamic(() => import('../HeroVideo'), {
    ssr: false
})

export default function HeroSection() {
    return (
        <>
        <section className="relative h-screen w-full overflow-hidden ">
            <HeroVideo />
            <div className="absolute z-10 left-0 bottom-20 h-full w-full flex   px-10 text-white items-end">
                <div className='max-w-[590px] space-y-6'>
                        <h1 className="text-[50px] font-bold leading-16">Engineering the Next Generation of Digital Systems with AI</h1>
                    <p className='text-[16px] leading-7 text-left'>Reachmest engineers secure,scalable systems by combining architecture, data enegineering, and AI in partnership with OpenAI and Anthropic, helping organizations move from strategy to reliable systems in production.</p>
                    <a href="" className='inline-block bg-blue-500 hover:bg-blue-600 font-semibold text-white px-4 py-4 rounded-full transition-colors duration-200'>Consult Our Stratergy Team</a>
                </div>
                  <div className="box ml-auto">
                    

                    <h3 className='font-semibold uppercase text-[16px] mb-3'>Offical AI Partners</h3>
                    <ul className='flex gap-3'>
                        <li><img className='h-7 filter invert' src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/OpenAI_wordmark_2017.svg/3840px-OpenAI_wordmark_2017.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" /></li>
                        <li><img className='h-4 filter invert mt-1.5' src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/3840px-Anthropic_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" /></li>
                    </ul>
                </div>

              
            </div>
        </section>

            <section className="bg-[#0d1117] border-t border-gray-800">
            <div className="px-10 py-12">
                <ul className="flex items-center divide-x divide-gray-700">
                    <li className="flex-1 px-10">
                        <h2 className="text-white text-[36px] font-bold">20,000+</h2>
                        <p className="text-gray-400 text-[15px] mt-1">Proven operators</p>
                    </li>
                    <li className="flex-1 px-10">
                        <h2 className="text-white text-[36px] font-bold">3 days</h2>
                        <p className="text-gray-400 text-[15px] mt-1">To your first match</p>
                    </li>
                    <li className="flex-1 px-10">
                        <h2 className="text-white text-[36px] font-bold">98%</h2>
                        <p className="text-gray-400 text-[15px] mt-1">Match success rate</p>
                    </li>
                    <li className="flex-1 px-10">
                        <h2 className="text-white text-[36px] font-bold">$0</h2>
                        <p className="text-gray-400 text-[15px] mt-1">No deposit to start</p>
                    </li>
                </ul>
            </div>
        </section>

         <section className="bg-black px-10 py-20">
            <div className="flex items-center gap-16">

                {/* Left */}
                <div className="flex-1">
                    <span className="text-gray-500 text-[12px] uppercase tracking-widest mb-4 inline-block">/// Number Keys</span>
                    <h2 className="text-white text-[42px] font-bold leading-tight mb-4">
                        Reachmest - Transforming Digital Landscape Through Innovation
                    </h2>
                    <p className="text-gray-400 text-[15px] leading-7 mb-10">
                        The Web, Mobile, and Enterprise Application development company with a vetted team with expertise in various industries. We help businesses maximize their return on software investment, powered by a wide range of technologies.
                    </p>

                    <ul className="divide-y divide-gray-800">
                        <li className="py-5 flex items-center gap-8">
                            <span className="text-white text-[52px] font-bold w-32">54+</span>
                            <span className="text-gray-300 text-[16px]">Vetted Developers</span>
                        </li>
                        <li className="py-5 flex items-center gap-8">
                            <span className="text-white text-[52px] font-bold w-32">76+</span>
                            <span className="text-gray-300 text-[16px]">Global Customers</span>
                        </li>
                        <li className="py-5 flex items-center gap-8">
                            <span className="text-white text-[52px] font-bold w-32">12+</span>
                            <span className="text-gray-300 text-[16px]">Countries Clients</span>
                        </li>
                    </ul>
                </div>

                {/* Right - 3D Visual */}
                <div className="flex-1 flex justify-center items-center">
                    <img src="/stats-visual.png" alt="3D Visual" className="w-full max-w-[500px]" />
                </div>

            </div>
        </section>
        </>
    )
}