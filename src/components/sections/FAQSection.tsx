'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
    {
        id: 1,
        q: 'What services are included in a digital marketing package?',
        a: 'A digital marketing package includes SEO, Performance Marketing, Social Media Marketing, Content Marketing, Email Marketing, AI-Powered Marketing, Conversion Rate Optimisation, and Marketing Automation. At Reachmest, we customize each and every package as per your business goals, budget, and growth needs.',
    },
    {
        id: 2,
        q: 'Why should I hire a digital marketing agency?',
        a: 'Hiring a digital marketing agency offers you the benefits of expertise, planning, and campaign management. We assist businesses in reaching their target audience as well as increasing their visibility and making better marketing decisions.',
    },
    {
        id: 3,
        q: 'How much do digital marketing services cost per month?',
        a: 'At Reachmest, we charge $9 per hour. However, the monthly costs of digital marketing vary, depending on your goals, the services you choose, and how your campaigns are set up. We tailor our solutions to fit your budget, putting a focus on measurable results and long-term business growth.',
    },
    {
        id: 4,
        q: 'How do you measure the ROI of my digital marketing campaigns?',
        a: 'Digital marketing ROI is calculated by measuring the cost of the campaign against the income received, while monitoring leads and conversions to learn what works best and how to get better results.',
    },
    {
        id: 5,
        q: 'Can your agency help small businesses with digital marketing?',
        a: 'Yes. We provide flexible digital marketing solutions for small businesses looking to improve search visibility, build brand awareness, attract potential customers and generate enquiries within their budgets.',
    },
    {
        id: 6,
        q: 'Can you create a digital marketing strategy tailored to my business?',
        a: 'Yes. We create customised digital marketing strategies based on your business goals, target audience, industry and budget. We combine SEO, paid advertising, content marketing, social media and AI-powered solutions to improve online visibility, attract qualified leads and support sustainable business growth.',
    },
    {
        id: 7,
        q: 'How long does digital marketing take to show results?',
        a: 'Digital marketing timelines vary depending on your industry, competition, budget and strategy. Paid advertising can generate traffic and enquiries shortly after launch, while SEO typically takes 3–6 months or longer to build noticeable organic visibility. Consistent optimisation and performance monitoring help achieve sustainable growth.',
    },
    {
        id: 8,
        q: 'Can you develop custom software for my business?',
        a: 'Yes. We can develop customized software solutions based on your business requirements, workflows and objectives to help address specific operational and technical needs.',
    },
    {
        id: 9,
        q: 'What is the average cost of developing software?',
        a: 'Custom software development costs depend on the developer\'s expertise, location, and the time and resources required. Partner with Reachmest to build tailored software solutions that align with your business needs and budget.',
    },
    {
        id: 10,
        q: 'How do I get started with a software development project with your team?',
        a: 'Contact us to discuss your project requirements, business objectives and expected outcomes. Our team can review your needs, understand the project scope and recommend a suitable development approach.',
    },
    {
        id: 11,
        q: 'Can you integrate new software with our existing systems?',
        a: 'Yes. We can develop software solutions designed to work with your existing systems and business tools, helping streamline workflows, improve data connectivity and simplify daily operations.',
    },
    {
        id: 12,
        q: 'How do you ensure software security and quality?',
        a: 'We follow a structured development approach that includes code reviews, functionality testing, performance checks and security considerations to help deliver reliable, efficient and secure software solutions.',
    },
    {
        id: 13,
        q: 'Who owns the source code and intellectual property after development?',
        a: 'Once the project is finished and payment is made, the ownership of the custom source code and intellectual property transfers to you, as stated in our agreement. Any third-party or licensed components still follow their respective license rules.',
    },
    {
        id: 14,
        q: 'Do you provide software maintenance and support after launch?',
        a: 'Yes. We can provide ongoing software maintenance and technical support based on your requirements, including updates, troubleshooting, performance improvements and feature enhancements.',
    },
]

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(1)

    return (
        <section className="bg-[#0d1117] px-10 py-20">

            {/* Header */}
            <div className="text-center mb-12">
                <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    FAQs
                </span>
                <h2 className="text-[38px] font-bold text-white">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-400 text-[15px] mt-3 max-w-xl mx-auto leading-7">
                    Everything you need to know about our digital marketing and software development services.
                </p>
            </div>

            <div className="flex gap-8 items-start">

                {/* Left — Accordion */}
                <div className="flex-1">
                    {faqs.map(faq => (
                        <div key={faq.id} className="border-b border-gray-800">
                            <button
                                onClick={() => setActive(active === faq.id ? null : faq.id)}
                                className="w-full flex items-start gap-4 py-5 text-left"
                            >
                                <span className="text-gray-600 text-[13px] font-mono shrink-0 mt-0.5">
                                    [{String(faq.id).padStart(2, '0')}]
                                </span>
                                <span className="text-gray-200 text-[16px] font-medium flex-1 leading-snug">
                                    {faq.q}
                                </span>
                                <span className="text-gray-400 shrink-0 mt-0.5">
                                    {active === faq.id ? <X size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            {active === faq.id && (
                                <p className="text-gray-400 text-[15px] leading-7 pb-5 pl-9">
                                    {faq.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right — CTA Card */}
                <div className="w-[300px] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-600 to-blue-900 sticky top-24">
                    <img
                        src="/faq-visual.png"
                        alt="Contact Reachmest"
                        className="w-full h-[200px] object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-white text-[22px] font-bold leading-tight mb-3">
                            Didn&apos;t Find What You Were Looking For?
                        </h3>
                        <p className="text-blue-200 text-[14px] leading-6 mb-6">
                            We&apos;ve got more answers waiting for you. If your question didn&apos;t make the list,
                            don&apos;t hesitate to reach out.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-gray-900 font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            Get In Touch With Our Experts
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}