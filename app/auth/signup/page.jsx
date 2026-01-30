"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "../../../components/Header"
import { API_ENDPOINTS } from "../../../lib/api"
import { getRootCategories } from "../../../lib/categoriesData"
import { toast } from "sonner"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState("buyer")
  const [categories] = useState(getRootCategories())
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",

    // Company Info
    companyName: "",
    tradeLicense: "",
    companyType: "",
    industry: "",
    website: "",
    employeeCount: "",
  annualRevenueRange: "",

    // Address
    address: "",

    // Preferences
    interestedCategories: [],
    newsletter: true,
    terms: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCategoryToggle = (categoryId) => {
    setFormData((prev) => ({
      ...prev,
      interestedCategories: prev.interestedCategories.includes(categoryId)
        ? prev.interestedCategories.filter((id) => id !== categoryId)
        : [...prev.interestedCategories, categoryId],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!")
      return
    }

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields!")
      return
    }

    setLoading(true)

    try {
      // Determine API endpoint based on account type
      const apiUrl = accountType === "supplier" 
        ? API_ENDPOINTS.SUPPLIER_SIGNUP()
        : API_ENDPOINTS.BUYER_SIGNUP()

      // Prepare data according to API structure
      const apiData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        companyName: formData.companyName,
        tradeLicense: formData.tradeLicense,
        companyType: formData.companyType,
        industry: formData.industry,
        website: formData.website,
        employeeCount: formData.employeeCount,
        address: formData.address,
      }

      // Add account-specific fields
      if (accountType === "supplier") {
        apiData.interestedCategories = formData.interestedCategories
      } else {
        apiData.annualRevenueRange = formData.annualRevenueRange
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("Signup successful! Welcome to ShilpoMarket!")
        
        // Store tokens if provided
        if (result.data?.token) {
          localStorage.setItem('token', result.data.token)
        }
        if (result.data?.refreshToken) {
          localStorage.setItem('refreshToken', result.data.refreshToken)
        }
        
        // Extract user data from the correct nested structure
        const userData = result.data?.supplier || result.data?.buyer || result.data || result
        
        // Add account type to user data for easier dashboard routing
        const userWithType = {
          ...userData,
          accountType: accountType
        }
        
        localStorage.setItem('user', JSON.stringify(userWithType))
        
        // For suppliers, show pending approval message
        if (accountType === "supplier") {
          toast.info("Your account is pending admin approval. You'll be able to login once approved.", {
            duration: 5000
          })
          
          setTimeout(() => {
            router.push("/auth/login")
          }, 2000)
        } else {
          // Buyers can login immediately
          setTimeout(() => {
            router.push("/buyer/dashboard")
          }, 1500)
        }
      } else {
        toast.error(result.message || "Signup failed. Please try again.")
      }
    } catch (error) {
      console.error("Signup error:", error)
      toast.error("Signup failed: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  const companyTypes = ["pvt_ltd", "pub_ltd", "partner", "sole_prop", "coop", "other"]

  const industries = [
    "Automotive",
    "Construction",
    "Electronics",
    "Textiles",
    "Food & Beverage",
    "Pharmaceuticals",
    "Energy",
    "Aerospace",
    "Import/Export",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 mt-40">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Join RawMart</h1>
              <p className="text-gray-600">Create your account to start trading</p>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {accountType === "buyer" ? [1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-12 h-0.5 ml-2 ${step > stepNumber ? "bg-blue-600" : "bg-gray-200"}`}></div>
                  )}
                </div>
              )) : [1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-12 h-0.5 ml-2 ${step > stepNumber ? "bg-blue-600" : "bg-gray-200"}`}></div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Account Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Choose Account Type</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => setAccountType("buyer")}
                      className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                        accountType === "buyer" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-3">🛒</div>
                        <h3 className="font-semibold text-gray-800 mb-2">Buyer</h3>
                        <p className="text-sm text-gray-600">
                          Purchase raw materials from verified suppliers worldwide
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() => setAccountType("supplier")}
                      className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                        accountType === "supplier"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-3">🏭</div>
                        <h3 className="font-semibold text-gray-800 mb-2">Supplier</h3>
                        <p className="text-sm text-gray-600">Sell your raw materials to buyers globally</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? "👁️" : "👁️‍🗨️"}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Company Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Company Information</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trade License</label>
                    <input
                      type="text"
                      value={formData.tradeLicense}
                      onChange={(e) => handleInputChange("tradeLicense", e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="TL-2025-XXXXXX"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Type</label>
                      <select
                        value={formData.companyType}
                        onChange={(e) => handleInputChange("companyType", e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="private_limited">Private Limited</option>
                        <option value="public_limited">Public Limited</option>
                        <option value="partnership">Partnership</option>
                        <option value="sole_proprietorship">Sole Proprietorship</option>
                        <option value="cooperative">Cooperative</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange("industry", e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select industry</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Construction">Construction</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Energy">Energy</option>
                        <option value="Aerospace">Aerospace</option>
                        <option value="Import/Export">Import/Export</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website (Optional)</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://www.example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Employee Count</label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select range</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue Range</label>
                      <select
                        value={formData.annualRevenueRange}
                        onChange={(e) => handleInputChange("annualRevenueRange", e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select range</option>
                        <option value="<1M">Less than $1M</option>
                        <option value="1M-5M">$1M - $5M</option>
                        <option value="5M-10M">$5M - $10M</option>
                        <option value="10M-50M">$10M - $50M</option>
                        <option value="50M+">More than $50M</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Address</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter complete address"
                      required
                    />
                  </div>

                  {accountType === "buyer" && (
                    <div className="space-y-3 mt-6 pt-6 border-t border-gray-200">
                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.terms}
                          onChange={(e) => handleInputChange("terms", e.target.checked)}
                          className="rounded mt-1"
                          required
                        />
                        <span className="text-sm text-gray-700">
                          I agree to the{" "}
                          <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                            Privacy Policy
                          </Link>
                        </span>
                      </label>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Preferences (Suppliers only) */}
              {step === 4 && accountType === "supplier" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Preferences</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Interested Categories (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {categories.map((category) => (
                        <label key={category.id} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.interestedCategories.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                            className="rounded"
                          />
                          <span className="text-sm text-gray-700">{category.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mt-6 pt-6 border-t border-gray-200">
                    <label className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.terms}
                        onChange={(e) => handleInputChange("terms", e.target.checked)}
                        className="rounded mt-1"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    step === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Previous
                </button>

                {(accountType === "buyer" && step < 3) || (accountType === "supplier" && step < 4) ? (
                  <button
                    type="button"
                    onClick={() => setStep(Math.min(accountType === "buyer" ? 3 : 4, step + 1))}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Create Account
                  </button>
                )}
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign in here
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
