"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"

export default function AdminUsers() {
  const [selectedUsers, setSelectedUsers] = useState([])
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const users = [
    {
      id: 1,
      name: "John Manufacturing Co.",
      email: "john@manufacturing.com",
      type: "buyer",
      status: "active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      orders: 25,
      totalSpent: 125000,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    {
      id: 2,
      name: "MetalCorp Industries",
      email: "sales@metalcorp.com",
      type: "supplier",
      status: "active",
      joinDate: "2023-12-10",
      lastActive: "1 hour ago",
      orders: 150,
      totalSpent: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    {
      id: 3,
      name: "TechMaterials Inc.",
      email: "info@techmaterials.com",
      type: "supplier",
      status: "pending",
      joinDate: "2024-01-20",
      lastActive: "5 hours ago",
      orders: 0,
      totalSpent: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: false,
    },
    {
      id: 4,
      name: "BuildTech Solutions",
      email: "procurement@buildtech.com",
      type: "buyer",
      status: "suspended",
      joinDate: "2024-01-05",
      lastActive: "2 days ago",
      orders: 8,
      totalSpent: 45000,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
  ]

  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const handleSelectAll = () => {
    setSelectedUsers(selectedUsers.length === users.length ? [] : users.map((u) => u.id))
  }

  const handleStatusChange = (userId, newStatus) => {
    console.log(`Changing user ${userId} status to ${newStatus}`)
    // Implement status change
  }

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for users:`, selectedUsers)
    // Implement bulk actions
  }

  const filteredUsers = users.filter((user) => {
    const matchesType = filterType === "all" || user.type === filterType
    const matchesStatus = filterStatus === "all" || user.status === filterStatus
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesStatus && matchesSearch
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">User Management</h2>
            <p className="text-gray-600 mt-2">Manage buyers and suppliers on your platform</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Export Users
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Send Invites
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{users.length}</p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Buyers</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {users.filter((u) => u.type === "buyer" && u.status === "active").length}
                </p>
              </div>
              <div className="text-3xl">🛒</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Suppliers</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {users.filter((u) => u.type === "supplier" && u.status === "active").length}
                </p>
              </div>
              <div className="text-3xl">🏭</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">
                  {users.filter((u) => u.status === "pending").length}
                </p>
              </div>
              <div className="text-3xl">⏳</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">User Type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="buyer">Buyers</option>
                  <option value="supplier">Suppliers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search users..."
                  className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {selectedUsers.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{selectedUsers.length} selected</span>
                <button
                  onClick={() => handleBulkAction("approve")}
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700"
                >
                  Bulk Approve
                </button>
                <button
                  onClick={() => handleBulkAction("suspend")}
                  className="bg-yellow-600 text-white px-3 py-2 rounded text-sm hover:bg-yellow-700"
                >
                  Bulk Suspend
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

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === users.length}
                      onChange={handleSelectAll}
                      className="rounded"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">User</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Join Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Activity</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <div className="font-medium text-gray-800">{user.name}</div>
                            {user.verified && <span className="text-green-500 text-sm">✓</span>}
                          </div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          user.type === "buyer" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {user.type === "buyer" ? "🛒 Buyer" : "🏭 Supplier"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={user.status}
                        onChange={(e) => handleStatusChange(user.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full border-0 font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800"
                            : user.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : user.status === "suspended"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="suspended">Suspended</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.joinDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.lastActive}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-800">{user.orders} orders</div>
                        {user.type === "buyer" && (
                          <div className="text-gray-500">${user.totalSpent.toLocaleString()}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                        <button className="text-green-600 hover:text-green-800 text-sm">Edit</button>
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
            Showing {filteredUsers.length} of {users.length} users
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
