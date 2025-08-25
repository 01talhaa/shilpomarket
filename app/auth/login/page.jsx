"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Header from "../../../components/Header"
import { useAuth } from "../../../contexts/AuthContext"
import { toast } from "sonner"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    accountType: "supplier" // Add account type selection
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const credentials = {
        email: formData.email,
        password: formData.password
      }

      const result = await login(credentials, formData.accountType)

      if (result.success) {
        toast.success("Login successful!")
        
        // Redirect based on account type
        if (formData.accountType === "supplier") {
          router.push("/seller/dashboard")
        } else {
          router.push("/buyer/dashboard")
        }
      } else {
        toast.error(result.message || "Login failed")
      }
    } catch (error) {
      console.error("Login error:", error)
      toast.error("Login failed: " + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 mt-40">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your RawMart account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Account Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Account Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => handleInputChange("accountType", "supplier")}
                    className={`border-2 rounded-lg p-3 cursor-pointer transition-colors text-center ${
                      formData.accountType === "supplier" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-2xl mb-1">🏭</div>
                    <h3 className="font-semibold text-gray-800 text-sm">Supplier</h3>
                  </div>

                  <div
                    onClick={() => handleInputChange("accountType", "buyer")}
                    className={`border-2 rounded-lg p-3 cursor-pointer transition-colors text-center ${
                      formData.accountType === "buyer"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-2xl mb-1">🛒</div>
                    <h3 className="font-semibold text-gray-800 text-sm">Buyer</h3>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                  <span>🔍</span>
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </button>
                <button className="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                  <span>💼</span>
                  <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>


        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}
