import { AudioLines, Heart, Lightbulb, Sparkles } from 'lucide-react'

const values = [
  { title: 'The right sound', text: 'Carefully matched audio and equipment help every announcement, track, and toast land just right.', icon: AudioLines },
  { title: 'A personal touch', text: 'We listen first, then shape the setup around your people, your plans, and your kind of celebration.', icon: Heart },
  { title: 'Seamless flow', text: 'Thoughtful coordination keeps the energy moving from the first arrival to the final moment.', icon: Sparkles },
  { title: 'Made for your moment', text: 'No one-size-fits-all playbook—each event gets the attention its occasion deserves.', icon: Lightbulb },
]

export function Awards() {
  return (
    <section id="why-ali" className="bg-[#111] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#ff3038]">Why Ali</p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">Good events are felt, not just seen.</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">We bring the right people, sound, and atmosphere together to make celebrations feel effortless and personal.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {values.map(({ title, text, icon: Icon }, index) => (
            <article key={title} className="bg-[#191919] p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ed1018]/15 text-[#ff3038]"><Icon size={21} /></span>
                <span className="text-sm font-bold tracking-[0.15em] text-white/30">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-bold">{title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
