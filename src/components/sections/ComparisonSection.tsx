import { X, Check } from 'lucide-react'

const others = [
    {
        text: 'Disconnected Teams',
        sub: 'Marketing and development teams work separately without a unified strategy.',
    },
    {
        text: 'Vanity-Focused Reporting',
        sub: 'Reports concentrate mainly on website traffic, impressions and clicks rather than business outcomes.',
    },
    {
        text: 'Limited Communication',
        sub: 'Updates about campaign activities, project progress and priorities may lack clarity.',
    },
    {
        text: 'Rigid Service Packages',
        sub: 'Standardized packages offer limited flexibility to meet changing business requirements.',
    },
    {
        text: 'Unaligned Business Goals',
        sub: 'Digital activities may operate independently without supporting wider business objectives.',
    },
    {
        text: 'Limited Technical Support',
        sub: 'Software development needs and operational challenges may receive little attention.',
    },
]

const ours = [
    {
        text: 'Connected Marketing Strategies',
        sub: 'SEO, PPC, social media and content planned around shared goals.',
    },
    {
        text: 'Business-Focused Campaigns',
        sub: 'Marketing activities aligned with your audience and growth priorities.',
    },
    {
        text: 'Performance Monitoring',
        sub: 'Review relevant traffic, engagement, leads and conversion indicators.',
    },
    {
        text: 'Flexible Solutions',
        sub: 'Select individual services or combine multiple capabilities.',
    },
    {
        text: 'Clear Communication',
        sub: 'Understand the work being performed and the next improvement opportunities.',
    },
    {
        text: 'Continuous Optimization',
        sub: 'Refine campaigns using performance insights and changing market conditions.',
    },
]

const stats = [
    { value: '75+', label: 'Global Clients' },
    { value: '98%', label: 'Retention Rate' },
    { value: '55+', label: 'Marketing Experts' },
    { value: '52+', label: 'Vetted Developers' },
    { value: '10+', label: 'Countries' },
]

export default function ComparisonSection() {
    return (
        <section className="bg-[#0d1b2e] px-10 py-20">

            {/* Heading */}
            <div className="text-center mb-12">
                <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Why Reachmest
                </span>
                <h2 className="text-[38px] font-bold text-white leading-tight">
                    Marketing Should Deliver More Than Clicks.
                </h2>
                <h2 className="text-[38px] font-bold text-yellow-400 italic leading-tight">
                    It Should Support Business Growth.
                </h2>
                <p className="text-gray-400 text-[15px] mt-5 max-w-2xl mx-auto leading-7">
                    Choosing a digital marketing and software development partner should be about more
                    than promises and reports. We connect AI-powered marketing with tailored software
                    solutions, transparent communication and continuous improvement.
                </p>
            </div>

            {/* Comparison Card */}
            <div className="flex rounded-2xl overflow-hidden max-w-5xl mx-auto border border-gray-700">

                {/* Left — Others */}
                <div className="flex-1 bg-[#1a2b40] px-8 py-8">
                    <h3 className="text-gray-400 text-[13px] font-bold uppercase tracking-widest mb-6">
                        What a Basic Agency Looks Like
                    </h3>
                    <ul className="flex flex-col gap-5">
                        {others.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <X size={11} className="text-red-400" />
                                </span>
                                <p className="text-[14px] leading-5">
                                    <span className="text-gray-200 font-semibold">{item.text}: </span>
                                    <span className="text-gray-500">{item.sub}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — Ours */}
                <div className="flex-1 bg-white px-8 py-8">
                    <h3 className="text-gray-400 text-[13px] font-bold uppercase tracking-widest mb-6">
                        What You Can Expect From Reachmest
                    </h3>
                    <ul className="flex flex-col gap-5">
                        {ours.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check size={11} className="text-green-600" />
                                </span>
                                <p className="text-[14px] leading-5">
                                    <span className="font-semibold text-gray-900">{item.text}: </span>
                                    <span className="text-gray-500">{item.sub}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Stats Strip */}
            <div className="flex items-center justify-center gap-12 mt-12 border-t border-gray-700/60 pt-10">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                        <p className="text-white font-bold text-[28px] leading-none">{stat.value}</p>
                        <p className="text-gray-500 text-[13px] mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}