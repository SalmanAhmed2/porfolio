import { useRef } from 'react'
import { motion, useReducedMotion, useSpring, useMotionValue } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function TiltCard({ children, className = '', intensity = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMove = (e: MouseEvent) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * intensity)
    rotateX.set(-py * intensity)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        reduceMotion
          ? {}
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
