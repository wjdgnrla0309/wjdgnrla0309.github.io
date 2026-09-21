import { X } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close project details">
          <X size={18} />
        </button>

        <div className="modal-header">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
          </div>
        </div>

        <div className="modal-content">
          <section>
            <h4>개요</h4>
            <p>{project.detail.overview}</p>
          </section>
          <section>
            <h4>문제</h4>
            <p>{project.detail.problem}</p>
          </section>
          <section>
            <h4>접근 방법</h4>
            <p>{project.detail.approach}</p>
          </section>
          <section>
            <h4>주요 고려 사항</h4>
            <ul>
              {project.detail.engineeringConsiderations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>사용 기술</h4>
            <div className="project-tech-list">
              {project.detail.tools.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
          {project.detail.result ? (
            <section>
              <h4>결과</h4>
              <p>{project.detail.result}</p>
            </section>
          ) : null}
          <section>
            <h4>배운 점</h4>
            <p>{project.detail.whatILearned}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
