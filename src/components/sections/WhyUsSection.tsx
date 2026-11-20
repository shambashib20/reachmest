import { Settings, Users, Target, Server, CheckCircle, Monitor } from 'lucide-react'

const reasons = [
    { icon: <Settings size={28} />, title: 'Precision-Built for Product Success' },
    { icon: <Users size={28} />, title: 'Dedicated CoEs for Scalable Delivery' },
    { icon: <Target size={28} />, title: 'Cross-Functional, Outcome-Focused Teams' },
    { icon: <Server size={28} />, title: 'Robust Architecture, Built to Scale' },
    { icon: <CheckCircle size={28} />, title: 'Impeccable Quality, On-Time Delivery' },
    { icon: <Monitor size={28} />, title: 'Human-Centric Design & UX Excellence' },
]

export default function WhyUsSection() {
    return (
        <section className="bg-white px-10 py-20">

            <div className="text-center mb-12">
                <h2 className="text-[38px] font-bold text-gray-900">Why Global Brands Choose Reachmest</h2>
                <p className="text-gray-500 text-[16px] mt-3">
                    Partnering with enterprises across North America, Europe, and the Middle East.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {reasons.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 border border-gray-200 rounded-xl px-6 py-5">
                        <div className="text-blue-500 shrink-0">{item.icon}</div>
                        <h3 className="text-gray-800 text-[16px] font-semibold leading-6">{item.title}</h3>
                    </div>
                ))}
            </div>

        </section>
    )
}