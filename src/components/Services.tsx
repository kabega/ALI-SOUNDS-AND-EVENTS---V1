import { ArrowUpRight, AudioLines, Lightbulb, Mic2, Music2, PartyPopper, Users } from 'lucide-react'

const services = [
  { title: 'Sound system hire', text: 'Clear, reliable sound for intimate gatherings and lively celebrations.', icon: AudioLines, tag: 'Sound' },
  { title: 'DJ & music', text: 'Music and mixing shaped around your crowd, your schedule, and your vibe.', icon: Music2, tag: 'Music' },
  { title: 'Event lighting', text: 'Set the scene and give your venue an atmosphere that feels just right.', icon: Lightbulb, tag: 'Atmosphere' },
  { title: 'Microphones & PA', text: 'Make speeches, announcements, and presentations easy to hear.', icon: Mic2, tag: 'Production' },
  { title: 'Event production', text: 'Practical support to help your event sound and feel like one whole experience.', icon: PartyPopper, tag: 'Planning' },
  { title: 'Private celebrations', text: 'A considered setup for the people and moments you’re bringing together.', icon: Users, tag: 'Occasions' },
]

export function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#ed1018]">What we do</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">Everything in tune.</h2>
          </div>
          <p className="max-w-md leading-relaxed text-[#555]">The right sound and production details for events that bring people together.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon, tag }, index) => (
            <article key={title} className="group flex min-h-64 flex-col rounded-3xl border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ed1018]/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff0f0] text-[#ed1018] transition group-hover:bg-[#ed1018] group-hover:text-white"><Icon size={21} /></span>
                <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#aaa39a]">0{index + 1}</span>
              </div>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ed1018]">{tag}</p>
              <h3 className="mt-2 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-relaxed text-[#555]">{text}</p>
              <a href="#contact" className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#ed1018] transition-colors hover:text-[#a90009]" aria-label={`Ask about ${title}`}>
                Ask about this service <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
