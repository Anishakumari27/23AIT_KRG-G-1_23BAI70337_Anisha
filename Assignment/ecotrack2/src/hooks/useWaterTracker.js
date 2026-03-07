import { useState, useEffect, useCallback } from 'react'

const KEY_COUNT = 'eco_water_count'
const KEY_GOAL  = 'eco_water_goal'

export function useWaterTracker() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(KEY_COUNT)
    return saved !== null ? parseInt(saved, 10) : 0
  })

  const [goal, setGoal] = useState(() => {
    const saved = localStorage.getItem(KEY_GOAL)
    return saved !== null ? parseInt(saved, 10) : 8
  })

  // Persist to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem(KEY_COUNT, count)
  }, [count])

  // Persist to localStorage whenever goal changes
  useEffect(() => {
    localStorage.setItem(KEY_GOAL, goal)
  }, [goal])

  const addGlass    = useCallback(() => setCount(c => c + 1), [])
  const removeGlass = useCallback(() => setCount(c => Math.max(0, c - 1)), [])
  const reset       = useCallback(() => setCount(0), [])
  const updateGoal  = useCallback((val) => {
    const n = parseInt(val, 10)
    if (!isNaN(n) && n > 0) setGoal(n)
  }, [])

  const goalReached = count >= goal
  const percentage  = Math.min(Math.round((count / goal) * 100), 100)

  return { count, goal, goalReached, percentage, addGlass, removeGlass, reset, updateGoal }
}
