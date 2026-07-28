import { Reveal } from './Reveal'
import FadingVideo from './FadingVideo'
import BlurText from './BlurText'
import { ImageIcon, MovieIcon, LightbulbIcon } from './icons'

const cards = [
  {
    title: 'Design',
    Icon: ImageIcon,
    tags: ['Visual Identity', 'Design Systems', 'Art Direction', 'Interaction'],
    body: 'We build visual languages that hold together across every touchpoint — typography, component systems, and interfaces crafted with enough care that people notice, even if they can\'t say why.',
  },
  {
    title: 'Engineering',
    Icon: MovieIcon,
    tags: ['React', 'Next.js', 'Headless CMS', 'Performance'],
    body: 'Clean, modern front-end builds that load fast and hold up under real traffic — accessible by default, documented well, and easy for your team to pick up after we\'re gone.',
  },
  {
    title: 'Growth',
    Icon: LightbulbIcon,
    tags: ['SEO', 'Analytics', 'Experimentation', 'Retention'],
    body: 'A launch is only the beginning. We stick around to test, measure, and refine — turning a good-looking site into one that actually moves the numbers you care about.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Video */}
      <FadingVideo
        src="https://kkvcnrzfvplplpcixbwl.supabase.co/storage/v1/object/public/video%201/7765376-hd_1920_1080_30fps.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/80 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 px-8 md:px-16 pt-32 md:pt-40 pb-16 flex flex-col min-h-screen">
        {/* Header */}
        <Reveal>
          <p className="text-sm text-white/80 font-body mb-3 tracking-widest uppercase">
            // What We Do
          </p>
          <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-heading italic text-white leading-[0.9] tracking-[-3px] mb-0">
            <BlurText text="Design, Build, Grow" />
          </h2>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.15}>
              <div className="liquid-glass rounded-2xl p-6 min-h-[360px] flex flex-col">
                {/* Top row: icon + tags */}
                <div className="flex items-start justify-between gap-3 mb-auto">
                  <div className="liquid-glass rounded-xl h-11 w-11 flex items-center justify-center flex-shrink-0 text-white/70">
                    <card.Icon />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {card.tags.map((tag) => (
                      <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/70 font-body whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: title + body */}
                <div className="mt-8">
                  <h3 className="font-heading italic text-3xl md:text-4xl text-white leading-tight mb-3">{card.title}</h3>
                  <p className="text-sm text-white/90 font-body font-light leading-relaxed max-w-[32ch]">{card.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
