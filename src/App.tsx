import Header from './components/Header'
import Hero from './components/Hero'
import ServiceArea from './components/ServiceArea'
import Works from './components/Works'
import BeforeAfter from './components/BeforeAfter'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServiceArea />
        <Works />
        <BeforeAfter />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
