import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { processSteps } from '../data/site'

function FoxFootprint({ className = '' }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`text-fox/40 ${className}`}
      aria-hidden="true"
    >
      <ellipse cx="8" cy="12" rx="3" ry="2" />
      <circle cx="5" cy="6" r="1.5" />
      <circle cx="8" cy="4" r="1.5" />
      <circle cx="11" cy="6" r="1.5" />
    </svg>
  )
}

export function DevelopmentProcess() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-20 md:py-32 bg-surface/30 relative overflow-hidden">
      <div className="section-container">
        <SectionHeader number="06" title="How I Approach Development" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={reduceMotion ? {} : { y: -6 }}
              className="relative group"
            >
              {i < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 items-center gap-0.5">
                  <FoxFootprint />
                  <FoxFootprint className="opacity-50" />
                  <FoxFootprint className="opacity-25" />
                </div>
              )}

              <div className="glass rounded-3xl p-7 h-full border border-white/5 group-hover:border-fox/25 transition-all duration-300 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-fox/5 rounded-bl-[80px] group-hover:bg-fox/10 transition-colors"
                  aria-hidden="true"
                />
                <span className="font-display text-5xl font-bold text-fox/15 group-hover:text-fox/30 transition-colors block mb-4">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-fox transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
