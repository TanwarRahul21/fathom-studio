import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Twitter, Linkedin, Instagram, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { Reveal } from './Reveal'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setErrorMsg('')

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, budget, message }])

    if (error) {
      setFormState('error')
      setErrorMsg(error.message || 'Something went wrong. Please try again.')
    } else {
      setFormState('success')
    }
  }

  return (
    <section id="contact" className="bg-black pt-32 md:pt-40 pb-24 px-4 md:px-8 lg:px-16">
      <div>
        {/* Header */}
        <Reveal>
          <p className="text-sm text-white/80 font-body mb-3 tracking-widest uppercase">
            // Get in Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-heading italic text-white leading-[0.9] tracking-[-2px] mb-12 whitespace-pre-line">
            {"Let's Build Something\nThat Lasts"}
          </h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          {/* Left — Form / Success state */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[340px]"
                >
                  <CheckCircle2 className="w-10 h-10" style={{ color: 'var(--accent)' }} />
                  <p className="text-white text-lg font-body font-medium leading-snug">
                    Thanks — we'll be in touch<br />within one business day.
                  </p>
                  <p className="text-sm text-white/50 font-body">
                    Keep an eye on <span className="text-white/70">{email}</span>
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="liquid-glass rounded-2xl p-8 flex flex-col gap-5"
                  aria-label="Contact form"
                >
                  <div className="flex flex-col gap-1">
                    <label htmlFor="contact-name" className="text-xs text-white/50 font-body uppercase tracking-wider">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm font-body text-white placeholder-white/30 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="contact-email" className="text-xs text-white/50 font-body uppercase tracking-wider">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="hello@yourcompany.com"
                      className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm font-body text-white placeholder-white/30 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="contact-budget" className="text-xs text-white/50 font-body uppercase tracking-wider">Project Budget</label>
                    <select
                      id="contact-budget"
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                      className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm font-body text-white/80 transition-colors appearance-none cursor-pointer"
                      style={{ background: 'transparent' }}
                    >
                      <option value="" style={{ background: '#111' }}>Select a range</option>
                      <option value="under-10k" style={{ background: '#111' }}>Under $10k</option>
                      <option value="10k-30k" style={{ background: '#111' }}>$10k–$30k</option>
                      <option value="30k-plus" style={{ background: '#111' }}>$30k+</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="contact-message" className="text-xs text-white/50 font-body uppercase tracking-wider">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Tell us about your project..."
                      className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm font-body text-white placeholder-white/30 resize-none transition-colors"
                    />
                  </div>

                  {/* Inline error */}
                  {formState === 'error' && (
                    <div className="flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-body" style={{ background: 'rgba(220,60,60,0.15)', color: '#f87171' }}>
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={formState === 'submitting'}
                    className="rounded-full px-6 py-3 text-sm font-body font-medium text-white transition-colors mt-2 self-start flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'var(--accent)' }}
                    onMouseEnter={(e) => { if (formState !== 'submitting') (e.currentTarget.style.background = 'var(--accent-hover)') }}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
                  >
                    {formState === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
                    {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Right — Details */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex items-center gap-3 text-white/80">
                <div className="liquid-glass rounded-xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-body mb-0.5">Email</div>
                  <a
                    href="mailto:hello@fathomstudio.co"
                    className="text-sm font-body text-white nav-link hover:text-white/80 transition-colors"
                  >
                    hello@fathomstudio.co
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <div className="liquid-glass rounded-xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-body mb-0.5">Location</div>
                  <p className="text-sm font-body text-white/80">Remote-first — working with teams worldwide</p>
                </div>
              </div>

              {/* Socials */}
              <div>
                <div className="text-xs text-white/50 font-body mb-3 uppercase tracking-wider">Socials</div>
                <div className="flex gap-3">
                  {[
                    { Icon: Twitter, label: 'X / Twitter', href: '#' },
                    { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                    { Icon: Instagram, label: 'Instagram', href: '#' },
                  ].map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-white/60 transition-colors"
                      style={{ transition: 'color 0.2s' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '')}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mini blurb */}
              <div className="liquid-glass rounded-2xl p-6 mt-2">
                <p className="text-sm text-white/60 font-body font-light leading-relaxed">
                  We typically respond within one business day. For urgent timelines, feel free to mention it in your message and we'll do our best to accommodate.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-body max-w-5xl mx-auto">
          <span>© 2026 Fathom Studio. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {['Work', 'FAQ', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link text-white/40 hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
