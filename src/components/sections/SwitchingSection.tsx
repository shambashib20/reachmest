"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    id: 1,
    text: "Understand What Is Driving",
    highlight: "Your Growth",
    description:
      "We help you connect the dots between your campaigns and the analytics to help understand audience behaviour and on-site conversions.",
  },
  {
    id: 2,
    text: "Focus on Leads",
    highlight: "That Matter",
    description:
      "Reachmest helps you realign your marketing efforts to qualify and build campaigns directed towards business objectives and goals instead of vanity metrics.",
  },
  {
    id: 3,
    text: "Strengthen Your Visibility",
    highlight: "Across Search",
    description:
      "Merging traditional and AI-based search and content strategies helps your brand stay visible and discoverable on various search channels. ",
  },
  {
    id: 4,
    text: "Bring Multiple Marketing Channels",
    highlight: "Together",
    description:
      "Unite the different marketing channels including SEO, PPC, content, social media, web and development, under one consistent strategy and aim to achieve a shared set of business goals.",
  },
  {
    id: 5,
    text: "Build Scalable",
    highlight: "Software Solutions",
    description:
      "Transform your business’ complex requirements into digital products with customizable software that integrates with your business processes and optimizes and adapts with your business growth. ",
  },
  {
    id: 6,
    text: "Create High-Performing",
    highlight: "Websites & Applications",
    description:
      "Create user-friendly, intelligent, responsive websites and apps with flexible, scalable design and architecture using the latest technology and tools to transform digital experiences. ",
  },
  {
    id: 7,
    text: "Automate Workflows &",
    highlight: "Improve Efficiency",
    description:
      "Efficiently and effectively use business resources with high quality, customized automation and integration solutions to help your business improve and simplify operations.",
  },
  {
    id: 8,
    text: "Work With a Partner That",
    highlight: "Understands Your Goals",
    description:
      "We are a partner you can trust to give you marketing and development solutions that fit with your business priorities including your target audience, your business's technologies and your long-term goals.",
  },
];

