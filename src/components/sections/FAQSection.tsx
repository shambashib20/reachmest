'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
    { id: 1, q: 'How do you maintain quality, security, and scalability in software engineering services?', a: 'Every build goes through hands-on checks, not just automated ones. Security isn\'t added at the end, either, but starts from how we write the first line of code. Access rights, data handling, and encryption are built in quietly as we go. And when it comes to scale, we plan for it before the traffic hits.' },
    { id: 2, q: 'How much does a software engineering project usually cost?', a: '' },
    { id: 3, q: 'How long does a full-scale software engineering project take to complete?', a: '' },
    { id: 4, q: 'How do you fit into an existing agile or DevOps setup?', a: '' },
    { id: 5, q: 'How do you make sure every project stays on track?', a: '' },
    { id: 6, q: 'What pricing models do you use for software engineering projects?', a: '' },
    { id: 7, q: 'How can Reachmest\'s software engineering services help my business?', a: '' },
    { id: 8, q: 'What makes a software delivery partnership actually work?', a: '' },
]

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(1)

    return (
        <section className="bg-[#0d1117] px-10 py-20">

            <h2 className="text-[38px] font-bold text-white text-center mb-12">
                Frequently Asked Questions
            </h2>

            <div className="flex gap-8 items-start">

                {/* Left — Accordion */}
                <div className="flex-1">
                    {faqs.map(faq => (
                        <div key={faq.id} className="border-b border-gray-800">
                            <button
                                onClick={() => setActive(active === faq.id ? null : faq.id)}
                                className="w-full flex items-start gap-4 py-5 text-left"
                            >
                                <span className="text-gray-500 text-[14px] font-mono shrink-0 mt-0.5">[{faq.id}]</span>
                                <span className="text-gray-200 text-[16px] font-medium flex-1">{faq.q}</span>
                                <span className="text-gray-400 shrink-0 mt-0.5">
                                    {active === faq.id ? <X size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            {active === faq.id && faq.a && (
                                <p className="text-gray-400 text-[15px] leading-7 pb-5 pl-9">
                                    {faq.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right — CTA Card */}
                <div className="w-[300px] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-600 to-blue-900">
                    <img src="/faq-visual.png" alt="" className="w-full h-[200px] object-cover" />
                    <div className="p-6">
                        <h3 className="text-white text-[22px] font-bold leading-tight mb-3">
                            Didn't Find What You Were Looking For?
                        </h3>
                        <p className="text-blue-200 text-[14px] leading-6 mb-6">
                            We've got more answers waiting for you! If your question didn't make the list, don't hesitate to reach out.
                        </p>
                        <a href="/contact" className="inline-block bg-white text-gray-900 font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                            Get In Touch With Our Experts
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}