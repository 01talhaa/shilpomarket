"use client" // Add this line at the very top for client-side functionality
import Header from "@/components/Header";
import CategoriesHeader from "@/components/CategoriesHeader";
import Link from "next/link";
import { useState } from "react"; // Import useState

export default function CategoriesPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false); // State for filter sidebar visibility

  const categories = [
    {
      id: 1,
      name: "Electronics & Components",
      slug: "electronics-and-components",
      description: "Semiconductors, circuits, and electronic components",
      icon: "🔌",
      count: "2,847 products",
      productCount: 2847,
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      name: "Textiles & Fabrics",
      slug: "textiles-and-fabrics",
      description: "Cotton, silk, synthetic fabrics, and textile materials",
      icon: "🧵",
      count: "1,923 products",
      productCount: 1923,
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      name: "Chemicals & Materials",
      slug: "chemicals-and-materials",
      description: "Industrial chemicals, polymers, and raw materials",
      icon: "⚗️",
      count: "3,156 products",
      productCount: 3156,
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      name: "Metals & Alloys",
      slug: "metals-and-alloys",
      description: "Steel, aluminum, copper, and specialty metals",
      icon: "🔩",
      count: "1,634 products",
      productCount: 1634,
      image: "/placeholder.jpg"
    },
    {
      id: 5,
      name: "Agriculture & Food",
      slug: "agriculture-and-food",
      description: "Grains, spices, processed foods, and agricultural products",
      icon: "🌾",
      count: "2,245 products",
      productCount: 2245,
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      name: "Construction & Building",
      slug: "construction-and-building",
      description: "Cement, tiles, hardware, and building materials",
      icon: "🏗️",
      count: "1,789 products",
      productCount: 1789,
      image: "/placeholder.jpg"
    },
    {
      id: 7,
      name: "Automotive & Transport",
      slug: "automotive-and-transport",
      description: "Auto parts, components, and transportation equipment",
      icon: "🚗",
      count: "2,098 products",
      productCount: 2098,
      image: "/placeholder.jpg"
    },
    {
      id: 8,
      name: "Healthcare & Medical",
      slug: "healthcare-and-medical",
      description: "Medical supplies, pharmaceuticals, and healthcare equipment",
      icon: "💊",
      count: "1,456 products",
      productCount: 1456,
      image: "/placeholder.jpg"
    },
    {
      id: 9,
      name: "Energy & Power",
      slug: "energy-and-power",
      description: "Solar panels, batteries, and power generation equipment",
      icon: "⚡",
      count: "987 products",
      productCount: 987,
      image: "/placeholder.jpg"
    },
    {
      id: 10,
      name: "Packaging & Containers",
      slug: "packaging-and-containers",
      description: "Boxes, bottles, packaging materials, and containers",
      icon: "📦",
      count: "1,234 products",
      productCount: 1234,
      image: "/placeholder.jpg"
    },
    {
      id: 11,
      name: "Tools & Machinery",
      slug: "tools-and-machinery",
      description: "Industrial tools, manufacturing equipment, and machinery",
      icon: "🔧",
      count: "1,567 products",
      productCount: 1567,
      image: "/placeholder.jpg"
    },
    {
      id: 12,
      name: "Sports & Recreation",
      slug: "sports-and-recreation",
      description: "Sports equipment, recreational goods, and fitness products",
      icon: "⚽",
      count: "823 products",
      productCount: 823,
      image: "/placeholder.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoriesHeader />
      
      <div className="pt-20">
      <div className="container mx-auto px-4 py-4">
        {/* Filter Button for Mobile/Tablet */}
        <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{isFiltersOpen ? "Hide Filters" : "Show Filters"}</span>
            </button>
          </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Filters Sidebar */}
          <div
            className={`${
              isFiltersOpen ? "block" : "hidden"
            } lg:block lg:w-1/5 absolute lg:relative z-10 w-full`} // Position fixed for mobile overlay
          >
            {/* Overlay for mobile when filters are open */}
            {isFiltersOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-0"
                    onClick={() => setIsFiltersOpen(false)}
                ></div>
            )}
            {/* Actual Sidebar Content */}
            <div className="bg-white rounded-lg shadow p-4 sticky top-20 z-10 w-11/12 mx-auto lg:w-auto">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Filters</h3>

              {/* Sort By */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Sort By</h4>
                <div className="space-y-1">
                  <button className="w-full text-left px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">
                    Most Popular
                  </button>
                  <button className="w-full text-left px-2 py-1 rounded text-xs text-gray-600 hover:bg-gray-100">
                    A-Z
                  </button>
                  <button className="w-full text-left px-2 py-1 rounded text-xs text-gray-600 hover:bg-gray-100">
                    Most Products
                  </button>
                </div>
              </div>

              {/* Product Range */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Product Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">1000+ Products</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">500-1000 Products</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Under 500 Products</span>
                  </label>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Verified Suppliers</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Fast Shipping</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Bulk Orders</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="lg:w-4/5 flex-grow">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3 bg-white rounded-lg p-2 shadow-sm">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <span className="text-sm text-gray-600">{categories.length} categories</span>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm">
                  <option value="popular">Most Popular</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                  <option value="products">Most Products</option>
                </select>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.slug}`}>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <div className="p-4 text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                        {category.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{category.description}</p>
                      <span className="text-xs text-blue-600 font-medium">{category.count}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}