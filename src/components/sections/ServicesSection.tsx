'use client'

import { useState, useRef, useEffect } from 'react'
import {
    Megaphone, Search, Bot, BarChart2, FileText,
    Share2, Zap, TrendingUp, Tag, Globe, Smartphone,
    ArrowRight
} from 'lucide-react'

const TITLE_H = 220  // approx title section height (px) — sticky activates after this
const ITEM_H = 64   // fixed height per list item (px)
const ITEM_SCROLL = 130  // scroll range per service (px)

const services = [
    { id: 1, icon: Megaphone, label: 'Digital Marketing', heading: 'Digital Marketing Services', description: 'Grow online with SEO, performance marketing, social media, website development and content marketing. We create AI-powered strategies tailored to your goals and budget. Get started today and win more customers.', cta: 'Accelerate Business Growth' },
    { id: 2, icon: Search, label: 'SEO Services', heading: 'SEO Services', description: 'Boost organic visibility with expert SEO from Reachmest, including keyword research, technical fixes and content optimisation. Get started today to grow your search presence.', cta: 'Boost Your Visibility' },
    { id: 3, icon: Bot, label: 'AI Marketing', heading: 'AI Marketing Services', description: 'Make marketing smarter with our AI-powered solutions for research, content, automation and campaign insights. Improve efficiency and drive better marketing performance with intelligent strategies.', cta: 'Unlock Your AI Advantage' },
    { id: 4, icon: BarChart2, label: 'Performance Marketing', heading: 'Performance Marketing', description: 'Turn clicks into customers with data-led ads. We use AI targeting, creative testing and optimisation to improve campaigns and attract quality leads for business growth.', cta: 'Maximize Your ROI' },
    { id: 5, icon: FileText, label: 'Content Marketing', heading: 'Content Marketing', description: "Create content that connects and converts with Reachmest's AI-powered content marketing, from SEO blogs to website copy. Build trust and attract customers with content that works.", cta: 'Make Your Content Count' },
    { id: 6, icon: Share2, label: 'Social Media', heading: 'Social Media Marketing', description: 'Grow your brand with social media marketing from Reachmest, creating engaging content and stronger connections. Build awareness, spark new conversations and generate quality leads.', cta: 'Amplify Your Brand' },
    { id: 7, icon: Zap, label: 'AI Search Optimization', heading: 'AI Search Optimization', description: "Improve your brand's visibility across AI-powered search platforms through strategic content optimization, relevant information and structured data that strengthen search presence.", cta: 'Boost Your AI Visibility' },
    { id: 8, icon: TrendingUp, label: 'CRO Services', heading: 'CRO Services', description: 'Turn more website visitors into customers with conversion rate optimization. Improve user experience, landing pages and calls to action to increase leads and conversions.', cta: 'Increase Your Conversions' },
    { id: 9, icon: Tag, label: 'White Label Marketing', heading: 'White Label Digital Marketing', description: "Expand your agency's services with our white-label marketing support, including SEO, content, social media and ads, delivered under your brand. Scale with confidence today.", cta: 'Scale Your Agency' },
    { id: 10, icon: Globe, label: 'Web Development', heading: 'Web Development Services', description: "Build a high-performing website with us, combining responsive design, seamless user experiences and smart technology. Ready to grow online? Let's build your website.", cta: 'Elevate Your Website' },
    { id: 11, icon: Smartphone, label: 'App Development', heading: 'Application Development Services', description: 'Build smarter apps with our AI-ready application development services, tailored to your workflows and users. Turn ideas into useful digital tools. Start your project today.', cta: 'Bring Your App to Life' },
]

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [listH, setListH] = useState(0)

    const outerRef = useRef<HTMLDivElement>(null)
    const listWrapRef = useRef<HTMLDivElement>(null)
    const listInnerRef = useRef<HTMLDivElement>(null)
    const progressFillRef = useRef<HTMLDivElement>(null)
    const progressDotRef = useRef<HTMLDivElement>(null)

    /* ── Measure list window ── */
    useEffect(() => {
        const measure = () => {
            if (listWrapRef.current) setListH(listWrapRef.current.offsetHeight)
        }
        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    /* ── Scroll driver ── */
    useEffect(() => {
        const onScroll = () => {
            const el = outerRef.current
            if (!el) return
            const outerTop = el.offsetTop
            /* sticky activates after TITLE_H of page has scrolled away */
            const stickyStart = outerTop + TITLE_H
            const totalScrollable = (services.length - 1) * ITEM_SCROLL
            const scrolled = window.scrollY - stickyStart
            const progress = Math.max(0, Math.min(1, scrolled / totalScrollable))

            /* Direct DOM — list translation */
            if (listInnerRef.current && listH > 0) {
               // Active item ka position: start mein 28% se, end mein 72% tak travel karta hai
const activeY = listH * (0.28 + progress * 0.44)
const ty = activeY - (progress * (services.length - 1) * ITEM_H) - ITEM_H / 2
                listInnerRef.current.style.transform = `translateY(${ty}px)`
            }

            /* Direct DOM — progress bar */
            if (progressFillRef.current) progressFillRef.current.style.height = `${progress * 100}%`
            if (progressDotRef.current) progressDotRef.current.style.top = `${progress * 100}%`

            /* React state — active index only */
            const index = Math.min(Math.round(progress * (services.length - 1)), services.length - 1)
            setActiveIndex(prev => prev !== index ? index : prev)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [listH])

    const scrollToService = (i: number) => {
        const el = outerRef.current
        if (!el) return
        const stickyStart = el.offsetTop + TITLE_H
        window.scrollTo({ top: stickyStart + i * ITEM_SCROLL, behavior: 'smooth' })
    }

   const initTY = listH > 0 ? listH * 0.28 - ITEM_H / 2 : 0

    /* Outer height = title     scrolls away + viewport fills + scroll range */
    const outerH = `calc(${TITLE_H}px + 100vh + ${(services.length - 1) * ITEM_SCROLL}px)`

    return (
        <div ref={outerRef} style={{ height: outerH }}>

            {/* ── Title — scrolls with page, disappears before sticky ── */}
            <div className="text-center pt-14 pb-8 px-10">
                <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/30
          text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4">
                    What We Do
                </div>
                <h2 className="text-[36px] font-bold text-white leading-tight">
                    Comprehensive services,{' '}
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        so no opportunity is missed.
                    </span>
                </h2>
                <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-relaxed">
                    Power your growth with AI-driven marketing and software development,
                    boosting visibility and building scalable digital solutions.
                </p>
            </div>

            {/* ── 3-column sticky body — activates after title scrolls up ── */}
            <div className="sticky top-0 h-screen bg-[#080B12] overflow-hidden">
                <div className="h-full px-4 py-4">
                    <div
                        className="h-full rounded-[20px] border border-white/[0.07] flex items-stretch gap-6 px-6"
                        style={{ background: 'rgba(8,15,35,0.6)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
                    >

                        {/* LEFT: icon */}
                        <div className="w-[270px] shrink-0 flex flex-col justify-center items-center gap-4">
                            <div
                                className="relative w-[230px] h-[230px] rounded-[28px] border border-cyan-400/20"
                                style={{
                                    background: 'rgba(15,30,44,0.85)',
                                    boxShadow: '0 0 50px rgba(56,189,248,0.1), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                                }}
                            >
                                {services.map((svc, i) => {
                                    const SvcIcon = svc.icon
                                    return (
                                        <div key={svc.id} className="absolute inset-0 flex items-center justify-center"
                                            style={{ opacity: i === activeIndex ? 1 : 0, transition: 'opacity 0.4s ease' }}>
                                            <SvcIcon size={56} strokeWidth={1.5} className="text-blue-400" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="relative h-5 w-full text-center">
                                {services.map((svc, i) => (
                                    <p key={svc.id} className="absolute inset-x-0 text-[12px] font-medium text-gray-400 text-center"
                                        style={{ opacity: i === activeIndex ? 1 : 0, transition: 'opacity 0.4s ease' }}>
                                        {svc.label}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* CENTER: scrolling list + bar */}
                        <div className="flex-1 flex gap-4 py-6">

                            {/* List window */}
                            <div
                                ref={listWrapRef}
                                className="flex-1 overflow-hidden"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                                }}
                            >
                                <div ref={listInnerRef} style={{ transform: `translateY(${initTY}px)` }}>
                                    {services.map((svc, i) => {
                                        const diff = i - activeIndex
                                        const absD = Math.abs(diff)
                                        const isActive = diff === 0
                                        return (
                                            <button
                                                key={svc.id}
                                                onClick={() => scrollToService(i)}
                                                className="flex items-center justify-center w-full cursor-pointer"
                                                style={{ height: `${ITEM_H}px` }}
                                            >
                                                <span style={{
                                                    fontSize: `${isActive ? 46 : Math.max(13, 30 - absD * 5)}px`,
                                                    fontWeight: isActive ? 800 : 400,   // was 700, now 800
                                                    color: '#f0f4ff',
                                                    opacity: isActive ? 1 : Math.max(0.12, 1 - absD * 0.28),
                                                    lineHeight: 1,
                                                    textAlign: 'center',
                                                    transition: 'font-size 0.3s ease, opacity 0.3s ease',
                                                }}>
                                                    {svc.label}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="w-px self-stretch relative" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                <div ref={progressFillRef} className="absolute top-0 left-0 w-full"
                                    style={{ height: '0%', background: 'linear-gradient(to bottom, #3b82f6, #22d3ee)' }} />
                                <div ref={progressDotRef} className="absolute w-[10px] h-[10px] rounded-full"
                                    style={{
                                        left: '50%', top: '0%', transform: 'translateX(-50%) translateY(-50%)',
                                        background: '#22d3ee', boxShadow: '0 0 12px rgba(34,211,238,0.9)'
                                    }} />
                            </div>
                        </div>

                        {/* RIGHT: description */}
                        {/* RIGHT: description */}
                        <div className="w-[440px] shrink-0 flex items-center border-l border-white/[0.05] pl-8">
                            <div className="relative w-full" style={{ minHeight: '260px' }}>
                                {services.map((svc, i) => (
                                    <div key={svc.id} className="absolute top-0 left-0 w-full"
                                        style={{
                                            opacity: i === activeIndex ? 1 : 0, transition: 'opacity 0.4s ease',
                                            pointerEvents: i === activeIndex ? 'auto' : 'none'
                                        }}>
                                        <h3 className="text-white text-[22px] font-bold mb-4 leading-snug">{svc.heading}</h3>
                                        <p className="text-gray-400 text-[14px] leading-[1.9] mb-8">{svc.description}</p>
                                        <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500
                      text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-[14px]">
                                            {svc.cta} <ArrowRight size={15} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}