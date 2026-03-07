export const getItem = (key, fallback = null) => {
  try {
    const val = localStorage.getItem(key)
    return val !== null ? val : fallback
  } catch {
    return fallback
  }
}

export const setItem = (key, value) => {
  try { localStorage.setItem(key, value) } catch { /* silent */ }
}

export const removeItem = (key) => {
  try { localStorage.removeItem(key) } catch { /* silent */ }
}
