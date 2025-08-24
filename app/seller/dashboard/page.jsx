
import Header from '@/components/Header';
import React from 'react';

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header/>
      <div className="max-w-7xl mx-auto mt-40">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Seller Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here’s an overview of your store’s performance.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Total Orders</span>
            <span className="text-2xl font-bold text-blue-600">128</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Products Listed</span>
            <span className="text-2xl font-bold text-green-600">42</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Revenue (₹)</span>
            <span className="text-2xl font-bold text-amber-600">₹1,24,500</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add Product</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">View Orders</button>
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">Manage Inventory</button>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24 Aug 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Order #1024 shipped</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">23 Aug 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Added new product: Handcrafted Vase</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Product</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">22 Aug 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Inventory updated for Wooden Chair</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">Inventory</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;