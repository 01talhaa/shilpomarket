"use client"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isShrinked, setIsShrinked] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [categoriesTimeout, setCategoriesTimeout] = useState(null)

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

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Suppliers", href: "/sellers" },
    { name: "Insights", href: "/insights" },
  ]

  const handleNavClick = (e, item) => {
    e.preventDefault();
    // If it's the admin page, navigate directly
    if (item.href === "/admin") {
      router.push("/admin");
      return;
    }
    // If the href is a section anchor (starts with '#'), scroll to section
    if (item.href.startsWith("#")) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
      return;
    }
    // For regular routes, just navigate
    router.push(item.href);
    setIsMobileMenuOpen(false);
  }

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200" : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Hide when shrinked */}
        <div className={`flex items-center justify-between text-sm border-b border-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
          isShrinked ? "py-0 max-h-0 opacity-0" : "py-2 sm:py-3 max-h-20 opacity-100"
        }`}>
          {/* Mobile: Show only essential info */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-gray-600 text-xs sm:text-sm">
            <span className="flex items-center">
              <span className="mr-1 sm:mr-2">📧</span>
              <span className="hidden sm:inline">shilpomarket@gmail.com</span>
              <span className="sm:hidden text-xs">shilpomarket@gmail.com</span>
            </span>
            <span className="flex items-center">
              <span className="mr-1 sm:mr-2">📞</span>
              {/* <span className="hidden sm:inline">+1 (555) 123-4567</span> */}
              <span className=" sm:inline text-2xs">+8801346-616109</span>
            </span>
          </div>
          
          {/* Mobile: Compact right section */}
          <div className="flex items-center space-x-1 sm:space-x-4 text-gray-600 text-xs sm:text-sm">
            <Link href="#contact" className="hover:text-blue-600 transition-colors hidden sm:inline">
              Help
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors hidden xs:inline sm:inline text-xs">
              Contact
            </Link>
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* <span className="text-xs hidden sm:inline">Follow us:</span>
              <span className="text-xs xs:hidden">Follow:</span> */}
              <div className="flex space-x-1">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61578125325933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title="Follow Shilpomarket on Facebook"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/shilpomarket?igsh=NXE1ZGY1ZHlmZTF4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                  title="Follow Shilpomarket on Instagram"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                </a>
                {/* LinkedIn (placeholder) */}
                <a
                  href="https://www.linkedin.com/company/shilpomarket/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  title="Follow Shilpomarket on LinkedIn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
                  </svg>
                </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@shilpomarket?si=KD3gPFYvL_gnkfyT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                    title="Subscribe Shilpomarket YouTube channel"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
          isShrinked ? "py-3" : "py-6"
        }`}>
          {/* Logo */}
          <Link href="/" onClick={scrollToTop} className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="ShilpoMarket Logo" 
                className={`w-auto group-hover:scale-110 transition-all duration-700 ease-in-out ${
                  isShrinked ? "h-10" : "h-16"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="text-gray-800">
              <div className="text-2xl font-bold tracking-tight">ShilpoMarket</div>
              <div className="text-xs text-gray-600 -mt-1">Raw Materials Marketplace</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            
            {/* Categories with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleCategoriesMouseEnter}
              onMouseLeave={handleCategoriesMouseLeave}
            >
              <a 
                href="/categories" 
                onClick={(e) => handleNavClick(e, { name: "Categories", href: "#categories" })}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Categories
                <svg 
                  className={`ml-1 w-3 h-3 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Categories Dropdown */}
              {isCategoriesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[500px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
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
                        <button
                          key={index}
                          onClick={() => router.push(category.href)}
                          className="flex flex-col items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group cursor-pointer"
                        >
                          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                            {category.icon}
                          </span>
                          <span className="font-medium text-sm text-center leading-tight">
                            {category.name}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                      <a
                        href="/categories"
                        onClick={(e) => handleNavClick(e, { name: "Categories", href: "/categories" })}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        View All Categories
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
          </nav>
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-0 max-w-sm ">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search "
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
          <div className="flex items-center space-x-3">
            {/* Desktop Auth Buttons or User Info */}
            <div className="hidden sm:flex items-center space-x-3">
            {user ? (
                <div className="relative group">
                  <button
                    className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl focus:outline-none"
                    tabIndex={0}
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      {getUserDisplayInfo().initial}
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-gray-800 dark:text-white text-base truncate max-w-[120px]">
                          {getUserDisplayInfo().name}
                        </span>
                        {getUserDisplayInfo().isVerified && (
                          <span title="Verified User" className="text-blue-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-300 truncate max-w-[120px]">{getUserDisplayInfo().email}</span>
                    </div>
                    <svg className="ml-2 w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200"
                    tabIndex={-1}
                  >
                    <button
                      className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-t-xl"
                      onClick={() => router.push((user.company_name || user.companyName) ? "/seller/dashboard" : "/buyer/dashboard")}
                    >
                      Dashboard
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                      onClick={() => router.push("/profile")}
                    >
                      Profile
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 rounded-b-xl"
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
                  <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                    onClick={() => router.push("/auth/login")}
                  >
                    Login
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors duration-200"
                    onClick={() => router.push("/auth/signup")}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
            <div className="md:hidden mb-4">
                <input
                  type="text"
                  placeholder="Search materials, suppliers..."
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, { name: "Categories", href: "/categories" })}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Categories
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  {user ? (
                    <div className="relative group">
                      <button
                        className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl w-full focus:outline-none"
                        tabIndex={0}
                      >
                        <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                          {getUserDisplayInfo().initial}
                        </div>
                        <div className="flex flex-col text-left">
                          <div className="flex items-center space-x-1">
                            <span className="font-semibold text-gray-800 dark:text-white text-base truncate max-w-[120px]">
                              {getUserDisplayInfo().name}
                            </span>
                            {getUserDisplayInfo().isVerified && (
                              <span title="Verified User" className="text-blue-500">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-300 truncate max-w-[120px]">{getUserDisplayInfo().email}</span>
                        </div>
                        <svg className="ml-2 w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {/* Dropdown menu */}
                      <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200"
                        tabIndex={-1}
                      >
                        <button
                          className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-t-xl"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            router.push((user.company_name || user.companyName) ? "/seller/dashboard" : "/buyer/dashboard");
                          }}
                        >
                          Dashboard
                        </button>
                        <button
                          className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            router.push("/profile");
                          }}
                        >
                          Profile
                        </button>
                        <button
                          className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 rounded-b-xl"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            logout();
                            router.push("/");
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <button className="w-full text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-50 border border-gray-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          router.push("/auth/login");
                        }}>
                        Login
                      </button>
                      <button
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          router.push("/auth/signup");
                        }}
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}