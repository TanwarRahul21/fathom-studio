import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FadingVideo from './FadingVideo'
import BlurText from './BlurText'
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from './icons'
import { useActiveSection } from '../hooks/useActiveSection'

const fadeUp = (delay: number) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
})

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(["capabilities", "work", "faq", "contact"])

  useEffect(() => {
    const menu = document.getElementById('mobile-menu')
    if (!menu) return
    if (menuOpen) {
      menu.classList.add('open')
      document.body.style.overflow = 'hidden'
    } else {
      menu.classList.remove('open')
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Mobile Menu ──────────────────────────────────── */}
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 liquid-glass rounded-full px-6 py-3 text-sm font-body font-medium text-white"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
        >
          Start a Project
        </a>
      </div>

      {/* ── Hero Section ─────────────────────────────────── */}
      <section id="hero" className="h-screen overflow-hidden bg-black relative flex flex-col">
        {/* Background Video */}
        <FadingVideo
          src="https://kkvcnrzfvplplpcixbwl.supabase.co/storage/v1/object/public/video%201/13702779-hd_1280_720_25fps.mp4"
          className="absolute top-0 object-cover object-top z-0"
          style={{ left: '50%', transform: 'translateX(-50%)', width: '120%', height: '120%' }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

        {/* ── Navbar ───────────────────────────────────── */}
        <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="liquid-glass rounded-2xl h-12 w-12 flex items-center justify-center flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-heading italic text-2xl text-white leading-none">F</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex liquid-glass rounded-2xl px-1.5 py-1.5 items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link px-3 py-2 text-sm font-body transition-colors ${
                    isActive ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                  style={
                    isActive
                      ? {
                          textDecoration: "underline",
                          textDecorationThickness: "2px",
                          textDecorationColor: "var(--accent)",
                          textUnderlineOffset: "4px",
                        }
                      : undefined
                  }
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full ml-1 px-4 py-2 text-sm font-body font-medium text-white flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              Start a Project
              <ArrowUpRight />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden liquid-glass rounded-2xl h-12 w-12 flex items-center justify-center text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>

        {/* ── Main Content ─────────────────────────────── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24">
          {/* Badge */}
          <motion.div {...fadeUp(0.4)} className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 mb-8 text-xs text-white/80 font-body">
            <span className="rounded-full w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--accent)' }} />
            Now booking Q4 2026 — limited studio capacity
          </motion.div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-1px] max-w-3xl mb-6">
            <BlurText text="Interfaces That Age Like Architecture" highlightLastWord />
          </h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.8)}
            className="text-sm md:text-base text-white/90 max-w-2xl font-body font-light mb-8 leading-relaxed"
          >
            Fathom is a small studio of designers and engineers building considered, high-craft websites for teams who care about the details. Clear typography, deliberate motion, and engineering built to last.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(1.0)} className="flex items-center gap-4 flex-wrap justify-center mb-10">
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-body font-medium text-white hover:text-white/80 transition-colors"
            >
              Start a Project
              <ArrowUpRight />
            </a>
            <a
              href="#work"
              onClick={scrollToWork}
              className="flex items-center gap-2 text-sm font-body text-white/80 hover:text-white transition-colors nav-link"
            >
              <Play />
              See the Work
            </a>
          </motion.div>

          {/* Stat Cards */}
          <motion.div {...fadeUp(1.2)} className="flex flex-wrap gap-4 justify-center">
            <div className="liquid-glass rounded-2xl p-5 w-[200px] flex gap-3 items-start text-left">
              <div className="liquid-glass rounded-xl h-10 w-10 flex items-center justify-center flex-shrink-0 text-white/70">
                <ClockIcon />
              </div>
              <div>
                <div className="text-lg font-heading italic text-white leading-none">4 Weeks</div>
                <div className="text-[11px] text-white/60 font-body mt-1 leading-snug">Average Discovery-to-Launch Sprint</div>
              </div>
            </div>
            <div className="liquid-glass rounded-2xl p-5 w-[200px] flex gap-3 items-start text-left">
              <div className="liquid-glass rounded-xl h-10 w-10 flex items-center justify-center flex-shrink-0 text-white/70">
                <GlobeIcon />
              </div>
              <div>
                <div className="text-lg font-heading italic text-white leading-none">80+</div>
                <div className="text-[11px] text-white/60 font-body mt-1 leading-snug">Products Shipped Across Three Continents</div>
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </>
  )
}
