import { motion, useReducedMotion } from 'framer-motion'
import { Download, ChevronDown } from 'lucide-react'
import { TextReveal } from './TextReveal'
import { MagneticButton } from './MagneticButton'
import { FoxVisual } from './FoxVisual'
import { ParticleField } from './ParticleField'
import { siteInfo } from '../data/site'
import { scrollToSection } from '../hooks/useScrollSpy'

function GradientOrb({ className }: { className: string }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
      animate={
        reduceMotion
          ? {}
          : {
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }
      }
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  )
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <ParticleField />

      <GradientOrb className="w-[500px] h-[500px] bg-fox/20 -top-32 -right-32" />
      <GradientOrb className="w-[400px] h-[400px] bg-cyan/10 bottom-0 -left-32" />

      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,106,0,0.8) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.span
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-fox/10 text-fox border border-fox/20 mb-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-fox"
                animate={reduceMotion ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              5+ Years Experience
            </motion.span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6">
              <TextReveal delay={0.3} as="span">
                Building Digital Experiences That
              </TextReveal>{' '}
              <motion.span
                className="inline-block text-fox neon-glow-text"
                initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                Think Fast.
              </motion.span>
            </h1>

            <motion.p
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-text-secondary mb-3 max-w-xl"
            >
              {siteInfo.subtitle}
            </motion.p>

            <motion.p
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-base text-text-secondary/70 mb-8 max-w-xl leading-relaxed"
            >
              {siteInfo.bio}
            </motion.p>

            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <MagneticButton onClick={() => scrollToSection('#projects')}>
                View My Work
              </MagneticButton>
              <MagneticButton variant="ghost" onClick={() => scrollToSection('#contact')}>
                Let&apos;s Work Together
              </MagneticButton>
            </motion.div>

            <motion.a
              href={siteInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-fox transition-colors no-underline group"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <FoxVisual />
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('#about')}
        initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/50 hover:text-fox transition-colors cursor-pointer bg-transparent border-none"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  )
}
