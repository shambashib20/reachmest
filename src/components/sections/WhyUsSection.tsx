import {
  Target,
  Layers,
  BarChart2,
  Sliders,
  Zap,
  MessageSquare,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategy-Led Marketing",
    description:
      "We invest heavily upfront in research to gain a deep understanding of your business and the problems it faces. This forms the foundation of every campaign we run.",
  },
  {
    icon: Layers,
    title: "Integrated Digital Expertise",
    description:
      "Reachmest is your one stop shop for integrated digital marketing and advertising. We service all areas of digital marketing from SEO, PPC and display to social media channels, content and development.",
  },
  {
    icon: BarChart2,
    title: "Data-Informed Decisions",
    description:
      "Make more informed marketing decisions using data and performance insights.",
  },
  {
    icon: Sliders,
    title: "Flexible Engagement Models",
    description:
      "Whether you’re looking for a one-off project or a long term partner, we’re flexible to your needs. ",
  },
  {
    icon: Zap,
    title: "Creative and Technical Capabilities",
    description:
      "Combine engaging brand communication with the technical expertise needed to support digital performance.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "We value transparency and regularly communicate with you about your marketing activities.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-[#0a0a0a] px-10 py-20">
      <div className="text-center mb-12">
        <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Why choose us
        </span>

        <h2 className="text-white text-4xl md:text-[48px] font-bold leading-tight">
          Why Global{" "}
          <span className="text-blue-500">Brands Choose Reachmest</span>
        </h2>
        <p className="text-gray-500 text-[16px] mt-3 max-w-2xl mx-auto leading-7">
          Reachmest brings strategy, technology and marketing execution together
          to support businesses through various stages of growth. Our
          differentiator is building practical and actionable solutions to your
          challenges, goals and objectives in mind.{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {reasons.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col gap-4 border border-blue-600 hover:border-blue-200 hover:shadow-sm rounded-2xl px-6 py-6 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                <Icon size={22} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-white text-[17px] font-bold mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-[14px] leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
