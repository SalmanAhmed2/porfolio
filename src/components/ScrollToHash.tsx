import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    }

    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hash, pathname])

  return null
}
