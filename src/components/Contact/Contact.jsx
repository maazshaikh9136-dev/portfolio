import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Contact.css'

const socials = [
  { icon: <FiGithub size={22} />, href: 'https://github.com/maazshaikh9136-dev', label: 'GitHub', username: '@maazshaikh9136-dev' },
  { icon: <FiLinkedin size={22} />, href: 'https://www.linkedin.com/in/maaz-shaikh-59bba7389', label: 'LinkedIn', username: 'maaz-shaikh' },
  { icon: <FiMail size={22} />, href: 'mailto:maaz.shaikh9136@gmail.com', label: 'Email', username: 'maaz.shaikh9136@gmail.com' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="contact section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">&lt;contact&gt;</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Get In Touch</h2>
          <p className="contact-intro">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="contact-socials-grid">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-social-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="contact-social-icon">{s.icon}</div>
              <h4 className="contact-social-label">{s.label}</h4>
              <p className="contact-social-username">{s.username}</p>
              <div className="contact-social-glow" />
            </motion.a>
          ))}
        </div>

        <span className="section-tag section-tag--end">&lt;/contact&gt;</span>
      </div>
    </section>
  )
}
