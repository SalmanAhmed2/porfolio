import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { TiltCard } from './TiltCard'
import { StaggerChildren, staggerItem } from './TextReveal'
import { aboutContent } from '../data/site'

export function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fox/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeader number="01" title={aboutContent.title} />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <TiltCard intensity={8}>
              <div className="relative group">
                <motion.div
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fox/40 via-transparent to-cyan/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <motion.img
                    src="/avatar.png"
                    alt="Salman Ahmed"
                    className="w-full aspect-square object-cover transition-transform duration-500 will-change-transform"
                    loading="lazy"
                    style={{
                      // Cinematic dark-grade so the photo blends with the neon theme.
                      filter: 'grayscale(18%) contrast(118%) brightness(92%) saturate(88%)',
                    }}
                    whileHover={reduceMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-60" />
                  {/* Neon rim + subtle edge lighting (premium, not cartoon). */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                    style={{
                      background:
                        'radial-gradient(ellipse at 30% 18%, rgba(255,106,0,0.20) 0%, transparent 58%), radial-gradient(ellipse at 80% 90%, rgba(0,229,255,0.10) 0%, transparent 60%)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                    style={{
                      boxShadow:
                        '0 0 0 1px rgba(255,106,0,0.22), 0 0 60px rgba(255,106,0,0.20)',
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 glass rounded-xl px-4 py-3"
                    initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="font-display font-semibold text-sm">Salman Ahmed</p>
                    <p className="text-xs text-text-secondary">Senior Frontend Developer</p>
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <StaggerChildren className="space-y-5" stagger={0.12}>
            {aboutContent.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={staggerItem}
                className="text-text-secondary leading-relaxed text-base md:text-lg"
              >
                {p}
              </motion.p>
            ))}

            <motion.div variants={staggerItem} className="flex flex-wrap gap-2.5 pt-4">
              {aboutContent.badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  whileHover={reduceMotion ? {} : { scale: 1.05, y: -2 }}
                  initial={reduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-surface-secondary text-text-secondary border border-white/8 hover:border-fox/40 hover:text-fox hover:shadow-[0_0_20px_rgba(255,106,0,0.15)] transition-all cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
