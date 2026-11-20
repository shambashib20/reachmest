import Link from "next/link"
import { ChevronDown, Phone } from "lucide-react"

const navLinks = [
  { label: "Services", href: "/services", dropdown: true },
  { label: "Hire", href: "/hire", dropdown: true },
  { label: "Industries", href: "/industries", dropdown: false },
  { label: "Case Studies", href: "/case-studies", dropdown: false },
  { label: "Resources", href: "/resources", dropdown: true },
  { label: "About", href: "/about", dropdown: false },
]

export default function Navbar() {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      <ul className="flex items-center">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-center gap-1 px-4 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
              {link.dropdown && <ChevronDown size={13} className="opacity-60" />}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="ml-4 flex items-center gap-2 bg-accent hover:bg-accent/85 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
      >
        <Phone size={13} />
        Contact Us
      </Link>
    </nav>
  )
}