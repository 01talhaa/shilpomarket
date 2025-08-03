"use client"
import { useState } from "react"
import Link from "next/link"

export default function ProductDetailPage({ params }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(5)
  const [activeTab, setActiveTab] = useState("description")

  const product = {
    id: 1,
    name: "Premium Steel Rods",
    supplier: "MetalCorp Industries",
    price: 1250,
    images: [
      "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=400&fit=crop",
    ],
    category: "Metals & Alloys",
    rating: 4.8,
    reviews: 156,
    minOrder: 5,
    maxOrder: 1000,
    unit: "tons",
    location: "Pittsburgh, USA",
    verified: true,
    inStock: true,
    stockQuantity: 500,
    description:
      "High-quality premium steel rods manufactured using advanced metallurgical processes. These steel rods are perfect for construction, manufacturing, and industrial applications. Our steel meets international quality standards and comes with full certification.",
    specifications: {
      "Material Grade": "ASTM A615 Grade 60",
      "Diameter Range": "8mm - 32mm",
      Length: "6m - 12m",
      "Tensile Strength": "620 MPa minimum",
      "Yield Strength": "420 MPa minimum",
      "Carbon Content": "0.30% maximum",
      Certification: "ISO 9001:2015, ASTM",
    },
    shipping: {
      "Delivery Time": "7-14 business days",
      "Shipping Cost": "Calculated at checkout",
      "Free Shipping": "Orders above $50,000",
      International: "Available to 50+ countries",
    },
  }

  const supplier = {
    name: "MetalCorp Industries",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop",
    rating: 4.8,
    reviews: 1250,
    established: "1995",
    location: "Pittsburgh, USA",
    verified: true,
    responseTime: "< 2 hours",
    products: 245,
    totalOrders: "10,000+",
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Stainless Steel Sheets",
      price: 1850,
      image: "https://images.unsplash.com/photo-1567271636807-51a10568e5ca?w=200&h=200&fit=crop",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Aluminum Rods",
      price: 980,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Copper Wire",
      price: 3200,
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=200&h=200&fit=crop",
      rating: 4.9,
    },
  ]

  const totalPrice = quantity * product.price

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
                          <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-sm">🏭</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-800">
                  <div className="text-lg font-bold tracking-tight">ShilpoMarket</div>
                  <div className="text-xs text-gray-600 -mt-1">Raw Materials Marketplace</div>
                </div>
              </Link>
            <div className="flex items-center space-x-6 text-xs">
              <span className="text-gray-500">Electronics</span>
              <span className="text-gray-500">Fashion</span>
              <span className="text-gray-500">Machinery</span>
              <span className="text-gray-500">Textiles</span>
              <span className="text-gray-500">Chemicals</span>
              <span className="text-gray-500">Agriculture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <nav className="text-xs text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Product Images */}
          <div className="space-y-2">
            <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden max-w-md">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-1 max-w-md">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{product.category}</span>
                {product.verified && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">✓ Verified</span>
                )}
                {product.inStock && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">In Stock</span>
                )}
              </div>
              <h1 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h1>
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span>{product.rating}</span>
                  <span className="ml-1">({product.reviews} reviews)</span>
                </div>
                <span>📍 {product.location}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600 mb-1">
                ${product.price.toLocaleString()}/{product.unit}
              </div>
              <div className="text-xs text-gray-600">
                Minimum order: {product.minOrder} {product.unit} • Maximum: {product.maxOrder} {product.unit}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Quantity ({product.unit})</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                    className="w-7 h-7 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 text-xs"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(product.minOrder, Number.parseInt(e.target.value) || product.minOrder))
                    }
                    min={product.minOrder}
                    max={product.maxOrder}
                    className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.maxOrder, quantity + 1))}
                    className="w-7 h-7 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span>Total Price:</span>
                  <span className="text-blue-600">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Link
                href={`/purchase/${product.id}?quantity=${quantity}`}
                className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block text-xs"
              >
                Request Quote
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <button className="border border-gray-300 text-gray-700 py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors text-xs">
                  💬 Chat with Supplier
                </button>
                <button className="border border-gray-300 text-gray-700 py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors text-xs">
                  ❤️ Add to Wishlist
                </button>
              </div>
            </div>

            {/* Supplier Info */}
            <div className="bg-white rounded-lg border p-3">
              <h3 className="font-semibold text-gray-800 mb-2 text-xs">Supplier Information</h3>
              <div className="flex items-center space-x-2">
                <img src={supplier.logo || "/placeholder.svg"} alt={supplier.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-xs">{supplier.name}</h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <span>⭐ {supplier.rating}</span>
                    <span>•</span>
                    <span>{supplier.reviews} reviews</span>
                    <span>•</span>
                    <span>Est. {supplier.established}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Response time: {supplier.responseTime}</div>
                </div>
                <Link
                  href={`/sellers/${supplier.name}`}
                  className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors text-xs"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
          <div className="border-b">
            <div className="flex space-x-4 px-3">
              {["description", "specifications", "shipping", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium capitalize transition-colors text-xs ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-xs">{product.description}</p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-medium text-gray-700 text-xs">{key}:</span>
                    <span className="text-gray-600 text-xs">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(product.shipping).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-medium text-gray-700 text-xs">{key}:</span>
                    <span className="text-gray-600 text-xs">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold text-gray-800">{product.rating}</div>
                  <div>
                    <div className="flex text-yellow-500 mb-1">{"⭐".repeat(Math.floor(product.rating))}</div>
                    <div className="text-xs text-gray-600">{product.reviews} reviews</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-100 pb-2">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="font-medium text-gray-800 text-xs">John Doe</div>
                          <div className="text-xs text-gray-600">2 weeks ago</div>
                        </div>
                        <div className="flex text-yellow-500 text-xs">{"⭐".repeat(5)}</div>
                      </div>
                      <p className="text-gray-700 text-xs">
                        Excellent quality steel rods. Fast delivery and great customer service. Highly recommended for
                        construction projects.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                    In Stock
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-green-600">${relatedProduct.price}</span>
                    <div className="flex items-center text-xs text-gray-600">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span>{relatedProduct.rating}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    MOQ: 1 ton
                  </div>
                  <div className="text-xs text-gray-500">
                    MetalCorp Industries
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
