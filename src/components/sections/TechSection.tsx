'use client'

import { useState } from 'react'

type TabItem = { icon: React.ReactNode; label: string }
type Tab = { label: string; items: TabItem[] }

// ─── Brand SVG logos ──────────────────────────────────────────────────────────

const logos = {
  // ── Marketing Tech ────────────────────────────────────────────────────────
  googleAds: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M2.5 17.5L9 6l3.5 6.06-3 5.44H2.5z" fill="#FBBC04"/>
      <path d="M9 6l3.5 6.06L16 6H9z" fill="#4285F4"/>
      <path d="M12.5 12.06L16 6l5 8.66H15l-2.5-2.6z" fill="#34A853"/>
      <circle cx="20.5" cy="17.5" r="2.5" fill="#EA4335"/>
      <circle cx="3.5" cy="17.5" r="2.5" fill="#FBBC04"/>
    </svg>
  ),
  googleAnalytics: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect x="3" y="12" width="4" height="9" rx="2" fill="#F9AB00"/>
      <rect x="10" y="7" width="4" height="14" rx="2" fill="#E37400"/>
      <rect x="17" y="2" width="4" height="19" rx="2" fill="#E8710A"/>
    </svg>
  ),
  metaAds: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M2 12.5C2 9 4.2 7 6.5 7c1.5 0 2.8.9 4 2.8C11.6 7.9 13 7 14.5 7c3 0 5.5 2.5 5.5 6.5 0 2.2-.8 4-2 4s-2-1.5-2-3.5c0-1.3-.4-2-1-2s-1.2 1-2 2.5c-.8 1.5-1.8 2.5-3 2.5-1.2 0-2.2-1-3-2.5-.8-1.5-1.5-2.5-2-2.5-.5 0-.5 1.5-.5 2.5H2v-1.5z" fill="#0082FB"/>
    </svg>
  ),
  semrush: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#FF642D"/>
      <text x="4" y="17" fill="white" fontSize="13" fontWeight="800" fontFamily="Arial">S</text>
    </svg>
  ),
  ahrefs: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#FF7043"/>
      <path d="M7 17L10 7h4l3 10h-3l-.5-1.8h-3L10 17H7zm3.8-4h2.4l-1.2-4.2L10.8 13z" fill="white"/>
    </svg>
  ),
  hubspot: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="16" cy="8" r="3" fill="#FF7A59"/>
      <circle cx="16" cy="8" r="1.5" fill="white"/>
      <path d="M13 8H8v8h5V8z" fill="none" stroke="#FF7A59" strokeWidth="1.5"/>
      <path d="M8 12h5" stroke="#FF7A59" strokeWidth="1.5"/>
      <circle cx="8" cy="8" r="1.5" fill="#FF7A59"/>
      <circle cx="8" cy="16" r="1.5" fill="#FF7A59"/>
    </svg>
  ),
  mailchimp: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M20 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" fill="#FFE01B"/>
      <path d="M12 7c-1.7 0-3 1.1-3 2.5 0 .8.4 1.5 1 2l-.5 1.5h5l-.5-1.5c.6-.5 1-1.2 1-2C15 8.1 13.7 7 12 7z" fill="#241C15"/>
      <circle cx="10.5" cy="10" r=".5" fill="#FFE01B"/>
      <circle cx="13.5" cy="10" r=".5" fill="#FFE01B"/>
    </svg>
  ),
  hotjar: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#FD3A5C"/>
      <path d="M8 7v10M12 10v7M16 7v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  searchConsole: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="10" cy="10" r="6" stroke="#4285F4" strokeWidth="2" fill="none"/>
      <path d="M14.5 14.5L19 19" stroke="#34A853" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 10h6M10 7v6" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  // ── AI & GenAI ─────────────────────────────────────────────────────────────
  openai: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M22 11.5a5.5 5.5 0 00-3.3-5.1 5.5 5.5 0 00-9.5-2.9A5.5 5.5 0 002 8.5a5.5 5.5 0 001.4 9.1A5.5 5.5 0 0012.8 22a5.5 5.5 0 005.3-4A5.5 5.5 0 0022 11.5z" stroke="#10A37F" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="2.5" fill="#10A37F"/>
    </svg>
  ),
  claude: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#CC785C"/>
      <path d="M6 16l3-8 3 8M7.5 13h3M14 8v8M14 12h3a1.5 1.5 0 000-4h-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  langchain: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#1C3144"/>
      <circle cx="8" cy="12" r="2.5" fill="none" stroke="#00D1B2" strokeWidth="1.5"/>
      <circle cx="16" cy="12" r="2.5" fill="none" stroke="#00D1B2" strokeWidth="1.5"/>
      <path d="M10.5 12h3" stroke="#00D1B2" strokeWidth="1.5"/>
    </svg>
  ),
  perplexity: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#20808D"/>
      <path d="M12 4l2 7h7l-5.5 4 2 7L12 18l-5.5 4 2-7L3 11h7z" fill="white" opacity=".9"/>
    </svg>
  ),
  midjourney: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#000"/>
      <path d="M5 18L9 7l3 8 3-8 4 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  huggingface: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
      <circle cx="9" cy="11" r="1.5" fill="#333"/>
      <circle cx="15" cy="11" r="1.5" fill="#333"/>
      <path d="M8 15c1 1.5 2 2 4 2s3-.5 4-2" stroke="#333" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M7 8c0-1.5 1-2.5 2-2.5s1.5.5 1.5.5M17 8c0-1.5-1-2.5-2-2.5S13.5 6 13.5 6" stroke="#333" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  make: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#6D00CC"/>
      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  n8n: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#EA4B71"/>
      <text x="2.5" y="16.5" fill="white" fontSize="8.5" fontWeight="800" fontFamily="monospace">n8n</text>
    </svg>
  ),

  // ── Frontend ───────────────────────────────────────────────────────────────
  react: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000"/>
      <path d="M7 17V7l10 12V7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6"/>
      <path d="M5 10h6M8 10v7" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M13 14c0-1 .8-2 2.5-2s2.5.9 2.5 2-.8 2-2.5 2-2.5.9-2.5 2 .8 2 2.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M6 11c0-2.7 1.35-4.05 4.05-4.05C12.75 6.95 13.5 8.3 15 8.3c1.8 0 2.7-1.35 2.7-4.05M6 17c0-2.7 1.35-4.05 4.05-4.05 2.7 0 3.45 1.35 4.95 1.35 1.8 0 2.7-1.35 2.7-4.05" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  vue: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M2 4h4l6 11 6-11h4L12 22 2 4z" fill="#42B883"/>
      <path d="M6 4h4l2 3.6L14 4h4l-6 11L6 4z" fill="#35495E"/>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect x="4" y="4" width="8" height="8" rx="4" fill="#F24E1E"/>
      <rect x="12" y="4" width="8" height="8" rx="4" fill="#FF7262"/>
      <rect x="4" y="12" width="8" height="8" rx="4" fill="#A259FF"/>
      <rect x="12" y="12" width="8" height="8" rx="4" fill="#1ABCFE"/>
      <circle cx="8" cy="12" r="4" fill="#0ACF83"/>
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M4 3l1.5 16L12 21l6.5-2L20 3H4z" fill="#E34F26"/>
      <path d="M12 5v14.5l5-1.4L18.2 5H12z" fill="#EF652A"/>
      <path d="M7.5 9h4.5v2H8l.3 3h3.7v2H7.2L7.5 9zm.5-4h7l-.2 2H8.2L8 5z" fill="white"/>
      <path d="M12 9h3.5l-.3 3H12v-1.3h2l.1-1.7H12V9zm0 4h1.9l-.2 2.2-1.7.5V13z" fill="#EBEBEB"/>
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M5 4h14v8H12L5 4z" fill="#0055FF"/>
      <path d="M5 12h7l7 8H5v-8z" fill="#0055FF" opacity=".6"/>
      <path d="M5 20h7l-7-8v8z" fill="#0055FF" opacity=".3"/>
    </svg>
  ),

  // ── Backend ────────────────────────────────────────────────────────────────
  nodejs: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#339933"/>
      <path d="M12 6v12M7.5 8.5l4.5 3.5-4.5 3.5M16.5 8.5l-4.5 3.5 4.5 3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 2C8 2 7 4 7 6v2h5v1H5C3 9 2 10.5 2 13s1 4 3 4h2v-2c0-2 1.5-3 3-3h4c2 0 3-1 3-3V6c0-2-1-4-5-4zm-1.5 2.5a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
      <path d="M12 22c4 0 5-2 5-4v-2h-5v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-2v2c0 2-1.5 3-3 3H10c-2 0-3 1-3 3v3c0 2 1 4 5 4zm1.5-2.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
    </svg>
  ),
  laravel: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M23 7.5L18 2 9 5 4.5 10l1 7 5.5 5 7.5-1.5L22 15l1-7.5z" fill="#FF2D20" opacity=".9"/>
      <path d="M9 5l4 6-4.5 6M14 11l5-4M13 17l5.5 1" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="12" cy="12" r="10" fill="#009688"/>
      <path d="M13 4l-5 10h5l-2 6 7-10h-5l2-6z" fill="white"/>
    </svg>
  ),
  graphql: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="#E10098" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="3" r="1.5" fill="#E10098"/>
      <circle cx="20" cy="7.5" r="1.5" fill="#E10098"/>
      <circle cx="20" cy="16.5" r="1.5" fill="#E10098"/>
      <circle cx="12" cy="21" r="1.5" fill="#E10098"/>
      <circle cx="4" cy="16.5" r="1.5" fill="#E10098"/>
      <circle cx="4" cy="7.5" r="1.5" fill="#E10098"/>
      <line x1="4" y1="7.5" x2="20" y2="7.5" stroke="#E10098" strokeWidth="1"/>
      <line x1="4" y1="16.5" x2="20" y2="16.5" stroke="#E10098" strokeWidth="1"/>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="4" fill="#000"/>
      <text x="2" y="16" fill="white" fontSize="10" fontWeight="700" fontFamily="Arial">Ex</text>
    </svg>
  ),
  fastify: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="4" fill="#000"/>
      <path d="M6 8h12M6 12h8M6 16h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 14l3-2-3-2" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  restapi: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="4" fill="#6366F1"/>
      <path d="M4 12h16M14 7l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // ── Mobile ─────────────────────────────────────────────────────────────────
  flutter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M13 3L4 12l3 3 9-9-3-3z" fill="#54C5F8"/>
      <path d="M13 3l-3 3 6 6-3 3 3 3 6-6-9-9z" fill="#01579B"/>
      <path d="M10 18l3-3-3-3-3 3 3 3z" fill="#29B6F6"/>
    </svg>
  ),
  expo: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#000"/>
      <path d="M4 12C4 8 7.5 5 12 5s8 3 8 7c0 2-1 3.5-2 4.5L12 20l-6-3.5C5 15.5 4 14 4 12z" fill="white" opacity=".9"/>
    </svg>
  ),
  swift: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#F05138"/>
      <path d="M19 7c-2-3-7-4.5-11-2 3 2.5 5 5.5 5 8-1.5-1.5-4-4-5.5-5.5C8 10.5 9.5 14.5 11 17c-2.5-1-4.5-3-5-6C4 15.5 6 20 11 21c5 .5 8-3 8-7.5 0-2-.5-4.5-1.5-6.5H19z" fill="white"/>
    </svg>
  ),
  kotlin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M2 2h20L12 12l10 10H2V2z" fill="url(#kotlinGrad)"/>
      <defs>
        <linearGradient id="kotlinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7F52FF"/>
          <stop offset="50%" stopColor="#C811E1"/>
          <stop offset="100%" stopColor="#E8440E"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  pwa: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect width="24" height="24" rx="6" fill="#5A0FC8"/>
      <text x="1.5" y="15.5" fill="white" fontSize="7" fontWeight="900" fontFamily="Arial">PWA</text>
    </svg>
  ),
  reactNative: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 12 12)"/>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    </svg>
  ),

  // ── Database ───────────────────────────────────────────────────────────────
  postgres: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791"/>
      <path d="M4 6v8c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#336791" strokeWidth="1.5" fill="#4A90D9" opacity=".3"/>
      <path d="M4 10c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="#336791" strokeWidth="1.5"/>
      <path d="M20 10v4" stroke="#336791" strokeWidth="1.5"/>
      <path d="M4 10v4" stroke="#336791" strokeWidth="1.5"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 2C8 2 6 6 6 10c0 2.5 1 5 3 6.5l1 5.5h4l1-5.5c2-1.5 3-4 3-6.5 0-4-2-8-6-8z" fill="#47A248"/>
      <path d="M12 4v14" stroke="#A8D08D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M4 6h16M4 12h10M4 18h16" stroke="#00758F" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 15l3-3 3 3" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 12v7" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <ellipse cx="12" cy="17" rx="8" ry="3" fill="#DC382D"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="#DC382D"/>
      <ellipse cx="12" cy="7" rx="8" ry="3" fill="#DC382D"/>
      <line x1="4" y1="7" x2="4" y2="17" stroke="#DC382D" strokeWidth="1.5"/>
      <line x1="20" y1="7" x2="20" y2="17" stroke="#DC382D" strokeWidth="1.5"/>
      <ellipse cx="12" cy="7" rx="8" ry="3" fill="#FF6B6B"/>
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M5 20L7 7l4 4 2-7 5 9L5 20z" fill="#FFCA28"/>
      <path d="M5 20l7-3.5L18 13 13 4l-2 7-4-4L5 20z" fill="#F57F17" opacity=".8"/>
      <path d="M5 20l7-3.5V4L9 11l-4 9z" fill="#FF8F00"/>
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M11.9 4L4 14.5h7.2l-.3 5.5L19 9h-7.2L11.9 4z" fill="#3ECF8E"/>
    </svg>
  ),

  // ── Cloud ──────────────────────────────────────────────────────────────────
  aws: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M7 14c-2.5-.5-4-2-4-4a4 4 0 014-4c.5-2 2.3-3.5 4.5-3.5A5.5 5.5 0 0117 7c2 .5 4 2 4 4s-2 3.5-4 3.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M7 19l2.5-2.5M17 19l-2.5-2.5M12 20v-6" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M15 5H9L5 10l2.5 5H9l3 4 3-4h1.5L19 10l-4-5z" fill="none" stroke="#4285F4" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="8.5" cy="10" r="1.5" fill="#EA4335"/>
      <circle cx="15.5" cy="10" r="1.5" fill="#34A853"/>
      <circle cx="12" cy="14" r="1.5" fill="#FBBC04"/>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000"/>
      <path d="M12 7l7 10H5l7-10z" fill="white"/>
    </svg>
  ),
  cloudflare: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M15.5 14.5c.3-.8.2-1.8-.4-2.5-.6-.6-1.4-.9-2.3-.8l-6.3.1a.3.3 0 01-.2-.5c.4-.6 1-.9 1.7-.9l.8.1a4 4 0 017.4-1.5c.2 0 .4 0 .6.1a2.5 2.5 0 012.2 2.5 2.5 2.5 0 01-2.5 2.5l-1-.1z" fill="#F38020"/>
      <path d="M17 14.5H6.5a.3.3 0 010-.6l10.5-.1a1.8 1.8 0 010 .7z" fill="#FBAD41"/>
    </svg>
  ),
  digitalocean: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="12" cy="10" r="6" fill="none" stroke="#0080FF" strokeWidth="2"/>
      <circle cx="12" cy="10" r="3" fill="#0080FF"/>
      <line x1="6" y1="17" x2="12" y2="17" stroke="#0080FF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="6" y1="20" x2="9.5" y2="20" stroke="#0080FF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M13 3L6 14h5l-4 7h12L13 3z" fill="url(#azureGrad)"/>
      <defs>
        <linearGradient id="azureGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0078D4"/>
          <stop offset="100%" stopColor="#50E6FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),

  // ── DevOps ─────────────────────────────────────────────────────────────────
  docker: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <rect x="2" y="10" width="4" height="3" rx="1" fill="#2496ED"/>
      <rect x="7" y="10" width="4" height="3" rx="1" fill="#2496ED"/>
      <rect x="12" y="10" width="4" height="3" rx="1" fill="#2496ED"/>
      <rect x="7" y="6" width="4" height="3" rx="1" fill="#2496ED"/>
      <rect x="12" y="6" width="4" height="3" rx="1" fill="#2496ED"/>
      <path d="M2 15c1.5 2.5 4.5 3.5 8 2.5 2-.5 4-2 5-4 1.5 0 4-.5 5-3" stroke="#2496ED" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="20" cy="11" r="1" fill="#2496ED"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7C6.7 19.9 6.1 18 6.1 18c-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.3.3.6.9.6 1.8V21c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" fill="#333"/>
    </svg>
  ),
  cicd: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="5" cy="12" r="2.5" fill="none" stroke="#6366F1" strokeWidth="1.5"/>
      <circle cx="19" cy="12" r="2.5" fill="none" stroke="#6366F1" strokeWidth="1.5"/>
      <circle cx="12" cy="5" r="2.5" fill="none" stroke="#6366F1" strokeWidth="1.5"/>
      <circle cx="12" cy="19" r="2.5" fill="none" stroke="#6366F1" strokeWidth="1.5"/>
      <path d="M7.5 12h9M12 7.5v9" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 2C9 2 7 4 7 7c0 2 .8 4 2 5.5V15l-2 1.5C5.5 17.5 5 19 5 20h14c0-1-.5-2.5-2-3.5L15 15v-2.5C16.2 11 17 9 17 7c0-3-2-5-5-5z" fill="#E8D44D" stroke="#000" strokeWidth=".5"/>
      <circle cx="10" cy="8" r="1" fill="#000"/>
      <circle cx="14" cy="8" r="1" fill="#000"/>
      <path d="M10 10.5c.5.7 1.5.7 2 0" stroke="#000" strokeWidth=".8" strokeLinecap="round"/>
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 3l7 4v9l-7 4-7-4V7l7-4z" stroke="#326CE5" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="#326CE5"/>
      <line x1="12" y1="3" x2="12" y2="10" stroke="#326CE5" strokeWidth="1"/>
      <line x1="12" y1="14" x2="12" y2="21" stroke="#326CE5" strokeWidth="1"/>
      <line x1="5" y1="7" x2="10.3" y2="10.5" stroke="#326CE5" strokeWidth="1"/>
      <line x1="13.7" y1="13.5" x2="19" y2="17" stroke="#326CE5" strokeWidth="1"/>
      <line x1="19" y1="7" x2="13.7" y2="10.5" stroke="#326CE5" strokeWidth="1"/>
      <line x1="10.3" y1="13.5" x2="5" y2="17" stroke="#326CE5" strokeWidth="1"/>
    </svg>
  ),
  nginx: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#009639"/>
      <path d="M8 17V7l8 10V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

