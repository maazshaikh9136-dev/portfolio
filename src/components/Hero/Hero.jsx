import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import MagneticButton from '../MagneticButton/MagneticButton'
import './Hero.css'

const roles = [
  'Frontend Web Developer',
  'React Developer',
  'UI/UX Enthusiast',
  'Creative Coder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    function type() {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1))
        if (text.length + 1 === currentRole.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
          return
        }
        timeoutRef.current = setTimeout(type, 80)
      } else {
        setText(currentRole.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          return
        }
        timeoutRef.current = setTimeout(type, 40)
      }
    }

    timeoutRef.current = setTimeout(type, 100)
    return () => clearTimeout(timeoutRef.current)
  }, [text, isDeleting, roleIndex])

  const headingVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  }

  const letterVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const nameLines = ['Hi, I\'m', 'MAAZ SHAIKH']

  return (
    <section id="home" className="hero">
      <div className="hero-bg-gradient" />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-greeting-wrapper">
            <motion.div className="hero-greeting" variants={letterVariants}>
              <span className="greeting-bracket">&lt;</span>
              {nameLines[0]}
              <span className="greeting-bracket"> /&gt;</span>
            </motion.div>
          </div>

          <motion.h1 className="hero-name" variants={letterVariants}>
            {nameLines[1].split('').map((char, i) => (
              <span key={i} className="hero-name-char">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </motion.h1>

          <motion.div className="hero-role-wrapper" variants={letterVariants}>
            <span className="hero-role-prefix">&gt; </span>
            <span className="hero-role">{text}</span>
            <span className="hero-cursor">|</span>
          </motion.div>

          <motion.p className="hero-subtitle" variants={letterVariants}>
            I build modern, responsive, and interactive web experiences.
          </motion.p>

          <motion.div className="hero-cta" variants={letterVariants}>
            <MagneticButton>
              <a href="#projects" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <span>View Projects</span>
                <FiArrowRight size={18} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="#contact" className="btn btn-outline" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <FiMail size={18} />
                <span>Contact Me</span>
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-image-container">
            <div className="hero-glow-ring" />
            <div className="hero-glow-ring hero-glow-ring--inner" />
            <div className="hero-avatar">
              <span className="hero-avatar-initials">MS</span>
            </div>
            <div className="hero-orbit-dot hero-orbit-dot--1" />
            <div className="hero-orbit-dot hero-orbit-dot--2" />
            <div className="hero-orbit-dot hero-orbit-dot--3" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  )
}
