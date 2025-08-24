"use client"
import { useState } from "react"
import { API_ENDPOINTS } from "../../lib/api"

export default function TestApiPage() {
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const testSupplierSignup = async () => {
    setLoading(true)
    try {
      const testData = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe" + Date.now() + "@company.com",
        phone: "01712345678",
        password: "securePassword123",
        confirmPassword: "securePassword123",
        companyName: "Tech Solutions Ltd",
        tradeLicense: "TL-2025-001235",
        companyType: "private_limited",
        industry: "Technology",
        website: "https://techsolutions.com",
        employeeCount: "11-50",
        address: "123 Main Street, Dhaka, Bangladesh",
        interestedCategories: [1, 2]
      }

      const response = await fetch(API_ENDPOINTS.SUPPLIER_SIGNUP(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      })

      const result = await response.json()
      setResponse("Supplier Signup Response:\n" + JSON.stringify(result, null, 2))
    } catch (error) {
      setResponse("Error: " + error.message)
    }
    setLoading(false)
  }

  const testBuyerSignup = async () => {
    setLoading(true)
    try {
      const testData = {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith" + Date.now() + "@buyercompany.com",
        phone: "01787654321",
        password: "securePassword123",
        confirmPassword: "securePassword123",
        companyName: "Global Trading Ltd",
        tradeLicense: "TL-2025-005678",
        companyType: "private_limited",
        industry: "Import/Export",
        website: "https://globaltrading.com",
        employeeCount: "51-200",
        address: "456 Business Avenue, Dhaka, Bangladesh",
        annualRevenueRange: "1M-5M"
      }

      const response = await fetch(API_ENDPOINTS.BUYER_SIGNUP(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      })

      const result = await response.json()
      setResponse("Buyer Signup Response:\n" + JSON.stringify(result, null, 2))
    } catch (error) {
      setResponse("Error: " + error.message)
    }
    setLoading(false)
  }

  const testSupplierLogin = async () => {
    setLoading(true)
    try {
      const testData = {
        email: "john.doe1@company.com",
        password: "securePassword123"
      }

      const response = await fetch(API_ENDPOINTS.SUPPLIER_LOGIN(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      })

      const result = await response.json()
      setResponse("Supplier Login Response:\n" + JSON.stringify(result, null, 2))
    } catch (error) {
      setResponse("Error: " + error.message)
    }
    setLoading(false)
  }

  const testBuyerLogin = async () => {
    setLoading(true)
    try {
      const testData = {
        email: "jane.smith@buyercompany.com",
        password: "securePassword123"
      }

      const response = await fetch(API_ENDPOINTS.BUYER_LOGIN(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      })

      const result = await response.json()
      setResponse("Buyer Login Response:\n" + JSON.stringify(result, null, 2))
    } catch (error) {
      setResponse("Error: " + error.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">API Testing Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={testSupplierSignup}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Test Supplier Signup
          </button>
          
          <button
            onClick={testBuyerSignup}
            disabled={loading}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            Test Buyer Signup
          </button>
          
          <button
            onClick={testSupplierLogin}
            disabled={loading}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            Test Supplier Login
          </button>
          
          <button
            onClick={testBuyerLogin}
            disabled={loading}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 disabled:opacity-50"
          >
            Test Buyer Login
          </button>
        </div>

        {loading && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
            Loading...
          </div>
        )}

        {response && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">API Response:</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
              {response}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
