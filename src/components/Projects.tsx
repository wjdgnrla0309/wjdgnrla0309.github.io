import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  return (
    <section id="projects" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">Engineering Projects</p>
        <h2>Applied engineering work across mobility, systems, and development.</h2>
      </div>

      <div className="card-grid project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <ProjectCard project={project} onSelect={setSelectedProject} />
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
