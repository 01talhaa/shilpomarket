"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import Link from "next/link"

export default function AdminSuppliers() {
  const [selectedSuppliers, setSelectedSuppliers] = useState([])
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const suppliers = [
    {
      id: 1,
      name: "MetalCorp Industries",
      email: "contact@metalcorp.com",
      phone: "+1-555-0123",
      country: "USA",
      city: "Pittsburgh",
      status: "active",
      verified: true,
      rating: 4.8,
      totalProducts: 245,
      totalOrders: 1250,
      totalRevenue: 2500000,
      joinDate: "2020-03-15",
      lastActive: "2024-01-20",
      documents: {
        businessLicense: "verified",
        taxCertificate: "verified",
        qualityCertification: "pending",
      },
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "PolyTech Solutions",
      email: "info@polytech.de",
      phone: "+49-30-12345678",
      country: "Germany",
      city: "Berlin",
      status: "active",
      verified: true,
      rating: 4.9,
      totalProducts: 189,
      totalOrders: 980,
      totalRevenue: 1800000,
      joinDate: "2021-01-10",
      lastActive: "2024-01-19",
      documents: {
        businessLicense: "verified",
        taxCertificate: "verified",
        qualityCertification: "verified",
      },
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "EcoTextile Co.",
      email: "sales@ecotextile.in",
      phone: "+91-11-98765432",
      country: "India",
      city: "Mumbai",
      status: "pending",
      verified: false,
      rating: 4.7,
      totalProducts: 156,
      totalOrders: 0,
      totalRevenue: 0,
      joinDate: "2024-01-15",
      lastActive: "2024-01-18",
      documents: {
        businessLicense: "pending",
        taxCertificate: "pending",
        qualityCertification: "not_submitted",
      },
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "ChemCore Ltd.",
      email: "contact@chemcore.co.uk",
      phone: "+44-20-87654321",
      country: "UK",
      city: "London",
      status: "suspended",
      verified: true,
      rating: 4.2,
      totalProducts: 298,
      totalOrders: 750,
      totalRevenue: 1200000,
      joinDate: "2019-08-22",
      lastActive: "2024-01-10",
      documents: {
        businessLicense: "verified",
        taxCertificate: "expired",
        qualityCertification: "verified",
      },
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  const handleSelectSupplier = (supplierId) => {
    setSelectedSuppliers((prev) =>
      prev.includes(supplierId) ? prev.filter((id) => id !== supplierId) : [...prev, supplierId],
    )
  }

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for suppliers:`, selectedSuppliers)
  }

  const handleStatusChange = (supplierId, newStatus) => {
    console.log(`Changing supplier ${supplierId} status to ${newStatus}`)
  }

  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesStatus = filterStatus === "all" || supplier.status === filterStatus
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.country.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const totalSuppliers = suppliers.length
  const activeSuppliers = suppliers.filter((s) => s.status === "active").length
  const pendingSuppliers = suppliers.filter((s) => s.status === "pending").length
  const totalRevenue = suppliers.reduce((sum, s) => sum + s.totalRevenue, 0)

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Supplier Management</h2>
            <p className="text-gray-600 mt-2">Manage and monitor your supplier network</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              📊 Export Data
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ➕ Invite Supplier
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Suppliers</p>
                <p className="text-2xl font-bold text-gray-800">{totalSuppliers}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">🏢</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Suppliers</p>
                <p className="text-2xl font-bold text-green-600">{activeSuppliers}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">✅</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Approval</p>
                <p className="text-2xl font-bold text-orange-600">{pendingSuppliers}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">⏳</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-purple-600">${(totalRevenue / 1000000).toFixed(1)}M</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
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
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search suppliers..."
                  className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {selectedSuppliers.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{selectedSuppliers.length} selected</span>
                <button
                  onClick={() => handleBulkAction("approve")}
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700"
                >
                  Bulk Approve
                </button>
                <button
                  onClick={() => handleBulkAction("suspend")}
                  className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
                >
                  Bulk Suspend
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Suppliers Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedSuppliers.length === suppliers.length}
                      onChange={() =>
                        setSelectedSuppliers(
                          selectedSuppliers.length === suppliers.length ? [] : suppliers.map((s) => s.id),
                        )
                      }
                      className="rounded"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Supplier</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Performance</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Documents</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSuppliers.map((supplier) => (
                  <tr key={supplier.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedSuppliers.includes(supplier.id)}
                        onChange={() => handleSelectSupplier(supplier.id)}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={supplier.logo || "/placeholder.svg"}
                          alt={supplier.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-800 flex items-center">
                            {supplier.name}
                            {supplier.verified && <span className="ml-2 text-green-500">✓</span>}
                          </div>
                          <div className="text-sm text-gray-500">{supplier.email}</div>
                          <div className="text-sm text-gray-500">{supplier.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {supplier.city}, {supplier.country}
                      </div>
                      <div className="text-xs text-gray-500">Joined: {supplier.joinDate}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-sm ml-1">{supplier.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{supplier.totalProducts} products</div>
                        <div className="text-sm text-gray-600">{supplier.totalOrders} orders</div>
                        <div className="text-sm font-medium text-green-600">
                          ${supplier.totalRevenue.toLocaleString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {Object.entries(supplier.documents).map(([doc, status]) => (
                          <div key={doc} className="flex items-center space-x-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                status === "verified"
                                  ? "bg-green-500"
                                  : status === "pending"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                            ></span>
                            <span className="text-xs text-gray-600 capitalize">
                              {doc.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={supplier.status}
                        onChange={(e) => handleStatusChange(supplier.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full border-0 font-medium ${
                          supplier.status === "active"
                            ? "bg-green-100 text-green-800"
                            : supplier.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="suspended">Suspended</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/admin/suppliers/${supplier.id}`}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          View
                        </Link>
                        <button className="text-green-600 hover:text-green-800 text-sm">Approve</button>
                        <button className="text-red-600 hover:text-red-800 text-sm">Suspend</button>
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
