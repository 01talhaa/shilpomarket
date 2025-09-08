"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"

export default function ProductHeader() {
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

  const quickCategories = [
    { name: "Steel & Metals", icon: "🔩", href: "/categories/metals" },
    { name: "Plastics", icon: "🧪", href: "/categories/plastics" },
    { name: "Chemicals", icon: "⚗️", href: "/categories/chemicals" },
    { name: "Textiles", icon: "🧵", href: "/categories/textiles" },
    { name: "Electronics", icon: "🔌", href: "/categories/electronics" },
    { name: "Construction", icon: "🏗️", href: "/categories/construction" },
    { name: "Food Grade", icon: "🌾", href: "/categories/food" },
    { name: "Automotive", icon: "🚗", href: "/categories/automotive" },
  ]

  const searchSuggestions = [
    "Steel Rods - Premium Quality",
    "Plastic Pellets - Industrial Grade",
    "Cotton Fiber - Organic",
    "Aluminum Sheets - High Purity",
    "Chemical Grade Materials",
    "Industrial Metals",
    "Polymer Materials",
    "Textile Fibers",
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-200" : "bg-white shadow-md"
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 border-b border-gray-100">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
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
                <div className="text-xs text-gray-500 -mt-1">B2B Marketplace</div>
              </div>
            </Link>
            
            {/* Breadcrumb */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Products</span>
            </div>
          </div>

          {/* Advanced Search Bar (Desktop Only) */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for products, suppliers, materials..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <select className="px-3 py-3 bg-gray-50 border-t border-b border-gray-300 text-sm text-gray-600 focus:outline-none">
                  <option>All Categories</option>
                  <option>Metals & Alloys</option>
                  <option>Plastics</option>
                  <option>Chemicals</option>
                  <option>Textiles</option>
                </select>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-r-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Advanced Search Suggestions */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-80 overflow-y-auto z-50">
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-500 mb-2 px-3">Popular Searches</div>
                    {searchSuggestions
                      .filter(suggestion => 
                        suggestion.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === ""
                      )
                      .map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchValue(suggestion)}
                          className="w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors text-sm text-gray-700 flex items-center space-x-3"
                        >
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <span>{suggestion}</span>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Quick Actions (Desktop Only) */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <Link href="/sellers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Find Suppliers
              </Link>
              <Link href="/insights" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Market Insights
              </Link>
            </div>

            {/* User Actions (Desktop and Cart) */}
            <div className="flex items-center space-x-3">
              <button className="hidden md:block p-2 text-gray-600 hover:text-blue-600 transition-colors"> {/* Hidden on mobile */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
              
              {user ? (
                <div className="relative group hidden md:block"> {/* Hidden on mobile */}
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
                      onClick={() => router.push((user.company_name || user.companyName) ? "/seller/dashboard" : "/buyer/dashboard")}
                    >
                      Dashboard
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => router.push("/profile")}
                    >
                      Profile
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-lg"
                      onClick={() => {
                        logout()
                        router.push("/")
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50 hidden md:block" // Hidden on mobile
                  onClick={() => router.push("/auth/login")}
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu & Filters (visible when isMobileMenuOpen is true) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg pb-4">
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="relative mb-3">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-r-xl focus:outline-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                {isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto z-50">
                    <div className="p-2">
                      <div className="text-xs font-semibold text-gray-500 mb-2 px-3">Popular Searches</div>
                      {searchSuggestions
                        .filter(suggestion => 
                          suggestion.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === ""
                        )
                        .map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchValue(suggestion)}
                            className="w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors text-sm text-gray-700 flex items-center space-x-3"
                          >
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>{suggestion}</span>
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile Categories/Filters - Simulating a "Filters" button functionality */}
              <div className="space-y-2 mt-4">
                <button className="w-full flex items-center justify-between px-3 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition-colors">
                  <span>Categories</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* For demonstration, let's just list the quick categories directly here for now.
                    In a real app, this would toggle a hidden filter section. */}
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {quickCategories.map((category) => (
                    <Link href={category.href} key={category.name} className="block px-3 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
                      {category.icon} {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-4 py-4 space-y-3">
              {user ? (
                <>
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      {getUserDisplayInfo().initial}
                    </div>
                    <div>
                      <div className="text-base font-medium text-gray-800">{getUserDisplayInfo().name}</div>
                      <div className="text-xs text-gray-600">{getUserDisplayInfo().email}</div>
                    </div>
                  </div>
                  <button
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium rounded-lg"
                    onClick={() => router.push((user.company_name || user.companyName) ? "/seller/dashboard" : "/buyer/dashboard")}
                  >
                    Dashboard
                  </button>
                  <button
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium rounded-lg"
                    onClick={() => router.push("/profile")}
                  >
                    Profile
                  </button>
                </>
              ) : (
                <button 
                  className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium rounded-lg"
                  onClick={() => router.push("/auth/login")}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                  </svg>
                  <span>Sign In</span>
                </button>
              )}
              
              <Link href="/sellers" className="flex items-center space-x-3 block text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium py-2 px-3 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-2A4 4 0 0111 16V9a4 4 0 014-4h2a4 4 0 014 4v7a4 4 0 01-4 4zm-5-10a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                <span>Find Suppliers</span>
              </Link>
              <Link href="/insights" className="flex items-center space-x-3 block text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium py-2 px-3 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <span>Market Insights</span>
              </Link>

              {user && (
                <button
                  className="flex items-center space-x-3 w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 transition-colors font-medium rounded-lg mt-3"
                  onClick={() => {
                    logout()
                    router.push("/")
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                  </svg>
                  <span>Logout</span>
                </button>
              )}
              
              {/* Wishlist item inside mobile menu */}
              <button className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Wishlist</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}