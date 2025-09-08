"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"

export default function InsightsHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  // Helper function to get user display info
  const getUserDisplayInfo = () => {
    if (!user) return { initial: "U", name: "User", email: "", isVerified: false }
    
    let initial = "U"
    let name = "User"
    let email = user.email || ""
    let isVerified = user.isVerified || user.is_verified || false

    if (user.company_name || user.companyName) {
      const companyName = user.company_name || user.companyName
      initial = companyName[0].toUpperCase()
      name = companyName
    } else if (user.first_name || user.firstName) {
      const firstName = user.first_name || user.firstName
      const lastName = user.last_name || user.lastName || ""
      initial = firstName[0].toUpperCase()
      name = `${firstName} ${lastName}`.trim()
    } else if (user.name) {
      initial = user.name[0].toUpperCase()
      name = user.name
    }

    return { initial, name, email, isVerified }
  }

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
          <div className="flex-1 max-w-2xl mx-8 relative hidden md:block"> {/* Hide search on small screens */}
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

          {/* User Actions - Hidden on small/medium screens, shown on large screens */}
          <div className="hidden lg:flex items-center space-x-4">
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
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {getUserDisplayInfo().initial}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-gray-700 hidden md:block">
                      {getUserDisplayInfo().name}
                    </span>
                    {getUserDisplayInfo().isVerified && (
                      <span title="Verified User" className="text-blue-500 hidden md:block">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </span>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false); // Close menu on click
                      router.push((user.company_name || user.companyName) ? "/seller/dashboard" : "/buyer/dashboard");
                    }}
                  >
                    Dashboard
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false); // Close menu on click
                      router.push("/profile");
                    }}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-lg"
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false); // Close menu on click
                      router.push("/")
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/auth/login" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Sign In
              </Link>
            )}
          </div>

          {/* Hamburger Menu Icon - Visible on small/medium screens */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md pb-4">
            <div className="px-4 py-3 space-y-3">
              {/* Search Bar in Mobile Menu */}
              <div className="relative md:hidden mb-4">
                <input
                  type="text"
                  placeholder="Search articles, trends..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-50"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* User Actions in Mobile Menu */}
              {user ? (
                <>
                  <Link
                    href={(user.company_name || user.companyName) ? "/seller/dashboard" : "/buyer/dashboard"}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      {getUserDisplayInfo().initial}
                    </div>
                    <div className="text-gray-700 font-medium">{getUserDisplayInfo().name}</div>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <span className="text-gray-700 font-medium">Profile</span>
                  </Link>
                  <button
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                      router.push("/")
                    }}
                  >
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    <span className="text-red-600 font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                  <span className="text-gray-700 font-medium">Sign In</span>
                </Link>
              )}

              <hr className="my-2 border-gray-100" />

              {/* Additional Buttons in Mobile Menu */}
              <button
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5-5-5h5zm0 0V3" />
                </svg>
                <span className="text-gray-700 font-medium">Subscribe</span>
              </button>
              
              <button
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left relative"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="text-gray-700 font-medium">Saved Articles</span>
                <span className="absolute right-3 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">7</span>
              </button>

              <hr className="my-2 border-gray-100" />

              {/* Categories in Mobile Menu */}
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
      </div>
    </header>
  )
}