"use client"
import { useState } from "react"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
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
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
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
    logo: "/placeholder.svg?height=80&width=80",
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
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Aluminum Rods",
      price: 980,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Copper Wire",
      price: 3200,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
    },
  ]

  const totalPrice = quantity * product.price

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
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
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{product.category}</span>
                {product.verified && (
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">✓ Verified</span>
                )}
                {product.inStock && (
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">In Stock</span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span>{product.rating}</span>
                  <span className="ml-1">({product.reviews} reviews)</span>
                </div>
                <span>📍 {product.location}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ${product.price.toLocaleString()}/{product.unit}
              </div>
              <div className="text-sm text-gray-600">
                Minimum order: {product.minOrder} {product.unit} • Maximum: {product.maxOrder} {product.unit}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity ({product.unit})</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
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
                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.maxOrder, quantity + 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Price:</span>
                  <span className="text-blue-600">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href={`/purchase/${product.id}?quantity=${quantity}`}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Request Quote
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <button className="border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  💬 Chat with Supplier
                </button>
                <button className="border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  ❤️ Add to Wishlist
                </button>
              </div>
            </div>

            {/* Supplier Info */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Supplier Information</h3>
              <div className="flex items-center space-x-4">
                <img src={supplier.logo || "/placeholder.svg"} alt={supplier.name} className="w-16 h-16 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{supplier.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>⭐ {supplier.rating}</span>
                    <span>•</span>
                    <span>{supplier.reviews} reviews</span>
                    <span>•</span>
                    <span>Est. {supplier.established}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Response time: {supplier.responseTime}</div>
                </div>
                <Link
                  href={`/sellers/${supplier.name}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              {["description", "specifications", "shipping", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium capitalize transition-colors ${
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

          <div className="p-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.shipping).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-gray-800">{product.rating}</div>
                  <div>
                    <div className="flex text-yellow-500 mb-1">{"⭐".repeat(Math.floor(product.rating))}</div>
                    <div className="text-sm text-gray-600">{product.reviews} reviews</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-100 pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="font-medium text-gray-800">John Doe</div>
                          <div className="text-sm text-gray-600">2 weeks ago</div>
                        </div>
                        <div className="flex text-yellow-500 text-sm">{"⭐".repeat(5)}</div>
                      </div>
                      <p className="text-gray-700">
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
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
                <img
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{relatedProduct.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">${relatedProduct.price}/ton</span>
                    <span className="text-sm text-gray-600">⭐ {relatedProduct.rating}</span>
                  </div>
                  <Link
                    href={`/products/${relatedProduct.id}`}
                    className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
