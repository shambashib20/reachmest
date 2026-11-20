'use client'

import { useState } from 'react'
import {
    TrendingUp, Search, Share2, Mail, BarChart2, MousePointer,
    Bot, Brain, Zap, Sparkles, Eye,
    Monitor, Code, Palette, Layout, Wind,
    Server, Code2, Terminal, GitBranch, Layers,
    Smartphone, Tablet, AppWindow,
    Database, HardDrive, Flame, Boxes,
    Cloud, Globe, Shield, Gauge,
    Container, Package, Settings, RefreshCw
} from 'lucide-react'

const tabs = [
    {
        label: 'Marketing Tech',
        items: [
            { icon: Search, label: 'Google Ads' },
            { icon: BarChart2, label: 'Google Analytics 4' },
            { icon: Share2, label: 'Meta Ads Manager' },
            { icon: TrendingUp, label: 'SEMrush' },
            { icon: Eye, label: 'Ahrefs' },
            { icon: MousePointer, label: 'HubSpot' },
            { icon: Mail, label: 'Mailchimp' },
            { icon: Gauge, label: 'Hotjar' },
            { icon: Globe, label: 'Google Search Console' },
        ],
    },
    {
        label: 'AI & GenAI',
        items: [
            { icon: Bot, label: 'OpenAI GPT-4' },
            { icon: Sparkles, label: 'Anthropic Claude' },
            { icon: Brain, label: 'LangChain' },
            { icon: Zap, label: 'Perplexity AI' },
            { icon: Bot, label: 'Midjourney' },
            { icon: Brain, label: 'Hugging Face' },
            { icon: Zap, label: 'Make (Integromat)' },
            { icon: Bot, label: 'n8n Automation' },
        ],
    },
    {
        label: 'Frontend',
        items: [
            { icon: Code, label: 'React.js' },
            { icon: Monitor, label: 'Next.js' },
            { icon: Code2, label: 'TypeScript' },
            { icon: Wind, label: 'Tailwind CSS' },
            { icon: Layout, label: 'Vue.js' },
            { icon: Palette, label: 'Figma' },
            { icon: Code, label: 'HTML / CSS' },
            { icon: Sparkles, label: 'Framer Motion' },
        ],
    },
    {
        label: 'Backend',
        items: [
            { icon: Server, label: 'Node.js' },
            { icon: Code2, label: 'Python' },
            { icon: Terminal, label: 'PHP / Laravel' },
            { icon: Layers, label: 'FastAPI' },
            { icon: GitBranch, label: 'REST APIs' },
            { icon: Layers, label: 'GraphQL' },
            { icon: Server, label: 'Express.js' },
            { icon: Code2, label: 'Fastify' },
        ],
    },
    {
        label: 'Mobile',
        items: [
            { icon: Smartphone, label: 'React Native' },
            { icon: AppWindow, label: 'Flutter' },
            { icon: Tablet, label: 'Expo' },
            { icon: Smartphone, label: 'iOS (Swift)' },
            { icon: Smartphone, label: 'Android (Kotlin)' },
            { icon: Globe, label: 'Progressive Web Apps' },
        ],
    },
    {
        label: 'Database',
        items: [
            { icon: Database, label: 'PostgreSQL' },
            { icon: Boxes, label: 'MongoDB' },
            { icon: Database, label: 'MySQL' },
            { icon: HardDrive, label: 'Redis' },
            { icon: Flame, label: 'Firebase' },
            { icon: Database, label: 'Supabase' },
        ],
    },
    {
        label: 'Cloud',
        items: [
            { icon: Cloud, label: 'AWS' },
            { icon: Globe, label: 'Google Cloud' },
            { icon: Zap, label: 'Vercel' },
            { icon: Shield, label: 'Cloudflare' },
            { icon: Cloud, label: 'DigitalOcean' },
            { icon: Globe, label: 'Azure' },
        ],
    },
    {
        label: 'DevOps',
        items: [
            { icon: Container, label: 'Docker' },
            { icon: GitBranch, label: 'GitHub Actions' },
            { icon: RefreshCw, label: 'CI/CD Pipelines' },
            { icon: Terminal, label: 'Linux / Bash' },
            { icon: Package, label: 'Kubernetes' },
            { icon: Settings, label: 'Nginx' },
        ],
    },
]

export default function TechSection() {
    const [active, setActive] = useState(0)
    const current = tabs[active]

    return (
        <section className="bg-white px-10 py-20">

            {/* Header */}
            <div className="text-center mb-10">
                <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Our Stack
                </span>
                <h2 className="text-[38px] font-bold text-gray-900">
                    Technologies and Platforms We Use
                </h2>
                <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-7">
                    We work with the latest tools across marketing, development and AI to deliver
                    high-performance digital solutions.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 border-b border-gray-200 overflow-x-auto scrollbar-hide mb-10">
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`pb-3 px-4 text-[14px] font-medium whitespace-nowrap transition-colors duration-200 border-b-2 -mb-[2px]
                            ${active === i
                                ? 'text-blue-600 border-blue-600'
                                : 'text-gray-500 border-transparent hover:text-gray-800'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Icons Grid */}
            <div className="flex flex-wrap gap-3">
                {current.items.map((item, i) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-3 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-5 py-3.5 transition-all duration-200 cursor-default group"
                        >
                            <Icon
                                size={18}
                                className="text-blue-500 group-hover:text-blue-600 transition-colors"
                                strokeWidth={1.5}
                            />
                            <span className="text-gray-700 text-[14px] font-medium">
                                {item.label}
                            </span>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}