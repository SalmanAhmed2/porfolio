import { motion, useReducedMotion } from 'framer-motion'

interface SectionHeaderProps {
  number: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ number, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion()
  const centered = align === 'center'

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={reduceMotion ? {} : { opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}
      >
        <span className="font-display text-sm font-bold text-fox tracking-widest">{number}</span>
        <motion.span
          className="h-px bg-gradient-to-r from-fox via-fox/50 to-transparent flex-1 max-w-[120px]"
          initial={reduceMotion ? {} : { scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      <motion.h2
        initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-3xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`text-text-secondary mt-4 max-w-xl text-lg ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
