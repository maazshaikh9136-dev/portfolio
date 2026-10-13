import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', onClick, href, ...props }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMouse(e) {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    setPosition({ x: (clientX - centerX) * 0.3, y: (clientY - centerY) * 0.3 })
  }

  function handleLeave() {
    setPosition({ x: 0, y: 0 })
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ display: 'inline-block' }}
      {...props}
    >
      <Tag href={href} onClick={onClick} style={{ display: 'inline-block' }}>
        {children}
      </Tag>
    </motion.div>
  )
}
