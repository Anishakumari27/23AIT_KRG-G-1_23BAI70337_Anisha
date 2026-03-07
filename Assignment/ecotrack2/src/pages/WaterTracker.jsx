import { useState, useCallback } from 'react'
import CounterDisplay from '../components/CounterDisplay.jsx'
import HealthTip from '../components/HealthTip.jsx'
import { useWaterTracker } from '../hooks/useWaterTracker.js'
import './WaterTracker.css'

export default function WaterTracker() {
  const {
    count, goal, goalReached, percentage,
    addGlass, removeGlass, reset, updateGoal,
  } = useWaterTracker()

  // Separate local state for the input field — changing this does NOT
  // cause CounterDisplay to re-render (it doesn't receive this value).
  const [goalInput, setGoalInput] = useState(goal)

  const handleGoalChange = useCallback((e) => {
    setGoalInput(e.target.value)
  }, [])

  const handleSaveGoal = useCallback(() => {
    updateGoal(goalInput)
  }, [goalInput, updateGoal])

  return (
    <div className="water-tracker">

      {/* ── Main tracker card ── */}
      <div className="card water-tracker__card">
        <h2 className="wt__title">Daily Water Tracker</h2>
       
        {/* Goal reached badge */}
        {goalReached && (
          <div className="wt__badge" role="status">
            🎉 Goal Reached! Great job today!
          </div>
        )}

        {/*
          React.memo is applied on CounterDisplay.
          addGlass / removeGlass / reset use useCallback → stable refs.
          Only re-renders when count / goal / percentage change.
        */}
        <CounterDisplay count={count} goal={goal} percentage={percentage} />

        {/* Action buttons */}
        <div className="wt__btn-row">
          <button className="wt__btn wt__btn--add"    onClick={addGlass}    aria-label="Add glass">+</button>
          <button className="wt__btn wt__btn--remove" onClick={removeGlass} disabled={count === 0} aria-label="Remove glass">−</button>
          <button className="wt__btn wt__btn--reset"  onClick={reset}>Reset</button>
        </div>

        {/* Goal setter */}
        <div className="wt__goal-row">
          <label htmlFor="goal-input" className="wt__goal-label">Set daily goal:</label>
          <input
            id="goal-input"
            type="number"
            min="1"
            value={goalInput}
            onChange={handleGoalChange}
            className="wt__goal-input"
          />
          <button className="wt__btn wt__btn--save" onClick={handleSaveGoal}>
            Save Goal
          </button>
        </div>
      </div>

      {/* ── Health tip card ── */}
      <HealthTip />
    </div>
  )
}
