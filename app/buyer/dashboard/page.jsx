
import Header from '@/components/Header';
import React from 'react';

const BuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header/>
      <div className="max-w-7xl mx-auto mt-40">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Buyer Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome! Here’s a summary of your recent activity and orders.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Orders Placed</span>
            <span className="text-2xl font-bold text-blue-600">15</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Wishlist Items</span>
            <span className="text-2xl font-bold text-pink-600">8</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Total Spent (₹)</span>
            <span className="text-2xl font-bold text-amber-600">₹12,300</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Browse Products</button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">View Wishlist</button>
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">Track Orders</button>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Order #2031 delivered</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Delivered</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">23 Aug 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Added "Handcrafted Vase" to wishlist</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">Wishlist</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">22 Aug 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Order #2029 shipped</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Shipped</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;