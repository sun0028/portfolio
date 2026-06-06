import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'


const EMAILJS_PUBLIC_KEY  = 'WKKW-ew85sFbuTp0e'
const EMAILJS_SERVICE_ID  = 'service_1pn4gd6'
const EMAILJS_TEMPLATE_ID = 'template_xj0763w'
// ────────────────────────────────────────────────────────────────────────────

const socials = [
  {
    label: 'github.com/sun0028',
    href: 'https://github.com/sun0028',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'sonali012428​@gmail.com',
    href: 'mailto:sonali012428​@gmail.com',  
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  
]

function FormInput({ label, name, type = 'text', textarea = false, required = true }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.18em] uppercase"
        style={{ color: '#c9b99a', fontFamily: "'DM Mono', monospace" }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          className="bg-transparent border rounded-sm px-4 py-3 text-[13px] outline-none resize-none transition-colors"
          style={{
            borderColor: 'rgba(255,255,255,0.07)',
            color: '#f0ebe3',
            fontFamily: "'DM Mono', monospace",
          }}
          onFocus={e => e.target.style.borderColor = 'rgba(201,185,154,0.4)'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="bg-transparent border rounded-sm px-4 py-3 text-[13px] outline-none transition-colors"
          style={{
            borderColor: 'rgba(255,255,255,0.07)',
            color: '#f0ebe3',
            fontFamily: "'DM Mono', monospace",
          }}
          onFocus={e => e.target.style.borderColor = 'rgba(201,185,154,0.4)'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true, margin: '-100px' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <hr className="divider mb-32" />

      <div className="flex flex-col md:flex-row gap-24">
        {/* Left */}
        <div className="md:w-2/5">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.2em] uppercase mb-4"
            style={{ color: '#c9b99a', fontFamily: "'DM Mono', monospace" }}
          >
            Contact
          </motion.p>

          <div ref={titleRef} className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Get in<br />
              <span style={{ color: '#c9b99a', fontStyle: 'italic' }}>Touch.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[13px] leading-[1.9] mb-10"
            style={{ color: '#6b7385', fontFamily: "'DM Mono', monospace" }}
          >
            Open to junior full-stack, backend, or frontend roles.
            Feel free to reach out — I reply promptly.
          </motion.p>

          <div className="space-y-0">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 py-4 border-b transition-colors"
                style={{
                  color: '#6b7385',
                  borderColor: 'rgba(255,255,255,0.05)',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '12px',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8dcc8'}
                onMouseLeave={e => e.currentTarget.style.color = '#6b7385'}
              >
                {s.icon}
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="md:w-3/5"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput label="Name" name="from_name" />
              <FormInput label="Email" name="reply_to" type="email" />
            </div>
            <FormInput label="Subject" name="subject" />
            <FormInput label="Message" name="message" textarea />

            {status === 'success' && (
              <p className="text-[12px] px-4 py-3 rounded-sm" style={{ background: 'rgba(29,158,117,0.1)', color: '#5dcaa5', border: '1px solid rgba(29,158,117,0.2)', fontFamily: "'DM Mono', monospace" }}>
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-[12px] px-4 py-3 rounded-sm" style={{ background: 'rgba(226,75,74,0.1)', color: '#f09595', border: '1px solid rgba(226,75,74,0.2)', fontFamily: "'DM Mono', monospace" }}>
                Something went wrong. Please email me directly.
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="self-start px-10 py-3.5 text-[11px] tracking-[0.14em] uppercase rounded-sm border transition-all disabled:opacity-50"
              style={{
                borderColor: 'rgba(201,185,154,0.3)',
                color: '#c9b99a',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
