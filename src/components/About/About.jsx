import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiLayout, FiSmartphone, FiZap } from 'react-icons/fi'
import './About.css'

const highlights = [
  { icon: <FiCode size={22} />, text: 'Clean Code' },
  { icon: <FiLayout size={22} />, text: 'Modern UI' },
  { icon: <FiSmartphone size={22} />, text: 'Responsive' },
  { icon: <FiZap size={22} />, text: 'Performant' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="about-card-glow" />

          <div className="about-header">
            <span className="section-tag">&lt;about&gt;</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-body">
            <div className="about-text">
              <p>
                I'm a passionate <span className="highlight">Frontend Web Developer</span> who
                thrives on crafting modern, responsive, and visually engaging web applications.
                My journey in web development is driven by a deep curiosity for how things work
                and a relentless pursuit of clean, elegant code.
              </p>
              <p>
                I specialize in building interfaces that not only look stunning but feel intuitive
                and perform flawlessly. From pixel-perfect designs to fluid animations, I focus on
                every detail that elevates the user experience. I'm constantly exploring and learning
                modern technologies to stay at the forefront of web development.
              </p>
              <p>
                Whether it's a complex dashboard or a minimal landing page, I bring the same level of
                dedication and craftsmanship to every project. My goal is to create digital experiences
                that leave a lasting impression.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <span className="section-tag section-tag--end">&lt;/about&gt;</span>
        </motion.div>
      </div>
    </section>
  )
}
