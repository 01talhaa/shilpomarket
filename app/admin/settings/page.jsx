"use client"
import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general")
  const [settings, setSettings] = useState({
    general: {
      siteName: "RawMart",
      siteDescription: "The leading B2B marketplace for raw materials",
      contactEmail: "support@rawmart.com",
      contactPhone: "+1-800-RAWMART",
      timezone: "America/New_York",
      currency: "USD",
      language: "en",
    },
    platform: {
      commissionRate: 5,
      minOrderAmount: 1000,
      maxOrderAmount: 1000000,
      autoApproveSuppliers: false,
      autoApproveProducts: false,
      requireVerification: true,
      allowGuestCheckout: false,
    },
    payment: {
      paymentMethods: ["bank_transfer", "credit_card", "wire_transfer"],
      paymentTerms: "Net 30",
      lateFeePercentage: 2,
      escrowEnabled: true,
      minimumEscrowAmount: 10000,
    },
    shipping: {
      freeShippingThreshold: 50000,
      internationalShipping: true,
      shippingCalculation: "weight_based",
      defaultShippingRate: 150,
    },
    email: {
      smtpHost: "smtp.rawmart.com",
      smtpPort: 587,
      smtpUsername: "noreply@rawmart.com",
      smtpPassword: "••••••••",
      fromEmail: "noreply@rawmart.com",
      fromName: "RawMart",
      enableNotifications: true,
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordMinLength: 8,
      requireSpecialChars: true,
      maxLoginAttempts: 5,
      ipWhitelist: "",
    },
    seo: {
      metaTitle: "RawMart - B2B Raw Materials Marketplace",
      metaDescription: "Connect with verified suppliers and buyers worldwide for raw materials trading",
      googleAnalyticsId: "GA-XXXXXXXXX",
      googleTagManagerId: "GTM-XXXXXXX",
      enableSitemap: true,
      enableRobotsTxt: true,
    },
  })

  const handleSettingChange = (category, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }))
  }

  const handleSaveSettings = (category) => {
    console.log(`Saving ${category} settings:`, settings[category])
    // Handle save settings
  }

  const tabs = [
    { id: "general", name: "General", icon: "⚙️" },
    { id: "platform", name: "Platform", icon: "🏢" },
    { id: "payment", name: "Payment", icon: "💳" },
    { id: "shipping", name: "Shipping", icon: "🚚" },
    { id: "email", name: "Email", icon: "📧" },
    { id: "security", name: "Security", icon: "🔒" },
    { id: "seo", name: "SEO", icon: "🔍" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Platform Settings</h2>
          <p className="text-gray-600 mt-2">Configure your marketplace settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Settings Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-blue-100 text-blue-800 border border-blue-200"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* General Settings */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">General Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                      <input
                        type="text"
                        value={settings.general.siteName}
                        onChange={(e) => handleSettingChange("general", "siteName", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input
                        type="email"
                        value={settings.general.contactEmail}
                        onChange={(e) => handleSettingChange("general", "contactEmail", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
                      <input
                        type="tel"
                        value={settings.general.contactPhone}
                        onChange={(e) => handleSettingChange("general", "contactPhone", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select
                        value={settings.general.timezone}
                        onChange={(e) => handleSettingChange("general", "timezone", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="America/New_York">Eastern Time (ET)</option>
                        <option value="America/Chicago">Central Time (CT)</option>
                        <option value="America/Denver">Mountain Time (MT)</option>
                        <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        <option value="UTC">UTC</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                      <select
                        value={settings.general.currency}
                        onChange={(e) => handleSettingChange("general", "currency", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                      <select
                        value={settings.general.language}
                        onChange={(e) => handleSettingChange("general", "language", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="zh">Chinese</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                    <textarea
                      value={settings.general.siteDescription}
                      onChange={(e) => handleSettingChange("general", "siteDescription", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={() => handleSaveSettings("general")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save General Settings
                  </button>
                </div>
              )}

              {/* Platform Settings */}
              {activeTab === "platform" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">Platform Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Commission Rate (%)</label>
                      <input
                        type="number"
                        value={settings.platform.commissionRate}
                        onChange={(e) => handleSettingChange("platform", "commissionRate", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        max="100"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Order Amount ($)</label>
                      <input
                        type="number"
                        value={settings.platform.minOrderAmount}
                        onChange={(e) => handleSettingChange("platform", "minOrderAmount", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Order Amount ($)</label>
                      <input
                        type="number"
                        value={settings.platform.maxOrderAmount}
                        onChange={(e) => handleSettingChange("platform", "maxOrderAmount", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="autoApproveSuppliers"
                        checked={settings.platform.autoApproveSuppliers}
                        onChange={(e) => handleSettingChange("platform", "autoApproveSuppliers", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="autoApproveSuppliers" className="text-sm text-gray-700">
                        Auto-approve new suppliers
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="autoApproveProducts"
                        checked={settings.platform.autoApproveProducts}
                        onChange={(e) => handleSettingChange("platform", "autoApproveProducts", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="autoApproveProducts" className="text-sm text-gray-700">
                        Auto-approve new products
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="requireVerification"
                        checked={settings.platform.requireVerification}
                        onChange={(e) => handleSettingChange("platform", "requireVerification", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="requireVerification" className="text-sm text-gray-700">
                        Require supplier verification
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="allowGuestCheckout"
                        checked={settings.platform.allowGuestCheckout}
                        onChange={(e) => handleSettingChange("platform", "allowGuestCheckout", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="allowGuestCheckout" className="text-sm text-gray-700">
                        Allow guest checkout
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveSettings("platform")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Platform Settings
                  </button>
                </div>
              )}

              {/* Payment Settings */}
              {activeTab === "payment" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">Payment Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                      <select
                        value={settings.payment.paymentTerms}
                        onChange={(e) => handleSettingChange("payment", "paymentTerms", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Net 15">Net 15</option>
                        <option value="Net 30">Net 30</option>
                        <option value="Net 45">Net 45</option>
                        <option value="Net 60">Net 60</option>
                        <option value="Due on Receipt">Due on Receipt</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Late Fee Percentage (%)</label>
                      <input
                        type="number"
                        value={settings.payment.lateFeePercentage}
                        onChange={(e) => handleSettingChange("payment", "lateFeePercentage", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        max="10"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Escrow Amount ($)</label>
                      <input
                        type="number"
                        value={settings.payment.minimumEscrowAmount}
                        onChange={(e) => handleSettingChange("payment", "minimumEscrowAmount", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Accepted Payment Methods</label>
                    <div className="space-y-2">
                      {["bank_transfer", "credit_card", "wire_transfer", "paypal", "cryptocurrency"].map((method) => (
                        <div key={method} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={method}
                            checked={settings.payment.paymentMethods.includes(method)}
                            onChange={(e) => {
                              const methods = e.target.checked
                                ? [...settings.payment.paymentMethods, method]
                                : settings.payment.paymentMethods.filter((m) => m !== method)
                              handleSettingChange("payment", "paymentMethods", methods)
                            }}
                            className="rounded"
                          />
                          <label htmlFor={method} className="text-sm text-gray-700 capitalize">
                            {method.replace("_", " ")}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="escrowEnabled"
                      checked={settings.payment.escrowEnabled}
                      onChange={(e) => handleSettingChange("payment", "escrowEnabled", e.target.checked)}
                      className="rounded"
                    />
                    <label htmlFor="escrowEnabled" className="text-sm text-gray-700">
                      Enable escrow service for large orders
                    </label>
                  </div>
                  <button
                    onClick={() => handleSaveSettings("payment")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Payment Settings
                  </button>
                </div>
              )}

              {/* Shipping Settings */}
              {activeTab === "shipping" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">Shipping Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Free Shipping Threshold ($)
                      </label>
                      <input
                        type="number"
                        value={settings.shipping.freeShippingThreshold}
                        onChange={(e) =>
                          handleSettingChange("shipping", "freeShippingThreshold", Number(e.target.value))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Default Shipping Rate ($/ton)
                      </label>
                      <input
                        type="number"
                        value={settings.shipping.defaultShippingRate}
                        onChange={(e) => handleSettingChange("shipping", "defaultShippingRate", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveSettings("shipping")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Shipping Settings
                  </button>
                </div>
              )}

              {/* Email Settings */}
              {activeTab === "email" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">Email Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                      <input
                        type="text"
                        value={settings.email.smtpHost}
                        onChange={(e) => handleSettingChange("email", "smtpHost", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                      <input
                        type="number"
                        value={settings.email.smtpPort}
                        onChange={(e) => handleSettingChange("email", "smtpPort", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
                      <input
                        type="text"
                        value={settings.email.smtpUsername}
                        onChange={(e) => handleSettingChange("email", "smtpUsername", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
                      <input
                        type="password"
                        value={settings.email.smtpPassword}
                        onChange={(e) => handleSettingChange("email", "smtpPassword", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
                      <input
                        type="email"
                        value={settings.email.fromEmail}
                        onChange={(e) => handleSettingChange("email", "fromEmail", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From Name</label>
                      <input
                        type="text"
                        value={settings.email.fromName}
                        onChange={(e) => handleSettingChange("email", "fromName", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="enableNotifications"
                      checked={settings.email.enableNotifications}
                      onChange={(e) => handleSettingChange("email", "enableNotifications", e.target.checked)}
                      className="rounded"
                    />
                    <label htmlFor="enableNotifications" className="text-sm text-gray-700">
                      Enable email notifications
                    </label>
                  </div>
                  <button
                    onClick={() => handleSaveSettings("email")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Email Settings
                  </button>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">Security Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                      <input
                        type="number"
                        value={settings.security.sessionTimeout}
                        onChange={(e) => handleSettingChange("security", "sessionTimeout", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password Minimum Length</label>
                      <input
                        type="number"
                        value={settings.security.passwordMinLength}
                        onChange={(e) => handleSettingChange("security", "passwordMinLength", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Login Attempts</label>
                      <input
                        type="number"
                        value={settings.security.maxLoginAttempts}
                        onChange={(e) => handleSettingChange("security", "maxLoginAttempts", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">IP Whitelist</label>
                      <input
                        type="text"
                        value={settings.security.ipWhitelist}
                        onChange={(e) => handleSettingChange("security", "ipWhitelist", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="twoFactorAuth"
                        checked={settings.security.twoFactorAuth}
                        onChange={(e) => handleSettingChange("security", "twoFactorAuth", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="twoFactorAuth" className="text-sm text-gray-700">
                        Enable two-factor authentication
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="requireSpecialChars"
                        checked={settings.security.requireSpecialChars}
                        onChange={(e) => handleSettingChange("security", "requireSpecialChars", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="requireSpecialChars" className="text-sm text-gray-700">
                        Require special characters in passwords
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveSettings("security")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Security Settings
                  </button>
                </div>
              )}

              {/* SEO Settings */}
              {activeTab === "seo" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800">SEO Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                      <input
                        type="text"
                        value={settings.seo.metaTitle}
                        onChange={(e) => handleSettingChange("seo", "metaTitle", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                      <textarea
                        value={settings.seo.metaDescription}
                        onChange={(e) => handleSettingChange("seo", "metaDescription", e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
                        <input
                          type="text"
                          value={settings.seo.googleAnalyticsId}
                          onChange={(e) => handleSettingChange("seo", "googleAnalyticsId", e.target.value)}
                          placeholder="GA-XXXXXXXXX-X"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Google Tag Manager ID</label>
                        <input
                          type="text"
                          value={settings.seo.googleTagManagerId}
                          onChange={(e) => handleSettingChange("seo", "googleTagManagerId", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="enableSitemap"
                        checked={settings.seo.enableSitemap}
                        onChange={(e) => handleSettingChange("seo", "enableSitemap", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="enableSitemap" className="text-sm text-gray-700">
                        Enable XML sitemap generation
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="enableRobotsTxt"
                        checked={settings.seo.enableRobotsTxt}
                        onChange={(e) => handleSettingChange("seo", "enableRobotsTxt", e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="enableRobotsTxt" className="text-sm text-gray-700">
                        Enable robots.txt generation
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveSettings("seo")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save SEO Settings
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
