import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function StatementBreak() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="statement"
      className="bg-black py-32 md:py-40 flex flex-col items-center justify-center text-center px-4"
    >
      <div ref={ref}>
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0, ease: 'easeOut' }}
        >
          <p
            className="font-body font-semibold text-5xl md:text-7xl text-white/30 tracking-tight leading-none"
          >
            See the craft.
          </p>
        </motion.div>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          style={{ marginTop: '-10px' }}
        >
          <p
            className="font-body font-semibold text-5xl md:text-7xl leading-none"
            style={{ color: 'var(--accent)' }}
          >
            Feel the difference.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
