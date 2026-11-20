'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const items = [
    { id: 1, text: 'They can finally see', highlight: 'which marketing brings in revenue.' },
    { id: 2, text: 'Every lead is tracked,', highlight: 'down to the phone call.' },
    { id: 3, text: 'They show up in', highlight: 'ChatGPT and AI answers, not only on Google.' },
    { id: 4, text: 'One team runs', highlight: 'SEO, ads, email, social and web.' },
    { id: 5, text: 'They picked an agency with', highlight: 'proof from businesses like theirs.' },
]

export default function SwitchingSection() {
    const [expanded, setExpanded] = useState<number | null>(null)

    return (
        <section className="bg-gray-50 px-10 py-20">
            <h2 className="text-[38px] font-bold text-gray-900 mb-10">
                Switching to Reachmest <span className="text-yellow-500 italic">pays off.</span>
            </h2>

            <div className="flex gap-10 items-start">

                {/* Left — Image Grid */}
                <div className="grid grid-cols-2 gap-3 w-[380px] shrink-0">
                    <div className="col-span-2">
                        <img src="/team-1.jpg" alt="" className="w-full h-[180px] object-cover rounded-xl" />
                    </div>
                    <img src="/team-2.jpg" alt="" className="w-full h-[140px] object-cover rounded-xl" />
                    <img src="/team-3.jpg" alt="" className="w-full h-[140px] object-cover rounded-xl" />
                </div>

                {/* Right — Accordion */}
                <ul className="flex-1 flex flex-col gap-3">
                    {items.map(item => (
                        <li key={item.id} className="border border-gray-200 rounded-xl bg-white px-5 py-4">
                            <button
                                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                                className="w-full flex items-center gap-4 text-left"
                            >
                                <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-[13px] font-bold flex items-center justify-center shrink-0">
                                    {item.id}
                                </span>
                                <p className="text-gray-800 text-[15px] font-medium flex-1">
                                    {item.text} <span className="text-blue-500">{item.highlight}</span>
                                </p>
                                <span className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0">
                                    {expanded === item.id ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            {expanded === item.id && (
                                <p className="text-gray-500 text-[14px] leading-6 mt-3 pl-12">
                                    Placeholder description for this point. Update with real content later.
                                </p>
                            )}
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}