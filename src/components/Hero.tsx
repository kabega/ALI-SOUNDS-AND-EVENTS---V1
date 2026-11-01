import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Our Events', href: '#portfolio' },
  { label: 'Process', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Event Types', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <img
        src="/images/ali-sounds-flyer.jpeg"
        alt=""
        aria-hidden="true"
        className="hero-backdrop absolute inset-y-0 right-0 h-full w-[85%] object-cover object-[right_center] opacity-35 sm:w-[55%] sm:opacity-50"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_34%,rgba(0,0,0,0.62)_72%,rgba(0,0,0,0.36)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_42%,rgba(237,16,24,0.18),transparent_48%)]" />

      <header className={`fixed left-0 right-0 top-0 z-[110] px-5 py-4 transition-colors duration-300 sm:px-8 ${isScrolled ? 'border-b border-white/10 bg-black/90 shadow-lg shadow-black/20 backdrop-blur-xl' : 'bg-gradient-to-b from-black/50 to-transparent'}`}>
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
            aria-label="Ali Sounds & Events home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/images/ali-sounds-logo.png" alt="" className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12" />
            <span className="leading-tight">
              <span className="block text-sm font-black uppercase tracking-[0.13em] sm:text-base">Ali Sounds</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/65 sm:text-[10px]">& Events</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-[#e82025] px-4 py-3 text-sm font-bold transition-colors duration-300 hover:bg-[#c8151b] sm:px-6">
              <Phone size={16} /> Book an Event
            </a>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/20 bg-white/[0.08] text-white transition-colors hover:bg-white/15"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <nav
            className="absolute bottom-0 right-0 top-0 flex w-96 max-w-[88vw] flex-col justify-center border-l border-white/10 bg-[#111] px-8 pb-8 pt-24 shadow-2xl sm:px-12"
            aria-label="Main navigation"
            onClick={(event) => event.stopPropagation()}
          >
            {links.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 px-2 py-5 text-xl font-medium transition-colors hover:text-[#ff4b53]">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-[#e82025] px-5 py-4 font-bold transition-colors hover:bg-[#c8151b]">
              <Phone size={17} /> Book an Event
            </a>
            <a href="https://wa.me/256775156450" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-4 font-bold transition-colors hover:bg-white/10">
              Message on WhatsApp <ArrowUpRight size={17} />
            </a>
          </nav>
          <button type="button" className="absolute right-[calc(min(86vw,20rem)+1rem)] top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
      )}

      <main className="relative z-10 mx-auto flex h-full max-w-[1600px] items-end px-6 pb-12 pt-28 sm:px-8">
        <div className="max-w-5xl">
          <h1 className="text-[clamp(2rem,4.5vw,2.6rem)] font-black uppercase leading-[1.18] tracking-[-0.045em]">
            <span className="block">Sound &</span>
            <span className="block">Events</span>
            <span className="block">Without Limits</span>
          </h1>
        </div>
      </main>
    </div>
  )
}
