// API configuration utility
const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3100"
}

export const API_ENDPOINTS = {
  // Supplier endpoints
  SUPPLIER_SIGNUP: () => `${getApiBaseUrl()}/api/suppliers/signup`,
  SUPPLIER_LOGIN: () => `${getApiBaseUrl()}/api/suppliers/login`,
  SUPPLIER_ME: () => `${getApiBaseUrl()}/api/suppliers/me`,
  SUPPLIERS: () => `${getApiBaseUrl()}/api/suppliers`,
  
  // Buyer endpoints
  BUYER_SIGNUP: () => `${getApiBaseUrl()}/api/buyers/signup`,
  BUYER_LOGIN: () => `${getApiBaseUrl()}/api/buyers/login`,
  BUYER_ME: () => `${getApiBaseUrl()}/api/buyers/me`,
  BUYERS: () => `${getApiBaseUrl()}/api/buyers`,
}

export { getApiBaseUrl }
