import { motion, useReducedMotion } from 'framer-motion'
import { FoxLogo } from './FoxLogo'
import { siteInfo, socialLinks } from '../data/site'

export function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer className="border-t border-white/5 py-12 md:py-16 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-fox/5 rounded-full blur-[100px] pointer-events-none"
        animate={reduceMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center md:items-start gap-3">
            <motion.div
              className="flex items-center gap-2.5"
              whileHover={reduceMotion ? {} : { x: 4 }}
            >
              <FoxLogo size={24} />
              <div>
                <p className="font-display font-semibold text-text-primary">{siteInfo.name}</p>
                <p className="text-sm text-text-secondary">{siteInfo.title}</p>
              </div>
            </motion.div>
            <p className="text-sm text-text-secondary text-center md:text-left max-w-sm">
              Designed &amp; built with curiosity, precision and a little fox energy.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                aria-disabled={link.placeholder}
                aria-label={link.placeholder ? `${link.name} (coming soon)` : link.name}
                initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={reduceMotion ? {} : { y: -2, color: '#FF6A00' }}
                className={`text-sm text-text-secondary transition-colors no-underline ${
                  link.placeholder ? 'pointer-events-none opacity-50' : ''
                }`}
                onClick={link.placeholder ? (e) => e.preventDefault() : undefined}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 pt-6 border-t border-white/5 text-center"
        >
          <p className="text-xs text-text-secondary">
            &copy; 2026 {siteInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
