import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript ES6+', 'Dart', 'SQL', 'HTML / CSS'] },
  { group: 'Frameworks', items: ['React.js', 'Django / DRF', 'Express.js', 'Flutter', 'Tailwind CSS'] },
  { group: 'Backend & DB', items: ['MongoDB / Mongoose', 'PostgreSQL', 'SQLite', 'JWT Auth', 'REST APIs'] },
  { group: 'DevOps & Tools', items: ['Git / GitHub', 'Vercel / Render', 'PythonAnywhere', 'Postman', 'VS Code'] },
]

function SkillGroup({ group, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <p
        className="text-[10px] tracking-[0.2em] uppercase mb-3"
        style={{ color: '#8a4040', fontFamily: "'DM Mono', monospace" }}
      >
        {group}
      </p>
      <ul className="space-y-1.5">
        {items.map(item => (
          <motion.li
            key={item}
            whileHover={{ x: 6, color: '#c49a8a' }}
            transition={{ duration: 0.15 }}
            className="text-[12px] pb-1.5 border-b"
            style={{
              color: '#6b7385',
              borderColor: 'rgba(255,255,255,0.05)',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <hr className="divider mb-32" />

      <div className="flex flex-col md:flex-row gap-24">
        {/* Left */}
        <div className="md:w-1/2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.2em] uppercase mb-4"
            style={{ color: '#8a4040', fontFamily: "'DM Mono', monospace" }}
          >
            About
          </motion.p>

          <div ref={ref} className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]"
              style={{ fontFamily: "'DM Serif Display', serif" ,  color: '#c49a8a' }}
            >
              Who I am
            </motion.h2>
          </div>

          <div className="space-y-5">
            {[
              <>I'm a <span style={{ color: '#c49a8a' }}>BCA student at GGSIPU</span> (graduating 2025) with hands-on experience building full-stack applications from scratch — database design to production deployment.</>,
              <>My work spans <span style={{ color: '#c49a8a' }}>Django REST APIs</span>, <span style={{ color: '#c49a8a' }}>MERN stack</span> applications, and a production <span style={{ color: '#c49a8a' }}>Flutter Android app</span> — all deployed and live. I'm comfortable owning the full lifecycle.</>,
              <>Currently looking for <span style={{ color: '#c49a8a' }}>junior full-stack or backend roles</span> where I can contribute to real products and keep growing fast.</>,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-[13px] leading-[1.9]"
                style={{ color: '#6b7385', fontFamily: "'DM Mono', monospace" }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.a
            href="https://github.com/sun0028"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-2 mt-10 text-[11px] tracking-[0.14em] uppercase border-b pb-1 transition-colors"
            style={{
              color: '#8a4040',
              borderColor: 'rgba(140,60,60,0.3)',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            github.com/sun0028 →
          </motion.a>
        </div>

        
        <div className="md:w-1/2 grid grid-cols-2 gap-10">
          {skills.map((s, i) => (
            <SkillGroup key={s.group} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
