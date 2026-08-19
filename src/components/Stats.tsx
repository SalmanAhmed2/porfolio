import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedCounter } from './FadeIn'
import { stats } from '../data/site'

export function Stats() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? {} : { opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-fox/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative glass rounded-2xl p-6 md:p-8 border border-white/5 group-hover:border-fox/30 transition-all duration-300 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-fox to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  aria-hidden="true"
                />
                <p className="font-display text-3xl md:text-5xl font-bold text-fox mb-2 group-hover:neon-glow-text transition-all">
                  {stat.numericValue !== undefined ? (
                    <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
