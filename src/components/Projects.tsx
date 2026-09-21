import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const groups = [
    { title: 'KUMA 관련 프로젝트', projects: projects.filter((project) => project.group === 'kuma') },
    { title: '여행 웹사이트 프로젝트', projects: projects.filter((project) => project.group === 'travel') },
  ]

  return (
    <section id="projects" className="section-shell section-block">
      <div className="section-heading">
        <h2>Project</h2>
      </div>

      {groups.map((group) => (
        <div className="project-group" key={group.title}>
          <h3 className="project-group-title">{group.title}</h3>
          <div className="card-grid project-grid">
            {group.projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.04 }}>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
