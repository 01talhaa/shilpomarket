import React from 'react'
import Link from "next/link";

const Ctc = () => {
  return (
    <div>
              <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Professional Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>
        <div className="absolute top-20 left-20 w-1 h-32 bg-gradient-to-b from-blue-400/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-1 bg-gradient-to-l from-blue-400/20 to-transparent animate-pulse-slow"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/20">
                🏭 Join 10,000+ Industrial Companies
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
            <p className="text-lg md:text-xl mb-10 text-slate-300 leading-relaxed">
              Join thousands of suppliers and manufacturers who trust RawMart for their raw material procurement. 
              Start optimizing your supply chain today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/auth/signup"
                className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  🏪 Start Selling Today
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </Link>
              <Link
                href="/products"
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-xl border-2 border-white/30"
              >
                <span className="flex items-center justify-center">
                  � Explore Materials
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </Link>
            </div>

            {/* Additional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: "�", title: "Secure Trading", desc: "Protected transactions" },
                { icon: "✅", title: "Verified Suppliers", desc: "Quality guaranteed" },
                { icon: "�", title: "Global Reach", desc: "Access worldwide markets" },
              ].map((benefit, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-3xl mb-2 opacity-80">{benefit.icon}</div>
                  <div className="text-lg font-semibold mb-1">{benefit.title}</div>
                  <div className="text-sm text-slate-300">{benefit.desc}</div>
                </div>
              ))}
            </div>
      <footer className="">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Company Info */}
            {/* <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🏭</span>
                </div>
                <div>
                  <div className="text-xl font-bold">RawMart</div>
                  <div className="text-xs text-gray-400">Industrial Materials</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The world's leading B2B marketplace for raw materials and industrial supplies, connecting manufacturers and suppliers globally.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📘</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">🐦</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">💼</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📧</a>
              </div>
            </div> */}

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Our Story", href: "/story" },
                  { name: "Careers", href: "/careers" },
                  { name: "Press", href: "/press" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
              <ul className="space-y-2">
                {[
                  { name: "Browse All", href: "/products" },
                  { name: "Metals & Alloys", href: "/products?category=metals" },
                  { name: "Plastics & Polymers", href: "/products?category=plastics" },
                  { name: "Textiles & Fibers", href: "/products?category=textiles" },
                  { name: "Chemicals", href: "/products?category=chemicals" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                {[
                  { name: "Help Center", href: "/help" },
                  { name: "Trading Guide", href: "/guide" },
                  { name: "API Documentation", href: "/api-docs" },
                  { name: "Security", href: "/security" },
                  { name: "Terms of Service", href: "/terms" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm">Get the latest industry insights and market updates delivered to your inbox.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">📍 Headquarters</h4>
                <p className="text-gray-400 text-sm">123 Industrial Avenue<br />New York, NY 10001</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">📞 Contact</h4>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567<br />support@rawmart.com</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">🕒 Business Hours</h4>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST<br />24/7 Customer Support</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} RawMart. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  )
}

export default Ctc