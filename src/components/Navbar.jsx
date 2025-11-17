import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
    scrolled ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70' : 'bg-transparent'
  }`

  const linkClass = 'text-sm font-medium tracking-wide hover:opacity-70 transition-opacity'

  return (
    <header className={navClasses}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-6 w-6 border border-black" />
            <span className="text-lg font-semibold uppercase tracking-wider">Frame//Drive</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className={linkClass}>Work</a>
            <a href="#services" className={linkClass}>Services</a>
            <a href="#contact" className={linkClass}>Contact</a>
          </nav>

          <button
            aria-label="Menu"
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            <a href="#work" className={linkClass} onClick={() => setOpen(false)}>Work</a>
            <a href="#services" className={linkClass} onClick={() => setOpen(false)}>Services</a>
            <a href="#contact" className={linkClass} onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
