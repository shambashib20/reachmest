'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const items = [
    {
        id: 1,
        text: 'Understand What Is Driving',
        highlight: 'Your Growth',
        description:
            'Connect available analytics and campaign data to understand website traffic, advertising performance, audience behaviour and conversion activity.',
    },
    {
        id: 2,
        text: 'Focus on Leads',
        highlight: 'That Matter',
        description:
            'Build campaigns around relevant audiences and meaningful actions, helping your business prioritize qualified enquiries over vanity metrics.',
    },
    {
        id: 3,
        text: 'Strengthen Your Visibility',
        highlight: 'Across Search',
        description:
            'Combine traditional SEO with AI-aware content and search strategies to help your brand remain discoverable across changing search experiences.',
    },
    {
        id: 4,
        text: 'Bring Multiple Marketing Channels',
        highlight: 'Together',
        description:
            'Coordinate SEO, PPC, social media, content and web development with a consistent strategy and shared business objectives.',
    },
    {
        id: 5,
        text: 'Build Scalable',
        highlight: 'Software Solutions',
        description:
            'Turn complex business requirements into practical digital products. Develop custom software that supports your workflows, improves efficiency and adapts as your business grows.',
    },
    {
        id: 6,
        text: 'Create High-Performing',
        highlight: 'Websites & Applications',
        description:
            'Develop responsive websites and intelligent applications with modern technologies, user-friendly interfaces and scalable architecture to deliver better digital experiences.',
    },
    {
        id: 7,
        text: 'Automate Workflows &',
        highlight: 'Improve Efficiency',
        description:
            'Reduce repetitive tasks and simplify business operations through custom automation, intelligent integrations and AI-powered technology solutions.',
    },
    {
        id: 8,
        text: 'Work With a Partner That',
        highlight: 'Understands Your Goals',
        description:
            'Get marketing and development solutions aligned with your business priorities, target audience, technical requirements and long-term growth plans.',
    },
]

export default function SwitchingSection() {
    const [expanded, setExpanded] = useState<number | null>(1)

    return (
        <section className="bg-gray-50 px-10 py-20">

            {/* Header */}
            <div className="mb-10">
                <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Why Switch
                </span>
                <h2 className="text-[38px] font-bold text-gray-900">
                    Switching to Reachmest{' '}
                    <span className="text-yellow-500 italic">pays off.</span>
                </h2>
                <p className="text-gray-500 text-[15px] leading-7 mt-3 max-w-xl">
                    Your marketing should do more than generate clicks and impressions. Reachmest brings
                    your digital activities together through a coordinated approach.
                </p>
            </div>

            <div className="flex gap-10 items-start">

                {/* Left — Image Grid */}
                <div className="grid grid-cols-2 gap-3 w-[380px] shrink-0">
                    <div className="col-span-2">
                        <img
                            src="/team-1.jpg"
                            alt="Reachmest team"
                            className="w-full h-[180px] object-cover rounded-xl"
                        />
                    </div>
                    <img
                        src="/team-2.jpg"
                        alt="Reachmest team"
                        className="w-full h-[140px] object-cover rounded-xl"
                    />
                    <img
                        src="/team-3.jpg"
                        alt="Reachmest team"
                        className="w-full h-[140px] object-cover rounded-xl"
                    />
                </div>

                {/* Right — Accordion */}
                <ul className="flex-1 flex flex-col gap-2.5">
                    {items.map(item => (
                        <li key={item.id} className="border border-gray-200 rounded-xl bg-white px-5 py-4">
                            <button
                                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                                className="w-full flex items-center gap-4 text-left"
                            >
                                <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-[13px] font-bold flex items-center justify-center shrink-0">
                                    {String(item.id).padStart(2, '0')}
                                </span>
                                <p className="text-gray-800 text-[15px] font-medium flex-1">
                                    {item.text}{' '}
                                    <span className="text-blue-500">{item.highlight}</span>
                                </p>
                                <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                                    {expanded === item.id
                                        ? <Minus size={15} />
                                        : <Plus size={15} />
                                    }
                                </span>
                            </button>

                            {expanded === item.id && (
                                <p className="text-gray-500 text-[14px] leading-6 mt-3 pl-12">
                                    {item.description}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}