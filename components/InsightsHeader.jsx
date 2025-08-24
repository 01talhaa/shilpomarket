"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function InsightsHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const insightCategories = [
    { name: "Market News", icon: "📊", href: "/insights?category=market-news", count: "Latest" },
    { name: "Technology", icon: "🚀", href: "/insights?category=technology", count: "Trending" },
    { name: "Sustainability", icon: "🌱", href: "/insights?category=sustainability", count: "Green" },
    { name: "Regulations", icon: "📋", href: "/insights?category=regulations", count: "Updates" },
    { name: "Industry Trends", icon: "📈", href: "/insights?category=industry-trends", count: "Hot" },
    { name: "Supply Chain", icon: "🔗", href: "/insights?category=supply-chain", count: "Critical" },
    { name: "Economics", icon: "💰", href: "/insights?category=economics", count: "Global" },
    { name: "Innovation", icon: "💡", href: "/insights?category=innovation", count: "Future" },
  ]

  const searchSuggestions = [
    "Steel Price Trends 2024",
    "Sustainable Manufacturing",
    "Supply Chain Disruptions",
    "Raw Material Shortages",
    "Green Technology",
    "Trade War Impact",
    "Electric Vehicle Materials",
    "Blockchain in Supply Chain",
  ]

  const trendingTopics = [
    { name: "AI in Manufacturing", trend: "+25%" },
    { name: "Green Materials", trend: "+18%" },
    { name: "Supply Chain Tech", trend: "+32%" },
    { name: "Material Shortages", trend: "+41%" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-200" : "bg-white shadow-md"
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 border-b border-gray-100">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="ShilpoMarket Logo" 
                  className="w-auto h-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-gray-800">
                <div className="text-xl font-bold tracking-tight">ShilpoMarket</div>
                <div className="text-xs text-gray-600 -mt-1">B2B Marketplace</div>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-1 text-sm">
              <span className="text-gray-400">/</span>
              <span className="text-blue-600 font-medium">Industry Insights</span>
            </div>
          </div>

          {/* Advanced Insights Search */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className={`relative transition-all duration-300 ${
              isSearchFocused ? "transform scale-105" : ""
            }`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, trends, market analysis..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  className="w-full h-12 pl-12 pr-20 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <span>📰</span>
                    <span>Search Insights</span>
                  </button>
                </div>
              </div>

              {/* Search Suggestions Dropdown */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
                  <div className="p-4">
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Searches</h4>
                      <div className="space-y-1">
                        {searchSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-600 transition-colors"
                            onClick={() => setSearchValue(suggestion)}
                          >
                            <span className="text-gray-400 mr-2">🔍</span>
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Trending Topics</h4>
                      <div className="space-y-1">
                        {trendingTopics.map((topic, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-600 transition-colors flex items-center justify-between"
                            onClick={() => setSearchValue(topic.name)}
                          >
                            <span>🔥 {topic.name}</span>
                            <span className="text-green-600 font-medium text-xs">{topic.trend}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5-5-5h5zm0 0V3" />
              </svg>
              <span className="hidden sm:inline text-sm text-gray-600 ml-1">Subscribe</span>
            </button>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">7</span>
            </button>
            
            <Link href="/auth/login" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              {insightCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-gray-700 font-medium">{category.name}</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{category.count}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}