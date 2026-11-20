"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Navbar from "./Navbar"
import {  ChevronDown, PhoneCall } from "lucide-react"

export default function Header() {
   

    return (
<header className="border-b border-gray-900 fixed top-0 left-0 w-full z-50">
    <div className="px-10 py-5.5">
        <div className="flex items-center">
            <div className="logo-box">
                <a href="#" className="text-white font-semibold text-[26px] py-2 inline-block">
                    Reachmest
                </a>
            </div>

            <nav className="ml-auto">
                <ul className="flex gap-6 items-center">
                    <li>
                        <Link href="/" className="text-gray-300 text-[18px] py-2 inline-flex items-center  gap-1 font-semibold">
                            Reachmest AI
                            <ChevronDown size={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 text-[18px] py-2 inline-flex items-center  gap-1 font-semibold">
                            About
                            <ChevronDown size={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 text-[18px] py-2 inline-flex items-center  gap-1 font-semibold">
                            Service
                            <ChevronDown size={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 text-[18px] py-2 inline-flex items-center  gap-1 font-semibold">
                            Industries
                            <ChevronDown size={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 text-[18px] py-2 inline-flex items-center  gap-1 font-semibold">
                            Portfolio
                            <ChevronDown size={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 text-[18px] py-2 inline-flex items-center  gap-1 font-semibold">
                            Resources
                            <ChevronDown size={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 text-[18px] inline-block font-semibold border-[#480B0B] border px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-colors duration-200">
                            Explore Reachmest
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 font-semibold text-white px-6 py-3 rounded-full transition-colors duration-200 text-[18px]">
                    <PhoneCall size={18} />
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</header>
    )
}