import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import './Skills.css'

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 92 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
  { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 85 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 75 },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 82 },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', level: 85 },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="skills section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">&lt;skills&gt;</span>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Skills & Technologies</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="skill-card-glow" style={{ '--skill-color': skill.color }} />
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon size={36} />
              </div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-track">
                <motion.div
                  className="skill-bar-fill"
                  style={{ background: skill.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: 'easeOut' }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        <span className="section-tag section-tag--end">&lt;/skills&gt;</span>
      </div>
    </section>
  )
}
