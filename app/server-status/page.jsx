"use client"
import { useState, useEffect } from "react"
import { API_ENDPOINTS } from "../../lib/api"

export default function ServerStatusPage() {
  const [status, setStatus] = useState({
    supplier: { status: 'checking', message: 'Checking...' },
    buyer: { status: 'checking', message: 'Checking...' }
  })

  const checkServerStatus = async (serverType, url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors'
      })
      
      if (response.ok) {
        return { status: 'online', message: `✅ Server is running (Status: ${response.status})` }
      } else {
        return { status: 'error', message: `❌ Server responded with error (Status: ${response.status})` }
      }
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        return { status: 'offline', message: '❌ Cannot connect to server (Server may be offline)' }
      }
      return { status: 'error', message: `❌ Error: ${error.message}` }
    }
  }

  const checkAllServers = async () => {
    setStatus({
      supplier: { status: 'checking', message: 'Checking...' },
      buyer: { status: 'checking', message: 'Checking...' }
    })

    const [supplierResult, buyerResult] = await Promise.all([
      checkServerStatus('supplier', API_ENDPOINTS.SUPPLIERS()),
      checkServerStatus('buyer', API_ENDPOINTS.BUYERS())
    ])

    setStatus({
      supplier: supplierResult,
      buyer: buyerResult
    })
  }

  useEffect(() => {
    checkAllServers()
  }, [])

  const testSignupEndpoint = async (type) => {
    const url = type === 'supplier' 
      ? 'http://localhost:3100/api/suppliers/signup'
      : 'http://localhost:3100/api/buyers/signup'
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: "Test",
          lastName: "User",
          email: "test@example.com",
          password: "test123"
        })
      })

      const contentType = response.headers.get("content-type")
      let result

      if (contentType && contentType.includes("application/json")) {
        result = await response.json()
      } else {
        result = await response.text()
      }

      alert(`${type} Signup Test:\n\nStatus: ${response.status}\nContent-Type: ${contentType}\n\nResponse:\n${JSON.stringify(result, null, 2)}`)
    } catch (error) {
      alert(`${type} Signup Test Failed:\n\n${error.message}`)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-600 bg-green-100'
      case 'offline': return 'text-red-600 bg-red-100'
      case 'error': return 'text-orange-600 bg-orange-100'
      default: return 'text-blue-600 bg-blue-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Server Status Checker</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Supplier Server (Port 3000)</h2>
            <div className={`p-4 rounded-lg mb-4 ${getStatusColor(status.supplier.status)}`}>
              {status.supplier.message}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Endpoint: http://localhost:3100/api/suppliers</p>
              <button
                onClick={() => testSignupEndpoint('supplier')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Test Signup Endpoint
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Buyer Server (Port 3001)</h2>
            <div className={`p-4 rounded-lg mb-4 ${getStatusColor(status.buyer.status)}`}>
              {status.buyer.message}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Endpoint: http://localhost:3001/api/buyers</p>
              <button
                onClick={() => testSignupEndpoint('buyer')}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Test Signup Endpoint
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          <div className="flex space-x-4">
            <button
              onClick={checkAllServers}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Refresh Status
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Troubleshooting Tips</h3>
          <ul className="text-yellow-700 space-y-1">
            <li>• Make sure your backend servers are running on ports 3000 and 3001</li>
            <li>• Check if CORS is properly configured on your backend</li>
            <li>• Verify the API endpoints exist: /api/suppliers/signup and /api/buyers/signup</li>
            <li>• Check backend console for any error messages</li>
            <li>• Ensure your backend accepts POST requests with JSON content-type</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
