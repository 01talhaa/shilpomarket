"use client"
import { useState } from "react"
import Header from "../../components/Header"
import Link from "next/link"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 10000])

  const categories = [
    { id: "all", name: "All Categories", count: 1250 },
    { id: "metals", name: "Metals & Alloys", count: 320 },
    { id: "plastics", name: "Plastics & Polymers", count: 280 },
    { id: "chemicals", name: "Chemicals", count: 195 },
    { id: "textiles", name: "Textiles", count: 150 },
    { id: "electronics", name: "Electronic Materials", count: 125 },
    { id: "construction", name: "Construction Materials", count: 180 },
  ]

  const products = [
    {
      id: 1,
      name: "Premium Steel Rods",
      supplier: "MetalCorp Industries",
      price: 1250,
      image: "/placeholder.svg?height=250&width=250",
      category: "metals",
      rating: 4.8,
      minOrder: "5 tons",
      location: "USA",
      verified: true,
      inStock: true,
    },
    {
      id: 2,
      name: "Industrial Grade Plastic Pellets",
      supplier: "PolyTech Solutions",
      price: 850,
      image: "/placeholder.svg?height=250&width=250",
      category: "plastics",
      rating: 4.9,
      minOrder: "2 tons",
      location: "Germany",
      verified: true,
      inStock: true,
    },
    {
      id: 3,
      name: "Organic Cotton Fiber",
      supplier: "EcoTextile Co.",
      price: 2100,
      image: "/placeholder.svg?height=250&width=250",
      category: "textiles",
      rating: 4.7,
      minOrder: "1 ton",
      location: "India",
      verified: true,
      inStock: false,
    },
    {
      id: 4,
      name: "Chemical Grade Aluminum",
      supplier: "AlumTech Industries",
      price: 1800,
      image: "/placeholder.svg?height=250&width=250",
      category: "chemicals",
      rating: 4.6,
      minOrder: "3 tons",
      location: "UK",
      verified: true,
      inStock: true,
    },
    {
      id: 5,
      name: "High-Grade Copper Wire",
      supplier: "CopperCore Ltd",
      price: 3200,
      image: "/placeholder.svg?height=250&width=250",
      category: "electronics",
      rating: 4.9,
      minOrder: "1 ton",
      location: "Japan",
      verified: true,
      inStock: true,
    },
    {
      id: 6,
      name: "Reinforced Concrete Mix",
      supplier: "BuildTech Materials",
      price: 450,
      image: "/placeholder.svg?height=250&width=250",
      category: "construction",
      rating: 4.5,
      minOrder: "10 tons",
      location: "Canada",
      verified: false,
      inStock: true,
    },
  ]

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Raw Materials Marketplace</h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover high-quality raw materials from verified global suppliers
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>✓ Verified Suppliers</span>
              <span>✓ Quality Guaranteed</span>
              <span>✓ Competitive Pricing</span>
              <span>✓ Global Shipping</span>
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

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
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
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Price Range ($/ton)</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Verified Suppliers Only</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">In Stock</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Free Shipping</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white rounded-lg p-4 shadow">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-gray-600">Showing {filteredProducts.length} products</span>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 flex flex-col space-y-2">
                      {product.verified && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">✓ Verified</span>
                      )}
                      {!product.inStock && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Out of Stock</span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors">
                        ❤️
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">{product.supplier}</p>
                    <p className="text-gray-500 text-xs mb-3">📍 {product.location}</p>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-green-600">${product.price}/ton</span>
                      <span className="text-sm text-gray-500">Min: {product.minOrder}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm"
                      >
                        View Details
                      </Link>
                      <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        💬 Chat
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
