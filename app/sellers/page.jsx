"use client"
import { useState } from "react"
import Header from "../../components/Header"
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
      <Header />

      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Verified Suppliers</h1>
            <p className="text-xl text-gray-600 mb-6">
              Connect with trusted raw material suppliers from around the world
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>✓ Verified Companies</span>
              <span>✓ Quality Assured</span>
              <span>✓ Global Network</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Filters</h3>

              {/* Countries */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Countries</h4>
                <div className="space-y-2">
                  {countries.map((country) => (
                    <button
                      key={country.id}
                      onClick={() => setSelectedCountry(country.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCountry === country.id ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{country.name}</span>
                        <span className="text-sm">({country.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Specialization</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
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
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Verified Only</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Fast Response</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">ISO Certified</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Suppliers Grid */}
          <div className="lg:w-3/4">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white rounded-lg p-4 shadow">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-gray-600">Showing {filteredSuppliers.length} suppliers</span>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredSuppliers.map((supplier, index) => (
                <div
                  key={supplier.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={supplier.logo || "/placeholder.svg"}
                        alt={supplier.name}
                        className="w-16 h-16 rounded-full border-2 border-gray-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-800">{supplier.name}</h3>
                          {supplier.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-1">📍 {supplier.location}</p>
                        <p className="text-gray-500 text-xs">Est. {supplier.established}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{supplier.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs">Rating</div>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">⭐</span>
                          <span className="font-semibold">{supplier.rating}</span>
                          <span className="text-gray-500 ml-1">({supplier.reviews})</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs">Products</div>
                        <div className="font-semibold">{supplier.products}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs">Response Time</div>
                        <div className="font-semibold text-green-600">{supplier.responseTime}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-500 text-xs">Total Orders</div>
                        <div className="font-semibold">{supplier.totalOrders}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {supplier.categories.map((category) => (
                        <span
                          key={category}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        href={`/sellers/${supplier.id}`}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm"
                      >
                        View Profile
                      </Link>
                      <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        💬 Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}
