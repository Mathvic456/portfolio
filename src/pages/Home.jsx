import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Preloader from '../components/layout/Preloader'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Portfolio from '../components/sections/Portfolio'
import Experience from '../components/sections/Experience'
import Services from '../components/sections/Services'
// import Contact from '../components/sections/Contact'
// import Contact from '../components/sections/Contact'
import Contact from '../components/sections/COntact'
import Footer from '../components/sections/Footer'
import EasterEgg from '../components/ui/EasterEgg'
import useEasterEgg from '../hooks/useEasterEgg'


export default function Home() {
  const { showEgg, setShowEgg } = useEasterEgg('victor')
  
  useEffect(() => {
    console.log('%cPsst... want a secret? Try typing "victor" anywhere on this page!', 
      'color: #4CAF50; font-size: 14px;')
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Preloader />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Services />
        <Contact />
      </main>
      
      <Footer />
      
      <EasterEgg 
        show={showEgg} 
        onClose={() => setShowEgg(false)} 
      />
    </div>
  )
}