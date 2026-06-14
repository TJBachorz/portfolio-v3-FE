import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="section-label">hello world</p>
        <h1 className={styles.name}>
          Thomas <span className={styles.nameAccent}>Bachorz</span>
        </h1>
        <p className={styles.title}>Full-Stack Software Developer</p>
        <p className={styles.tagline}>
          I build thoughtful, full-stack applications — from interactive maps
          and AR viewers to mobile data tools.
        </p>
        <div className={styles.ctas}>
          <a href="#work" className={styles.btnPrimary}>View my work ↓</a>
          <a
            href="/TJ_Bachorz_Resume.pdf"
            download
            className={styles.btnSecondary}
          >
            Download Resume
          </a>
        </div>
        <div className={styles.scrollHint}>
          <span className={styles.scrollLine} />
          Scroll to explore
        </div>
      </motion.div>
    </section>
  )
}
