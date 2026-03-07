import { useState, useEffect, useCallback } from 'react'

export function useHealthTip() {
  const [tip, setTip]         = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')

  const fetchTip = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      if (!res.ok) throw new Error('Network error')
      const data = await res.json()
      setTip(data.slip.advice)
    } catch {
      setError('Could not load health tip. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTip()
  }, [fetchTip])

  return { tip, loading, error, refetch: fetchTip }
}
