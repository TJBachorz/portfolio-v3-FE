import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const FORMSPREE_URL = 'YOUR_FORMSPREE_URL'

const SOCIAL_LINKS = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/thomas-bachorz/' },
  { label: 'GitHub ↗', href: 'https://github.com/tjbachorz' },
  { label: 'Medium ↗', href: 'https://medium.com/@tjbachorz' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="section-label">contact</p>
        <div className={styles.grid}>
          <div>
            <p className={styles.intro}>
              Open to full-time roles and interesting side projects. Reach out
              below or connect on any of these platforms.
            </p>
            <nav className={styles.social}>
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {label}
                </a>
              ))}
              <a
                href="/TJ_Bachorz_Resume.pdf"
                download
                className={styles.socialLink}
              >
                Download Resume
              </a>
            </nav>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your name"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="your@email.com"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="What's on your mind?"
              />
            </div>
            {status === 'success' && (
              <p className={styles.successMsg}>Message sent — I'll be in touch!</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Try again or reach out on LinkedIn.
              </p>
            )}
            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
