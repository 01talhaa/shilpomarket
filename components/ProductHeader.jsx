"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProductHeader() {
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

          {/* Advanced Search Bar */}
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
            {/* Quick Actions */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <Link href="/sellers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Find Suppliers
              </Link>
              <Link href="/insights" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Market Insights
              </Link>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
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
              <button 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => router.push("/auth/login")}
              >
                Sign In
              </button>
            </div>

            {/* Mobile Menu */}
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


        {/* Mobile Search */}
        <div className="md:hidden px-4 py-3 bg-white border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <Link href="/sellers" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Find Suppliers
              </Link>
              <Link href="/insights" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Market Insights
              </Link>
              <Link href="/auth/login" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
