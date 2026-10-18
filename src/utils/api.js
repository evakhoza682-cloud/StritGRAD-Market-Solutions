import axios from 'axios'

// Forms are stored by the existing StritGRAD backend (same database + email notifications).
const LIVE_BACKEND = 'https://strit-grad-academy-web-platform.vercel.app'
const baseURL = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '' : LIVE_BACKEND)).replace(/\/+$/, '')

const api = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' }, timeout: 20000 })

/** Google Analytics event helper (no-op unless VITE_GA_ID is set) */
export const track = (name, params = {}) => {
  try { if (window.gtag) window.gtag('event', name, params) } catch (e) { /* ignore */ }
}

export default api
