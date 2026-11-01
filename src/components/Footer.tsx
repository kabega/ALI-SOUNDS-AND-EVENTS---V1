import { ArrowUpRight, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#111] px-6 py-10 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#hero" className="flex items-center gap-3" aria-label="Ali Sounds & Events home">
          <img src="/images/ali-sounds-logo.png" alt="" className="h-14 w-[84px] object-contain" />
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.2em]">ALI</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.23em] text-white/55">Sounds & Events</span>
          </span>
        </a>
        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/60" aria-label="Footer navigation">
          <a href="#portfolio" className="transition hover:text-white">Experience</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#events" className="transition hover:text-white">Events</a>
          <a href="#faqs" className="transition hover:text-white">FAQs</a>
          <a href="#contact" className="inline-flex items-center gap-1 transition hover:text-white">Get in touch <ArrowUpRight size={14} /></a>
        </nav>
        <p className="text-xs text-white/40">Sound that moves. Events that bring us together.</p>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm font-bold text-white/80">
        <a href="tel:+256775156450" className="hover:text-[#ff3038]">0775 156 450</a>
        <a href="tel:+256751654646" className="hover:text-[#ff3038]">0751 654 646</a>
        <a href="mailto:ssemandaali39@gmail.com" className="inline-flex items-center gap-2 transition hover:text-[#ff3038]">
          <Mail size={15} /> ssemandaali39@gmail.com
        </a>
      </div>
    </footer>
  )
}
