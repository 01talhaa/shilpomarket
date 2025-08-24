"use client"
import { useState } from "react"
import Link from "next/link"
import SellersHeader from "../../../components/SellersHeader"

export default function SellerDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState("products")

  const supplier = {
    id: 1,
    name: "MetalCorp Industries",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop",
    banner: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=300&fit=crop",
    country: "USA",
    location: "Pittsburgh, Pennsylvania, USA",
    established: "1995",
    rating: 4.8,
    reviews: 1250,
    products: 245,
    verified: true,
    responseTime: "< 2 hours",
    totalOrders: "10,000+",
    employees: "500-1000",
    annualRevenue: "$50M - $100M",
    description:
      "MetalCorp Industries is a leading manufacturer and supplier of high-quality steel and metal products for construction, automotive, and industrial applications. With over 25 years of experience, we have built a reputation for excellence in quality, reliability, and customer service. Our state-of-the-art manufacturing facilities and rigorous quality control processes ensure that every product meets the highest international standards.",
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "OHSAS 18001", "ASTM Certified"],
    specializations: ["Steel Manufacturing", "Metal Processing", "Quality Control", "Industrial Supply"],
    contact: {
      email: "sales@metalcorp.com",
      phone: "+1-412-555-0123",
      website: "www.metalcorp.com",
      address: "1234 Industrial Blvd, Pittsburgh, PA 15201",
    },
  }

  const products = [
    {
      id: 1,
      name: "Premium Steel Rods",
      price: 1250,
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=200&h=200&fit=crop",
      category: "Steel Products",
      rating: 4.8,
      minOrder: "5 tons",
    },
    {
      id: 2,
      name: "Stainless Steel Sheets",
      price: 1850,
      image: "https://images.unsplash.com/photo-1567271636807-51a10568e5ca?w=200&h=200&fit=crop",
      category: "Steel Products",
      rating: 4.7,
      minOrder: "2 tons",
    },
    {
      id: 3,
      name: "Galvanized Steel Pipes",
      price: 980,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop",
      category: "Steel Products",
      rating: 4.6,
      minOrder: "10 pieces",
    },
    {
      id: 4,
      name: "Carbon Steel Plates",
      price: 1450,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop",
      category: "Steel Products",
      rating: 4.9,
      minOrder: "3 tons",
    },
  ]

  const reviews = [
    {
      id: 1,
      reviewer: "John Manufacturing Co.",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent quality steel products and outstanding customer service. MetalCorp has been our trusted supplier for over 3 years.",
      verified: true,
    },
    {
      id: 2,
      reviewer: "BuildTech Solutions",
      rating: 4,
      date: "1 month ago",
      comment:
        "Good quality materials and timely delivery. Pricing is competitive. Would recommend for large construction projects.",
      verified: true,
    },
    {
      id: 3,
      reviewer: "Industrial Dynamics",
      rating: 5,
      date: "2 months ago",
      comment:
        "Professional team, high-quality products, and excellent technical support. Very satisfied with our partnership.",
      verified: true,
    },
  ]

  const companyStats = [
    { label: "Years in Business", value: "29+" },
    { label: "Products Sold", value: "1M+" },
    { label: "Happy Customers", value: "5,000+" },
    { label: "Countries Served", value: "25+" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SellersHeader />
      
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <nav className="text-xs text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link href="/sellers" className="hover:text-blue-600">
                Suppliers
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-800">{supplier.name}</span>
            </nav>
          </div>
        </div>

      {/* Company Banner */}
      <div className="relative">
        <img src={supplier.banner || "/placeholder.svg"} alt={supplier.name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold mb-1">{supplier.name}</h1>
          <p className="text-sm">📍 {supplier.location}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Overview */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={supplier.logo || "/placeholder.svg"}
                  alt={supplier.name}
                  className="w-16 h-16 rounded-full border-2 border-white shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h2 className="text-xl font-bold text-gray-800">{supplier.name}</h2>
                    {supplier.verified && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">✓ Verified</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="font-semibold">{supplier.rating}</span>
                      <span className="ml-1">({supplier.reviews} reviews)</span>
                    </div>
                    <span>Est. {supplier.established}</span>
                    <span>{supplier.employees} employees</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    {companyStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">{supplier.description}</p>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b">
                <div className="flex space-x-6 px-4">
                  {["products", "about", "reviews", "certifications"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-3 px-1 border-b-2 font-medium capitalize transition-colors text-sm ${
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

              <div className="p-4">
                {activeTab === "products" && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Products ({products.length})</h3>
                      <Link href="/products" className="text-blue-600 hover:text-blue-800 text-xs">
                        View All Products →
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:border-gray-300"
                        >
                          <div className="aspect-square relative overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <div className="p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              <div className="flex items-center space-x-1">
                                <span className="text-yellow-500">⭐</span>
                                <span className="text-xs text-gray-600">{product.rating}</span>
                              </div>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-1 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </h4>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-lg font-bold text-green-600">${product.price}/ton</span>
                              <span className="text-xs text-gray-500">Min: {product.minOrder}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "about" && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">About {supplier.name}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">{supplier.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {supplier.specializations.map((spec, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Company Details</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Established:</span>
                            <span className="font-medium">{supplier.established}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Employees:</span>
                            <span className="font-medium">{supplier.employees}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Annual Revenue:</span>
                            <span className="font-medium">{supplier.annualRevenue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Response Time:</span>
                            <span className="font-medium text-green-600">{supplier.responseTime}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Contact Information</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center space-x-2">
                            <span>📧</span>
                            <span>{supplier.contact.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>📞</span>
                            <span>{supplier.contact.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>🌐</span>
                            <span>{supplier.contact.website}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span>📍</span>
                            <span>{supplier.contact.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800">{supplier.rating}</div>
                        <div className="flex text-yellow-500 justify-center mb-1">
                          {"⭐".repeat(Math.floor(supplier.rating))}
                        </div>
                        <div className="text-xs text-gray-600">{supplier.reviews} reviews</div>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-1">
                          {[5, 4, 3, 2, 1].map((stars) => (
                            <div key={stars} className="flex items-center space-x-2">
                              <span className="text-xs w-6">{stars}★</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-yellow-500 h-1.5 rounded-full"
                                  style={{
                                    width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-600 w-8">
                                {stars === 5
                                  ? "70%"
                                  : stars === 4
                                    ? "20%"
                                    : stars === 3
                                      ? "5%"
                                      : stars === 2
                                        ? "3%"
                                        : "2%"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-medium text-xs">{review.reviewer.charAt(0)}</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-800 text-sm">{review.reviewer}</div>
                                <div className="text-xs text-gray-600">{review.date}</div>
                              </div>
                              {review.verified && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="flex text-yellow-500 text-xs">{"⭐".repeat(review.rating)}</div>
                          </div>
                          <p className="text-gray-700 text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "certifications" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Certifications & Standards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {supplier.certifications.map((cert, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold">✓</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{cert}</div>
                            <div className="text-sm text-gray-600">Certified & Verified</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>


          {/* Sidebar */}
          <div className="space-y-4">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Supplier</h3>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  💬 Send Message
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                  📞 Request Call
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                  📄 Request Quote
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="font-medium text-green-600">{supplier.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Orders:</span>
                    <span className="font-medium">{supplier.totalOrders}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Products Listed</span>
                  <span className="font-semibold text-blue-600">{supplier.products}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Customer Rating</span>
                  <span className="font-semibold text-yellow-600">⭐ {supplier.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Years Active</span>
                  <span className="font-semibold text-green-600">
                    {new Date().getFullYear() - Number.parseInt(supplier.established)}+
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Trust & Safety</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm text-gray-700">Identity Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm text-gray-700">Business License Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm text-gray-700">Quality Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm text-gray-700">Trade Assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
