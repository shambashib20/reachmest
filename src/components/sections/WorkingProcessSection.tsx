'use client'

import { Search, BarChart2, Map, Zap, Activity, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Discover & Understand",
    description: "We learn about your business, audience, services, competitors and growth priorities.",
    icon: Search,
  },
  {
    number: "02",
    title: "Research & Analyze",
    description: "We evaluate market opportunities, search demand, competitor activity and existing digital performance.",
    icon: BarChart2,
  },
  {
    number: "03",
    title: "Plan & Strategize",
    description: "We develop a customized roadmap with clear priorities, channel recommendations and measurable objectives.",
    icon: Map,
  },
  {
    number: "04",
    title: "Execute & Implement",
    description: "Our team works across SEO, paid advertising, social media, content and development according to the agreed strategy.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Monitor & Optimize",
    description: "We review campaign performance, identify improvement opportunities and refine activities using relevant data.",
    icon: Activity,
  },
  {
    number: "06",
    title: "Report & Grow",
    description: "We share progress, discuss insights and plan the next steps for continuous improvement.",
    icon: TrendingUp,
  },
]

export default function WorkingProcessSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Our Process
          </span>
          <h2 className="text-white text-4xl md:text-[48px] font-bold leading-tight">
            Our <span className="text-blue-500">Proven</span> Approach &{' '}
            <span className="text-blue-500">Working</span> Process
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto text-[16px] leading-7">
            Every successful campaign begins with understanding your business. Our structured
            process connects marketing activities and development projects with your objectives.
          </p>
        </div>

        {/* Steps — Staggered Timeline */}
        <div className="relative">

          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  } justify-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0a0a0a] hidden md:block z-10 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

                  {/* Card */}
                  <div
                    className={`
                      w-full md:w-[46%] group
                      bg-zinc-900/60 border border-zinc-800
                      rounded-2xl p-8
                      hover:border-blue-500/40
                      hover:bg-zinc-900
                      transition-all duration-300
                      ${isLeft ? 'md:mr-[54%]' : 'md:ml-[54%]'}
                    `}
                  >
                    {/* Top row: number + icon */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[64px] font-black text-zinc-800 leading-none select-none group-hover:text-zinc-700 transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-white text-[20px] font-bold mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-[15px] leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}