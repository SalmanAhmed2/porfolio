import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeader } from './SectionHeader'
import { experienceFocus } from '../data/site'

export function Experience() {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="py-20 md:py-32 bg-surface/30">
      <div className="section-container">
        <SectionHeader
          number="04"
          title="Experience & Journey"
          subtitle="5+ Years of Frontend Development"
        />

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/5"
            aria-hidden="true"
          />
          {!reduceMotion && (
            <motion.div
              className="absolute left-4 md:left-6 top-0 w-px bg-gradient-to-b from-fox via-fox/60 to-fox/20 origin-top shadow-[0_0_12px_rgba(255,106,0,0.5)]"
              style={{ height: lineHeight }}
              aria-hidden="true"
            />
          )}

          <div className="space-y-6">
            {experienceFocus.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? {} : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12 md:pl-16 group"
              >
                <motion.div
                  className="absolute left-2.5 md:left-4 top-5 w-3 h-3 rounded-full bg-fox shadow-[0_0_16px_rgba(255,106,0,0.6)]"
                  whileInView={reduceMotion ? {} : { scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                />

                <motion.div
                  whileHover={reduceMotion ? {} : { x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-2xl p-6 border border-white/5 group-hover:border-fox/25 group-hover:shadow-[0_0_30px_rgba(255,106,0,0.08)] transition-all duration-300"
                >
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-fox transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
