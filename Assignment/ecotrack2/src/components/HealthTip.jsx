import { useHealthTip } from '../hooks/useHealthTip.jsx'
import './HealthTip.css'

export default function HealthTip() {
  const { tip, loading, error, refetch } = useHealthTip()

  return (
    <div className="health-tip card">
      <p className="health-tip__label">💡 Today's Health Tip</p>

      {loading && <p className="health-tip__loading">Loading tip…</p>}

      {error && !loading && (
        <p className="health-tip__error">{error}</p>
      )}

      {!loading && !error && tip && (
        <blockquote className="health-tip__quote">{tip}</blockquote>
      )}

      <button
        className="health-tip__btn"
        onClick={refetch}
        disabled={loading}
      >
        {loading ? 'Loading…' : '↻ Get new tip'}
      </button>
    </div>
  )
}