export default function SwitchingSection() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="bg-[#0a0a0a] px-10 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Why Switch to Reachmest
        </span>
        <h2 className="text-white text-4xl md:text-[48px] font-bold leading-tight">
          Switching to Reachmest <span className="text-blue-500">Pays Off</span>
        </h2>
        <p className="text-gray-400 text-[15px] mt-5 max-w-2xl mx-auto leading-7">
          Marketing should drive leads and growth. Switching to Reachmest means
          focusing on quality leads, attracting audiences and clear
          understanding of your market. We seamlessly unify your digital
          activities to help your business achieve more.
        </p>
      </div>

      <div className="flex gap-10 items-start">
        {/* Left — Image Grid */}
        <div className="grid grid-cols-2 gap-3 w-[380px] shrink-0">
          {/* Wide top card — team collaboration */}
          <div className="col-span-2 rounded-xl overflow-hidden h-[180px]">
            <svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e3a5f" />
                </linearGradient>
              </defs>
              <rect width="380" height="180" fill="url(#bg1)" />
              {/* desk surface */}
              <rect x="0" y="120" width="380" height="60" fill="rgba(255,255,255,0.03)" />
              {/* monitor */}
              <rect x="130" y="40" width="120" height="75" rx="6" fill="#0f172a" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" />
              <rect x="136" y="46" width="108" height="62" rx="3" fill="#0d1f35" />
              {/* screen glow lines */}
              <rect x="142" y="54" width="60" height="4" rx="2" fill="rgba(96,165,250,0.5)" />
              <rect x="142" y="62" width="80" height="3" rx="2" fill="rgba(255,255,255,0.15)" />
              <rect x="142" y="69" width="70" height="3" rx="2" fill="rgba(255,255,255,0.1)" />
              <rect x="142" y="76" width="50" height="3" rx="2" fill="rgba(255,255,255,0.08)" />
              <rect x="142" y="83" width="65" height="3" rx="2" fill="rgba(34,211,238,0.3)" />
              {/* stand */}
              <rect x="183" y="115" width="14" height="8" rx="2" fill="rgba(96,165,250,0.3)" />
              <rect x="172" y="122" width="36" height="3" rx="1.5" fill="rgba(96,165,250,0.2)" />
              {/* person left */}
              <circle cx="70" cy="75" r="20" fill="#1e3a5f" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
              <circle cx="70" cy="68" r="9" fill="#2d4f7c" />
              <path d="M50 100 Q70 88 90 100" fill="#1a3050" />
              {/* person right */}
              <circle cx="310" cy="75" r="20" fill="#1e3a5f" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
              <circle cx="310" cy="68" r="9" fill="#2d4f7c" />
              <path d="M290 100 Q310 88 330 100" fill="#1a3050" />
              {/* floating tags */}
              <rect x="20" y="30" width="70" height="22" rx="11" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
              <text x="55" y="45" textAnchor="middle" fill="rgba(96,165,250,0.9)" fontSize="10" fontWeight="600">Strategy</text>
              <rect x="290" y="30" width="68" height="22" rx="11" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
              <text x="324" y="45" textAnchor="middle" fill="rgba(34,211,238,0.9)" fontSize="10" fontWeight="600">Growth</text>
              {/* label */}
              <text x="190" y="165" textAnchor="middle" fill="rgba(156,163,175,0.6)" fontSize="10">Team Collaboration</text>
            </svg>
          </div>

          {/* Bottom-left card — analytics */}
          <div className="rounded-xl overflow-hidden h-[140px]">
            <svg viewBox="0 0 185 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0a0a1a" />
                  <stop offset="100%" stopColor="#0d2137" />
                </linearGradient>
              </defs>
              <rect width="185" height="140" fill="url(#bg2)" />
              {/* bar chart */}
              <rect x="22" y="90" width="18" height="35" rx="3" fill="rgba(59,130,246,0.5)" />
              <rect x="48" y="72" width="18" height="53" rx="3" fill="rgba(59,130,246,0.65)" />
              <rect x="74" y="55" width="18" height="70" rx="3" fill="rgba(96,165,250,0.8)" />
              <rect x="100" y="40" width="18" height="85" rx="3" fill="rgba(96,165,250,0.9)" />
              <rect x="126" y="28" width="18" height="97" rx="3" fill="rgba(34,211,238,0.9)" />
              <rect x="152" y="18" width="18" height="107" rx="3" fill="rgba(34,211,238,1)" />
              {/* baseline */}
              <line x1="15" y1="125" x2="178" y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              {/* title */}
              <text x="92" y="15" textAnchor="middle" fill="rgba(156,163,175,0.7)" fontSize="9" fontWeight="600">Monthly Growth</text>
              {/* trend arrow */}
              <path d="M22 88 L152 20" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="4 3" />
            </svg>
          </div>

          {/* Bottom-right card — world map / global reach */}
          <div className="rounded-xl overflow-hidden h-[140px]">
            <svg viewBox="0 0 185 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#050d1a" />
                  <stop offset="100%" stopColor="#0f1f35" />
                </linearGradient>
              </defs>
              <rect width="185" height="140" fill="url(#bg3)" />
              {/* globe outline */}
              <circle cx="92" cy="72" r="48" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
              <ellipse cx="92" cy="72" rx="28" ry="48" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
              <ellipse cx="92" cy="72" rx="48" ry="20" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
              <ellipse cx="92" cy="55" rx="48" ry="10" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
              <ellipse cx="92" cy="90" rx="48" ry="10" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
              {/* continent blobs */}
              <ellipse cx="78" cy="62" rx="16" ry="10" fill="rgba(59,130,246,0.25)" />
              <ellipse cx="108" cy="68" rx="12" ry="8" fill="rgba(59,130,246,0.2)" />
              <ellipse cx="85" cy="82" rx="10" ry="6" fill="rgba(59,130,246,0.18)" />
              {/* glowing pins */}
              <circle cx="78" cy="62" r="3" fill="rgba(96,165,250,1)" />
              <circle cx="78" cy="62" r="6" fill="rgba(96,165,250,0.2)" />
              <circle cx="108" cy="68" r="3" fill="rgba(34,211,238,1)" />
              <circle cx="108" cy="68" r="6" fill="rgba(34,211,238,0.2)" />
              <circle cx="85" cy="82" r="2.5" fill="rgba(96,165,250,0.8)" />
              {/* connection lines */}
              <line x1="78" y1="62" x2="108" y2="68" stroke="rgba(96,165,250,0.3)" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="108" y1="68" x2="85" y2="82" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="3 2" />
              {/* label */}
              <text x="92" y="132" textAnchor="middle" fill="rgba(156,163,175,0.6)" fontSize="9">10+ Countries</text>
            </svg>
          </div>
        </div>

        {/* Right — Accordion */}
        <ul className="flex-1 flex flex-col gap-2.5">
          {items.map((item) => (
            <li
              key={item.id}
              className="border border-gray-200 rounded-xl bg-white px-5 py-4"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === item.id ? null : item.id)
                }
                className="cursor-pointer w-full flex items-center gap-4 text-left"
              >
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-[13px] font-bold flex items-center justify-center shrink-0">
                  {String(item.id).padStart(2, "0")}
                </span>
                <p className="text-gray-800 text-[15px] font-medium flex-1">
                  {item.text}{" "}
                  <span className="text-blue-500">{item.highlight}</span>
                </p>
                <span className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center shrink-0">
                  {expanded === item.id ? (
                    <Minus size={15} />
                  ) : (
                    <Plus size={15} />
                  )}
                </span>
              </button>

              {expanded === item.id && (
                <p className="text-gray-500 text-[14px] leading-6 mt-3 pl-12">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
