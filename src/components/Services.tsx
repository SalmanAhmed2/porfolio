import { motion, useReducedMotion } from 'framer-motion'
import {
  Layout,
  Globe,
  Database,
  Plug,
  Smartphone,
  Code2,
} from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { services } from '../data/site'

const iconMap: Record<string, typeof Layout> = {
  layout: Layout,
  react: Code2,
  globe: Globe,
  database: Database,
  plug: Plug,
  smartphone: Smartphone,
}

export function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-20 md:py-32">
      <div className="section-container">
        <SectionHeader number="05" title="What I Build" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Layout
            return (
              <motion.div
                key={service.title}
                initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={
                  reduceMotion
                    ? {}
                    : { y: -8, transition: { duration: 0.25 } }
                }
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-fox/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative glass rounded-3xl p-7 h-full border border-white/5 group-hover:border-fox/25 transition-all duration-300 overflow-hidden">
                  <motion.div
                    className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-fox/5 group-hover:bg-fox/10 transition-colors duration-500"
                    aria-hidden="true"
                  />
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-fox/10 flex items-center justify-center mb-5 group-hover:bg-fox/20 group-hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={22} className="text-fox" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-fox transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
