import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 }
  const ringSpringConfig = { damping: 22, stiffness: 160, mass: 0.8 }

  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)
  const ringSmoothX = useSpring(ringX, ringSpringConfig)
  const ringSmoothY = useSpring(ringY, ringSpringConfig)

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }
    const down = () => setClicked(true)
    const up = () => setClicked(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: hovered ? 0 : clicked ? 6 : 7,
            height: hovered ? 0 : clicked ? 6 : 7,
            opacity: hovered ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full bg-accent"
          style={{ background: '#c9b99a' }}
        />
      </motion.div>

      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringSmoothX, y: ringSmoothY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: hovered ? 48 : clicked ? 24 : 36,
            height: hovered ? 48 : clicked ? 24 : 36,
            borderColor: hovered ? 'rgba(232,220,200,0.8)' : 'rgba(201,185,154,0.35)',
            scale: clicked ? 0.85 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="rounded-full border"
          style={{ border: '1px solid rgba(201,185,154,0.35)' }}
        />
      </motion.div>
    </>
  )
}
