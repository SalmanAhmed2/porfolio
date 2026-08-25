import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getProjectById } from '../data/projects'
import { FoxLogo } from '../components/FoxLogo'
import { StaggerChildren, staggerItem } from '../components/TextReveal'
import { MagneticButton } from '../components/MagneticButton'
import { siteInfo } from '../data/site'

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined
  const reduceMotion = useReducedMotion()

  if (!project) {
    return <Navigate to="/" replace />
  }

  const sections = [
    { title: 'Overview', content: project.overview },
    { title: 'Problem', content: project.problem },
    { title: 'Solution', content: project.solution },
    { title: 'My Contribution', content: project.contribution },
  ]

  const isPortrait = project.imageAspect === 'portrait'
  const galleryImages = project.screenshots ?? [project.image]

  return (
    <div className="min-h-screen">
      <motion.header
        initial={reduceMotion ? {} : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-nav sticky top-0 z-50"
      >
        <div className="section-container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 no-underline group">
            <FoxLogo size={24} />
            <span className="font-display font-semibold text-sm text-text-primary group-hover:text-fox transition-colors">
              {siteInfo.name}
            </span>
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-fox transition-colors no-underline"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </motion.header>

      <main className="section-container py-12 md:py-20">
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-fox">
            Project {project.number} — {project.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">{project.title}</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed mb-8">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl overflow-hidden border border-white/10 mb-12 md:mb-16 neon-border group"
        >
          <motion.img
            src={project.image}
            alt={`${project.title} screenshot`}
            className={`w-full ${isPortrait ? 'aspect-[9/16] max-h-[640px] mx-auto object-contain bg-surface-secondary' : 'aspect-video object-cover'}`}
            loading="lazy"
            whileHover={reduceMotion ? {} : { scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          <StaggerChildren className="lg:col-span-2 space-y-10" stagger={0.1}>
            {sections.map((section) => (
              <motion.section key={section.title} variants={staggerItem}>
                <h2 className="font-display text-xl font-semibold text-fox mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-fox/50" />
                  {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed pl-11">{section.content}</p>
              </motion.section>
            ))}
          </StaggerChildren>

          <motion.aside
            initial={reduceMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-6 md:p-8 h-fit lg:sticky lg:top-24 border border-white/5"
          >
            <h2 className="font-display text-lg font-semibold mb-4">Technology</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-secondary text-text-primary border border-white/8 hover:border-fox/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="font-display text-lg font-semibold mb-4">Features</h2>
            <ul className="space-y-2 mb-8">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-fox mt-0.5">→</span>
                  {f}
                </li>
              ))}
            </ul>

            {project.liveUrl && (
              <MagneticButton href={project.liveUrl} type="a" className="w-full">
                Live Demo <ExternalLink size={16} />
              </MagneticButton>
            )}
          </motion.aside>
        </div>

        <motion.section
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-xl font-semibold text-fox mb-6">Screenshots</h2>
          <div className={`grid gap-6 ${isPortrait ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-2'}`}>
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                whileHover={reduceMotion ? {} : { y: -4 }}
                className="rounded-2xl overflow-hidden border border-white/10 group bg-surface-secondary"
              >
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  className={`w-full ${isPortrait ? 'aspect-[9/16] max-h-[560px] mx-auto object-contain' : 'aspect-video object-cover group-hover:scale-105 transition-transform duration-500'}`}
                />
              </motion.div>
            ))}
            {!isPortrait && galleryImages.length === 1 && (
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface-secondary flex items-center justify-center aspect-video">
                <p className="text-text-secondary text-sm px-6 text-center">
                  {project.liveUrl
                    ? 'Additional project views available on live demo'
                    : 'Additional project views coming soon'}
                </p>
              </div>
            )}
          </div>
        </motion.section>
      </main>
    </div>
  )
}
