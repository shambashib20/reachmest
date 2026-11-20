'use client'

import { useState } from 'react'
import { Globe, BarChart2, Search, FileText, PenTool, Link, Star, ArrowRight } from 'lucide-react'

const services = [
    { id: 1, icon: <Star size={18} />, label: 'AI Search Optimization' },
    { id: 2, icon: <Globe size={18} />, label: 'Google Business Profile' },
    { id: 3, icon: <Search size={18} />, label: 'Technical SEO Audit' },
    { id: 4, icon: <BarChart2 size={18} />, label: 'SEO Analysis' },
    { id: 5, icon: <FileText size={18} />, label: 'SEO Consulting' },
    { id: 6, icon: <PenTool size={18} />, label: 'SEO Copywriting' },
    { id: 7, icon: <FileText size={18} />, label: 'Blogging Services' },
    { id: 8, icon: <Link size={18} />, label: 'Link Building' },
    { id: 9, icon: <Star size={18} />, label: 'Digital PR' },
    { id: 10, icon: <Globe size={18} />, label: 'Website Migration' },
]

export default function ServicesSection() {
    const [active, setActive] = useState(1)
    const current = services.find(s => s.id === active)

    return (
        <section className="bg-white px-10 py-20">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-[38px] font-bold text-gray-900">
                    Comprehensive services, <span className="text-yellow-500 italic">so no opportunity is missed.</span>
                </h2>
                <p className="text-gray-500 text-[16px] mt-3 max-w-xl mx-auto leading-7">
                    Get peace of mind knowing that with Reachmest as your partner, every part of your strategy is handled.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 bg-[#1a1f2e] rounded-2xl p-4">

                {/* Left Tab List */}
                <ul className="flex flex-col gap-1 w-[260px] shrink-0">
                    {services.map(service => (
                        <li key={service.id}>
                            <button
                                onClick={() => setActive(service.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-colors duration-200 text-left
                                    ${active === service.id
                                        ? 'bg-[#2a3047] text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-[#2a3047]/50'
                                    }`}
                            >
                                {service.icon}
                                {service.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right Content */}
                <div className="flex-1 bg-[#2a3047] rounded-xl p-8 flex gap-8">
                    <div className="flex-1">
                        <h3 className="text-white text-[26px] font-bold mb-4">{current?.label}</h3>
                        <p className="text-gray-400 text-[15px] leading-7 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-[15px]">
                            {current?.label} <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Visual */}
                    <div className="w-[200px] shrink-0 flex flex-col items-center justify-center bg-[#1a1f2e] rounded-xl p-6 gap-4">
                        <div className="text-yellow-500 w-14 h-14 flex items-center justify-center bg-yellow-500/10 rounded-xl">
                            {current?.icon}
                        </div>
                        <span className="text-white text-[14px] font-medium text-center">{current?.label}</span>
                    </div>
                </div>

            </div>
        </section>
    )
}