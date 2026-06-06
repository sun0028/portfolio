import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t px-8 md:px-16 py-8 flex justify-between items-center" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[11px] tracking-widest"
        style={{ color: '#2a2f3d', fontFamily: "'DM Mono', monospace" }}
      >
        © 2025 Sonali Saini
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[11px] tracking-widest"
        style={{ color: '#2a2f3d', fontFamily: "'DM Mono', monospace" }}
      >
        Built with React · Framer Motion · Tailwind
      </motion.p>
    </footer>
  )
}
