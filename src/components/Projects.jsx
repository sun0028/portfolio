import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    num: '01',
    title: 'CrestHarbor',
    subtitle: 'Cross-Platform Job Board',
    desc: 'Dual-role job board (Employers & Job Seekers) with a Django REST API backend, web client, and production Android app in Flutter. Features RBAC with JWT, PDF resume upload, and employer notifications.',
    tags: ['Django REST', 'Flutter', 'Dart', 'SQLite', 'JWT', 'PythonAnywhere'],
    live: 'https://sonali028.pythonanywhere.com/',
    github: 'https://github.com/sun0028/CrestHarbor',
    year: '2024',
  },
  {
    num: '02',
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Management',
    desc: 'Full-stack MERN app with income/expense tracking across custom categories. Interactive doughnut charts, area-chart trends, JWT auth enforced on both backend and frontend, Redux Toolkit global state.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Chart.js', 'Tailwind'],
    live: 'https://etracker-lemon.vercel.app/',
    github: 'https://github.com/sun0028/Etracker',
    year: '2025',
  },
]

function ProjectItem({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="project-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-line" />
      <div className="py-8 grid md:grid-cols-[1fr_auto] gap-6 items-start">
        <div className="flex gap-6 md:gap-10 items-start">
          {/* Number */}
          <motion.span
            animate={{ color: hovered ? '#c9b99a' : '#2a2f3d' }}
            transition={{ duration: 0.2 }}
            className="text-[11px] tracking-widest pt-1 shrink-0"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.num}
          </motion.span>

          <div>
            {/* Title */}
            <div className="overflow-hidden mb-1">
              <motion.h3
                animate={{ y: hovered ? -2 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif", color: '#f0ebe3' }}
              >
                {project.title}
                <motion.span
                  animate={{ opacity: hovered ? 1 : 0, x: hovered ? 6 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[1.5rem] italic ml-3"
                  style={{ color: '#c9b99a' }}
                >
                  {project.subtitle}
                </motion.span>
              </motion.h3>
            </div>

            {/* Desc — expands on hover */}
            <AnimatePresence>
              {hovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[12px] leading-[1.9] mt-3 mb-4 max-w-xl overflow-hidden"
                  style={{ color: '#6b7385', fontFamily: "'DM Mono', monospace" }}
                >
                  {project.desc}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Tags */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0.4 }}
              className="flex flex-wrap gap-2 mt-3"
            >
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.08em] border rounded-sm px-2.5 py-1"
                  style={{
                    color: '#c9b99a',
                    borderColor: 'rgba(201,185,154,0.18)',
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: year + links */}
        <div className="flex flex-col items-end gap-4 shrink-0">
          <span
            className="text-[11px] tracking-widest"
            style={{ color: '#2a2f3d', fontFamily: "'DM Mono', monospace" }}
          >
            {project.year}
          </span>
          <div className="flex gap-4">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className="text-[10px] tracking-[0.14em] uppercase border-b pb-0.5 transition-colors"
              style={{
                color: hovered ? '#e8dcc8' : '#6b7385',
                borderColor: hovered ? 'rgba(232,220,200,0.4)' : 'rgba(107,115,133,0.3)',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Live ↗
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className="text-[10px] tracking-[0.14em] uppercase border-b pb-0.5 transition-colors"
              style={{
                color: hovered ? '#e8dcc8' : '#6b7385',
                borderColor: hovered ? 'rgba(232,220,200,0.4)' : 'rgba(107,115,133,0.3)',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              GitHub ↗
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <hr className="divider mb-32" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.2em] uppercase mb-4"
            style={{ color: '#c9b99a', fontFamily: "'DM Mono', monospace" }}
          >
            Work
          </motion.p>

          <div ref={ref} className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Selected Projects
            </motion.h2>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] max-w-xs text-right hidden md:block"
          style={{ color: '#6b7385', fontFamily: "'DM Mono', monospace", lineHeight: 1.8 }}
        >
          Hover each project to reveal details
        </motion.p>
      </div>

      <div>
        {projects.map((p, i) => (
          <ProjectItem key={p.num} project={p} index={i} />
        ))}
        <div className="project-line" />
      </div>
    </section>
  )
}
