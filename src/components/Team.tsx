import { BriefcaseBusiness, Cake, CarFront, Gift, GraduationCap, Handshake, Heart, PartyPopper, Presentation, Sparkles, Users } from 'lucide-react'

const eventTypes = [
  { title: 'Weddings', text: 'Make room for every speech, every song, and every dance-floor favorite.', icon: Heart },
  { title: 'Giveaways', text: 'Keep the excitement high and make your launch or giveaway a moment to remember.', icon: Gift },
  { title: 'Birthdays', text: 'Bring your people together for a celebration that feels like you.', icon: Cake },
  { title: 'Introductions', text: 'Set the perfect tone for introductions and family celebrations.', icon: Handshake },
  { title: 'Exhibitions', text: 'Bring your displays, guests, and presentations together with clear sound.', icon: Presentation },
  { title: 'Kwanjula', text: 'Celebrate this special cultural occasion with care, joy, and great sound.', icon: Users },
  { title: 'Kukyala', text: 'Support your gathering with thoughtful event sound and atmosphere.', icon: Sparkles },
  { title: 'Graduations', text: 'Celebrate hard work and big milestones with the people who matter.', icon: GraduationCap },
  { title: 'Drives', text: 'Create an engaging atmosphere for community and fundraising drives.', icon: CarFront },
  { title: 'Conferences', text: 'Help speakers be heard and keep your conference running smoothly.', icon: BriefcaseBusiness },
  { title: 'Parties', text: 'Fill the room with the right music and energy for a great night.', icon: PartyPopper },
]

export function Team() {
  return (
    <section id="events" className="bg-[#111] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#ff3038]">Made for gathering</p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">Your occasion. Your kind of energy.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">Every gathering has its own rhythm. We help set the scene for the moments worth celebrating.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map(({ title, text, icon: Icon }) => (
            <article key={title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#ed1018]/70 hover:bg-white/[0.06]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ed1018]/15 text-[#ff3038]"><Icon size={19} /></span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
