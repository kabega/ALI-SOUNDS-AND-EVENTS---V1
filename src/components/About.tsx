import { ArrowDown, Check, ClipboardList, Headphones, Lightbulb, PartyPopper, Radio, Wrench } from 'lucide-react'

const steps = [
  { number: '01', title: 'Share your plans', text: 'Tell us what you are celebrating, when it is happening, and where.', icon: ClipboardList },
  { number: '02', title: 'Choose your setup', text: 'Talk through sound, music, microphones, lighting, and the feel you want.', icon: Headphones },
  { number: '03', title: 'Prepare the details', text: 'We shape the equipment and event flow around your venue and schedule.', icon: Wrench },
  { number: '04', title: 'Set the atmosphere', text: 'Our setup brings clear sound and the right energy to your gathering.', icon: Radio },
  { number: '05', title: 'Enjoy the moment', text: 'Spend time with your guests while the celebration finds its rhythm.', icon: PartyPopper },
]

const details = [
  { title: 'A setup for your occasion', icon: Lightbulb },
  { title: 'Clear sound from start to finish', icon: Check },
  { title: 'Support for the moments that matter', icon: PartyPopper },
]

export function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#ed1018]">The event, in good hands</p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">From first plans to the final song.</h2>
          </div>
          <p className="max-w-md leading-relaxed text-[#555]">A straightforward process keeps the details clear and gives your celebration room to feel like yours.</p>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-black/15 lg:block" aria-hidden="true" />
          {steps.map(({ number, title, text, icon: Icon }) => (
            <article key={number} className="relative border-l border-black/15 pl-5 pt-1 lg:border-0 lg:pl-0 lg:pt-0">
              <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-[#ed1018] ring-4 ring-[#f5f5f5] lg:static lg:mb-5 lg:block lg:h-4 lg:w-4 lg:ring-[5px]">
                <span className="sr-only">Step {number}</span>
              </span>
              <div className="flex items-center justify-between lg:mb-7">
                <span className="text-sm font-black tracking-[0.18em] text-[#ed1018]">{number}</span>
                <Icon size={20} className="text-[#ed1018]" />
              </div>
              <h3 className="mt-4 text-xl font-bold lg:mt-0">{title}</h3>
              <p className="mt-3 leading-relaxed text-[#555]">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl bg-[#111] text-white">
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff555b]">The Ali experience</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Make space for the moment.</h3>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-white transition-colors hover:text-[#ff555b]">
                Start planning <ArrowDown size={17} />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {details.map(({ title, icon: Icon }) => (
                <div key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:flex-col sm:p-5">
                  <Icon size={19} className="shrink-0 text-[#ff3038]" />
                  <span className="text-sm font-semibold leading-relaxed text-white/75">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
