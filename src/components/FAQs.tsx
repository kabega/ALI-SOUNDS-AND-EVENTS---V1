import { ChevronDown } from 'lucide-react'

const questions = [
  {
    question: 'What events does Ali Sounds & Events support?',
    answer: 'We support weddings, birthdays, introductions, Kwanjula, Kukyala, graduations, giveaways, exhibitions, drives, conferences, and parties.',
  },
  {
    question: 'How do I request a quote or check availability?',
    answer: 'Use the event enquiry form to send your event type, date, and details to us on WhatsApp. You can also call either of the numbers on this page.',
  },
  {
    question: 'What should I include in my enquiry?',
    answer: 'Your event date, event type, venue or location, and the sound or event support you need help us understand your plans.',
  },
  {
    question: 'Where do you provide event services?',
    answer: 'Send us your event location through the enquiry form or by phone and we can discuss the arrangements for your event.',
  },
]

export function FAQs() {
  return (
    <section id="faqs" className="bg-white px-6 py-24 text-[#111] sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#ed1018]">A few helpful details</p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">Questions before the big day?</h2>
          <p className="mt-5 max-w-md leading-relaxed text-black/60">Find quick answers or send us your event details and we’ll talk through your plans.</p>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold marker:hidden">
                {question}
                <ChevronDown size={18} className="shrink-0 text-[#ed1018] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pt-4 leading-relaxed text-black/60">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
