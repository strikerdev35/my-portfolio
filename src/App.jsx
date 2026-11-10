import { MotionProvider } from './hooks/useMotion'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Tools from './components/Tools'
import Process from './components/Process'
import About from './components/About'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SwarmCanvas from './components/SwarmCanvas'

export default function App() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <Header />

      <main id="top">
        <Hero />
        <Work />
        <Tools />
        <Process />
        <About />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <SwarmCanvas />
    </MotionProvider>
  )
}
