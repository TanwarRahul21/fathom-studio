import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  highlightLastWord?: boolean
}

export default function BlurText({ text, className = '', highlightLastWord = false }: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const words = text.split(' ')

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={visible ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: i * 0.1,
            ease: 'easeOut',
          }}
          style={{ 
            display: 'inline-block', 
            marginRight: '0.25em',
            color: highlightLastWord && i === words.length - 1 ? 'var(--accent)' : undefined
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
