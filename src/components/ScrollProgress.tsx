'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(false)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const percent = (scrollTop / docHeight) * 100
            setProgress(percent)
            setVisible(scrollTop > 100)
        }

        window.addEventListener('scroll', updateProgress)
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const radius = 28
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
        <button
            onClick={scrollToTop}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                transform: hovered ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            className={`fixed bottom-8 right-8 z-50 w-16 h-16 flex items-center justify-center cursor-pointer
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                transition-all duration-300`}
        >
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
                <circle
                    cx="32" cy="32" r={radius}
                    fill="none"
                    stroke="#ffffff20"
                    strokeWidth="3"
                />
                <circle
                    cx="32" cy="32" r={radius}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-100"
                />
            </svg>

            {/* Arrow Button */}
            <div className={`relative z-10 w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40
                transition-colors duration-200 ${hovered ? 'bg-blue-400' : 'bg-blue-500'}`}>
                <ArrowUp size={20} className="text-white" />
            </div>
        </button>
    )
}