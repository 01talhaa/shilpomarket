"use client"
import { useAuth } from "../contexts/AuthContext"

export default function TestPage() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Authentication Test Page</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Authentication Status</h2>
              <p className={`text-lg ${isAuthenticated() ? 'text-green-600' : 'text-red-600'}`}>
                {isAuthenticated() ? '✅ User is authenticated' : '❌ User is not authenticated'}
              </p>
            </div>

            {user && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {JSON.stringify(user, null, 2)}
                  </pre>
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Local Storage Data</h2>
              <div className="space-y-2">
                <div>
                  <strong>Token:</strong> {typeof window !== 'undefined' && localStorage.getItem('token') ? '✅ Present' : '❌ Missing'}
                </div>
                <div>
                  <strong>Refresh Token:</strong> {typeof window !== 'undefined' && localStorage.getItem('refreshToken') ? '✅ Present' : '❌ Missing'}
                </div>
                <div>
                  <strong>User Data:</strong> {typeof window !== 'undefined' && localStorage.getItem('user') ? '✅ Present' : '❌ Missing'}
                </div>
              </div>
            </div>

            {user && (
              <div>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}