"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import ProductHeader from "../../components/ProductHeader"
import { getRootCategories } from "@/lib/categoriesData"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export default function ProductsPage() {
  const categories = getRootCategories();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [showFilters, setShowFilters] = useState(false)
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, sortBy, priceRange, verifiedOnly, inStockOnly]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url = `${API_BASE_URL}/api/products?`;
      
      if (selectedCategory !== 'all') {
        url += `category=${selectedCategory}&`;
      }
      
      url += `minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`;
      
      if (inStockOnly) {
        url += `&inStock=true`;
      }

      // Sorting
      let sortParam = '-createdAt';
      if (sortBy === 'price-low') sortParam = 'price';
      if (sortBy === 'price-high') sortParam = '-price';
      if (sortBy === 'rating') sortParam = '-rating';
      if (sortBy === 'newest') sortParam = '-createdAt';
      
      url += `&sort=${sortParam}`;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products;

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
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                        selectedCategory === "all"
                          ? "bg-blue-100 text-blue-800"
                          : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                          selectedCategory === category.name
                            ? "bg-blue-100 text-blue-800"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Price Range ($/unit)</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      value={priceRange[1]}
                      onChange={(e) => {
                        setPriceRange([priceRange[0], Number.parseInt(e.target.value)]);
                      }}
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
                      <input 
                        type="checkbox" 
                        className="rounded"
                        checked={verifiedOnly}
                        onChange={(e) => setVerifiedOnly(e.target.checked)}
                      />
                      <span className="text-xs text-gray-700">Verified Suppliers Only</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        className="rounded"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                      />
                      <span className="text-xs text-gray-700">In Stock</span>
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
                  <span className="text-sm text-gray-600">
                    {loading ? 'Loading...' : `${filteredProducts.length} products`}
                  </span>
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

              {/* Loading State */}
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Loading products...</p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <p className="text-gray-600">No products found</p>
                </div>
              ) : (
                <>
                  {/* Products Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {filteredProducts.map((product) => (
                      <Link key={product._id} href={`/products/${product._id}`}>
                        <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                          <div className="relative">
                            <img
                              src={product.images?.[0]?.url || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-32 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            {product.supplier?.verified && (
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
                                <p className="text-xs text-gray-600 font-medium">{product.supplierName}</p>
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
                                <span className="text-xs font-medium text-gray-700 ml-1">
                                  {product.rating ? product.rating.toFixed(1) : 'New'}
                                </span>
                                <span className="text-xs text-gray-500 ml-1">
                                  ({product.reviewCount || 0})
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-sm font-bold text-gray-900">
                                  ${product.price}/{product.unit}
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs text-gray-500 block">Min order</span>
                                <span className="text-xs font-medium text-gray-700">
                                  {product.minOrder} {product.unit}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}

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