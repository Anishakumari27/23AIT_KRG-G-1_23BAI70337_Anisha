import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('eco_token'))

  const login = () => {
    const fakeToken = 'eco_fake_jwt_' + Date.now()
    localStorage.setItem('eco_token', fakeToken)
    setToken(fakeToken)
  }

  const logout = () => {
    localStorage.removeItem('eco_token')
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, isLoggedIn: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
