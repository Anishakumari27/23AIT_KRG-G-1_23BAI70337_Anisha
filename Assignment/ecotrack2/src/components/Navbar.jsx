import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Navbar.css'

export default function Navbar() {
  const { logout } = useAuth()
  const navigate   = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const linkClass = ({ isActive }) =>
    'navbar__link' + (isActive ? ' navbar__link--active' : '')

  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="navbar__logo">
         EcoTrack
      </NavLink>

      <div className="navbar__links">
        <NavLink to="/dashboard" end className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/water" className={linkClass}>
          Water Tracker
        </NavLink>
      </div>

      <button className="navbar__logout" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  )
}
