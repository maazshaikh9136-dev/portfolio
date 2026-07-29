import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/maazshaikh9136-dev' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/maaz-shaikh-59bba7389' },
  { icon: <FiMail size={18} />, href: 'mailto:maaz.shaikh9136@gmail.com' },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">MS</span>
            <span className="logo-bracket">/&gt;</span>
          </span>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Maaz Shaikh. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            className={`back-to-top ${showTop ? 'back-to-top--visible' : ''}`}
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
