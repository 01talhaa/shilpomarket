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
      let token = localStorage.getItem('token')
      if (!token) {
        // Try to get user data from localStorage first
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
        setLoading(false)
        return
      }

      // For now, if token exists but no user data in localStorage, 
      // we'll clear the token since we don't have a working profile endpoint
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        // If no user data but token exists, clear everything
        logout()
      }
    } catch (error) {
      console.error('Fetch user profile error:', error)
      logout()
    } finally {
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
    fetchUserProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
