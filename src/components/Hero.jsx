import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'

function useScramble(text, trigger = true) {
  const [display, setDisplay] = useState(text)
  const frame = useRef(0)
  const interval = useRef(null)

  const scramble = () => {
    let iteration = 0
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      setDisplay(
        text.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < iteration) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      )
      if (iteration >= text.length) clearInterval(interval.current)
      iteration += 0.4
    }, 30)
  }

  useEffect(() => {
    if (trigger) scramble()
    return () => clearInterval(interval.current)
  }, [trigger])

  return { display, scramble }
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const { display: tagDisplay, scramble: scrambleTag } = useScramble('AVAILABLE FOR OPPORTUNITIES')

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      
      <div className="orb w-96 h-96 top-1/4 -left-32" style={{ background: '#c9b99a' }} />
      <div className="orb w-72 h-72 bottom-1/4 right-0" style={{ background: '#4a7fa5', opacity: 0.08 }} />

      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full pt-24"
      >
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            onMouseEnter={scrambleTag}
            className="inline-flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] font-mono border px-4 py-2 rounded-sm transition-colors"
            style={{
              color: '#c9b99a',
              borderColor: 'rgba(201,185,154,0.25)',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {tagDisplay}
          </button>
        </motion.div>

        
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,6vw,5.5rem)]] leading-[0.9] tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif", color: '#f0e0e0' }}
          >
            Sonali
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,6vw,5.5rem)]] leading-[0.9] tracking-tight italic"
            style={{ fontFamily: "'DM Serif Display', serif", color: '#c9b99a' }}
          >
            Saini.
          </motion.h1>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p
            className="text-[13px] leading-[1.9] max-w-sm"
            style={{ color: '#6b7385', fontFamily: "'DM Mono', monospace" }}
          >
            Full-stack developer. Building production-grade web
            and mobile applications with Django, MERN, and Flutter.
            Based in Delhi, India.
          </p>

          <div className="flex gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase rounded-sm transition-all"
              style={{
                background: '#c9b99a',
                color: '#080c14',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              View Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, borderColor: 'rgba(201,185,154,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase rounded-sm border transition-all"
              style={{
                borderColor: 'rgba(255,255,255,0.1)',
                color: '#6b7385',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-8 md:left-16 flex items-center gap-3"
        style={{ color: '#4a2020', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.15em' }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(201,185,154,0.5), transparent)' }}
        />
        SCROLL
      </motion.div>
    </section>
  )
}
