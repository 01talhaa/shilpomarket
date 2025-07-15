"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import Link from "next/link"

export default function AdminOrders() {
  const [selectedOrders, setSelectedOrders] = useState([])
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const orders = [
    {
      id: "ORD-2024-001",
      buyer: "Construction Corp",
      supplier: "MetalCorp Industries",
      product: "Premium Steel Rods",
      quantity: "100 tons",
      amount: 125000,
      status: "processing",
      priority: "high",
      orderDate: "2024-01-20",
      deliveryDate: "2024-02-05",
      paymentStatus: "paid",
      paymentMethod: "Bank Transfer",
      shippingAddress: "123 Industrial Ave, New York, NY",
      trackingNumber: "TRK123456789",
    },
    {
      id: "ORD-2024-002",
      buyer: "Manufacturing Inc",
      supplier: "PolyTech Solutions",
      product: "Industrial Plastic Pellets",
      quantity: "50 tons",
      amount: 42500,
      status: "shipped",
      priority: "medium",
      orderDate: "2024-01-18",
      deliveryDate: "2024-01-30",
      paymentStatus: "paid",
      paymentMethod: "Credit Card",
      shippingAddress: "456 Factory Rd, Chicago, IL",
      trackingNumber: "TRK987654321",
    },
    {
      id: "ORD-2024-003",
      buyer: "Textile Mills",
      supplier: "EcoTextile Co.",
      product: "Organic Cotton Fiber",
      quantity: "75 tons",
      amount: 157500,
      status: "pending",
      priority: "low",
      orderDate: "2024-01-19",
      deliveryDate: "2024-02-10",
      paymentStatus: "pending",
      paymentMethod: "Bank Transfer",
      shippingAddress: "789 Mill St, Atlanta, GA",
      trackingNumber: null,
    },
    {
      id: "ORD-2024-004",
      buyer: "Tech Components Ltd",
      supplier: "AlumTech Industries",
      product: "Chemical Grade Aluminum",
      quantity: "25 tons",
      amount: 45000,
      status: "delivered",
      priority: "high",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-25",
      paymentStatus: "paid",
      paymentMethod: "Wire Transfer",
      shippingAddress: "321 Tech Park, San Francisco, CA",
      trackingNumber: "TRK456789123",
    },
  ]

  const handleSelectOrder = (orderId) => {
    setSelectedOrders((prev) => (prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]))
  }

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for orders:`, selectedOrders)
  }

  const handleStatusChange = (orderId, newStatus) => {
    console.log(`Changing order ${orderId} status to ${newStatus}`)
  }

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === "all" || order.status === filterStatus
    const matchesPriority = filterPriority === "all" || order.priority === filterPriority
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesPriority && matchesSearch
  })

  const totalOrders = orders.length
  const pendingOrders = orders.filter((o) => o.status === "pending").length
  const processingOrders = orders.filter((o) => o.status === "processing").length
  const totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0)

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Order Management</h2>
            <p className="text-gray-600 mt-2">Track and manage all orders in your marketplace</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              📊 Export Orders
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ➕ Manual Order
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Orders</p>
                <p className="text-2xl font-bold text-gray-800">{totalOrders}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">📦</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Orders</p>
                <p className="text-2xl font-bold text-orange-600">{pendingOrders}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">⏳</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Processing</p>
                <p className="text-2xl font-bold text-blue-600">{processingOrders}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">⚙️</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-green-600">${(totalRevenue / 1000).toFixed(0)}K</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* High Priority Orders Alert */}
        {orders.filter((o) => o.priority === "high" && o.status === "pending").length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center">
              <span className="text-red-600 text-xl mr-3">🚨</span>
              <div>
                <h3 className="text-red-800 font-medium">High Priority Orders Require Attention</h3>
                <p className="text-red-600 text-sm">
                  {orders.filter((o) => o.priority === "high" && o.status === "pending").length} high priority orders
                  are pending approval
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search orders..."
                  className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {selectedOrders.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{selectedOrders.length} selected</span>
                <button
                  onClick={() => handleBulkAction("approve")}
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700"
                >
                  Bulk Approve
                </button>
                <button
                  onClick={() => handleBulkAction("ship")}
                  className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700"
                >
                  Bulk Ship
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === orders.length}
                      onChange={() =>
                        setSelectedOrders(selectedOrders.length === orders.length ? [] : orders.map((o) => o.id))
                      }
                      className="rounded"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Order</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Buyer/Supplier</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-800 flex items-center">
                          {order.id}
                          <span
                            className={`ml-2 px-2 py-1 text-xs rounded-full ${
                              order.priority === "high"
                                ? "bg-red-100 text-red-800"
                                : order.priority === "medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {order.priority}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">Order Date: {order.orderDate}</div>
                        <div className="text-sm text-gray-500">Delivery: {order.deliveryDate}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-800">{order.buyer}</div>
                        <div className="text-sm text-gray-500">from {order.supplier}</div>
                        <div className="text-xs text-gray-400">{order.shippingAddress}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-800">{order.product}</div>
                        <div className="text-sm text-gray-500">{order.quantity}</div>
                        {order.trackingNumber && (
                          <div className="text-xs text-blue-600">Track: {order.trackingNumber}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-800">${order.amount.toLocaleString()}</div>
                        <div
                          className={`text-sm ${order.paymentStatus === "paid" ? "text-green-600" : "text-orange-600"}`}
                        >
                          {order.paymentStatus}
                        </div>
                        <div className="text-xs text-gray-500">{order.paymentMethod}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full border-0 font-medium ${
                          order.status === "delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "shipped"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : order.status === "pending"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-red-100 text-red-800"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:text-blue-800 text-sm">
                          View
                        </Link>
                        <button className="text-green-600 hover:text-green-800 text-sm">Track</button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm">Invoice</button>
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
