"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import Link from "next/link"

export default function AdminContent() {
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const content = [
    {
      id: 1,
      title: "Global Steel Prices Rise 15% in Q4 2024",
      type: "news",
      status: "published",
      author: "Admin",
      publishDate: "2024-01-20",
      views: 1250,
      category: "Market News",
      featured: true,
    },
    {
      id: 2,
      title: "Sustainable Raw Materials: The Future of Manufacturing",
      type: "blog",
      status: "published",
      author: "Content Team",
      publishDate: "2024-01-18",
      views: 890,
      category: "Industry Insights",
      featured: false,
    },
    {
      id: 3,
      title: "New Trade Regulations Impact Raw Material Imports",
      type: "news",
      status: "draft",
      author: "Admin",
      publishDate: null,
      views: 0,
      category: "Regulations",
      featured: false,
    },
    {
      id: 4,
      title: "How to Choose the Right Steel Grade for Construction",
      type: "guide",
      status: "published",
      author: "Expert Team",
      publishDate: "2024-01-15",
      views: 2100,
      category: "Educational",
      featured: true,
    },
  ]

  const handleStatusChange = (contentId, newStatus) => {
    console.log(`Changing content ${contentId} status to ${newStatus}`)
    // Implement status change
  }

  const handleFeatureToggle = (contentId) => {
    console.log(`Toggling featured status for content ${contentId}`)
    // Implement feature toggle
  }

  const filteredContent = content.filter((item) => {
    const matchesType = filterType === "all" || item.type === filterType
    const matchesStatus = filterStatus === "all" || item.status === filterStatus
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesStatus && matchesSearch
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Content Management</h2>
            <p className="text-gray-600 mt-2">Manage blog posts, news articles, and educational content</p>
          </div>
          <Link
            href="/admin/content/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            ➕ Create Content
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Articles</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{content.length}</p>
              </div>
              <div className="text-3xl">📝</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {content.filter((c) => c.status === "published").length}
                </p>
              </div>
              <div className="text-3xl">✅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Drafts</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">
                  {content.filter((c) => c.status === "draft").length}
                </p>
              </div>
              <div className="text-3xl">📄</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {content.reduce((sum, c) => sum + c.views, 0).toLocaleString()}
                </p>
              </div>
              <div className="text-3xl">👁️</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="news">News</option>
                <option value="blog">Blog Posts</option>
                <option value="guide">Guides</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search content..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Content Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Author</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Published</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Views</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Featured</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredContent.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.category}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          item.type === "news"
                            ? "bg-red-100 text-red-800"
                            : item.type === "blog"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full border-0 font-medium ${
                          item.status === "published"
                            ? "bg-green-100 text-green-800"
                            : item.status === "draft"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="scheduled">Scheduled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.author}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.publishDate || "Not published"}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.views.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleFeatureToggle(item.id)}
                        className={`text-2xl ${item.featured ? "text-yellow-500" : "text-gray-300"}`}
                      >
                        ⭐
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/admin/content/${item.id}/edit`}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Edit
                        </Link>
                        <Link href={`/blog/${item.id}`} className="text-green-600 hover:text-green-800 text-sm">
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
      </div>
    </AdminLayout>
  )
}
