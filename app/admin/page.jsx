import AdminLayout from "../../components/AdminLayout"

export default function AdminDashboard() {
  const stats = [
    {
      name: "Total Products",
      value: "1,247",
      change: "+12%",
      changeType: "increase",
      icon: "📦",
    },
    {
      name: "Active Users",
      value: "8,432",
      change: "+8%",
      changeType: "increase",
      icon: "👥",
    },
    {
      name: "Pending Approvals",
      value: "23",
      change: "-5%",
      changeType: "decrease",
      icon: "⏳",
    },
    {
      name: "Monthly Revenue",
      value: "$2.4M",
      change: "+15%",
      changeType: "increase",
      icon: "💰",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "user_registration",
      message: "New supplier registration: TechMaterials Inc.",
      time: "2 minutes ago",
      status: "pending",
    },
    {
      id: 2,
      type: "product_upload",
      message: "MetalCorp uploaded 5 new steel products",
      time: "15 minutes ago",
      status: "approved",
    },
    {
      id: 3,
      type: "transaction",
      message: "Large order completed: $125,000",
      time: "1 hour ago",
      status: "completed",
    },
    {
      id: 4,
      type: "content",
      message: "New blog post published: Steel Market Trends",
      time: "2 hours ago",
      status: "published",
    },
  ]

  const pendingApprovals = [
    {
      id: 1,
      type: "supplier",
      name: "GreenTech Materials",
      submitted: "2 hours ago",
      category: "Eco-friendly Materials",
    },
    {
      id: 2,
      type: "product",
      name: "Industrial Grade Aluminum",
      supplier: "AlumCorp",
      submitted: "4 hours ago",
    },
    {
      id: 3,
      type: "buyer",
      name: "Construction Dynamics LLC",
      submitted: "6 hours ago",
      category: "Construction",
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
          <p className="text-gray-600 mt-2">Monitor and manage your B2B marketplace</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      activity.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : activity.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : activity.status === "completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Pending Approvals</h3>
              <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full">{pendingApprovals.length}</span>
            </div>
            <div className="space-y-4">
              {pendingApprovals.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                      {item.type}
                    </span>
                  </div>
                  {item.supplier && <p className="text-sm text-gray-600 mb-1">Supplier: {item.supplier}</p>}
                  {item.category && <p className="text-sm text-gray-600 mb-1">Category: {item.category}</p>}
                  <p className="text-xs text-gray-500 mb-3">Submitted: {item.submitted}</p>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                      Approve
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">Reject</button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
              <div className="text-2xl mb-2">➕</div>
              <div className="text-sm font-medium">Add Product</div>
            </button>
            <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
              <div className="text-2xl mb-2">✅</div>
              <div className="text-sm font-medium">Approve Users</div>
            </button>
            <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
              <div className="text-2xl mb-2">📝</div>
              <div className="text-sm font-medium">Create Post</div>
            </button>
            <button className="bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-medium">View Reports</div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
