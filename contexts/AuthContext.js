"use client"
import { createContext, useContext, useState, useEffect } from 'react'
import { API_ENDPOINTS } from '../lib/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Function to refresh the access token
  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        throw new Error('No refresh token')
      }

      const response = await fetch(API_ENDPOINTS.REFRESH_TOKEN(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken })
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        if (data.refreshToken) {
          localStorage.setItem('refreshToken', data.refreshToken)
        }
        return data.token
      } else {
        throw new Error('Token refresh failed')
      }
    } catch (error) {
      console.error('Token refresh error:', error)
      logout()
      return null
    }
  }

  // Function to get user profile
  const fetchUserProfile = async () => {
    try {
      console.log('🔄 AuthContext: Starting fetchUserProfile...')
      setLoading(true) // Ensure loading is true at start
      let token = localStorage.getItem('token')
      
      // If no access token, try to refresh using refresh token
      if (!token) {
        const storedRefreshToken = localStorage.getItem('refreshToken')
        if (storedRefreshToken) {
          console.log('🔑 AuthContext: No access token, attempting to refresh...')
          const newToken = await refreshToken()
          if (newToken) {
            token = newToken
            console.log('✅ AuthContext: Token refreshed successfully')
          } else {
            console.log('❌ AuthContext: Token refresh failed, using cached user')
            // Refresh failed, check if user data exists in localStorage
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
              setUser(JSON.parse(storedUser))
            }
            setLoading(false)
            return
          }
        } else {
          console.log('📦 AuthContext: No tokens found, checking localStorage for cached user')
          // No token and no refresh token, just check localStorage
          const storedUser = localStorage.getItem('user')
          if (storedUser) {
            setUser(JSON.parse(storedUser))
          }
          setLoading(false)
          return
        }
      }

      // Get user type to determine correct endpoint
      const storedUser = localStorage.getItem('user')
      const userType = storedUser ? JSON.parse(storedUser).accountType : 'supplier'
      const endpoint = userType === 'supplier' ? API_ENDPOINTS.SUPPLIER_ME() : API_ENDPOINTS.BUYER_ME()

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const result = await response.json()
        const userData = result.user || result.data || result
        const userWithType = { ...userData, accountType: userType }
        
        setUser(userWithType)
        localStorage.setItem('user', JSON.stringify(userWithType))
        console.log('✅ AuthContext: User profile fetched successfully:', userWithType.email)
        setLoading(false) // Set loading false here after success
      } else if (response.status === 401) {
        // Token expired, try to refresh
        console.log('🔄 AuthContext: Token expired (401), attempting to refresh...')
        const newToken = await refreshToken()
        if (newToken) {
          console.log('🔄 AuthContext: Token refreshed, retrying profile fetch...')
          // Retry with new token - DON'T set loading to false, let the recursive call handle it
          await fetchUserProfile()
          return
        } else {
          console.log('❌ AuthContext: Token refresh failed, logging out')
          setLoading(false)
          logout()
        }
      } else {
        console.log('❌ AuthContext: Failed to fetch profile, status:', response.status)
        setLoading(false)
        logout()
      }
    } catch (error) {
      console.error('❌ AuthContext: Fetch user profile error:', error)
      // Don't logout on error, might be network issue
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
        console.log('📦 AuthContext: Using cached user due to error')
      }
      setLoading(false)
    }
  }

  // Login function
  const login = async (credentials, accountType) => {
    try {
      const apiUrl = accountType === "supplier" 
        ? API_ENDPOINTS.SUPPLIER_LOGIN()
        : API_ENDPOINTS.BUYER_LOGIN()

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })

      const result = await response.json()

      if (response.ok) {
        // Store tokens
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
        setUser(userWithType)
        
        return { success: true, data: result }
      } else {
        return { success: false, message: result.message || 'Login failed' }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: error.message }
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setUser(null)
  }

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user && !!localStorage.getItem('token')
  }

  // API call helper with automatic token handling
  const apiCall = async (endpoint, options = {}) => {
    let token = localStorage.getItem('token')
    
    if (!token) {
      throw new Error('No authentication token available')
    }

    const defaultHeaders = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }

    // Don't set Content-Type for FormData
    if (options.body instanceof FormData) {
      delete defaultHeaders['Content-Type']
    }

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers
      }
    }

    try {
      const response = await fetch(endpoint, config)
      
      if (response.status === 401) {
        // Token might be expired, try to refresh
        const newToken = await refreshToken()
        if (newToken) {
          // Retry with new token
          config.headers['Authorization'] = `Bearer ${newToken}`
          return await fetch(endpoint, config)
        } else {
          throw new Error('Authentication failed')
        }
      }

      return response
    } catch (error) {
      console.error('API call error:', error)
      throw error
    }
  }

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    try {
      const userType = user?.accountType || 'supplier'
      const endpoint = userType === 'supplier' ? API_ENDPOINTS.SUPPLIER_CHANGE_PASSWORD() : API_ENDPOINTS.BUYER_CHANGE_PASSWORD()
      
      const response = await apiCall(endpoint, {
        method: 'POST',
        body: JSON.stringify({ currentPassword, newPassword })
      })

      const data = await response.json()
      return { success: response.ok, message: data.message }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Upload profile image
  const uploadProfileImage = async (imageFile) => {
    try {
      const userType = user?.accountType || 'supplier'
      const endpoint = userType === 'supplier' ? API_ENDPOINTS.SUPPLIER_UPLOAD_IMAGE() : API_ENDPOINTS.BUYER_UPLOAD_IMAGE()
      
      const formData = new FormData()
      formData.append('image', imageFile)

      const response = await apiCall(endpoint, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      
      if (response.ok) {
        // Update user data with new image URL
        const updatedUser = { ...user, profileImage: data.imageUrl }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
      }
      
      return { success: response.ok, data, message: data.message }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Get profile image
  const getProfileImage = async () => {
    try {
      const userType = user?.accountType || 'supplier'
      const endpoint = userType === 'supplier' ? API_ENDPOINTS.SUPPLIER_GET_IMAGE() : API_ENDPOINTS.BUYER_GET_IMAGE()
      
      const response = await apiCall(endpoint)
      
      if (response.ok) {
        const data = await response.json()
        return { success: true, imageUrl: data.imageUrl }
      }
      
      return { success: false, message: 'Failed to fetch profile image' }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Update profile
  const updateProfile = async (profileData) => {
    try {
      const userType = user?.accountType || 'supplier'
      const endpoint = userType === 'supplier' ? API_ENDPOINTS.SUPPLIER_EDIT(user.id) : API_ENDPOINTS.BUYER_EDIT(user.id)
      
      const response = await apiCall(endpoint, {
        method: 'PUT',
        body: JSON.stringify(profileData)
      })

      const data = await response.json()
      
      if (response.ok) {
        const updatedUser = { ...user, ...profileData }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
      }
      
      return { success: response.ok, data, message: data.message }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Forgot password
  const forgotPassword = async (email) => {
    try {
      const userType = user?.accountType || 'supplier'
      const endpoint = userType === 'supplier' ? API_ENDPOINTS.SUPPLIER_FORGOT_PASSWORD() : API_ENDPOINTS.BUYER_FORGOT_PASSWORD()
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()
      return { success: response.ok, message: data.message }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Reset password
  const resetPassword = async (email, resetToken, newPassword) => {
    try {
      const userType = user?.accountType || 'supplier'
      const endpoint = userType === 'supplier' ? API_ENDPOINTS.SUPPLIER_RESET_PASSWORD() : API_ENDPOINTS.BUYER_RESET_PASSWORD()
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, resetToken, newPassword })
      })

      const data = await response.json()
      return { success: response.ok, message: data.message }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Set up automatic token refresh
  useEffect(() => {
    fetchUserProfile()

    // Set up automatic token refresh every 50 minutes (tokens usually expire in 1 hour)
    const interval = setInterval(() => {
      if (localStorage.getItem('refreshToken')) {
        refreshToken()
      }
    }, 50 * 60 * 1000) // 50 minutes

    return () => clearInterval(interval)
  }, [])

  const value = {
    user,
    loading,
    login,
    logout,
    refreshToken,
    isAuthenticated,
    fetchUserProfile,
    apiCall,
    changePassword,
    uploadProfileImage,
    getProfileImage,
    updateProfile,
    forgotPassword,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
