import { Link } from 'react-router-dom'
import './Dashboard.css'


export default function Dashboard() {
  const waterCount = parseInt(localStorage.getItem('eco_water_count') || '0', 10)
  const waterGoal  = parseInt(localStorage.getItem('eco_water_goal')  || '8', 10)
  const pct = Math.min(Math.round((waterCount / waterGoal) * 100), 100)

  return (
    <div className="dashboard">

      {/* Quick stat */}
      <div className="dashboard__stat-card card">
        <div className="dashboard__stat-row">
          <div>
            <p className="dashboard__stat-label">Water today</p>
            <p className="dashboard__stat-value">{waterCount} / {waterGoal} glasses</p>
          </div>
          
        </div>
        <div className="dashboard__mini-bar">
          <div className="dashboard__mini-fill" style={{ width: `${pct}%` }} />
        </div>
        <Link to="/dashboard/water" className="dashboard__stat-link">
          Go to Water Tracker →
        </Link>
      </div>

    </div>
  )
}
