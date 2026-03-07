import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import './DashboardLayout.css'

export default function DashboardLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
