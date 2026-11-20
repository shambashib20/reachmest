'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const industries = [
    { label: 'Healthcare', img: '/industries/healthcare.jpg', large: true },
    { label: 'Finance & Fintech', img: '/industries/finance.jpg' },
    { label: 'E-commerce & Retail', img: '/industries/retail.jpg' },
    { label: 'Real Estate', img: '/industries/realestate.jpg' },
    { label: 'Education & EdTech', img: '/industries/education.jpg' },
    { label: 'Travel & Hospitality', img: '/industries/travel.jpg' },
    { label: 'Sports & Fitness', img: '/industries/sports.jpg' },
    { label: 'Technology & SaaS', img: '/industries/technology.jpg', large: true },
    { label: 'Food & Beverage', img: '/industries/food.jpg' },
    { label: 'Manufacturing', img: '/industries/manufacturing.jpg' },
    { label: 'Professional Services', img: '/industries/professional.jpg' },
    { label: 'Logistics', img: '/industries/logistics.jpg' },
    { label: 'Beauty & Wellness', img: '/industries/beauty.jpg' },
]

export default function IndustriesSection() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (dir: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir === 'right' ? 480 : -480, behavior: 'smooth' })
        }
    }

    // Chunk into groups: 1 large + 6 small
    const groups = [
        { large: industries[0], small: industries.slice(1, 7) },
        { large: industries[7], small: industries.slice(8, 13) },
    ]

    return (
        <section className="bg-white px-10 py-20">

            {/* Header */}
            <div className="flex items-end justify-between mb-8">
                <div>
                    <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                        Industries
                    </span>
                    <h2 className="text-[38px] font-bold text-gray-900">Industries We Serve</h2>
                    <p className="text-gray-500 text-[15px] mt-2 max-w-lg leading-7">
                        We work with businesses across a wide range of industries, delivering tailored
                        marketing and software solutions built around their specific needs.
                    </p>
                </div>
                <div className="flex gap-2 mb-1">
                    <button
                        onClick={() => scroll('left')}
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide pb-1">

                {groups.map((group, gi) => (
                    <div key={gi} className="flex gap-3 shrink-0">

                        {/* Large Card */}
                        <div className="relative shrink-0 w-[280px] h-[380px] rounded-2xl overflow-hidden">
                            <img
                                src={group.large.img}
                                alt={group.large.label}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-white font-semibold text-[16px]">
                                {group.large.label}
                            </span>
                        </div>

                        {/* Small Cards Grid */}
                        <div className="grid grid-cols-3 grid-rows-2 gap-3 shrink-0">
                            {group.small.slice(0, 6).map((item, i) => (
                                <div key={i} className="relative w-[180px] h-[183px] rounded-2xl overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <span className="absolute bottom-3 left-3 text-white font-semibold text-[14px]">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}