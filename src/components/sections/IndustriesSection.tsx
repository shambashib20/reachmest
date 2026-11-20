'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const industries = [
    { label: 'Healthcare', img: '/industries/healthcare.jpg', large: true },
    { label: 'Finance', img: '/industries/finance.jpg' },
    { label: 'Retail', img: '/industries/retail.jpg' },
    { label: 'Sports', img: '/industries/sports.jpg' },
    { label: 'Real Estate', img: '/industries/realestate.jpg' },
    { label: 'Education', img: '/industries/education.jpg' },
    { label: 'Travel', img: '/industries/travel.jpg' },
]

export default function IndustriesSection() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (dir: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir === 'right' ? 400 : -400, behavior: 'smooth' })
        }
    }

    return (
        <section className="bg-white px-10 py-20">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[32px] font-bold text-gray-900">Industries We Build For</h2>
                <div className="flex gap-2">
                    <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide">

                {/* Large Card */}
                <div className="relative shrink-0 w-[280px] h-[380px] rounded-2xl overflow-hidden">
                    <img src={industries[0].img} alt={industries[0].label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-semibold text-[16px]">{industries[0].label}</span>
                </div>

                {/* Small Cards Grid */}
                <div className="grid grid-cols-3 grid-rows-2 gap-3 shrink-0">
                    {industries.slice(1).map((item, i) => (
                        <div key={i} className="relative w-[180px] h-[183px] rounded-2xl overflow-hidden">
                            <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <span className="absolute bottom-3 left-3 text-white font-semibold text-[14px]">{item.label}</span>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}