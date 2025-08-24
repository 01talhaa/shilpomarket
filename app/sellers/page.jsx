"use client"
import { useState } from "react"
import SellersHeader from "../../components/SellersHeader"
import Link from "next/link"

export default function SellersPage() {
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const countries = [
    { id: "all", name: "All Countries", count: 1250 },
    { id: "usa", name: "United States", count: 320 },
    { id: "germany", name: "Germany", count: 280 },
    { id: "china", name: "China", count: 195 },
    { id: "india", name: "India", count: 150 },
    { id: "uk", name: "United Kingdom", count: 125 },
    { id: "japan", name: "Japan", count: 180 },
  ]

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "metals", name: "Metals & Alloys" },
    { id: "plastics", name: "Plastics & Polymers" },
    { id: "chemicals", name: "Chemicals" },
    { id: "textiles", name: "Textiles" },
    { id: "electronics", name: "Electronic Materials" },
  ]

  const suppliers = [
    {
      id: 1,
      name: "MetalCorp Industries",
      logo: "/placeholder.svg?height=100&width=100",
      country: "usa",
      location: "Pittsburgh, USA",
      established: "1995",
      rating: 4.8,
      reviews: 1250,
      products: 245,
      categories: ["metals", "construction"],
      verified: true,
      responseTime: "< 2 hours",
      totalOrders: "10,000+",
      description:
        "Leading manufacturer of high-quality steel and metal products for construction and industrial applications.",
    },
    {
      id: 2,
      name: "PolyTech Solutions",
      logo: "/placeholder.svg?height=100&width=100",
      country: "germany",
      location: "Munich, Germany",
      established: "2001",
      rating: 4.9,
      reviews: 980,
      products: 189,
      categories: ["plastics", "chemicals"],
      verified: true,
      responseTime: "< 1 hour",
      totalOrders: "8,500+",
      description: "Innovative plastic and polymer solutions for automotive, packaging, and industrial sectors.",
    },
    {
      id: 3,
      name: "EcoTextile Co.",
      logo: "/placeholder.svg?height=100&width=100",
      country: "india",
      location: "Mumbai, India",
      established: "2005",
      rating: 4.7,
      reviews: 756,
      products: 156,
      categories: ["textiles"],
      verified: true,
      responseTime: "< 3 hours",
      totalOrders: "6,200+",
      description: "Sustainable textile manufacturing with focus on organic and eco-friendly materials.",
    },
    {
      id: 4,
      name: "ChemCore Ltd.",
      logo: "/placeholder.svg?height=100&width=100",
      country: "uk",
      location: "London, UK",
      established: "1988",
      rating: 4.6,
      reviews: 1100,
      products: 298,
      categories: ["chemicals", "electronics"],
      verified: true,
      responseTime: "< 2 hours",
      totalOrders: "12,000+",
      description: "Specialized chemical compounds and electronic materials for high-tech industries.",
    },
    {
      id: 5,
      name: "TechMaterials Inc.",
      logo: "/placeholder.svg?height=100&width=100",
      country: "japan",
      location: "Tokyo, Japan",
      established: "1992",
      rating: 4.9,
      reviews: 890,
      products: 167,
      categories: ["electronics", "metals"],
      verified: true,
      responseTime: "< 1 hour",
      totalOrders: "7,800+",
      description: "Advanced electronic materials and precision metals for semiconductor industry.",
    },
    {
      id: 6,
      name: "GlobalPlastics Corp",
      logo: "/placeholder.svg?height=100&width=100",
      country: "china",
      location: "Shanghai, China",
      established: "2000",
      rating: 4.5,
      reviews: 1350,
      products: 312,
      categories: ["plastics", "chemicals"],
      verified: false,
      responseTime: "< 4 hours",
      totalOrders: "15,000+",
      description: "Large-scale plastic manufacturing and chemical processing for global markets.",
    },
  ]

  const filteredSuppliers = suppliers.filter((supplier) => {
    if (selectedCountry !== "all" && supplier.country !== selectedCountry) return false
    if (selectedCategory !== "all" && !supplier.categories.includes(selectedCategory)) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <SellersHeader />
      
      {/* Main Content with Top Margin */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
          {/* Filters Sidebar */}
          <div className="lg:w-1/5">
            <div className="bg-white rounded-lg shadow p-4 sticky top-20">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Filters</h3>

              {/* Countries */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Countries</h4>
                <div className="space-y-1">
                  {countries.map((country) => (
                    <button
                      key={country.id}
                      onClick={() => setSelectedCountry(country.id)}
                      className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                        selectedCountry === country.id ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{country.name}</span>
                        <span className="text-xs">({country.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Specialization</h4>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                        selectedCategory === category.id
                          ? "bg-blue-100 text-blue-800"
                          : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Filters */}
              <div className="space-y-2">
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Verified Only</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Fast Response</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">ISO Certified</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Suppliers Grid */}
          <div className="lg:w-4/5">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3 bg-white rounded-lg p-2 shadow-sm">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <span className="text-sm text-gray-600">{filteredSuppliers.length} suppliers</span>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="products">Most Products</option>
                  <option value="established">Oldest First</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Suppliers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredSuppliers.map((supplier) => (
                <Link key={supplier.id} href={`/sellers/${supplier.id}`}>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={supplier.logo || "/placeholder.svg"}
                          alt={supplier.name}
                          className="w-10 h-10 rounded-full border border-gray-100"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-1 mb-1">
                            <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{supplier.name}</h3>
                            {supplier.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded-full">
                                ✓
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">📍 {supplier.location}</p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{supplier.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div className="bg-gray-50 rounded p-2">
                          <div className="text-gray-500 text-xs">Rating</div>
                          <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">★</span>
                            <span className="font-semibold">{supplier.rating}</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <div className="text-gray-500 text-xs">Products</div>
                          <div className="font-semibold">{supplier.products}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {supplier.categories.slice(0, 2).map((category) => (
                          <span
                            key={category}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded capitalize"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <span className="text-green-600 font-medium">{supplier.responseTime}</span>
                        </div>
                        <div className="text-xs text-gray-500">{supplier.totalOrders}</div>
                      </div>
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
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}
