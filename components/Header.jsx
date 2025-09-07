"use client"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
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

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Suppliers", href: "/sellers" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavClick = (e, item) => {
    e.preventDefault();
    // If it's the admin page, navigate directly
    if (item.href === "/admin") {
      router.push("/admin");
      return;
    }
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
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg`} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className={`flex items-center justify-between py-2`}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="ShilpoMarket Logo"
                  className={`w-auto h-16 group-hover:scale-110 transition-all duration-300 ease-in-out`} // Fixed size
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
              
              {/* Categories with Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleCategoriesMouseEnter}
                onMouseLeave={handleCategoriesMouseLeave}
              >
                <a
                  href="/categories"
                  onClick={(e) => handleNavClick(e, { name: "Categories", href: "/categories" })}
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
                    className="absolute top-10 -left-96 md:-left-80 mt-2 w-[1200px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                    onMouseEnter={handleCategoriesMouseEnter}
                    onMouseLeave={handleCategoriesMouseLeave}
                  >
                    <div className="p-6 max-w-7xl mx-auto">
  <div className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
    <span className="mr-2">📂</span>
    Browse Categories
  </div>
  <div className="
    grid gap-4
    grid-cols-1        /* mobile */
    sm:grid-cols-3     /* tablets */
    md:grid-cols-4     /* small laptops */
    lg:grid-cols-12     /* large desktops */
    xl:grid-cols-12     /* extra large screens */
  ">
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
      onClick={(e) =>
        handleNavClick(e, { name: "Categories", href: "/categories" })
      }
      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
    >
      View All Categories
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  </div>
</div>

                  </div>
                )}
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


            </nav>

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
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                  href="#categories" // Changed to #categories for consistency, though it navigates to /categories in handler
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
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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