import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { skillCategories } from '../data/site'

export function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="section-container">
        <SectionHeader
          number="02"
          title="Tools Behind The Craft"
          subtitle="Technologies I use to build fast, scalable and polished digital experiences."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fox/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative glass rounded-3xl p-6 md:p-8 border border-white/5 group-hover:border-fox/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <motion.span
                    className="w-2 h-8 rounded-full bg-gradient-to-b from-fox to-fox/30"
                    whileInView={reduceMotion ? {} : { scaleY: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: ci * 0.1 }}
                  />
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={reduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.04 }}
                      whileHover={
                        reduceMotion
                          ? {}
                          : {
                              scale: 1.08,
                              y: -3,
                              boxShadow: '0 8px 30px rgba(255,106,0,0.2)',
                              borderColor: 'rgba(255,106,0,0.5)',
                            }
                      }
                      className="px-4 py-2.5 rounded-xl bg-surface-secondary text-sm font-medium text-text-primary border border-white/8 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
