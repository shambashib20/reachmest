'use client'

import { useState } from 'react'
import { Cpu, Brain, Database, Code, Server, Smartphone, HardDrive, Layers, Cloud, Terminal } from 'lucide-react'

const tabs = [
    {
        label: 'Emerging Tech',
        items: [
            { icon: <Cpu size={28} />, label: 'AI (Gen AI)' },
            { icon: <Brain size={28} />, label: 'Machine Learning' },
            { icon: <Database size={28} />, label: 'Big Data' },
            { icon: <Layers size={28} />, label: 'Data Intelligence' },
            { icon: <Terminal size={28} />, label: 'AppSec' },
        ]
    },
    { label: 'AI & GenAI', items: [] },
    { label: 'ML & Data Science', items: [] },
    { label: 'Frontend', items: [] },
    { label: 'Backend', items: [] },
    { label: 'Mobile', items: [] },
    { label: 'Database', items: [] },
    { label: 'Frameworks', items: [] },
    { label: 'Cloud', items: [] },
    { label: 'DevOps', items: [] },
]

export default function TechSection() {
    const [active, setActive] = useState(0)
    const current = tabs[active]

    return (
        <section className="bg-white px-10 py-20">

            <h2 className="text-[38px] font-bold text-gray-900 text-center mb-10">
                Technologies and Platforms We Use
            </h2>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 overflow-x-auto scrollbar-hide mb-10">
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`pb-3 text-[15px] font-medium whitespace-nowrap transition-colors duration-200 border-b-2 -mb-[2px]
                            ${active === i
                                ? 'text-blue-500 border-blue-500'
                                : 'text-gray-500 border-transparent hover:text-gray-800'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Icons Grid */}
            <div className="flex flex-wrap gap-4">
                {current.items.length > 0 ? current.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 border border-gray-200 rounded-xl px-6 py-4 hover:border-blue-300 transition-colors">
                        <span className="text-blue-500">{item.icon}</span>
                        <span className="text-gray-700 text-[15px] font-medium">{item.label}</span>
                    </div>
                )) : (
                    <p className="text-gray-400 text-[15px]">Coming soon...</p>
                )}
            </div>

        </section>
    )
}