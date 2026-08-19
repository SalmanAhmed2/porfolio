import { useRef } from 'react'
import { motion, useReducedMotion, useSpring, useMotionValue } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'ghost' | 'outline'
  className?: string
  type?: 'button' | 'a'
}

export function MagneticButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const variants = {
    primary:
      'bg-fox text-black shadow-[0_0_30px_rgba(255,106,0,0.3)] hover:shadow-[0_0_50px_rgba(255,106,0,0.45)]',
    ghost: 'glass text-text-primary hover:border-fox/40',
    outline: 'border border-white/15 text-text-primary hover:border-fox/40 hover:text-fox',
  }

  const handleMove = (e: MouseEvent) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.2)
    y.set((e.clientY - cy) * 0.2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: reduceMotion ? {} : { x: springX, y: springY },
    whileHover: reduceMotion ? {} : { scale: 1.04 },
    whileTap: reduceMotion ? {} : { scale: 0.97 },
    className: `relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold cursor-pointer border-none transition-shadow overflow-hidden ${variants[variant]} ${className}`,
  }

  const shimmer = (
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
      initial={{ x: '-100%' }}
      whileHover={{ x: '200%' }}
      transition={{ duration: 0.6 }}
      aria-hidden="true"
    />
  )

  if (type === 'a' && href) {
    return (
      <motion.a href={href} {...sharedProps} onClick={onClick as never}>
        {variant === 'primary' && shimmer}
        <span className="relative z-10">{children}</span>
      </motion.a>
    )
  }

  return (
    <motion.button type="button" onClick={onClick} {...sharedProps}>
      {variant === 'primary' && shimmer}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
