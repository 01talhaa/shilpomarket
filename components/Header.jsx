"use client"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isShrinked, setIsShrinked] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null);
  const router = useRouter()
  const pathname = usePathname()
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState("")
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
              <span className="text-xs hidden sm:inline">Follow us:</span>
              <span className="text-xs xs:hidden">Follow:</span>
              <div className="flex space-x-1">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">📘</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">🐦</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">💼</a>
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
                      {user.name ? user.name[0].toUpperCase() : (user.email || user.identifier || "U")[0].toUpperCase()}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-gray-800 dark:text-white text-base truncate max-w-[120px]">{user.name || "User"}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-300 truncate max-w-[120px]">{user.email || user.identifier}</span>
                    </div>
                    <svg className="ml-2 w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200"
                    tabIndex={-1}
                  >
                    <button
                      className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-t-xl"
                      onClick={() => router.push("/profile")}
                    >
                      Profile
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                      onClick={() => router.push("/#services")}
                    >
                      Services
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 rounded-b-xl"
                      onClick={() => {
                        setUser(null);
                        localStorage.removeItem("pixelprimp_user");
                        localStorage.removeItem("pixelprimp_refresh_token");
                        window.dispatchEvent(new Event("storage"));
                        router.push("/");
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
                          {user.name ? user.name[0].toUpperCase() : (user.email || user.identifier || "U")[0].toUpperCase()}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-semibold text-gray-800 dark:text-white text-base truncate max-w-[120px]">{user.name || "User"}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-300 truncate max-w-[120px]">{user.email || user.identifier}</span>
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
                            router.push("/profile");
                          }}
                        >
                          Profile
                        </button>
                        <button
                          className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            router.push("/#services");
                          }}
                        >
                          Services
                        </button>
                        <button
                          className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 rounded-b-xl"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setUser(null);
                            localStorage.removeItem("pixelprimp_user");
                            localStorage.removeItem("pixelprimp_refresh_token");
                            window.dispatchEvent(new Event("storage"));
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