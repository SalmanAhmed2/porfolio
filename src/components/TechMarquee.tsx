import { motion, useReducedMotion } from 'framer-motion'

const techs = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Redux',
  'Firebase',
  'Tailwind CSS',
  'REST APIs',
  'React Native',
  'Vue.js',
  'PWA',
]

export function TechMarquee() {
  const reduceMotion = useReducedMotion()
  const items = [...techs, ...techs]

  return (
    <div className="relative overflow-hidden py-6 border-y border-white/5 bg-surface/30">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={reduceMotion ? {} : { x: ['0%', '-50%'] }}
        transition={
          reduceMotion
            ? {}
            : { duration: 30, repeat: Infinity, ease: 'linear' }
        }
      >
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-3 text-sm font-medium text-text-secondary/70"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-fox/60" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
