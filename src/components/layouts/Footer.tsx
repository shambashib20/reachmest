import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6'

const services = [
    'Mobile App Development', 'Software Product Development',
    'Web App Development', 'Application Modernization', 'Software Consulting',
    'Software Development', 'DevOps Services', 'IoT Services',
    'Enterprise Software Development', 'eCommerce App Development',
]

const hireDevs = [
    'Hire React Native Developers', 'Hire Mobile App Developers',
    'Hire Dedicated Developers', 'Hire Full-Stack Developers', 'Hire AI Developers',
    'Hire React JS Developers', 'Hire Web Developers',
    'Hire WordPress Developers', 'Hire Next JS Developers',
    'Hire Healthcare Software Developers',
]

export default function Footer() {
    return (
        <footer className="bg-[#0d1117] text-gray-400">

            {/* Top Section */}
            <div className="px-10 py-16 grid grid-cols-3 gap-12 border-b border-gray-800">

                {/* Col 1 — Brand */}
                <div>
                    <a href="/" className="text-white font-bold text-[24px] inline-block mb-4">Reachmest</a>
                    <p className="text-[14px] leading-7 mb-6">
                        Reachmest is a client centric and agile software development company specializing in a broad range of technology solutions, with expertise in Software Development, DevOps, Business Consulting, Cloud Computing, and Quality Assurance.
                    </p>
                    <h4 className="text-white font-semibold text-[14px] mb-3">Follow Us</h4>
                    <div className="flex gap-3">
                        {[FaLinkedinIn, FaFacebookF, FaXTwitter, FaInstagram].map((Icon, i) => (
    <a key={i} href="#" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
        <Icon size={16} />
    </a>
))}
                    </div>
                </div>

                {/* Col 2 — Offices */}
                <div>
                    <h4 className="text-white font-semibold text-[16px] mb-6">Our Offices</h4>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h5 className="text-white font-semibold text-[14px] mb-1 flex items-center gap-2">
                                🇦🇪 UAE
                            </h5>
                            <p className="text-[13px] leading-6">Unique Hub Business Center, Near Al Twar Center, Al Qusais, Dubai City, UAE.</p>
                            <p className="text-[13px] mt-1">📞 +971 58 520 1525</p>
                        </div>
                        <div>
                            <h5 className="text-white font-semibold text-[14px] mb-1 flex items-center gap-2">
                                🇮🇳 India
                            </h5>
                            <p className="text-[13px] leading-6">905, Dwarkesh Business Hub, Motera, Ahmedabad, Gujarat, 380005</p>
                        </div>
                    </div>
                </div>

                {/* Col 3 — Contact */}
                <div>
                    <div className="mb-6">
                        <h4 className="text-white font-semibold text-[16px] mb-3">For Sales</h4>
                        <p className="text-[13px]">Email: <a href="mailto:sales@reachmest.com" className="text-blue-400 hover:underline">sales@reachmest.com</a></p>
                        <p className="text-[13px] mt-1">India: +91 9974756322</p>
                        <p className="text-[13px]">UAE: +971 52 715 1475</p>
                        <p className="text-[13px]">UK: +44 7518273394</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-[16px] mb-3">Reach Us by Email</h4>
                        <p className="text-[13px]">General Inquiry: <a href="mailto:info@reachmest.com" className="text-blue-400 hover:underline">info@reachmest.com</a></p>
                        <p className="text-[13px] mt-1">Career Email: <a href="mailto:hr@reachmest.com" className="text-blue-400 hover:underline">hr@reachmest.com</a></p>
                    </div>
                </div>

            </div>

            {/* Middle — Links Grid */}
            <div className="px-10 py-10 grid grid-cols-4 gap-8 border-b border-gray-800">
                <div>
                    <h4 className="text-white font-semibold text-[14px] mb-4">Services</h4>
                    <ul className="flex flex-col gap-2">
                        {services.slice(0, 5).map((s, i) => (
                            <li key={i}><a href="#" className="text-[13px] hover:text-white transition-colors">{s}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-[14px] mb-4 opacity-0">-</h4>
                    <ul className="flex flex-col gap-2">
                        {services.slice(5).map((s, i) => (
                            <li key={i}><a href="#" className="text-[13px] hover:text-white transition-colors">{s}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-[14px] mb-4">Hire Devs</h4>
                    <ul className="flex flex-col gap-2">
                        {hireDevs.slice(0, 5).map((s, i) => (
                            <li key={i}><a href="#" className="text-[13px] hover:text-white transition-colors">{s}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-[14px] mb-4 opacity-0">-</h4>
                    <ul className="flex flex-col gap-2">
                        {hireDevs.slice(5).map((s, i) => (
                            <li key={i}><a href="#" className="text-[13px] hover:text-white transition-colors">{s}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-10 py-5 flex items-center justify-between">
                <p className="text-[13px]">© 2026 Reachmest. All rights reserved.</p>
                <div className="flex gap-6">
                    {['About Us', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Sitemap'].map((link, i) => (
                        <a key={i} href="#" className="text-[13px] hover:text-white transition-colors">{link}</a>
                    ))}
                </div>
            </div>

        </footer>
    )
}