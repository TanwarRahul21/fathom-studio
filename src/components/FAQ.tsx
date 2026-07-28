import { ChevronDown } from 'lucide-react'
import { Reveal } from './Reveal'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most engagements run four to six weeks from kickoff to launch, depending on scope — we\'ll give you a firm timeline after our first discovery call.',
  },
  {
    q: 'What\'s included in a project?',
    a: 'Design, front-end build, and a two-week post-launch support window are standard. Ongoing growth work is available separately if you want it.',
  },
  {
    q: 'Do you work with existing brand guidelines?',
    a: 'Yes — we can design within an established system, or help build one from scratch if you don\'t have one yet.',
  },
  {
    q: 'How many revision rounds do we get?',
    a: 'Two structured revision rounds are built into every project phase, with async feedback in between.',
  },
  {
    q: 'What if we need changes after launch?',
    a: 'We offer ongoing retainer support, or you\'re welcome to hand the codebase to your own team — everything we build is documented and easy to pick up.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-black pt-32 md:pt-40 pb-24 px-4 md:px-8 lg:px-16">
      <div>
        {/* Header */}
        <Reveal>
          <p className="text-sm text-white/80 font-body mb-3 tracking-widest uppercase">
            // FAQ
          </p>
          <h2 className="text-5xl md:text-6xl font-heading italic text-white leading-[0.9] tracking-[-2px] mb-12">
            Common Questions
          </h2>
        </Reveal>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <details className="faq-item liquid-glass rounded-2xl px-6 py-5 group">
                <summary className="flex justify-between items-center text-base md:text-lg font-body font-medium text-white cursor-pointer">
                  <span>{item.q}</span>
                  <ChevronDown className="chevron w-4 h-4 text-white/60 flex-shrink-0 ml-4" />
                </summary>
                <div className="answer pt-3">
                  <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
