import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  highlight?: string
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'span',
  highlight,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion()
  const words = children.split(' ')

  if (reduceMotion) {
    if (highlight && children.includes(highlight)) {
      const parts = children.split(highlight)
      return (
        <Tag className={className}>
          {parts[0]}
          <span className="text-fox neon-glow-text">{highlight}</span>
          {parts[1]}
        </Tag>
      )
    }
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Tag className={className} aria-label={children}>
      {words.map((word, i) => {
        const isHighlight = highlight && word.replace(/[.,!?]/g, '') === highlight.replace(/[.,!?]/g, '')
        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className={`inline-block ${isHighlight ? 'text-fox neon-glow-text' : ''}`}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.55,
                delay: delay + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function StaggerChildren({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
}: StaggerChildrenProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={
        reduceMotion
          ? {}
          : {
              hidden: {},
              visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
            }
      }
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}
