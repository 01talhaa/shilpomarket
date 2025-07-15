"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isShrinked, setIsShrinked] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [categoriesTimeout, setCategoriesTimeout] = useState(null)

  const handleCategoriesMouseEnter = () => {
    if (categoriesTimeout) {
      clearTimeout(categoriesTimeout)
      setCategoriesTimeout(null)
    }
    setIsCategoriesOpen(true)
  }

  const handleCategoriesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCategoriesOpen(false)
    }, 300) // 300ms delay before closing
    setCategoriesTimeout(timeout)
  }

  const categories = [
    { name: "Metals & Alloys", icon: "🔩", href: "/categories/metals-alloys" },
    { name: "Plastics & Polymers", icon: "🧪", href: "/categories/plastics-polymers" },
    { name: "Textiles & Fibers", icon: "🧵", href: "/categories/textiles-fibers" },
    { name: "Chemicals & Materials", icon: "⚗️", href: "/categories/chemicals-materials" },
    { name: "Electronics & Components", icon: "🔌", href: "/categories/electronics-components" },
    { name: "Construction Materials", icon: "🏗️", href: "/categories/construction-materials" },
    { name: "Food & Agriculture", icon: "🌾", href: "/categories/food-agriculture" },
    { name: "Energy & Fuels", icon: "⚡", href: "/categories/energy-fuels" },
    { name: "Paper & Packaging", icon: "📦", href: "/categories/paper-packaging" },
    { name: "Automotive Parts", icon: "🚗", href: "/categories/automotive-parts" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      setIsShrinked(scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsShrinked(false) // Force header to expand when clicked
  }

  const searchSuggestions = [
    "Steel Rods",
    "Plastic Pellets",
    "Cotton Fiber",
    "Aluminum",
    "Chemical Grade Materials",
    "Industrial Metals",
    "Polymer Materials",
    "Textile Fibers",
    "Raw Chemicals",
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar - Hide when shrinked */}
        <div className={`flex items-center justify-between text-sm border-b border-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
          isShrinked ? "py-0 max-h-0 opacity-0" : "py-3 max-h-16 opacity-100"
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 space-y-1 sm:space-y-0">
            <span className="flex items-center">
              <span className="mr-2">📧</span>
              <span>support@rawmart.com</span>
            </span>
            <span className="flex items-center">
              <span className="mr-2">📞</span>
              <span>+1 (555) 123-4567</span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="/help" className="hover:text-blue-600 transition-colors">
                Help
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs">Follow us:</span>
              <div className="flex space-x-1">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">📘</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">🐦</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">💼</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
          isShrinked ? "py-2" : "py-4"
        }`}>
          {/* Logo */}
          <Link href="/" onClick={scrollToTop} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl">🏭</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="text-gray-800">
              <div className="text-2xl font-bold tracking-tight">ShilpoMarket</div>
              <div className="text-xs text-gray-600 -mt-1">Raw Materials Marketplace</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Products
            </Link>
            
            {/* Categories with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleCategoriesMouseEnter}
              onMouseLeave={handleCategoriesMouseLeave}
            >
              <Link 
                href="/categories" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Categories
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Categories Dropdown - Horizontal */}
              {isCategoriesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[900px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                  onMouseEnter={handleCategoriesMouseEnter}
                  onMouseLeave={handleCategoriesMouseLeave}
                >
                  <div className="p-6">
                    <div className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="mr-2">📂</span>
                      Browse Categories
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={category.href}
                          className="flex flex-col items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group cursor-pointer"
                          onClick={() => {
                            setIsCategoriesOpen(false)
                            if (categoriesTimeout) {
                              clearTimeout(categoriesTimeout)
                              setCategoriesTimeout(null)
                            }
                          }}
                        >
                          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                            {category.icon}
                          </span>
                          <span className="font-medium text-sm text-center leading-tight">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                      <Link
                        href="/categories"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                        onClick={() => {
                          setIsCategoriesOpen(false)
                          if (categoriesTimeout) {
                            clearTimeout(categoriesTimeout)
                            setCategoriesTimeout(null)
                          }
                        }}
                      >
                        View All Categories
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/sellers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Suppliers
            </Link>
            <Link href="/insights" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Insights
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search materials, suppliers..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Search Suggestions */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto z-50">
                  {searchSuggestions
                    .filter(suggestion => 
                      suggestion.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === ""
                    )
                    .map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchValue(suggestion)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-gray-700"
                      >
                        {suggestion}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="hidden sm:block text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hidden shadow-lg sm:block"
            >
              Sign Up
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="md:hidden mb-4">
                <input
                  type="text"
                  placeholder="Search materials, suppliers..."
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Categories
              </Link>
              <Link href="/sellers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Suppliers
              </Link>
              <Link href="/insights" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Insights
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
