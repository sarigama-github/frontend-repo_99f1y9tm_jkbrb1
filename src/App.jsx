import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <CTA />
        <footer className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between text-xs">
            <p>© {new Date().getFullYear()} Frame//Drive — Action Sports Video</p>
            <p className="opacity-60">Black & white. Clean. Fast.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
