'use client'

import { useState } from 'react'
import {
    Megaphone, Search, Bot, BarChart2, FileText,
    Share2, Zap, TrendingUp, Tag, Globe, Smartphone,
    ArrowRight
} from 'lucide-react'

const services = [
    {
        id: 1,
        icon: Megaphone,
        label: 'Digital Marketing',
        heading: 'Digital Marketing Services',
        description:
            'Grow online with SEO, performance marketing, social media, website development and content marketing. We create AI-powered strategies tailored to your goals and budget. Get started today and win more customers.',
        cta: 'Accelerate Business Growth',
    },
    {
        id: 2,
        icon: Search,
        label: 'SEO Services',
        heading: 'SEO Services',
        description:
            'Boost organic visibility with expert SEO from Reachmest, including keyword research, technical fixes and content optimisation. Get started today to grow your search presence.',
        cta: 'Boost Your Visibility',
    },
    {
        id: 3,
        icon: Bot,
        label: 'AI Marketing',
        heading: 'AI Marketing Services',
        description:
            'Make marketing smarter with our AI-powered solutions for research, content, automation and campaign insights. Improve efficiency and drive better marketing performance with intelligent strategies.',
        cta: 'Unlock Your AI Advantage',
    },
    {
        id: 4,
        icon: BarChart2,
        label: 'Performance Marketing',
        heading: 'Performance Marketing',
        description:
            'Turn clicks into customers with data-led ads. We use AI targeting, creative testing and optimisation to improve campaigns and attract quality leads for business growth.',
        cta: 'Maximize Your ROI',
    },
    {
        id: 5,
        icon: FileText,
        label: 'Content Marketing',
        heading: 'Content Marketing',
        description:
            'Create content that connects and converts with Reachmest\'s AI-powered content marketing, from SEO blogs to website copy. Build trust and attract customers with content that works.',
        cta: 'Make Your Content Count',
    },
    {
        id: 6,
        icon: Share2,
        label: 'Social Media',
        heading: 'Social Media Marketing',
        description:
            'Grow your brand with social media marketing from Reachmest, creating engaging content and stronger connections. Build awareness, spark new conversations and generate quality leads.',
        cta: 'Amplify Your Brand',
    },
    {
        id: 7,
        icon: Zap,
        label: 'AI Search Optimization',
        heading: 'AI Search Optimization',
        description:
            'Improve your brand\'s visibility across AI-powered search platforms through strategic content optimization, relevant information and structured data that strengthen search presence.',
        cta: 'Boost Your AI Visibility',
    },
    {
        id: 8,
        icon: TrendingUp,
        label: 'CRO Services',
        heading: 'CRO Services',
        description:
            'Turn more website visitors into customers with conversion rate optimization. Improve user experience, landing pages and calls to action to increase leads and conversions.',
        cta: 'Increase Your Conversions',
    },
    {
        id: 9,
        icon: Tag,
        label: 'White Label Marketing',
        heading: 'White Label Digital Marketing',
        description:
            'Expand your agency\'s services with our white-label marketing support, including SEO, content, social media and ads, delivered under your brand. Scale with confidence today.',
        cta: 'Scale Your Agency',
    },
    {
        id: 10,
        icon: Globe,
        label: 'Web Development',
        heading: 'Web Development Services',
        description:
            'Build a high-performing website with us, combining responsive design, seamless user experiences and smart technology. Ready to grow online? Let\'s build your website.',
        cta: 'Elevate Your Website',
    },
    {
        id: 11,
        icon: Smartphone,
        label: 'App Development',
        heading: 'Application Development Services',
        description:
            'Build smarter apps with our AI-ready application development services, tailored to your workflows and users. Turn ideas into useful digital tools. Start your project today.',
        cta: 'Bring Your App to Life',
    },
]

export default function ServicesSection() {
    const [active, setActive] = useState(1)
    const current = services.find(s => s.id === active)!
    const Icon = current.icon

    return (
        <section className="bg-white px-10 py-20">

            {/* Heading */}
            <div className="text-center mb-12">
                <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    What We Do
                </span>
                <h2 className="text-[38px] font-bold text-gray-900">
                    Comprehensive services,{' '}
                    <span className="text-yellow-500 italic">so no opportunity is missed.</span>
                </h2>
                <p className="text-gray-500 text-[16px] mt-3 max-w-2xl mx-auto leading-7">
                    Power your growth with our AI-driven marketing and software development,
                    boosting visibility, generating quality leads and building scalable digital solutions.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 bg-[#1a1f2e] rounded-2xl p-4">

                {/* Left Tab List */}
                <ul className="flex flex-col gap-1 w-[240px] shrink-0">
                    {services.map(service => {
                        const TabIcon = service.icon
                        return (
                            <li key={service.id}>
                                <button
                                    onClick={() => setActive(service.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors duration-200 text-left
                                        ${active === service.id
                                            ? 'bg-[#2a3047] text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-[#2a3047]/50'
                                        }`}
                                >
                                    <TabIcon size={16} className="shrink-0" />
                                    {service.label}
                                </button>
                            </li>
                        )
                    })}
                </ul>

                {/* Right Content */}
                <div className="flex-1 bg-[#2a3047] rounded-xl p-8 flex gap-8">
                    <div className="flex-1">
                        <h3 className="text-white text-[26px] font-bold mb-4">
                            {current.heading}
                        </h3>
                        <p className="text-gray-400 text-[15px] leading-7 mb-8">
                            {current.description}
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-[15px]"
                        >
                            {current.cta}
                            <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Visual icon panel */}
                    <div className="w-[180px] shrink-0 flex flex-col items-center justify-center bg-[#1a1f2e] rounded-xl p-6 gap-4">
                        <div className="text-yellow-500 w-16 h-16 flex items-center justify-center bg-yellow-500/10 rounded-2xl">
                            <Icon size={28} />
                        </div>
                        <span className="text-white text-[13px] font-medium text-center leading-5">
                            {current.heading}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}