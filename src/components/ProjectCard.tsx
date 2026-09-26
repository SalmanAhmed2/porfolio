import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { TiltCard } from './TiltCard'

interface ProjectCardProps {
  project: Project
  index: number
}

const styleGradients: Record<Project['visualStyle'], string> = {
  enterprise: 'from-orange-900/30 via-surface to-surface',
  futuristic: 'from-purple-900/30 via-surface to-surface',
  healthcare: 'from-cyan-900/15 via-surface to-surface',
  crm: 'from-orange-800/20 via-surface to-surface',
  fintech: 'from-emerald-900/15 via-surface to-surface',
}

const accentColors: Record<Project['visualStyle'], string> = {
  enterprise: 'rgba(255,106,0,0.4)',
  futuristic: 'rgba(168,85,247,0.4)',
  healthcare: 'rgba(0,229,255,0.3)',
  crm: 'rgba(255,106,0,0.35)',
  fintech: 'rgba(52,211,153,0.3)',
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()
  const isFeatured = project.layout === 'featured'
  const isSplitLeft = project.layout === 'split-left'
  const isCompact = project.layout === 'compact'

  const cardContent = (
    <motion.article
      initial={reduceMotion ? {} : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${accentColors[project.visualStyle]}, transparent)` }}
        aria-hidden="true"
      />

      <div
        className={`relative glass rounded-3xl overflow-hidden border border-white/5 group-hover:border-fox/25 transition-all duration-500 ${
          isCompact ? 'max-w-xl' : ''
        }`}
      >
        <div
          className={`grid ${isFeatured ? 'lg:grid-cols-2' : isCompact ? 'grid-cols-1' : 'md:grid-cols-2'} gap-0 ${
            !isFeatured && !isCompact && !isSplitLeft ? 'md:[&>*:first-child]:order-2' : ''
          }`}
        >
          <div
            className={`relative overflow-hidden bg-gradient-to-br ${styleGradients[project.visualStyle]} ${
              isFeatured ? 'min-h-[280px] lg:min-h-[420px]' : 'min-h-[240px]'
            }`}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className={`w-full h-full ${project.imageAspect === 'portrait' ? 'object-cover bg-surface-secondary' : 'object-cover'} ${isFeatured ? 'min-h-[280px] lg:min-h-[420px]' : 'min-h-[240px]'}`}
              whileHover={reduceMotion ? {} : { scale: 1.08 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />

            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg/40 backdrop-blur-[2px]"
              aria-hidden="true"
            >
              <motion.span
                initial={reduceMotion ? {} : { scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="w-16 h-16 rounded-full bg-fox/90 flex items-center justify-center shadow-[0_0_40px_rgba(255,106,0,0.5)]"
              >
                <ArrowUpRight size={28} className="text-black" />
              </motion.span>
            </motion.div>

            <span className="absolute top-5 left-5 font-display text-5xl md:text-7xl font-bold text-white/[0.06] select-none">
              {project.number}
            </span>
          </div>

          <div className="p-7 md:p-10 flex flex-col justify-center">
            <motion.span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-fox mb-3 inline-block"
              whileInView={reduceMotion ? {} : { opacity: [0, 1], x: [-10, 0] }}
              viewport={{ once: true }}
            >
              {project.category}
            </motion.span>

            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-fox transition-colors duration-300">
              {project.title}
            </h3>

            <p className={`text-text-secondary text-sm leading-relaxed mb-6 ${isFeatured ? '' : 'line-clamp-3'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-surface-secondary/80 text-text-secondary border border-white/8 group-hover:border-fox/30 group-hover:text-fox transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {isFeatured && (
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                {project.features.slice(0, 6).map((f) => (
                  <li key={f} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className="text-fox mt-0.5 shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-4 mt-auto">
              <Link
                to={`/work/${project.id}`}
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-fox text-black text-sm font-semibold no-underline hover:bg-fox-glow transition-all hover:shadow-[0_0_30px_rgba(255,106,0,0.4)]"
              >
                {isFeatured ? 'View Case Study' : 'Case Study'}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm font-medium text-text-primary no-underline hover:border-fox/40 hover:text-fox transition-all"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )

  if (isFeatured) {
    return <TiltCard intensity={4}>{cardContent}</TiltCard>
  }

  return cardContent
}
