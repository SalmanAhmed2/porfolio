import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { FoxLogo } from './FoxLogo'
import { navItems, siteInfo } from '../data/site'
import { useScrollSpy, useScrolled, scrollToSection } from '../hooks/useScrollSpy'

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const scrolled = useScrolled(50)
  const activeId = useScrollSpy(sectionIds)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2.5 group cursor-pointer bg-transparent border-none p-0"
          aria-label="Go to home"
        >
          <FoxLogo size={28} />
          <span className="font-display font-semibold text-sm md:text-base text-text-primary group-hover:text-fox transition-colors">
            {siteInfo.name}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                    isActive ? 'text-fox' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-fox"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => handleNavClick('#contact')}
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl bg-fox text-black text-sm font-semibold hover:bg-fox-glow transition-colors cursor-pointer border-none"
        >
          Let&apos;s Talk
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-primary cursor-pointer bg-transparent border-none"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = activeId === id
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                        isActive
                          ? 'text-fox bg-fox/10'
                          : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                )
              })}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('#contact')}
                  className="w-full px-4 py-3 rounded-xl bg-fox text-black text-sm font-semibold cursor-pointer border-none"
                >
                  Let&apos;s Talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
