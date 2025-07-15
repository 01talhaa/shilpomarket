import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Browse All", href: "/products" },
        { name: "Metals", href: "/products?category=metals" },
        { name: "Plastics", href: "/products?category=plastics" },
        { name: "Textiles", href: "/products?category=textiles" },
        { name: "Chemicals", href: "/products?category=chemicals" },
      ],
    },
    {
      title: "Suppliers",
      links: [
        { name: "Find Suppliers", href: "/sellers" },
        { name: "Become a Supplier", href: "/auth/signup?type=supplier" },
        { name: "Supplier Guidelines", href: "/guidelines" },
        { name: "Verification Process", href: "/verification" },
        { name: "Success Stories", href: "/success-stories" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Trading Guide", href: "/guide" },
        { name: "API Documentation", href: "/api-docs" },
        { name: "Security", href: "/security" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">RawMart</span>
                <div className="text-xs text-gray-400">Global B2B Marketplace</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The world&apos;s leading B2B marketplace for raw materials. Connecting verified suppliers and buyers globally
              with secure transactions and quality assurance.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { name: "LinkedIn", icon: "💼", href: "#" },
                { name: "Twitter", icon: "🐦", href: "#" },
                { name: "Facebook", icon: "📘", href: "#" },
                { name: "Instagram", icon: "📷", href: "#" },
              ].map((social, index) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <span className="text-xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-lg font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest market insights, product updates, and trading opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-300 text-white"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} RawMart. All rights reserved. | Built with ❤️ for global trade
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
