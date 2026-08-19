import { SectionHeader } from './SectionHeader'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-fox/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeader
          number="03"
          title="Selected Work"
          subtitle="Real products. Real problems. Thoughtful solutions."
        />

        <div className="space-y-10 md:space-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
