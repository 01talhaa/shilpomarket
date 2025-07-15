"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState("month")
  const [selectedMetric, setSelectedMetric] = useState("revenue")

  const analyticsData = {
    revenue: {
      current: 2400000,
      previous: 2100000,
      change: 14.3,
      data: [1800000, 1950000, 2100000, 2250000, 2400000],
    },
    users: {
      current: 8432,
      previous: 7890,
      change: 6.9,
      data: [7200, 7450, 7890, 8150, 8432],
    },
    transactions: {
      current: 1247,
      previous: 1156,
      change: 7.9,
      data: [980, 1050, 1156, 1200, 1247],
    },
    products: {
      current: 12450,
      previous: 11800,
      change: 5.5,
      data: [10500, 11000, 11800, 12100, 12450],
    },
  }

  const topProducts = [
    { name: "Premium Steel Rods", sales: 125, revenue: 156250 },
    { name: "Industrial Plastic Pellets", sales: 89, revenue: 75650 },
    { name: "Organic Cotton Fiber", sales: 67, revenue: 140700 },
    { name: "Chemical Grade Aluminum", sales: 54, revenue: 97200 },
    { name: "High-Grade Copper Wire", sales: 43, revenue: 137600 },
  ]

  const topSuppliers = [
    { name: "MetalCorp Industries", orders: 156, revenue: 195000 },
    { name: "PolyTech Solutions", orders: 134, revenue: 113900 },
    { name: "EcoTextile Co.", orders: 98, revenue: 205800 },
    { name: "AlumTech Industries", orders: 87, revenue: 156600 },
    { name: "ChemCore Ltd.", orders: 76, revenue: 152000 },
  ]

  const recentActivity = [
    { type: "sale", message: "Large order completed: $125,000", time: "2 hours ago" },
    { type: "user", message: "New supplier registered: TechMaterials Inc.", time: "4 hours ago" },
    { type: "product", message: "Product approved: Industrial Grade Aluminum", time: "6 hours ago" },
    { type: "payment", message: "Payment processed: $85,000", time: "8 hours ago" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h2>
            <p className="text-gray-600 mt-2">Track performance and insights across your platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(analyticsData).map(([key, data]) => (
            <div key={key} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600 capitalize">{key}</h3>
                <span className={`text-sm font-medium ${data.change > 0 ? "text-green-600" : "text-red-600"}`}>
                  {data.change > 0 ? "↗" : "↘"} {Math.abs(data.change)}%
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {key === "revenue" ? `$${(data.current / 1000000).toFixed(1)}M` : data.current.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                vs {key === "revenue" ? `$${(data.previous / 1000000).toFixed(1)}M` : data.previous.toLocaleString()}{" "}
                last period
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Revenue Trend</h3>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="revenue">Revenue</option>
                <option value="users">Users</option>
                <option value="transactions">Transactions</option>
                <option value="products">Products</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-between space-x-2">
              {analyticsData[selectedMetric].data.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-500 rounded-t"
                    style={{
                      height: `${(value / Math.max(...analyticsData[selectedMetric].data)) * 200}px`,
                    }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2">
                    {selectedMetric === "revenue" ? `$${(value / 1000000).toFixed(1)}M` : value.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Geographic Distribution</h3>
            <div className="space-y-4">
              {[
                { country: "United States", percentage: 35, users: 2951 },
                { country: "Germany", percentage: 18, users: 1518 },
                { country: "China", percentage: 15, users: 1265 },
                { country: "India", percentage: 12, users: 1012 },
                { country: "United Kingdom", percentage: 10, users: 843 },
                { country: "Others", percentage: 10, users: 843 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{item.country}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">{item.percentage}%</span>
                    <span className="text-sm text-gray-500 w-16">{item.users}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Top Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.sales} sales</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">${product.revenue.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Suppliers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Top Suppliers</h3>
            <div className="space-y-4">
              {topSuppliers.map((supplier, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{supplier.name}</div>
                      <div className="text-sm text-gray-500">{supplier.orders} orders</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">${supplier.revenue.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div
                  className={`w-3 h-3 rounded-full mt-1 ${
                    activity.type === "sale"
                      ? "bg-green-500"
                      : activity.type === "user"
                        ? "bg-blue-500"
                        : activity.type === "product"
                          ? "bg-purple-500"
                          : "bg-yellow-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
