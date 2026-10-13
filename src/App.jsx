import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Particles from './components/Particles/Particles'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import MouseGlow from './components/MouseGlow/MouseGlow'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const timer = setTimeout(() => setLoading(false), 1800)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-content">
          <div className="loader-logo">
            <span className="loader-bracket">&lt;</span>
            <span className="loader-name">MS</span>
            <span className="loader-bracket">/&gt;</span>
          </div>
          <div className="loader-bar-track">
            <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="loader-percent">{progress}%</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Particles />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
