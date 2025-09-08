"use client"
import { useState } from "react"
import Link from "next/link"
import ProductHeader from "../../components/ProductHeader" // Assuming this path is correct

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [showFilters, setShowFilters] = useState(false) // New state for filter visibility

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
      <ProductHeader />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-4">
          {/* Filter Button for Mobile */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:bg-blue-700 transition-colors"
            >
              <FilterIcon className="w-5 h-5" />
              <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Filters Sidebar */}
            {/* Added conditional rendering based on showFilters state and Tailwind's responsive classes */}
            <div className={`lg:w-1/5 ${showFilters ? "block" : "hidden"} lg:block`}>
              <div className="bg-white rounded-lg shadow p-4 sticky lg:top-20">
                <h3 className="text-sm font-semibold text-gray-800 mb-4">Filters</h3>

                {/* Categories */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Categories</h4>
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
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-xs">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Price Range ($/ton)</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="space-y-2">
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-xs text-gray-700">Verified Suppliers Only</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-xs text-gray-700">In Stock</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-xs text-gray-700">Free Shipping</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-4/5 flex-grow">
              {/* Sort and View Options */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-3 bg-white rounded-lg p-2 shadow-sm">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <span className="text-sm text-gray-600">{filteredProducts.length} products</span>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {filteredProducts.map((product, index) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                      <div className="relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        {product.verified && (
                          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                            ✓ Verified
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                            Out of Stock
                          </div>
                        )}
                      </div>

                      <div className="p-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
                              {product.name}
                            </h3>
                            <p className="text-xs text-gray-600 font-medium">{product.supplier}</p>
                          </div>
                          {product.inStock && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 font-medium">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                              In Stock
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center mb-2">
                          <div className="flex items-center mr-4">
                            <span className="text-yellow-400 text-xs">★</span>
                            <span className="text-xs font-medium text-gray-700 ml-1">{product.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">(reviews)</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-bold text-gray-900">${product.price}/ton</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-500 block">Min order</span>
                            <span className="text-xs font-medium text-gray-700">{product.minOrder}</span>
                          </div>
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
    </div>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}