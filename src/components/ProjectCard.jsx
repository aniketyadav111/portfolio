import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="project-image">
        {project.image ? <img src={project.image} alt={project.title} /> : null}
      </div>

      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>

      <div className="badges">
        {(project.technologies || []).map((tech) => (
          <span className="badge small" key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a className="btn btn-ghost btn-small" href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
          <Github size={16} />
        </a>
        <a className="btn btn-primary btn-small" href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
