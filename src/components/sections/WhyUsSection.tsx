import { Target, Layers, BarChart2, Sliders, Zap, MessageSquare } from 'lucide-react'

const reasons = [
    {
        icon: Target,
        title: 'Strategy-Led Marketing',
        description: 'Every campaign begins with business understanding, research and a clear direction.',
    },
    {
        icon: Layers,
        title: 'Integrated Digital Expertise',
        description: 'Connect SEO, paid advertising, content, social media and development through one marketing partner.',
    },
    {
        icon: BarChart2,
        title: 'Data-Informed Decisions',
        description: 'Use performance insights to identify opportunities and make better marketing decisions.',
    },
    {
        icon: Sliders,
        title: 'Flexible Engagement Models',
        description: 'Choose support that fits your requirements, whether you need a specific service or an ongoing partner.',
    },
    {
        icon: Zap,
        title: 'Creative and Technical Capabilities',
        description: 'Combine engaging brand communication with the technical expertise needed to support digital performance.',
    },
    {
        icon: MessageSquare,
        title: 'Transparent Communication',
        description: 'Stay informed through regular communication, progress updates and actionable recommendations.',
    },
]

export default function WhyUsSection() {
    return (
        <section className="bg-white px-10 py-20">

            <div className="text-center mb-12">
                <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Why Reachmest
                </span>
                <h2 className="text-[38px] font-bold text-gray-900">
                    Why Global Brands Choose Reachmest
                </h2>
                <p className="text-gray-500 text-[16px] mt-3 max-w-2xl mx-auto leading-7">
                    Reachmest brings strategy, technology and marketing execution together to support
                    businesses at different stages of growth.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {reasons.map((item, i) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={i}
                            className="flex flex-col gap-4 border border-gray-200 hover:border-blue-200 hover:shadow-sm rounded-2xl px-6 py-6 transition-all duration-200 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                                <Icon size={22} className="text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-gray-900 text-[17px] font-bold mb-2 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-[14px] leading-6">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}