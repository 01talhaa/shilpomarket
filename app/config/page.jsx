"use client"
import { getApiBaseUrl } from "../../lib/api"

export default function ConfigPage() {
  const apiUrl = getApiBaseUrl()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Configuration Status</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">API Configuration</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-gray-600">Current API Base URL:</p>
              <p className="text-lg font-mono text-blue-600">{apiUrl}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700 mb-2">Environment Variables</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">NEXT_PUBLIC_API_BASE_URL:</span> {process.env.NEXT_PUBLIC_API_BASE_URL || 'Not set'}</p>
                  <p><span className="font-medium">API_BASE_URL:</span> {process.env.API_BASE_URL || 'Not set'}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700 mb-2">API Endpoints</h3>
                <div className="space-y-1 text-sm">
                  <p>• Supplier Signup: {apiUrl}/api/suppliers/signup</p>
                  <p>• Supplier Login: {apiUrl}/api/suppliers/login</p>
                  <p>• Buyer Signup: {apiUrl}/api/buyers/signup</p>
                  <p>• Buyer Login: {apiUrl}/api/buyers/login</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📝 Notes</h3>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• All API calls now use the centralized configuration from .env file</li>
            <li>• The API base URL is set to: <strong>{apiUrl}</strong></li>
            <li>• Environment variables are properly prefixed with NEXT_PUBLIC_ for client-side access</li>
            <li>• API endpoints are managed through the centralized API utility (lib/api.js)</li>
            <li>• No hardcoded URLs are used anywhere in the application</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
