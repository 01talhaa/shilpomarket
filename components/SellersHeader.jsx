"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"

export default function SellersHeader() {
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

  const supplierCategories = [
    { name: "Metals & Alloys", icon: "🔩", href: "/sellers?category=metals" },
    { name: "Plastics & Polymers", icon: "🧪", href: "/sellers?category=plastics" },
    { name: "Chemicals", icon: "⚗️", href: "/sellers?category=chemicals" },
    { name: "Textiles", icon: "🧵", href: "/sellers?category=textiles" },
    { name: "Electronic Materials", icon: "🔌", href: "/sellers?category=electronics" },
    { name: "Construction Materials", icon: "🏗️", href: "/sellers?category=construction" },
    { name: "Food Grade Materials", icon: "🌾", href: "/sellers?category=food" },
    { name: "Automotive Parts", icon: "🚗", href: "/sellers?category=automotive" },
  ]

  const searchSuggestions = [
    "Steel Suppliers - Verified",
    "Plastic Manufacturers - Global",
    "Chemical Suppliers - ISO Certified",
    "Textile Manufacturers - Organic",
    "Metal Fabricators - Local",
    "Polymer Suppliers - Bulk Orders",
    "Construction Material Suppliers",
    "Electronic Component Suppliers",
  ]

  const supplierRegions = [
    { name: "North America", count: "450+", flag: "🇺🇸" },
    { name: "Europe", count: "380+", flag: "🇪🇺" },
    { name: "Asia", count: "520+", flag: "🌏" },
    { name: "Middle East", count: "150+", flag: "🇦🇪" },
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
              <span className="text-blue-600 font-medium">Suppliers</span>
            </div>
          </div>

          {/* Advanced Supplier Search */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className={`relative transition-all duration-300 ${
              isSearchFocused ? "transform scale-105" : ""
            }`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search suppliers, companies, certifications..."
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
                    <span>🔍</span>
                    <span>Find Suppliers</span>
                  </button>
                </div>
              </div>

              {/* Search Suggestions Dropdown */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
                  <div className="p-4">
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Supplier Searches</h4>
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
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
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
              <>
                <Link href="/auth/login" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Sign In
                </Link>
                
                <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Join as Supplier
                </Link>
              </>
            )}
          </div>
        </div>


        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              {supplierCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-gray-700 font-medium">{category.name}</span>
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
