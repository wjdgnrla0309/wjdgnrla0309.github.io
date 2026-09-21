import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="project-card" onClick={() => onSelect(project)}>
      <div className="project-image-wrap">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech-list">
          {project.technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <button type="button" className="text-link">
          View Details
        </button>
      </div>
    </article>
  )
}
