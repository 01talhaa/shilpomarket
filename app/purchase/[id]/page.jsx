"use client"
import { useState } from "react"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Link from "next/link"

export default function PurchasePage({ params, searchParams }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    quantity: Number.parseInt(searchParams?.quantity) || 5,
    deliveryAddress: "",
    billingAddress: "",
    sameAsDelivery: true,
    paymentMethod: "bank_transfer",
    specialRequirements: "",
    urgentDelivery: false,
    insurance: false,
  })

  const product = {
    id: 1,
    name: "Premium Steel Rods",
    supplier: "MetalCorp Industries",
    price: 1250,
    image: "/placeholder.svg?height=200&width=200",
    category: "Metals & Alloys",
    minOrder: 5,
    unit: "tons",
    specifications: {
      "Material Grade": "ASTM A615 Grade 60",
      "Diameter Range": "8mm - 32mm",
      Length: "6m - 12m",
    },
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const subtotal = formData.quantity * product.price
  const shippingCost = formData.urgentDelivery ? 500 : 200
  const insuranceCost = formData.insurance ? subtotal * 0.02 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shippingCost + insuranceCost + tax

  const paymentMethods = [
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      description: "Direct bank transfer - Most secure",
      icon: "🏦",
      processingTime: "1-3 business days",
    },
    {
      id: "letter_of_credit",
      name: "Letter of Credit",
      description: "International trade standard",
      icon: "📄",
      processingTime: "5-10 business days",
    },
    {
      id: "trade_finance",
      name: "Trade Finance",
      description: "Flexible payment terms",
      icon: "💼",
      processingTime: "3-7 business days",
    },
    {
      id: "escrow",
      name: "Escrow Service",
      description: "Protected transaction",
      icon: "🔒",
      processingTime: "2-5 business days",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
                <span className={`ml-2 font-medium ${step >= stepNumber ? "text-blue-600" : "text-gray-600"}`}>
                  {stepNumber === 1 && "Order Details"}
                  {stepNumber === 2 && "Shipping"}
                  {stepNumber === 3 && "Payment"}
                  {stepNumber === 4 && "Confirmation"}
                </span>
                {stepNumber < 4 && (
                  <div className={`w-16 h-0.5 ml-4 ${step > stepNumber ? "bg-blue-600" : "bg-gray-200"}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Step 1: Order Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>

                  {/* Product Summary */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.supplier}</p>
                        <p className="text-green-600 font-semibold">
                          ${product.price}/{product.unit}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity ({product.unit})</label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleInputChange("quantity", Math.max(product.minOrder, formData.quantity - 1))}
                        className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) =>
                          handleInputChange(
                            "quantity",
                            Math.max(product.minOrder, Number.parseInt(e.target.value) || product.minOrder),
                          )
                        }
                        min={product.minOrder}
                        className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => handleInputChange("quantity", formData.quantity + 1)}
                        className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Minimum order: {product.minOrder} {product.unit}
                    </p>
                  </div>

                  {/* Special Requirements */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements (Optional)
                    </label>
                    <textarea
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Any specific requirements, certifications, or custom specifications..."
                    />
                  </div>

                  {/* Additional Options */}
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.urgentDelivery}
                        onChange={(e) => handleInputChange("urgentDelivery", e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-gray-700">Urgent Delivery (+$500)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.insurance}
                        onChange={(e) => handleInputChange("insurance", e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-gray-700">Shipping Insurance (+2% of order value)</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Shipping Information</h2>

                  {/* Delivery Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                    <textarea
                      value={formData.deliveryAddress}
                      onChange={(e) => handleInputChange("deliveryAddress", e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter complete delivery address including company name, street address, city, state, postal code, and country"
                      required
                    />
                  </div>

                  {/* Billing Address */}
                  <div>
                    <label className="flex items-center space-x-2 mb-3">
                      <input
                        type="checkbox"
                        checked={formData.sameAsDelivery}
                        onChange={(e) => handleInputChange("sameAsDelivery", e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-gray-700">Billing address same as delivery address</span>
                    </label>

                    {!formData.sameAsDelivery && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
                        <textarea
                          value={formData.billingAddress}
                          onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter billing address"
                          required
                        />
                      </div>
                    )}
                  </div>

                  {/* Shipping Options */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Shipping Options</h3>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-800">Standard Shipping</h4>
                            <p className="text-sm text-gray-600">7-14 business days</p>
                          </div>
                          <span className="font-semibold text-green-600">$200</span>
                        </div>
                      </div>
                      {formData.urgentDelivery && (
                        <div className="border border-blue-500 rounded-lg p-4 bg-blue-50">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-gray-800">Urgent Delivery</h4>
                              <p className="text-sm text-gray-600">3-5 business days</p>
                            </div>
                            <span className="font-semibold text-blue-600">$500</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Payment Method</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => handleInputChange("paymentMethod", method.id)}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          formData.paymentMethod === method.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-2xl">{method.icon}</span>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{method.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                            <p className="text-xs text-gray-500">Processing: {method.processingTime}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Payment Details */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Payment Information</h3>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>• Payment terms: Net 30 days</p>
                      <p>• All payments are processed securely</p>
                      <p>• You will receive payment instructions after order confirmation</p>
                      <p>• Trade assurance available for qualified orders</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-green-600 text-3xl">✓</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Order Submitted Successfully!</h2>
                  <p className="text-gray-600">
                    Your quote request has been sent to {product.supplier}. You will receive a detailed quote within 24
                    hours.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-6 text-left">
                    <h3 className="font-semibold text-gray-800 mb-3">What happens next?</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>1. Supplier reviews your requirements</p>
                      <p>2. You receive a detailed quote via email</p>
                      <p>3. Negotiate terms if needed</p>
                      <p>4. Finalize the order and payment</p>
                      <p>5. Track your shipment</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 justify-center">
                    <Link
                      href="/products"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                    <Link
                      href="/orders"
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      View Orders
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {step < 4 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
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
                  <button
                    onClick={() => setStep(Math.min(4, step + 1))}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    {step === 3 ? "Submit Order" : "Continue"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product:</span>
                  <span className="font-medium">{product.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-medium">
                    {formData.quantity} {product.unit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Unit Price:</span>
                  <span className="font-medium">${product.price.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">${shippingCost.toLocaleString()}</span>
                  </div>
                  {formData.insurance && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Insurance:</span>
                      <span className="font-medium">${insuranceCost.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%):</span>
                    <span className="font-medium">${tax.toLocaleString()}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Supplier Information</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{product.supplier}</p>
                  <p>⭐ 4.8 rating</p>
                  <p>Response time: {"< 2 hours"}</p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-0.5">🔒</span>
                <div className="text-sm">
                  <h4 className="font-semibold text-green-800 mb-1">Secure Transaction</h4>
                  <p className="text-green-700">Your order is protected by RawMart&apos;s trade assurance program.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
