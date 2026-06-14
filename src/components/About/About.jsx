import { motion } from 'framer-motion'
import headshot from '../../assets/tj-cropped.jpg'
import styles from './About.module.css'

const SKILLS = [
  'TypeScript', 'JavaScript', 'React', 'React Native',
  'Python', 'Django', 'Java', 'Spring Boot',
  'Ruby', 'Rails', 'Node.js', 'Vue.js',
  'PostgreSQL', 'GraphQL', 'AWS', 'HTML · CSS',
]

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="section-label">about</p>
        <div className={styles.grid}>
          <div>
            <p className={styles.bio}>
              I'm <strong>Thomas Bachorz</strong> — though everyone calls me TJ.
              I'm a full-stack software engineer with 5+ years of production
              experience, based in Denver, CO. I'm passionate about leveraging AI
              tooling to multiply productivity and build smarter systems, and I
              take pride in end-to-end ownership — from technical design through
              production deployment.
            </p>
            <p className={styles.skillsLabel}>Technologies</p>
            <div className={styles.skills}>
              {SKILLS.map(skill => (
                <span key={skill} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>
          <div className={styles.photoWrap}>
            <img src={headshot} alt="TJ Bachorz" className={styles.photo} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
