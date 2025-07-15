"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"

export default function AdminInventory() {
  const [selectedItems, setSelectedItems] = useState([])
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const inventoryItems = [
    {
      id: 1,
      name: "Premium Steel Rods",
      sku: "STL-001",
      category: "Metals & Alloys",
      currentStock: 500,
      minStock: 100,
      maxStock: 1000,
      unit: "tons",
      value: 625000,
      location: "Warehouse A",
      lastUpdated: "2024-01-20",
      status: "in_stock",
      supplier: "MetalCorp Industries",
    },
    {
      id: 2,
      name: "Industrial Plastic Pellets",
      sku: "PLS-002",
      category: "Plastics",
      currentStock: 25,
      minStock: 50,
      maxStock: 500,
      unit: "tons",
      value: 21250,
      location: "Warehouse B",
      lastUpdated: "2024-01-18",
      status: "low_stock",
      supplier: "PolyTech Solutions",
    },
    {
      id: 3,
      name: "Organic Cotton Fiber",
      sku: "TXT-003",
      category: "Textiles",
      currentStock: 0,
      minStock: 20,
      maxStock: 200,
      unit: "tons",
      value: 0,
      location: "Warehouse C",
      lastUpdated: "2024-01-15",
      status: "out_of_stock",
      supplier: "EcoTextile Co.",
    },
    {
      id: 4,
      name: "Chemical Grade Aluminum",
      sku: "CHM-004",
      category: "Chemicals",
      currentStock: 150,
      minStock: 75,
      maxStock: 300,
      unit: "tons",
      value: 270000,
      location: "Warehouse A",
      lastUpdated: "2024-01-19",
      status: "in_stock",
      supplier: "AlumTech Industries",
    },
  ]

  const getStockStatus = (item) => {
    if (item.currentStock === 0) return "out_of_stock"
    if (item.currentStock <= item.minStock) return "low_stock"
    return "in_stock"
  }

  const getStockPercentage = (item) => {
    return (item.currentStock / item.maxStock) * 100
  }

  const filteredItems = inventoryItems.filter((item) => {
    const matchesStatus = filterStatus === "all" || getStockStatus(item) === filterStatus
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const totalValue = inventoryItems.reduce((sum, item) => sum + item.value, 0)
  const lowStockItems = inventoryItems.filter((item) => getStockStatus(item) === "low_stock").length
  const outOfStockItems = inventoryItems.filter((item) => getStockStatus(item) === "out_of_stock").length

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Inventory Management</h2>
            <p className="text-gray-600 mt-2">Monitor and manage your inventory levels</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              📊 Generate Report
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              📦 Bulk Reorder
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Inventory Value</p>
                <p className="text-2xl font-bold text-gray-800">${totalValue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">💰</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Items</p>
                <p className="text-2xl font-bold text-gray-800">{inventoryItems.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">📦</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Low Stock Alerts</p>
                <p className="text-2xl font-bold text-orange-600">{lowStockItems}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">⚠️</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Out of Stock</p>
                <p className="text-2xl font-bold text-red-600">{outOfStockItems}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-xl">🚫</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="in_stock">In Stock</option>
                  <option value="low_stock">Low Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search items..."
                  className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Stock Level</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Value</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-800">{item.name}</div>
                        <div className="text-sm text-gray-500">SKU: {item.sku}</div>
                        <div className="text-sm text-gray-500">{item.category}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>
                            {item.currentStock} {item.unit}
                          </span>
                          <span className="text-gray-500">Max: {item.maxStock}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              getStockStatus(item) === "out_of_stock"
                                ? "bg-red-500"
                                : getStockStatus(item) === "low_stock"
                                  ? "bg-orange-500"
                                  : "bg-green-500"
                            }`}
                            style={{ width: `${Math.min(getStockPercentage(item), 100)}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">
                          Min: {item.minStock} {item.unit}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">${item.value.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{item.location}</div>
                      <div className="text-xs text-gray-500">{item.supplier}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          getStockStatus(item) === "in_stock"
                            ? "bg-green-100 text-green-800"
                            : getStockStatus(item) === "low_stock"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {getStockStatus(item) === "in_stock"
                          ? "In Stock"
                          : getStockStatus(item) === "low_stock"
                            ? "Low Stock"
                            : "Out of Stock"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">Adjust</button>
                        <button className="text-green-600 hover:text-green-800 text-sm">Reorder</button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm">History</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
