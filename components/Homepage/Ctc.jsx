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
              Join thousands of suppliers and manufacturers who trust ShilpoMarket for their raw material procurement. 
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-start">
            
            {/* Company Info */}
<div className="space-y-4 md:col-span-2 lg:col-span-1 flex flex-col items-center">
  {/* The container for the logo and title is already centered as a block by the parent's "items-center" */}
  <div className="flex items-center space-x-3">
    {/* <div className="relative">
      <img 
        src="/logo.png" 
        alt="ShilpoMarket Logo" 
        className="w-10 h-10"
      />
    </div> */}
    <div>
      <div className="text-xl font-bold">ShilpoMarket</div>
      {/* <div className="text-xs text-gray-400">Raw Materials Marketplace</div> */}
    </div>
  </div>

  {/* Added "text-center" to the paragraph */}
  <p className="text-gray-300 text-sm leading-relaxed text-center">
    The world's leading B2B marketplace for raw materials and industrial supplies, connecting manufacturers and suppliers globally.
  </p>
  
  {/* The social icons container is already centered as a block by the parent's "items-center" */}
  <div className="flex space-x-4">
    <a 
      href="https://www.facebook.com/profile.php?id=61578125325933" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
      </svg>
    </a>
    <a 
      href="https://www.instagram.com/shilpomarket?igsh=NXE1ZGY1ZHlmZTF4" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-pink-400 transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334 2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
      </svg>
    </a>
    <a 
      href="https://www.linkedin.com/company/shilpomarket/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
      </svg>
    </a>
    <a 
      href="https://youtube.com/@shilpomarket?si=KD3gPFYvL_gnkfyT" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-red-400 transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
  </div>
</div>

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
                <p className="text-gray-400 text-sm">Dhaka, Bangladesh<br />Serving global markets</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">📞 Contact</h4>
                <p className="text-gray-400 text-sm">+880 1346-616109<br />shilpomarket@gmail.com</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">🕒 Business Hours</h4>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM (GMT+6)<br />24/7 Customer Support</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} ShilpoMarket. All rights reserved.
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