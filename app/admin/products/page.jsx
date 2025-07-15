"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import Link from "next/link"

export default function AdminProducts() {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      name: "Premium Steel Rods",
      supplier: "MetalCorp Industries",
      category: "Metals & Alloys",
      price: 1250,
      stock: 500,
      status: "active",
      image: "/placeholder.svg?height=60&width=60",
      created: "2024-01-15",
      lastUpdated: "2024-01-20",
    },
    {
      id: 2,
      name: "Industrial Plastic Pellets",
      supplier: "PolyTech Solutions",
      category: "Plastics",
      price: 850,
      stock: 0,
      status: "out_of_stock",
      image: "/placeholder.svg?height=60&width=60",
      created: "2024-01-10",
      lastUpdated: "2024-01-18",
    },
    {
      id: 3,
      name: "Organic Cotton Fiber",
      supplier: "EcoTextile Co.",
      category: "Textiles",
      price: 2100,
      stock: 250,
      status: "pending",
      image: "/placeholder.svg?height=60&width=60",
      created: "2024-01-12",
      lastUpdated: "2024-01-19",
    },
    {
      id: 4,
      name: "Chemical Grade Aluminum",
      supplier: "AlumTech Industries",
      category: "Chemicals",
      price: 1800,
      stock: 150,
      status: "active",
      image: "/placeholder.svg?height=60&width=60",
      created: "2024-01-08",
      lastUpdated: "2024-01-16",
    },
  ]

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleSelectAll = () => {
    setSelectedProducts(selectedProducts.length === products.length ? [] : products.map((p) => p.id))
  }

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for products:`, selectedProducts)
    // Implement bulk actions
  }

  const handleStatusChange = (productId, newStatus) => {
    console.log(`Changing product ${productId} status to ${newStatus}`)
    // Implement status change
  }

  const filteredProducts = products.filter((product) => {
    const matchesStatus = filterStatus === "all" || product.status === filterStatus
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Product Management</h2>
            <p className="text-gray-600 mt-2">Manage all products in your marketplace</p>
          </div>
          <Link
            href="/admin/products/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            ➕ Add Product
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status Filter</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="out_of_stock">Out of Stock</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products or suppliers..."
                  className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {selectedProducts.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{selectedProducts.length} selected</span>
                <button
                  onClick={() => handleBulkAction("approve")}
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700"
                >
                  Bulk Approve
                </button>
                <button
                  onClick={() => handleBulkAction("delete")}
                  className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
                >
                  Bulk Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === products.length}
                      onChange={handleSelectAll}
                      className="rounded"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Supplier</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleSelectProduct(product.id)}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-800">{product.name}</div>
                          <div className="text-sm text-gray-500">ID: {product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{product.supplier}</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">
                      ${product.price.toLocaleString()}/ton
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-sm font-medium ${
                          product.stock > 100
                            ? "text-green-600"
                            : product.stock > 0
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {product.stock} tons
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={product.status}
                        onChange={(e) => handleStatusChange(product.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full border-0 font-medium ${
                          product.status === "active"
                            ? "bg-green-100 text-green-800"
                            : product.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : product.status === "out_of_stock"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="out_of_stock">Out of Stock</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Edit
                        </Link>
                        <Link href={`/products/${product.id}`} className="text-green-600 hover:text-green-800 text-sm">
                          View
                        </Link>
                        <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-white rounded-xl shadow-lg px-6 py-4">
          <div className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm">Previous</button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm">2</button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm">Next</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
