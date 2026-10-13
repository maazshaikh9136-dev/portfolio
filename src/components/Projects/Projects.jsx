import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI, cart system, and responsive design. Built with React and styled for performance.',
    tech: ['React', 'CSS3', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #00E5FF22, #4F9DFF22)',
    accentColor: '#00E5FF',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Manager Pro',
    description: 'A sleek productivity app with drag-and-drop functionality, real-time updates, and an intuitive dark mode interface.',
    tech: ['React', 'JavaScript', 'CSS3'],
    gradient: 'linear-gradient(135deg, #4F9DFF22, #A855F722)',
    accentColor: '#4F9DFF',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and stunning visual data representations.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    gradient: 'linear-gradient(135deg, #10B98122, #00E5FF22)',
    accentColor: '#10B981',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Portfolio Generator',
    description: 'A tool to generate stunning developer portfolios with customizable themes, animations, and one-click deployment.',
    tech: ['React', 'CSS3', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #F59E0B22, #EF444422)',
    accentColor: '#F59E0B',
    live: '#',
    github: '#',
  },
]

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      <div className="project-card-inner">
        <div className="project-image" style={{ background: project.gradient }}>
          <div className="project-image-overlay" />
          <motion.div
            className="project-image-shine"
            animate={hovered ? { x: '200%' } : { x: '-100%' }}
            transition={{ duration: 0.6 }}
          />
          <div className="project-image-icon" style={{ color: project.accentColor }}>
            <FiGithub size={48} strokeWidth={1} />
          </div>
        </div>

        <div className="project-info">
          <div className="project-tech-tags">
            {project.tech.map(t => (
              <span key={t} className="tech-tag" style={{ borderColor: `${project.accentColor}33` }}>
                {t}
              </span>
            ))}
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-links">
            <a href={project.live} className="project-link project-link--live" style={{ borderColor: `${project.accentColor}44` }}>
              <FiExternalLink size={16} />
              <span>Live Demo</span>
            </a>
            <a href={project.github} className="project-link project-link--code">
              <FiGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="project-card-border" style={{ '--border-color': project.accentColor }} />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="projects section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">&lt;projects&gt;</span>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        <span className="section-tag section-tag--end">&lt;/projects&gt;</span>
      </div>
    </section>
  )
}
