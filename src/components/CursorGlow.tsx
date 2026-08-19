import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    if (reduceMotion) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [reduceMotion, mouseX, mouseY])

  if (reduceMotion) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[5] w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px]"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(255,106,0,0.8) 0%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  )
}
