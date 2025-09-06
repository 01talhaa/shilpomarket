// API configuration utility
const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3100"
}

export const API_ENDPOINTS = {
  // Supplier endpoints
  SUPPLIER_SIGNUP: () => `${getApiBaseUrl()}/api/suppliers/signup`,
  SUPPLIER_LOGIN: () => `${getApiBaseUrl()}/api/suppliers/login`,
  SUPPLIER_ME: () => `${getApiBaseUrl()}/api/suppliers/me`,
  SUPPLIER_UPLOAD_IMAGE: () => `${getApiBaseUrl()}/api/suppliers/upload-profile-image`,
  SUPPLIER_GET_IMAGE: () => `${getApiBaseUrl()}/api/suppliers/profile-image`,
  SUPPLIER_CHANGE_PASSWORD: () => `${getApiBaseUrl()}/api/suppliers/change-password`,
  SUPPLIER_FORGOT_PASSWORD: () => `${getApiBaseUrl()}/api/suppliers/forgot-password`,
  SUPPLIER_RESET_PASSWORD: () => `${getApiBaseUrl()}/api/suppliers/reset-password`,
  SUPPLIER_EDIT: (id) => `${getApiBaseUrl()}/api/suppliers/${id}`,
  SUPPLIER_DELETE: (id) => `${getApiBaseUrl()}/api/suppliers/${id}`,
  SUPPLIERS: () => `${getApiBaseUrl()}/api/suppliers`,
  SUPPLIER_CATEGORIES: () => `${getApiBaseUrl()}/api/suppliers/categories`,
  
  // Buyer endpoints
  BUYER_SIGNUP: () => `${getApiBaseUrl()}/api/buyers/signup`,
  BUYER_LOGIN: () => `${getApiBaseUrl()}/api/buyers/login`,
  BUYER_ME: () => `${getApiBaseUrl()}/api/buyers/me`,
  BUYER_UPLOAD_IMAGE: () => `${getApiBaseUrl()}/api/buyers/upload-profile-image`,
  BUYER_GET_IMAGE: () => `${getApiBaseUrl()}/api/buyers/profile-image`,
  BUYER_CHANGE_PASSWORD: () => `${getApiBaseUrl()}/api/buyers/change-password`,
  BUYER_FORGOT_PASSWORD: () => `${getApiBaseUrl()}/api/buyers/forgot-password`,
  BUYER_RESET_PASSWORD: () => `${getApiBaseUrl()}/api/buyers/reset-password`,
  BUYER_EDIT: (id) => `${getApiBaseUrl()}/api/buyers/${id}`,
  BUYER_DELETE: (id) => `${getApiBaseUrl()}/api/buyers/${id}`,
  BUYERS: () => `${getApiBaseUrl()}/api/buyers`,
  
  // Product endpoints
  PRODUCTS: () => `${getApiBaseUrl()}/api/products`,
  PRODUCTS_UPLOAD: () => `${getApiBaseUrl()}/api/products`,
  PRODUCTS_EDIT: (id) => `${getApiBaseUrl()}/api/products/${id}`,
  PRODUCTS_DELETE: (id) => `${getApiBaseUrl()}/api/products/${id}`,
  PRODUCTS_MY: () => `${getApiBaseUrl()}/api/products/my/products`,
  PRODUCTS_FEATURED: () => `${getApiBaseUrl()}/api/products/featured`,
  PRODUCTS_TRENDING: () => `${getApiBaseUrl()}/api/products/trending`,
  PRODUCTS_SEARCH: () => `${getApiBaseUrl()}/api/products/search`,
  PRODUCTS_BY_ID: (id) => `${getApiBaseUrl()}/api/products/${id}`,
  PRODUCTS_DELETE_IMAGE: (id) => `${getApiBaseUrl()}/api/products/${id}/images`,
  
  // Category endpoints
  CATEGORIES: () => `${getApiBaseUrl()}/api/categories`,
  CATEGORIES_BY_ID: (id) => `${getApiBaseUrl()}/api/categories/${id}`,
  CATEGORIES_SEARCH: () => `${getApiBaseUrl()}/api/categories/search`,
  CATEGORIES_CHILDREN: (id) => `${getApiBaseUrl()}/api/categories/${id}/children`,
  CATEGORIES_TREE: () => `${getApiBaseUrl()}/api/categories/tree`,
  CATEGORIES_ROOTS: () => `${getApiBaseUrl()}/api/categories/roots`,
  CATEGORIES_CREATE: () => `${getApiBaseUrl()}/api/categories`,
  CATEGORIES_EDIT: (id) => `${getApiBaseUrl()}/api/categories/${id}`,
  CATEGORIES_DELETE: (id) => `${getApiBaseUrl()}/api/categories/${id}`,
  
  // Authentication endpoints
  REFRESH_TOKEN: () => `${getApiBaseUrl()}/api/auth/refresh`,
  USER_PROFILE: () => `${getApiBaseUrl()}/api/auth/profile`,
}

export { getApiBaseUrl }
