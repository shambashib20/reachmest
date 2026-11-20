import { X, Check } from 'lucide-react'

const others = [
    'Impressions and clicks',
    'Cost per click',
    'Keyword ranking reports',
    'A lead count that includes spam and 10-second calls',
    'A PDF once a month',
]

const ours = [
    { text: 'A live Client Hub', sub: 'with GA4, Search Console, Google Ads, Meta, Microsoft Ads and Business Profile in one place' },
    { text: 'Revenue by source,', sub: 'where your sales or e-commerce data is connected' },
    { text: 'Every form lead', sub: 'in one lead tracker, with the page and campaign it came from' },
    { text: 'Every call transcribed', sub: 'and tagged by what the caller wanted' },
    { text: 'Answered vs. missed calls,', sub: 'with voicemails flagged for a call-back' },
    { text: 'AI assistant traffic', sub: 'from ChatGPT and others, reported as its own channel' },
    { text: 'New reviews and your rating', sub: 'tracked next to calls and leads' },
]

const stats = [
    { value: '1.38M+', label: 'visitors' },
    { value: '$2.1B+', label: 'client revenue' },
    { value: '1.3M+', label: 'leads since 2024' },
    { value: '10x', label: 'Inc. 5000' },
    { value: '2,100+', label: 'client reviews' },
]

export default function ComparisonSection() {
    return (
        <section className="bg-[#0d1b2e] px-10 py-20">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-[38px] font-bold text-white">Agencies sell clicks and leads.</h2>
                <h2 className="text-[38px] font-bold text-yellow-500 italic">We show you what they earned you.</h2>
                <p className="text-gray-400 text-[15px] mt-4 max-w-xl mx-auto leading-7">
                    A monthly report full of impressions does not tell you if the phone rang or the sale closed. Reachmest follows each lead from ad or search result to the call, the form and, where you track it, the revenue.
                </p>
            </div>

            {/* Comparison Card */}
            <div className="flex rounded-2xl overflow-hidden max-w-4xl mx-auto">

                {/* Left — Others */}
                <div className="flex-1 bg-[#1a2b40] px-8 py-8">
                    <h3 className="text-white text-[18px] font-bold mb-6">What most agencies report:</h3>
                    <ul className="flex flex-col gap-4">
                        {others.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-400 text-[15px]">
                                <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <X size={12} className="text-red-500" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — Ours */}
                <div className="flex-1 bg-white px-8 py-8">
                    <h3 className="text-gray-900 text-[18px] font-bold mb-6">What Reachmest delivers:</h3>
                    <ul className="flex flex-col gap-4">
                        {ours.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[15px]">
                                <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check size={12} className="text-green-600" />
                                </span>
                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">{item.text}</span> {item.sub}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Stats Strip */}
            <div className="flex items-center justify-center gap-10 mt-12 border-t border-gray-700 pt-8">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                        <span className="text-white font-bold text-[18px]">{stat.value}</span>
                        <span className="text-gray-400 text-[14px] ml-2">{stat.label}</span>
                    </div>
                ))}
            </div>

        </section>
    )
}