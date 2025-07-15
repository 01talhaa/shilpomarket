"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"

export default function AdminTransactions() {
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [dateRange, setDateRange] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const transactions = [
    {
      id: "TXN-001",
      buyer: "Construction Corp",
      supplier: "MetalCorp Industries",
      product: "Premium Steel Rods",
      amount: 125000,
      quantity: "100 tons",
      status: "completed",
      paymentMethod: "bank_transfer",
      date: "2024-01-20",
      commission: 2500,
    },
    {
      id: "TXN-002",
      buyer: "Manufacturing Inc",
      supplier: "PolyTech Solutions",
      product: "Industrial Plastic Pellets",
      amount: 85000,
      quantity: "50 tons",
      status: "pending",
      paymentMethod: "letter_of_credit",
      date: "2024-01-19",
      commission: 1700,
    },
    {
      id: "TXN-003",
      buyer: "Textile Mills",
      supplier: "EcoTextile Co.",
      product: "Organic Cotton Fiber",
      amount: 210000,
      quantity: "75 tons",
      status: "processing",
      paymentMethod: "escrow",
      date: "2024-01-18",
      commission: 4200,
    },
    {
      id: "TXN-004",
      buyer: "Tech Components Ltd",
      supplier: "AlumTech Industries",
      product: "Chemical Grade Aluminum",
      amount: 95000,
      quantity: "30 tons",
      status: "failed",
      paymentMethod: "trade_finance",
      date: "2024-01-17",
      commission: 0,
    },
  ]

  const handleStatusChange = (transactionId, newStatus) => {
    console.log(`Changing transaction ${transactionId} status to ${newStatus}`)
    // Implement status change
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus
    const matchesType = filterType === "all" || transaction.paymentMethod === filterType
    const matchesSearch =
      transaction.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesType && matchesSearch
  })

  const totalRevenue = transactions.reduce((sum, t) => sum + (t.status === "completed" ? t.amount : 0), 0)
  const totalCommission = transactions.reduce((sum, t) => sum + (t.status === "completed" ? t.commission : 0), 0)
  const pendingAmount = transactions.reduce((sum, t) => sum + (t.status === "pending" ? t.amount : 0), 0)

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Transaction Management</h2>
            <p className="text-gray-600 mt-2">Monitor and manage all platform transactions</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Export Report
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Generate Invoice
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-green-600 mt-2">${totalRevenue.toLocaleString()}</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Commission Earned</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">${totalCommission.toLocaleString()}</p>
              </div>
              <div className="text-3xl">📊</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Amount</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">${pendingAmount.toLocaleString()}</p>
              </div>
              <div className="text-3xl">⏳</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{transactions.length}</p>
              </div>
              <div className="text-3xl">📋</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="failed">Failed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Methods</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="letter_of_credit">Letter of Credit</option>
                <option value="escrow">Escrow</option>
                <option value="trade_finance">Trade Finance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search transactions..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Transaction ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Buyer</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Supplier</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Payment</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">{transaction.id}</div>
                      <div className="text-sm text-gray-500">{transaction.date}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.buyer}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.supplier}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-800">{transaction.product}</div>
                      <div className="text-xs text-gray-500">{transaction.quantity}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">${transaction.amount.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">
                        Commission: ${transaction.commission.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={transaction.status}
                        onChange={(e) => handleStatusChange(transaction.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full border-0 font-medium ${
                          transaction.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : transaction.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : transaction.status === "processing"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="failed">Failed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        {transaction.paymentMethod.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                        <button className="text-green-600 hover:text-green-800 text-sm">Invoice</button>
                        <button className="text-red-600 hover:text-red-800 text-sm">Refund</button>
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
