import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import type { FormEvent } from 'react'

export function Contact() {
  function sendWhatsAppInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const message = [
      'Hello Ali Sounds & Events! I would like to enquire about an event.',
      `Name: ${formData.get('name')}`,
      `Event: ${formData.get('occasion')}`,
      `Date: ${formData.get('date')}`,
      `Venue / location: ${formData.get('location') || 'Not decided yet'}`,
      `More details: ${formData.get('details') || 'Please contact me to discuss.'}`,
    ].join('\n')

    window.location.href = `https://wa.me/256775156450?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact" className="bg-[linear-gradient(125deg,#ffffff_0%,#fffafa_54%,#ffe9e9_100%)] px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#ed1018]">Let’s make it happen</p>
          <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">Have a date in mind?</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/65">Tell us what you’re celebrating and what you have in mind. We’ll help you find the right sound and setup for the occasion.</p>
          <a href="tel:+256775156450" className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ed1018] to-[#a90009] px-6 py-4 font-bold text-white shadow-md shadow-red-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Phone size={18} /> Call 0775 156 450
          </a>
          <a href="mailto:ssemandaali39@gmail.com" className="mt-5 flex w-fit items-center gap-2 font-bold text-[#111] transition-colors hover:text-[#ed1018]">
            <Mail size={18} className="text-[#ed1018]" />
            ssemandaali39@gmail.com
          </a>
        </div>
        <form onSubmit={sendWhatsAppInquiry} className="rounded-3xl border border-[#ed1018]/15 bg-white/90 p-7 text-[#111] shadow-[0_20px_60px_rgba(80,0,0,0.08)] sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ed1018]">Request event details</p>
          <p className="mt-2 text-sm text-black/60">Share a few details and send your enquiry directly to WhatsApp.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold">
              Your name <span className="text-[#ed1018]">*</span>
              <input name="name" autoComplete="name" required maxLength={100} className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#ed1018] focus:ring-2 focus:ring-[#ed1018]/15" />
            </label>
            <label className="text-sm font-bold">
              Event type <span className="text-[#ed1018]">*</span>
              <select name="occasion" required defaultValue="" className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#ed1018] focus:ring-2 focus:ring-[#ed1018]/15">
                <option value="" disabled>Select occasion</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Introduction / Kwanjula / Kukyala</option>
                <option>Graduation</option>
                <option>Conference / exhibition</option>
                <option>Party</option>
                <option>Other event</option>
              </select>
            </label>
            <label className="text-sm font-bold">
              Event date <span className="text-[#ed1018]">*</span>
              <input name="date" type="date" required className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#ed1018] focus:ring-2 focus:ring-[#ed1018]/15" />
            </label>
            <label className="text-sm font-bold">
              Venue / location
              <span className="relative mt-2 block">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                <input name="location" autoComplete="street-address" maxLength={150} className="w-full rounded-xl border border-black/15 bg-white py-3 pl-9 pr-4 font-normal outline-none transition focus:border-[#ed1018] focus:ring-2 focus:ring-[#ed1018]/15" />
              </span>
            </label>
            <label className="text-sm font-bold sm:col-span-2">
              What do you need?
              <textarea name="details" rows={3} maxLength={1000} placeholder="Sound, DJ, microphones, lighting, or other event details" className="mt-2 w-full resize-y rounded-xl border border-black/15 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-black/35 focus:border-[#ed1018] focus:ring-2 focus:ring-[#ed1018]/15" />
            </label>
          </div>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1f9d55] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#168248]">
            <MessageCircle size={18} /> Send enquiry on WhatsApp
          </button>
          <p className="mt-3 text-center text-xs leading-relaxed text-black/50">Your details are placed into a WhatsApp message and are not stored on this website.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-black/10 pt-5 text-sm font-bold">
            <a href="tel:+256775156450" className="hover:text-[#ed1018]">Call 0775 156 450</a>
            <a href="tel:+256751654646" className="hover:text-[#ed1018]">Call 0751 654 646</a>
            <a href="mailto:ssemandaali39@gmail.com" className="inline-flex items-center gap-1 hover:text-[#ed1018]"><Mail size={15} /> Email us</a>
          </div>
        </form>
      </div>
    </section>
  )
}
