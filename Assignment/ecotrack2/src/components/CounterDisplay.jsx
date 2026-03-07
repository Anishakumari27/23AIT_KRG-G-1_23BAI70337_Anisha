import { memo } from 'react'
import './CounterDisplay.css'

/**
 * CounterDisplay — wrapped in React.memo so it only re-renders
 * when count, goal, or percentage props actually change.
 * Clicking unrelated buttons (e.g. "Get new tip") will NOT re-render this.
 */
const CounterDisplay = memo(function CounterDisplay({ count, goal, percentage }) {
  return (
    <div className="counter">
      <div className="counter__number">
        <span className="counter__value">{count}</span>
        <span className="counter__unit">glasses</span>
      </div>

      <div className="counter__progress">
        <div className="counter__labels">
          <span>{count} / {goal} glasses completed</span>
          <span>{percentage}%</span>
        </div>
        <div
          className="counter__bar"
          role="progressbar"
          aria-valuenow={count}
          aria-valuemin={0}
          aria-valuemax={goal}
        >
          <div className="counter__fill" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  )
})

export default CounterDisplay