// ─── Tab data using brand SVGs ────────────────────────────────────────────────

const tabs: Tab[] = [
  {
    label: 'Marketing Tech',
    items: [
      { icon: logos.googleAds,     label: 'Google Ads' },
      { icon: logos.googleAnalytics, label: 'Google Analytics 4' },
      { icon: logos.metaAds,       label: 'Meta Ads Manager' },
      { icon: logos.semrush,       label: 'SEMrush' },
      { icon: logos.ahrefs,        label: 'Ahrefs' },
      { icon: logos.hubspot,       label: 'HubSpot' },
      { icon: logos.mailchimp,     label: 'Mailchimp' },
      { icon: logos.hotjar,        label: 'Hotjar' },
      { icon: logos.searchConsole, label: 'Google Search Console' },
    ],
  },
  {
    label: 'AI & GenAI',
    items: [
      { icon: logos.openai,      label: 'OpenAI GPT-4' },
      { icon: logos.claude,      label: 'Anthropic Claude' },
      { icon: logos.langchain,   label: 'LangChain' },
      { icon: logos.perplexity,  label: 'Perplexity AI' },
      { icon: logos.midjourney,  label: 'Midjourney' },
      { icon: logos.huggingface, label: 'Hugging Face' },
      { icon: logos.make,        label: 'Make (Integromat)' },
      { icon: logos.n8n,         label: 'n8n Automation' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { icon: logos.react,      label: 'React.js' },
      { icon: logos.nextjs,     label: 'Next.js' },
      { icon: logos.typescript, label: 'TypeScript' },
      { icon: logos.tailwind,   label: 'Tailwind CSS' },
      { icon: logos.vue,        label: 'Vue.js' },
      { icon: logos.figma,      label: 'Figma' },
      { icon: logos.html,       label: 'HTML / CSS' },
      { icon: logos.framer,     label: 'Framer Motion' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { icon: logos.nodejs,   label: 'Node.js' },
      { icon: logos.python,   label: 'Python' },
      { icon: logos.laravel,  label: 'PHP / Laravel' },
      { icon: logos.fastapi,  label: 'FastAPI' },
      { icon: logos.restapi,  label: 'REST APIs' },
      { icon: logos.graphql,  label: 'GraphQL' },
      { icon: logos.express,  label: 'Express.js' },
      { icon: logos.fastify,  label: 'Fastify' },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { icon: logos.reactNative, label: 'React Native' },
      { icon: logos.flutter,     label: 'Flutter' },
      { icon: logos.expo,        label: 'Expo' },
      { icon: logos.swift,       label: 'iOS (Swift)' },
      { icon: logos.kotlin,      label: 'Android (Kotlin)' },
      { icon: logos.pwa,         label: 'Progressive Web Apps' },
    ],
  },
  {
    label: 'Database',
    items: [
      { icon: logos.postgres,  label: 'PostgreSQL' },
      { icon: logos.mongodb,   label: 'MongoDB' },
      { icon: logos.mysql,     label: 'MySQL' },
      { icon: logos.redis,     label: 'Redis' },
      { icon: logos.firebase,  label: 'Firebase' },
      { icon: logos.supabase,  label: 'Supabase' },
    ],
  },
  {
    label: 'Cloud',
    items: [
      { icon: logos.aws,          label: 'AWS' },
      { icon: logos.gcp,          label: 'Google Cloud' },
      { icon: logos.vercel,       label: 'Vercel' },
      { icon: logos.cloudflare,   label: 'Cloudflare' },
      { icon: logos.digitalocean, label: 'DigitalOcean' },
      { icon: logos.azure,        label: 'Azure' },
    ],
  },
  {
    label: 'DevOps',
    items: [
      { icon: logos.docker,     label: 'Docker' },
      { icon: logos.github,     label: 'GitHub Actions' },
      { icon: logos.cicd,       label: 'CI/CD Pipelines' },
      { icon: logos.linux,      label: 'Linux / Bash' },
      { icon: logos.kubernetes, label: 'Kubernetes' },
      { icon: logos.nginx,      label: 'Nginx' },
    ],
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function TechSection() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section className="bg-[#0a0a0a] px-10 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Our Stack
        </span>
        <h2 className="text-[38px] font-bold text-white">
          <span className="text-blue-500">Technologies</span> and Platforms We Use
        </h2>
        <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-7">
          We work with the latest tools across marketing, development and AI
          to deliver high-performance digital solutions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-700 overflow-x-auto scrollbar-hide mb-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-pointer pb-3 px-4 text-[14px] font-medium whitespace-nowrap transition-colors duration-200 border-b-2 -mb-[2px]
              ${active === i
                ? 'text-blue-400 border-blue-400'
                : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {current.items.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer flex flex-col items-center gap-3 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 rounded-2xl px-4 py-5 transition-all duration-200 group"
          >
            <div className="w-12 h-12 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full">
              {item.icon}
            </div>
            <span className="text-gray-400 text-[12px] font-medium text-center leading-tight group-hover:text-gray-200 transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
