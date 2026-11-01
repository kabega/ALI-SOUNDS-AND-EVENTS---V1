import { ArrowUpRight, AudioLines, Disc3, Headphones } from 'lucide-react'

const highlights = [
  { label: 'Sound that fills the room', icon: AudioLines },
  { label: 'Atmosphere made for the occasion', icon: Disc3 },
  { label: 'Details guests remember', icon: Headphones },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#ed1018]">The Ali experience</p>
          <h2 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Every great event has a <span className="text-[#ed1018]">soundtrack.</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#555]">
            From the first welcome to the last song, we shape the sound and atmosphere around your event—not the other way around.
          </p>
          <div className="mt-9 space-y-4">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fff0f0] text-[#ed1018]"><Icon size={18} /></span>
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 font-bold text-[#ed1018] hover:gap-3">
            Let’s make it memorable <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#111] p-8 text-white sm:min-h-[500px] sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(237,16,24,0.72),transparent_52%),linear-gradient(145deg,#252525,#111_65%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="relative flex h-full min-h-[326px] flex-col justify-between sm:min-h-[404px]">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">Ali sounds & events</span>
              <AudioLines className="text-[#ff3038]" size={23} />
            </div>
            <div>
              <div className="mb-7 flex h-28 items-center justify-center gap-1.5 sm:h-36" aria-hidden="true">
                {[25, 50, 32, 74, 44, 88, 59, 98, 68, 42, 76, 52, 95, 61, 38, 82, 53, 100, 67, 41, 79, 48, 91, 57, 34, 71, 48, 84, 55, 30].map((height, index) => (
                  <span key={index} className="w-1.5 rounded-full bg-gradient-to-t from-[#ed1018]/30 via-[#ed1018] to-white" style={{ height: `${height}%` }} />
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Bring people together</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Feel the difference.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
