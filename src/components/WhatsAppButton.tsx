import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256775156450?text=Hello%20Ali%20Sounds%20%26%20Events%2C%20I%27d%20like%20to%20ask%20about%20your%20event%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ali Sounds & Events on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1f9d55] px-4 py-3 font-bold text-white shadow-xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:bg-[#168248] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f9d55] sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sr-only sm:hidden">Chat on WhatsApp</span>
    </a>
  )
}
