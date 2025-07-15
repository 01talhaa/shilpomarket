"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: "📊",
      current: pathname === "/admin",
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: "📦",
      current: pathname.startsWith("/admin/products"),
    },
    {
      name: "Inventory",
      href: "/admin/inventory",
      icon: "📋",
      current: pathname.startsWith("/admin/inventory"),
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: "👥",
      current: pathname.startsWith("/admin/users"),
    },
    {
      name: "Suppliers",
      href: "/admin/suppliers",
      icon: "🏭",
      current: pathname.startsWith("/admin/suppliers"),
    },
    {
      name: "Transactions",
      href: "/admin/transactions",
      icon: "💳",
      current: pathname.startsWith("/admin/transactions"),
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: "📋",
      current: pathname.startsWith("/admin/orders"),
    },
    {
      name: "Content",
      href: "/admin/content",
      icon: "📝",
      current: pathname.startsWith("/admin/content"),
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: "📈",
      current: pathname.startsWith("/admin/analytics"),
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: "⚙️",
      current: pathname.startsWith("/admin/settings"),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-16"} bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-bold">R</span>
            </div>
            {sidebarOpen && <span className="text-xl font-bold">RawMart Admin</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  item.current ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            ))}
          </div>
        </nav>

        {/* Toggle Button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <span className="text-xl">{sidebarOpen ? "◀" : "▶"}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-800">
                <span className="text-xl">🔔</span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Admin User</span>
              </div>
              <Link
                href="/"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                View Site
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
