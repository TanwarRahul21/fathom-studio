import { motion } from 'framer-motion'

export default function Work() {
  return (
    <section id="work" className="bg-black py-24 px-8 md:px-16">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-sm text-white/80 font-body mb-3 tracking-widest uppercase"
      >
        // Selected Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-heading italic text-white leading-[0.9] tracking-[-2px] whitespace-pre-line"
      >
        {'A Project,\nFully Realized'}
      </motion.h2>

      {/* Showcase panel */}
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto mt-12"
      >
        <div className="liquid-glass-strong rounded-2xl overflow-hidden">
          {/* Browser chrome bar */}
          <div className="bg-black/40 border-b border-white/10 px-4 py-3 flex items-center relative">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bg-white/5 rounded-md px-4 py-1 text-[11px] text-white/50">
              northfield.co
            </div>
          </div>
          {/* Placeholder content area */}
          <div className="aspect-video">
            <img 
              src="/work-mockup-placeholder.svg" 
              className="w-full h-full object-cover" 
              alt="Project preview" 
            />
          </div>
        </div>

        {/* Caption */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-1">
          <span className="text-sm text-white/60 font-body">
            Northfield — Full Site Redesign
          </span>
          <span
            className="text-sm font-body"
            style={{ color: 'var(--accent)' }}
          >
            Bounce rate down 41% after launch.
          </span>
        </div>
      </motion.div>
    </section>
  )
}
