import { useEffect, useState } from 'react'
import './MouseGlow.css'

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    function onMove(e) {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="mouse-glow"
      style={{
        transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
      }}
    />
  )
}
