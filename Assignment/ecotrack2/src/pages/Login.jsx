import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Login.css'

export default function Login() {
  const { isLoggedIn, login } = useAuth()

  if (isLoggedIn) return <Navigate to="/dashboard" replace />

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__icon"></div>
        <h1 className="login-card__title">EcoTrack</h1>
        <button className="login-card__btn" onClick={login}>
          Sign In
        </button>
      </div>
    </div>
  )
}
