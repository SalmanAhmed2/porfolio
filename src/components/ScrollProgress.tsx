import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  if (reduceMotion) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left bg-gradient-to-r from-fox via-fox-glow to-cyan"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
