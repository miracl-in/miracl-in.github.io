import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa"

const footerLinks = [
  { name: "Team", href: "/team" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" }
]

const socialLinks = [
  {
    icon: <FaLinkedin size={24} />,
    href: "https://linkedin.com/company/miraclin-technologies",
    label: "LinkedIn"
  },
  {
    icon: <FaInstagram size={24} />,
    href: "https://instagram.com/miraclin_technologies", 
    label: "Instagram"
  }
]

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white/90 backdrop-blur-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-12 gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">M</span>
          </div>
        </Link>

        <ul className="flex flex-col items-center justify-between md:flex-row gap-4 text-gray-700 text-sm font-medium">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-6 text-gray-700">
          {socialLinks.map(({ icon, href, label }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label={`Visit our ${label}`}
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-3">
        <p className="text-center text-white font-semibold text-sm">
          &copy; {new Date().getFullYear()} Miraclin Technologies - All Rights Reserved
        </p>
      </div>
    </footer>
  )
}